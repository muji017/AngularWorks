import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { IntPhoneComponent } from './int-phone/int-phone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SampleComponent } from './performance/components/sample/sample.component';
import { ForloadingPipe } from './performance/pipes/forloading.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ParentComponent,
    ChildComponent,
    IntPhoneComponent,
    SampleComponent,
    ForloadingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
