import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Message } from '../models/Message';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http, private httpClient: HttpClient) { }


  saveMessage(params: Message): Observable<any> {
    let header = new Headers();
    header.append('Content-type', 'application/json');
    return this.http.post('/api/save/item', { text: params }, { headers: header })
      .pipe(map(result => result.json()));
  }

  getDecryptoMessage(params: Message): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const para = new HttpParams()
      .set('url', params.url)
      .set('pwd', params.pwd)

      return this.httpClient.get(`/api/get/crypto/item/${para}`, {headers:headers})
      .pipe(map(result => result));
  }

}
