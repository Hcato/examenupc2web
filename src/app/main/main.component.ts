import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ServiceService } from '../service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
export interface pokemon{
  name: string;
  url: string;
}
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, MatInputModule, MatFormFieldModule, MatButtonModule, MatTableModule, HttpClientModule, CommonModule, MatIconModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{
  favoritePokemons: Set<string> = new Set();
  displayedColumns: string[] = ['name', 'url'];
  pokemons: pokemon[] = [];
constructor(private get : ServiceService){}
ngOnInit(): void {
  this.get.getPokemons().subscribe({
    next: (data) => {
      this.pokemons = this.pokemons = data.results;;
    },
    error: (error) => {
      console.error('Error al obtener los pokemons', error);
    }
  });
}
getIdFromUrl(url: string): string {
  const parts = url.split('/');
  return parts[parts.length - 2];
}

toggleFavorite(pokemonName: string): void {
  if (this.favoritePokemons.has(pokemonName)) {
    this.favoritePokemons.delete(pokemonName); // Remover si ya es favorito
  } else {
    this.favoritePokemons.add(pokemonName); // Agregar como favorito
  }
}

isFavorite(pokemonName: string): boolean {
  return this.favoritePokemons.has(pokemonName);
}
}