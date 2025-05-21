import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from '../../token.service';

@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.css'
})
export class MenuAdminComponent {
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private tokenService: TokenService
  ) {
    this.tokenService.isAuthenticated().subscribe(
      (isAuth) => {
        if (!isAuth) {
          alert("No has iniciado sesión, por favor hazlo e intenta nuevamente.");
          this.router.navigate(['/login']);
        }
      }
    )
  }

  logout() {
    this.tokenService.clearToken();
    window.location.href = '/';
  }
}
