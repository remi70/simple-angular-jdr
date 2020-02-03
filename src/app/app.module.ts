import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CombatComponent } from './pages/combat/combat.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HerosformComponent } from './components/herosform/herosform.component';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { HeroslistComponent } from './components/heroslist/heroslist.component';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CombatComponent,
    SidenavComponent,
    HeaderComponent,
    HerosformComponent,
    HeroslistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    BrowserAnimationsModule,
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    InputTextModule,
    TableModule
    
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
