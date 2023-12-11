import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-dejanos-mensaje',
  templateUrl: './home-dejanos-mensaje.page.html',
  styleUrls: ['./home-dejanos-mensaje.page.scss'],
})
export class HomeDejanosMensajePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDejanosMensaje(){
    this.router.navigate(['/home-configuracion']);
  }

}
