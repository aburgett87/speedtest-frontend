import boto3
import argparse
import os.path
import uuid
import pprint
import os

parser = argparse.ArgumentParser(description='Create/Update speedtest frontend stack')

parser.add_argument('--environment', dest='environment', default="Staging",
                    help='the environment to create')

args = parser.parse_args()
environment = args.environment

cloudformation = boto3.client('cloudformation')

stackname = 'speedtest-frontend-' + environment

stackexists = False
script_dir = os.path.dirname(os.path.abspath(__file__))
template_file = open(script_dir + os.path.sep + 'infrastructure.template.yaml', 'r')
temaplte_body = template_file.read()
template_file.close()

try:
  cloudformation.describe_stacks(StackName=stackname)
  stackexists = True
except boto3.exceptions.botocore.exceptions.ClientError:
  print(stackname + ' does not exist')



if stackexists is False:
  print('Creating stack...')
  cloudformation.create_stack(StackName=stackname, TemplateBody=temaplte_body)
  cloudformation.get_waiter('stack_create_complete').wait(StackName=stackname)
  print('Stack created')
else:
  print('Checking if stack update is required...')
  change_set_name = str(uuid.uuid4())
  details = cloudformation.create_change_set(StackName=stackname, TemplateBody=temaplte_body, ChangeSetName=change_set_name)
  change_set = cloudformation.describe_change_set(ChangeSetName=change_set_name, StackName=stackname)
  if change_set['Status'] == 'FAILED':
    print('No update required.')
  else :
    cloudformation.get_waiter('change_set_create_complete').wait(ChangeSetName=change_set_name, StackName=stackname)
    print('Update required')
    print('Updating stack...')
    cloudformation.execute_change_set(ChangeSetName=change_set_name, StackName=stackname)
    cloudformation.get_waiter('stack_update_complete').wait(StackName=stackname)
    print('Stack updated')

