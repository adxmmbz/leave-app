import { Component, OnInit } from '@angular/core';
import { LeaveService, LeaveRequest } from '../../services/leave.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leave-request-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave-request-list.component.html',
  styleUrl: './leave-request-list.component.css',
})
export class LeaveRequestListComponent implements OnInit {
  leaves: LeaveRequest[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.loadLeaves();
  }

  loadLeaves(): void {
    this.leaveService.getAll().subscribe({
      next: (data) => {
        this.leaves = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load leave requests.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  approve(id: number): void {
    this.leaveService.approve(id).subscribe({
      next: () => this.loadLeaves(),
      error: (err) => console.error(err)
    });
  }

  reject(id: number): void {
    this.leaveService.reject(id).subscribe({
      next: () => this.loadLeaves(),
      error: (err) => console.error(err)
    });
  }
}
