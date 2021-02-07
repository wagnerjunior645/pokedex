import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { LoginComponent } from './auth/login/login.component';
import { FavoriteCardComponent } from './components/favorite-card/favorite-card.component';

@NgModule({
  declarations: [HomeComponent, PokemonCardComponent, SearchBarComponent, PokemonDetailsComponent, LoginComponent, FavoriteCardComponent],
  imports: [HttpClientModule, SharedModule],
})
export class CoreModule {}
