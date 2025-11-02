import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-service';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {

  userService = inject(UserService);

  users = this.userService.users;

  authService = inject(AuthService);

  router = inject(Router);
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
