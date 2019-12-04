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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<router-outlet></router-outlet>\r\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'metting-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/notfound/notfound.component */ "./src/app/user/notfound/notfound.component.ts");
/* harmony import */ var _slot_management_slot_management_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slot-management/slot-management.module */ "./src/app/slot-management/slot-management.module.ts");
/* harmony import */ var _userdashboard_userdashboard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userdashboard/userdashboard.module */ "./src/app/userdashboard/userdashboard.module.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
                _slot_management_slot_management_module__WEBPACK_IMPORTED_MODULE_12__["SlotManagementModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _userdashboard_userdashboard_module__WEBPACK_IMPORTED_MODULE_13__["UserdashboardModule"],
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([
                    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], pathMatch: 'full' },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
                    { path: '404', component: _user_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"] },
                    { path: '**', redirectTo: '/404' }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);





var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.url = "http://api.thesoulblog.in/api/v1";
        //set user info in local storage by setter function
        this.setUserInfoIntoLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
        //get user info in local storage by setter function
        this.getUserInfoIntoLocalStorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        };
        //get all events of particular normal user
        this.getNormalUserAllEvent = function (userId) {
            var parmas = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('userId', userId);
            return _this.http.post(_this.url + '/meeting/getuserallmeeting', parmas);
        };
        //end
        //get all events of admin user
        this.getAdminAllEvent = function (userId) {
            var parmas = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('adminId', userId);
            return _this.http.post(_this.url + '/meeting/getadminallmeeting', parmas);
        };
        //end
        //get all userlist
        this.getAllUserList = function () {
            return _this.http.get(_this.url + '/users/getalluser');
        };
        //end
        //add user event to database
        this.addUserEvent = function (data) {
            //console.log('add');
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('adminName', data.adminName)
                .set('adminId', data.adminId)
                .set('userId', data.userId)
                .set('title', data.title)
                .set('start', data.start)
                .set('end', data.end);
            return _this.http.post(_this.url + '/meeting/addusermeeting', params);
        };
        //end
        //edit metting details
        this.editmeeting = function (data) {
            console.log('add');
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('_id', data._id)
                .set('title', data.title)
                .set('start', data.start)
                .set('end', data.end);
            return _this.http.post(_this.url + '/meeting/editmeeting', params);
        };
        //end
        //delete user event from database
        this.deleteEvent = function (_id) {
            var parmas = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('_id', _id);
            return _this.http.post(_this.url + '/meeting/deleteusermeeting/', parmas);
        };
        //end
        //inform user by email 
        this.informUserByMail = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('adminName', data.adminName)
                .set('userId', data.userId)
                .set('title', data.title);
            return _this.http.post(_this.url + '/meeting/informbyemail', params);
        };
        //
        //user logout function
        this.logout = function () {
            console.log("logout called");
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('userId', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('receiverId'));
            return _this.http.post(_this.url + '/users/logout', params);
        };
    }
    //user sign up function
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password)
            .set('coutryCode', data.coutryCode)
            .set('userName', data.userName)
            .set('isAdmin', data.isAdmin);
        return this.http.post(this.url + '/users/signup', params);
    };
    //user signin funtion
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + '/users/login', params);
    };
    //user recoverpassword function
    AppService.prototype.recoverPasword = function (email) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', email);
        return this.http.post(this.url + '/users/forgetPassword', params);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/slot-management/admin-user/admin-user.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/slot-management/admin-user/admin-user.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left{\r\n     \r\n    text-align: center; \r\n    background:  rgb(49, 141, 207);\r\n    height: 40px;\r\n    color:white;\r\n    border: 2px solid rgb(28, 104, 158);\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n}\r\n.Show{\r\n    display: block;\r\n}\r\n.Hide{\r\n    display: none;\r\n     \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xvdC1tYW5hZ2VtZW50L2FkbWluLXVzZXIvYWRtaW4tdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTs7QUFFakIiLCJmaWxlIjoic3JjL2FwcC9zbG90LW1hbmFnZW1lbnQvYWRtaW4tdXNlci9hZG1pbi11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdHtcclxuICAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBiYWNrZ3JvdW5kOiAgcmdiKDQ5LCAxNDEsIDIwNyk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyOCwgMTA0LCAxNTgpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uU2hvd3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5IaWRle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/slot-management/admin-user/admin-user.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/slot-management/admin-user/admin-user.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-4 col-sm-12\"></div>\n      <div class=\"left  col-md-4 col-sm-12\">{{userName}}</div>\n      <div class=\"col-md-4 col-sm-12\"></div>\n  </div>\n   <br><hr>\n  \n<div class=\"row text-center\">\n  <div class=\"col-md-4 col-sm-12\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\n      >\n        Previous\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\"\n      >\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\n      >\n        Next\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-12\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4 col-sm-12\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Month)\"\n        [class.active]=\"view === CalendarView.Month\"\n      >\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Week)\"\n        [class.active]=\"view === CalendarView.Week\"\n      >\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Day)\"\n        [class.active]=\"view === CalendarView.Day\"\n      >\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br />\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"CalendarView.Month\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"CalendarView.Week\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"CalendarView.Day\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-day-view>\n</div>\n\n \n\n<br /><br /><br />\n\n<div [ngClass]=\"{'Hide':userId==adminId ,'Show':userId!=adminId}\">\n  Edit events\n  <input type=\"text\"\n  placeholder=\"Meeting Name\"\n  class=\"form-control\"\n  [(ngModel)]=\"title\"><br>\n  <input type=\"text\"\n  placeholder=\"startDate\"\n  class=\"form-control\"\n  bsDatepicker [(ngModel)]=\"startDate\"><br>\n  <timepicker [(ngModel)]=\"startTime\"></timepicker>\n<input type=\"text\"\nplaceholder=\"endDate\"\nclass=\"form-control\"\nbsDatepicker [(ngModel)]=\"endDate\"><br>\n<timepicker [(ngModel)]=\"endTime\"></timepicker>\n  <button class=\"btn btn-primary pull-right\" (click)=\"addEvent()\">\n    Add new\n  </button>\n   \n</div>\n\n<div class=\"table-responsive\"[ngClass]=\"{'Hide':userId==adminId,'Show':userId!=adminId }\">\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr>\n        <th>Title</th>\n        \n        <th>Starts at</th>\n        <th>Ends at</th>\n        <th>Remove</th>\n        <th>Update</th>\n      </tr>\n    </thead>\n\n    <tbody *ngIf=\"events.length>0\">\n      <tr *ngFor=\"let event of events\">\n        <td>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"event.title\"\n            (keyup)=\"refresh.next()\"\n          />\n        </td>\n         \n        <td>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            mwlFlatpickr\n            [(ngModel)]=\"event.start\"\n            (ngModelChange)=\"refresh.next()\"\n             \n            dateFormat=\"Y-m-dTH:i\"\n            altFormat=\"F j, Y H:i\"\n            placeholder=\"Not set\"\n             \n          />\n        </td>\n        <td>\n          <input\n            class=\"form-control\"\n            type=\"text\"\n            mwlFlatpickr\n            [(ngModel)]=\"event.end\"\n            (ngModelChange)=\"refresh.next()\"\n             \n            dateFormat=\"Y-m-dTH:i\"\n            altFormat=\"F j, Y H:i\"\n            placeholder=\"Not set\"\n             \n          />\n        </td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"deleteEvent(event)\">\n            Delete\n          </button>\n        </td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"updateEvent(event)\">\n            Update\n          </button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n</div>\n \n<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\"> Welcome to MeetingScheduler:</h5>\n     \n  </div>\n  <div class=\"modal-body\">\n    <div>\n        Meeting Details\n      \n    </div>\n    <div>\n      Event:\n      <pre>MeetingName-{{ modalData?.event.title }}</pre><br>\n      <pre>StartDate-{{ modalData?.event.start }}</pre><br>\n      <pre>EndDate-{{ modalData?.event.end }}</pre><br>\n      <pre>OrganizedBy-{{ modalData?.event.adminName }}</pre>\n    </div>\n  </div>\n  \n</ng-template>"

/***/ }),

/***/ "./src/app/slot-management/admin-user/admin-user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/slot-management/admin-user/admin-user.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserComponent", function() { return AdminUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");










var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var AdminUserComponent = /** @class */ (function () {
    function AdminUserComponent(modalService, appService, toastr, socketService) {
        var _this = this;
        this.modalService = modalService;
        this.appService = appService;
        this.toastr = toastr;
        this.socketService = socketService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = true;
        //get all metting of particular user
        this.getUserAllEvent = function (userId) {
            console.log('userid' + userId + 'adminId' + _this.adminId);
            if (userId != _this.adminId) {
                console.log('normal');
                _this.appService.getNormalUserAllEvent(userId).subscribe(function (data) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var item = data_1[_i];
                        item['color'] = colors.blue;
                        console.log('start-----', item.start);
                        item.start = new Date(item.start);
                        item.start.setHours(item.start.getHours() - 5, item.start.getMinutes() - 30);
                        item.end = new Date(item.end);
                        item.end.setHours(item.end.getHours() - 5, item.end.getMinutes() - 30);
                        _this.events.push(item);
                    }
                    //console.log(this.events);
                    _this.refresh.next();
                });
            }
            else {
                console.log('admin');
                _this.appService.getAdminAllEvent(userId).subscribe(function (data) {
                    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                        var item = data_2[_i];
                        item['color'] = colors.blue;
                        console.log('start-----', item.start);
                        item.start = new Date(item.start);
                        item.start.setHours(item.start.getHours() - 5, item.start.getMinutes() - 30);
                        item.end = new Date(item.end);
                        item.end.setHours(item.end.getHours() - 5, item.end.getMinutes() - 30);
                        _this.events.push(item);
                    }
                    //console.log(this.events);
                    _this.refresh.next();
                });
            }
        };
    }
    AdminUserComponent.prototype.ngOnInit = function () {
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('receiverName');
        this.adminId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_8__["Cookie"].get('receiverId');
        this.getUserAllEvent(this.userId);
        console.log('check' + Date());
    };
    AdminUserComponent.prototype.ngOnChanges = function (changes) {
        this.events = [];
        this.getUserAllEvent(changes.userId.currentValue);
        // You can also use categoryId.previousValue and 
        // categoryId.firstChange for comparing old and new values
    };
    //end
    AdminUserComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    //function to show data using modal
    AdminUserComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modalRef = this.modalService.show(this.modalContent);
    };
    //end 
    //function to add event into calender
    AdminUserComponent.prototype.addEvent = function () {
        var _this = this;
        if (this.title == "" || this.title == null || this.title == undefined) {
            this.toastr.warningToastr('enter title');
            return;
        }
        else if (this.startDate == null || this.startDate == undefined || this.startDate == "") {
            this.toastr.warningToastr('enter startdate');
            return;
        }
        else if (this.startTime == null || this.startTime == "" || this.startTime == undefined) {
            this.toastr.warningToastr('please enter starttime');
            return;
        }
        else if (this.endDate == null || this.endDate == undefined || this.endDate == "") {
            this.toastr.warningToastr('enter enddate');
            return;
        }
        else if (this.endTime == null || this.endTime == "" || this.endTime == undefined) {
            this.toastr.warningToastr('please enter endtime');
            return;
        }
        var checkDate = new Date();
        var oneDay = 24 * 60 * 60 * 1000;
        this.startDate.setHours(this.startTime.getHours(), this.startTime.getMinutes(), this.startTime.getSeconds());
        this.endDate.setHours(this.endTime.getHours(), this.endTime.getMinutes(), this.endTime.getSeconds());
        var noOfHours = Math.round(Math.abs((this.startDate - this.endDate) / oneDay));
        console.log('noooo', noOfHours);
        if (this.startDate < checkDate) {
            this.toastr.warningToastr('startDate should be greater than today');
            return;
        }
        else if (this.endDate < checkDate) {
            this.toastr.warningToastr('endDate should be greater than today');
            return;
        }
        else if (noOfHours >= 1) {
            this.toastr.warningToastr('meeting cannot be one day long');
            return;
        }
        else if (this.startDate > this.endDate) {
            this.toastr.warningToastr('enddate should be greater or equal to startdate');
            return;
        }
        this.events = [
            {
                title: this.title,
                start: this.startDate,
                end: this.endDate,
                color: colors.red,
            }
        ];
        var eventdata = {
            adminName: this.adminName,
            adminId: this.adminId,
            userId: this.userId,
            title: this.title,
            start: this.startDate,
            end: this.endDate,
        };
        this.appService.addUserEvent(eventdata).subscribe(function (apiResponse) {
            if (apiResponse.error) {
                _this.toastr.warningToastr(apiResponse.message);
            }
            else {
                _this.toastr.successToastr("meeting scheduled");
                _this.events = [];
                _this.getUserAllEvent(_this.userId);
            }
        }, function (error) {
            _this.toastr.errorToastr('Response not geting', error);
        });
        this.socketService.setReminder(eventdata);
        var addEvent = { 'userId': this.userId, 'adminName': this.adminName, 'title': 'metting is scheduled' };
        this.socketService.informUserAboutMetting(addEvent);
        this.appService.informUserByMail(addEvent).subscribe(function (Response) {
            console.log('response', Response.error);
            if (Response.error == true) {
                _this.toastr.warningToastr('Not able to send mail');
            }
            else {
                _this.toastr.successToastr('mail is sent to user');
            }
        });
    };
    //end
    //update event function
    AdminUserComponent.prototype.updateEvent = function (eventToUpdate) {
        var _this = this;
        var startDate = new Date(eventToUpdate.start);
        var endDate = new Date(eventToUpdate.end);
        console.log(startDate);
        if (eventToUpdate.start == null || eventToUpdate.start == undefined) {
            this.toastr.warningToastr('enter startdate');
            return;
        }
        else if (eventToUpdate.end == null || eventToUpdate.end == undefined) {
            this.toastr.warningToastr('enter enddate');
            return;
        }
        else if (startDate > endDate) {
            this.toastr.warningToastr('enddate should be greater or equal to startdate');
            return;
        }
        var eventdata = {
            _id: eventToUpdate["_id"],
            title: eventToUpdate["title"],
            start: eventToUpdate.start,
            end: eventToUpdate.end
        };
        this.appService.editmeeting(eventdata).subscribe(function (apiResponse) {
            if (apiResponse.error) {
                _this.toastr.errorToastr(apiResponse.message);
            }
            else {
                _this.toastr.successToastr("meeting edited");
                _this.events = [];
                _this.getUserAllEvent(_this.userId);
            }
        }, function (error) {
            _this.toastr.errorToastr('Response not geting', error);
        });
        var editEvent = { 'userId': this.userId, 'adminName': this.adminName, 'title': 'metting is edited' };
        this.socketService.informUserAboutMetting(editEvent);
        this.appService.informUserByMail(eventdata).subscribe(function (Response) {
            if (Response.error) {
                //this.toastr.warningToastr('Not able to send mail');
            }
            else {
                _this.toastr.successToastr('mail is sent to user');
            }
        });
    };
    //end
    //function to delete events from calender
    AdminUserComponent.prototype.deleteEvent = function (eventToDelete) {
        var _this = this;
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
        //console.log(eventToDelete["_id"]);
        this.appService.deleteEvent(eventToDelete["_id"]).subscribe(function (apiResponse) {
            if (apiResponse.error) {
                _this.toastr.errorToastr(apiResponse.message);
            }
            else {
                _this.toastr.successToastr("meeting deleted");
                _this.events = [];
                _this.getUserAllEvent(_this.userId);
            }
        }, function (error) {
            _this.toastr.errorToastr('Response not geting', error);
        });
        var deleteEvent = { 'userId': this.userId, 'adminName': this.adminName, 'title': 'metting is deleted' };
        this.socketService.informUserAboutMetting(deleteEvent);
        this.appService.informUserByMail(deleteEvent).subscribe(function (Response) {
            if (Response.error) {
                //this.toastr.warningToastr('Not able to send mail');
            }
            else {
                _this.toastr.successToastr('mail is sent to user');
            }
        });
    };
    //end
    AdminUserComponent.prototype.setView = function (view) {
        this.view = view;
    };
    AdminUserComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AdminUserComponent.prototype, "modalContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdminUserComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AdminUserComponent.prototype, "userName", void 0);
    AdminUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-user',
            template: __webpack_require__(/*! ./admin-user.component.html */ "./src/app/slot-management/admin-user/admin-user.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./admin-user.component.css */ "./src/app/slot-management/admin-user/admin-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"], src_app_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"], src_app_socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"]])
    ], AdminUserComponent);
    return AdminUserComponent;
}());



/***/ }),

/***/ "./src/app/slot-management/normal-user/normal-user.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/slot-management/normal-user/normal-user.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nsb3QtbWFuYWdlbWVudC9ub3JtYWwtdXNlci9ub3JtYWwtdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/slot-management/normal-user/normal-user.component.html":
/*!************************************************************************!*\
  !*** ./src/app/slot-management/normal-user/normal-user.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"btn-group\">\n        <div\n          class=\"btn btn-primary\"\n          mwlCalendarPreviousView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\"\n        >\n          Previous\n        </div>\n        <div\n          class=\"btn btn-outline-secondary\"\n          mwlCalendarToday\n          [(viewDate)]=\"viewDate\"\n        >\n          Today\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          mwlCalendarNextView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"closeOpenMonthViewDay()\"\n        >\n          Next\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-sm-12\">\n      <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n    </div>\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"btn-group\">\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"setView(CalendarView.Month)\"\n          [class.active]=\"view === CalendarView.Month\"\n        >\n          Month\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"setView(CalendarView.Week)\"\n          [class.active]=\"view === CalendarView.Week\"\n        >\n          Week\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"setView(CalendarView.Day)\"\n          [class.active]=\"view === CalendarView.Day\"\n        >\n          Day\n        </div>\n      </div>\n    </div>\n  </div>\n  <br />\n  <div [ngSwitch]=\"view\">\n    <mwl-calendar-month-view\n      *ngSwitchCase=\"CalendarView.Month\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      [activeDayIsOpen]=\"activeDayIsOpen\"\n      (dayClicked)=\"dayClicked($event.day)\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\"\n    >\n    </mwl-calendar-month-view>\n    <mwl-calendar-week-view\n      *ngSwitchCase=\"CalendarView.Week\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\"\n    >\n    </mwl-calendar-week-view>\n    <mwl-calendar-day-view\n      *ngSwitchCase=\"CalendarView.Day\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\"\n    >\n    </mwl-calendar-day-view>\n  </div>\n</div>\n<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Event action occurred</h5>\n     \n  </div>\n  <div class=\"modal-body\">\n    <div>\n        Meeting Details\n      \n    </div>\n    <div>\n      Event:\n      <pre>MeetingName-{{ modalData?.event.title }}</pre><br>\n      <pre>StartDate-{{ modalData?.event.start }}</pre><br>\n      <pre>EndDate-{{ modalData?.event.end }}</pre><br>\n      <pre>OrganizedBy-{{ modalData?.event.adminName }}</pre>\n    </div>\n  </div>\n  \n</ng-template>\n"

/***/ }),

/***/ "./src/app/slot-management/normal-user/normal-user.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/slot-management/normal-user/normal-user.component.ts ***!
  \**********************************************************************/
/*! exports provided: NormalUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalUserComponent", function() { return NormalUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");









var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var NormalUserComponent = /** @class */ (function () {
    function NormalUserComponent(modalService, toastr, appService, socketService) {
        var _this = this;
        this.modalService = modalService;
        this.toastr = toastr;
        this.appService = appService;
        this.socketService = socketService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = true;
        this.eventTrigger = function () {
            _this.socketService.eventTrigger(_this.userId).subscribe(function (data) {
                if (data.title == 'metting is deleted') {
                    _this.toastr.successToastr('deleted metting', data.adminName);
                }
                else if (data.title == 'metting is edited') {
                    _this.toastr.successToastr('update metting', data.adminName);
                }
                else if (data.title == 'reminder') {
                    _this.toastr.successToastr('reminder for meeting ' + data.name + ' start at ' + data.start);
                }
                else {
                    _this.toastr.successToastr('scheduled metting ', data.adminName);
                }
                _this.events = [];
                _this.getUserAllEvent();
            });
        };
        //get all metting of particular user
        this.getUserAllEvent = function () {
            _this.appService.getNormalUserAllEvent(_this.userId).subscribe(function (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    item['color'] = colors.blue;
                    console.log(item.start);
                    item.start = new Date(item.start);
                    item.start.setHours(item.start.getHours() - 5, item.start.getMinutes() - 30);
                    item.end = new Date(item.end);
                    item.end.setHours(item.end.getHours() - 5, item.end.getMinutes() - 30);
                    _this.events.push(item);
                }
                //console.log(this.events);
                _this.refresh.next();
            });
        };
    }
    NormalUserComponent.prototype.ngOnInit = function () {
        this.getUserAllEvent();
        this.eventTrigger();
    };
    //end
    NormalUserComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    //function to show data using modal
    NormalUserComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modalRef = this.modalService.show(this.modalContent);
    };
    ///end 
    NormalUserComponent.prototype.setView = function (view) {
        this.view = view;
    };
    NormalUserComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], NormalUserComponent.prototype, "modalContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NormalUserComponent.prototype, "userId", void 0);
    NormalUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-normal-user',
            template: __webpack_require__(/*! ./normal-user.component.html */ "./src/app/slot-management/normal-user/normal-user.component.html"),
            styles: [__webpack_require__(/*! ./normal-user.component.css */ "./src/app/slot-management/normal-user/normal-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"],
            src_app_socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"]])
    ], NormalUserComponent);
    return NormalUserComponent;
}());



/***/ }),

/***/ "./src/app/slot-management/slot-management.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/slot-management/slot-management.module.ts ***!
  \***********************************************************/
/*! exports provided: SlotManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotManagementModule", function() { return SlotManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _normal_user_normal_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normal-user/normal-user.component */ "./src/app/slot-management/normal-user/normal-user.component.ts");
/* harmony import */ var _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-user/admin-user.component */ "./src/app/slot-management/admin-user/admin-user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm5/ngx-bootstrap-timepicker.js");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/slot-management/user-details/user-details.component.ts");













var SlotManagementModule = /** @class */ (function () {
    function SlotManagementModule() {
    }
    SlotManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_normal_user_normal_user_component__WEBPACK_IMPORTED_MODULE_3__["NormalUserComponent"], _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_4__["AdminUserComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
                }),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_11__["TimepickerModule"].forRoot()
            ],
            exports: [_normal_user_normal_user_component__WEBPACK_IMPORTED_MODULE_3__["NormalUserComponent"], _admin_user_admin_user_component__WEBPACK_IMPORTED_MODULE_4__["AdminUserComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailsComponent"]]
        })
    ], SlotManagementModule);
    return SlotManagementModule;
}());



/***/ }),

/***/ "./src/app/slot-management/user-details/user-details.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/slot-management/user-details/user-details.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crop {\r\n    border-radius: 100%;\r\n    line-height: 1em;\r\n    padding: 1em;\r\n    text-align: center;\r\n    margin: 0em;\r\n    width: 3em;\r\n    height: 3em;\r\n    float: left;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  .about {\r\n    float: left;\r\n    padding-left: 0.4em;\r\n  }\r\n  \r\n  .online,\r\n  .offline,\r\n  .me,\r\n  .warning {\r\n    margin-right: 3px;\r\n    font-size: 0.8em;\r\n  }\r\n  \r\n  .online {\r\n    color: #86BB71;\r\n  }\r\n  \r\n  .offline {\r\n    color: #E38968;\r\n  }\r\n  \r\n  .me {\r\n    color: #94C2ED;\r\n  }\r\n  \r\n  .warning {\r\n    color: #00c8e7;\r\n  }\r\n  \r\n  .status {\r\n    color: #92959E;\r\n  }\r\n  \r\n  .name {\r\n    float: left;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xvdC1tYW5hZ2VtZW50L3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTs7OztJQUlFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3Nsb3QtbWFuYWdlbWVudC91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JvcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMGVtO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIGhlaWdodDogM2VtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xyXG4gIH1cclxuICBcclxuICAub25saW5lLFxyXG4gIC5vZmZsaW5lLFxyXG4gIC5tZSxcclxuICAud2FybmluZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5vbmxpbmUge1xyXG4gICAgY29sb3I6ICM4NkJCNzE7XHJcbiAgfVxyXG4gIFxyXG4gIC5vZmZsaW5lIHtcclxuICAgIGNvbG9yOiAjRTM4OTY4O1xyXG4gIH1cclxuICBcclxuICAubWUge1xyXG4gICAgY29sb3I6ICM5NEMyRUQ7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXJuaW5nIHtcclxuICAgIGNvbG9yOiAjMDBjOGU3O1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzIHtcclxuICAgIGNvbG9yOiAjOTI5NTlFO1xyXG4gIH1cclxuICBcclxuICAubmFtZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/slot-management/user-details/user-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/slot-management/user-details/user-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crop\" [style.color]=\"userColor ? userColor :'white'\" [style.background]=\"userBg ? userBg :'blue'\">\n  {{firstChar}}\n</div>\n<div class=\"about\">\n  <div class=\"name\">{{userFirstName}} {{userLastName}}\n    <i *ngIf=\"messageRead\" class=\"fa fa-circle warning\"></i>\n  </div>\n  <div class=\"status\">\n    <i class=\"fa fa-circle\" [ngClass]=\"userStatus\"></i>{{userStatus}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/slot-management/user-details/user-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/slot-management/user-details/user-details.component.ts ***!
  \************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.firstChar = this.userFirstName[0];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userFirstName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserDetailsComponent.prototype, "userFirstName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userLastName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserDetailsComponent.prototype, "userLastName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('userStatus'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserDetailsComponent.prototype, "userStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('messageRead'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserDetailsComponent.prototype, "messageRead", void 0);
    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/slot-management/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/slot-management/user-details/user-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.url = "http://api.thesoulblog.in";
        this.verifUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onlineUserList = function () {
            console.log('onlineuserlist');
            var observable = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('online-user-list', function (userList) {
                    observer.next(userList);
                });
            });
            return observable;
        };
        this.eventTrigger = function (userId) {
            console.log('eventTrigger', userId);
            var observable = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                });
            });
            return observable;
        };
        this.disconnectedSocket = function () {
            var observable = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('disconnect', function () {
                    observer.next();
                });
            });
            return observable;
        };
        //events to be emited
        this.setUser = function (authToken) {
            _this.socket.emit('set-user', authToken);
        };
        this.informUserAboutMetting = function (data) {
            console.log('informUserAboutMetting', data.userId);
            _this.socket.emit('mettingEvent', data);
        };
        this.setReminder = function (data) {
            console.log('setReminder', data.userId);
            _this.socket.emit('setTimer', data);
        };
        this.exitSocket = function () {
            _this.socket.disconnect();
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    //error handler
    SocketService.prototype.handleError = function (err) {
        var erroMessage = '';
        if (err.error instanceof Error) {
            erroMessage = 'an error occur: ' + err.error.message;
        }
        else {
            erroMessage = 'server return code: ' + err.status + ' error message is :' + err.error.message;
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(erroMessage);
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>                       \n    </button>\n    <a class=\"navbar-brand\" href=\"/\">MettingApp</a>\n  </div>\n  \n     \n  <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a></li>\n       \n    </ul>\n  </div>\n     \n  \n  </nav>\n  <div class=\"container\">\n  <div class=\"row  \">\n  \n    <div class=\"col-sm-4\"></div>\n  \n    <div class=\"col-sm-4  \">\n  \n      <h2 class=\"form-signin-heading\">Please sign in</h2>\n  \n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  \n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n  \n      <br>\n  \n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  \n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n  \n      <br>\n  \n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n      <br>\n      <button class=\"btn btn-sm btn-primary btn-block\" type=\"button\" (click)=\"goToRecoverPassword()\">Forget Password</button>\n    </div>\n    \n    <div class=\"col-sm-4\"></div>\n  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, appService, toastr) {
        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authToken');
        if (authToken != null) {
            var userDetail = this.appService.getUserInfoIntoLocalStorage();
            var isUserAdmin = (userDetail.isAdmin == "admin") ? true : false;
            if (!isUserAdmin) {
                this.router.navigate(['/normaluserdashboard']);
            }
            else {
                this.router.navigate(['/adminuserdashboard']);
            }
        }
    };
    //navigate to signup page
    LoginComponent.prototype.goToSignUp = function () {
        return this.router.navigate(['/signup']);
    };
    //navigate to recover password page
    LoginComponent.prototype.goToRecoverPassword = function () {
        return this.router.navigate(['/recoverpassword']);
    };
    //user signin function
    LoginComponent.prototype.signinFunction = function () {
        var _this = this;
        var data = {
            email: this.email,
            password: this.password
        };
        if (!this.email) {
            return this.toastr.warningToastr("enter email");
        }
        else if (!this.password) {
            return this.toastr.warningToastr("enter password");
        }
        this.appService.signinFunction(data).subscribe(function (apiResponse) {
            if (apiResponse) {
                console.log(apiResponse);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('authToken', apiResponse.data.authToken);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                _this.appService.setUserInfoIntoLocalStorage(apiResponse.data.userDetails);
                if (apiResponse.data.userDetails.isAdmin == 'admin') {
                    _this.router.navigate(['../adminuserdashboard']);
                }
                else {
                    _this.router.navigate(['../normaluserdashboard']);
                }
            }
            else {
                _this.toastr.warningToastr(apiResponse.message);
            }
        }, function (error) {
            _this.toastr.warningToastr("Incorrect email or password");
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/notfound/notfound.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/notfound/notfound.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/notfound/notfound.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/notfound/notfound.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/notfound/notfound.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/notfound/notfound.component.ts ***!
  \*****************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/user/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/user/notfound/notfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/user/recoverpassword/recoverpassword.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/recoverpassword/recoverpassword.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVjb3ZlcnBhc3N3b3JkL3JlY292ZXJwYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/recoverpassword/recoverpassword.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/recoverpassword/recoverpassword.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>                       \n    </button>\n    <a class=\"navbar-brand\" href=\"/\">MettingApp</a>\n  </div>\n  \n     \n  <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a class=\"nav-link\" (click)=\"goToSignUp()\">Sign-Up</a></li>\n      <li><a class=\"nav-link\" (click)=\"goToSignIn()\">Sign-In</a></li>\n    </ul>\n  </div>\n     \n  \n</nav>\n<label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n<input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n<br>\n<button class=\"btn btn-sm btn-primary btn-block\" type=\"button\" (click)=\"goToSendMail()\">Send Mail</button>\n"

/***/ }),

/***/ "./src/app/user/recoverpassword/recoverpassword.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/recoverpassword/recoverpassword.component.ts ***!
  \*******************************************************************/
/*! exports provided: RecoverpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverpasswordComponent", function() { return RecoverpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





var RecoverpasswordComponent = /** @class */ (function () {
    function RecoverpasswordComponent(router, appService, toastr) {
        this.router = router;
        this.appService = appService;
        this.toastr = toastr;
    }
    RecoverpasswordComponent.prototype.ngOnInit = function () {
    };
    RecoverpasswordComponent.prototype.goToSignUp = function () {
        return this.router.navigate(['/signup']);
    };
    RecoverpasswordComponent.prototype.goToSignIn = function () {
        return this.router.navigate(['/']);
    };
    RecoverpasswordComponent.prototype.goToSendMail = function () {
        var _this = this;
        if (!this.email) {
            this.toastr.warningToastr("enter email");
        }
        else {
            this.appService.recoverPasword(this.email).subscribe(function (apiResponse) {
                if (apiResponse.error) {
                    _this.toastr.warningToastr(apiResponse.message);
                }
                else {
                    _this.toastr.successToastr('your pasword details are sent to your mail');
                }
            }, function (error) {
                _this.toastr.warningToastr("Incorrect email or password");
            });
        }
    };
    RecoverpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recoverpassword',
            template: __webpack_require__(/*! ./recoverpassword.component.html */ "./src/app/user/recoverpassword/recoverpassword.component.html"),
            styles: [__webpack_require__(/*! ./recoverpassword.component.css */ "./src/app/user/recoverpassword/recoverpassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], RecoverpasswordComponent);
    return RecoverpasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>                       \n    </button>\n    <a class=\"navbar-brand\" href=\"/\">MettingApp</a>\n  </div>\n  \n     \n  <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a class=\"nav-link\" (click)=\"goToSignIn()\"><span class=\"glyphicon glyphicon-log-in\"></span>Login</a></li>\n       \n    </ul>\n  </div>\n     \n  \n  </nav>\n<div class=\"container\">\n<div class=\"row p-0 m-0\">\n\n  <div class=\"col-sm-3\"></div>\n\n  <div class=\"col-sm-6 p-5\">\n\n      <h2 class=\"form-signin-heading\">Sign Up To Start OnlineMeeting</h2>\n\n      <br>\n\n      <span>FirstName: </span>\n\n      <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n\n      <input type=\"text\" id=\"inputFirstName\" class=\"form-control\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\"\n          required autofocus>\n\n      <br>\n\n      <span>LastName: </span>\n\n      <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n      <input type=\"text\" id=\"inputLastName\" class=\"form-control\" [(ngModel)]=\"lastName\" placeholder=\"LastName\"\n          required>\n\n      <br>\n      <span>For Admin click checkbox: </span>\n\n      <label for=\"inputcheckBox\" class=\"sr-only\">IsAdmin</label>\n\n      <input type=\"checkbox\" name=\"packersOff\" [(ngModel)]=\"checkBox\"(change)=\"changeCheckBox(checkBox)\"/>\n\n\n      <br>\n      <span>UserName: </span>\n\n      <label for=\"inputUserName\" class=\"sr-only\">UserName</label>\n\n      <input type=\"text\" id=\"inputUserName\" class=\"form-control\" [(ngModel)]=\"userName\" placeholder=\"UserName\"\n          required>\n\n      <br>\n\n      <span>Mobile: </span>\n\n      <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n\n      <input type=\"number\" id=\"inputMobile\" class=\"form-control\" [(ngModel)]=\"mobileNumber\" placeholder=\"Mobile\" required>\n\n      <br>\n      <span>Country: </span>\n      \n      <label for=\"inputcoutryCode\" class=\"sr-only\"></label>\n      <select class='select-option' required [(ngModel)]='coutryCode'>\n        <option class='option' *ngFor='let option of options  | keyvalue' [value]=\"option.key\">{{option.value}}</option>\n    </select>\n   \n      <br>\n\n      <span>Email: </span>\n\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n      <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email address\"\n          required>\n\n      <br>\n\n      <span>Password: </span>\n\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\"\n          required>\n\n      <br>\n                \n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"signupFunction()\">Sign Up</button>\n\n  </div>\n\n  <div class=\"col-sm-3\"></div>\n\n</div>      \n</div>\n"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, toastr, http) {
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.checkBox = false;
        this.options = [];
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        var authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authToken');
        if (authToken != null) {
            var userDetail = this.appService.getUserInfoIntoLocalStorage();
            var isUserAdmin = (userDetail.isAdmin == "admin") ? true : false;
            if (!isUserAdmin) {
                this.router.navigate(['/normaluserdashboard']);
            }
            else {
                this.router.navigate(['/adminuserdashboard']);
            }
        }
        this.getJSON().subscribe(function (data) {
            _this.options = data;
            console.log(_this.options);
        });
        this.isAdmin = '';
    };
    //navigate to signin page
    SignupComponent.prototype.goToSignIn = function () {
        this.router.navigate(['/']);
    };
    //get countries name from json data
    SignupComponent.prototype.getJSON = function () {
        return this.http.get("assets/names.json");
    };
    //checkbox change funtion
    SignupComponent.prototype.changeCheckBox = function (val) {
        //console.log(this.checkBox)
        if (this.checkBox == true) {
            this.isAdmin = "admin";
        }
        else {
            this.isAdmin = '';
        }
        console.log(this.isAdmin);
    };
    //signup function
    SignupComponent.prototype.signupFunction = function () {
        var _this = this;
        if (!this.firstName) {
            this.toastr.warningToastr("enter Firstname");
        }
        else if (!this.lastName) {
            this.toastr.warningToastr("enter Lastname");
        }
        else if (!this.email) {
            this.toastr.warningToastr("enter email");
        }
        else if (!this.mobileNumber) {
            this.toastr.warningToastr("enter mobileNumber");
        }
        else if (!this.password) {
            this.toastr.warningToastr("enter password");
        }
        else if (!this.coutryCode) {
            this.toastr.warningToastr("enter coutryCode");
        }
        else if (!this.userName) {
            this.toastr.warningToastr('enter username');
        }
        else if (!this.userName.endsWith('admin') && this.isAdmin == "admin") {
            this.toastr.warningToastr('for admin username should end with admin');
        }
        else {
            var data = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                mobileNumber: this.mobileNumber,
                password: this.password,
                coutryCode: this.coutryCode,
                userName: this.userName,
                isAdmin: this.isAdmin
            };
            this.appService.signupFunction(data).subscribe(function (apiResponse) {
                if (apiResponse.error) {
                    _this.toastr.warningToastr(apiResponse.message);
                }
                else {
                    _this.toastr.successToastr("signUp successful");
                    setTimeout(function () {
                        _this.goToSignIn();
                    }, 2000);
                }
            }, function (error) {
                _this.toastr.errorToastr('Response not geting', error);
            });
        }
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/user/notfound/notfound.component.ts");
/* harmony import */ var _recoverpassword_recoverpassword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recoverpassword/recoverpassword.component */ "./src/app/user/recoverpassword/recoverpassword.component.ts");










var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"], _recoverpassword_recoverpassword_component__WEBPACK_IMPORTED_MODULE_9__["RecoverpasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
                    { path: 'recoverpassword', component: _recoverpassword_recoverpassword_component__WEBPACK_IMPORTED_MODULE_9__["RecoverpasswordComponent"] }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/userdashboard/admindashboard/admindashboard.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/userdashboard/admindashboard/admindashboard.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \r\n#sidebar{\r\n    background: #151719;\r\n    z-index: 100;\r\n}\r\n#sidebar ul {\r\n    background: #151719;\r\n}\r\n.InActive{\r\n    position: fixed;\r\n    width: 200px;\r\n    height: 80vh;\r\n    left:-200px;\r\n     \r\n}\r\n.Active{\r\n    left:0px;\r\n    position: fixed;\r\n    width: 250px;\r\n    height: 80vh;\r\n    -webkit-transition: all 500ms linear;\r\n    transition: all 500ms linear;\r\n    z-index: 100;\r\n    overflow-y: scroll;\r\n     \r\n}\r\n#sidebar ul li{\r\n    color:rgba(154, 241, 241, 0.9);\r\n    list-style:none;\r\n    padding:15px 10px;\r\n    border-bottom: 1px solid rgba(100, 100, 100, 0.3);\r\n     \r\n}\r\n#sidebar .toggle-btn{\r\n    position: absolute;\r\n    left:200px;\r\n    top: 0px;\r\n    \r\n}\r\n#sidebar .toggle-btn span{\r\n    display: block;\r\n    width: 30px;\r\n    height: 5px;\r\n    background: rgba(15, 15, 211, 0.747);\r\n    margin: 5px 0px;\r\n     \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmRhc2hib2FyZC9hZG1pbmRhc2hib2FyZC9hZG1pbmRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFFBQVE7SUFDUixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixvQ0FBNEI7SUFBNUIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpREFBaUQ7O0FBRXJEO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7O0FBRVo7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJkYXNoYm9hcmQvYWRtaW5kYXNoYm9hcmQvYWRtaW5kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXHJcbiNzaWRlYmFye1xyXG4gICAgYmFja2dyb3VuZDogIzE1MTcxOTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG4jc2lkZWJhciB1bCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTUxNzE5O1xyXG59XHJcbi5JbkFjdGl2ZXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIGxlZnQ6LTIwMHB4O1xyXG4gICAgIFxyXG59XHJcbi5BY3RpdmV7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBsaW5lYXI7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgXHJcbn1cclxuI3NpZGViYXIgdWwgbGl7XHJcbiAgICBjb2xvcjpyZ2JhKDE1NCwgMjQxLCAyNDEsIDAuOSk7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICBwYWRkaW5nOjE1cHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMyk7XHJcbiAgICAgXHJcbn1cclxuXHJcbiNzaWRlYmFyIC50b2dnbGUtYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoyMDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbiNzaWRlYmFyIC50b2dnbGUtYnRuIHNwYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAxNSwgMjExLCAwLjc0Nyk7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/userdashboard/admindashboard/admindashboard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/userdashboard/admindashboard/admindashboard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--navbar-->\r\n<nav class=\"navbar navbar-inverse\">\r\n\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>                       \r\n          </button>\r\n          <a class=\"navbar-brand\" (click)=\"goToMeeting()\">MettingApp</a>\r\n        </div>\r\n        \r\n           \r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n          <ul class=\"nav navbar-nav navbar-right\">\r\n              <li><a class=\"nav-link\" (click)=\"AdminCalender()\">SeeYourCalender</a></li>\r\n            <li><a class=\"nav-link\" (click)=\"logout()\">Logout</a></li>\r\n             \r\n          </ul>\r\n        </div>\r\n           \r\n        \r\n        </nav>\r\n<!-- Sidebar -->\r\n <div id=\"sidebar\"[ngClass]=\"{'Active':active==true,'InActive':active==false}\">\r\n     <div class=\"toggle-btn\"(click)='toggleBar()'>\r\n         <span></span>\r\n         <span></span>\r\n         <span></span>\r\n     </div>\r\n    \r\n     <ul>\r\n        <li><h3>Onlineuser</h3></li>\r\n    </ul>\r\n    <ul *ngFor=\"let user of userList\"> \r\n        <li  \r\n        *ngIf=\"user.userId != userInfo.userId\"(click)=\"userSelectedToMetting(user.userId,user.name)\">\r\n        <div >    \r\n            {{user.name}}\r\n         </div>\r\n      </li> \r\n    </ul>\r\n    <ul>\r\n      <li><h3>AllUserList</h3></li>\r\n    </ul>\r\n    <ul *ngFor=\"let user of alluserList\"> \r\n      <li  \r\n      *ngIf=\"user.userId != userInfo.userId\"(click)=\"userSelectedToMetting(user.userId,user.name)\">\r\n      <div >    \r\n          {{user.name}}\r\n       </div>\r\n    </li> \r\n  </ul>\r\n</div>\r\n<br><hr><br>\r\n<div class=\"container\">\r\n  <app-admin-user [userId]='userSelectId' [userName]=\"userSelectName\"></app-admin-user>  \r\n</div>\r\n "

/***/ }),

/***/ "./src/app/userdashboard/admindashboard/admindashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/userdashboard/admindashboard/admindashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdmindashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashboardComponent", function() { return AdmindashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");







var AdmindashboardComponent = /** @class */ (function () {
    function AdmindashboardComponent(router, toastr, appService, socketService) {
        var _this = this;
        this.router = router;
        this.toastr = toastr;
        this.appService = appService;
        this.socketService = socketService;
        this.active = false;
        this.scrollToTop = false;
        this.userList = [];
        this.alluserList = [];
        //AdminCalender
        this.AdminCalender = function () {
            location.reload();
        };
        //navigate
        this.goToMeeting = function () {
            return _this.router.navigate(['/adminuserdashboard']);
        };
        //
        //toggle sidebar function
        this.toggleBar = function () {
            console.log('click');
            if (_this.active) {
                _this.active = false;
            }
            else {
                _this.active = true;
            }
            console.log(_this.active);
        };
        //end
        //function to check authtoken
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken') === null) {
                _this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        };
        //end of checkstatus
        //function to verifyuser
        this.verifyUserConfirmation = function () {
            _this.socketService.setUser(_this.authToken);
            _this.socketService.verifUser().subscribe(function (data) {
                _this.disconnectedSoket = false;
                console.log('verified user');
                _this.socketService.setUser(_this.authToken);
            });
        };
        //end 
        //function to get all online user list
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList().subscribe(function (userList) {
                _this.userList = [];
                for (var x in userList) {
                    var temp = { 'userId': x, 'name': userList[x] };
                    _this.userList.push(temp);
                }
                console.log('userlist', _this.userList);
            });
        };
        //function to get all user in application
        this.getAllUserList = function () {
            _this.appService.getAllUserList().subscribe(function (userList) {
                _this.alluserList = [];
                for (var _i = 0, userList_1 = userList; _i < userList_1.length; _i++) {
                    var x = userList_1[_i];
                    if (x.userId != _this.receiverId) {
                        var temp = { 'userId': x.userId, 'name': x.firstName + ' ' + x.lastName };
                        _this.alluserList.push(temp);
                    }
                }
                console.log('userlist', _this.alluserList);
            }, function (error) {
                console.log('error occured in getalluserList');
            });
        };
        //end 
        //userselected for meeting
        this.userSelectedToMetting = function (userId, name) {
            console.log('userselected', userId);
            _this.userSelectId = userId;
            _this.userSelectName = name;
            _this.active = false;
        };
        //end
        this.logout = function () {
            console.log("logout called");
            _this.appService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('authToken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverName');
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.errorToastr(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.errorToastr('some error occured');
            });
        };
    }
    AdmindashboardComponent.prototype.ngOnInit = function () {
        console.log('ngint');
        var userDetail = this.appService.getUserInfoIntoLocalStorage();
        var isUserAdmin = (userDetail.isAdmin == "admin") ? true : false;
        if (!isUserAdmin) {
            this.router.navigate(['/normaluserdashboard']);
        }
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken');
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId');
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName');
        this.userSelectId = this.receiverId;
        this.userSelectName = this.receiverName;
        this.userInfo = this.appService.getUserInfoIntoLocalStorage();
        this.checkStatus();
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.getAllUserList();
    };
    //end
    AdmindashboardComponent.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdmindashboardComponent.prototype, "read", void 0);
    AdmindashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admindashboard',
            template: __webpack_require__(/*! ./admindashboard.component.html */ "./src/app/userdashboard/admindashboard/admindashboard.component.html"),
            styles: [__webpack_require__(/*! ./admindashboard.component.css */ "./src/app/userdashboard/admindashboard/admindashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            src_app_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]])
    ], AdmindashboardComponent);
    return AdmindashboardComponent;
}());



/***/ }),

/***/ "./src/app/userdashboard/normaldashboard/normaldashboard.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/userdashboard/normaldashboard/normaldashboard.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJkYXNoYm9hcmQvbm9ybWFsZGFzaGJvYXJkL25vcm1hbGRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/userdashboard/normaldashboard/normaldashboard.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/userdashboard/normaldashboard/normaldashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--navbar-->\n<nav class=\"navbar navbar-inverse\">\n\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>                       \n    </button>\n    <a class=\"navbar-brand\" (click)=\"goToMeeting()\">MettingApp</a>\n  </div>\n  \n     \n  <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a class=\"nav-link\">{{receiverName}}</a></li>\n      <li><a class=\"nav-link\" (click)=\"logout()\">Logout</a></li>\n       \n    </ul>\n  </div>\n     \n  \n  </nav>\n  <div class=\"container\">\n    <app-normal-user [userId]='receiverId'></app-normal-user>  \n  </div>"

/***/ }),

/***/ "./src/app/userdashboard/normaldashboard/normaldashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/userdashboard/normaldashboard/normaldashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: NormaldashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormaldashboardComponent", function() { return NormaldashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/socket.service */ "./src/app/socket.service.ts");







var NormaldashboardComponent = /** @class */ (function () {
    function NormaldashboardComponent(router, toastr, appService, socketService) {
        var _this = this;
        this.router = router;
        this.toastr = toastr;
        this.appService = appService;
        this.socketService = socketService;
        //navigate
        this.goToMeeting = function () {
            return _this.router.navigate(['/normaluserdashboard']);
        };
        //
        //function to check authtoken
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken') === null) {
                _this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        };
        //end of checkstatus
        //function to verifyuser
        this.verifyUserConfirmation = function () {
            _this.socketService.setUser(_this.authToken);
            _this.socketService.verifUser().subscribe(function (data) {
                console.log('verified user');
                _this.socketService.setUser(_this.authToken);
            });
        };
        //end 
        //logut
        this.logout = function () {
            console.log("logout called");
            _this.appService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('authToken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].delete('receiverName');
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.errorToastr(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.errorToastr('some error occured');
            });
        }; //end
        this.receiverId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverId');
        this.receiverName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('receiverName');
    }
    NormaldashboardComponent.prototype.ngOnInit = function () {
        var userDetail = this.appService.getUserInfoIntoLocalStorage();
        var isUserAdmin = (userDetail.isAdmin == "") ? true : false;
        if (!isUserAdmin) {
            this.router.navigate(['/adminuserdashboard']);
        }
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken');
        this.userInfo = this.appService.getUserInfoIntoLocalStorage();
        this.checkStatus();
        this.verifyUserConfirmation();
    };
    NormaldashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-normaldashboard',
            template: __webpack_require__(/*! ./normaldashboard.component.html */ "./src/app/userdashboard/normaldashboard/normaldashboard.component.html"),
            styles: [__webpack_require__(/*! ./normaldashboard.component.css */ "./src/app/userdashboard/normaldashboard/normaldashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"],
            src_app_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]])
    ], NormaldashboardComponent);
    return NormaldashboardComponent;
}());



/***/ }),

/***/ "./src/app/userdashboard/userdashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/userdashboard/userdashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: UserdashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdashboardModule", function() { return UserdashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admindashboard/admindashboard.component */ "./src/app/userdashboard/admindashboard/admindashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _slot_management_slot_management_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../slot-management/slot-management.module */ "./src/app/slot-management/slot-management.module.ts");
/* harmony import */ var _normaldashboard_normaldashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./normaldashboard/normaldashboard.component */ "./src/app/userdashboard/normaldashboard/normaldashboard.component.ts");









var UserdashboardModule = /** @class */ (function () {
    function UserdashboardModule() {
    }
    UserdashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdmindashboardComponent"], _normaldashboard_normaldashboard_component__WEBPACK_IMPORTED_MODULE_8__["NormaldashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'adminuserdashboard', component: _admindashboard_admindashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdmindashboardComponent"] },
                    { path: 'normaluserdashboard', component: _normaldashboard_normaldashboard_component__WEBPACK_IMPORTED_MODULE_8__["NormaldashboardComponent"] }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _slot_management_slot_management_module__WEBPACK_IMPORTED_MODULE_7__["SlotManagementModule"]
            ]
        })
    ], UserdashboardModule);
    return UserdashboardModule;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\metting-frontend\src\main.ts */"./src/main.ts");


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
//# sourceMappingURL=main.js.map