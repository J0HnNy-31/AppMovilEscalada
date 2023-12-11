import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.page.html',
  styleUrls: ['./home-principal.page.scss'],
})
export class HomePrincipalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUsuarios(){
    this.router.navigate(['/home-usuarios']);
  }

  onHomeMenu(){
    this.router.navigate(['/home-menu']);
  }

  onHomeBuscar(){
    this.router.navigate(['/home-buscar']);
  }

  onHomeCrear(){
    this.router.navigate(['/home-crear']);
  }
}
