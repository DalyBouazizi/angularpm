import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ import this
import {TaskList} from '../task-list/task-list';
import { FormsModule } from '@angular/forms';  // ✅ Add this line
import { HighlightStatusDirective } from '../../highlight-status.js'; // ✅ AJOUT
import { ProjectDetail } from '../project-detail/project-detail.js'; // ✅ AJOUT


@Component({
  selector: 'app-projectlist',
  standalone: true,
  imports: [CommonModule,TaskList,FormsModule,HighlightStatusDirective,ProjectDetail],
  templateUrl: './projectlist.html',
  styleUrl: './projectlist.css'
})
export class Projectlist {


  title = 'Project Manager';

  searchTerm: string = '';

  selectedProject: any = null; // Pour afficher les détails

  projects = [
    {
      name: 'Projet 1',
      description: 'Description 1',
      dateDeb: new Date('2023-05-10'),
      dateFin: new Date('2025-10-17'),
      status: 'En cours',
      tasks: [
        { title: 'Tâche 1', priority: 'Haute', status: 'Terminé' },
        { title: 'Tâche 2', priority: 'Moyenne', status: 'En cours' }
      ]
    },
    {
      name: 'Projet 2',
      description: 'Description 2',
      dateDeb: new Date('2024-01-15'),
      dateFin: new Date('2026-02-10'),
      status: 'Terminé',
      tasks: [
        { title: 'Tâche 1', priority: 'Basse', status: 'Terminé' }
      ]
    },
    {
      name: 'Projet 3',
      description: 'Description 3',
      dateDeb: new Date('2025-02-05'),
      dateFin: new Date('2026-02-10'),
      status: 'En cours',
      tasks: [
        { title: 'Tâche 1', priority: 'Moyenne', status: 'En attente' }
      ]
    }
  ];

  // Méthode pour filtrer les projets
  get filteredProjects() {
    return this.projects.filter(project => 
      project.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Méthode pour sélectionner un projet
  selectProject(project: any) {
    this.selectedProject = project;
  }


}
