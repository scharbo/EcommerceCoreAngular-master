var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions, Request, RequestMethod } from "@angular/http";
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
var HttpCommonService = /** @class */ (function () {
    function HttpCommonService(http) {
        this.http = http;
        this.http = http;
        this.apiBaseUrl = "/";
    }
    HttpCommonService.prototype.PostRequest = function (apiName, model) {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        var requestOptions = new RequestOptions({
            method: RequestMethod.Post,
            url: this.apiBaseUrl + apiName,
            headers: headers,
            body: JSON.stringify(model)
        });
        return this.http.request(new Request(requestOptions)).pipe(map(function (res) {
            if (res) {
                return [{ status: res.status, json: res.json() }];
            }
        }));
    };
    HttpCommonService.prototype.requestOptions = function () {
        var contentType = 'application/json'; //"x-www-form-urlencoded";
        var headers = new Headers({ 'Content-Type': contentType });
        var options = new RequestOptions({
            headers: headers,
        });
        return options;
    };
    HttpCommonService.prototype.stringifyModel = function (model) {
        return JSON.stringify(model);
    };
    HttpCommonService.prototype.create = function (apiName, model) {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        // let body = JSON.stringify(model);
        return this.http.post(this.apiBaseUrl + apiName, 
        //  this.stringifyModel(model),
        model //, this.requestOptions()
        )
            .pipe(map(this.extractData), //.map((res: Response) => res.json()) 
        catchError(this.handleError));
    };
    HttpCommonService.prototype.update = function (apiName, model) {
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        //let body = JSON.stringify(model);
        return this.http.put(this.apiBaseUrl + apiName, model, this.requestOptions())
            .pipe(map(function (res) { return res.json(); }), catchError(this.handleError)); //.subscribe();
    };
    HttpCommonService.prototype.delete = function (apiName, id) {
        return this.http.delete(this.apiBaseUrl + apiName + '?id=' + id)
            .pipe(catchError(this.handleError)); //.subscribe();;
    };
    HttpCommonService.prototype.getList = function (apiName) {
        return this.http.get(this.apiBaseUrl + apiName, { search: null })
            .pipe(map(function (res) {
            console.log(res);
            return res.json();
        }), catchError(this.handleError));
        /*let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            let myParams = new URLSearchParams();
            myParams.append('id', '1');
            let options = new RequestOptions({ headers: myHeaders, params: myParams });
            return this.http.get(this.apiBaseUrl + apiName, options)
                .map((responseData) => responseData.json()).catch(this.handleError);*/
        /*this.http.get(this.apiBaseUrl + apiName).subscribe(result => {
            console.log(result);
        }, error => console.error(error));*/
    };
    HttpCommonService.prototype.getItem = function (apiName, id) {
        return this.http.get(this.apiBaseUrl + apiName + "?id=" + id, { search: null })
            .pipe(map(function (responseData) { return responseData.json(); }), catchError(this.handleError));
    };
    HttpCommonService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HttpCommonService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    HttpCommonService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], HttpCommonService);
    return HttpCommonService;
}());
export { HttpCommonService };
//# sourceMappingURL=http-common.service.js.map