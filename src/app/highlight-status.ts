import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightStatus]',
  standalone: true
})
export class HighlightStatusDirective implements OnInit {
  // ✅ Input pour recevoir le statut
  @Input() appHighlightStatus: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.applyBackground();
  }

  private applyBackground() {
    switch (this.appHighlightStatus) {
      case 'Terminé':
        this.el.nativeElement.style.backgroundColor = '#FFFFFF';
        break;
      case 'En cours':
        this.el.nativeElement.style.backgroundColor = '#FFFFFF';
        break;
      case 'En attente':
        this.el.nativeElement.style.backgroundColor = '#FFFFFF';
        break;
      default:
        this.el.nativeElement.style.backgroundColor = '#FFFFFF';
    }
  }
}