import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../../shared/component/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatInput } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, CardComponent, MatCardModule, MatInput, MatFormFieldModule, RouterLink, FormsModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private router: Router = inject(Router);
  constructor(private toastrService: ToastrService, private _snackBar: MatSnackBar) {}

  onSubmit(){
    this._snackBar.open('Logged in!', 'X', {verticalPosition: 'top'})
    this.router.navigate(['/messages']);
  }
}
