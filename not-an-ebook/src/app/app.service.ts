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

        return this.http.get<any[]>(this.url + `/direccion/usuario/${idUsuario}`, { headers });
    }

    actualizarDireccion(direccion:any){
        const token = this.tokenService.getToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        var formatJson:any = {
            pais: direccion.pais,
            region: direccion.region,
            ciudad: direccion.ciudad,
            codigo_postal: direccion.codigo_postal,
            direccion: direccion.direccion,
            usuario: {
                id: direccion.idUsuario
            }
        }

        if (direccion.id && direccion.id !== 0) {
            formatJson['id'] = direccion.id;
            return this.http.put(`${this.url}/direccion/${direccion.id}`, formatJson, { headers });
        }

        return this.http.post(this.url + `/direccion/ingresarDireccion`, formatJson, { headers });
    }

    eliminarDireccion(direccion:any){
        const token = this.tokenService.getToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.delete(this.url + `/direccion/${direccion.id}`, { headers });
    }

    actualizarPerfil(usuario: any) {
        const token = this.tokenService.getToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        var formatJson: any = {
            name: usuario.nombres,
            apellidos: usuario.apellidos,
            correo: usuario.email,
            telefono: usuario.telefono,
        }

        return this.http.put(this.url + `/auth/update`, formatJson, { headers });
    }

    actualizarContrasena(usuario: any, password:string) {
        const token = this.tokenService.getToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        var formatJson: any = {
            name: usuario.nombres,
            apellidos: usuario.apellidos,
            correo: usuario.email,
            telefono: usuario.telefono,
            contrasena: password
        }

        return this.http.put(this.url + `/auth/update`, formatJson, { headers });
    }

    getLibroByID(idLibro:number){
        const token = this.tokenService.getToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.get(this.url + `/libro/${idLibro}`, { headers });
    }

    gestionarLibro(libro:any) {
        const token = this.tokenService.getToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        var formatJson: any = {
            generoLiterario: {
                id: libro.generoLiterarioId
            },
            nombre: libro.nombre,
            sinopsis: libro.sinopsis,
            id_portada: 'Cloudinary_ID',
            portada: libro.portada,
            precio: libro.precio,
            impuesto: libro.impuesto,
            stock: libro.stock,
            autor: libro.autor,
            editorial: libro.editorial,
            edicion: libro.edicion,
            fecha_publicacion: libro.fecha_publicacion,
            idioma: libro.idioma,
            numero_paginas: libro.numero_paginas,
            coleccion: libro.coleccion
        }

        if (libro.id != 0) {
            formatJson['id'] = libro.id;
            formatJson['id_portada'] = libro.id_portada;
            return this.http.put(this.url + `/libro/${libro.id}`, formatJson, { headers });
        }

        return this.http.post(this.url + `/libro/crearLibro`, formatJson, { headers });
    }

    eliminarLibro(idLibro:number) {
        const token = this.tokenService.getToken();
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return this.http.delete(this.url + `/libro/${idLibro}`, { headers });
    }

}