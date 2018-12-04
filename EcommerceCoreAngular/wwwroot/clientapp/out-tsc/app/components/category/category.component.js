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
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';
import { HttpCommonService } from '../../services/http-common.service';
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(_httpCommonService, flashMessagesService, route) {
        var _this = this;
        this._httpCommonService = _httpCommonService;
        this.flashMessagesService = flashMessagesService;
        this.route = route;
        this.model = {};
        this.submitted = false;
        this.id = 0;
        this.apiName = "admin/categoryNG";
        this.sub = route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            if (_this.id > 0) {
                console.log(_this.id);
                _httpCommonService.getItem(_this.apiName + "/get", _this.id).subscribe(function (data) {
                    console.log(data);
                    _this.model = data;
                }, function (err) {
                    // Log errors if any
                    console.log(err);
                    _this.showError(err);
                });
            }
        });
    }
    CategoryComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CategoryComponent.prototype.reset = function () {
        this.id = 0;
        this.model = {};
    };
    CategoryComponent.prototype.save = function () {
        var _this = this;
        console.log("save");
        if (this.id > 0) {
            this._httpCommonService.update(this.apiName + "/update", this.model).subscribe(function (data) {
                _this.showSuccess("updated");
            }, function (err) {
                // Log errors if any
                //  console.log(err);
                _this.showError(err);
            });
        }
        else {
            this._httpCommonService.create(this.apiName + "/create", this.model).subscribe(function (data) {
                //// Emit list event
                //EmitterService.get(this.listId).emit(comments);
                //// Empty model
                //this.model = new Comment(new Date(), '', '');
                //// Switch editing status
                //if (this.editing) this.editing = !this.editing;
                console.log(data);
                _this.showSuccess("created");
            }, function (err) {
                // Log errors if any
                //  console.log(err);
                _this.showError(err);
            });
        }
    };
    CategoryComponent.prototype.showError = function (err) {
        this.flashMessagesService.show(err, { cssClass: 'alert-danger' }); //{ cssClass: 'alert-success', timeout: 1000 }
        //this.flashMessagesService.grayOut(true);
        this.submitted = false;
    };
    CategoryComponent.prototype.showSuccess = function (msg) {
        this.flashMessagesService.show(msg, { cssClass: 'alert-success' }); //{ cssClass: 'alert-success', timeout: 1000 }
        //this.flashMessagesService.grayOut(true);
        this.submitted = true;
    };
    CategoryComponent.prototype.delete = function () {
        var _this = this;
        this._httpCommonService.delete(this.apiName + "/delete", this.model["categoryId"]).subscribe(function (data) {
            _this.showSuccess("deleted");
        }, function (err) {
            // Log errors if any
            //  console.log(err);
            _this.showError(err);
        });
        ;
    };
    CategoryComponent = __decorate([
        Component({
            selector: 'category',
            templateUrl: './category.component.html',
            providers: [HttpCommonService]
        })
        /** category component*/
        ,
        __metadata("design:paramtypes", [HttpCommonService,
            FlashMessagesService,
            ActivatedRoute])
    ], CategoryComponent);
    return CategoryComponent;
}());
export { CategoryComponent };
//# sourceMappingURL=category.component.js.map