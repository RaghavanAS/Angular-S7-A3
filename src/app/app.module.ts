import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ChangeColorDirective } from './change-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ChangeColorDirective

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
