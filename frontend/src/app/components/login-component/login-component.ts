import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent {

  authService = inject(AuthService);
  router = inject(Router);

  onSubmit(login: string, password: string): void {
    // Handle login submission
    this.authService.login(login, password);

    setTimeout(() => { // Attendre la fin de la tentative de login
      if (this.authService.error()) { // Si erreur, on affiche un message d'erreur
        console.log('Erreur login:', this.authService.error());
    
      }
      else if (this.authService.isLoggedIn()) { //si connecté, on navigue vers home
        console.log('Utilisateur connecté avec succès');
        this.router.navigate(['/home']);
      }
      else if (this.authService.isLoading()) { // Si en cours de chargement, on affiche un message de chargement
        console.log('Chargement en cours...');
      }
    }, 500); // délai arbitraire pour laisser le temps à la requête de se terminer
  }

}
