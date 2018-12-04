var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpCommonService } from '../../services/http-common.service';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(_httpCommonService, flashMessagesService, route) {
        var _this = this;
        this._httpCommonService = _httpCommonService;
        this.flashMessagesService = flashMessagesService;
        this.route = route;
        this.id = 0;
        this.apiName = "admin/categoryNG";
        this.sub = route.params.subscribe(function (params) {
            _httpCommonService.getList(_this.apiName + "/GetAll").subscribe(function (data) {
                _this.items = data;
            });
        });
    }
    CategoryListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CategoryListComponent = __decorate([
        Component({
            selector: 'category-list',
            templateUrl: './category-list.component.html',
            providers: [HttpCommonService]
        })
        /** category-list component*/
        ,
        __metadata("design:paramtypes", [HttpCommonService,
            FlashMessagesService,
            ActivatedRoute])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
export { CategoryListComponent };
//# sourceMappingURL=category-list.component.js.map