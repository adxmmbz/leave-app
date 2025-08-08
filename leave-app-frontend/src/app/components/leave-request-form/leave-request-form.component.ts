import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaveService, LeaveRequest } from '../../services/leave.service';

@Component({
  selector: 'app-leave-request-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leave-request-form.component.html',
  styleUrl: './leave-request-form.component.css',
})
export class LeaveRequestFormComponent {
  leave: LeaveRequest = {
    userId: 1,
    type: '',
    reason: '',
    startDate: '',
    endDate: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private leaveService: LeaveService) {}

  submitLeaveRequest(): void {
    this.leaveService.create(this.leave).subscribe({
      next: () => {
        this.successMessage = 'Leave request submitted successfully.';
        this.errorMessage = '';
        this.leave = {
          userId: 1,
          type: '',
          reason: '',
          startDate: '',
          endDate: ''
        };
      },
      error: (err) => {
        this.successMessage = '';
        this.errorMessage = 'Failed to submit leave request.';
        console.error(err);
      }
    });
  }
}
