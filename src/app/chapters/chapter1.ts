import  { Chapter, CharacterAction, FailureOptions, SuccessOptions} from "../models/chapter";
import  { Weapon, Armor, Monster, Warrior } from '../models/character';
import  { GenderOptions, RaceOptions, ClassOptions } from "../models/character-options";


export const Chapter1: Chapter = {
	story: [
		"Some despicable monster and smelly eate your favorite yogurt, and now you whant revenge!!.",
		"Shenanigans ensue and an enconter begins. Now que question is: How do you want to react?"
	],
	options: [
		CharacterAction.attack,
		CharacterAction.sneak,
		CharacterAction.persuade
	],
	enemyParty: [
		new Monster("Goblin", 5, {attack: 2, sneak: 0, persuade: 0}, 
			{attack: 10, sneak: 10, persuade: 10}, 1, 3, "../../assets/orc.png")
	],
	sneakPersuadeFail: CharacterAction.attack,
	ifFail: FailureOptions.nextChapter,
	isSucced: [
		SuccessOptions.rewardExperience,
		SuccessOptions.rewardEquipment,
		SuccessOptions.addHeroToParty
	],
	rewards: {
		experience: 500,
		equipment: [new Weapon("Rusty Gun", 1, 6)],
		newHero: new Warrior("Papa Two", GenderOptions.male, RaceOptions.human, 1, 10, 
			{attack: 2, sneak: 1, persuade: 1,intelligence: 1}, 
			new Weapon("Bottle",1, 4), new Armor("Clothes", 0))
	},
	nextChapter: null
}
