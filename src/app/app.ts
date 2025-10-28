import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Projectlist } from "./components/projectlist/projectlist";

@Component({
  selector: 'app-root',
standalone: true,
  imports: [ Projectlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pr_mn');
}
