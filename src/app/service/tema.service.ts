import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://blogpessoalalancarloss.herokuapp.com/temas/all', this.token)
  }


  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://blogpessoalalancarloss.herokuapp.com/temas/${id}`, this.token)
  }

  getByTema(tema: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://blogpessoalalancarloss.herokuapp.com/temas/tema/${tema}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://blogpessoalalancarloss.herokuapp.com/temas/save', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://blogpessoalalancarloss.herokuapp.com/temas/update', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://blogpessoalalancarloss.herokuapp.com/temas/${id}`, this.token)
  }
}
