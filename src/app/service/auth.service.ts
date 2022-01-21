import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserCredentials } from '../model/UserCredencials';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  credentials(userCredentials: UserLogin): Observable<UserCredentials>{
    return this.http.put<UserCredentials>('https://blogpessoalalancarloss.herokuapp.com/usuarios/logar', userCredentials)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://blogpessoalalancarloss.herokuapp.com/usuarios/save', user)
  }
}
