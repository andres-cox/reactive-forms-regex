import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormValidatorsComponent } from './form-validators/form-validators.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent, 
    FormComponent, 
    FormGroupComponent, 
    HeaderComponent, FormBuilderComponent, FormValidatorsComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
