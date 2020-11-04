(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-converter-converter-module"],{

/***/ "7XKT":
/*!*******************************************************!*\
  !*** ./src/app/modules/converter/converter.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, ConverterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterModule", function() { return ConverterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_converter_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/converter-shared.module */ "7Eo4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _converter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./converter.component */ "Sn8s");






const routes = [
    { path: '', component: _converter_component__WEBPACK_IMPORTED_MODULE_3__["ConverterComponent"] }
];
class ConverterModule {
}
ConverterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConverterModule });
ConverterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConverterModule_Factory(t) { return new (t || ConverterModule)(); }, imports: [[
            _shared_converter_shared_module__WEBPACK_IMPORTED_MODULE_1__["ConverterSharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConverterModule, { declarations: [_converter_component__WEBPACK_IMPORTED_MODULE_3__["ConverterComponent"]], imports: [_shared_converter_shared_module__WEBPACK_IMPORTED_MODULE_1__["ConverterSharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_converter_component__WEBPACK_IMPORTED_MODULE_3__["ConverterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConverterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _converter_component__WEBPACK_IMPORTED_MODULE_3__["ConverterComponent"]
                ],
                imports: [
                    _shared_converter_shared_module__WEBPACK_IMPORTED_MODULE_1__["ConverterSharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                exports: [
                    _converter_component__WEBPACK_IMPORTED_MODULE_3__["ConverterComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sn8s":
/*!**********************************************************!*\
  !*** ./src/app/modules/converter/converter.component.ts ***!
  \**********************************************************/
/*! exports provided: ConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterComponent", function() { return ConverterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_converter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/converter.service */ "nY1a");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/header/header.component */ "F8Sv");
/* harmony import */ var _shared_components_date_date_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/date/date.component */ "9LL/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/footer/footer.component */ "TnyQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function ConverterComponent_div_3_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currency_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", currency_r5.abbreviation)("disabled", ctx_r3.disableOption(currency_r5.abbreviation));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", currency_r5.abbreviation, " ");
} }
function ConverterComponent_div_3_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ConverterComponent_div_3_div_13_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const selectedCurrency_r6 = ctx.$implicit; const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.convertInputToByn($event.target.value, selectedCurrency_r6.scale, selectedCurrency_r6.rate, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConverterComponent_div_3_div_13_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const selectedCurrency_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.deleteInput(selectedCurrency_r6.abbreviation); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectedCurrency_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r4.convertInputToCurrency(selectedCurrency_r6.scale, selectedCurrency_r6.rate, i_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](selectedCurrency_r6.abbreviation);
} }
function ConverterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConverterComponent_div_3_Template_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.selectedCurrencyAbbreviation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConverterComponent_div_3_option_3_Template, 2, 3, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConverterComponent_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.addSelectedCurrencies(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ConverterComponent_div_3_Template_input_input_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.convertInputToByn($event.target.value, 1, 1, 0 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "BYN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConverterComponent_div_3_div_13_Template, 6, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.selectedCurrencyAbbreviation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.currenciesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "currency.add"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.convertInputToCurrency(1, 1, 0 - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedCurrencies);
} }
function ConverterComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "currencies.loading"));
} }
class ConverterComponent {
    constructor(converterService) {
        this.converterService = converterService;
        this.selectedCurrencies = [];
        this.selectedCurrenciesAbbreviations = [];
        this.convertedInputValueInByn = 0;
    }
    getCurrencies(date = '') {
        this.converterService.getCurrencies(date).subscribe((response) => {
            this.currenciesList = _shared_services_converter_service__WEBPACK_IMPORTED_MODULE_1__["ConverterService"].processCurrencies(response);
            if (this.currenciesList) {
                this.selectedCurrencyAbbreviation = this.currenciesList[0].abbreviation;
                this.getSavedData();
            }
        });
    }
    addSelectedCurrencies() {
        const foundCurrencyInSelectedCurrencies = this.converterService.findCurrency(this.selectedCurrencies, this.selectedCurrencyAbbreviation);
        if (!foundCurrencyInSelectedCurrencies) {
            const foundCurrencyInCurrenciesList = this.converterService.findCurrency(this.currenciesList, this.selectedCurrencyAbbreviation);
            if (foundCurrencyInCurrenciesList) {
                this.selectedCurrencies.push(foundCurrencyInCurrenciesList);
            }
        }
        this.saveData();
    }
    deleteInput(selectedCurrencyAbbreviation) {
        const indexOfSelectedCurrency = this.selectedCurrencies.findIndex(item => item.abbreviation === selectedCurrencyAbbreviation);
        if (indexOfSelectedCurrency >= 0) {
            this.selectedCurrencies.splice(indexOfSelectedCurrency, 1);
        }
        if (!this.selectedCurrencies.length) {
            this.convertedInputValueInByn = 0;
            this.savedCurrencyValue = 0;
            this.savedCurrencyIndex = 0;
        }
        this.saveData();
    }
    disableOption(selectedCurrencyAbbreviation) {
        return this.converterService.findCurrency(this.selectedCurrencies, selectedCurrencyAbbreviation);
    }
    convertInputToByn(currencyValue, currencyScale, currencyRate, index) {
        this.convertedInputValueInByn = currencyValue / currencyScale * currencyRate;
        this.saveData();
        this.savedCurrencyIndex = index;
        this.savedCurrencyValue = currencyValue;
    }
    convertInputToCurrency(currencyScale, currencyRate, index) {
        if (index === this.savedCurrencyIndex) {
            return this.savedCurrencyValue;
        }
        else {
            const value = this.convertedInputValueInByn * currencyScale / currencyRate;
            return Number.isInteger(value) ? value : value.toFixed(4);
        }
    }
    saveData() {
        this.selectedCurrenciesAbbreviations = [];
        this.selectedCurrencies.forEach(item => {
            const CurrencyAbbreviation = this.selectedCurrenciesAbbreviations.find(el => el === item.abbreviation);
            if (!CurrencyAbbreviation) {
                this.selectedCurrenciesAbbreviations.push(item.abbreviation);
            }
        });
        sessionStorage.setItem('selectedCurrencies', JSON.stringify(this.selectedCurrenciesAbbreviations));
    }
    getSavedData() {
        this.selectedCurrencies = [];
        const savedCurrenciesAbbreviations = sessionStorage.getItem('selectedCurrencies');
        if (savedCurrenciesAbbreviations) {
            this.selectedCurrenciesAbbreviations = JSON.parse(savedCurrenciesAbbreviations);
            this.selectedCurrenciesAbbreviations.forEach(item => {
                const foundCurrencyInCurrenciesList = this.converterService.findCurrency(this.currenciesList, item);
                if (foundCurrencyInCurrenciesList) {
                    const selectedCurrency = this.selectedCurrencies.find(item => item === foundCurrencyInCurrenciesList);
                    if (!selectedCurrency) {
                        this.selectedCurrencies.push(foundCurrencyInCurrenciesList);
                    }
                }
            });
        }
    }
    ngOnInit() {
        this.getCurrencies();
    }
}
ConverterComponent.ɵfac = function ConverterComponent_Factory(t) { return new (t || ConverterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_converter_service__WEBPACK_IMPORTED_MODULE_1__["ConverterService"])); };
ConverterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConverterComponent, selectors: [["app-converter"]], decls: 7, vars: 2, consts: [[1, "container-fluid"], [3, "onChange"], [4, "ngIf", "ngIfElse"], ["loading", ""], [1, "converterMenu"], ["name", "currency", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "click"], [1, "inputValue"], ["type", "text", 1, "form-control", 3, "value", "input"], [1, "btn", "btn-danger", "disabled"], ["class", "inputValue", 4, "ngFor", "ngForOf"], [3, "value", "disabled"], [1, "btn", "btn-danger", 3, "click"], [1, "loading"]], template: function ConverterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "converter-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-date", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function ConverterComponent_Template_app_date_onChange_2_listener($event) { return ctx.getCurrencies($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConverterComponent_div_3_Template, 14, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConverterComponent_ng_template_4_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "converter-footer");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currenciesList)("ngIfElse", _r1);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _shared_components_date_date_component__WEBPACK_IMPORTED_MODULE_3__["DateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".container-fluid[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 180px;\n  margin: 10px;\n}\n.container-fluid[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background: #ffe875;\n  border: 1px solid gray;\n  color: black;\n}\n.container-fluid[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #ffd769;\n}\n.container-fluid[_ngcontent-%COMP%]   button.btn-danger[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n}\n.container-fluid[_ngcontent-%COMP%]   .converterMenu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  flex-flow: row wrap;\n}\n.container-fluid[_ngcontent-%COMP%]   .inputValue[_ngcontent-%COMP%] {\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb252ZXJ0ZXIvY29udmVydGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJOzs7RUFHSSxZQUFBO0VBQ0EsWUFBQTtBQUZSO0FBS0k7RUFDSSxtQkFYVTtFQVlWLHNCQUFBO0VBQ0EsWUFBQTtBQUhSO0FBTUk7RUFDSSxtQkFBQTtBQUpSO0FBT0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBTFI7QUFRSTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBTlI7QUFTSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVBSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb252ZXJ0ZXIvY29udmVydGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJ0blByaW1hcnlDb2xvcjogcmdiKDI1NSwgMjMyLCAxMTcpO1xuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBidXR0b24uYnRuLXByaW1hcnksXG4gICAgaW5wdXQsXG4gICAgc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuXG4gICAgYnV0dG9uLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogJGJ0blByaW1hcnlDb2xvcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cblxuICAgIGJ1dHRvbi5idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMTUsIDEwNSwgMSk7XG4gICAgfVxuXG4gICAgYnV0dG9uLmJ0bi1kYW5nZXIge1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLmNvbnZlcnRlck1lbnUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgfVxuXG4gICAgLmlucHV0VmFsdWUge1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConverterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-converter',
                templateUrl: './converter.component.html',
                styleUrls: ['./converter.component.scss']
            }]
    }], function () { return [{ type: _shared_services_converter_service__WEBPACK_IMPORTED_MODULE_1__["ConverterService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-converter-converter-module.js.map