import { Component,EventEmitter,Input, Output  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightStatusDirective } from '../../highlight-status.js'; // ✅ AJOUT
import {PriorityColorPipe } from '../../pipes/priority-color-pipe.js'; 
import { StatusEmojiPipe } from '../../pipes/status-emoji-pipe.js';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,HighlightStatusDirective,PriorityColorPipe,StatusEmojiPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  @Input() tasks: any[] = [];
  @Output() statusChanged = new EventEmitter<any>();

  changeStatus(task: any) {
    // Cycle through statuses: En attente -> En cours -> Terminé -> En attente
    if (task.status === 'En attente') {
      task.status = 'En cours';
    } else if (task.status === 'En cours') {
      task.status = 'Terminé';
    } else {
      task.status = 'En attente';
    }
    
    
    this.statusChanged.emit(task);
  }
}
