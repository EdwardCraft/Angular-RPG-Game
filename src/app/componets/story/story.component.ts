import { Component } from '@angular/core';
import { GameControllerService } from "../../services/game-controller.service";
import { CharacterAction, SuccessOptions, FailureOptions } from '../../models/chapter';
import { Hero, Monster } from '../../models/character';
import { Router } from '@angular/router';

@Component({
	selector: "story-component",
	templateUrl: "./story.component.html",
	styleUrls: ["./story.component.css"]	
})

export class StoryComponent{
	constructor(private gameControllerService: GameControllerService,
		private router: Router) {};

	currentChapter = this.gameControllerService.currentChapter;
	heroParty: Hero[] = this.gameControllerService.heroParty;
	enemyParty: Monster[] = this.gameControllerService.enemyParty;

	actionDelay: number = this.gameControllerService.actionDelay;
	displayMessage: string = "";
	successMessages: string[] = [];
	showNextChapterButton: boolean = false;


	chooseAction(action: string): void {
		if(this.successMessages.length){
			return;
		}

		this.displayMessage = `You decide to $(action).`;
		setTimeout(() =>{
			switch (action) {
				case CharacterAction.attack:
					this.tryAttack();
					break;
				case CharacterAction.sneak:
					this.trySneak();
					break;
				case CharacterAction.persuade:
					this.tryPersuade();
					break;
				case CharacterAction.doNothing:
					this.doNothing();
					break;
				default:
					console.log("Something went horribly wrong");
					break;
			}
		}, this.actionDelay);
	}

	tryAttack(): void {
		this.gameControllerService.isFighting = true;
		this.router.navigateByUrl("/fight");
	}

	trySneak(): void {
		let sneakBarrier = 0;
		let sneakPower = 0;
		this.enemyParty.forEach(enemy => {
			sneakBarrier += enemy.barriers.sneak;
		});
		this.heroParty.forEach(hero => {
			sneakPower += hero.sneak();
		});
		if(sneakPower >= sneakBarrier) {
			this.displayMessage = 'Your attempt at sneaking was a success!';
			setTimeout(() => {
				this.onSuccess();
			}, this.actionDelay);
		} else {
			this.displayMessage = 'Your attempt at sneaking has failed!'
			setTimeout(() => {
				this.onSneakPersuadeFailure();
			},this.actionDelay);
		}
	}

	tryPersuade(): void {
		let persuadeBarrier = 0;
		let persuadePower = 0;
		this.enemyParty.forEach(enemy => {
			persuadeBarrier += enemy.barriers.persuade;
		});
		this.heroParty.forEach(hero => {
			persuadePower += hero.sneak();
		});
		if(persuadePower >= persuadeBarrier) {
			this.displayMessage = 'Your attempt at persuasion was a success!';
			setTimeout(() => {
				this.onSuccess();
			}, this.actionDelay);
		} else {
			this.displayMessage = 'Your attempt at persuacion has failed!'
			setTimeout(() => {
				this.onSneakPersuadeFailure();
			},this.actionDelay);
		}
	}

	doNothing(): void {
		this.displayMessage = 'You decide to do nothing and move on.'
		setTimeout(() => {
			this.nextChaper();
		},this.actionDelay);
	}

	onSuccess(): void {
		this.successMessages = this.gameControllerService.encounerSuccess();
		this.showNextChapterButton = true;
	}

	onSneakPersuadeFailure(): void {
		switch (this.currentChapter.sneakPersuadeFail) {
			case CharacterAction.attack:
				this.displayMessage = 'The enemy attacks you.';
				setTimeout(() => {
					this.tryAttack();
				}, this.actionDelay);
				break;
			case CharacterAction.doNothing:
				this.displayMessage = 'Your failure spoiled the opportunity and  your ';
				setTimeout(() => {
					this.nextChaper();
				},this.actionDelay);
				break;

			default:
			
				break;
		}
	}

	nextChaper(): void{
		this.gameControllerService.nextChapter();
		this.currentChapter = this.gameControllerService.currentChapter;
		this.heroParty = this.gameControllerService.heroParty;
		this.enemyParty = this.currentChapter.enemyParty;
		this.displayMessage = "";
		this.successMessages = [];
		this.showNextChapterButton = false;
	}

}