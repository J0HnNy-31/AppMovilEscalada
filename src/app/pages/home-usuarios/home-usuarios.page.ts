import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-usuarios',
  templateUrl: './home-usuarios.page.html',
  styleUrls: ['./home-usuarios.page.scss'],
})
export class HomeUsuariosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onConfiguracion(){
    this.router.navigate(['/home-configuracion']);
  }

}
