import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('https://blogpessoalalancarloss.herokuapp.com/postagens/all', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`https://blogpessoalalancarloss.herokuapp.com/postagens/id/${id}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>('https://blogpessoalalancarloss.herokuapp.com/postagens/save', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://blogpessoalalancarloss.herokuapp.com/postagens/update', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://blogpessoalalancarloss.herokuapp.com/postagens/${id}`, this.token)
  }
}