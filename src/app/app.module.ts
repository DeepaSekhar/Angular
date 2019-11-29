import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from "./courses.service";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    //step2.add all the components parts of this app
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
