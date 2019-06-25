import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ChildFormComponent } from './child-form/child-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    ChildFormComponent
  ],
  entryComponents: [
    ChildFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
