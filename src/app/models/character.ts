import {RaceOptions, ClassOptions, GenderOptions } from './character-options';

export class Armor {

	name: string;
	attackBariesBonus: number;

	constructor(name: string, attackBariesBonus: number){
		this.name = name;
		this.attackBariesBonus = attackBariesBonus;
	}


}


export class Weapon {
	name:string; 
	minDamage: number; 
	maxDamage: number;

	constructor(name:string, minDamage: number, maxDamage: number) {
		this.name = name;
		this.minDamage = minDamage;
		this.maxDamage = maxDamage;
	}


}

export enum CharacterSkill {
	attack = "attack",
	sneak = "sneak",
	persuade ="persuade",
	intelligence = "intelligence"
}

export enum FightOptions {
	attack = "Attack",
	specialAttack = "Special Attack",
	none = "None"
}

export const ExperienceToLevel = {
	1: 1000,
	2: 2000,
	3: 3000,
	4: 4000,
	5: 5000,
	6: 6000,
	7: 7000,
	8: 8000,
	9: 9000
}

export class BaseCharacter {
	name: string;
	maxHealth: number;
	currentHealth:  number;
	isIncapacitated: boolean;
	
	barriers : {
		attack: number,
		sneak: number,
		persuade: number
	}
	skill: {
		attack: number,
		sneak: number,
		persuade: number,
		intelligence: number
	}

	equippedWeapon: Weapon;
	equippedArmor: Armor;
	spriteUrl: string;

	constructor(name: string, health: number, skill = {attack:0,sneak:0,persuade:0,intelligence:0 }) {
		this.name = name;
		this.maxHealth = health;
		this.currentHealth = health;
		this.skill = skill;
		this.isIncapacitated = false;
		this.barriers = {
			attack: 10,
			sneak: 10,
			persuade: 10
		}
	}

	attack() {
		return Math.floor(Math.random() * 20) + 1 + this.skill.attack;
	}

	sneak(){
		return Math.floor(Math.random() * 20) + 1 + this.skill.sneak;
	}

	persuade() {
		return Math.floor(Math.random() * 20) + 1 + this.skill.persuade;
	}

	dealDamage() {
		return Math.floor(Math.random() *(this.equippedWeapon.maxDamage - this.equippedWeapon.minDamage + 1))
	}



}


export class Monster extends  BaseCharacter{
	isTrapped: boolean = false;
	poisonStacks: number = 0;
	isStrongPoison: boolean = false;
	hasTakenPoisonDamageThisTurn: boolean = false;

	constructor(name, health, skill, barriers: {attack: number, sneak: number, persuade: number}
		,minDamage, maxDamage, spriteUrl){
		super(name, health, skill);

		this.barriers = barriers;
		this.equippedWeapon = new Weapon(undefined, minDamage, maxDamage);
		this.spriteUrl = spriteUrl;

	}


}


export class Hero extends BaseCharacter{
	gender : string;
	race: string;
	characterRole: string;
	experience: number;
	level:number;
	availbleSkillPoints: number;
	hasTrapDefence: boolean;
	hasDamagingTrap: boolean;
	turnUntilSpecialAvailableAgain: number;


	constructor(name, gender, race, level, health, skills, weapon, armor) {
		super(name, health, skills);

		this.gender =  gender;
		this.race = race;
		this.experience = 0;
		this.level = level;
		this.equippedWeapon = weapon;
		this.equippedNewArmor(armor);
	}

	levelUp(): void {
		this.experience -= ExperienceToLevel[this.level++];
		this.availbleSkillPoints += 2;
		if(this.experience >= ExperienceToLevel[this.level]){
			this.levelUp();
		}
	}

	equippedNewArmor(armor: Armor): void {
		if(this.equippedArmor) {
			this.barriers.attack -= this.equippedArmor.attackBariesBonus;
		}
		this.equippedArmor = armor;	
		this.barriers.attack += armor.attackBariesBonus;
	}

	equipNewWeapon(weapon: Weapon): void {
		this.equippedWeapon = weapon;
	}

	rest(): void {
		this.currentHealth = this.maxHealth;
		this.isIncapacitated = false;
		this.turnUntilSpecialAvailableAgain = 0;
	}
}


export class Warrior extends Hero {

	constructor(name, gender, race, level, health, skills, weapon, armor) {
		super(name, gender, race, level, health, skills, weapon, armor);

		this.characterRole = ClassOptions.warrior;
		this.skill.attack += 2;
		this.skill.persuade++;
		this.skill.sneak--;
		this.skill.intelligence--;
		this.spriteUrl = this.gender === GenderOptions.male ? "./assets/warrior-m-1.png":"./assets/warrior-f-1.png";
	}

	levelUp(): void {
		this.maxHealth = Math.floor(Math.random() * 10) + 1;
		this.currentHealth = this.maxHealth;
		super.levelUp();
	}
	
}

export class Ranger extends Hero {
	constructor(name, gender, race, level, health, skills, weapon, armor) {
		super(name, gender, race, level, health, skills, weapon, armor);

		this.characterRole = ClassOptions.warrior;
		this.skill.sneak += 2;
		this.skill.intelligence++;
		this.skill.persuade--;
		this.skill.attack--;
		this.spriteUrl = this.gender === GenderOptions.male ? "./assets/ranger-m-1.png":"./assets/ranger-f-1.png";
	}

	levelUp(): void {
		this.maxHealth = Math.floor(Math.random() * 8) + 1;
		this.currentHealth = this.maxHealth;
		super.levelUp();
	}
	
}

export class Rogue extends Hero {
	constructor(name, gender, race, level, health, skills, weapon, armor) {
		super(name, gender, race, level, health, skills, weapon, armor);

		this.characterRole = ClassOptions.warrior;
		this.skill.sneak += 2;
		this.skill.attack++;
		this.skill.intelligence--;
		this.skill.persuade--;
		this.spriteUrl = this.gender === GenderOptions.male ? "./assets/rogue-m-1.png":"./assets/rogue-f-1.png";
	}

	levelUp(): void {
		this.maxHealth = Math.floor(Math.random() * 8) + 1;
		this.currentHealth = this.maxHealth;
		super.levelUp();
	}
	
}

export class Priest extends Hero {
	constructor(name, gender, race, level, health, skills, weapon, armor) {
		super(name, gender, race, level, health, skills, weapon, armor);

		this.characterRole = ClassOptions.warrior;
		this.skill.intelligence += 2;
		this.skill.persuade++;
		this.skill.sneak--;
		this.skill.attack--;
		this.spriteUrl = this.gender === GenderOptions.male ? "./assets/priest-m-1.png":"./assets/priest-f-1.png";
	}

	levelUp(): void {
		this.maxHealth = Math.floor(Math.random() * 6) + 1;
		this.currentHealth = this.maxHealth;
		super.levelUp();
	}
	
}


export const checkRace = (hero: Hero) => {
	switch (hero.race) {
		case RaceOptions.human:
			hero.skill.persuade += 2;
			hero.skill.intelligence++;
			hero.skill.sneak -= 2;
			break;

		case RaceOptions.elf:
			hero.skill.intelligence += 2;
			hero.skill.sneak++;
			hero.skill.persuade -= 2;
			break;

		case RaceOptions.dward:
			hero.skill.attack += 2;
			hero.skill.persuade++;
			hero.skill.intelligence -= 2;
			break;

		case RaceOptions.halfling:
			hero.skill.sneak += 2;
			hero.skill.attack++;
			hero.skill.persuade -= 2;
			break;
		default:
			// code...
			break;
	}
}

