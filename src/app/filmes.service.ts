import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private filmesCollection: AngularFirestoreCollection<Filme>
  filmes: Observable<Filme[]>;

  genero = [
    { descricao: 'Ação' },
    { descricao: 'Aventura' },
    { descricao: 'Terror' },
    { descricao: 'Suspense' },
    { descricao: 'Comedia' }
  ];

  constructor(private afs: AngularFirestore) {
    this.filmesCollection = afs.collection<Filme>('filme');
    this.filmes = this.filmesCollection.valueChanges();
  }

  public inserir(filme: Filme) {
    const id = this.afs.createId();
    return this.filmesCollection.doc(id).set({...filme,id});
  }

  public remover(filme: Filme) {  
    return this.filmesCollection.doc(filme.id).delete();
  }
  public assistir(filme: Filme) {
    return this.filmesCollection.doc(filme.id).update({status: 'Assistido'});
  }
  public listar(status: String): Observable<Filme[]> {
    return this.filmes;
  }
  public listarGenero(): Array<Genero> {
    return this.genero;
  }
}

export class Filme {
  id: string;
  nome: string;
  genero: Genero;
  duracao: number;
  status: string;

  constructor() {
    this.status = 'Pendente';
  }

  public assitir() {
    this.status = 'Assistido'
  }
}

export class Genero {
  descricao: String;
}