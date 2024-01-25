import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/component/nav-bar/nav-bar.component';
import { CardComponent } from '../../shared/component/card/card.component';
@Component({
  selector: 'app-compose',
  standalone: true,
  imports: [NavBarComponent, CardComponent],
  templateUrl: './compose.component.html',
  styleUrl: './compose.component.scss'
})
export class ComposeComponent {

}
