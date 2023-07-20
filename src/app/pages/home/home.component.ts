import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  constructor() {}

  newsItems = [
    {
      title: 'Nuova politica aziendale',
      content: 'Abbiamo implementato una nuova politica di lavoro flessibile.',
      date: new Date('2023-07-18')
    },
    {
      title: 'Benvenuto ai nuovi dipendenti',
      content: 'Accogliamo a braccia aperte i nostri nuovi membri del team.',
      date: new Date('2023-07-15')
    },
    {
      title: 'Risultati trimestrali',
      content: 'I nostri risultati finanziari del trimestre sono stati eccezionali.',
      date: new Date('2023-07-10')
    }
  ];
}
