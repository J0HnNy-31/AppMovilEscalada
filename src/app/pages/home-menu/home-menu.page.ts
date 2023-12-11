import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.page.html',
  styleUrls: ['./home-menu.page.scss'],
})
export class HomeMenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCerrar(){
    this.router.navigate(['/home-principal']);
  }

}
