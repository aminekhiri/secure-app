import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDto } from '../types/user-dto';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private http = inject(HttpClient);

  //signal des utilisateurs
  users = signal<UserDto[]>([]);

  //charge la liste des utilisateurs
  loadAll(): void {
    //je vais une requete HTTP vers le backend pour récupérer les utilisateurs
    this.http.get<UserDto[]>(`${environment.apiUrl}/users`, {
      withCredentials: true
    }).subscribe({
      next: (users) => {
        this.users.set(users); //met à jour le signal avec la liste des utilisateurs
      },
      error: (err) => {
        console.error('Erreur lors du chargement des utilisateurs:', err);
        this.users.set([]); //en cas d'erreur, on vide la liste
      }
    });
  }
  
}
