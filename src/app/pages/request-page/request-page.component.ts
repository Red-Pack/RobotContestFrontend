import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Для редиректа
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css'],
})
export class RequestPageComponent {
  form: FormGroup;
  formSubmitted = false;
  successMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      city: ['', Validators.required],
      institution: ['', Validators.required],
      teamName: ['', Validators.required],
      robotName: ['', Validators.required],
      participants: this.fb.array([this.createParticipant()]),
      leaderName: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{10}$/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      comments: [''],
    });
  }

  get participants(): FormArray {
    return this.form.get('participants') as FormArray;
  }

  createParticipant(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
    });
  }

  addParticipant(): void {
    this.participants.push(this.createParticipant());
  }

  removeParticipant(index: number): void {
    this.participants.removeAt(index);
  }

  submitForm(): void {
    this.formSubmitted = true;

    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      this.successMessage = 'Форма успешно отправлена!';
      setTimeout(() => {
        this.router.navigate(['/']); // Редирект на домашнюю страницу
      }, 2000);

      // Сброс формы
      this.formSubmitted = false;
      this.form.reset();
      while (this.participants.length > 1) {
        this.participants.removeAt(1);
      }
    }
  }
}
