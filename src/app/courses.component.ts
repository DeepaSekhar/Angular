//1.create a component
import {Component} from "@angular/core"
import {CoursesService} from "./courses.service";
@Component({//Html mark up to render this app
    selector:'courses',
    template:`<h2>Courses</h2> {{title}}
    <ul >
    <li *ngFor="let course of courses">{{course}}</li> 
    </ul>`
})

export class CoursesComponent{
    title="list of courses here";
    courses;

    constructor(service:CoursesService){
        this.courses=service.getCourses();


    }
    

}
//2.Register this component in an module.Here currently one module its app (->app.module.ts)
//3. selector render the component in (component.html)