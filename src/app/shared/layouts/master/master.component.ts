import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../component/nav-bar/nav-bar.component';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

}
