import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule }    from '@angular/common/http';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { SpeedTestLineGraphComponent } from './speed-test-line-graph/speed-test-line-graph.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HomeComponent,
    SpeedTestLineGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    SharedModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    ChartsModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
