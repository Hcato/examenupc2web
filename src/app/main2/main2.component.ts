import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { CommonModule } from '@angular/common';
import { ReplaceVowelsPipe } from '../pipe/replace-vowels.pipe';

@Component({
  selector: 'app-main2',
  standalone: true,
  imports: [RouterLink, CommonModule, ReplaceVowelsPipe],
  templateUrl: './main2.component.html',
  styleUrl: './main2.component.scss'
})
export class Main2Component {
  pokemon: any; 
  

  constructor(
    private route: ActivatedRoute,
    private pokemonService: ServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getPokemonDetails(id);
    });
  }

  getPokemonDetails(id: string): void {
    this.pokemonService.getPokemonById(id).subscribe(
      (data) => {
        this.pokemon = data;
      }
    );
  }
}
