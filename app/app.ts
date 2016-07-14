/// <reference path="../typings/globals/angular/index.d.ts" />

angular =  require("angular");
var uiRouter =  require("angular-ui-router");
var Home = require("./home/home.html");
import { HomeController } from "./home/home.controller";

module App{

    var app = angular.module("app", [uiRouter]);

    app.controller("homeController", HomeController);

    app.config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

        $urlRouterProvider.otherwise("/");

        $stateProvider
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
