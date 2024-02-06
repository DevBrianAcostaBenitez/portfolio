import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CodeProyectsComponent } from './components/code-proyects/code-proyects.component';
import { DesignProyectsComponent } from './components/design-proyects/design-proyects.component';
const routes: Routes = [
  { path: '', component: AboutComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
