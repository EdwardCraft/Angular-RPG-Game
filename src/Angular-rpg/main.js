(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _componets_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componets/app.component */ "./src/app/componets/app.component.ts");
/* harmony import */ var _componets_story_story_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componets/story/story.component */ "./src/app/componets/story/story.component.ts");
/* harmony import */ var _componets_start_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componets/start/start.component */ "./src/app/componets/start/start.component.ts");
/* harmony import */ var _componets_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componets/inventory/inventory.component */ "./src/app/componets/inventory/inventory.component.ts");
/* harmony import */ var _componets_fight_fight_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componets/fight/fight.component */ "./src/app/componets/fight/fight.component.ts");
/* harmony import */ var _componets_character_creation_character_creation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componets/character-creation/character-creation.component */ "./src/app/componets/character-creation/character-creation.component.ts");
/* harmony import */ var _services_game_controller_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/game-controller.service */ "./src/app/services/game-controller.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: "", component: _componets_start_start_component__WEBPACK_IMPORTED_MODULE_6__["StartComponent"] },
    { path: "story", component: _componets_story_story_component__WEBPACK_IMPORTED_MODULE_5__["StoryComponent"] },
    { path: "character-creation", component: _componets_character_creation_character_creation_component__WEBPACK_IMPORTED_MODULE_9__["CharacterComponent"] },
    { path: "fight", component: _componets_fight_fight_component__WEBPACK_IMPORTED_MODULE_8__["FightComponent"] },
    { path: "**", redirectTo: "" }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _componets_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _componets_start_start_component__WEBPACK_IMPORTED_MODULE_6__["StartComponent"],
                _componets_character_creation_character_creation_component__WEBPACK_IMPORTED_MODULE_9__["CharacterComponent"],
                _componets_story_story_component__WEBPACK_IMPORTED_MODULE_5__["StoryComponent"],
                _componets_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__["InvetoryComponent"],
                _componets_fight_fight_component__WEBPACK_IMPORTED_MODULE_8__["FightComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            providers: [
                _services_game_controller_service__WEBPACK_IMPORTED_MODULE_10__["GameControllerService"]
            ],
            bootstrap: [_componets_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chapters/Chapter1.ts":
/*!**************************************!*\
  !*** ./src/app/chapters/Chapter1.ts ***!
  \**************************************/
/*! exports provided: Chapter1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chapter1", function() { return Chapter1; });
/* harmony import */ var _models_chapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/chapter */ "./src/app/models/chapter.ts");
/* harmony import */ var _models_character__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/character */ "./src/app/models/character.ts");
/* harmony import */ var _models_character_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/character-options */ "./src/app/models/character-options.ts");



var Chapter1 = {
    story: [
        "Some despicable monster and smelly eate your favorite yogurt, and now you whant revenge!!.",
        "Shenanigans ensue and an enconter begins. Now que question is: How do you want to react?"
    ],
    options: [
        _models_chapter__WEBPACK_IMPORTED_MODULE_0__["CharacterAction"].attack,
        _models_chapter__WEBPACK_IMPORTED_MODULE_0__["CharacterAction"].sneak,
        _models_chapter__WEBPACK_IMPORTED_MODULE_0__["CharacterAction"].persuade
    ],
    enemyParty: [
        new _models_character__WEBPACK_IMPORTED_MODULE_1__["Monster"]("Goblin", 5, { attack: 2, sneak: 0, persuade: 0 }, { attack: 10, sneak: 10, persuade: 10 }, 1, 3, "../../assets/orc.png")
    ],
    sneakPersuadeFail: _models_chapter__WEBPACK_IMPORTED_MODULE_0__["CharacterAction"].attack,
    ifFail: _models_chapter__WEBPACK_IMPORTED_MODULE_0__["FailureOptions"].nextChapter,
    isSucced: [
        _models_chapter__WEBPACK_IMPORTED_MODULE_0__["SuccessOptions"].rewardExperience,
        _models_chapter__WEBPACK_IMPORTED_MODULE_0__["SuccessOptions"].rewardEquipment,
        _models_chapter__WEBPACK_IMPORTED_MODULE_0__["SuccessOptions"].addHeroToParty
    ],
    rewards: {
        experience: 500,
        equipment: [new _models_character__WEBPACK_IMPORTED_MODULE_1__["Weapon"]("Rusty Gun", 1, 6)],
        newHero: new _models_character__WEBPACK_IMPORTED_MODULE_1__["Warrior"]("Papa Two", _models_character_options__WEBPACK_IMPORTED_MODULE_2__["GenderOptions"].male, _models_character_options__WEBPACK_IMPORTED_MODULE_2__["RaceOptions"].human, 1, 10, { attack: 2, sneak: 1, persuade: 1, intelligence: 1 }, new _models_character__WEBPACK_IMPORTED_MODULE_1__["Weapon"]("Bottle", 1, 4), new _models_character__WEBPACK_IMPORTED_MODULE_1__["Armor"]("Clothes", 0))
    },
    nextChapter: null
};


/***/ }),

/***/ "./src/app/componets/app.component.css":
/*!*********************************************!*\
  !*** ./src/app/componets/app.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componets/app.component.html":
/*!**********************************************!*\
  !*** ./src/app/componets/app.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/componets/app.component.ts":
/*!********************************************!*\
  !*** ./src/app/componets/app.component.ts ***!
  \********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/componets/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/componets/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/componets/character-creation/character-creation.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componets/character-creation/character-creation.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\theight: 100vh;\r\n\r\n}\r\n\r\n.sidebar {\r\n\tbackground-color: #d2b48c;\r\n}\r\n\r\n.sidebar ul {\r\n\tlist-style: none;\r\n\ttext-indent: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.sidebar li {\r\n\tcursor: pointer;\r\n\tdisplay: block;\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n\tborder-radius: 7px;\r\n}\r\n\r\n.sidebar li.active {\r\n\tbackground: rgb(0, 0, 150);\r\n}\r\n\r\n.gender-button {\r\n\tcursor: pointer;\r\n\tdisplay: block;\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n\tborder-radius: 7px;\r\n\twidth: 50px;\r\n\tfont-size: 30px;\r\n}\r\n\r\n.gender-button.active{\r\n\tbackground: rgb(0, 0, 150);\r\n}\r\n\r\n.continue-button {\r\n\tdisplay: block;\r\n\tcursor: pointer;\r\n\tcolor: white;\r\n\tbackground: rgb(0, 0, 150);\r\n\tborder: none;\r\n\tborder-radius: 7px;\r\n}\r\n\r\n.continue-button.disabled {\r\n\tbackground: black;\r\n\tcursor: auto;\r\n}"

/***/ }),

/***/ "./src/app/componets/character-creation/character-creation.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componets/character-creation/character-creation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row h-100\">\r\n\t\t<div class=\"col-3 sidebar p-3 text-center\">\r\n\t\t\t<h1>Races</h1>\r\n\t\t\t<ul>\r\n\t\t\t\t<li *ngFor=\"let race of races \" (click)=\"changeRace(race)\" [class.active]=\"character.race === race\" class=\"mb-3 py\">\r\n\t\t\t\t\t{{race}}\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div class=\"col-6 text-center text-white p-3\">\r\n\t\t\t<h2>Race</h2>\r\n\t\t\t<p>{{character.race}}</p>\r\n\t\t\t<h2>Class</h2>\r\n\t\t\t<p>{{character.class}}</p>\r\n\t\t\t<h2>Gender</h2>\r\n\t\t\t<div class=\"d-flex justify-content-center\">\r\n\t\t\t\t<div class=\"gender-button mr-1\" [class.active]=\"character.gender === 'Male'\" (click)=\"changeGender('Male')\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<i class=\"fas fa-mars\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gender-button ml-1\" [class.active]=\"character.gender === 'Female'\" (click)=\"changeGender('Female')\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<i class=\"fas fa-venus\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<h2>Name</h2>\r\n\t\t\t<input type=\"text\"  placeholder=\"Name\" class=\"mb-5 px-2\" [(ngModel)]=\"character.name\" (input)=\"changeName()\" >\r\n\t\t\t<button class=\"btn continue-button px-5 py-2 mx-auto\" [class.disabled]=\"!characterComplete\" (click)=\"createCharacter()\">Create Character</button>\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"col-3 sidebar p-3 text-center\">\r\n\t\t\t<h1>Classes</h1>\r\n\t\t\t<ul>\r\n\t\t\t\t<li *ngFor=\"let class of classes \" (click)=\"changeClass(class)\" [class.active]=\"character.class === class\" class=\"mb-3 py\">\r\n\t\t\t\t\t{{class}}\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/componets/character-creation/character-creation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componets/character-creation/character-creation.component.ts ***!
  \******************************************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_character_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/character-options */ "./src/app/models/character-options.ts");
/* harmony import */ var _services_game_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game-controller.service */ "./src/app/services/game-controller.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterComponent = /** @class */ (function () {
    function CharacterComponent(gameControllerService) {
        this.gameControllerService = gameControllerService;
        this.character = {
            race: '--Choose--',
            class: '--Choose--',
            gender: undefined,
            name: undefined
        };
        this.characterComplete = false;
        this.races = _models_character_options__WEBPACK_IMPORTED_MODULE_1__["CharacterOptions"].races;
        this.classes = _models_character_options__WEBPACK_IMPORTED_MODULE_1__["CharacterOptions"].classes;
        this.genders = _models_character_options__WEBPACK_IMPORTED_MODULE_1__["CharacterOptions"].genders;
    }
    ;
    CharacterComponent.prototype.changeRace = function (race) {
        this.character.race = race;
        this.checkCompleted();
    };
    CharacterComponent.prototype.changeClass = function (newClass) {
        this.character.class = newClass;
        this.checkCompleted();
    };
    CharacterComponent.prototype.changeGender = function (gender) {
        this.character.gender = gender;
        this.checkCompleted();
    };
    CharacterComponent.prototype.changeName = function () {
        this.checkCompleted();
    };
    CharacterComponent.prototype.checkCompleted = function () {
        this.characterComplete = this.character.race !== "--Choose--"
            && this.character.class !== "--Choose--"
            && this.character.gender
            && this.character.name;
    };
    CharacterComponent.prototype.createCharacter = function () {
        if (!this.characterComplete) {
            return;
        }
        this.gameControllerService.setMainCharacter(this.character);
    };
    CharacterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "character-creation-component",
            template: __webpack_require__(/*! ./character-creation.component.html */ "./src/app/componets/character-creation/character-creation.component.html"),
            styles: [__webpack_require__(/*! ./character-creation.component.css */ "./src/app/componets/character-creation/character-creation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_controller_service__WEBPACK_IMPORTED_MODULE_2__["GameControllerService"]])
    ], CharacterComponent);
    return CharacterComponent;
}());



/***/ }),

/***/ "./src/app/componets/fight/fight.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componets/fight/fight.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n\theight: 100vh;\r\n}\r\n\r\n.hero, .enemy {\r\n\theight: 33.33%;\r\n\r\n}\r\n\r\n.hero img {\r\n\twidth: 65%; /*adjust*/\r\n\theight: calc(100% - 20px);\r\n\r\n}\r\n\r\n.enemy img {\r\n\twidth: 65%;\r\n\theight: calc(100% - 20px);\r\n\t-webkit-transform: scaleX(-1);\r\n\t        transform: scaleX(-1);/*change orientation*/\r\n}\r\n\r\n.hero.active, .enemy.active {\r\n\tborder: 3px solid gold;\r\n\r\n}\r\n\r\n.hero.targetable {\r\n\tborder: 3px solid green;\r\n\tcursor: pointer;\r\n}\r\n\r\n.enemy.targetable {\r\n\tborder: 3px solid red;\r\n\tcursor: pointer;\r\n}\r\n\r\n.health-bar {\r\n\theight: 20px;\r\n}\r\n\r\n.progress-bar {\r\n\tcolor: black;\r\n\tbackground-color: red;\r\n\tpadding: 7px 0;\r\n}\r\n\r\n.message-box {\r\n\theight: 30%;\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tcolor: white;\r\n\tborder: 3px solid #d2b48c;\r\n\tpadding: 10px;\r\n\tborder-radius: 7px;\r\n\toverflow-7: auto; \r\n}\r\n\r\n.options-bar {\r\n\tbackground-color: #d2b48c;\r\n\tborder-top: 2px solid darkgreen;\r\n}\r\n\r\n.action-option {\r\n\tcursor: pointer;\r\n}\r\n\r\n.action-option.selected {\r\n\tbackground-color: rgb(0, 0, 150);\r\n\tcolor: white;\r\n}"

/***/ }),

/***/ "./src/app/componets/fight/fight.component.html":
/*!******************************************************!*\
  !*** ./src/app/componets/fight/fight.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid px-0\">\r\n\t<div class=\"row h-75\">\r\n\t\t<div class=\"col-1\"></div>\r\n\t\t<div class=\"col-2 heroes d-flex flex-column\">\r\n\t\t\t<div *ngFor=\"let hero of heroParty\" class=\"hero d-flex flex-column\" [ngClass]=\"{'active': currentCharacter === hero, 'targetable': availableTargets === _teams.heroes && !hero.isIncapacitated}\" (click)=\"tryAttack(hero)\">\r\n\t\t\t\t<img [src]=\"hero.spriteUrl\" [alt]=\"hero.characterRole\" class=\"mx-auto\" />\r\n\t\t\t\t<div class=\"health-bar progress\">\r\n\t\t\t\t\t<div class=\"progress-bar\" [style.width]=\"hero.currentHealth < 0 ? '0%' : (hero.currentHealth / hero.maxHealth) * 100 + '%'\">\r\n\t\t\t\t\t\t{{hero.currentHealth > 0 ? hero.currentHealth + \"/\" + hero.maxHealth : \"\"}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-6 d-flex flex-column justity-content-center\">\r\n\t\t\t<button *ngIf=\"!showNextChapterButton && !showGameOverButton\" class=\"btn w-75 mb-5 mx-auto action-option\" [class.selected]=\"selectedAction === _fightOptions.attack\" (click)=\"selectOption(_fightOptions.attack)\">Attack</button>\r\n\t\t\t<button *ngIf=\"!showNextChapterButton && !showGameOverButton\" class=\"btn w-75 mb-5 mx-auto action-option\" [class.selected]=\"selectedAction === _fightOptions.specialAttack\" (click)=\"selectOption(_fightOptions.specialAttack)\">Special Attack</button>\r\n\t\t\t<button *ngIf=\"showNextChapterButton\" class=\"btn w-75 mb-5 mx-auto action-option\" (click)=\"nextChapter()\">Next Chapter</button>\r\n\t\t\t<button *ngIf=\"showGameOverButton\" class=\"btn w-75 mb-5 mx-auto action-option\" (click)=\"gameOver()\">Game Over</button>\r\n\t\t\t<div class=\"message-box w-75 mx-auto\">\r\n\t\t\t\t<p>\r\n\t\t\t\t\t{{displayMessage}}\r\n\t\t\t\t</p>\r\n\t\t\t\t<p class=\"text-white col-12\" *ngFor=\"let message of successMessages\">\r\n\t\t\t\t\t{{message}}\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<div class=\"col-2 enemies d-flex flex-column\">\r\n\t\t\t<div *ngFor=\"let enemy of enemyParty\" class=\"enemy d-flex flex-column\" [ngClass]=\"{'active': currentCharacter === enemy, 'targetable': availableTargets === _teams.enemies && !enemy.isIncapacitated}\" (click)=\"tryAttack(enemy)\">\r\n\t\t\t\t<img [src]=\"enemy.spriteUrl\" [alt]=\"enemy.characterRole\" class=\"mx-auto\" />\r\n\t\t\t\t<div class=\"health-bar progress\">\r\n\t\t\t\t\t<div class=\"progress-bar\" [style.width]=\"enemy.currentHealth < 0 ? '0%' : (enemy.currentHealth / enemy.maxHealth) * 100 + '%'\">\r\n\t\t\t\t\t\t{{enemy.currentHealth > 0 ? enemy.currentHealth + \"/\" + enemy.maxHealth : \"\"}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-1\"></div>\r\n\t</div>\r\n\t<div class=\"container-fluid h-25 options-bar\">\r\n\t\t<div class=\"row h-100 justity-content-center\">\r\n\t\t\t<inventory-component></inventory-component>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/componets/fight/fight.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componets/fight/fight.component.ts ***!
  \****************************************************/
/*! exports provided: FightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FightComponent", function() { return FightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-controller.service */ "./src/app/services/game-controller.service.ts");
/* harmony import */ var _models_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/character */ "./src/app/models/character.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Teams;
(function (Teams) {
    Teams[Teams["heroes"] = 0] = "heroes";
    Teams[Teams["enemies"] = 1] = "enemies";
    Teams[Teams["none"] = 2] = "none";
})(Teams || (Teams = {}));
var FightComponent = /** @class */ (function () {
    function FightComponent(gameControllerService, router) {
        this.gameControllerService = gameControllerService;
        this.router = router;
        this.heroTurn = true;
        this.actionDelay = this.gameControllerService.actionDelay;
        this.turnsBetweenSpecial = 2;
        this.characterIndex = 0;
        this.freezeActions = false;
        this.heroParty = this.gameControllerService.heroParty;
        this.heroesIncapacitated = 0;
        this.enemyParty = this.gameControllerService.enemyParty;
        this.enemiesIncapacitated = 0;
        this.currentCharacter = this.heroParty[this.characterIndex];
        this._fightOptions = _models_character__WEBPACK_IMPORTED_MODULE_2__["FightOptions"];
        this._teams = Teams;
        this.selectedAction = _models_character__WEBPACK_IMPORTED_MODULE_2__["FightOptions"].none;
        this.availableTargets = Teams.none;
        this.selectedTargets = [];
        this.displayMessage = this.currentCharacter.name + "'s turn.";
        this.successMessages = [];
        this.showNextChapterButton = false;
        this.showGameOverButton = false;
    }
    FightComponent.prototype.selectOption = function (selectedOption) {
        if (this.freezeActions && this.heroTurn) {
            return;
        }
        this.selectedAction = selectedOption;
        this.selectedTargets = [];
        if (this.selectedAction === _models_character__WEBPACK_IMPORTED_MODULE_2__["FightOptions"].attack) {
            this.availableTargets = Teams.enemies;
            this.displayMessage = 'select  a target for your attack';
        }
        else if (this.selectedAction === _models_character__WEBPACK_IMPORTED_MODULE_2__["FightOptions"].specialAttack
            && this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Hero"]
            && this.currentCharacter.level < 3) {
            this.displayMessage = 'special Attacks unlock for a character one they reach level 3.';
        }
        else if (this.selectedAction === _models_character__WEBPACK_IMPORTED_MODULE_2__["FightOptions"].specialAttack
            && this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Hero"]
            && this.currentCharacter.level > 2) {
            if (this.currentCharacter.turnUntilSpecialAvailableAgain) {
                this.displayMessage = "Cannot use special attack yet. " + this.currentCharacter.turnUntilSpecialAvailableAgain + " turns(s) until it is available again.";
            }
            else {
                if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Warrior"]) {
                    this.availableTargets = Teams.enemies;
                    this.displayMessage = "Attack two targets at one with a small attack penalty. At level 6 and above the attack penalty is removed. The two targets may be the same enemy.";
                }
                else if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Ranger"]) {
                    this.availableTargets = Teams.heroes;
                    this.displayMessage = "Setup a trap to protect one of your heroes. The trap will prevent all damage and the enemy will take a turn to free itself from the trap. At level 6 and abovem the trap will also deal up to 8 damage.";
                }
                else if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Rogue"]) {
                    this.availableTargets = Teams.enemies;
                    this.displayMessage = "Poison an enemy or add another stack of poison to the enemy to do up to 3 damage, with each stack of poison multiplying the damage. At level 6 and above, the damage is up to 6 times the number of poison stacks. ";
                }
                else if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Priest"]) {
                    this.availableTargets = Teams.heroes;
                    this.displayMessage = "Selecte a hero to heal for up to 6 health plus an additional point in the intelligence skill. At level 6 and above, you can choose to targets to heal. The two targets can be the same hero. ";
                }
            }
        }
    };
    FightComponent.prototype.tryAttack = function (target) {
        if (this.freezeActions && this.heroTurn) {
            return;
        }
        if (target.isIncapacitated) {
            this.displayMessage = "That target is already incapacitated.";
            return;
        }
        if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Monster"] && target instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Hero"]) {
            if (target.hasTrapDefence) {
                this.currentCharacter.isTrapped = true;
                if (target.hasDamagingTrap) {
                    var damage = Math.floor(Math.random() * 8) + 1;
                    this.currentCharacter.currentHealth -= damage;
                    this.displayMessage = target.name + " was protected by a trap. " + this.currentCharacter.name + " is stuck in the trap, talking " + damage + " damage.";
                    if (this.currentCharacter.currentHealth <= 0) {
                        this.currentCharacter.isIncapacitated = true;
                        this.enemiesIncapacitated++;
                    }
                }
                else {
                    this.displayMessage = target.name + " was protected by a trap. " + this.currentCharacter.name + " is stuck in the trap";
                }
                target.hasTrapDefence = false;
                target.hasDamagingTrap = false;
                setTimeout((function () {
                    this.checkIfWin();
                }).bind(this), this.actionDelay);
                return;
            }
        }
        /*https://www.instagram.com/p/Bj0T7WQAHlG/?utm_source=ig_twitter_share&igshid=vkhso8udfw93*/
        /*https://www.facebook.com/Retro-drive-393228050848663/?hc_ref=ARRomP4odHAXhWgfwMDC5ljY1KM810fK4p3PDUpAFlUQ20gTgMDMI7SAAlqmfu-Yoc8&fref=nf*/
        if (this.selectedAction === _models_character__WEBPACK_IMPORTED_MODULE_2__["FightOptions"].attack) {
            this.freezeActions = true;
            this.attack(target);
        }
        else if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Hero"]
            && this.currentCharacter.level > 2
            && this.selectedAction === _models_character__WEBPACK_IMPORTED_MODULE_2__["FightOptions"].specialAttack) {
            var upgraded = this.currentCharacter.level > 5;
            if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Warrior"]) {
                this.warriorSpecialAttack(target, upgraded);
            }
            if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Ranger"]) {
                this.rangerSpecialAttack(target, upgraded);
            }
            if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Rogue"]) {
                this.rogueSpecialAttack(target, upgraded);
            }
            if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Priest"]) {
                this.priestSpecialAttack(target, upgraded);
            }
        }
        else {
            this.displayMessage = "Please select an action option.";
        }
    };
    FightComponent.prototype.warriorSpecialAttack = function (target, upgraded) {
        var _this = this;
        if (!(target instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Monster"])) {
            this.displayMessage = "Only enemies can be targeted for a warrior's special attack";
            return;
        }
        this.selectedTargets.push(target);
        if (this.selectedTargets.length < 2) {
            this.displayMessage = "Select a second target for your warrio's special attack";
        }
        else if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Hero"]) {
            this.freezeActions = true;
            this.currentCharacter.turnUntilSpecialAvailableAgain = this.turnsBetweenSpecial;
            var doubleAttackPentalty_1 = upgraded ? 0 : 4;
            var firtTarget = this.selectedTargets[0];
            var secondTarget_1 = this.selectedTargets[1];
            if (this.currentCharacter.attack() - doubleAttackPentalty_1 >= firtTarget.barriers.attack) {
                var damage = this.currentCharacter.dealDamage();
                firtTarget.currentHealth -= damage;
                this.displayMessage = this.currentCharacter.name + " hit " + firtTarget.name + " dealing " + damage + " damage.";
                if (firtTarget.currentHealth <= 0) {
                    firtTarget.isIncapacitated = true;
                    this.enemiesIncapacitated++;
                }
            }
            else {
                this.displayMessage = this.currentCharacter.name + " Missed.";
            }
            setTimeout(function () {
                if (_this.currentCharacter.attack() - doubleAttackPentalty_1 >= secondTarget_1.barriers.attack) {
                    var damage = _this.currentCharacter.dealDamage();
                    secondTarget_1.currentHealth -= damage;
                    _this.displayMessage = _this.currentCharacter.name + " hit " + secondTarget_1.name + " dealing " + damage + " damage.";
                    if (secondTarget_1.currentHealth <= 0 && !secondTarget_1.isIncapacitated) {
                        secondTarget_1.isIncapacitated = true;
                        _this.enemiesIncapacitated++;
                    }
                }
                else {
                    _this.displayMessage = _this.currentCharacter.name + " Missed.";
                }
                setTimeout(function () {
                    _this.selectedTargets = [];
                    _this.checkIfWin();
                }, _this.actionDelay);
            }, this.actionDelay);
        }
    };
    FightComponent.prototype.rangerSpecialAttack = function (target, upgraded) {
        var _this = this;
        if (!(target instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Hero"])) {
            this.displayMessage = "Only a hero can be targeted for a ranger's special attack";
            return;
        }
        if (target.hasTrapDefence) {
            this.displayMessage = "Target hero already has a trap defense in place";
            return;
        }
        this.freezeActions = true;
        if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Hero"]) {
            this.currentCharacter.turnUntilSpecialAvailableAgain = this.turnsBetweenSpecial;
        }
        this.displayMessage = this.currentCharacter.name + " set up trap to protect " + target;
        target.hasTrapDefence = true;
        target.hasDamagingTrap = upgraded;
        setTimeout(function () {
            _this.nextTurn();
        }, this.actionDelay);
    };
    FightComponent.prototype.rogueSpecialAttack = function (target, upgrade) {
        var _this = this;
        if (!(target instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Monster"])) {
            this.displayMessage = "Only a Monster can be targeted for a rogue's special attack.";
            return;
        }
        this.freezeActions = true;
        if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Hero"]) {
            this.currentCharacter.turnUntilSpecialAvailableAgain = this.turnsBetweenSpecial;
        }
        target.isStrongPoison = upgrade;
        target.poisonStacks++;
        this.displayMessage = target.name + " was poisoned. (" + target.poisonStacks + " stack(s))";
        setTimeout(function () {
            _this.nextTurn();
        }, this.actionDelay);
    };
    FightComponent.prototype.priestSpecialAttack = function (target, upgraded) {
        var _this = this;
        if (!(target instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Hero"])) {
            this.displayMessage = "Only a hero can be targeted for a priest's special attack";
            return;
        }
        if (upgraded) {
            this.selectedTargets.push(target);
            if (this.selectedTargets.length < 2) {
                this.displayMessage = "Select a second target to heal.";
                return;
            }
            this.freezeActions = true;
            if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Hero"]) {
                this.currentCharacter.turnUntilSpecialAvailableAgain = this.turnsBetweenSpecial;
            }
            var heal1 = Math.floor((Math.random() * 6) + 1 + this.currentCharacter.skill.intelligence);
            var heal2_1 = Math.floor((Math.random() * 6) + 1 + this.currentCharacter.skill.intelligence);
            var target1 = this.selectedTargets[0];
            var target2_1 = this.selectedTargets[1];
            target1.currentHealth = target1.currentHealth + heal1 > target1.maxHealth ? target1.maxHealth : target1.currentHealth + heal1;
            this.displayMessage = target1.name + " was healed for " + heal1 + " health.";
            setTimeout(function () {
                target2_1.currentHealth = target2_1.currentHealth + heal2_1 > target2_1.maxHealth ? target2_1.maxHealth : target2_1.currentHealth + heal2_1;
                _this.displayMessage = target2_1.name + " was healed for " + heal2_1 + " health.";
                _this.selectedTargets = [];
                setTimeout(function () {
                    _this.nextTurn();
                }, _this.actionDelay);
            }, this.actionDelay);
        }
        else {
            this.freezeActions = true;
            if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Hero"]) {
                this.currentCharacter.turnUntilSpecialAvailableAgain = this.turnsBetweenSpecial;
            }
            var healing = Math.floor((Math.random() * 6) + 1 + this.currentCharacter.skill.intelligence);
            target.currentHealth = target.currentHealth + healing > target.maxHealth ? target.maxHealth : target.currentHealth + healing;
            this.displayMessage = target.name + " was healed for " + healing + " health.";
            setTimeout(function () {
                _this.nextTurn();
            }, this.actionDelay);
        }
    };
    FightComponent.prototype.attack = function (target) {
        var _this = this;
        this.availableTargets = Teams.none;
        if (this.currentCharacter.attack() >= target.barriers.attack) {
            var damage = this.currentCharacter.dealDamage();
            target.currentHealth -= damage;
            this.displayMessage = this.currentCharacter.name + " hit " + target.name + " dealing " + damage + " damage.";
            setTimeout(function () {
                if (target.currentHealth <= 0) {
                    target.isIncapacitated = true;
                    _this.heroTurn ? _this.enemiesIncapacitated++ : _this.heroesIncapacitated++;
                    _this.checkIfWin();
                }
                else {
                    _this.nextTurn();
                }
            }, this.actionDelay);
        }
        else {
            this.displayMessage = this.currentCharacter.name + " Missed.";
            setTimeout(function () {
                _this.nextTurn();
            }, this.actionDelay);
        }
    };
    FightComponent.prototype.checkIfWin = function () {
        this.selectedAction = _models_character__WEBPACK_IMPORTED_MODULE_2__["FightOptions"].none;
        if (this.enemiesIncapacitated === this.enemyParty.length) {
            this.displayMessage = "All enemies have been defeated";
            this.successMessages = this.gameControllerService.encounerSuccess();
            this.showNextChapterButton = true;
            this.gameControllerService.isFighting = false;
            return;
        }
        if (this.heroesIncapacitated === this.heroParty.length) {
            this.displayMessage = "All heores have been defeated";
            this.showGameOverButton = true;
            this.gameControllerService.isFighting = false;
            return;
        }
        this.nextTurn();
    };
    FightComponent.prototype.nextTurn = function () {
        var _this = this;
        if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Monster"]
            && this.currentCharacter.poisonStacks
            && !this.currentCharacter.hasTakenPoisonDamageThisTurn) {
            this.currentCharacter.hasTakenPoisonDamageThisTurn = true;
            var maxDamage = this.currentCharacter.isStrongPoison ? 6 : 3;
            var poisonDamage = (Math.floor(Math.random() * maxDamage) + 1) * this.currentCharacter.poisonStacks;
            this.currentCharacter.currentHealth -= poisonDamage;
            this.displayMessage = this.currentCharacter.name + " took " + poisonDamage + " posison damage";
            if (this.currentCharacter.currentHealth <= 0) {
                this.currentCharacter.isIncapacitated = true;
                this.enemiesIncapacitated++;
            }
            setTimeout(function () {
                _this.checkIfWin();
            }, this.actionDelay);
            return;
        }
        if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Monster"] && this.currentCharacter.hasTakenPoisonDamageThisTurn) {
            this.currentCharacter.hasTakenPoisonDamageThisTurn = false;
        }
        this.availableTargets = Teams.none;
        this.selectedAction = _models_character__WEBPACK_IMPORTED_MODULE_2__["FightOptions"].none;
        this.characterIndex++;
        var nextCharacter;
        if (this.heroTurn) {
            nextCharacter = this.heroParty[this.characterIndex];
        }
        else {
            nextCharacter = this.enemyParty[this.characterIndex];
        }
        if (nextCharacter) {
            if (!nextCharacter.isIncapacitated) {
                this.currentCharacter = nextCharacter;
                this.displayMessage = "it's " + this.currentCharacter.name + "'s turn.";
                if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Hero"]) {
                    this.freezeActions = false;
                    if (this.currentCharacter.turnUntilSpecialAvailableAgain) {
                        this.currentCharacter.turnUntilSpecialAvailableAgain--;
                    }
                }
                else {
                    setTimeout(function () {
                        _this.takeEnemyTurn();
                    }, this.actionDelay);
                }
            }
            else {
                this.nextTurn();
            }
        }
        else {
            this.heroTurn = !this.heroTurn;
            this.characterIndex = -1;
            this.nextTurn();
        }
    };
    FightComponent.prototype.takeEnemyTurn = function () {
        var _this = this;
        if (this.currentCharacter instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Monster"] && this.currentCharacter.isTrapped) {
            this.currentCharacter.isTrapped = false;
            this.displayMessage = this.currentCharacter.name + " freed itself from the trap";
            setTimeout(function () {
                _this.nextTurn();
            }, this.actionDelay);
        }
        else {
            var target_1;
            this.selectedAction = _models_character__WEBPACK_IMPORTED_MODULE_2__["FightOptions"].attack;
            while (!target_1) {
                var randomTargetIndex = Math.floor(Math.random() * this.heroParty.length);
                var potentialTarget = this.heroParty[randomTargetIndex];
                if (!potentialTarget.isIncapacitated) {
                    target_1 = potentialTarget;
                }
            }
            this.displayMessage = this.currentCharacter + " attacks " + target_1.name + ".";
            setTimeout(function () {
                _this.tryAttack(target_1);
            }, this.actionDelay);
        }
    };
    FightComponent.prototype.nextChapter = function () {
        this.gameControllerService.nextChapter();
        this.router.navigateByUrl("/story");
    };
    FightComponent.prototype.gameOver = function () {
        this.gameControllerService.gameOver();
    };
    FightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "fight-component",
            template: __webpack_require__(/*! ./fight.component.html */ "./src/app/componets/fight/fight.component.html"),
            styles: [__webpack_require__(/*! ./fight.component.css */ "./src/app/componets/fight/fight.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_controller_service__WEBPACK_IMPORTED_MODULE_1__["GameControllerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FightComponent);
    return FightComponent;
}());



/***/ }),

/***/ "./src/app/componets/inventory/inventory.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componets/inventory/inventory.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".open-inventory {\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n\tfont-size: 30px;\r\n\tmargin-top: calc(12.5vh - 30px);\r\n\tcursor: pointer; \r\n}\r\n\r\n.dack-overlay {\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 0;\r\n\twidth: 0;\r\n\tz-index: 100;\r\n}\r\n\r\n.inventory-screen {\r\n\tbackground-color: #d2b48c;\r\n\tborder: 2px solid darkgreen;\r\n\tposition: absolute;\r\n\theight: 80%;\r\n\ttop: 10%;\r\n\tleft: 20%;\r\n\twidth: 60%;\r\n\tz-index: 101;\r\n}\r\n\r\n.hero-tab {\r\n\tborder-right: 2px solid darkgreen;\r\n\tborder-bottom: 2px solid darkgreen;\r\n\tcursor: pointer;  \r\n}\r\n\r\n.hero-tab: last-child {\r\n\tborder-right: none; \r\n}\r\n\r\n.hero-tab.selected {\r\n\tborder-bottom: none;\r\n}\r\n\r\n.add-hero {\r\n\tborder-bottom: 2px solid darkgreen;\r\n\tfont-size: 50px;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n}\r\n\r\n.close-button {\r\n\tfont-size: 50px;\r\n\tposition: absolute;\r\n\tz-index: 102;\r\n\ttop: -40px;\r\n\tright: -20px;\r\n\tcursor: pointer;\r\n\tcolor: silver;\r\n}\r\n\r\n.improve-skill {\r\n\tcursor: pointer;\r\n}\r\n\r\n.inventory-display {\r\n\tborder: 2px solid darkgreen;\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tborder-radius: 7px;\r\n\theight: 450px;\r\n\toverflow-y: auto; \r\n}\r\n\r\n.inventory-display .item {\r\n\tborder-bottom: 1px solid white;\r\n}\r\n\r\n.intentory-display .item: last-child {\r\n\tborder-bottom: none;\r\n}\r\n\r\n.inventory-display .equip-button {\r\n\tcursor: pointer;\r\n}\r\n\r\n.available-heroes-screen {\r\n\toverflow-y: auto;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/componets/inventory/inventory.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componets/inventory/inventory.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inventory-component\">\r\n\t<button class=\"btn open-inventory\" (click)=\"openInventory()\">inventory</button>\r\n\t<div *ngIf=\"inventoryIsOpen\">\r\n\t\t<div class=\"dack-overlay\" (click)=\"closeInventory()\"></div>\r\n\t\t<div class=\"inventory-screen\">\r\n\t\t\t<div class=\"container-fluid\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div (click)=\"closeInventory()\" class=\"close-button\">\r\n\t\t\t\t\t\t<i class=\"fa fa-times\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngFor='let hero of heroParty' class=\"col p-3 hero-tab\" [class.selected]=\"selectedHero === hero\" (click)=\"setSelectedHero(hero)\">\r\n\t\t\t\t\t\t<h2 class=\"text-center\">\r\n\t\t\t\t\t\t\t{{hero.name}}\r\n\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"heroParty.length < 3 && availableHeroes.length && !isFighting\" class=\"col-2 add-hero\" (click)=\"showAvailableHeroes()\">\r\n\t\t\t\t\t\t<i class=\"fa fa-plus\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"showAvailableHeroesScreen\" class=\"row available-heroes-screen h-100\">\r\n\t\t\t\t\t<div class=\"col-4 p-3 text-center\" *ngFor=\"let hero of availableHeroes\">\r\n\t\t\t\t\t\t<img [src]=\"hero.spriteUrl\" [alt]=\"hero.name\" class=\"img-fluid mb-3\"/>\r\n\t\t\t\t\t\t<h5>{{hero.name}} - {{hero.characterRole}} - lvl {{hero.level}}</h5>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col skill d-flex flex-column\">\r\n\t\t\t\t\t\t\t\t<h6>ATK</h6>\r\n\t\t\t\t\t\t\t\t<p>{{hero.skill.attack}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col skill d-flex flex-column\">\r\n\t\t\t\t\t\t\t\t<h6>SNK</h6>\r\n\t\t\t\t\t\t\t\t<p>{{hero.skill.sneak}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col skill d-flex flex-column\">\r\n\t\t\t\t\t\t\t\t<h6>PERS</h6>\r\n\t\t\t\t\t\t\t\t<p>{{hero.skill.persuade}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col skill d-flex flex-column\">\r\n\t\t\t\t\t\t\t\t<h6>INT</h6>\r\n\t\t\t\t\t\t\t\t<p>{{hero.skill.intelligence}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<button class=\"btn\" (click)=\"addheroToParty(hero)\">Add to Party</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"!showAvailableHeroesScreen\" class=\"row\">\r\n\t\t\t\t\t<div class=\"col-4 p-3 text-center\">\r\n\t\t\t\t\t\t<img [src]=\"selectedHero.spriteUrl\" [alt]=\"selectedHero.name\" class=\"img-fluid mb-3\"/>\r\n\t\t\t\t\t\t<h5>{{selectedHero.name}} - {{selectedHero.characterRole}} - {{selectedHero.level}}</h5>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col skill d-flex flex-column\">\r\n\t\t\t\t\t\t\t\t<h6>ATK</h6>\r\n\t\t\t\t\t\t\t\t<p>{{selectedHero.skill.attack}}</p>\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"selectedHero.availbleSkillPoints\" class=\"improve-skill\" (click)=\"improveSkill(_characterSkills.attack)\"><i class=\"fa fa-plus\"></i></p>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col skill d-flex flex-column\">\r\n\t\t\t\t\t\t\t\t<h6>SNK</h6>\r\n\t\t\t\t\t\t\t\t<p>{{selectedHero.skill.sneak}}</p>\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"selectedHero.availableSkillPoints\" class=\"improve-skill\" (click)=\"improveSkill(_characterSkills.sneak)\"><i class=\"fa fa-plus\"></i></p>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col skill d-flex flex-column\">\r\n\t\t\t\t\t\t\t\t<h6>PERS</h6>\r\n\t\t\t\t\t\t\t\t<p>{{selectedHero.skill.persuade}}</p>\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"selectedHero.availableSkillPoints\" class=\"improve-skill\" (click)=\"improveSkill(_characterSkills.persuade)\"><i class=\"fa fa-plus\"></i></p>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col skill d-flex flex-column\">\r\n\t\t\t\t\t\t\t\t<h6>INT</h6>\r\n\t\t\t\t\t\t\t\t<p>{{selectedHero.skill.intelligence}}</p>\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"selectedHero.availableSkillPoints\" class=\"improve-skill\" (click)=\"improveSkill(_characterSkills.intelligence)\"><i class=\"fa fa-plus\"></i></p>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<h6 *ngIf=\"selectedHero.availableSkillPoints\">Available Skill Points: {{selectedHero.availableSkillPoints}}</h6>\r\n\t\t\t\t\t\t<h6 *ngIf=\"!selectedHero.availableSkillPoints\">Experience: {{selectedHero.experience}}/{{_experienceToLevel[selectedHero.level]}}</h6>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-4 p-3 text-center d-flex flex-column\">\r\n\t\t\t\t\t\t<h3 class=\"mb-5\">Equipped Items</h3>\r\n\t\t\t\t\t\t<h6>Weapon: </h6>\r\n\t\t\t\t\t\t<p class=\"mb-5\">{{selectedHero.equippedWeapon.name}} -- Min Damage: {{selectedHero.equippedWeapon.minDamage}}, Max Damage: {{selectedHero.equippedWeapon.maxDamage}}</p>\r\n\t\t\t\t\t\t<h6>Armor:</h6>\r\n\t\t\t\t\t\t<p class=\"mb-5\">{{selectedHero.equippedArmor.name}} -- Armor Bonus: {{selectedHero.equippedArmor.attackBarrierBonus}}</p>\r\n\t\t\t\t\t\t<h3 class=\"mb-3\">Remove hero From Party</h3>\r\n\t\t\t\t\t\t<p *ngIf=\"selectedHero === mainCharacter\">\r\n\t\t\t\t\t\t\tYou cannot remove the main character from the party.\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<button *ngIf=\"selectedHero !== mainCharacter\" class=\"btn btn-danger remove-character\" (click)=\"removeCharacterFromParty()\">Remove</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-4 p-3 text-center d-flex flex-column\">\r\n\t\t\t\t\t\t<h3>Party Inventory</h3>\r\n\t\t\t\t\t\t<div class=\"inventory-display\">\r\n\t\t\t\t\t\t\t<div *ngFor=\"let item of inventory\" class=\"item p-3\">\r\n\t\t\t\t\t\t\t\t<h6 class=\"text-left mb-3\">\r\n\t\t\t\t\t\t\t\t{{item.name}}\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"item.minDamage\"> -- Weapon -- Min Damage: {{item.minDamage}}, Max damage {{item.maxDamage}}</span>\r\n\t\t\t\t\t\t\t\t<span *ngIf=\"item.attackBarrierBonus\"> -- Armor -- {{item.attackBarrierBonues}}</span>\r\n\t\t\t\t\t\t\t\t</h6>\r\n\t\t\t\t\t\t\t\t<button *ngIf=\"!isFighting\" class=\"btn equip-button\" (click)=\"equipItem(item)\">Equip</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/componets/inventory/inventory.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componets/inventory/inventory.component.ts ***!
  \************************************************************/
/*! exports provided: InvetoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvetoryComponent", function() { return InvetoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-controller.service */ "./src/app/services/game-controller.service.ts");
/* harmony import */ var _models_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/character */ "./src/app/models/character.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvetoryComponent = /** @class */ (function () {
    function InvetoryComponent(gameControllerService) {
        this.gameControllerService = gameControllerService;
        this.inventoryIsOpen = false;
        this._characterSkill = _models_character__WEBPACK_IMPORTED_MODULE_2__["CharacterSkill"];
        this.heroParty = this.gameControllerService.heroParty;
        this.mainCharacter = this.gameControllerService.mainCharacter;
        this.availableHeroes = this.gameControllerService.availableHeroes;
        this.inventory = this.gameControllerService.partyInventory;
        this._experienceToLevel = _models_character__WEBPACK_IMPORTED_MODULE_2__["ExperienceToLevel"];
        this.selectedHero = this.heroParty[0];
        this.showAvailableHeroesScreen = false;
        this.isFighting = this.gameControllerService.isFighting;
    }
    InvetoryComponent.prototype.openInventory = function () {
        this.inventoryIsOpen = true;
        this.heroParty = this.gameControllerService.heroParty;
        this.availableHeroes = this.gameControllerService.availableHeroes;
        this.inventory = this.gameControllerService.partyInventory;
        this.selectedHero = this.heroParty[0];
        this.showAvailableHeroesScreen = false;
        this.isFighting = this.gameControllerService.isFighting;
    };
    InvetoryComponent.prototype.closeInventory = function () {
        this.inventoryIsOpen = false;
    };
    InvetoryComponent.prototype.setSelectedHero = function (newHero) {
        this.showAvailableHeroesScreen = false;
        if (this.selectedHero !== newHero)
            this.selectedHero = newHero;
    };
    InvetoryComponent.prototype.improveSkill = function (skill) {
        this.selectedHero.skill[skill]++;
        this.selectedHero.availbleSkillPoints--;
    };
    InvetoryComponent.prototype.equipItem = function (item) {
        if (item instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Weapon"]) {
            this.inventory.push(this.selectedHero.equippedWeapon);
            this.selectedHero.equipNewWeapon(item);
        }
        else if (item instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Armor"]) {
            this.inventory.push(this.selectedHero.equippedArmor);
            this.selectedHero.equippedNewArmor(item);
        }
        this.inventory.splice(this.inventory.indexOf(item), 1);
    };
    InvetoryComponent.prototype.removeCharacterFromParty = function () {
        this.availableHeroes.push(this.selectedHero);
        this.heroParty.splice(this.heroParty.indexOf(this.selectedHero), 1);
        this.selectedHero = this.mainCharacter;
    };
    InvetoryComponent.prototype.showAvailableHeroes = function () {
        this.selectedHero = undefined;
        this.showAvailableHeroesScreen = true;
    };
    InvetoryComponent.prototype.addHeroToParty = function (hero) {
        this.heroParty.push(hero);
        this.availableHeroes.splice(this.availableHeroes.indexOf(hero), 1);
        this.setSelectedHero(hero);
    };
    InvetoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "inventory-component",
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/componets/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/componets/inventory/inventory.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_controller_service__WEBPACK_IMPORTED_MODULE_1__["GameControllerService"]])
    ], InvetoryComponent);
    return InvetoryComponent;
}());



/***/ }),

/***/ "./src/app/componets/start/start.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componets/start/start.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n\theight: 100vh; /*100 percent the same size as our window*/\r\n\tbackground: rgb(0, 0, 0, 0.5);\r\n\tpadding-top: calc(50vh - 60px);\r\n}\r\n\t.container-fluid h1 {\r\n\t\tfont-size: 70px;\r\n\t}\r\n\t.container-fluid a {\r\n\t\tfont-size: 20px;\r\n\t}"

/***/ }),

/***/ "./src/app/componets/start/start.component.html":
/*!******************************************************!*\
  !*** ./src/app/componets/start/start.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid text-center text-white\">\r\n\t\r\n\t<h1 class=\"mb-5\">{{gameTitle}}</h1>\r\n\t<a routerLink=\"/character-creation\" class=\"btn btn-primary text-uppercase mb-2 px-5\">Start</a>\r\n\t<p class=\"text-white\">Created By: Edward Flores</p>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/componets/start/start.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componets/start/start.component.ts ***!
  \****************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StartComponent = /** @class */ (function () {
    function StartComponent() {
        this.gameTitle = "Awesomeness";
    }
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "start-component",
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/componets/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/componets/start/start.component.css")]
        })
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/componets/story/story.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componets/story/story.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".story-component-page {\r\n\theight: 100vh;\r\n}\r\n\r\n.story-contaner {\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\tborder: 3px solid #d2b48c;\r\n\tborder-radius: 7px;\r\n\toverflow-y: auto;\r\n}\r\n\r\n.encounter-option {\r\n\tcursor: pointer;\r\n}\r\n\r\n.options-bar {\r\n\tbackground-color: #d2b48c;\r\n\tborder-top: 2px solid darkgreen;\r\n}"

/***/ }),

/***/ "./src/app/componets/story/story.component.html":
/*!******************************************************!*\
  !*** ./src/app/componets/story/story.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"story-component-page\">\r\n\t\r\n\t<div class=\"container body-content py-5 h-75\">\r\n\t\t<div class=\"h-100 story-contaner p-3\">\r\n\t\t\t<p class=\"text-white col-12\" *ngFor=\"let paragraph of currentChapter.story\">\r\n\t\t\t\t{{paragraph}}\r\n\t\t\t</p>\r\n\t\t\t<div class=\"m-3\">\r\n\t\t\t\t<button *ngFor=\"let option of currentChapter.options\" class=\"btn encounter-option mr-3\" (click)=\"chooseAction(option)\">\r\n\t\t\t\t\t{{option}}\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<p class=\"text-white col-12\">\r\n\t\t\t\t{{displayMessage}}\r\n\t\t\t</p>\r\n\t\t\t<p class=\"text-white col-12\" *ngFor=\"let message of successMessages\">\r\n\t\t\t\t{{message}}\r\n\t\t\t</p>\r\n\t\t\t<div class=\"m-3\" *ngIf=\"showNextChapterButton\">\r\n\t\t\t\t<button class=\"btn encounter-option \" (click)=\"nextChapter()\">\r\n\t\t\t\t\tNex Chapter\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"container-fluid h-25\">\r\n\t\t<div class=\"row h-100 options-bar justify-content-center\">\r\n\t\t\t<inventory-component></inventory-component>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/componets/story/story.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componets/story/story.component.ts ***!
  \****************************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_controller_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-controller.service */ "./src/app/services/game-controller.service.ts");
/* harmony import */ var _models_chapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/chapter */ "./src/app/models/chapter.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoryComponent = /** @class */ (function () {
    function StoryComponent(gameControllerService, router) {
        this.gameControllerService = gameControllerService;
        this.router = router;
        this.currentChapter = this.gameControllerService.currentChapter;
        this.heroParty = this.gameControllerService.heroParty;
        this.enemyParty = this.gameControllerService.enemyParty;
        this.actionDelay = this.gameControllerService.actionDelay;
        this.displayMessage = "";
        this.successMessages = [];
        this.showNextChapterButton = false;
    }
    ;
    StoryComponent.prototype.chooseAction = function (action) {
        var _this = this;
        if (this.successMessages.length) {
            return;
        }
        this.displayMessage = "You decide to $(action).";
        setTimeout(function () {
            switch (action) {
                case _models_chapter__WEBPACK_IMPORTED_MODULE_2__["CharacterAction"].attack:
                    _this.tryAttack();
                    break;
                case _models_chapter__WEBPACK_IMPORTED_MODULE_2__["CharacterAction"].sneak:
                    _this.trySneak();
                    break;
                case _models_chapter__WEBPACK_IMPORTED_MODULE_2__["CharacterAction"].persuade:
                    _this.tryPersuade();
                    break;
                case _models_chapter__WEBPACK_IMPORTED_MODULE_2__["CharacterAction"].doNothing:
                    _this.doNothing();
                    break;
                default:
                    console.log("Something went horribly wrong");
                    break;
            }
        }, this.actionDelay);
    };
    StoryComponent.prototype.tryAttack = function () {
        this.gameControllerService.isFighting = true;
        this.router.navigateByUrl("/fight");
    };
    StoryComponent.prototype.trySneak = function () {
        var _this = this;
        var sneakBarrier = 0;
        var sneakPower = 0;
        this.enemyParty.forEach(function (enemy) {
            sneakBarrier += enemy.barriers.sneak;
        });
        this.heroParty.forEach(function (hero) {
            sneakPower += hero.sneak();
        });
        if (sneakPower >= sneakBarrier) {
            this.displayMessage = 'Your attempt at sneaking was a success!';
            setTimeout(function () {
                _this.onSuccess();
            }, this.actionDelay);
        }
        else {
            this.displayMessage = 'Your attempt at sneaking has failed!';
            setTimeout(function () {
                _this.onSneakPersuadeFailure();
            }, this.actionDelay);
        }
    };
    StoryComponent.prototype.tryPersuade = function () {
        var _this = this;
        var persuadeBarrier = 0;
        var persuadePower = 0;
        this.enemyParty.forEach(function (enemy) {
            persuadeBarrier += enemy.barriers.persuade;
        });
        this.heroParty.forEach(function (hero) {
            persuadePower += hero.sneak();
        });
        if (persuadePower >= persuadeBarrier) {
            this.displayMessage = 'Your attempt at persuasion was a success!';
            setTimeout(function () {
                _this.onSuccess();
            }, this.actionDelay);
        }
        else {
            this.displayMessage = 'Your attempt at persuacion has failed!';
            setTimeout(function () {
                _this.onSneakPersuadeFailure();
            }, this.actionDelay);
        }
    };
    StoryComponent.prototype.doNothing = function () {
        var _this = this;
        this.displayMessage = 'You decide to do nothing and move on.';
        setTimeout(function () {
            _this.nextChaper();
        }, this.actionDelay);
    };
    StoryComponent.prototype.onSuccess = function () {
        this.successMessages = this.gameControllerService.encounerSuccess();
        this.showNextChapterButton = true;
    };
    StoryComponent.prototype.onSneakPersuadeFailure = function () {
        var _this = this;
        switch (this.currentChapter.sneakPersuadeFail) {
            case _models_chapter__WEBPACK_IMPORTED_MODULE_2__["CharacterAction"].attack:
                this.displayMessage = 'The enemy attacks you.';
                setTimeout(function () {
                    _this.tryAttack();
                }, this.actionDelay);
                break;
            case _models_chapter__WEBPACK_IMPORTED_MODULE_2__["CharacterAction"].doNothing:
                this.displayMessage = 'Your failure spoiled the opportunity and  your ';
                setTimeout(function () {
                    _this.nextChaper();
                }, this.actionDelay);
                break;
            default:
                break;
        }
    };
    StoryComponent.prototype.nextChaper = function () {
        this.gameControllerService.nextChapter();
        this.currentChapter = this.gameControllerService.currentChapter;
        this.heroParty = this.gameControllerService.heroParty;
        this.enemyParty = this.currentChapter.enemyParty;
        this.displayMessage = "";
        this.successMessages = [];
        this.showNextChapterButton = false;
    };
    StoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "story-component",
            template: __webpack_require__(/*! ./story.component.html */ "./src/app/componets/story/story.component.html"),
            styles: [__webpack_require__(/*! ./story.component.css */ "./src/app/componets/story/story.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_controller_service__WEBPACK_IMPORTED_MODULE_1__["GameControllerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "./src/app/models/chapter.ts":
/*!***********************************!*\
  !*** ./src/app/models/chapter.ts ***!
  \***********************************/
/*! exports provided: CharacterAction, FailureOptions, SuccessOptions, Chapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterAction", function() { return CharacterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailureOptions", function() { return FailureOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessOptions", function() { return SuccessOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chapter", function() { return Chapter; });
var CharacterAction;
(function (CharacterAction) {
    CharacterAction["attack"] = "Attack";
    CharacterAction["sneak"] = "Sneak";
    CharacterAction["persuade"] = "Persuade";
    CharacterAction["doNothing"] = "Do Nothing";
})(CharacterAction || (CharacterAction = {}));
var FailureOptions;
(function (FailureOptions) {
    FailureOptions[FailureOptions["gameOver"] = 0] = "gameOver";
    FailureOptions[FailureOptions["nextChapter"] = 1] = "nextChapter";
})(FailureOptions || (FailureOptions = {}));
var SuccessOptions;
(function (SuccessOptions) {
    SuccessOptions[SuccessOptions["rewardExperience"] = 0] = "rewardExperience";
    SuccessOptions[SuccessOptions["rewardEquipment"] = 1] = "rewardEquipment";
    SuccessOptions[SuccessOptions["addHeroToParty"] = 2] = "addHeroToParty";
})(SuccessOptions || (SuccessOptions = {}));
//cotainer of logic of the chapter
var Chapter = /** @class */ (function () {
    function Chapter() {
    }
    return Chapter;
}());



/***/ }),

/***/ "./src/app/models/character-options.ts":
/*!*********************************************!*\
  !*** ./src/app/models/character-options.ts ***!
  \*********************************************/
/*! exports provided: RaceOptions, ClassOptions, GenderOptions, CharacterOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceOptions", function() { return RaceOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassOptions", function() { return ClassOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderOptions", function() { return GenderOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterOptions", function() { return CharacterOptions; });
var RaceOptions;
(function (RaceOptions) {
    RaceOptions["human"] = "Human";
    RaceOptions["dward"] = "Dward";
    RaceOptions["elf"] = "Elf";
    RaceOptions["halfling"] = "Halfling";
})(RaceOptions || (RaceOptions = {}));
var ClassOptions;
(function (ClassOptions) {
    ClassOptions["warrior"] = "Warrior";
    ClassOptions["ranger"] = "Ranger";
    ClassOptions["rogue"] = "Rougue";
    ClassOptions["priest"] = "Priest";
})(ClassOptions || (ClassOptions = {}));
var GenderOptions;
(function (GenderOptions) {
    GenderOptions["male"] = "Male";
    GenderOptions["female"] = "Female";
    GenderOptions["thing"] = "Thing";
})(GenderOptions || (GenderOptions = {}));
var CharacterOptions = {
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
};


/***/ }),

/***/ "./src/app/models/character.ts":
/*!*************************************!*\
  !*** ./src/app/models/character.ts ***!
  \*************************************/
/*! exports provided: Armor, Weapon, CharacterSkill, FightOptions, ExperienceToLevel, BaseCharacter, Monster, Hero, Warrior, Ranger, Rogue, Priest, checkRace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Armor", function() { return Armor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSkill", function() { return CharacterSkill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FightOptions", function() { return FightOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceToLevel", function() { return ExperienceToLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCharacter", function() { return BaseCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Monster", function() { return Monster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warrior", function() { return Warrior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ranger", function() { return Ranger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rogue", function() { return Rogue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Priest", function() { return Priest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRace", function() { return checkRace; });
/* harmony import */ var _character_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character-options */ "./src/app/models/character-options.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Armor = /** @class */ (function () {
    function Armor(name, attackBariesBonus) {
        this.name = name;
        this.attackBariesBonus = attackBariesBonus;
    }
    return Armor;
}());

var Weapon = /** @class */ (function () {
    function Weapon(name, minDamage, maxDamage) {
        this.name = name;
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
    }
    return Weapon;
}());

var CharacterSkill;
(function (CharacterSkill) {
    CharacterSkill["attack"] = "attack";
    CharacterSkill["sneak"] = "sneak";
    CharacterSkill["persuade"] = "persuade";
    CharacterSkill["intelligence"] = "intelligence";
})(CharacterSkill || (CharacterSkill = {}));
var FightOptions;
(function (FightOptions) {
    FightOptions["attack"] = "Attack";
    FightOptions["specialAttack"] = "Special Attack";
    FightOptions["none"] = "None";
})(FightOptions || (FightOptions = {}));
var ExperienceToLevel = {
    1: 1000,
    2: 2000,
    3: 3000,
    4: 4000,
    5: 5000,
    6: 6000,
    7: 7000,
    8: 8000,
    9: 9000
};
var BaseCharacter = /** @class */ (function () {
    function BaseCharacter(name, health, skill) {
        if (skill === void 0) { skill = { attack: 0, sneak: 0, persuade: 0, intelligence: 0 }; }
        this.name = name;
        this.maxHealth = health;
        this.currentHealth = health;
        this.skill = skill;
        this.isIncapacitated = false;
        this.barriers = {
            attack: 10,
            sneak: 10,
            persuade: 10
        };
    }
    BaseCharacter.prototype.attack = function () {
        return Math.floor(Math.random() * 20) + 1 + this.skill.attack;
    };
    BaseCharacter.prototype.sneak = function () {
        return Math.floor(Math.random() * 20) + 1 + this.skill.sneak;
    };
    BaseCharacter.prototype.persuade = function () {
        return Math.floor(Math.random() * 20) + 1 + this.skill.persuade;
    };
    BaseCharacter.prototype.dealDamage = function () {
        return Math.floor(Math.random() * (this.equippedWeapon.maxDamage - this.equippedWeapon.minDamage + 1));
    };
    return BaseCharacter;
}());

var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster(name, health, skill, barriers, minDamage, maxDamage, spriteUrl) {
        var _this = _super.call(this, name, health, skill) || this;
        _this.isTrapped = false;
        _this.poisonStacks = 0;
        _this.isStrongPoison = false;
        _this.hasTakenPoisonDamageThisTurn = false;
        _this.barriers = barriers;
        _this.equippedWeapon = new Weapon(undefined, minDamage, maxDamage);
        _this.spriteUrl = spriteUrl;
        return _this;
    }
    return Monster;
}(BaseCharacter));

var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(name, gender, race, level, health, skills, weapon, armor) {
        var _this = _super.call(this, name, health, skills) || this;
        _this.gender = gender;
        _this.race = race;
        _this.experience = 0;
        _this.level = level;
        _this.equippedWeapon = weapon;
        _this.equippedNewArmor(armor);
        return _this;
    }
    Hero.prototype.levelUp = function () {
        this.experience -= ExperienceToLevel[this.level++];
        this.availbleSkillPoints += 2;
        if (this.experience >= ExperienceToLevel[this.level]) {
            this.levelUp();
        }
    };
    Hero.prototype.equippedNewArmor = function (armor) {
        if (this.equippedArmor) {
            this.barriers.attack -= this.equippedArmor.attackBariesBonus;
        }
        this.equippedArmor = armor;
        this.barriers.attack += armor.attackBariesBonus;
    };
    Hero.prototype.equipNewWeapon = function (weapon) {
        this.equippedWeapon = weapon;
    };
    Hero.prototype.rest = function () {
        this.currentHealth = this.maxHealth;
        this.isIncapacitated = false;
        this.turnUntilSpecialAvailableAgain = 0;
    };
    return Hero;
}(BaseCharacter));

var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior(name, gender, race, level, health, skills, weapon, armor) {
        var _this = _super.call(this, name, gender, race, level, health, skills, weapon, armor) || this;
        _this.characterRole = _character_options__WEBPACK_IMPORTED_MODULE_0__["ClassOptions"].warrior;
        _this.skill.attack += 2;
        _this.skill.persuade++;
        _this.skill.sneak--;
        _this.skill.intelligence--;
        _this.spriteUrl = _this.gender === _character_options__WEBPACK_IMPORTED_MODULE_0__["GenderOptions"].male ? "./assets/warrior-m-1.png" : "./assets/warrior-f-1.png";
        return _this;
    }
    Warrior.prototype.levelUp = function () {
        this.maxHealth = Math.floor(Math.random() * 10) + 1;
        this.currentHealth = this.maxHealth;
        _super.prototype.levelUp.call(this);
    };
    return Warrior;
}(Hero));

var Ranger = /** @class */ (function (_super) {
    __extends(Ranger, _super);
    function Ranger(name, gender, race, level, health, skills, weapon, armor) {
        var _this = _super.call(this, name, gender, race, level, health, skills, weapon, armor) || this;
        _this.characterRole = _character_options__WEBPACK_IMPORTED_MODULE_0__["ClassOptions"].warrior;
        _this.skill.sneak += 2;
        _this.skill.intelligence++;
        _this.skill.persuade--;
        _this.skill.attack--;
        _this.spriteUrl = _this.gender === _character_options__WEBPACK_IMPORTED_MODULE_0__["GenderOptions"].male ? "./assets/ranger-m-1.png" : "./assets/ranger-f-1.png";
        return _this;
    }
    Ranger.prototype.levelUp = function () {
        this.maxHealth = Math.floor(Math.random() * 8) + 1;
        this.currentHealth = this.maxHealth;
        _super.prototype.levelUp.call(this);
    };
    return Ranger;
}(Hero));

var Rogue = /** @class */ (function (_super) {
    __extends(Rogue, _super);
    function Rogue(name, gender, race, level, health, skills, weapon, armor) {
        var _this = _super.call(this, name, gender, race, level, health, skills, weapon, armor) || this;
        _this.characterRole = _character_options__WEBPACK_IMPORTED_MODULE_0__["ClassOptions"].warrior;
        _this.skill.sneak += 2;
        _this.skill.attack++;
        _this.skill.intelligence--;
        _this.skill.persuade--;
        _this.spriteUrl = _this.gender === _character_options__WEBPACK_IMPORTED_MODULE_0__["GenderOptions"].male ? "./assets/rogue-m-1.png" : "./assets/rogue-f-1.png";
        return _this;
    }
    Rogue.prototype.levelUp = function () {
        this.maxHealth = Math.floor(Math.random() * 8) + 1;
        this.currentHealth = this.maxHealth;
        _super.prototype.levelUp.call(this);
    };
    return Rogue;
}(Hero));

var Priest = /** @class */ (function (_super) {
    __extends(Priest, _super);
    function Priest(name, gender, race, level, health, skills, weapon, armor) {
        var _this = _super.call(this, name, gender, race, level, health, skills, weapon, armor) || this;
        _this.characterRole = _character_options__WEBPACK_IMPORTED_MODULE_0__["ClassOptions"].warrior;
        _this.skill.intelligence += 2;
        _this.skill.persuade++;
        _this.skill.sneak--;
        _this.skill.attack--;
        _this.spriteUrl = _this.gender === _character_options__WEBPACK_IMPORTED_MODULE_0__["GenderOptions"].male ? "./assets/priest-m-1.png" : "./assets/priest-f-1.png";
        return _this;
    }
    Priest.prototype.levelUp = function () {
        this.maxHealth = Math.floor(Math.random() * 6) + 1;
        this.currentHealth = this.maxHealth;
        _super.prototype.levelUp.call(this);
    };
    return Priest;
}(Hero));

var checkRace = function (hero) {
    switch (hero.race) {
        case _character_options__WEBPACK_IMPORTED_MODULE_0__["RaceOptions"].human:
            hero.skill.persuade += 2;
            hero.skill.intelligence++;
            hero.skill.sneak -= 2;
            break;
        case _character_options__WEBPACK_IMPORTED_MODULE_0__["RaceOptions"].elf:
            hero.skill.intelligence += 2;
            hero.skill.sneak++;
            hero.skill.persuade -= 2;
            break;
        case _character_options__WEBPACK_IMPORTED_MODULE_0__["RaceOptions"].dward:
            hero.skill.attack += 2;
            hero.skill.persuade++;
            hero.skill.intelligence -= 2;
            break;
        case _character_options__WEBPACK_IMPORTED_MODULE_0__["RaceOptions"].halfling:
            hero.skill.sneak += 2;
            hero.skill.attack++;
            hero.skill.persuade -= 2;
            break;
        default:
            // code...
            break;
    }
};


/***/ }),

/***/ "./src/app/services/game-controller.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/game-controller.service.ts ***!
  \*****************************************************/
/*! exports provided: GameControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameControllerService", function() { return GameControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/character */ "./src/app/models/character.ts");
/* harmony import */ var _models_chapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/chapter */ "./src/app/models/chapter.ts");
/* harmony import */ var _chapters_Chapter1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chapters/Chapter1 */ "./src/app/chapters/Chapter1.ts");
/* harmony import */ var _models_character_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/character-options */ "./src/app/models/character-options.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GameControllerService = /** @class */ (function () {
    function GameControllerService(router) {
        this.router = router;
        this.currentChapter = _chapters_Chapter1__WEBPACK_IMPORTED_MODULE_4__["Chapter1"];
        this.isFighting = false;
        this.actionDelay = 1500;
        this.heroParty = [];
        this.partyInventory = [];
        this.availableHeroes = [];
        this.enemyParty = this.currentChapter.enemyParty;
    }
    GameControllerService.prototype.setMainCharacter = function (character) {
        switch (character.class) {
            case _models_character_options__WEBPACK_IMPORTED_MODULE_5__["ClassOptions"].warrior:
                this.mainCharacter = new _models_character__WEBPACK_IMPORTED_MODULE_2__["Warrior"](character.name, character.gender, character.race, 1, 10, { attack: 0, sneak: 0, persuade: 0, intelligence: 0 }, new _models_character__WEBPACK_IMPORTED_MODULE_2__["Weapon"]("knife", 1, 3), new _models_character__WEBPACK_IMPORTED_MODULE_2__["Armor"]("Clothes", 0));
                break;
            case _models_character_options__WEBPACK_IMPORTED_MODULE_5__["ClassOptions"].ranger:
                this.mainCharacter = new _models_character__WEBPACK_IMPORTED_MODULE_2__["Ranger"](character.name, character.gender, character.race, 1, 10, { attack: 0, sneak: 0, persuade: 0, intelligence: 0 }, new _models_character__WEBPACK_IMPORTED_MODULE_2__["Weapon"]("knife", 1, 3), new _models_character__WEBPACK_IMPORTED_MODULE_2__["Armor"]("Clothes", 0));
                break;
            case _models_character_options__WEBPACK_IMPORTED_MODULE_5__["ClassOptions"].rogue:
                this.mainCharacter = new _models_character__WEBPACK_IMPORTED_MODULE_2__["Rogue"](character.name, character.gender, character.race, 1, 10, { attack: 0, sneak: 0, persuade: 0, intelligence: 0 }, new _models_character__WEBPACK_IMPORTED_MODULE_2__["Weapon"]("knife", 1, 3), new _models_character__WEBPACK_IMPORTED_MODULE_2__["Armor"]("Clothes", 0));
                break;
            case _models_character_options__WEBPACK_IMPORTED_MODULE_5__["ClassOptions"].priest:
                this.mainCharacter = new _models_character__WEBPACK_IMPORTED_MODULE_2__["Priest"](character.name, character.gender, character.race, 1, 10, { attack: 0, sneak: 0, persuade: 0, intelligence: 0 }, new _models_character__WEBPACK_IMPORTED_MODULE_2__["Weapon"]("knife", 1, 3), new _models_character__WEBPACK_IMPORTED_MODULE_2__["Armor"]("Clothes", 0));
                break;
            default:
                // code...
                break;
        }
        Object(_models_character__WEBPACK_IMPORTED_MODULE_2__["checkRace"])(this.mainCharacter);
        this.heroParty.push(this.mainCharacter);
        this.router.navigateByUrl('/story');
    };
    GameControllerService.prototype.encounerSuccess = function () {
        var _this = this;
        var messages = [];
        this.currentChapter.isSucced.forEach(function (reward) {
            switch (reward) {
                case _models_chapter__WEBPACK_IMPORTED_MODULE_3__["SuccessOptions"].rewardExperience:
                    messages.push("Each menber of the party received " + _this.currentChapter.rewards.experience + ". experience.");
                    _this.heroParty.forEach(function (hero) {
                        hero.experience += _this.currentChapter.rewards.experience;
                        if (hero.experience >= _models_character__WEBPACK_IMPORTED_MODULE_2__["ExperienceToLevel"][hero.level]) {
                            messages.push(hero.name + " leveled up! Upgrade their stats on the inventory screen.");
                            hero.levelUp();
                        }
                    });
                    break;
                case _models_chapter__WEBPACK_IMPORTED_MODULE_3__["SuccessOptions"].rewardEquipment:
                    messages.push('You received the following equipment: ');
                    _this.currentChapter.rewards.equipment.forEach(function (equipment) {
                        if (equipment instanceof _models_character__WEBPACK_IMPORTED_MODULE_2__["Armor"]) {
                            messages.push(equipment.name + " -- Attack Barrier Bonus: " + equipment.attackBariesBonus);
                        }
                        else {
                            messages.push(equipment.name + " -- Min Damage: " + equipment.minDamage + ", Max Damage: " + equipment.maxDamage);
                        }
                        _this.partyInventory.push(equipment);
                    });
                    break;
                case _models_chapter__WEBPACK_IMPORTED_MODULE_3__["SuccessOptions"].addHeroToParty:
                    var newHero = _this.currentChapter.rewards.newHero;
                    if (_this.heroParty.length < 3) {
                        messages.push("A new hero joined the party Combo Amigos! " + newHero.name + " - " + newHero.characterRole + " - " + newHero.level);
                        _this.heroParty.push(newHero);
                    }
                    else {
                        messages.push("A new Hero is available to joined the party Combo Amigos! " + newHero.name + " - " + newHero.characterRole + " - " + newHero.level);
                        _this.availableHeroes.push(newHero);
                    }
                    break;
                default:
                    // code...
                    break;
            }
        });
        return messages;
    };
    GameControllerService.prototype.nextChapter = function () {
        this.heroParty.forEach(function (hero) { return hero.rest(); });
        this.currentChapter = this.currentChapter.nextChapter;
        this.enemyParty = this.currentChapter.enemyParty;
    };
    GameControllerService.prototype.gameOver = function () {
        this.mainCharacter = undefined;
        this.currentChapter = _chapters_Chapter1__WEBPACK_IMPORTED_MODULE_4__["Chapter1"];
        this.heroParty = [];
        this.partyInventory = [];
        this.availableHeroes = [];
        this.enemyParty = this.currentChapter.enemyParty;
        this.router.navigateByUrl("/");
    };
    GameControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GameControllerService);
    return GameControllerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\peter\Documents\Projects\Angular-RPG-Game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map