import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordService } from '../../core/services/password.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  passwordService = inject(PasswordService);
  formBuilder = inject(FormBuilder);
  message: string | null = null;

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, this.passwordService.passwordMatchValidator()],
    ],
  });

  public onSubmit(): void {
    this.message = null;
    if (this.loginForm.valid) {
      console.log('Formulaire envoyé avec succès', this.loginForm.value);
      this.message = 'Login Validé';
    } else {
      console.log('Formulaire invalidé');
      this.message = 'Veuillez vérifier vos informations.';
    }
  }

  public onReset(): void {
    this.message = null;
  }
}
