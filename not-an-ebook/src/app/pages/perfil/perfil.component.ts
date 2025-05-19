import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../../token.service';
import { AppService } from '../../app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDireccionComponent } from '../../components/modal-direccion/modal-direccion.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ 
    NgClass,
    CommonModule, 
    FormsModule,
  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent  implements OnInit{
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private modalService:NgbModal,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  isPasswordVisible: boolean = false;
  isRepeatPasswordVisible:boolean = false;

  togglePasswordsVisibility(firstPassword:boolean) {
    if (firstPassword) {
      this.isPasswordVisible = !this.isPasswordVisible;
    } else {
      this.isRepeatPasswordVisible = !this.isRepeatPasswordVisible;
    }
  }

  user: any = {
    "id": 0,
    "nombres": "N.A",
    "apellidos": "",
    "email": "N.A",
    "telefono": "N.A",
    "cuenta_activa": true,
    "tipoUsuario": {
      "id": 0,
      "nombre": "string",
      "descripcion": "string"
    }
  }

  direccion: any = {
    "id": 0,
    "pais": "N.A",
    "region": "N.A",
    "ciudad": "N.A",
    "codigo_postal": "N.A",
    "direccion": "N.A",
    "idUsuario": 0,
    "nombreUsuario": "N.A"
  };

  getUserData(){
    this.tokenService.getUser().subscribe(
      (response) => {
        this.user = response;
        this.getDireccion();
      },
      (error) => {
        console.error('Error obteniendo la info del usuario:', error);
      }
    );
  }

  getDireccion(){
    this.appService.getDireccion(this.user.id).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error('Error obteniendo la dirección del usuario:', error);
      }
    );
  }

  openModalDireccion() {
    const modalRef = this.modalService.open(ModalDireccionComponent);
    
    //Generamos una copia de this.direccion para que sean "independientes"
    modalRef.componentInstance.address = JSON.parse(JSON.stringify(this.direccion));
    
    modalRef.closed.subscribe(() => {
      this.getDireccion();
    });
  }
}
