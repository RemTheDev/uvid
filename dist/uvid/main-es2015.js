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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_room_connection_room_connection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/room-connection/room-connection.component */ "./src/app/components/room-connection/room-connection.component.ts");





const routes = [
    { path: '', redirectTo: 'room-connection/', pathMatch: 'full' },
    { path: 'room-connection', redirectTo: 'room-connection/', pathMatch: 'full' },
    { path: 'room-connection/:roomId', component: _components_room_connection_room_connection_component__WEBPACK_IMPORTED_MODULE_2__["RoomConnectionComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'uvid';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_room_connection_room_connection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/room-connection/room-connection.component */ "./src/app/components/room-connection/room-connection.component.ts");
/* harmony import */ var _services_webrtc_client_connection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/webrtc-client-connection.service */ "./src/app/services/webrtc-client-connection.service.ts");
/* harmony import */ var _services_webrtc_clients_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/webrtc-clients.service */ "./src/app/services/webrtc-clients.service.ts");
/* harmony import */ var _services_mediastream_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/mediastream.service */ "./src/app/services/mediastream.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");















__webpack_require__(/*! webrtc-adapter */ "./node_modules/webrtc-adapter/src/js/adapter_core.js");
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_webrtc_client_connection_service__WEBPACK_IMPORTED_MODULE_5__["WebRTCConnectionService"],
        _services_webrtc_clients_service__WEBPACK_IMPORTED_MODULE_6__["WebRTCClientService"],
        _services_mediastream_service__WEBPACK_IMPORTED_MODULE_7__["MediaStreamService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_room_connection_room_connection_component__WEBPACK_IMPORTED_MODULE_4__["RoomConnectionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_room_connection_room_connection_component__WEBPACK_IMPORTED_MODULE_4__["RoomConnectionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]
                ],
                providers: [
                    _services_webrtc_client_connection_service__WEBPACK_IMPORTED_MODULE_5__["WebRTCConnectionService"],
                    _services_webrtc_clients_service__WEBPACK_IMPORTED_MODULE_6__["WebRTCClientService"],
                    _services_mediastream_service__WEBPACK_IMPORTED_MODULE_7__["MediaStreamService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/room-connection/room-connection.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/room-connection/room-connection.component.ts ***!
  \*************************************************************************/
/*! exports provided: RoomConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomConnectionComponent", function() { return RoomConnectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_webrtc_client_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/webrtc-client-connection.service */ "./src/app/services/webrtc-client-connection.service.ts");
/* harmony import */ var _services_webrtc_clients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/webrtc-clients.service */ "./src/app/services/webrtc-clients.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");












function RoomConnectionComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomConnectionComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.connect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Connect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.userName === "");
} }
function RoomConnectionComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomConnectionComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.disconnect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Disconnect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomConnectionComponent_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You were connected to a new room since the requested room was full.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomConnectionComponent_mat_card_8_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomConnectionComponent_mat_card_8_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.copyLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copy to clipboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoomConnectionComponent_mat_card_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Room invitation link :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoomConnectionComponent_mat_card_8_button_5_Template, 2, 0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.currentURL + ctx_r3.roomId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.roomId);
} }
function RoomConnectionComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "video", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r12 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r12.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", user_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.setStreamSrc(user_r12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class RoomConnectionComponent {
    constructor(route, router, webRTCConnectionService, webRTCClientService, domSanitizer) {
        this.route = route;
        this.router = router;
        this.webRTCConnectionService = webRTCConnectionService;
        this.webRTCClientService = webRTCClientService;
        this.domSanitizer = domSanitizer;
        this.userName = '';
        this.roomId = undefined;
        this.roomWasFull = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.roomId) {
                this.webRTCClientService.setRoomId(params.roomId, false);
            }
            else {
                this.webRTCClientService.setRoomId(undefined, false);
            }
        });
        this.webRTCClientService.getRoomId.subscribe((roomId) => {
            this.roomId = roomId;
        });
        this.webRTCClientService.getRoomWasFull.subscribe((roomWasFull) => {
            this.roomWasFull = roomWasFull;
        });
        this.webRTCClientService.getClients.subscribe((userList) => {
            this.usersConnected = userList.toArray();
        }, (e) => {
            console.error('Error updating user list:', e);
        });
        this.isConnected = false;
        this.currentURL = location.origin + '/room-connection/';
    }
    copyLink() {
        const tempTxtBox = document.createElement('textarea');
        tempTxtBox.style.position = 'fixed';
        tempTxtBox.style.left = '0';
        tempTxtBox.style.top = '0';
        tempTxtBox.style.opacity = '0';
        tempTxtBox.value = this.currentURL + this.roomId;
        document.body.appendChild(tempTxtBox);
        tempTxtBox.focus();
        tempTxtBox.select();
        document.execCommand('copy');
        document.body.removeChild(tempTxtBox);
    }
    connect() {
        this.webRTCConnectionService.connect(this.userName, this.roomId);
        this.isConnected = true;
    }
    disconnect() {
        this.webRTCConnectionService.disconnect();
        this.isConnected = false;
        this.webRTCClientService.setRoomId(undefined, false);
        this.router.navigate(['room-connection', '']);
        location.reload();
    }
    setStreamSrc(user) {
        const video = document.getElementById(user.id);
        video.srcObject = user.stream;
        return user.id;
    }
}
RoomConnectionComponent.ɵfac = function RoomConnectionComponent_Factory(t) { return new (t || RoomConnectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_webrtc_client_connection_service__WEBPACK_IMPORTED_MODULE_2__["WebRTCConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_webrtc_clients_service__WEBPACK_IMPORTED_MODULE_3__["WebRTCClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"])); };
RoomConnectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomConnectionComponent, selectors: [["app-room-connection"]], decls: 11, vars: 6, consts: [[1, "mainContainer"], [1, "txtUserName"], ["matInput", "", "placeholder", "your name", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "roomInvLink", 4, "ngIf"], [1, "streamsContainer"], ["class", "userContainer", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "roomInvLink"], [1, "roomInvLinkLabel"], [1, "userContainer"], [1, "userName"], ["controls", "", "autoplay", "", 1, "videoScreen", 3, "id", "src"]], template: function RoomConnectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomConnectionComponent_Template_input_ngModelChange_4_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoomConnectionComponent_button_5_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoomConnectionComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoomConnectionComponent_mat_card_7_Template, 3, 0, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoomConnectionComponent_mat_card_8_Template, 6, 2, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RoomConnectionComponent_div_10_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roomWasFull);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roomId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.usersConnected);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"]], styles: [".mainContainer[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  height: 100%;\n}\n\n.txtUserName[_ngcontent-%COMP%] {\n  margin: 20px 10px 0 20px;\n}\n\n.roomInvLink[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 0 20px 10px 20px;\n  background-color: #ebebeb;\n}\n\n.roomInvLink[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.roomInvLinkLabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.streamsContainer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.userContainer[_ngcontent-%COMP%] {\n  margin: 0 20px 20px 20px;\n}\n\n.videoScreen[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 300px;\n}\n\n.userName[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb29tLWNvbm5lY3Rpb24vRjpcXFByb2pldCBXZWJcXHVWaWQtaDIwMjAtUmVteV9IdW90XFx1dmlkXFx1dmlkL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyb29tLWNvbm5lY3Rpb25cXHJvb20tY29ubmVjdGlvbi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yb29tLWNvbm5lY3Rpb24vcm9vbS1jb25uZWN0aW9uLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx3QkFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUNHRjs7QUREQTtFQUNFLFNBQUE7QUNJRjs7QURGQTtFQUNFLGlCQUFBO0FDS0Y7O0FESEE7RUFHRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0Usd0JBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDTUY7O0FESkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb29tLWNvbm5lY3Rpb24vcm9vbS1jb25uZWN0aW9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5Db250YWluZXJcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSlcclxuICBoZWlnaHQ6IDEwMCVcclxuXHJcbi50eHRVc2VyTmFtZVxyXG4gIG1hcmdpbjogMjBweCAxMHB4IDAgMjBweFxyXG5cclxuLnJvb21JbnZMaW5rXHJcbiAgcGFkZGluZzogMTBweFxyXG4gIG1hcmdpbjogMCAyMHB4IDEwcHggMjBweFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KVxyXG5cclxuLnJvb21JbnZMaW5rIHBcclxuICBtYXJnaW46IDBcclxuXHJcbi5yb29tSW52TGlua0xhYmVsXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxuXHJcbi5zdHJlYW1zQ29udGFpbmVyXHJcbiAgLy9kaXNwbGF5OiBncmlkXHJcbiAgLy9ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXhcclxuICBmbGV4LWRpcmVjdGlvbjogcm93XHJcbiAgZmxleC13cmFwOiB3cmFwXHJcblxyXG4udXNlckNvbnRhaW5lclxyXG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMjBweFxyXG5cclxuLnZpZGVvU2NyZWVuXHJcbiAgd2lkdGg6IDQwMHB4XHJcbiAgaGVpZ2h0OiAzMDBweFxyXG5cclxuLnVzZXJOYW1lXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICBmb250LXNpemU6IDIwcHhcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuIiwiLm1haW5Db250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50eHRVc2VyTmFtZSB7XG4gIG1hcmdpbjogMjBweCAxMHB4IDAgMjBweDtcbn1cblxuLnJvb21JbnZMaW5rIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAwIDIwcHggMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xufVxuXG4ucm9vbUludkxpbmsgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnJvb21JbnZMaW5rTGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN0cmVhbXNDb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4udXNlckNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMjBweDtcbn1cblxuLnZpZGVvU2NyZWVuIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4udXNlck5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomConnectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-room-connection',
                templateUrl: './room-connection.component.html',
                styleUrls: ['./room-connection.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_webrtc_client_connection_service__WEBPACK_IMPORTED_MODULE_2__["WebRTCConnectionService"] }, { type: _services_webrtc_clients_service__WEBPACK_IMPORTED_MODULE_3__["WebRTCClientService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/webrtc-client.model.ts":
/*!***********************************************!*\
  !*** ./src/app/models/webrtc-client.model.ts ***!
  \***********************************************/
/*! exports provided: WebRTCClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRTCClient", function() { return WebRTCClient; });
class WebRTCClient {
    constructor(id, userName, stream) {
        this.id = id;
        this.userName = userName;
        this.stream = stream;
    }
}


/***/ }),

/***/ "./src/app/services/mediastream.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/mediastream.service.ts ***!
  \*************************************************/
/*! exports provided: MediaStreamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaStreamService", function() { return MediaStreamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MediaStreamService {
    constructor() {
        this.mediaStream = undefined;
    }
    getMediaStream() {
        if (!this.mediaStream) {
            return navigator.mediaDevices.getUserMedia({
                audio: true, video: true
            }).then((stream) => {
                return Promise.resolve(stream);
            }).catch((e) => {
                console.error('Could not get media stream: ', e);
                return Promise.reject(e);
            });
        }
        else {
            return Promise.resolve(this.mediaStream);
        }
    }
}
MediaStreamService.ɵfac = function MediaStreamService_Factory(t) { return new (t || MediaStreamService)(); };
MediaStreamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MediaStreamService, factory: MediaStreamService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaStreamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/webrtc-client-connection.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/webrtc-client-connection.service.ts ***!
  \**************************************************************/
/*! exports provided: WebRTCConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRTCConnectionService", function() { return WebRTCConnectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_webrtc_client_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/webrtc-client.model */ "./src/app/models/webrtc-client.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webrtc/webrtc-event-messages */ "./src/app/webrtc/webrtc-event-messages.ts");
/* harmony import */ var _webrtc_clients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webrtc-clients.service */ "./src/app/services/webrtc-clients.service.ts");
/* harmony import */ var _mediastream_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mediastream.service */ "./src/app/services/mediastream.service.ts");








class WebRTCConnectionService {
    constructor(webRTCClientsService, mediaStreamService) {
        this.webRTCClientsService = webRTCClientsService;
        this.mediaStreamService = mediaStreamService;
        this.userConnections = [];
        this.mediaStream = undefined;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__["connect"](_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ServiceLink);
        this.socket.on('connect', () => {
            this.userId = this.socket.id;
            console.log('Socket', this.socket.id, 'connected.');
        });
        this.socket.on('disconnect', () => {
            console.log('Socket', this.socket.id, 'disconnected.');
        });
        this.socket.on(_webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_USER_CONNECTED"], (data) => {
            this.makeOffer(data.userId, data.username);
        });
        this.socket.on(_webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_USER_DISCONNECTED"], (data) => {
            this.userDisconnected(data.userId);
        });
        this.socket.on(_webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_CONNECTED_TO_ROOM"], (data) => {
            this.webRTCClientsService.setRoomId(data.roomId, false);
        });
        this.socket.on(_webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_ROOM_IS_FULL"], (data) => {
            this.webRTCClientsService.setRoomId(data.roomId, true);
        });
        this.socket.on(_webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_MESSAGE"], (data) => {
            this.handleRTCMessage(data);
        });
    }
    connect(userName, room) {
        this.mediaStreamService.getMediaStream().then((stream) => {
            this.mediaStream = stream;
            const currentUser = new _models_webrtc_client_model__WEBPACK_IMPORTED_MODULE_2__["WebRTCClient"](this.socket.id, userName, this.mediaStream);
            this.webRTCClientsService.addClient(currentUser);
            if (!room) {
                this.socket.emit(_webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_INIT"], { userId: currentUser.id });
            }
            else {
                console.log(room);
                this.socket.emit(_webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_INIT"], { userId: currentUser.id, room: room, username: userName });
            }
        }).catch(e => {
            console.error('Couln\'t get mediaStream', e);
        });
    }
    disconnect() {
        this.socket.emit(_webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_DISCONNECT"], { userId: this.userId });
        this.mediaStream.getTracks().forEach((track) => {
            track.stop();
        });
        this.webRTCClientsService.removeClient(this.socket.id);
    }
    makeOffer(userId, userName) {
        const userConnection = this.getUserConnection(userId, userName);
        const options = {
            mandatory: {
                offerToReceiveVideo: true,
                offerToReceiveAudio: true
            }
        };
        userConnection.createOffer({ offerToReceiveAudio: true, offerToReceiveVideo: true }).then((session) => {
            return userConnection.setLocalDescription(session).then(() => {
                this.socket.emit(_webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_MESSAGE"], {
                    from: this.userId,
                    dest: userId,
                    session: session,
                    type: _webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_MESSAGE_TYPE_OFFER"],
                    username: this.webRTCClientsService.getUserName(this.userId)
                });
            });
        });
    }
    getUserConnection(userId, userName) {
        if (this.userConnections[userId]) {
            return this.userConnections[userId];
        }
        const userConnection = new RTCPeerConnection();
        this.userConnections[userId] = userConnection;
        userConnection.onicecandidate = (event) => {
            this.socket.emit(_webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_MESSAGE"], {
                from: this.userId,
                dest: userId,
                ice: event.candidate,
                type: _webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_MESSAGE_TYPE_ICE"]
            });
        };
        userConnection.onnegotiationneeded = () => {
            console.log('Need nogociation:', userId);
        };
        userConnection.onsignalingstatechange = () => {
            console.log('Client', userId, ' ICE signal changed to', userConnection.signalingState);
        };
        this.mediaStream.getTracks().forEach(track => {
            userConnection.addTrack(track, this.mediaStream);
        });
        userConnection.ontrack = (event) => {
            // Work around so this code only fires once even if the event is triggered twice (audio and video)
            if (event.track.kind === 'video') {
                console.log('Received new stream');
                const user = new _models_webrtc_client_model__WEBPACK_IMPORTED_MODULE_2__["WebRTCClient"](userId, userName, event.streams[0]);
                this.webRTCClientsService.addClient(user);
            }
        };
        return userConnection;
    }
    handleRTCMessage(message) {
        const userConnection = this.getUserConnection(message.from, message.username);
        switch (message.type) {
            case _webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_MESSAGE_TYPE_ICE"]:
                if (message.ice) {
                    console.log('Adding ice candidate');
                    userConnection.addIceCandidate(message.ice);
                }
                break;
            case _webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_MESSAGE_TYPE_OFFER"]:
                userConnection.setRemoteDescription(new RTCSessionDescription(message.session)).then(() => {
                    console.log('Setting remote session');
                    return userConnection.createAnswer().then((session) => {
                        return userConnection.setLocalDescription(session).then(() => {
                            this.socket.emit(_webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_MESSAGE"], {
                                from: this.userId,
                                dest: message.from,
                                session: session,
                                type: _webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_MESSAGE_TYPE_ANSWER"],
                                username: this.webRTCClientsService.getUserName(this.userId)
                            });
                        });
                    });
                }).catch(e => {
                    console.error('Error on SDP-Offer:', e);
                });
                break;
            case _webrtc_webrtc_event_messages__WEBPACK_IMPORTED_MODULE_4__["RTC_MESSAGE_TYPE_ANSWER"]:
                userConnection.setRemoteDescription(new RTCSessionDescription(message.session)).then(() => {
                    console.log('Setting remote session');
                }).catch(e => console.error('Error on answer:', e));
                break;
        }
    }
    userDisconnected(userId) {
        this.webRTCClientsService.removeClient(userId);
    }
}
WebRTCConnectionService.ɵfac = function WebRTCConnectionService_Factory(t) { return new (t || WebRTCConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_webrtc_clients_service__WEBPACK_IMPORTED_MODULE_5__["WebRTCClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mediastream_service__WEBPACK_IMPORTED_MODULE_6__["MediaStreamService"])); };
WebRTCConnectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebRTCConnectionService, factory: WebRTCConnectionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebRTCConnectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _webrtc_clients_service__WEBPACK_IMPORTED_MODULE_5__["WebRTCClientService"] }, { type: _mediastream_service__WEBPACK_IMPORTED_MODULE_6__["MediaStreamService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/webrtc-clients.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/webrtc-clients.service.ts ***!
  \****************************************************/
/*! exports provided: WebRTCClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRTCClientService", function() { return WebRTCClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class WebRTCClientService {
    constructor() {
        this.clients = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([]));
        this.roomId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.roomWasFull = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    get getClients() {
        return this.clients.asObservable();
    }
    addClient(newClient) {
        this.clients.next(this.clients.getValue().push(newClient));
    }
    removeClient(clientId) {
        const clientList = this.clients.getValue();
        const removeIndex = clientList.findIndex(c => c.id === clientId);
        this.clients.next(clientList.remove(removeIndex));
    }
    get getRoomId() {
        return this.roomId.asObservable();
    }
    get getRoomWasFull() {
        return this.roomWasFull.asObservable();
    }
    setRoomId(roomId, roomWasFull) {
        this.roomId.next(roomId);
        this.roomWasFull.next(roomWasFull);
    }
    getUserName(clientId) {
        const clientList = this.clients.getValue();
        return clientList.find(c => c.id === clientId).userName;
    }
}
WebRTCClientService.ɵfac = function WebRTCClientService_Factory(t) { return new (t || WebRTCClientService)(); };
WebRTCClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebRTCClientService, factory: WebRTCClientService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebRTCClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/webrtc/webrtc-event-messages.ts":
/*!*************************************************!*\
  !*** ./src/app/webrtc/webrtc-event-messages.ts ***!
  \*************************************************/
/*! exports provided: RTC_USER_CONNECTED, RTC_USER_DISCONNECTED, RTC_DISCONNECT, RTC_INIT, RTC_CONNECTED_TO_ROOM, RTC_ROOM_IS_FULL, RTC_MESSAGE, RTC_MESSAGE_TYPE_ICE, RTC_MESSAGE_TYPE_OFFER, RTC_MESSAGE_TYPE_ANSWER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTC_USER_CONNECTED", function() { return RTC_USER_CONNECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTC_USER_DISCONNECTED", function() { return RTC_USER_DISCONNECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTC_DISCONNECT", function() { return RTC_DISCONNECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTC_INIT", function() { return RTC_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTC_CONNECTED_TO_ROOM", function() { return RTC_CONNECTED_TO_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTC_ROOM_IS_FULL", function() { return RTC_ROOM_IS_FULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTC_MESSAGE", function() { return RTC_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTC_MESSAGE_TYPE_ICE", function() { return RTC_MESSAGE_TYPE_ICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTC_MESSAGE_TYPE_OFFER", function() { return RTC_MESSAGE_TYPE_OFFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTC_MESSAGE_TYPE_ANSWER", function() { return RTC_MESSAGE_TYPE_ANSWER; });
const RTC_USER_CONNECTED = 'user_connected';
const RTC_USER_DISCONNECTED = 'user_disconnected';
const RTC_DISCONNECT = 'disconnects';
const RTC_INIT = 'init';
const RTC_CONNECTED_TO_ROOM = 'connected_to_room';
const RTC_ROOM_IS_FULL = 'room_is_full';
const RTC_MESSAGE = 'message';
const RTC_MESSAGE_TYPE_ICE = 'ice';
const RTC_MESSAGE_TYPE_OFFER = 'offer';
const RTC_MESSAGE_TYPE_ANSWER = 'answer';


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
const environment = {
    production: false,
    ServiceLink: 'http://localhost:8080'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projet Web\uVid-h2020-Remy_Huot\uvid\uvid\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map