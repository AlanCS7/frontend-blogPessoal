import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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

  atualizar(user: User): Observable<User>{
    return this.http.put<User>('https://blogpessoalalancarloss.herokuapp.com/usuarios/update', user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://blogpessoalalancarloss.herokuapp.com/usuarios/${id}`)
  }

  logado() {
    let ok = false
    
    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  adm(){
    let ok = false
    
    if(environment.tipo == 'adm'){
      ok = true
    }

    return ok
  }
}
