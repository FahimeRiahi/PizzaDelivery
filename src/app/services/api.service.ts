import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from '../configuration/config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient) {
  }


  get(url: string, query: string ) {
    let headers = new HttpHeaders();
    headers = headers
      .set('Content-Type', 'application/json');
    return this.httpClient.get(Config.getUrl() + url + query, {headers});
  }

  post(url: string, body: any) {

    let headers = new HttpHeaders();
    headers = headers
      .set('Content-Type', 'application/json');
    return this.httpClient.post(Config.getUrl() + url, body, {headers});

  }

  put(url: string, body: any) {

    let headers = new HttpHeaders();
    headers = headers
      .set('Content-Type', 'application/json');
    return this.httpClient.put(Config.getUrl() + url, body, {headers});

  }

  delete(url: string) {
    let headers = new HttpHeaders();
    headers = headers
      .set('Content-Type', 'application/json');
    return this.httpClient.delete(Config.getUrl() + url, {headers});
  }
}
