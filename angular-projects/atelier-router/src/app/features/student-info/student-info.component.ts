import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-info',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.scss',
})
export class StudentInfoComponent {
  studentName!: string;
  route: ActivatedRoute = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.studentName = String(params.get('studentName'));
    });
  }
}
