import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  filmes: Array<Filme>;

  genero = [
    { descricao: 'Ação' },
    { descricao: 'Aventura' },
    { descricao: 'Terror' },
    { descricao: 'Suspense' },
    { descricao: 'Comedia' }
  ];

  constructor() {
    this.filmes = [];
  }

  public inserir(filme: Filme): boolean {
    console.log('Estou inserindo');
    this.filmes.push(filme);
    return true;
  }
  public remover(filme: Filme): boolean {
    console.log('Estou removendo');
    console.log(filme);
    return true;
  }
  public assistir(filme: Filme): boolean {
    this.filmes.map(
      elemento => {
        if (elemento === filme) {
          elemento.assitir();
        }
      }
    );
    return true;
  }
  public listar(status: String): Array<Filme> {
    return this.filmes.filter(
      elemento => elemento.status === status
    );
  }
  public listarGenero(): Array<Genero> {
    return this.genero;
  }
}

export class Filme {
  nome: String;
  genero: Genero;
  duracao: number;
  status: String;

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