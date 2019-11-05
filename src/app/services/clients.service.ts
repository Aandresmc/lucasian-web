import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  constructor(private _http: HttpClient) { }
  getUsers() {
    return this._http.get(`${baseUrl}/posts`).toPromise()
  }
}

