import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Filme, FilmesService } from '../filmes.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

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
    public alertController: AlertController,
  ) { }

  ionViewWillEnter() {
    this.listar();
  }

  Inserir() {
    this.router.navigate(['cadastro']);
  }
  listar() {
    this.filmes = this.filmeService.listar(this.status);
  }
  assistir(filme) {
    this.filmeService.assistir(filme);
    this.listar();
  }
 
  async remover(filme) {
    const alert = await this.alertController.create({
      header: 'Exclusão',
      message: `Deseja realmente excluir o filme <strong>${filme.nome}</strong>, está operação é Irreversível?`,
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Sim',
          handler: () => {
            this.filmeService.remover(filme);
            this.listar();
          }
        }
      ]
    });

    await alert.present();
  }

  compartilhar(filme: Filme){
    const menssagem = `Estou compartilhando ${filme.nome} pois ele é muito bom`;
    this.socialSharing.share(menssagem, 'Filme');
  }
}
