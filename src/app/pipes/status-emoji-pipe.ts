import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusEmoji',
  standalone: true
})
export class StatusEmojiPipe implements PipeTransform {
  transform(status: string): string {
    switch (status) {
      case 'Terminé':
        return '✅';
      case 'En cours':
        return '🔄';
      case 'En attente':
        return '⏳';
      default:
        return '❓';
    }
  }
}