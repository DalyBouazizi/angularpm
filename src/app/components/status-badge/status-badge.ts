import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.css'
})
export class StatusBadge {

  @Input() status: string = '';
}
