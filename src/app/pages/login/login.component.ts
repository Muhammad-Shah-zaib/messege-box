import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../../shared/component/card/card.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, CardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private toastrService: ToastrService, private _snackBar: MatSnackBar) {}

  onSubmit(){
    this._snackBar.open('SUccess', 'drop', { verticalPosition : 'top'})

  }
}
