(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <app-header></app-header>\n  <mat-card-content>\n    <app-list></app-list>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/button/button.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/button/button.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button>\n    <mat-icon [color]=\"color\">{{ icon }}</mat-icon>\n</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/create-button/create-button.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/create-button/create-button.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\">\n    <mat-icon>add_circle</mat-icon> Crear\n</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/delete-button/delete-button.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/delete-button/delete-button.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-button color=\"accent\" icon=\"delete_forever\"></app-button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-button/edit-button.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-button/edit-button.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-button color=\"warn\" icon=\"edit\"></app-button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/end-edit-button/end-edit-button.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/end-edit-button/end-edit-button.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-button color=\"primary\" icon=\"check\"></app-button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-header class=\"full-width-input\">\n    <mat-card-title class=\"full-width-input\">\n       <span class=\"title\">Aplicación de Notas</span>\n        <br/>\n        <!-- <input type=\"text\" [formControl]=\"titleTxt\" class=\"full-width-input\"> -->\n        <mat-form-field>\n            <input matInput [formControl]=\"titleTxt\" placeholder=\"Título\">\n        </mat-form-field>\n        <br/>\n        <mat-form-field>\n            <textarea matInput [formControl]=\"contentTxt\" placeholder=\"Contenido\"></textarea>\n        </mat-form-field>\n        <!-- <textarea cols=\"30\" rows=\"10\" [formControl]=\"contentTxt\"></textarea> -->\n        <br/>\n        <app-create-button class=\"create-button\" (click)=\"createNote()\"></app-create-button>\n    </mat-card-title>\n</mat-card-header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/list-item/list-item.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/list-item/list-item.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n    <mat-card-header class=\"header\">\n        <mat-card-title class=\"header__title\">\n            <div *ngIf=\"editable\">\n                <input type=\"text\" [formControl]=\"titleTxt\">\n            </div>\n            <div *ngIf=\"!editable\">\n                {{ note.title }}\n            </div>\n        </mat-card-title>\n        <div class=\"header__buttons\">\n            <div *ngIf=\"editable\">\n                <app-end-edit-button (click)=\"handleEndEdit()\" class=\"header__end-edit-button\"></app-end-edit-button>\n            </div>\n            <div *ngIf=\"!editable\">\n                <app-edit-button (click)=\"handleEditItem()\" class=\"header__edit-button\"></app-edit-button>\n                <app-delete-button (click)=\"handleDeleteItem()\" class=\"header__delete-button\"></app-delete-button>\n            </div>\n        </div>\n    </mat-card-header>   \n    <mat-card-content class=\"content\">\n        <app-sheet [note]=\"note\" [editable]=\"editable\" (tempContent)=\"handleTempContent($event)\"></app-sheet>\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/list/list.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/list/list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-list-item *ngFor=\"let note of notes\" [note]=\"note\"></app-list-item>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sheet/sheet.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sheet/sheet.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"sheet\" [class.sheet--editing]=\"editable\">\n    <textarea [class.text--editing]=\"editable\"\n        class=\"text\"\n        [formControl]=\"tempContentTxt\"\n        cols=\"30\"\n        rows=\"10\"\n    ></textarea>\n    <markdown\n        class=\"markdown\"\n        ngPreserveWhitespaces\n        [data]=\"tempContentTxt.value\"\n    ></markdown>\n</main>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin: 5vh 10vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NyaXN0aWFudG9ycmVzL0RvY3VtZW50b3MvY3Jpc3RpYW4vcHJhY3RpY2FzLzAxLW5vdGVzLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBtYXJnaW46IDV2aCAxMHZ3O1xufSIsIi5jYXJkIHtcbiAgbWFyZ2luOiA1dmggMTB2dztcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.title = 'notes-app';
        this.store.select('notes').subscribe(function (notes) {
            localStorage.setItem('state', JSON.stringify(notes));
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_edit_button_edit_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-button/edit-button.component */ "./src/app/components/edit-button/edit-button.component.ts");
/* harmony import */ var _components_create_button_create_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-button/create-button.component */ "./src/app/components/create-button/create-button.component.ts");
/* harmony import */ var _components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/delete-button/delete-button.component */ "./src/app/components/delete-button/delete-button.component.ts");
/* harmony import */ var _components_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sheet/sheet.component */ "./src/app/components/sheet/sheet.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/list-item/list-item.component */ "./src/app/components/list-item/list-item.component.ts");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/button/button.component */ "./src/app/components/button/button.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.reducers */ "./src/app/app.reducers.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_end_edit_button_end_edit_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/end-edit-button/end-edit-button.component */ "./src/app/components/end-edit-button/end-edit-button.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_edit_button_edit_button_component__WEBPACK_IMPORTED_MODULE_4__["EditButtonComponent"],
                _components_create_button_create_button_component__WEBPACK_IMPORTED_MODULE_5__["CreateButtonComponent"],
                _components_delete_button_delete_button_component__WEBPACK_IMPORTED_MODULE_6__["DeleteButtonComponent"],
                _components_sheet_sheet_component__WEBPACK_IMPORTED_MODULE_7__["SheetComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_14__["ListItemComponent"],
                _components_button_button_component__WEBPACK_IMPORTED_MODULE_15__["ButtonComponent"],
                _components_end_edit_button_end_edit_button_component__WEBPACK_IMPORTED_MODULE_20__["EndEditButtonComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_18__["appReducers"], {
                    runtimeChecks: {
                        strictStateImmutability: true,
                        strictActionImmutability: true
                    }
                }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_17__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production,
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducers.ts":
/*!*********************************!*\
  !*** ./src/app/app.reducers.ts ***!
  \*********************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _store_notes_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/notes.reducers */ "./src/app/store/notes.reducers.ts");

var appReducers = {
    notes: _store_notes_reducers__WEBPACK_IMPORTED_MODULE_0__["reducer"],
};


/***/ }),

/***/ "./src/app/components/button/button.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/button/button.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ButtonComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ButtonComponent.prototype, "icon", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/components/button/button.component.scss")]
        })
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/create-button/create-button.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-button/create-button.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWJ1dHRvbi9jcmVhdGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/create-button/create-button.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-button/create-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateButtonComponent", function() { return CreateButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateButtonComponent = /** @class */ (function () {
    function CreateButtonComponent() {
    }
    CreateButtonComponent.prototype.ngOnInit = function () {
    };
    CreateButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-button',
            template: __webpack_require__(/*! raw-loader!./create-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/create-button/create-button.component.html"),
            styles: [__webpack_require__(/*! ./create-button.component.scss */ "./src/app/components/create-button/create-button.component.scss")]
        })
    ], CreateButtonComponent);
    return CreateButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/delete-button/delete-button.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/delete-button/delete-button.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsZXRlLWJ1dHRvbi9kZWxldGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/delete-button/delete-button.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/delete-button/delete-button.component.ts ***!
  \*********************************************************************/
/*! exports provided: DeleteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteButtonComponent", function() { return DeleteButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeleteButtonComponent = /** @class */ (function () {
    function DeleteButtonComponent() {
    }
    DeleteButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delete-button',
            template: __webpack_require__(/*! raw-loader!./delete-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/delete-button/delete-button.component.html"),
            styles: [__webpack_require__(/*! ./delete-button.component.scss */ "./src/app/components/delete-button/delete-button.component.scss")]
        })
    ], DeleteButtonComponent);
    return DeleteButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-button/edit-button.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-button/edit-button.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1idXR0b24vZWRpdC1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-button/edit-button.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-button/edit-button.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditButtonComponent", function() { return EditButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditButtonComponent = /** @class */ (function () {
    function EditButtonComponent() {
    }
    EditButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-button',
            template: __webpack_require__(/*! raw-loader!./edit-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-button/edit-button.component.html"),
            styles: [__webpack_require__(/*! ./edit-button.component.scss */ "./src/app/components/edit-button/edit-button.component.scss")]
        })
    ], EditButtonComponent);
    return EditButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/end-edit-button/end-edit-button.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/end-edit-button/end-edit-button.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW5kLWVkaXQtYnV0dG9uL2VuZC1lZGl0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/end-edit-button/end-edit-button.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/end-edit-button/end-edit-button.component.ts ***!
  \*************************************************************************/
/*! exports provided: EndEditButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndEditButtonComponent", function() { return EndEditButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EndEditButtonComponent = /** @class */ (function () {
    function EndEditButtonComponent() {
    }
    EndEditButtonComponent.prototype.ngOnInit = function () {
    };
    EndEditButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-end-edit-button',
            template: __webpack_require__(/*! raw-loader!./end-edit-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/end-edit-button/end-edit-button.component.html"),
            styles: [__webpack_require__(/*! ./end-edit-button.component.scss */ "./src/app/components/end-edit-button/end-edit-button.component.scss")]
        })
    ], EndEditButtonComponent);
    return EndEditButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .row .create-button {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NyaXN0aWFudG9ycmVzL0RvY3VtZW50b3MvY3Jpc3RpYW4vcHJhY3RpY2FzLzAxLW5vdGVzLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0UsaUJBQUE7QUNEViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIC5yb3cge1xuICAgICAgICAuY3JlYXRlLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87ICBcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY29udGFpbmVyIC5yb3cgLmNyZWF0ZS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_notes_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/notes.actions */ "./src/app/store/notes.actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store) {
        this.store = store;
        this.titleTxt = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.contentTxt = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.createNote = function () {
        if (this.contentTxt.invalid || this.titleTxt.invalid)
            return;
        var note = {
            content: this.contentTxt.value,
            title: this.titleTxt.value,
        };
        this.store.dispatch(Object(src_app_store_notes_actions__WEBPACK_IMPORTED_MODULE_3__["ADD"])({ note: note }));
        this.contentTxt.reset();
        this.titleTxt.reset();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/list-item/list-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/list-item/list-item.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 3px 0px 11px 0px black;\n  margin: 10px;\n}\n.card .header__buttons {\n  display: inline-block;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NyaXN0aWFudG9ycmVzL0RvY3VtZW50b3MvY3Jpc3RpYW4vcHJhY3RpY2FzLzAxLW5vdGVzLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0FDQ0o7QURDUTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAzcHggMHB4IDExcHggMHB4IGJsYWNrO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICAuaGVhZGVyIHtcbiAgICAgICAgJl9fYnV0dG9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDNweCAwcHggMTFweCAwcHggYmxhY2s7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jYXJkIC5oZWFkZXJfX2J1dHRvbnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/list-item/list-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/list-item/list-item.component.ts ***!
  \*************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_notes_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/notes.actions */ "./src/app/store/notes.actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ListItemComponent = /** @class */ (function () {
    function ListItemComponent(store) {
        this.store = store;
        this.editable = false;
        this.titleTxt = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
    }
    ListItemComponent.prototype.handleEditItem = function () {
        this.editable = true;
        this.titleTxt.setValue(this.note.title);
    };
    ListItemComponent.prototype.handleDeleteItem = function () {
        this.store.dispatch(src_app_store_notes_actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE"]({ id: this.note.id }));
    };
    ListItemComponent.prototype.handleEndEdit = function () {
        this.editable = false;
        this.store.dispatch(src_app_store_notes_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE"]({
            note: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.note, { title: this.titleTxt.value, content: this.tempContent }),
        }));
    };
    ListItemComponent.prototype.handleTempContent = function (tempContent) {
        this.tempContent = tempContent;
    };
    ListItemComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ListItemComponent.prototype, "note", void 0);
    ListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-item',
            template: __webpack_require__(/*! raw-loader!./list-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/list-item/list-item.component.html"),
            styles: [__webpack_require__(/*! ./list-item.component.scss */ "./src/app/components/list-item/list-item.component.scss")]
        })
    ], ListItemComponent);
    return ListItemComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var ListComponent = /** @class */ (function () {
    function ListComponent(store) {
        var _this = this;
        this.store = store;
        this.store.select('notes').subscribe(function (notes) {
            _this.notes = notes.slice().sort(function (a, b) { return a.id < b.id ? 1 : -1; });
        });
    }
    ListComponent.prototype.handleEditItem = function (_a) {
        var editable = _a.editable, index = _a.index;
        console.log(editable, index);
    };
    ListComponent.prototype.handleDeleteItem = function (index) {
        this.notes.splice(index, 1);
    };
    ListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/components/list/list.component.scss")]
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/sheet/sheet.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/sheet/sheet.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sheet {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n.sheet--editing {\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 25px;\n}\n.sheet .text {\n  display: none;\n}\n.sheet .text--editing {\n  display: block;\n}\n.sheet .markdown {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NyaXN0aWFudG9ycmVzL0RvY3VtZW50b3MvY3Jpc3RpYW4vcHJhY3RpY2FzLzAxLW5vdGVzLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvc2hlZXQvc2hlZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hlZXQvc2hlZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7QUNDSjtBRENJO0VBQ0ksOEJBQUE7RUFDQSxxQkFBQTtBQ0NSO0FERUk7RUFDSSxhQUFBO0FDQVI7QURDUTtFQUNJLGNBQUE7QUNDWjtBREVJO0VBQ0ksY0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGVldC9zaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaGVldCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblxuICAgICYtLWVkaXRpbmcge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMjVweDtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICYtLWVkaXRpbmcge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1hcmtkb3duIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufSIsIi5zaGVldCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xufVxuLnNoZWV0LS1lZGl0aW5nIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWNvbHVtbi1nYXA6IDI1cHg7XG59XG4uc2hlZXQgLnRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNoZWV0IC50ZXh0LS1lZGl0aW5nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2hlZXQgLm1hcmtkb3duIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/sheet/sheet.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/sheet/sheet.component.ts ***!
  \*****************************************************/
/*! exports provided: SheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetComponent", function() { return SheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SheetComponent = /** @class */ (function () {
    function SheetComponent() {
        this.tempContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tempContentTxt = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    SheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tempContentTxt.setValue(this.note.content);
        this.tempContent.emit(this.note.content);
        this.tempContentTxt.valueChanges.subscribe(function (value) {
            _this.tempContent.emit(value);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SheetComponent.prototype, "note", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SheetComponent.prototype, "editable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SheetComponent.prototype, "tempContent", void 0);
    SheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sheet',
            template: __webpack_require__(/*! raw-loader!./sheet.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sheet/sheet.component.html"),
            styles: [__webpack_require__(/*! ./sheet.component.scss */ "./src/app/components/sheet/sheet.component.scss")]
        })
    ], SheetComponent);
    return SheetComponent;
}());



/***/ }),

/***/ "./src/app/store/notes.actions.ts":
/*!****************************************!*\
  !*** ./src/app/store/notes.actions.ts ***!
  \****************************************/
/*! exports provided: ADD, REMOVE, UPDATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE", function() { return REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var ADD = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Notes] add note', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var REMOVE = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Notes] remove note', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var UPDATE = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Notes] update note', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/notes.reducers.ts":
/*!*****************************************!*\
  !*** ./src/app/store/notes.reducers.ts ***!
  \*****************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _notes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes.actions */ "./src/app/store/notes.actions.ts");



var initialState = JSON.parse(localStorage.getItem('state')) || [
    {
        content: '- Contenido 1',
        id: 1,
        title: 'Título 1',
    },
    {
        content: '_Contenido 2_',
        id: 2,
        title: 'Título 2'
    },
    {
        content: '### Contenido 3',
        id: 3,
        title: 'Título 3'
    },
];
var notesReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_notes_actions__WEBPACK_IMPORTED_MODULE_2__["ADD"], function (state, _a) {
    var note = _a.note;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state, [tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, note, { id: state.length
                ? state.reduce(function (acc, curr) { return acc.id < curr.id ? curr : acc; }).id + 1
                : 1 })]);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_notes_actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE"], function (state, _a) {
    var id = _a.id;
    return state.filter(function (n) { return n.id !== id; });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_notes_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE"], function (state, _a) {
    var note = _a.note;
    return state.map(function (n) { return n.id === note.id ? note : n; });
}));
function reducer(state, action) {
    return notesReducer(state, action);
}


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cristiantorres/Documentos/cristian/practicas/01-notes-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map