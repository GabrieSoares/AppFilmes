import { Component, OnInit } from '@angular/core';
import { Filme, Genero, FilmesService } from '../filmes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  filme: Filme;
  generos: Array<Genero>;
  constructor(
    public filmesService: FilmesService,
    public router: Router,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.filme = new Filme();
    this.generos = this.filmesService.listarGenero();
  }

  Gravar() {
    if (this.filmesService.inserir(this.filme)) {
      console.log("Gravado com Sucesso");
      this.router.navigate(['home']);
    }
  }


  async voltar() {
    const alert = await this.alertController.create({
      header: 'Cancelar',
      message: `<strong>Deseja realmente sair sem Gravar?</strong>`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Sim',
          handler: () => {
            this.router.navigate(['home']);
          }
        }
      ]
    });

    await alert.present();
  }

}
