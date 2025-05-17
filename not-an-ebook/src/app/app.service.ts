import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
    url = environment.Url;

    constructor(
        private http: HttpClient
    ) {}

    getGenerosLiterarios(): Observable<any> {
        return this.http.get(this.url + '/libro/generos-ordenados');
    }

    getLibros(): Observable<any> {
        return this.http.get(this.url + '/libro/listarLibros');
    }
}