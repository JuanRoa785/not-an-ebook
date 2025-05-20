import { Component,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-verif',
  standalone: true,
  imports: [],
  templateUrl: './modal-verif.component.html',
  styleUrl: './modal-verif.component.css'
})
export class ModalVerifComponent {
  constructor(
    public activeModal: NgbActiveModal,
  ) { }
  
  @Input() modal!: {
    titulo: string,
    mensaje: string,
  }

  @Input() tareaARealizar!: () => void;

  closeModal() {
    this.activeModal.close()
  }

  ejecutarTarea() {
    if (this.tareaARealizar) {
      this.tareaARealizar();
    }
    this.closeModal();
  }
}
