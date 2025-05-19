import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { UsuarioRegistro } from './models/usuario-registro.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
    url = environment.Url;

    constructor(
        private http: HttpClient,
        private tokenService:TokenService
    ) {}

    getGenerosLiterarios(): Observable<any> {
        return this.http.get(this.url + '/libro/generos-ordenados');
    }

    getLibros(): Observable<any> {
        return this.http.get(this.url + '/libro/listarLibros');
    }

    getLibrosFlitrados(nombre:string, genero:string): Observable<any> {
        const params = new HttpParams()
            .set('nombre', nombre)
            .set('genero', genero);
        return this.http.get(this.url + '/libro/filtrar_libros', { params });
    }

    registrarUsuario(infoRegUser: UsuarioRegistro) {
        return this.http.post(this.url + '/auth/register', infoRegUser);
    }

    iniciarSesion(correo:string, contrasena:string) {
        const body = {
            "email": correo,
            "password": contrasena
        }
        return this.http.post(this.url + '/auth/login', body);
    }

    getDireccion(idUsuario:number){
        const token = this.tokenService.getToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.get(this.url + `/direccion/usuario/${idUsuario}`, { headers });
    }
}