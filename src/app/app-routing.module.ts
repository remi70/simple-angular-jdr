import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent} from './pages/accueil/accueil.component'
import { CombatComponent} from './pages/combat/combat.component'

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  {path:'combat', component: CombatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
