var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //
//import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http'; //
import { BrowserModule } from '@angular/platform-browser'; //
import { RouterModule } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './components/category/category-list.component';
import { CategoryComponent } from './components/category/category.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
//import { HttpModule } from '@angular/http';
import { requestOptionsProvider } from './services/default-request-options.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavMenuComponent,
                FetchDataComponent,
                HomeComponent,
                CategoryComponent, CategoryListComponent //
            ],
            imports: [
                BrowserModule,
                CommonModule,
                HttpModule,
                JsonpModule,
                FormsModule,
                ReactiveFormsModule,
                FlashMessagesModule,
                RouterModule.forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: HomeComponent },
                    { path: 'fetch-data', component: FetchDataComponent },
                    { path: 'category', component: CategoryComponent },
                    { path: 'category/:id', component: CategoryComponent },
                    { path: 'category-list', component: CategoryListComponent },
                    { path: '**', redirectTo: 'home' }
                ])
            ],
            providers: [requestOptionsProvider,
                { provide: 'BASE_URL', useFactory: getBaseUrl }],
            bootstrap: [AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
//# sourceMappingURL=app.module.js.map