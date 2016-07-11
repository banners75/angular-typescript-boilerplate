/// <reference path="../typings/globals/angular/index.d.ts" />
declare function require(name: string): any;

require("angular");
var uiRouter = require("angular-ui-router");

import {HomeController} from "./home/home.controller";
var Home = require("./home/home.html");

module App{

    var app = angular.module("app", [uiRouter]);

    app.controller("homeController", HomeController);

    app.config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            // route for the home page
            .state("home", {
                url: "/home",
                template: Home,
                onEnter: () => {
                    console.log("Entering state home");
                },
                onExit: () => {
                    console.log("Exiting state home");
                }
            });
    });
}
