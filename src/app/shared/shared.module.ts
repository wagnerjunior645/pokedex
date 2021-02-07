import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonNumberPipe } from './pipes/pokemonNumber.pipe';
import { RemoveDotPipe } from './pipes/remove-dot.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { LoadScreenComponent } from './components/load-screen/load-screen.component';

@NgModule({
  declarations: [PokemonNumberPipe, RemoveDotPipe, LoaderComponent, LoadScreenComponent],
  imports: [CommonModule, CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    CommonModule,
    PokemonNumberPipe,
    RemoveDotPipe,
    ReactiveFormsModule,
    FormsModule,
    LoaderComponent,
  ],
})
export class SharedModule {}
