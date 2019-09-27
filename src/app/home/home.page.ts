import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Filme, FilmesService } from '../filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filmes: Array<Filme>;
  status = "Pendente";

  constructor(
    public router: Router,
    private filmeService: FilmesService
  ) {}

  ionViewWillEnter() {
    this.listar();
}

  Inserir(){
    this.router.navigate(['cadastro']);
  }
  listar(){
    this.filmes = this.filmeService.listar(this.status);
  }
  assistir(filme){
    this.filmeService.assistir(filme);
    this.listar();
  }
}
