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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <mat-icon>movie</mat-icon>\n      <h1>Movie Tracker</h1>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</div>\n<div class=\"container\">\n  <app-movie-list></app-movie-list>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\n  margin: 0 1em 0 1em; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/movie-list/movie-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_6__["MovieListComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/data.ts":
/*!********************************!*\
  !*** ./src/app/models/data.ts ***!
  \********************************/
/*! exports provided: MOVIE_LIST, GENRE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIE_LIST", function() { return MOVIE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENRE_LIST", function() { return GENRE_LIST; });
var MOVIE_LIST = [
    {
        id: Math.floor(Math.random() * 1000).toString(),
        title: 'Jurassic Park',
        genre: 'Science Fiction',
        rating: '5',
    },
    {
        id: Math.floor(Math.random() * 1000).toString(),
        title: 'Stargate',
        genre: 'Science Fiction',
        rating: '4',
    },
    {
        id: Math.floor(Math.random() * 1000).toString(),
        title: 'Napoleon Dynamite',
        genre: 'Comedy',
        rating: '5',
    },
];
var GENRE_LIST = [
    'Action',
    'Comedy',
    'Fantasy',
    'Horror',
    'Science Fiction',
];


/***/ }),

/***/ "./src/app/movie-list/movie-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table [dataSource]=\"movieList\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"delete\">\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n      <button mat-raised-button color=\"default\" (click)=\"deleteMovie(element)\">Delete</button>\n    </mat-cell>\n  </ng-container>\n\n  <!-- Title Column -->\n  <ng-container matColumnDef=\"title\">\n    <mat-header-cell *matHeaderCellDef>My favorite movies:</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n      <mat-form-field>\n        <input aria-label=\"title\" matInput [(ngModel)]=\"element.title\" (change)=\"editMovie(element)\">\n      </mat-form-field>\n      <mat-form-field class=\"select-sm\">\n        <mat-select aria-label=\"genre\" [(ngModel)]=\"element.genre\" (selectionChange)=\"editMovie(element)\">\n          <mat-option *ngFor=\"let genre of genreList\" [value]=\"genre\">{{ genre }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-cell>\n  </ng-container>\n\n  <!-- Genre Column -->\n  <ng-container matColumnDef=\"genre\">\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n      <mat-form-field>\n        <mat-select aria-label=\"genre\" [(ngModel)]=\"element.genre\" (selectionChange)=\"editMovie(element)\">\n          <mat-option *ngFor=\"let genre of genreList\" [value]=\"genre\">{{ genre }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-cell>\n  </ng-container>\n\n  <!-- Rating Column -->\n  <ng-container matColumnDef=\"rating\">\n    <mat-header-cell *matHeaderCellDef>Rating:</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">\n      <span class=\"sr-only\">current rating {{ element.rating }} stars</span>\n      <button aria-label=\"set rating to 1 star\" mat-icon-button (click)=\"setRating(element, 1)\">\n        <mat-icon [color]=\"element.rating >= '1' ? 'primary' : 'default'\">star</mat-icon>\n      </button>\n      <button aria-label=\"set rating to 2 stars\" mat-icon-button (click)=\"setRating(element, 2)\">\n        <mat-icon [color]=\"element.rating >= '2' ? 'primary' : 'default'\">star</mat-icon>\n      </button>\n      <button aria-label=\"set rating to 3 stars\" mat-icon-button (click)=\"setRating(element, 3)\">\n        <mat-icon [color]=\"element.rating >= '3' ? 'primary' : 'default'\">star</mat-icon>\n      </button>\n      <button aria-label=\"set rating to 4 stars\" mat-icon-button (click)=\"setRating(element, 4)\">\n        <mat-icon [color]=\"element.rating >= '4' ? 'primary' : 'default'\">star</mat-icon>\n      </button>\n      <button aria-label=\"set rating to 5 stars\" mat-icon-button (click)=\"setRating(element, 5)\">\n        <mat-icon [color]=\"element.rating >= '5' ? 'primary' : 'default'\">star</mat-icon>\n      </button>\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n\n<mat-card class=\"mat-elevation-z8\">\n  <h2 mat-subheader>New Movie:</h2>\n  <mat-card-content>\n    <form [formGroup]=\"newMovieFormGroup\">\n      <mat-form-field>\n        <input matInput placeholder=\"enter a title\" formControlName=\"title\">\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select formControlName=\"genre\" placeholder=\"select a genre\">\n          <mat-option *ngFor=\"let genre of genreList\" value=\"{{ genre }}\">{{ genre }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-card-actions>\n        <button mat-raised-button color=\"primary\" [disabled]=\"!newMovieFormGroup.valid\" (click)=\"saveMovie()\">Save</button>\n        <button mat-raised-button color=\"default\" (click)=\"resetForm()\">Cancel</button>\n      </mat-card-actions>\n    </form>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/movie-list/movie-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-table {\n  margin: 2em auto;\n  max-width: 46em;\n  min-width: 30em; }\n\nmat-header-cell {\n  font-weight: normal;\n  font-size: 1em;\n  color: rgba(0, 0, 0, 0.87); }\n\nmat-header-cell.mat-column-delete {\n    max-width: 6.5em; }\n\nmat-footer-row, mat-header-row, mat-row {\n  border-bottom-width: 0; }\n\nmat-cell.mat-column-delete {\n  max-width: 7em; }\n\n.select-sm {\n  display: none; }\n\nmat-card {\n  margin: 2em auto;\n  max-width: 44em;\n  min-width: 28em; }\n\nmat-card mat-card-content {\n    padding: 1em; }\n\nmat-card mat-form-field {\n    margin-right: 2em; }\n\nmat-card mat-card-actions {\n    margin-left: 0; }\n\nh2 {\n  margin-bottom: 0; }\n\nbutton.mat-icon-button {\n  width: 2em; }\n\nbutton.mat-icon-button mat-icon[ng-reflect-color=\"default\"] {\n    color: rgba(0, 0, 0, 0.4); }\n\nbutton.mat-icon-button:focus ::ng-deep mat-icon,\n  button.mat-icon-button mat-icon:hover {\n    color: #ffa600; }\n\nh2 {\n  font-weight: normal;\n  font-size: 1em; }\n\n/* https://stackoverflow.com/questions/45439313/angular-2-4-how-to-style-angular-material-design-snackbar */\n\n::ng-deep snack-bar-container.snack-bar-custom span, ::ng-deep snack-bar-container.snack-bar-custom button {\n  color: white; }\n\n@media only screen and (max-width: 760px) {\n  mat-cell.mat-column-title {\n    display: block;\n    padding-right: 1em; }\n    mat-cell.mat-column-title mat-form-field {\n      display: block; }\n  .mat-column-genre {\n    display: none; }\n  mat-footer-row, mat-header-row, mat-row {\n    border-bottom-width: 1px; } }\n"

/***/ }),

/***/ "./src/app/movie-list/movie-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.ts ***!
  \****************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/movie.service */ "./src/app/shared/movie.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/data */ "./src/app/models/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(movieService, fb, snackBar) {
        this.movieService = movieService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.genreList = _models_data__WEBPACK_IMPORTED_MODULE_4__["GENRE_LIST"];
        this.snackBarConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
        this.displayedColumns = ['delete', 'title', 'genre', 'rating'];
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getMovieList().subscribe(function (list) {
            _this.movieList = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](list);
        });
        this.newMovieFormGroup = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            genre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.snackBarConfig = {
            duration: 5000,
            panelClass: 'snack-bar-custom',
        };
    };
    Object.defineProperty(MovieListComponent.prototype, "title", {
        get: function () { return this.newMovieFormGroup.get('title'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MovieListComponent.prototype, "genre", {
        get: function () { return this.newMovieFormGroup.get('genre'); },
        enumerable: true,
        configurable: true
    });
    MovieListComponent.prototype.deleteMovie = function (movie) {
        var _this = this;
        this.movieService.deleteMovie(movie).subscribe(function (list) {
            _this.movieList = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](list);
            _this.snackBar.open('Movie deleted', String.fromCodePoint(0x2713), _this.snackBarConfig);
        });
    };
    MovieListComponent.prototype.editMovie = function (movie) {
        var _this = this;
        this.movieService.editMovie(movie).subscribe(function (list) {
            _this.movieList = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](list);
            _this.snackBar.open('Movie modified', String.fromCodePoint(0x2713), _this.snackBarConfig);
        });
    };
    MovieListComponent.prototype.setRating = function (movie, newValue) {
        var movieToEdit = movie;
        movieToEdit.rating = newValue.toString();
        this.editMovie(movieToEdit);
    };
    MovieListComponent.prototype.saveMovie = function () {
        var _this = this;
        var movie = {
            id: Math.floor(Math.random() * 1000).toString(),
            title: this.title.value,
            genre: this.genre.value,
        };
        this.movieService.saveMovie(movie).subscribe(function (list) {
            _this.movieList = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](list);
            _this.snackBar.open('Movie saved', String.fromCodePoint(0x2713), _this.snackBarConfig);
            _this.resetForm();
        });
    };
    MovieListComponent.prototype.resetForm = function () {
        this.title.reset();
        this.genre.reset();
    };
    MovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.scss */ "./src/app/movie-list/movie-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_movie_service__WEBPACK_IMPORTED_MODULE_1__["MovieService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/shared/movie.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/movie.service.ts ***!
  \*****************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/data */ "./src/app/models/data.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieService = /** @class */ (function () {
    function MovieService() {
    }
    MovieService.prototype.getMovieList = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            observer.next(_models_data__WEBPACK_IMPORTED_MODULE_1__["MOVIE_LIST"]);
            observer.complete();
        }); // simulate async http request
    };
    MovieService.prototype.saveMovie = function (movie) {
        _models_data__WEBPACK_IMPORTED_MODULE_1__["MOVIE_LIST"].push(movie);
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            observer.next(_models_data__WEBPACK_IMPORTED_MODULE_1__["MOVIE_LIST"]);
            observer.complete();
        }); // simulate async http request
    };
    MovieService.prototype.editMovie = function (movie) {
        var movieIndex = _models_data__WEBPACK_IMPORTED_MODULE_1__["MOVIE_LIST"].findIndex(function (item) { return item.id === movie.id; });
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (_models_data__WEBPACK_IMPORTED_MODULE_1__["MOVIE_LIST"][movieIndex].title !== movie.title) {
                observer.error('Protected property');
            }
            else {
                _models_data__WEBPACK_IMPORTED_MODULE_1__["MOVIE_LIST"][movieIndex] = movie;
                observer.next(_models_data__WEBPACK_IMPORTED_MODULE_1__["MOVIE_LIST"]);
                observer.complete();
            }
        }); // simulate async http request
    };
    MovieService.prototype.deleteMovie = function (movie) {
        var movieIndex = _models_data__WEBPACK_IMPORTED_MODULE_1__["MOVIE_LIST"].findIndex(function (item) { return item.id === movie.id; });
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _models_data__WEBPACK_IMPORTED_MODULE_1__["MOVIE_LIST"].splice(movieIndex, 1);
            observer.next(_models_data__WEBPACK_IMPORTED_MODULE_1__["MOVIE_LIST"]);
            observer.complete();
        }); // simulate async http request
    };
    MovieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MovieService);
    return MovieService;
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

module.exports = __webpack_require__(/*! C:\Projects\temp\movie-tracker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map