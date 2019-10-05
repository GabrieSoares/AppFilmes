import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Filme, FilmesService } from '../filmes.service';
import { Observable } from 'rxjs';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filmes: Observable<Filme[]>;
  status = "Pendente";

  constructor(
    public router: Router,
    private filmeService: FilmesService,
    private socialSharing: SocialSharing,
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
  remover(filme){
    this.filmeService.remover(filme);
    this.listar();
  }
  compartilhar(){
    this.socialSharing.share('Assita o filme');
  }
}
