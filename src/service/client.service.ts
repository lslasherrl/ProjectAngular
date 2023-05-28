import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class clientService {
  constructor(private httpClient: HttpClient) {}
  public url: string = 'https://jsonplaceholder.typicode.com/';


  public get apiData() : Observable<any> {
    return this.httpClient.get(this.url + 'posts').pipe((params: any)=>params)

  }
  public apiDelete(id: any){
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    return this.httpClient.delete(url)
  }

  public apiPatch(dados: any){
    const url = `https://jsonplaceholder.typicode.com/posts/${dados.id}`
    const cond = {title: dados.title, body: dados.body, id: dados.id, userId: dados.userId};
   return this.httpClient.patch(url, cond);
  }
}
