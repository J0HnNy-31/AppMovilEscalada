import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'


@Component({
  selector: 'app-home-crear',
  templateUrl: './home-crear.page.html',
  styleUrls: ['./home-crear.page.scss'],
})
export class HomeCrearPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCrearAtras(){
    this.router.navigate(['/home-principal']);
  }

}
