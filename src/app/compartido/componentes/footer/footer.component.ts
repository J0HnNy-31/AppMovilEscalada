import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onUsuarios(){
    this.router.navigate(['/home-usuarios']);
  }

  onHome(){
    this.router.navigate(['/home-principal']);
  }

  onGps(){
    this.router.navigate(['/home-gps']);
  }

}
