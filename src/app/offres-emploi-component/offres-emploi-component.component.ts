import { Component, Input, OnInit } from '@angular/core';
import { Emploi } from 'src/model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

  listeEmploi : Emploi[] = [
    {reference: '0',titre: 'developer',entreprise: 'google',etat: true},
    {reference: '1',titre: 'quality analyst',entreprise: 'amazon',etat: true},
    {reference: '2',titre: 'business analyst',entreprise: 'fnac',etat: false},
    {reference: '3',titre: 'scrum master',entreprise: 'microsoft',etat: true},
  ];

  tousLesEmp : Emploi[] = [
    {reference: '0',titre: 'developer',entreprise: 'google',etat: true},
    {reference: '1',titre: 'quality analyst',entreprise: 'amazon',etat: true},
    {reference: '2',titre: 'business analyst',entreprise: 'fnac',etat: false},
    {reference: '3',titre: 'scrum master',entreprise: 'microsoft',etat: true},
  ];

  bilan: number=0;
  countFunction = () =>{
    this.bilan = this.listeEmploi.filter(item => item.etat===true).length ;
  }
  term = '';

  filtrerEmplois = () => {    
    this.listeEmploi = this.tousLesEmp.filter( elem => elem.entreprise.includes(this.term) );
  }

constructor() { }

ngOnInit(): void {

  

}

}
