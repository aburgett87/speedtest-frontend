import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestResultsService } from './services/test-results.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TestResultsService,
    AuthService
  ]
})
export class SharedModule { }
