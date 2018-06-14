export enum RaceOptions {
	human = "Human",
	dward = "Dward",
	elf = "Elf",
	halfling = "Halfling"
}

export enum ClassOptions {
	warrior = "Warrior",
	ranger = "Ranger",
	rogue = "Rougue",
	priest = "Priest"
}

export enum GenderOptions {
	male = "Male",
	female = "Female",
	thing = "Thing"
}

export const CharacterOptions = {
	races: [
		RaceOptions.human,
		RaceOptions.dward,
		RaceOptions.elf,
		RaceOptions.halfling
	],
	classes: [
		ClassOptions.warrior,
		ClassOptions.ranger,
		ClassOptions.rogue,
		ClassOptions.priest
	],
	genders: [
		GenderOptions.male,
		GenderOptions.female,
		GenderOptions.thing
	]
}