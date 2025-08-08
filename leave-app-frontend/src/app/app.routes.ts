import { Routes } from '@angular/router';
import { LeaveRequestFormComponent } from './components/leave-request-form/leave-request-form.component';
import { LeaveRequestListComponent } from './components/leave-request-list/leave-request-list.component';

export const routes: Routes = [
    { path: '', component: LeaveRequestFormComponent },
    { path: 'submit', component: LeaveRequestFormComponent },
    { path: 'list', component: LeaveRequestListComponent }
];
