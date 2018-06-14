import { Hero, Monster, Weapon, Armor} from './character'



export enum CharacterAction {
	attack = "Attack",
	sneak = "Sneak",
	persuade = "Persuade",
	doNothing = "Do Nothing"
}

export enum FailureOptions {
	gameOver, 
	nextChapter
}

export enum SuccessOptions {
	rewardExperience,
	rewardEquipment,
	addHeroToParty
}


//cotainer of logic of the chapter
export class Chapter {

	story: string[];
	options: CharacterAction[];
	enemyParty: Monster[];
	sneakPersuadeFail: CharacterAction;
	ifFail: FailureOptions;
	isSucced: SuccessOptions[];
	rewards: {
		experience: number;
		equipment: (Weapon | Armor)[];
		newHero: Hero;
	}

	nextChapter: Chapter;


}