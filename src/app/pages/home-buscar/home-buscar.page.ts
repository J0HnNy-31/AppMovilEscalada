import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-buscar',
  templateUrl: './home-buscar.page.html',
  styleUrls: ['./home-buscar.page.scss'],
})
export class HomeBuscarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBuscar(){
    this.router.navigate(['/home-principal']);
  }


}
