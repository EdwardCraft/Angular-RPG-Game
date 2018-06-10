import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Hero , Weapon, Armor, Monster, checkRace} from '../models/character';
import { Chapter, SuccessOptions, } from '../models/chapter';
import { Chapter1 } from '../chapters/Chapter1';
import { Warrior, Ranger, Rogue, Priest, ExperienceToLevel} from '../models/character'
import { GenderOptions, RaceOptions, ClassOptions } from "../models/character-options";


@Injectable()
export class GameControllerService {
	constructor(private router: Router) {}

	mainCharacter: Hero;
	currentChapter: Chapter = Chapter1;
	isFighting: boolean = false;

	actionDelay: number = 1500;
	heroParty: Hero[] = [];
	partyInventory: (Weapon | Armor)[] = [];
	availableHeroes:  Hero[] = [];
	enemyParty: Monster[] = this.currentChapter.enemyParty;


	setMainCharacter(character) {
		switch (character.class) {
			case ClassOptions.warrior:
				this.mainCharacter = new Warrior(character.name, character.gender, 
					character.race, 1, 10, {attack: 0, sneak: 0, persuade: 0, intelligence: 0},
					new Weapon("knife", 1, 3), new Armor("Clothes", 0));
				break;
			case ClassOptions.ranger:
				this.mainCharacter = new Ranger(character.name, character.gender, 
					character.race, 1, 10, {attack: 0, sneak: 0, persuade: 0, intelligence: 0},
					new Weapon("knife", 1, 3), new Armor("Clothes", 0));
				break;
			case ClassOptions.rogue:
				this.mainCharacter = new Rogue(character.name, character.gender, 
					character.race, 1, 10, {attack: 0, sneak: 0, persuade: 0, intelligence: 0},
					new Weapon("knife", 1, 3), new Armor("Clothes", 0));
				break;
			case ClassOptions.priest:
				this.mainCharacter = new Priest(character.name, character.gender, 
					character.race, 1, 10, {attack: 0, sneak: 0, persuade: 0, intelligence: 0},
					new Weapon("knife", 1, 3), new Armor("Clothes", 0));
				break;
			default:
				// code...
				break;
		}

		checkRace(this.mainCharacter);
		this.heroParty.push(this.mainCharacter);
		this.router.navigateByUrl('/story');


	}


	encounerSuccess(): string[] {
		let messages: string[] = [];
		this.currentChapter.isSucced.forEach(reward => {
			switch (reward) {
				case SuccessOptions.rewardExperience:
					messages.push(`Each menber of the party received ${this.currentChapter.rewards.experience}. experience.`);
					this.heroParty.forEach(hero => {
						hero.experience +=  this.currentChapter.rewards.experience;
						if(hero.experience >= ExperienceToLevel[hero.level]){
							messages.push(`${hero.name} leveled up! Upgrade their stats on the inventory screen.`);
							hero.levelUp();
						}
					});
					break;
				case SuccessOptions.rewardEquipment:
					messages.push('You received the following equipment: ');
					this.currentChapter.rewards.equipment.forEach(equipment => {
						if(equipment instanceof Armor) {
							messages.push(`${equipment.name} -- Attack Barrier Bonus: ${equipment.attackBariesBonus}`);
						}else {
							messages.push(`${equipment.name} -- Min Damage: ${equipment.minDamage}, Max Damage: ${equipment.maxDamage}`);
						}

						this.partyInventory.push(equipment);
					});
					break;
				case SuccessOptions.addHeroToParty:
					let newHero: Hero = this.currentChapter.rewards.newHero;
					if(this.heroParty.length < 3) {
						messages.push(`A new hero joined the party Combo Amigos! ${newHero.name} - ${newHero.characterRole} - ${newHero.level}`);
						this.heroParty.push(newHero);
					}else {
						messages.push(`A new Hero is available to joined the party Combo Amigos! ${newHero.name} - ${newHero.characterRole} - ${newHero.level}`);
						this.availableHeroes.push(newHero);
					}
					break;
				default:
					// code...
					break;
			}
		});
		return messages;
	}

	nextChapter(): void{
		this.heroParty.forEach(hero =>  hero.rest());
		this.currentChapter = this.currentChapter.nextChapter;
		this.enemyParty = this.currentChapter.enemyParty;
	}

	gameOver(): void {
		this.mainCharacter = undefined;
		this.currentChapter = Chapter1;
		this.heroParty = [];
		this.partyInventory = [];
		this.availableHeroes = [];
		this.enemyParty = this.currentChapter.enemyParty;

		this.router.navigateByUrl("/");
	}



}