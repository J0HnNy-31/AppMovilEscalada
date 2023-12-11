import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home-gps',
  templateUrl: './home-gps.page.html',
  styleUrls: ['./home-gps.page.scss'],
})
export class HomeGpsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onHomeBuscar(){
    this.router.navigate(['/home-buscar']);
  }


}
