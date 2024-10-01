import { Routes } from '@angular/router';
import { SearchComponent } from './features/search/search.component';
import { StudentInfoComponent } from './features/student-info/student-info.component';

export const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'wcs/:studentName', component: StudentInfoComponent },
  { path: '**', redirectTo: '' },
];
