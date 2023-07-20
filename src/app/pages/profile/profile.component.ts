import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 7,
      FirstName: 'Serge',
      LastName: 'Guea',
      Prefix: 'Mr.',
      Position: 'Front End Developer',
      Picture: '',
      BirthDate: new Date('1999/10/5'),
      HireDate: new Date('2023/05/06'),
      /* tslint:disable-next-line:max-line-length */
      Notes:'Serge Guea è uno sviluppatore front-end con una passione per apprendimento e un amore per lo sviluppo di applicazioni web. Attualmente sta lavorando a tempo pieno come sviluppatore front-end presso una società  TAS GROUP , e ha lavorato con una varietà di tecnologie web e di programmazione, tra cui C ++, Java,Typescript, JavaScript, HTML, CSS, SQL . Inoltre, ha esperienza con le librerie e i framework JavaScript come  Angular ',
      Address: 'via virgilio 19 Formia.'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
