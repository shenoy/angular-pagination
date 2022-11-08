import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from  '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Person, PersonsRequest, User } from './interfaces/Person';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  persons$ : BehaviorSubject<any> = new BehaviorSubject<any>([]);

  users$:BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  get persons(){
    console.log(this.persons$,"-------persons$ in service-----------");
    return this.persons$.asObservable();
  }

  get users(){
    return this.users$.asObservable();
  }

  constructor(private httpClient: HttpClient) { }

  findPersons(req : PersonsRequest){

    console.log("persons Request ------------> ", req);

// let headers = new HttpHeaders();
// headers = headers
// .set( 'Access-Control-Allow-Origin', '*')
// .set('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');

// const options = {                                                                                                                                                                                 
//   headers: headers
// };

    return this.httpClient.get<any>(`http://localhost:8080/api/people?page=${req.page}&size=${req.size}`)
    .subscribe(x=>this.persons$.next(x));
  }

  // findUsers(){
  //   this.httpClient.get<any>("https://jsonplaceholder.typicode.com/posts")
  //   .subscribe(x=>console.log("-----------",x));
  //   return this.httpClient.get<any>("https://jsonplaceholder.typicode.com/posts").subscribe(x=>this.users$.next(x));
  // }


}
