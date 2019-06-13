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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/start-page/start-page.component */ "./src/app/pages/start-page/start-page.component.ts");
/* harmony import */ var _pages_join_or_create_page_join_or_create_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/join-or-create-page/join-or-create-page.component */ "./src/app/pages/join-or-create-page/join-or-create-page.component.ts");
/* harmony import */ var _pages_join_room_page_join_room_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/join-room-page/join-room-page.component */ "./src/app/pages/join-room-page/join-room-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/game-page/game-page.component */ "./src/app/pages/game-page/game-page.component.ts");
/* harmony import */ var _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/test-page/test-page.component */ "./src/app/pages/test-page/test-page.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _pages_player_games_page_player_games_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/player-games-page/player-games-page.component */ "./src/app/pages/player-games-page/player-games-page.component.ts");
/* harmony import */ var _pages_lobby_page_lobby_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/lobby-page/lobby-page.component */ "./src/app/pages/lobby-page/lobby-page.component.ts");
/* harmony import */ var _services_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/deactivate-guard.service */ "./src/app/services/deactivate-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'home', component: _pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_2__["StartPageComponent"] },
    { path: 'menu', component: _pages_join_or_create_page_join_or_create_page_component__WEBPACK_IMPORTED_MODULE_3__["JoinOrCreatePageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'create', component: _pages_lobby_page_lobby_page_component__WEBPACK_IMPORTED_MODULE_11__["LobbyPageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]], canDeactivate: [_services_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_12__["DeactivateGuardService"]] },
    { path: 'join', component: _pages_join_room_page_join_room_page_component__WEBPACK_IMPORTED_MODULE_4__["JoinRoomPageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"] },
    { path: 'lobby/:name', component: _pages_lobby_page_lobby_page_component__WEBPACK_IMPORTED_MODULE_11__["LobbyPageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]], canDeactivate: [_services_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_12__["DeactivateGuardService"]] },
    { path: 'register', component: _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"] },
    { path: 'play', component: _pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_6__["GamePageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'player-games', component: _pages_player_games_page_player_games_page_component__WEBPACK_IMPORTED_MODULE_10__["PlayerGamesPageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]] },
    { path: 'test', component: _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_7__["TestPageComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header id=\"header\" *ngIf=\"router.url !== '/play' && router.url !== '/join' && router.url !== '/test'\"></app-header>\n<!--<app-side-menu id=\"side-menu\"  *ngIf=\"router.url !== '/play'\"></app-side-menu>-->\n<router-outlet></router-outlet>\n<app-footer id=\"footer\" *ngIf=\"router.url !== '/play' && router.url !== '/join' && router.url !== '/test'\"></app-footer>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'scrabble';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/start-page/start-page.component */ "./src/app/pages/start-page/start-page.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_join_room_page_join_room_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/join-room-page/join-room-page.component */ "./src/app/pages/join-room-page/join-room-page.component.ts");
/* harmony import */ var _pages_create_room_page_create_room_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/create-room-page/create-room-page.component */ "./src/app/pages/create-room-page/create-room-page.component.ts");
/* harmony import */ var _pages_join_or_create_page_join_or_create_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/join-or-create-page/join-or-create-page.component */ "./src/app/pages/join-or-create-page/join-or-create-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _elements_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./elements/loading-screen/loading-screen.component */ "./src/app/elements/loading-screen/loading-screen.component.ts");
/* harmony import */ var _elements_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./elements/header/header.component */ "./src/app/elements/header/header.component.ts");
/* harmony import */ var _elements_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./elements/footer/footer.component */ "./src/app/elements/footer/footer.component.ts");
/* harmony import */ var _elements_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements/side-menu/side-menu.component */ "./src/app/elements/side-menu/side-menu.component.ts");
/* harmony import */ var _pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/game-page/game-page.component */ "./src/app/pages/game-page/game-page.component.ts");
/* harmony import */ var _elements_scrabble_block_scrabble_block_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./elements/scrabble-block/scrabble-block.component */ "./src/app/elements/scrabble-block/scrabble-block.component.ts");
/* harmony import */ var _elements_game_panel_game_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./elements/game-panel/game-panel.component */ "./src/app/elements/game-panel/game-panel.component.ts");
/* harmony import */ var _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/test-page/test-page.component */ "./src/app/pages/test-page/test-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_player_games_page_player_games_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/player-games-page/player-games-page.component */ "./src/app/pages/player-games-page/player-games-page.component.ts");
/* harmony import */ var _pages_lobby_page_lobby_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/lobby-page/lobby-page.component */ "./src/app/pages/lobby-page/lobby-page.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _services_socket_interceptor_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/socket-interceptor.service */ "./src/app/services/socket-interceptor.service.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
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
                _pages_start_page_start_page_component__WEBPACK_IMPORTED_MODULE_3__["StartPageComponent"],
                _pages_join_room_page_join_room_page_component__WEBPACK_IMPORTED_MODULE_5__["JoinRoomPageComponent"],
                _pages_create_room_page_create_room_page_component__WEBPACK_IMPORTED_MODULE_6__["CreateRoomPageComponent"],
                _pages_join_or_create_page_join_or_create_page_component__WEBPACK_IMPORTED_MODULE_7__["JoinOrCreatePageComponent"],
                _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
                _elements_loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_9__["LoadingScreenComponent"],
                _elements_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _elements_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _elements_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_12__["SideMenuComponent"],
                _pages_game_page_game_page_component__WEBPACK_IMPORTED_MODULE_13__["GamePageComponent"],
                _elements_scrabble_block_scrabble_block_component__WEBPACK_IMPORTED_MODULE_14__["ScrabbleBlockComponent"],
                _elements_game_panel_game_panel_component__WEBPACK_IMPORTED_MODULE_15__["GamePanelComponent"],
                _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_16__["TestPageComponent"],
                _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_18__["RegisterPageComponent"],
                _pages_player_games_page_player_games_page_component__WEBPACK_IMPORTED_MODULE_20__["PlayerGamesPageComponent"],
                _pages_lobby_page_lobby_page_component__WEBPACK_IMPORTED_MODULE_21__["LobbyPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_22__["NgxPaginationModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].production })
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                    useClass: _services_socket_interceptor_service__WEBPACK_IMPORTED_MODULE_23__["SocketInterceptorService"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/elements/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/elements/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZW1lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/elements/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/elements/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"my-5 pt-5 text-muted text-center text-small\">\n  <hr width=\"304\" class=\"mb-4\">\n  <p class=\"mb-1\">&copy; 2019-2019 ZPI Enterprise</p>\n  <ul class=\"list-inline\">\n    <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\n    <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\n    <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\n  </ul>\n</footer>\n"

/***/ }),

/***/ "./src/app/elements/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/elements/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/elements/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/elements/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/elements/game-panel/game-panel.component.css":
/*!**************************************************************!*\
  !*** ./src/app/elements/game-panel/game-panel.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td div{\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  min-height: 50px;\n  max-width: 50px;\n  max-height: 50px;\n}\n\ntd div:hover{\n  width: 55px;\n  height: 55px;\n  min-width: 55px;\n  min-height: 55px;\n  max-width: 55px;\n  max-height: 55px;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.hidden{\n  visibility: hidden;\n}\n\n@media(max-device-width: 500px){\n  td div{width: 50%}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvZ2FtZS1wYW5lbC9nYW1lLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTyxVQUFVO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudHMvZ2FtZS1wYW5lbC9nYW1lLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCBkaXZ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgbWF4LXdpZHRoOiA1MHB4O1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xufVxuXG50ZCBkaXY6aG92ZXJ7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIG1pbi13aWR0aDogNTVweDtcbiAgbWluLWhlaWdodDogNTVweDtcbiAgbWF4LXdpZHRoOiA1NXB4O1xuICBtYXgtaGVpZ2h0OiA1NXB4O1xufVxuXG4udmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5oaWRkZW57XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuQG1lZGlhKG1heC1kZXZpY2Utd2lkdGg6IDUwMHB4KXtcbiAgdGQgZGl2e3dpZHRoOiA1MCV9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/elements/game-panel/game-panel.component.html":
/*!***************************************************************!*\
  !*** ./src/app/elements/game-panel/game-panel.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Twój wynik: 9999</h3>\n</div>\n<div>\n  <h3>Obecne słowo: </h3>\n</div>\n<div>\n  <button class=\"btn btn-danger\" (click)=\"reset()\">Reset</button>\n</div>\n<div *ngIf=\"gameManager.letterPool.length>0\">\n  <h3>Twoje literki: </h3>\n\n  <table>\n    <tbody>\n    <tr>\n      <td *ngFor=\"let item of gameManager.letterPool; let i = index\">\n        <div class=\"visible\" #block draggable=\"true\" (dragstart)=\"dragStart($event,block,item)\"\n             (dragend)=\"dragEnd($event, block, i)\">\n          <app-scrabble-block *ngIf=\"item\" [letter]=\"item\"></app-scrabble-block>\n        </div>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/elements/game-panel/game-panel.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/elements/game-panel/game-panel.component.ts ***!
  \*************************************************************/
/*! exports provided: GamePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePanelComponent", function() { return GamePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-manager.service */ "./src/app/services/game-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamePanelComponent = /** @class */ (function () {
    function GamePanelComponent(gameManager) {
        this.gameManager = gameManager;
    }
    GamePanelComponent.prototype.ngOnInit = function () {
    };
    GamePanelComponent.prototype.dragStart = function (event, block, item) {
        this.gameManager.setCorrectDraggable(true);
        setTimeout(function () { return block.className = 'hidden'; }, 0);
        event.dataTransfer.setData('scrabbleBlock', JSON.stringify(item));
    };
    GamePanelComponent.prototype.dragEnd = function (event, block, i) {
        this.gameManager.setCorrectDraggable(false);
        if (event.dataTransfer.dropEffect === 'none') {
            block.className = 'visible';
        }
        else {
            this.gameManager.addUnconfirmedBlock(this.gameManager.letterPool[i]);
            this.gameManager.letterPool[i] = null;
        }
    };
    GamePanelComponent.prototype.reset = function () {
        for (var i = 0; i < this.gameManager.letterPool.length; i++) {
            if (this.gameManager.letterPool[i] === null) {
                var block = this.gameManager.getUnconfirmedBlocks().pop();
                block ? this.gameManager.letterPool[i] = block : console.log('przypal z resetem');
            }
        }
        if (this.gameManager.getUnconfirmedBlocks().length !== 0) {
            console.log('przypal z resetem');
        }
        else {
            this.gameManager.resetUnconfirmed();
        }
    };
    GamePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-panel',
            template: __webpack_require__(/*! ./game-panel.component.html */ "./src/app/elements/game-panel/game-panel.component.html"),
            styles: [__webpack_require__(/*! ./game-panel.component.css */ "./src/app/elements/game-panel/game-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_manager_service__WEBPACK_IMPORTED_MODULE_1__["GameManagerService"]])
    ], GamePanelComponent);
    return GamePanelComponent;
}());



/***/ }),

/***/ "./src/app/elements/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/elements/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-row{\n  width: 504px;\n  height: 500px;\n}\n\n.h-cell{\n  width: 14%;\n  height: 50%;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaC1yb3d7XG4gIHdpZHRoOiA1MDRweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmgtY2VsbHtcbiAgd2lkdGg6IDE0JTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/elements/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/elements/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-4 text-center justify-content-center\">\n  <img src=\"assets/scaledlogo.png\" routerLink=\"/menu\" width=\"300\" height=\"200\" />\n  <hr width=\"304\" class=\"mb-4\">\n</div>\n\n"

/***/ }),

/***/ "./src/app/elements/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/elements/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Letter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Letter */ "./src/app/models/Letter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.test = [
            [new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('S'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('C'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('R'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('A'),
                new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('B'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('B'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('L'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('E')],
            [new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('O'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('N'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('L'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('I'),
                new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('N'), new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"]('E')]
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/elements/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/elements/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/elements/loading-screen/loading-screen.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/elements/loading-screen/loading-screen.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-screen{\n  top:0;\n  left:0;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  min-width: 100%;\n  min-height: 100%;\n  background-color: rgba(0,0,0,0.5);\n  z-index: 1001;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvbG9hZGluZy1zY3JlZW4vbG9hZGluZy1zY3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLEtBQUs7RUFDTCxNQUFNO0VBQ04sZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudHMvbG9hZGluZy1zY3JlZW4vbG9hZGluZy1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLXNjcmVlbntcbiAgdG9wOjA7XG4gIGxlZnQ6MDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuICB6LWluZGV4OiAxMDAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/elements/loading-screen/loading-screen.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/elements/loading-screen/loading-screen.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-screen text-center\">\n  <img class=\"mtop-20\" src=\"assets/animations/loader-min.svg\"/>\n</div>\n"

/***/ }),

/***/ "./src/app/elements/loading-screen/loading-screen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/elements/loading-screen/loading-screen.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function() { return LoadingScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingScreenComponent = /** @class */ (function () {
    function LoadingScreenComponent() {
    }
    LoadingScreenComponent.prototype.ngOnInit = function () {
    };
    LoadingScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-screen',
            template: __webpack_require__(/*! ./loading-screen.component.html */ "./src/app/elements/loading-screen/loading-screen.component.html"),
            styles: [__webpack_require__(/*! ./loading-screen.component.css */ "./src/app/elements/loading-screen/loading-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingScreenComponent);
    return LoadingScreenComponent;
}());



/***/ }),

/***/ "./src/app/elements/scrabble-block/scrabble-block.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/elements/scrabble-block/scrabble-block.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#scrabbleBlock{\n  z-index: 5;\n  min-width: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  max-width: 100%;\n  height: 100%;\n  width: 100%;\n  background-color: #f6e1a6;\n  background:-webkit-gradient(linear, 100% 100%, 0% 5%, from(#d8bd72), to(#fae1a6));\n  border-radius: 7px;\n  box-shadow:0px 0px 5px #a000;\n  float: left;\n  text-align: center;\n  border-top-width: 1px;\n  border-right-width: 4px;\n  border-bottom-width: 4px;\n  border-left-width: 1px;\n  border-top-style: solid;\n  border-right-style: solid;\n  border-bottom-style: solid;\n  border-left-style: solid;\n  border-top-color: #f8e6b1;\n  border-right-color: #f8e6b1;\n  border-bottom-color: #cab06b;\n  border-left-color: #f8e6b1;\n  -ms-user-select: none;\n      user-select: none;\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n\n}\n\n#points{\n  text-align: end;\n  font-size: 1em;\n  min-height: 50%;\n  max-height: 50%;\n  height: 50%;\n  font-weight: bold;\n  font-family: 'Asap', serif;\n  color: #272832;\n  text-shadow:1px 1px 0px #ddd3b7;\n  margin: 0px;\n  -ms-user-select: none;\n      user-select: none;\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n}\n\n#letter{\n  text-align: center;\n  font-size: 1.7em;\n  font-weight: bold;\n  text-transform: uppercase;\n  min-height: 50%;\n  max-height: 50%;\n  height: 50%;\n  font-family: 'Asap', serif;\n  color: #272832;\n  text-shadow:1px 1px 0px #fff5d7;\n  margin: 0px;\n  -ms-user-select: none;\n      user-select: none;\n  -moz-user-select: -moz-none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n}\n\n@media(min-width: 960px){\n#letter{width: 10%}\n\n  #points{width: 10%}\n  #scrabbleBlock{width: 10%}\n\n  #letter{height: 10%}\n\n  #points{height: 10%}\n  #scrabbleBlock{height: 10%}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvc2NyYWJibGUtYmxvY2svc2NyYWJibGUtYmxvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUZBQWlGO0VBR2pGLGtCQUFrQjtFQUdsQiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixxQkFBaUI7TUFBakIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsd0JBQXdCOztBQUUxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxxQkFBaUI7TUFBakIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxxQkFBaUI7TUFBakIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOztBQUVBO0FBQ0EsUUFBUSxVQUFVOztFQUVoQixRQUFRLFVBQVU7RUFDbEIsZUFBZSxVQUFVOztFQUV6QixRQUFRLFdBQVc7O0VBRW5CLFFBQVEsV0FBVztFQUNuQixlQUFlLFdBQVc7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50cy9zY3JhYmJsZS1ibG9jay9zY3JhYmJsZS1ibG9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NjcmFiYmxlQmxvY2t7XG4gIHotaW5kZXg6IDU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZlMWE2O1xuICBiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCAxMDAlIDEwMCUsIDAlIDUlLCBmcm9tKCNkOGJkNzIpLCB0bygjZmFlMWE2KSk7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogN3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAtbW96LWJveC1zaGFkb3c6MHB4IDNweCA1cHggIzAwMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OjBweCAzcHggNXB4ICMwMDA7XG4gIGJveC1zaGFkb3c6MHB4IDBweCA1cHggI2EwMDA7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmOGU2YjE7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2Y4ZTZiMTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NhYjA2YjtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmOGU2YjE7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblxufVxuXG4jcG9pbnRze1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtaW4taGVpZ2h0OiA1MCU7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ0FzYXAnLCBzZXJpZjtcbiAgY29sb3I6ICMyNzI4MzI7XG4gIHRleHQtc2hhZG93OjFweCAxcHggMHB4ICNkZGQzYjc7XG4gIG1hcmdpbjogMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbiNsZXR0ZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjdlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgZm9udC1mYW1pbHk6ICdBc2FwJywgc2VyaWY7XG4gIGNvbG9yOiAjMjcyODMyO1xuICB0ZXh0LXNoYWRvdzoxcHggMXB4IDBweCAjZmZmNWQ3O1xuICBtYXJnaW46IDBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWVkaWEobWluLXdpZHRoOiA5NjBweCl7XG4jbGV0dGVye3dpZHRoOiAxMCV9XG5cbiAgI3BvaW50c3t3aWR0aDogMTAlfVxuICAjc2NyYWJibGVCbG9ja3t3aWR0aDogMTAlfVxuXG4gICNsZXR0ZXJ7aGVpZ2h0OiAxMCV9XG5cbiAgI3BvaW50c3toZWlnaHQ6IDEwJX1cbiAgI3NjcmFiYmxlQmxvY2t7aGVpZ2h0OiAxMCV9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/elements/scrabble-block/scrabble-block.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/elements/scrabble-block/scrabble-block.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"scrabbleBlock\">\n  <div id=\"letter\">\n    {{letter.character}}\n  </div>\n  <div id=\"points\" *ngIf=\"letter.points!=-1\">\n    {{letter.points}}\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/elements/scrabble-block/scrabble-block.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/elements/scrabble-block/scrabble-block.component.ts ***!
  \*********************************************************************/
/*! exports provided: ScrabbleBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrabbleBlockComponent", function() { return ScrabbleBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Letter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Letter */ "./src/app/models/Letter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrabbleBlockComponent = /** @class */ (function () {
    function ScrabbleBlockComponent() {
        this.letter = null;
    }
    ScrabbleBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"])
    ], ScrabbleBlockComponent.prototype, "letter", void 0);
    ScrabbleBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scrabble-block',
            template: __webpack_require__(/*! ./scrabble-block.component.html */ "./src/app/elements/scrabble-block/scrabble-block.component.html"),
            styles: [__webpack_require__(/*! ./scrabble-block.component.css */ "./src/app/elements/scrabble-block/scrabble-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScrabbleBlockComponent);
    return ScrabbleBlockComponent;
}());



/***/ }),

/***/ "./src/app/elements/side-menu/side-menu.component.css":
/*!************************************************************!*\
  !*** ./src/app/elements/side-menu/side-menu.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);\n@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);\n.fa-2x {\n  font-size: 2em;\n}\n.fa {\n  position: relative;\n  display: table-cell;\n  width: 60px;\n  height: 36px;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 20px;\n}\n.main-menu:hover, nav.main-menu.expanded {\n  width: 250px;\n  overflow: visible;\n  z-index: 1000;\n}\n.main-menu {\n  background: #212121;\n  border-right: 1px solid #e5e5e5;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  width: 60px;\n  overflow: hidden;\n  transition: width .05s linear;\n  -webkit-transform: translateZ(0) scale(1, 1);\n}\n.main-menu > ul {\n  margin: 7px 0;\n}\n.main-menu li {\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.main-menu li > a {\n  position: relative;\n  display: table;\n  border-collapse: collapse;\n  border-spacing: 0;\n  color: #999;\n  font-family: arial;\n  font-size: 14px;\n  text-decoration: none;\n  -webkit-transform: translateZ(0) scale(1, 1);\n  transition: all .1s linear;\n\n}\n.main-menu .nav-icon {\n  position: relative;\n  display: table-cell;\n  width: 60px;\n  height: 36px;\n  text-align: center;\n  vertical-align: middle;\n  font-size: 18px;\n}\n.main-menu .nav-text {\n  position: relative;\n  display: table-cell;\n  vertical-align: middle;\n  width: 190px;\n  font-family: 'Titillium Web', sans-serif;\n}\n.main-menu > ul.logout {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\na:hover, a:focus {\n  text-decoration: none;\n}\nnav {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\nnav ul, nav li {\n  outline: 0;\n  margin: 0;\n  padding: 0;\n}\n.main-menu li:hover > a, nav.main-menu li.active > a, .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus, .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus, .no-touch .dashboard-page nav.dashboard-menu ul li:hover a, .dashboard-page nav.dashboard-menu ul li.active a {\n  color: #fff;\n  background-color: #dc3545;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RSxzRUFBc0U7QUFDdEU7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZO0VBQ1osT0FBTztFQUNQLFdBQVc7RUFDWCxnQkFBZ0I7RUFFaEIsNkJBQTZCO0VBQzdCLDRDQUE0QztBQUM5QztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiw0Q0FBNEM7RUFFNUMsMEJBQTBCOztBQUU1QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHdDQUF3QztBQUMxQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0FBQ1g7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50cy9zaWRlLW1lbnUvc2lkZS1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgvL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjAuMy9jc3MvZm9udC1hd2Vzb21lLmNzcyk7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGl0aWxsaXVtK1dlYjozMDApO1xuLmZhLTJ4IHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5mYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYWluLW1lbnU6aG92ZXIsIG5hdi5tYWluLW1lbnUuZXhwYW5kZWQge1xuICB3aWR0aDogMjUwcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4ubWFpbi1tZW51IHtcbiAgYmFja2dyb3VuZDogIzIxMjEyMTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U1ZTVlNTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAuMDVzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogd2lkdGggLjA1cyBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEsIDEpO1xufVxuXG4ubWFpbi1tZW51ID4gdWwge1xuICBtYXJnaW46IDdweCAwO1xufVxuXG4ubWFpbi1tZW51IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4ubWFpbi1tZW51IGxpID4gYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogdGFibGU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSwgMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xuXG59XG5cbi5tYWluLW1lbnUgLm5hdi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1haW4tbWVudSAubmF2LXRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxOTBweDtcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcbn1cblxuLm1haW4tbWVudSA+IHVsLmxvZ291dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG5hOmhvdmVyLCBhOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5uYXYge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxubmF2IHVsLCBuYXYgbGkge1xuICBvdXRsaW5lOiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYWluLW1lbnUgbGk6aG92ZXIgPiBhLCBuYXYubWFpbi1tZW51IGxpLmFjdGl2ZSA+IGEsIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmhvdmVyLCAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpmb2N1cywgLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYSwgLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYTpob3ZlciwgLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlID4gYTpmb2N1cywgLm5vLXRvdWNoIC5kYXNoYm9hcmQtcGFnZSBuYXYuZGFzaGJvYXJkLW1lbnUgdWwgbGk6aG92ZXIgYSwgLmRhc2hib2FyZC1wYWdlIG5hdi5kYXNoYm9hcmQtbWVudSB1bCBsaS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/elements/side-menu/side-menu.component.html":
/*!*************************************************************!*\
  !*** ./src/app/elements/side-menu/side-menu.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-menu\">\n  <ul>\n    <li>\n      <a href=\"http://justinfarrow.com\">\n        <!--18.56x20-->\n        <i class=\"fa fa-home fa-2x\"></i>\n        <span class=\"nav-text\">\n          Strona startowa\n        </span>\n      </a>\n    </li>\n    <li class=\"has-subnav\">\n      <a href=\"#\">\n        <i class=\"fa fa-laptop fa-2x\"></i>\n        <span class=\"nav-text\">\n          Stars Components\n        </span>\n      </a>\n    </li>\n    <li class=\"has-subnav\">\n      <a href=\"#\">\n        <i class=\"fa fa-list fa-2x\"></i>\n        <span class=\"nav-text\">\n          Forms\n        </span>\n      </a>\n    </li>\n    <li class=\"has-subnav\">\n      <a href=\"#\">\n        <i class=\"fa fa-folder-open fa-2x\"></i>\n        <span class=\"nav-text\">\n          Pages\n        </span>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\">\n        <i class=\"fa fa-bar-chart-o fa-2x\"></i>\n        <span class=\"nav-text\">\n          Graphs and Statistics\n        </span>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\">\n        <i class=\"fa fa-font fa-2x\"></i>\n        <span class=\"nav-text\">\n          Quotes\n        </span>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\">\n        <i class=\"fa fa-table fa-2x\"></i>\n        <span class=\"nav-text\">\n          Tables\n        </span>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\">\n        <i class=\"fa fa-map-marker fa-2x\"></i>\n        <span class=\"nav-text\">\n          Maps\n        </span>\n      </a>\n    </li>\n    <li>\n      <a href=\"#\">\n        <i class=\"fa fa-info fa-2x\"></i>\n        <span class=\"nav-text\">\n          Documentation\n        </span>\n      </a>\n    </li>\n  </ul>\n  <ul class=\"logout\">\n    <li>\n      <a href=\"#\">\n        <i class=\"fa fa-power-off fa-2x\"></i>\n        <span class=\"nav-text\">\n          Logout\n        </span>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/elements/side-menu/side-menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/elements/side-menu/side-menu.component.ts ***!
  \***********************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent() {
    }
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    SideMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-menu',
            template: __webpack_require__(/*! ./side-menu.component.html */ "./src/app/elements/side-menu/side-menu.component.html"),
            styles: [__webpack_require__(/*! ./side-menu.component.css */ "./src/app/elements/side-menu/side-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "./src/app/models/CanDeactivate.ts":
/*!*****************************************!*\
  !*** ./src/app/models/CanDeactivate.ts ***!
  \*****************************************/
/*! exports provided: CanDeactivate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivate", function() { return CanDeactivate; });
var CanDeactivate = /** @class */ (function () {
    function CanDeactivate() {
    }
    return CanDeactivate;
}());



/***/ }),

/***/ "./src/app/models/Letter.ts":
/*!**********************************!*\
  !*** ./src/app/models/Letter.ts ***!
  \**********************************/
/*! exports provided: Letter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Letter", function() { return Letter; });
var Letter = /** @class */ (function () {
    function Letter(_character, _points) {
        if (_points === void 0) { _points = -1; }
        this._character = _character;
        this._points = _points;
        if (this._points === -1) {
            this.assignPoints();
        }
    }
    Object.defineProperty(Letter.prototype, "points", {
        get: function () {
            return this._points;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Letter.prototype, "character", {
        get: function () {
            return this._character;
        },
        enumerable: true,
        configurable: true
    });
    Letter.prototype.assignPoints = function () {
        if (this._character === 'A' || this._character === 'E' || this._character === 'I' || this._character === 'N'
            || this._character === 'O' || this._character === 'R' || this._character === 'S' || this._character === 'W'
            || this._character === 'Z') {
            this._points = 1;
        }
        else if (this._character === 'C' || this._character === 'D' || this._character === 'K'
            || this._character === 'L' || this._character === 'M' || this._character === 'P'
            || this._character === 'T'
            || this._character === 'Y') {
            this._points = 2;
        }
        else if (this._character === 'B' || this._character === 'G' || this._character === 'H'
            || this._character === 'J' || this._character === 'Ł' || this._character === 'U') {
            this._points = 3;
        }
        else if (this._character === 'Ą' || this._character === 'Ę' || this._character === 'F'
            || this._character === 'Ó' || this._character === 'Ś' || this._character === 'Ż') {
            this._points = 5;
        }
        else if (this._character === 'Ć') {
            this._points = 6;
        }
        else if (this._character === 'Ń') {
            this._points = 7;
        }
        else if (this._character === 'Ź') {
            this._points = 9;
        }
        else {
            this._points = -1;
        }
    };
    return Letter;
}());



/***/ }),

/***/ "./src/app/models/Result.ts":
/*!**********************************!*\
  !*** ./src/app/models/Result.ts ***!
  \**********************************/
/*! exports provided: Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
var Result = /** @class */ (function () {
    function Result(_hasFinished, _hasFailed) {
        this._hasFinished = _hasFinished;
        this._hasFailed = _hasFailed;
    }
    Object.defineProperty(Result.prototype, "hasFinished", {
        get: function () {
            return this._hasFinished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Result.prototype, "hasFailed", {
        get: function () {
            return this._hasFailed;
        },
        enumerable: true,
        configurable: true
    });
    return Result;
}());



/***/ }),

/***/ "./src/app/pages/create-room-page/create-room-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/create-room-page/create-room-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1yb29tLXBhZ2UvY3JlYXRlLXJvb20tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/create-room-page/create-room-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/create-room-page/create-room-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4 order-md-2 mb-4\">\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          <span class=\"text-muted\">Your cart</span>\n          <span class=\"badge badge-secondary badge-pill\">3</span>\n        </h4>\n        <ul class=\"list-group mb-3\">\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n            <div>\n              <h6 class=\"my-0\">Product name</h6>\n              <small class=\"text-muted\">Brief description</small>\n            </div>\n            <span class=\"text-muted\">$12</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n            <div>\n              <h6 class=\"my-0\">Second product</h6>\n              <small class=\"text-muted\">Brief description</small>\n            </div>\n            <span class=\"text-muted\">$8</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n            <div>\n              <h6 class=\"my-0\">Third item</h6>\n              <small class=\"text-muted\">Brief description</small>\n            </div>\n            <span class=\"text-muted\">$5</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between bg-light\">\n            <div class=\"text-success\">\n              <h6 class=\"my-0\">Promo code</h6>\n              <small>EXAMPLECODE</small>\n            </div>\n            <span class=\"text-success\">-$5</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between\">\n            <span>Total (USD)</span>\n            <strong>$20</strong>\n          </li>\n        </ul>\n\n        <form class=\"card p-2\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\n            <div class=\"input-group-append\">\n              <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-md-8 order-md-1\">\n        <h4 class=\"mb-3\">Billing address</h4>\n        <form class=\"needs-validation\" novalidate>\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"firstName\">First name</label>\n              <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required>\n              <div class=\"invalid-feedback\">\n                Valid first name is required.\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"lastName\">Last name</label>\n              <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\n              <div class=\"invalid-feedback\">\n                Valid last name is required.\n              </div>\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"username\">Username</label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">@</span>\n              </div>\n              <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required>\n              <div class=\"invalid-feedback\" style=\"width: 100%;\">\n                Your username is required.\n              </div>\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\n            <div class=\"invalid-feedback\">\n              Please enter a valid email address for shipping updates.\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"address\">Address</label>\n            <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>\n            <div class=\"invalid-feedback\">\n              Please enter your shipping address.\n            </div>\n          </div>\n\n          <div class=\"mb-3\">\n            <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n            <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-5 mb-3\">\n              <label for=\"country\">Country</label>\n              <select class=\"custom-select d-block w-100\" id=\"country\" required>\n                <option value=\"\">Choose...</option>\n                <option>United States</option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Please select a valid country.\n              </div>\n            </div>\n            <div class=\"col-md-4 mb-3\">\n              <label for=\"state\">State</label>\n              <select class=\"custom-select d-block w-100\" id=\"state\" required>\n                <option value=\"\">Choose...</option>\n                <option>California</option>\n              </select>\n              <div class=\"invalid-feedback\">\n                Please provide a valid state.\n              </div>\n            </div>\n            <div class=\"col-md-3 mb-3\">\n              <label for=\"zip\">Zip</label>\n              <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>\n              <div class=\"invalid-feedback\">\n                Zip code required.\n              </div>\n            </div>\n          </div>\n          <hr class=\"mb-4\">\n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\n            <label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing\n              address</label>\n          </div>\n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\n            <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\n          </div>\n          <hr class=\"mb-4\">\n\n          <h4 class=\"mb-3\">Payment</h4>\n\n          <div class=\"d-block my-3\">\n            <div class=\"custom-control custom-radio\">\n              <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n              <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n              <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n              <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"cc-name\">Name on card</label>\n              <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\n              <small class=\"text-muted\">Full name as displayed on card</small>\n              <div class=\"invalid-feedback\">\n                Name on card is required\n              </div>\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"cc-number\">Credit card number</label>\n              <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\n              <div class=\"invalid-feedback\">\n                Credit card number is required\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3 mb-3\">\n              <label for=\"cc-expiration\">Expiration</label>\n              <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\n              <div class=\"invalid-feedback\">\n                Expiration date required\n              </div>\n            </div>\n            <div class=\"col-md-3 mb-3\">\n              <label for=\"cc-expiration\">CVV</label>\n              <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\n              <div class=\"invalid-feedback\">\n                Security code required\n              </div>\n            </div>\n          </div>\n          <hr class=\"mb-4\">\n          <button class=\"btn btn-danger btn-lg btn-block\" type=\"submit\">Continue to checkout</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/create-room-page/create-room-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/create-room-page/create-room-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateRoomPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoomPageComponent", function() { return CreateRoomPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateRoomPageComponent = /** @class */ (function () {
    function CreateRoomPageComponent() {
    }
    CreateRoomPageComponent.prototype.ngOnInit = function () {
    };
    CreateRoomPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-room-page',
            template: __webpack_require__(/*! ./create-room-page.component.html */ "./src/app/pages/create-room-page/create-room-page.component.html"),
            styles: [__webpack_require__(/*! ./create-room-page.component.css */ "./src/app/pages/create-room-page/create-room-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateRoomPageComponent);
    return CreateRoomPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/game-page/game-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/game-page/game-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\n  border: 2px solid gray;\n}\n\ntable {\n  border-collapse: collapse;\n  border: 3px solid black;\n  box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.5);\n\n}\n\ntd div {\n  width: 20px;\n  height: 16px ;\n  min-width: 20px ;\n  min-height: 16px ;\n  max-width: 20px ;\n  max-height: 16px ;\n}\n\ntd {\n  margin: 0;\n  padding: 0;\n  background-image: url(\"/assets/BG.png\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\ntr:nth-child(8) td:nth-child(8) {\n  background-image: url(\"/assets/STAR3.png\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\n/*TRIPLE WORD SCORE*/\n\ntr:nth-child(1) td:nth-child(1), tr:nth-child(1) td:nth-child(8), tr:nth-child(1) td:nth-child(15),\ntr:nth-child(8) td:nth-child(1), tr:nth-child(8) td:nth-child(15),\ntr:nth-child(15) td:nth-child(1), tr:nth-child(15) td:nth-child(8), tr:nth-child(15) td:nth-child(15)\n{\n  background-image: url(\"/assets/TW.png\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\n/*DOUBLE WORD SCORE*/\n\ntr:nth-child(2) td:nth-child(2), tr:nth-child(2) td:nth-child(14),\ntr:nth-child(3) td:nth-child(3), tr:nth-child(3) td:nth-child(13),\ntr:nth-child(4) td:nth-child(4), tr:nth-child(4) td:nth-child(12),\ntr:nth-child(5) td:nth-child(5), tr:nth-child(5) td:nth-child(11),\ntr:nth-last-child(2) td:nth-child(2), tr:nth-last-child(2) td:nth-child(14),\ntr:nth-last-child(3) td:nth-child(3), tr:nth-last-child(3) td:nth-child(13),\ntr:nth-last-child(4) td:nth-child(4), tr:nth-last-child(4) td:nth-child(12),\ntr:nth-last-child(5) td:nth-child(5), tr:nth-last-child(5) td:nth-child(11){\n  background-image: url(\"/assets/DW.png\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\n/*TRIPLE LETTER SCORE*/\n\ntr:nth-child(2) td:nth-child(6), tr:nth-child(2) td:nth-child(10),\ntr:nth-child(6) td:nth-child(2), tr:nth-child(6) td:nth-child(6), tr:nth-child(6) td:nth-child(10), tr:nth-child(6) td:nth-child(14),\ntr:nth-child(10) td:nth-child(2), tr:nth-child(10) td:nth-child(6), tr:nth-child(10) td:nth-child(10), tr:nth-child(10) td:nth-child(14),\ntr:nth-last-child(2) td:nth-child(6), tr:nth-last-child(2) td:nth-child(10){\n  background-image: url(\"/assets/TL.png\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\n/*DOUBLE LETTER SCORE*/\n\ntr:nth-child(1) td:nth-child(4),tr:nth-child(1) td:nth-last-child(4),\ntr:nth-child(3) td:nth-child(7),tr:nth-child(3) td:nth-child(9),\ntr:nth-child(4) td:nth-child(1),tr:nth-child(4) td:nth-child(8),tr:nth-child(4) td:nth-child(15),\ntr:nth-child(7) td:nth-child(3), tr:nth-child(7) td:nth-child(7),tr:nth-child(7) td:nth-child(9),tr:nth-child(7) td:nth-last-child(3),\ntr:nth-child(8) td:nth-child(4), tr:nth-child(8) td:nth-last-child(4),\ntr:nth-child(9) td:nth-child(3), tr:nth-child(9) td:nth-child(7),tr:nth-child(9) td:nth-child(9),tr:nth-child(9) td:nth-last-child(3),\ntr:nth-child(12) td:nth-child(1),tr:nth-child(12) td:nth-child(8),tr:nth-child(12) td:nth-child(15),\ntr:nth-child(13) td:nth-child(7),tr:nth-child(13) td:nth-child(9),\ntr:nth-child(15) td:nth-child(4),tr:nth-child(15) td:nth-last-child(4)\n{\n  background-image: url(\"/assets/DL.png\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\nh3 {\n  text-align: left;\n}\n\n#game-container {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n\n.over {\n  border: dashed #7bee6c 2px;\n  background-color: rgba(46, 96, 40, 0.5);\n}\n\n.wrong {\n  border: solid red 2px;\n}\n\n/*@media (max-device-width: 600px) {*/\n\n/*table{width: 30px}*/\n\n/*td div {width: 30px}*/\n\n/*tr {width: 30px}*/\n\n/*th{width: 30px}*/\n\n/*tr  {width: 30px}*/\n\n/**/\n\n/*table{height: 30%}*/\n\n/*td div {height: 30%}*/\n\n/*tr{height: 30%}*/\n\n/*th{height: 30%}*/\n\n/*tr{height: 30%}*/\n\n/*}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS1wYWdlL2dhbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QiwyQ0FBMkM7O0FBRTdDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHVDQUF1QztFQUN2QywwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUEsb0JBQW9COztBQUNwQjs7OztFQUlFLHVDQUF1QztFQUN2QywwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBLG9CQUFvQjs7QUFDcEI7Ozs7Ozs7O0VBUUUsdUNBQXVDO0VBQ3ZDLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUEsc0JBQXNCOztBQUN0Qjs7OztFQUlFLHVDQUF1QztFQUN2QywwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzlCOztBQUVBLHNCQUFzQjs7QUFDdEI7Ozs7Ozs7Ozs7RUFVRSx1Q0FBdUM7RUFDdkMsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLHFDQUFxQzs7QUFDbkMscUJBQXFCOztBQUNyQix1QkFBdUI7O0FBQ3ZCLG1CQUFtQjs7QUFDbkIsa0JBQWtCOztBQUNsQixvQkFBb0I7O0FBQ3BCLEdBQUc7O0FBQ0gscUJBQXFCOztBQUNyQix1QkFBdUI7O0FBQ3ZCLGtCQUFrQjs7QUFDbEIsa0JBQWtCOztBQUNsQixrQkFBa0I7O0FBRXBCLElBQUkiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nYW1lLXBhZ2UvZ2FtZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCwgdGQge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAzcHggcmdiYSgwLDAsMCwwLjUpO1xuXG59XG5cbnRkIGRpdiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDE2cHggO1xuICBtaW4td2lkdGg6IDIwcHggO1xuICBtaW4taGVpZ2h0OiAxNnB4IDtcbiAgbWF4LXdpZHRoOiAyMHB4IDtcbiAgbWF4LWhlaWdodDogMTZweCA7XG59XG5cbnRkIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL0JHLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbnRyOm50aC1jaGlsZCg4KSB0ZDpudGgtY2hpbGQoOCkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL1NUQVIzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi8qVFJJUExFIFdPUkQgU0NPUkUqL1xudHI6bnRoLWNoaWxkKDEpIHRkOm50aC1jaGlsZCgxKSwgdHI6bnRoLWNoaWxkKDEpIHRkOm50aC1jaGlsZCg4KSwgdHI6bnRoLWNoaWxkKDEpIHRkOm50aC1jaGlsZCgxNSksXG50cjpudGgtY2hpbGQoOCkgdGQ6bnRoLWNoaWxkKDEpLCB0cjpudGgtY2hpbGQoOCkgdGQ6bnRoLWNoaWxkKDE1KSxcbnRyOm50aC1jaGlsZCgxNSkgdGQ6bnRoLWNoaWxkKDEpLCB0cjpudGgtY2hpbGQoMTUpIHRkOm50aC1jaGlsZCg4KSwgdHI6bnRoLWNoaWxkKDE1KSB0ZDpudGgtY2hpbGQoMTUpXG57XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvVFcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLypET1VCTEUgV09SRCBTQ09SRSovXG50cjpudGgtY2hpbGQoMikgdGQ6bnRoLWNoaWxkKDIpLCB0cjpudGgtY2hpbGQoMikgdGQ6bnRoLWNoaWxkKDE0KSxcbnRyOm50aC1jaGlsZCgzKSB0ZDpudGgtY2hpbGQoMyksIHRyOm50aC1jaGlsZCgzKSB0ZDpudGgtY2hpbGQoMTMpLFxudHI6bnRoLWNoaWxkKDQpIHRkOm50aC1jaGlsZCg0KSwgdHI6bnRoLWNoaWxkKDQpIHRkOm50aC1jaGlsZCgxMiksXG50cjpudGgtY2hpbGQoNSkgdGQ6bnRoLWNoaWxkKDUpLCB0cjpudGgtY2hpbGQoNSkgdGQ6bnRoLWNoaWxkKDExKSxcbnRyOm50aC1sYXN0LWNoaWxkKDIpIHRkOm50aC1jaGlsZCgyKSwgdHI6bnRoLWxhc3QtY2hpbGQoMikgdGQ6bnRoLWNoaWxkKDE0KSxcbnRyOm50aC1sYXN0LWNoaWxkKDMpIHRkOm50aC1jaGlsZCgzKSwgdHI6bnRoLWxhc3QtY2hpbGQoMykgdGQ6bnRoLWNoaWxkKDEzKSxcbnRyOm50aC1sYXN0LWNoaWxkKDQpIHRkOm50aC1jaGlsZCg0KSwgdHI6bnRoLWxhc3QtY2hpbGQoNCkgdGQ6bnRoLWNoaWxkKDEyKSxcbnRyOm50aC1sYXN0LWNoaWxkKDUpIHRkOm50aC1jaGlsZCg1KSwgdHI6bnRoLWxhc3QtY2hpbGQoNSkgdGQ6bnRoLWNoaWxkKDExKXtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9EVy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4vKlRSSVBMRSBMRVRURVIgU0NPUkUqL1xudHI6bnRoLWNoaWxkKDIpIHRkOm50aC1jaGlsZCg2KSwgdHI6bnRoLWNoaWxkKDIpIHRkOm50aC1jaGlsZCgxMCksXG50cjpudGgtY2hpbGQoNikgdGQ6bnRoLWNoaWxkKDIpLCB0cjpudGgtY2hpbGQoNikgdGQ6bnRoLWNoaWxkKDYpLCB0cjpudGgtY2hpbGQoNikgdGQ6bnRoLWNoaWxkKDEwKSwgdHI6bnRoLWNoaWxkKDYpIHRkOm50aC1jaGlsZCgxNCksXG50cjpudGgtY2hpbGQoMTApIHRkOm50aC1jaGlsZCgyKSwgdHI6bnRoLWNoaWxkKDEwKSB0ZDpudGgtY2hpbGQoNiksIHRyOm50aC1jaGlsZCgxMCkgdGQ6bnRoLWNoaWxkKDEwKSwgdHI6bnRoLWNoaWxkKDEwKSB0ZDpudGgtY2hpbGQoMTQpLFxudHI6bnRoLWxhc3QtY2hpbGQoMikgdGQ6bnRoLWNoaWxkKDYpLCB0cjpudGgtbGFzdC1jaGlsZCgyKSB0ZDpudGgtY2hpbGQoMTApe1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL1RMLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi8qRE9VQkxFIExFVFRFUiBTQ09SRSovXG50cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWNoaWxkKDQpLHRyOm50aC1jaGlsZCgxKSB0ZDpudGgtbGFzdC1jaGlsZCg0KSxcbnRyOm50aC1jaGlsZCgzKSB0ZDpudGgtY2hpbGQoNyksdHI6bnRoLWNoaWxkKDMpIHRkOm50aC1jaGlsZCg5KSxcbnRyOm50aC1jaGlsZCg0KSB0ZDpudGgtY2hpbGQoMSksdHI6bnRoLWNoaWxkKDQpIHRkOm50aC1jaGlsZCg4KSx0cjpudGgtY2hpbGQoNCkgdGQ6bnRoLWNoaWxkKDE1KSxcbnRyOm50aC1jaGlsZCg3KSB0ZDpudGgtY2hpbGQoMyksIHRyOm50aC1jaGlsZCg3KSB0ZDpudGgtY2hpbGQoNyksdHI6bnRoLWNoaWxkKDcpIHRkOm50aC1jaGlsZCg5KSx0cjpudGgtY2hpbGQoNykgdGQ6bnRoLWxhc3QtY2hpbGQoMyksXG50cjpudGgtY2hpbGQoOCkgdGQ6bnRoLWNoaWxkKDQpLCB0cjpudGgtY2hpbGQoOCkgdGQ6bnRoLWxhc3QtY2hpbGQoNCksXG50cjpudGgtY2hpbGQoOSkgdGQ6bnRoLWNoaWxkKDMpLCB0cjpudGgtY2hpbGQoOSkgdGQ6bnRoLWNoaWxkKDcpLHRyOm50aC1jaGlsZCg5KSB0ZDpudGgtY2hpbGQoOSksdHI6bnRoLWNoaWxkKDkpIHRkOm50aC1sYXN0LWNoaWxkKDMpLFxudHI6bnRoLWNoaWxkKDEyKSB0ZDpudGgtY2hpbGQoMSksdHI6bnRoLWNoaWxkKDEyKSB0ZDpudGgtY2hpbGQoOCksdHI6bnRoLWNoaWxkKDEyKSB0ZDpudGgtY2hpbGQoMTUpLFxudHI6bnRoLWNoaWxkKDEzKSB0ZDpudGgtY2hpbGQoNyksdHI6bnRoLWNoaWxkKDEzKSB0ZDpudGgtY2hpbGQoOSksXG50cjpudGgtY2hpbGQoMTUpIHRkOm50aC1jaGlsZCg0KSx0cjpudGgtY2hpbGQoMTUpIHRkOm50aC1sYXN0LWNoaWxkKDQpXG57XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvREwucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jZ2FtZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi5vdmVyIHtcbiAgYm9yZGVyOiBkYXNoZWQgIzdiZWU2YyAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDYsIDk2LCA0MCwgMC41KTtcbn1cblxuLndyb25nIHtcbiAgYm9yZGVyOiBzb2xpZCByZWQgMnB4O1xufVxuXG4vKkBtZWRpYSAobWF4LWRldmljZS13aWR0aDogNjAwcHgpIHsqL1xuICAvKnRhYmxle3dpZHRoOiAzMHB4fSovXG4gIC8qdGQgZGl2IHt3aWR0aDogMzBweH0qL1xuICAvKnRyIHt3aWR0aDogMzBweH0qL1xuICAvKnRoe3dpZHRoOiAzMHB4fSovXG4gIC8qdHIgIHt3aWR0aDogMzBweH0qL1xuICAvKiovXG4gIC8qdGFibGV7aGVpZ2h0OiAzMCV9Ki9cbiAgLyp0ZCBkaXYge2hlaWdodDogMzAlfSovXG4gIC8qdHJ7aGVpZ2h0OiAzMCV9Ki9cbiAgLyp0aHtoZWlnaHQ6IDMwJX0qL1xuICAvKnRye2hlaWdodDogMzAlfSovXG5cbi8qfSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/game-page/game-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/game-page/game-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"isMyMove\"></app-loading-screen>\n<div id=\"game-container\" class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-5\">\n        <!--<app-game-panel></app-game-panel>-->\n      <!--<button class=\"btn btn-primary\" (click)=\"onMove()\">test</button>-->\n    <!--</div>-->\n\n\n    <!--<div class=\"col-7\">-->\n      <table align=\"center\">\n        <tbody>\n        <tr *ngFor=\"let tableRow of gameManager.gameBoard; let i = index\">\n          <td *ngFor=\"let cell of tableRow; let j = index\">\n            <div #dropSpot class=\"drop-spot\" (drop)=\"onDrop($event,dropSpot,i,j)\"\n                 (dragover)=\"onDragOver($event,dropSpot,i,j)\"\n                 (dragenter)=\"onDragEnter($event,dropSpot,i,j)\"\n                 (dragleave)=\"onDragLeave($event,dropSpot,i,j)\">\n              <app-scrabble-block *ngIf=\"cell\" id=\"letter\" [letter]=\"cell\"></app-scrabble-block>\n            </div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n\n  </div>\n  <app-game-panel></app-game-panel>\n  <button class=\"btn btn-primary\" (click)=\"onMove()\">test</button>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/game-page/game-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/game-page/game-page.component.ts ***!
  \********************************************************/
/*! exports provided: GamePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageComponent", function() { return GamePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Letter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Letter */ "./src/app/models/Letter.ts");
/* harmony import */ var _services_game_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game-manager.service */ "./src/app/services/game-manager.service.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/share-data.service */ "./src/app/services/share-data.service.ts");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/web-socket.service */ "./src/app/services/web-socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GamePageComponent = /** @class */ (function () {
    function GamePageComponent(gameManager, shareDataService, socketService) {
        this.gameManager = gameManager;
        this.shareDataService = shareDataService;
        this.socketService = socketService;
        this.game = null;
        this.isMyMove = false;
    }
    GamePageComponent.prototype.onMove = function () {
        this.gameManager.move(this.game);
    };
    GamePageComponent.prototype.ngOnInit = function () {
        this.game = this.shareDataService.game;
        this.gameManager.initGame(this.game);
        this.isMyMove = this.gameManager.isMyMove(this.game);
        this.initSocketConnection();
    };
    GamePageComponent.prototype.initSocketConnection = function () {
        var _this = this;
        this.socketService.connectToGameSocket(this.game.name);
        this.subscription = this.socketService.socketMessage$.subscribe(function (socketMessage) { return _this.handleSocketMessage(socketMessage); });
    };
    GamePageComponent.prototype.handleSocketMessage = function (socketMessage) {
        if (socketMessage) {
            console.log('socket message', socketMessage);
            var socketMsg = JSON.parse(socketMessage);
            this.isMyMove = this.gameManager.isMyMove(socketMsg.body);
        }
    };
    GamePageComponent.prototype.onDrop = function (event, dropSpot, i, j) {
        var scrabbleBlock = JSON.parse(event.dataTransfer.getData('scrabbleBlock'));
        if (this.gameManager.checkDraggable()) {
            if (this.gameManager.gameBoard[i][j] === null) {
                this.gameManager.gameBoard[i][j] = new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"](scrabbleBlock._character);
                this.gameManager.addUnconfirmedCord({ first: i, second: j });
            }
            dropSpot.className = 'drop-spot';
        }
    };
    GamePageComponent.prototype.onDragOver = function (event, dropSpot, i, j) {
        event.preventDefault();
        if (this.gameManager.checkDraggable()) {
            if (this.gameManager.gameBoard[i][j] != null) {
                dropSpot.className = dropSpot.className + ' wrong';
                event.dataTransfer.dropEffect = 'none';
            }
            else {
                event.dataTransfer.dropEffect = 'move';
            }
        }
    };
    GamePageComponent.prototype.onDragEnter = function (event, dropSpot, i, j) {
        if (this.gameManager.checkDraggable()) {
            if (this.gameManager.gameBoard[i][j] == null) {
                dropSpot.className += ' over';
            }
            else {
                dropSpot.className += ' wrong';
            }
        }
    };
    GamePageComponent.prototype.onDragLeave = function (event, dropSpot, i, j) {
        if (this.gameManager.checkDraggable()) {
            dropSpot.className = 'drop-spot';
        }
    };
    GamePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-page',
            template: __webpack_require__(/*! ./game-page.component.html */ "./src/app/pages/game-page/game-page.component.html"),
            styles: [__webpack_require__(/*! ./game-page.component.css */ "./src/app/pages/game-page/game-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_manager_service__WEBPACK_IMPORTED_MODULE_2__["GameManagerService"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"],
            _services_web_socket_service__WEBPACK_IMPORTED_MODULE_4__["WebSocketService"]])
    ], GamePageComponent);
    return GamePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/join-or-create-page/join-or-create-page.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/join-or-create-page/join-or-create-page.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 10px;\n  font-size: 1.5em;\n  width: 300px;\n}\n\n.menu-row{\n  margin-top: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9pbi1vci1jcmVhdGUtcGFnZS9qb2luLW9yLWNyZWF0ZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qb2luLW9yLWNyZWF0ZS1wYWdlL2pvaW4tb3ItY3JlYXRlLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLm1lbnUtcm93e1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/join-or-create-page/join-or-create-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/join-or-create-page/join-or-create-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row menu-row justify-content-center\">\n    <button class=\"btn btn-danger\" routerLink=\"/create\">Stwórz pokój</button>\n  </div>\n  <div class=\"row menu-row justify-content-center\">\n    <button class=\"btn btn-danger\" routerLink=\"/join\">Dołącz do pokoju</button>\n  </div>\n  <div class=\"row menu-row justify-content-center\">\n    <button class=\"btn btn-danger\" routerLink=\"/player-games\">Twoje gry</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/join-or-create-page/join-or-create-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/join-or-create-page/join-or-create-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: JoinOrCreatePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinOrCreatePageComponent", function() { return JoinOrCreatePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinOrCreatePageComponent = /** @class */ (function () {
    function JoinOrCreatePageComponent() {
    }
    JoinOrCreatePageComponent.prototype.ngOnInit = function () {
    };
    JoinOrCreatePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join-or-create-page',
            template: __webpack_require__(/*! ./join-or-create-page.component.html */ "./src/app/pages/join-or-create-page/join-or-create-page.component.html"),
            styles: [__webpack_require__(/*! ./join-or-create-page.component.css */ "./src/app/pages/join-or-create-page/join-or-create-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JoinOrCreatePageComponent);
    return JoinOrCreatePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/join-room-page/join-room-page.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/join-room-page/join-room-page.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);\n  max-width: 100%;\n  max-height: 80vh;\n  min-width: 100%;\n  min-height: 80vh;\n  width: 100%;\n  height: 80vh;\n  position: relative;\n}\n\n#panel{\n  position: absolute;\n  z-index: 300;\n  width: 100%;\n  height: 15%;\n  min-height: 15%;\n  max-height: 15%;\n  bottom: 0;\n  border-top: solid 1px rgba(0,0,0,0.5);\n  background-color: #ffff;\n}\n\n.inner-box{\n  width: 100%;\n  height: 85%;\n  min-width: 100%;\n  max-width: 100%;\n  min-height: 85%;\n  max-height: 85%;\n}\n\n@media(){\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvam9pbi1yb29tLXBhZ2Uvam9pbi1yb29tLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUEyQztFQUMzQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixTQUFTO0VBQ1QscUNBQXFDO0VBQ3JDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvaW4tcm9vbS1wYWdlL2pvaW4tcm9vbS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3BhbmVse1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDMwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUlO1xuICBtaW4taGVpZ2h0OiAxNSU7XG4gIG1heC1oZWlnaHQ6IDE1JTtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLDAsMCwwLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcbn1cblxuLmlubmVyLWJveHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODUlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogODUlO1xuICBtYXgtaGVpZ2h0OiA4NSU7XG59XG5cbkBtZWRpYSgpe1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/join-room-page/join-room-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/join-room-page/join-room-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"isLoading\"></app-loading-screen>\n<div id=\"main\" class=\"container\" style=\"margin-top: 20px\">\n  <div class=\"row fill-width\">\n    <div style=\"margin-bottom: 30px\" class=\"col-lg-6\" *ngFor=\"let row of data | paginate: { itemsPerPage: 4, currentPage: p }\">\n      <div class=\"card bg-dark text-white\">\n        <img style=\"opacity: 0.075\" class=\"card-img\" src=\"assets/scrabble-board-400x225.jpg\" alt=\"Card image\">\n        <div class=\"card-img-overlay\">\n          <div class=\"card-header text-uppercase\"> <strong>{{row[0].name}}</strong> </div>\n          <div class=\"card-body\" style=\"max-width: 473px; max-height: 70%; overflow: auto\">\n\n            <p class=\"card-title\">Gracze w pokoju: </p>\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item bg-dark\" *ngFor=\"let player of row[1]\" style=\"opacity: 0.7\">{{player.nickname}}</li>\n            </ul>\n          </div>\n\n\n        </div>\n\n      </div>\n      <br>\n      <br>\n      <br>\n      <br>\n      <button style=\"position: absolute; bottom: 15px; left: 15px\" class=\"btn btn-primary\" (click)=\"onJoin(row[0].name)\">Dołącz do pokoju</button>\n    </div>\n\n    <pagination-controls (pageChange)=\"p = $event\"\n                         previousLabel=\"Poprzednia\"\n                         nextLabel=\"Następna\">\n    </pagination-controls>\n  </div>\n  <div class=\"row fill-width\">\n\n    <button class=\"btn btn-danger\" routerLink=\"/menu\" style=\"margin-left: 15px;\">Wróć do menu</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/join-room-page/join-room-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/join-room-page/join-room-page.component.ts ***!
  \******************************************************************/
/*! exports provided: JoinRoomPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinRoomPageComponent", function() { return JoinRoomPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fetch-data.service */ "./src/app/services/fetch-data.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
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




var JoinRoomPageComponent = /** @class */ (function () {
    function JoinRoomPageComponent(fetchDataService, utils, router) {
        this.fetchDataService = fetchDataService;
        this.utils = utils;
        this.router = router;
        this.data = [];
        this.isLoading = false;
        this.p = 1;
    }
    JoinRoomPageComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    JoinRoomPageComponent.prototype.fetchData = function () {
        var _this = this;
        this.fetchDataService.getLobbies().subscribe(function (next) {
            _this.data = _this.utils.extractDataFromLobbies(next);
        }, function (error) {
        }, function () {
        });
    };
    JoinRoomPageComponent.prototype.onJoin = function (lobbyName) {
        var _this = this;
        this.isLoading = true;
        this.fetchDataService.joinLobby(lobbyName).subscribe(function (next) {
            _this.isLoading = false;
            _this.router.navigate(['lobby/' + lobbyName]);
        }, function (error) {
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    JoinRoomPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join-room-page',
            template: __webpack_require__(/*! ./join-room-page.component.html */ "./src/app/pages/join-room-page/join-room-page.component.html"),
            styles: [__webpack_require__(/*! ./join-room-page.component.css */ "./src/app/pages/join-room-page/join-room-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"], _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], JoinRoomPageComponent);
    return JoinRoomPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/lobby-page/lobby-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/lobby-page/lobby-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvYmJ5LXBhZ2UvbG9iYnktcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/lobby-page/lobby-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/lobby-page/lobby-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"isLoading\"></app-loading-screen>\n<div id=\"main\" class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6\">\n      <div class=\"card shadow-lg\">\n        <div class=\"card-header bg-danger text-center text-uppercase\">\n          <h3 class=\"card-title\">{{data[0]!=null?data[0].name:'Game lobby'}}</h3>\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ngFor=\"let player of data[1]\">{{player.nickname}}</li>\n          </ul>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button [disabled]=\"data[1].length<=1\" class=\"btn btn-outline-success fill-width\" (click)=\"onStartClicked()\">START</button>\n            </div>\n            <div class=\"col-6\">\n              <button class=\"btn btn-outline-danger fill-width\" (click)=\"onQuitClicked(data[0].name)\">Wyjdź</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/lobby-page/lobby-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/lobby-page/lobby-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LobbyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyPageComponent", function() { return LobbyPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fetch-data.service */ "./src/app/services/fetch-data.service.ts");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _services_web_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/web-socket.service */ "./src/app/services/web-socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/share-data.service */ "./src/app/services/share-data.service.ts");
/* harmony import */ var _models_CanDeactivate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/CanDeactivate */ "./src/app/models/CanDeactivate.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LobbyPageComponent = /** @class */ (function (_super) {
    __extends(LobbyPageComponent, _super);
    function LobbyPageComponent(fetchDataService, utils, webSocket, route, router, shareDataService) {
        var _this = _super.call(this) || this;
        _this.fetchDataService = fetchDataService;
        _this.utils = utils;
        _this.webSocket = webSocket;
        _this.route = route;
        _this.router = router;
        _this.shareDataService = shareDataService;
        _this.data = [null, []];
        _this._readyPlayers = [];
        _this.isStarted = false;
        _this.isLoading = false;
        return _this;
    }
    LobbyPageComponent.prototype.onStartClicked = function () {
        var _this = this;
        this.isLoading = true;
        console.log('start clicked');
        this.fetchDataService.startLobby(this.lobbyName).subscribe(function (next) {
            console.log(next);
        }, function (error) {
            console.log(error);
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    LobbyPageComponent.prototype.onQuitClicked = function (lobbyName) {
        this.quit(lobbyName);
    };
    LobbyPageComponent.prototype.readyCount = function () {
        return this._readyPlayers.length;
    };
    LobbyPageComponent.prototype.ngOnInit = function () {
        this.init();
    };
    LobbyPageComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.webSocket.onDestroy();
        if (!this.canDeactivate()) {
            this.cleanUp();
        }
    };
    LobbyPageComponent.prototype.quit = function (lobbyName) {
        this.router.navigate(['menu']);
    };
    LobbyPageComponent.prototype.init = function () {
        this.lobbyName = this.route.snapshot.paramMap.get('name');
        if (!this.lobbyName) {
            this.onCreateInit();
        }
        else {
            this.onJoinInit();
        }
    };
    LobbyPageComponent.prototype.onCreateInit = function () {
        var _this = this;
        this.fetchDataService.createLobby().subscribe(function (next) {
            _this.data = _this.utils.extractDataFromLobby(next);
            _this.lobbyName = next.name;
            _this.webSocket.connectToLobbyWebSocket(_this.lobbyName);
            _this.subscription = _this.webSocket.socketMessage$.subscribe(function (socketMessage) { return _this.handleSocketMessage(socketMessage); });
        }, function (error) {
            console.log(error);
        }, function () {
        });
    };
    LobbyPageComponent.prototype.onJoinInit = function () {
        var _this = this;
        this.fetchDataService.getLobby(this.lobbyName).subscribe(function (next) {
            _this.data = _this.utils.extractDataFromLobby(next);
            _this.webSocket.connectToLobbyWebSocket(_this.lobbyName);
            _this.subscription = _this.webSocket.socketMessage$.subscribe(function (socketMessage) { return _this.handleSocketMessage(socketMessage); });
        }, function (error) {
        }, function () {
        });
    };
    LobbyPageComponent.prototype.handleSocketMessage = function (socketMessage) {
        if (socketMessage) {
            var socketMsg = JSON.parse(socketMessage);
            if (socketMsg.header === 'CHANGE') {
                this.refreshLobby();
            }
            else if (socketMsg.header === 'START') {
                if (socketMsg.body) {
                    this.onStartLobby(socketMsg.body);
                }
            }
            else {
            }
        }
    };
    LobbyPageComponent.prototype.refreshLobby = function () {
        var _this = this;
        this.fetchDataService.getLobby(this.lobbyName).subscribe(function (lobbyData) {
            _this.data = _this.utils.extractDataFromLobby(lobbyData);
        }, function (error) {
        }, function () {
        });
    };
    LobbyPageComponent.prototype.onStartLobby = function (gameDto) {
        this.isStarted = true;
        this.shareDataService.game = gameDto;
        this.router.navigate(['play']);
    };
    LobbyPageComponent.prototype.canDeactivate = function () {
        return this.isStarted;
    };
    LobbyPageComponent.prototype.cleanUp = function () {
        this.fetchDataService.quitLobby(this.lobbyName);
    };
    LobbyPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lobby-page',
            template: __webpack_require__(/*! ./lobby-page.component.html */ "./src/app/pages/lobby-page/lobby-page.component.html"),
            styles: [__webpack_require__(/*! ./lobby-page.component.css */ "./src/app/pages/lobby-page/lobby-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"],
            _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"],
            _services_web_socket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_5__["ShareDataService"]])
    ], LobbyPageComponent);
    return LobbyPageComponent;
}(_models_CanDeactivate__WEBPACK_IMPORTED_MODULE_6__["CanDeactivate"]));



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"isLoading\"></app-loading-screen>\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <aside class=\"col-sm-4\">\n      <div class=\"card\">\n        <article class=\"card-body\">\n          <h4 class=\"card-title text-center mb-4 mt-1\">Logowanie</h4>\n          <hr>\n          <p class=\"text-danger text-center\" *ngIf=\"hasFailed\">Błędne dane logowania</p>\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"> <img width=\"16\" height=\"16.8\"\n                                                       src=\"assets/user.svg\"/> </span>\n                </div>\n                <input formControlName=\"login\" name=\"login\" class=\"form-control\" placeholder=\"Email or login\" type=\"email\" required>\n              </div> <!-- input-group.// -->\n            </div> <!-- form-group// -->\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"> <img width=\"14\" height=\"16.8\"\n                                                       src=\"assets/lock.svg\"/> </span>\n                </div>\n                <input formControlName=\"password\" class=\"form-control\" placeholder=\"******\" type=\"password\" autocomplete=\"current-password\" required>\n              </div> <!-- input-group.// -->\n            </div> <!-- form-group// -->\n            <div class=\"form-group\">\n              <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-danger btn-block\">Zaloguj</button>\n            </div> <!-- form-group// -->\n            <p class=\"text-center\">Zapomniałeś <a href=\"#\">hasła</a>?</p>\n            <p class=\"text-center\">Nie masz konta? <a routerLink=\"/register\">Zarejestruj się</a></p>\n            <p class=\"text-center\">Albo <a routerLink=\"/register\">zagraj jako gość</a></p>\n          </form>\n        </article>\n      </div> <!-- card.// -->\n    </aside> <!-- col.// -->\n  </div> <!-- row.// -->\n</div>\n<!--container end.//-->\n"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user-manager.service */ "./src/app/services/user-manager.service.ts");
/* harmony import */ var _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth-manager.service */ "./src/app/services/auth-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(formBuilder, authManager, userManager, router) {
        this.formBuilder = formBuilder;
        this.authManager = authManager;
        this.userManager = userManager;
        this.router = router;
        this.isLoading = false;
        this.hasFailed = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm();
        this.authManager.loginEmitter.subscribe(function (result) {
            if (result.hasFinished) {
                _this.isLoading = false;
            }
            _this.hasFailed = result.hasFailed;
        });
    };
    LoginPageComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    LoginPageComponent.prototype.onLogin = function () {
        this.isLoading = true;
        this.authManager.login(this.loginForm.value['login'], this.loginForm.value['password'], this.userManager, this.router);
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/pages/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_2__["AuthManagerService"],
            _services_user_manager_service__WEBPACK_IMPORTED_MODULE_1__["UserManagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/player-games-page/player-games-page.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/player-games-page/player-games-page.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYXllci1nYW1lcy1wYWdlL3BsYXllci1nYW1lcy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/player-games-page/player-games-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/player-games-page/player-games-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n<p style=\"text-align:center\">nie ma</p>\n</h1>\n\n\n<h4>\n  <p style=\"text-align:center\">sprawdz jutro</p>\n</h4>\n"

/***/ }),

/***/ "./src/app/pages/player-games-page/player-games-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/player-games-page/player-games-page.component.ts ***!
  \************************************************************************/
/*! exports provided: PlayerGamesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerGamesPageComponent", function() { return PlayerGamesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fetch-data.service */ "./src/app/services/fetch-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerGamesPageComponent = /** @class */ (function () {
    function PlayerGamesPageComponent(fetchDataService) {
        this.fetchDataService = fetchDataService;
        this.data = [];
    }
    PlayerGamesPageComponent.prototype.ngOnInit = function () {
        this.fetchData();
    };
    PlayerGamesPageComponent.prototype.fetchData = function () {
        var _this = this;
        this.fetchDataService.getLobbies().subscribe(function (next) {
            _this.extractData(next);
        }, function (error) {
        }, function () {
        });
    };
    PlayerGamesPageComponent.prototype.extractData = function (lobbies) {
        var tuple = [null, []];
        for (var _i = 0, lobbies_1 = lobbies; _i < lobbies_1.length; _i++) {
            var lobby = lobbies_1[_i];
            tuple[0] = lobby;
            for (var _a = 0, _b = lobby.players; _a < _b.length; _a++) {
                var lobbyPlayer = _b[_a];
                tuple[1].push(lobbyPlayer.player);
            }
            if (tuple[0] !== null) {
                this.data.push(tuple);
            }
            tuple = [null, []];
        }
    };
    PlayerGamesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-games-page',
            template: __webpack_require__(/*! ./player-games-page.component.html */ "./src/app/pages/player-games-page/player-games-page.component.html"),
            styles: [__webpack_require__(/*! ./player-games-page.component.css */ "./src/app/pages/player-games-page/player-games-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"]])
    ], PlayerGamesPageComponent);
    return PlayerGamesPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyLXBhZ2UvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"isLoading\"></app-loading-screen>\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <aside class=\"col-sm-4\">\n      <div class=\"card\">\n        <article class=\"card-body\">\n          <h4 class=\"card-title text-center mb-4 mt-1\">Rejestracja</h4>\n          <hr>\n          <p *ngIf=\"hasFailed\" class=\"text-danger text-center\">{{failInfo}}</p>\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister()\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <img width=\"17\" height=\"17.8\" src=\"assets/email.svg\"/>\n                  </span>\n                </div>\n                <input formControlName=\"email\" class=\"form-control\" placeholder=\"Email\" type=\"email\" autocomplete=\"new-email\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <img width=\"16\" height=\"16.8\" src=\"assets/user.svg\"/>\n                  </span>\n                </div>\n                <input formControlName=\"nickname\" class=\"form-control\" placeholder=\"Nazwa użytkownika\" type=\"text\" autocomplete=\"new-username\" required>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <img width=\"14\" height=\"16.8\" src=\"assets/lock.svg\"/>\n                  </span>\n                </div>\n                <input formControlName=\"password\" class=\"form-control\" placeholder=\"******\" type=\"password\" name=\"password\" autocomplete=\"new-password\" required>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-danger btn-block\" [disabled]=\"!registerForm.valid\">Stwórz konto</button>\n            </div>\n            <p class=\"text-center\">Masz już konto? <a routerLink=\"/login\">Zaloguj się</a></p>\n          </form>\n        </article>\n      </div>\n    </aside>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-manager.service */ "./src/app/services/user-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth-manager.service */ "./src/app/services/auth-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(formBuilder, userManager, router, authManager) {
        this.formBuilder = formBuilder;
        this.userManager = userManager;
        this.router = router;
        this.authManager = authManager;
        this.isLoading = false;
        this.hasFailed = false;
        this.failInfo = '';
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    RegisterPageComponent.prototype.buildForm = function () {
        this.registerForm = this.formBuilder.group({
            email: [''],
            nickname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id: [0]
        });
    };
    RegisterPageComponent.prototype.onRegister = function () {
        var _this = this;
        this.isLoading = true;
        this.userManager.registerPlayer(this.registerForm.value).subscribe(function (next) {
            _this.hasFailed = false;
            _this.authManager.login(_this.registerForm.value['nickname'], _this.registerForm.value['password'], _this.userManager, _this.router);
        }, function (err) {
            _this.isLoading = false;
            _this.hasFailed = true;
            _this.failInfo = err.error;
        }, function () { return _this.isLoading = false; });
    };
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/pages/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/pages/register-page/register-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_user_manager_service__WEBPACK_IMPORTED_MODULE_2__["UserManagerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_4__["AuthManagerService"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/start-page/start-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/start-page/start-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 10px;\n  font-size: 1.5em;\n  width: 300px;\n}\n\n.menu-row{\n  margin-top: 5px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhcnQtcGFnZS9zdGFydC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGFydC1wYWdlL3N0YXJ0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLm1lbnUtcm93e1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/start-page/start-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/start-page/start-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row menu-row justify-content-center\">\n    <button class=\"btn btn-danger\" routerLink=\"/menu\">Zagraj jako gość</button>\n  </div>\n  <div class=\"row menu-row justify-content-center\">\n    <button class=\"btn btn-danger\" routerLink=\"/login\">Zaloguj się</button>\n  </div>\n  <div class=\"row menu-row justify-content-center\">\n    <button class=\"btn btn-danger\" routerLink=\"/register\">Zarejestruj się</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/start-page/start-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/start-page/start-page.component.ts ***!
  \**********************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-manager.service */ "./src/app/services/auth-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartPageComponent = /** @class */ (function () {
    function StartPageComponent(authManager, router) {
        this.authManager = authManager;
        this.router = router;
    }
    StartPageComponent.prototype.ngOnInit = function () {
        if (this.authManager.isLoggedIn) {
            this.router.navigate(['jorcr']);
        }
    };
    StartPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start-page',
            template: __webpack_require__(/*! ./start-page.component.html */ "./src/app/pages/start-page/start-page.component.html"),
            styles: [__webpack_require__(/*! ./start-page.component.css */ "./src/app/pages/start-page/start-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_manager_service__WEBPACK_IMPORTED_MODULE_1__["AuthManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StartPageComponent);
    return StartPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/test-page/test-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/test-page/test-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page{\n  display: grid;\n  grid-template-columns: 15% auto 15%;\n  grid-template-rows: 10% auto 10%;\n  grid-template-areas:\n  \"header header header\"\n  \"aside-1 main aside-2\"\n  \"footer footer footer\";\n  min-width: 100vw;\n  min-height: 100vh;\n}\n\n.footer,\n.header,\n.aside-1,\n.aside-2,\n.main{\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.footer{\n  background-color: #dc3545;\n  grid-area: footer;\n}\n\n.main{\n  background-color: #7bee6c;\n  grid-area: main;\n}\n\n.header{\n  background-color: navajowhite;\n  grid-area: header;\n}\n\n.aside-1{\n  background-color: coral;\n  grid-area: aside-1;\n}\n\n.aside-2{\n  background-color: dodgerblue;\n  grid-area: aside-2;\n}\n\n@media (max-width: 1000px) {\n  .page{\n    grid-template-columns:  auto;\n    grid-template-rows:  auto auto auto auto auto;\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"aside-1\"\n      \"aside-2\"\n      \"footer\";\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdC1wYWdlL3Rlc3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxnQ0FBZ0M7RUFDaEM7Ozt3QkFHc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7RUFLRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsNkNBQTZDO0lBQzdDOzs7OztjQUtVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QtcGFnZS90ZXN0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdle1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSBhdXRvIDE1JTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgYXV0byAxMCU7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gIFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcIlxuICBcImFzaWRlLTEgbWFpbiBhc2lkZS0yXCJcbiAgXCJmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmZvb3Rlcixcbi5oZWFkZXIsXG4uYXNpZGUtMSxcbi5hc2lkZS0yLFxuLm1haW57XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmZvb3RlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG59XG5cbi5tYWlue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2JlZTZjO1xuICBncmlkLWFyZWE6IG1haW47XG59XG5cbi5oZWFkZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IG5hdmFqb3doaXRlO1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbn1cblxuLmFzaWRlLTF7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuICBncmlkLWFyZWE6IGFzaWRlLTE7XG59XG5cbi5hc2lkZS0ye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBncmlkLWFyZWE6IGFzaWRlLTI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLnBhZ2V7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwiaGVhZGVyXCJcbiAgICAgIFwibWFpblwiXG4gICAgICBcImFzaWRlLTFcIlxuICAgICAgXCJhc2lkZS0yXCJcbiAgICAgIFwiZm9vdGVyXCI7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/test-page/test-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/test-page/test-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <header class=\"header\">\n\n  </header>\n  <main class=\"main\">\n\n  </main>\n  <aside class=\"aside-1\">\n\n  </aside>\n  <aside class=\"aside-2\">\n\n  </aside>\n  <footer class=\"footer\">\n\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/test-page/test-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/test-page/test-page.component.ts ***!
  \********************************************************/
/*! exports provided: TestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageComponent", function() { return TestPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestPageComponent = /** @class */ (function () {
    function TestPageComponent() {
    }
    TestPageComponent.prototype.ngOnInit = function () {
    };
    TestPageComponent.prototype.hard = function () {
    };
    TestPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-page',
            template: __webpack_require__(/*! ./test-page.component.html */ "./src/app/pages/test-page/test-page.component.html"),
            styles: [__webpack_require__(/*! ./test-page.component.css */ "./src/app/pages/test-page/test-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestPageComponent);
    return TestPageComponent;
}());



/***/ }),

/***/ "./src/app/services/address-storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/address-storage.service.ts ***!
  \*****************************************************/
/*! exports provided: AddressStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressStorageService", function() { return AddressStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddressStorageService = /** @class */ (function () {
    function AddressStorageService() {
        // private _apiAddress = 'http://localhost:8080/api';
        this._apiAddress = 'https://scrabbleapi.herokuapp.com/api';
        this._createUserEndpoint = '/players';
        this._getLobbiesEndpoint = '/games';
        this._loginEndpoint = '/players';
    }
    Object.defineProperty(AddressStorageService.prototype, "apiAddress", {
        get: function () {
            return this._apiAddress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressStorageService.prototype, "createUserEndpoint", {
        get: function () {
            return this._createUserEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressStorageService.prototype, "getLobbiesEndpoint", {
        get: function () {
            return this._getLobbiesEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddressStorageService.prototype, "loginEndpoint", {
        get: function () {
            return this._loginEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    AddressStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AddressStorageService);
    return AddressStorageService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-manager.service */ "./src/app/services/auth-manager.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authManager, router) {
        this.authManager = authManager;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authManager.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_manager_service__WEBPACK_IMPORTED_MODULE_1__["AuthManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth-manager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/auth-manager.service.ts ***!
  \**************************************************/
/*! exports provided: AuthManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthManagerService", function() { return AuthManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Result */ "./src/app/models/Result.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthManagerService = /** @class */ (function () {
    function AuthManagerService() {
        this._isLoggedIn = false;
        this._loginEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthManagerService.prototype.isAuthenticated = function () {
        return this.isLoggedIn;
    };
    AuthManagerService.prototype.authenticate = function (userName, playerId, password) {
        this._isLoggedIn = true;
        this._userName = userName;
        this._playerId = playerId;
        this._basicToken = 'Basic ' + btoa(this._userName + ':' + password);
        this._password = password;
    };
    AuthManagerService.prototype.login = function (login, password, userManager, router) {
        var _this = this;
        userManager.login(btoa(login + ':' + password), login).subscribe(function (next) {
            _this.authenticate(next.nickname, next.id, password);
            router.navigate(['menu']);
        }, function (error) {
            _this._loginEmitter.emit(new _models_Result__WEBPACK_IMPORTED_MODULE_1__["Result"](true, true));
        }, function () {
            _this._loginEmitter.emit(new _models_Result__WEBPACK_IMPORTED_MODULE_1__["Result"](true, false));
        });
    };
    Object.defineProperty(AuthManagerService.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthManagerService.prototype, "isLoggedIn", {
        get: function () {
            return this._isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthManagerService.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthManagerService.prototype, "basicToken", {
        get: function () {
            return this._basicToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthManagerService.prototype, "playerId", {
        get: function () {
            return this._playerId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthManagerService.prototype, "loginEmitter", {
        get: function () {
            return this._loginEmitter;
        },
        enumerable: true,
        configurable: true
    });
    AuthManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthManagerService);
    return AuthManagerService;
}());



/***/ }),

/***/ "./src/app/services/deactivate-guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/deactivate-guard.service.ts ***!
  \******************************************************/
/*! exports provided: DeactivateGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateGuardService", function() { return DeactivateGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data.service */ "./src/app/services/fetch-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeactivateGuardService = /** @class */ (function () {
    function DeactivateGuardService(fetchDataService) {
        this.fetchDataService = fetchDataService;
    }
    DeactivateGuardService.prototype.canDeactivate = function (component) {
        if (!component.canDeactivate()) {
            if (!confirm('Czy na pewno chcesz opuścić lobby?')) {
                return false;
            }
        }
        //    this.fetchDataService.quitLobby(component.lobbyName);  EventListener sprzata na disconnect
        return true;
    };
    DeactivateGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"]])
    ], DeactivateGuardService);
    return DeactivateGuardService;
}());



/***/ }),

/***/ "./src/app/services/fetch-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/fetch-data.service.ts ***!
  \************************************************/
/*! exports provided: FetchDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataService", function() { return FetchDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _address_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address-storage.service */ "./src/app/services/address-storage.service.ts");
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-manager.service */ "./src/app/services/auth-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FetchDataService = /** @class */ (function () {
    function FetchDataService(addressStorage, http, authManager) {
        this.addressStorage = addressStorage;
        this.http = http;
        this.authManager = authManager;
    }
    FetchDataService.prototype.makeMove = function (gameName, move) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        var dtoMap = {};
        move.forEach(function (value, key) {
            dtoMap[key] = value;
        });
        return this.http.patch(this.addressStorage.apiAddress + '/games/' + gameName + '/move?playerId=' + this.authManager.playerId, dtoMap, httpOptions);
    };
    FetchDataService.prototype.getLobbies = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        return this.http.get(this.addressStorage.apiAddress + '/games', httpOptions);
    };
    FetchDataService.prototype.createLobby = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        return this.http.post(this.addressStorage.apiAddress + '/games?playerId=' + this.authManager.playerId, null, httpOptions);
    };
    FetchDataService.prototype.getLobby = function (lobbyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        return this.http.get(this.addressStorage.apiAddress + '/games/' + lobbyName, httpOptions);
    };
    FetchDataService.prototype.joinLobby = function (lobbyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        return this.http.patch(this.addressStorage.apiAddress + '/games/' + lobbyName + '/addPlayer?playerId='
            + this.authManager.playerId, null, httpOptions);
    };
    FetchDataService.prototype.quitLobby = function (lobbyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        this.http.patch(this.addressStorage.apiAddress + '/games/' + lobbyName + '/removePlayer?playerId='
            + this.authManager.playerId, null, httpOptions).subscribe(function (next) {
        }, function (error) {
        }, function () {
        });
    };
    FetchDataService.prototype.startLobby = function (lobbyName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authManager.basicToken
            })
        };
        return this.http.patch(this.addressStorage.apiAddress + /games/ + lobbyName + '/start', null, httpOptions);
    };
    FetchDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_address_storage_service__WEBPACK_IMPORTED_MODULE_2__["AddressStorageService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _auth_manager_service__WEBPACK_IMPORTED_MODULE_3__["AuthManagerService"]])
    ], FetchDataService);
    return FetchDataService;
}());



/***/ }),

/***/ "./src/app/services/game-manager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/game-manager.service.ts ***!
  \**************************************************/
/*! exports provided: GameManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameManagerService", function() { return GameManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-data.service */ "./src/app/services/fetch-data.service.ts");
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-manager.service */ "./src/app/services/auth-manager.service.ts");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.service */ "./src/app/services/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameManagerService = /** @class */ (function () {
    function GameManagerService(fetchDataService, authManager, utils) {
        this.fetchDataService = fetchDataService;
        this.authManager = authManager;
        this.utils = utils;
        this.gameBoard = [];
        this.letterPool = [];
        this.unconfirmedLetters = [];
        this.unconfirmedCords = [];
        this.isCorrectDraggable = false;
    }
    GameManagerService.prototype.gameBoardToMap = function () {
        var map = new Map();
        for (var i = 0; i < this.gameBoard.length; i++) {
            for (var j = 0; j < this.gameBoard[i].length; j++) {
                if (this.gameBoard[i][j] !== null) {
                    map.set(String.fromCharCode(65 + i).concat((j + 1).toString()), this.gameBoard[i][j].character);
                }
            }
        }
        return map;
    };
    GameManagerService.prototype.initGame = function (game) {
        this.initBoard();
        this.initPool(this.utils.charactersToLetters(this.getThisPlayer(game).characters));
    };
    GameManagerService.prototype.getThisPlayer = function (game) {
        var _this = this;
        return game.players.find(function (playerState) { return playerState.player.nickname === _this.authManager.userName; });
    };
    GameManagerService.prototype.initBoard = function () {
        this.gameBoard = [
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
        ];
    };
    GameManagerService.prototype.initPool = function (letters) {
        this.letterPool = letters;
    };
    GameManagerService.prototype.checkDraggable = function () {
        return this.isCorrectDraggable;
    };
    GameManagerService.prototype.setCorrectDraggable = function (isCorrect) {
        this.isCorrectDraggable = isCorrect;
    };
    GameManagerService.prototype.resetUnconfirmed = function () {
        this.unconfirmedLetters = [];
        for (var _i = 0, _a = this.unconfirmedCords; _i < _a.length; _i++) {
            var pair = _a[_i];
            this.gameBoard[pair.first][pair.second] = null;
        }
        this.unconfirmedCords = [];
    };
    GameManagerService.prototype.getUnconfirmedBlocks = function () {
        return this.unconfirmedLetters;
    };
    GameManagerService.prototype.addUnconfirmedBlock = function (letter) {
        this.unconfirmedLetters.push(letter);
    };
    GameManagerService.prototype.addUnconfirmedCord = function (pair) {
        this.unconfirmedCords.push(pair);
    };
    GameManagerService.prototype.move = function (game) {
        this.fetchDataService.makeMove(game.name, this.gameBoardToMap()).subscribe(function (next) { }, function (error) { return console.log('error: ', error); }, function () { });
    };
    GameManagerService.prototype.isMyMove = function (game) {
        var isMyMove = false;
        for (var i = 0; i < game.players.length; i++) {
            if (game.players[i].player.nickname === this.authManager.userName) {
                if (game.nextPlayer !== i) {
                    isMyMove = true;
                    break;
                }
            }
        }
        return isMyMove;
    };
    GameManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"],
            _auth_manager_service__WEBPACK_IMPORTED_MODULE_2__["AuthManagerService"],
            _utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]])
    ], GameManagerService);
    return GameManagerService;
}());



/***/ }),

/***/ "./src/app/services/share-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/share-data.service.ts ***!
  \************************************************/
/*! exports provided: ShareDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDataService", function() { return ShareDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareDataService = /** @class */ (function () {
    function ShareDataService() {
        this._game = null;
    }
    Object.defineProperty(ShareDataService.prototype, "game", {
        get: function () {
            return this._game;
        },
        set: function (value) {
            this._game = value;
        },
        enumerable: true,
        configurable: true
    });
    ShareDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShareDataService);
    return ShareDataService;
}());



/***/ }),

/***/ "./src/app/services/socket-interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/socket-interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: SocketInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketInterceptorService", function() { return SocketInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-manager.service */ "./src/app/services/auth-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketInterceptorService = /** @class */ (function () {
    function SocketInterceptorService(authManager) {
        this.authManager = authManager;
    }
    SocketInterceptorService.prototype.intercept = function (req, next) {
        console.log(req.url);
        console.log(req);
        // req = req.clone({
        //   setHeaders: {
        //     Authorization: this.authManager.basicToken
        //   }
        // });
        return next.handle(req);
    };
    SocketInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_manager_service__WEBPACK_IMPORTED_MODULE_1__["AuthManagerService"]])
    ], SocketInterceptorService);
    return SocketInterceptorService;
}());



/***/ }),

/***/ "./src/app/services/user-manager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-manager.service.ts ***!
  \**************************************************/
/*! exports provided: UserManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagerService", function() { return UserManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _address_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-storage.service */ "./src/app/services/address-storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserManagerService = /** @class */ (function () {
    function UserManagerService(addressStorage, http) {
        this.addressStorage = addressStorage;
        this.http = http;
        this.address = this.addressStorage.apiAddress;
    }
    UserManagerService.prototype.registerPlayer = function (player) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
        };
        return this.http.post(this.address + this.addressStorage.createUserEndpoint, player, httpOptions);
    };
    UserManagerService.prototype.login = function (basicAuthHeader, playerName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Basic ' + basicAuthHeader,
            })
        };
        return this.http.get(this.address + this.addressStorage.loginEndpoint + '/' + playerName, httpOptions);
    };
    UserManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_address_storage_service__WEBPACK_IMPORTED_MODULE_1__["AddressStorageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserManagerService);
    return UserManagerService;
}());



/***/ }),

/***/ "./src/app/services/utils.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/utils.service.ts ***!
  \*******************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Letter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Letter */ "./src/app/models/Letter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.extractDataFromLobbies = function (lobbies) {
        var data = [];
        var tuple = [null, []];
        for (var _i = 0, lobbies_1 = lobbies; _i < lobbies_1.length; _i++) {
            var lobby = lobbies_1[_i];
            tuple[0] = lobby;
            for (var _a = 0, _b = lobby.players; _a < _b.length; _a++) {
                var lobbyPlayer = _b[_a];
                tuple[1].push(lobbyPlayer.player);
            }
            if (tuple[0] !== null) {
                data.push(tuple); // <- nie wiem czemu pokazuje niezgodne typy, wczesniej nie pokazywal, kompiluje sie i dziala wiec nie ruszam
            }
            tuple = [null, []];
        }
        return data;
    };
    UtilsService.prototype.extractDataFromLobby = function (lobby) {
        var data = [null, []];
        data[0] = lobby;
        for (var _i = 0, _a = lobby.players; _i < _a.length; _i++) {
            var lobbyPlayer = _a[_i];
            data[1].push(lobbyPlayer.player);
        }
        return data;
    };
    UtilsService.prototype.charactersToLetters = function (characters) {
        var letters = [];
        for (var _i = 0, characters_1 = characters; _i < characters_1.length; _i++) {
            var char = characters_1[_i];
            letters.push(new _models_Letter__WEBPACK_IMPORTED_MODULE_1__["Letter"](char));
        }
        return letters;
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/services/web-socket.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _address_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-storage.service */ "./src/app/services/address-storage.service.ts");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-manager.service */ "./src/app/services/auth-manager.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WebSocketService = /** @class */ (function () {
    function WebSocketService(addressStorage, authManager) {
        this.addressStorage = addressStorage;
        this.authManager = authManager;
        this.socketMessage = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        this.socketMessage$ = this.socketMessage.asObservable();
    }
    WebSocketService.prototype.connectToLobbyWebSocket = function (lobbyName) {
        var that = this;
        var ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(this.addressStorage.apiAddress + '/socket', null, {
            sessionId: function () {
                return that.authManager.playerId + ':' + lobbyName + ':' + Object(uuid__WEBPACK_IMPORTED_MODULE_6__["v4"])();
            }
        });
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](ws);
        this.stompClient.debug = null;
        this.stompClient.connect({}, function () {
            that.stompClient.subscribe('/lobby/' + lobbyName, function (message) {
                if (message.body) {
                    that.socketMessage.next(message.body);
                }
            });
        });
    };
    WebSocketService.prototype.connectToGameSocket = function (gameName) {
        var that = this;
        var ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(this.addressStorage.apiAddress + '/socket');
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](ws);
        this.stompClient.debug = null;
        this.stompClient.connect({}, function () {
            that.stompClient.subscribe('/game/' + gameName, function (message) {
                if (message.body) {
                    that.socketMessage.next(message.body);
                }
            });
        });
    };
    WebSocketService.prototype.onDestroy = function () {
        if (this.stompClient) {
            this.stompClient.disconnect();
        }
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_address_storage_service__WEBPACK_IMPORTED_MODULE_1__["AddressStorageService"], _auth_manager_service__WEBPACK_IMPORTED_MODULE_4__["AuthManagerService"]])
    ], WebSocketService);
    return WebSocketService;
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

module.exports = __webpack_require__(/*! C:\Users\Szymon\Desktop\zpi\zpi-frontend-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map