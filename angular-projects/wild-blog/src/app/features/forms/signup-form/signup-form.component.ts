import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { PasswordService } from '../../../core/services/password.service';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss',
})
export class SignupFormComponent {
  passwordService = inject(PasswordService);
  formBuilder = inject(FormBuilder);

  signupForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    passwords: this.formBuilder.group(
      {
        password: [
          '',
          [Validators.required, this.passwordService.securePasswordValidator()],
        ],
        confirmPassword: [''],
      },
      { validators: this.passwordService.passwordMatchValidator() }
    ),
  });

  public onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Formulaire envoyé avec succès', this.signupForm.value);
    } else {
      console.log('Formulaire invalidé');
    }
  }
}
