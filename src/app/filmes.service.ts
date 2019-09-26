import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  genero = [
    {descricao: 'Ação'},
    {descricao: 'Aventura'},
    {descricao: 'Terror'},
    {descricao: 'Suspense'},
    {descricao: 'Comedia'}
  ];

  constructor() { }

  public inseir(filme: Filme): boolean{
    console.log('Estou inserindo');
    console.log(filme);
    return true;
  }
  public remover(filme: Filme): boolean{
    console.log('Estou removendo');
    console.log(filme);
    return true;
  }
  public assistir(filme: Filme): boolean{
    console.log('Estou Assistindo');
    console.log(filme);
    return true;
  }
  public listar(status: String): Array<Filme>{
    console.log('Estou Listando');
    console.log(status);
    return[];
  }
  public listarGenero(): Array<Genero>{
    return this.genero;
  }
}

export class Filme{
  nome:String;
  genero:Genero;
  duracao:number;
  status:String;
}

export class Genero{
  descricao: String;
}