import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-modal-direccion',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './modal-direccion.component.html',
  styleUrl: './modal-direccion.component.css'
})
export class ModalDireccionComponent {

  constructor(
    public activeModal: NgbActiveModal, 
    private appService: AppService) { 
  }

  @Input() address!: {
    id: number,
    pais: string,
    region: string,
    ciudad: string,
    codigo_postal: string,
    direccion: string,
    idUsuario: number,
    nombreUsuario: string
  }
        
  /*Estructura POST y UPDATE:
    direccion: {
      pais: string,
      region: string,
      ciudad: string,
      codigo_postal: string,
      direccion: string,
      usuario: {
        id: number
      }
    }
  */

  strError:String = "";

  closeVerifModal() {
    this.activeModal.close()
  }
}
