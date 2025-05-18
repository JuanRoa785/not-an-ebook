import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getGenerosLiterarios(); 
  }

  generosLiterarios: any[] = [];
  generosCol1: any[] = [];
  generosCol2: any[] = [];

  getGenerosLiterarios(): void {
    this.appService.getGenerosLiterarios().subscribe(
      (response) => {
        this.generosLiterarios = response; //Ya vienen ordenados
        this.generosLiterarios = this.generosLiterarios.slice(0, 12);
        this.generosCol1 = response.slice(0, 6);
        this.generosCol2 = response.slice(6, 12);
      },
      (error) => {
        console.error('Error cargando los generos Literarios:', error);
      }
    );
  }

  searchByGenero(genero: string) {
    this.router.navigate(['/buscarLibro'], { queryParams: { titulo: '', genero: genero } });
  }
}
