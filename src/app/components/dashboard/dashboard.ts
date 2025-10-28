import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  @Input() projects: any[] = [];

  // Calculate total number of projects
  getTotalProjects(): number {
    return this.projects.length;
  }

  // Calculate total number of tasks across all projects
  getTotalTasks(): number {
    return this.projects.reduce((sum, project) => {
      return sum + (project.tasks ? project.tasks.length : 0);
    }, 0);
  }

  // Calculate total completed tasks across all projects
  getCompletedTasks(): number {
    return this.projects.reduce((sum, project) => {
      if (!project.tasks) return sum;
      return sum + project.tasks.filter((t: any) => t.status === 'Terminé').length;
    }, 0);
  }

  // Calculate global progress percentage
  getGlobalProgress(): number {
    const total = this.getTotalTasks();
    if (total === 0) return 0;
    return (this.getCompletedTasks() / total) * 100;
  }

  // Get stroke-dashoffset for progress ring (circumference = 2 * π * radius)
  getProgressRingOffset(): number {
    const radius = 54; // radius of the circle
    const circumference = 2 * Math.PI * radius;
    const progress = this.getGlobalProgress();
    return circumference - (progress / 100) * circumference;
  }
}
