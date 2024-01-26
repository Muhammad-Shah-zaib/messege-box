import { state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor() { }

  toggelHeader( header: HTMLElement, btn: MatIconButton ): void {
    // header.style.maxHeight = '1px'
    btn._elementRef.nativeElement.classList.toggle('rotate-180')

    if (header.style.maxHeight === '1px') {
      header.style.maxHeight = '100px'
    } else {
      header.style.maxHeight = '1px'
    }
  }
}
function trigger(arg0: string, arg1: any[]): any {
  throw new Error('Function not implemented.');
}

