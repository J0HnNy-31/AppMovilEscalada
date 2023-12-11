import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componentes/header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderPrincipalComponent } from './componentes/header-principal/header-principal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderPrincipalComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderPrincipalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CompartidoModule { }
