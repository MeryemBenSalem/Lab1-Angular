import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  public color: string = ''; 

 
  // Méthode pour réinitialiser la couleur par défaut
  resetColor(divElement: HTMLElement) {
    this.color = ''; // Réinitialiser la couleur de la variable
    divElement.style.background = 'white'; // Réinitialiser la couleur du div à blanc
  }

}
