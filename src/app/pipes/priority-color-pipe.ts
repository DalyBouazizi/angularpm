import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityColor',
  standalone: true
})
export class PriorityColorPipe implements PipeTransform {
  // ✅ Transforme la priorité en classe Tailwind
  transform(priority: string): string {
    switch (priority) {
      case 'Haute':
        return 'text-red-500';
      case 'Moyenne':
        return 'text-yellow-500';
      case 'Basse':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  }
}