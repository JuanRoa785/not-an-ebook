import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tituloLibro = params['titulo'];
    });
  }

  tituloLibro:string = "";

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }
  
  onSearch() {
    this.router.navigate(['/buscarLibro'], { queryParams: { titulo: this.tituloLibro, genero: "" } });
  }

  redirect(destino:string) {
    switch (destino) {
      case 'home':
        this.router.navigate(['/'])
        break;
    
      default:
        break;
    }
  }
  
}
