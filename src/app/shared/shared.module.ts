import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestResultsService } from './services/test-results.service';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorisationInterceptor } from './authorisation.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TestResultsService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorisationInterceptor, multi: true }
  ]
})
export class SharedModule { }
