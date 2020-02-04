import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HerosHttpService {

  private url:string = "http://localhost:3000/heros"
  
  constructor(private http:HttpClient) { }

  getHeros(){
    return this.http.get(this.url);
  }

  getHeros1(id){
    return this.http.get(this.url+`/${id}`);
  }

  /*saveHeros(h:Heros){
return this.http.post(this.url,h);
  }*/
}
