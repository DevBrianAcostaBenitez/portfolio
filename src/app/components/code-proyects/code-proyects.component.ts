import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-proyects',
  templateUrl: './code-proyects.component.html',
  styleUrls: ['./code-proyects.component.scss']
})
export class CodeProyectsComponent {
  constructor(private router: Router) {}
  openLinkInNewTab(link: string) {
    window.open(link, '_blank');
  }
  navigateToDesigns() {
    this.router.navigate(['/diseños']);
  }
}
