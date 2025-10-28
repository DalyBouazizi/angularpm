import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendlyDate',
  standalone: true
})
export class FriendlyDatePipe implements PipeTransform {
  transform(value: Date): string {
    const today = new Date();
    const inputDate = new Date(value);
    
    // Réinitialiser les heures pour comparer uniquement les jours
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);
    
    const diffTime = today.getTime() - inputDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'Aujourd\'hui';
    } else if (diffDays === 1) {
      return 'Hier';
    } else if (diffDays === -1) {
      return 'Demain';
    } else if (diffDays > 1 && diffDays < 7) {
      return `Il y a ${diffDays} jours`;
    } else if (diffDays >= 7 && diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `Il y a ${weeks} semaine${weeks > 1 ? 's' : ''}`;
    } else if (diffDays >= 30 && diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `Il y a ${months} mois`;
    } else if (diffDays >= 365) {
      const years = Math.floor(diffDays / 365);
      return `Il y a ${years} an${years > 1 ? 's' : ''}`;
    } else if (diffDays < -1 && diffDays > -7) {
      return `Dans ${Math.abs(diffDays)} jours`;
    } else if (diffDays <= -7) {
      return inputDate.toLocaleDateString('fr-FR');
    }
    
    return inputDate.toLocaleDateString('fr-FR');
  }
}