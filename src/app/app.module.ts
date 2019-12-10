import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FusionAgenntMaterialModule} from '../material-module';

import {UxgGlobalNav} from './global-nav/global-nav';
import {UxgToolbar} from './toolbar/toolbar';
import {UxgSidenav} from './sidenav/sidenav';
import {UxgAppContent} from './app-content/app-content';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingComponent } from './onboarding/onboarding.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FusionAgenntMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  entryComponents: [UxgGlobalNav],
  declarations: [
    UxgGlobalNav,
    UxgToolbar,
    UxgSidenav,
    UxgAppContent,
    AppComponent,
    OnboardingComponent
  ],
  bootstrap: [UxgGlobalNav],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);