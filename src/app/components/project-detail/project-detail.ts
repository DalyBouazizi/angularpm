import { Component,Input  } from '@angular/core';
import { TaskList } from '../task-list/task-list.js'; // ✅ AJOUT
import { CommonModule } from '@angular/common';
import { FriendlyDatePipe } from '../../pipes/friendly-date-pipe.js'; 
import { StatusBadge } from '../status-badge/status-badge.js'; // ✅ ADD THIS

@Component({
  selector: 'app-project-detail',
  imports: [TaskList,CommonModule,FriendlyDatePipe,StatusBadge],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {
  @Input() project: any;

  getProgress() {
    if (!this.project || !this.project.tasks || this.project.tasks.length === 0) {
      return 0;
    }
    return (this.project.tasks.filter((t: any) => t.status === 'Terminé').length / 
            this.project.tasks.length) * 100;
  }


  getCompletedTasksCount(): number {
    if (!this.project || !this.project.tasks) return 0;
    return this.project.tasks.filter((t: any) => t.status === 'Terminé').length;
  }

 // ✅ NEW: Auto-update project status based on tasks
 onStatusChanged(task: any) {
  console.log('Statut de la tâche changé:', task);
  
  // Update project status automatically
  const progress = this.getProgress();
  
  if (progress === 100) {
    this.project.status = 'Terminé';
  } else {
    this.project.status = 'En cours';
  
  }
}

}
