import { Component, OnInit } from '@angular/core';
import { TokenService } from '../security/token.service';
import {CargarScriptsService} from "./../cargar-scripts.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;
  nombreUsuario = "";

  constructor(private tokenService: TokenService,
              private cargaScripts:CargarScriptsService) {
    console.log("MenuComponent >>> constructor >>> " + this.tokenService.getToken());
    cargaScripts.Carga(["main"]);
  }

  ngOnInit() {
    console.log("MenuComponent >>> ngOnInit >>> " + this.tokenService.getToken());
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserNameComplete()|| '{}';
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
