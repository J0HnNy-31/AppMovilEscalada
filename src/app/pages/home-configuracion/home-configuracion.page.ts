import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-configuracion',
  templateUrl: './home-configuracion.page.html',
  styleUrls: ['./home-configuracion.page.scss'],
})
export class HomeConfiguracionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAtras(){
    this.router.navigate(['/home-usuarios']);
  }

  onIrDejanosmensaje(){
    this.router.navigate(['/home-dejanos-mensaje']);
  }



}
