import { Component } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent {
  
  nom: string = 'Inna';
  prenom: string = 'Corman';
  job: string = 'Product Manager';
  image: string = 'assets/images/rotating_card_profile.png';
  citation: string = 'I\'m the new Sinatra, and since I made it here I can make it anywhere.';
  description: string = 'Web design, Adobe Photoshop, HTML5, CSS3, Corel, and many others...';
  motsCle: string = 'HTML, CSS, JS, PHP';

}
