import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './componets/app.component';
import { StoryComponent } from './componets/story/story.component';
import { StartComponent } from './componets/start/start.component';
import { InvetoryComponent } from './componets/inventory/inventory.component';
import { FightComponent } from './componets/fight/fight.component';
import { CharacterComponent } from './componets/character-creation/character-creation.component';
import { GameControllerService } from './services/game-controller.service';


const routes: Routes = [
	{path: "", component: StartComponent},
	{path: "story", component: StoryComponent},
	{path: "character-creation", component: CharacterComponent},
	{path: "fight", component: FightComponent},
	{path: "**", redirectTo: ""}
]

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CharacterComponent,
    StoryComponent,
    InvetoryComponent,
    FightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GameControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
