import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './interfaces/Person';
import { ServiceService } from './service.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { NgLetDirective } from "./ng-let.directive";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit {

  persons$:Observable<any> = new Observable();
  persons: Person[] = [];
  currentPage:number = 0;

  constructor(private readonly service:ServiceService){
  }


  ngOnInit() {

    this.persons$ = this.service.persons;
    this.persons$.subscribe(x=>this.persons=x?.content);
    this.service.findPersons({page:this.currentPage, size:10});

    console.log(this.persons,"--------------------persons array");
    console.log(this.persons$,"---...........................---persons observable");

  }

  setPage(event:any){
    console.log(event.offset,"-------------event.offset");
    this.currentPage=event.offset;
    this.service.findPersons({page:this.currentPage, size:10});
  }

  onSort(event:any){
    console.log(event, "----------onsort");
  }

}
