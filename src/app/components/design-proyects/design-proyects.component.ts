import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-design-proyects',
  templateUrl: './design-proyects.component.html',
  styleUrls: ['./design-proyects.component.scss']
})
export class DesignProyectsComponent {
  constructor(private router: Router) {}
  openLinkInNewTab(link: string) {
    window.open(link, '_blank');
  }
  navigateToProyects() {
    this.router.navigate(['/proyectos']);
  }
}
