import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CodeProyectsComponent } from './components/code-proyects/code-proyects.component';
import { DesignProyectsComponent } from './components/design-proyects/design-proyects.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent }, 
  { path: 'diseños', component:  DesignProyectsComponent }, 
  { path: 'proyectos', component: CodeProyectsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
