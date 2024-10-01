import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  studentName!: string;

  router: Router = inject(Router);
  public onSubmit() {
    if (this.studentName) {
      this.router.navigate(['/wcs', this.studentName]);
    }
  }
}
