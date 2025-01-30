import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[]  = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;

  deleteLastHeroe(): void {
    this.deletedHero = this.heroNames.pop();

    console.log(`Deleted heroe: ${this.deletedHero}`);
  }
}
