import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface LeaveRequest {
  id?: number;
  userId: number;
  type: string;
  reason?: string;
  startDate: string;
  endDate: string;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private apiUrl = 'http://localhost:5255/api/leaveRequests';

  constructor(private http: HttpClient) { }

  getAll(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(this.apiUrl);
  }

  create(leave: LeaveRequest): Observable<LeaveRequest> {
    return this.http.post<LeaveRequest>(this.apiUrl, leave);
  }

  approve(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/approve`, {});
  }

  reject(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/reject`, {});
  }
}
