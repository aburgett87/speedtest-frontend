export interface SpeedTestResult {
  location: string;
  executionDateTime: string;
  averageDownloadSpeed: number;
  maximumDownloadSpeed: number;
  averageUploadSpeed: number;
  maximumUploadSpeed: number;
  latency: number;
  testServerName: string;
  nodeName: string;
}
