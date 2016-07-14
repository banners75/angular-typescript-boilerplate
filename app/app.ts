/// <reference path="../typings/globals/angular/index.d.ts" />
angular =  require("angular");
var uiRouter =  require("angular-ui-router");

var Home = require("./home/home.html");
var About = require("./about/about.html");
var Contact = require("./contact/contact.html");

import { HomeController } from "./home/home.controller";
import { AboutController } from "./about/about.controller";
import { ContactController } from "./contact/contact.controller";

namespace App{

    var app = angular.module("app", [uiRouter]);

    app.controller("homeController", HomeController);
    app.controller("aboutController", AboutController);
    app.controller("contactController", ContactController);

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
            })
            .state("about", {
                url: "/about",
                template: About,
                onEnter: () => {
                    console.log("Entering state about");
                },
                onExit: () => {
                    console.log("Exiting state about");
                }
            })
            .state("contact", {
                url: "/contact",
                template: Contact,
                onEnter: () => {
                    console.log("Entering state contact");
                },
                onExit: () => {
                    console.log("Exiting state contact");
                }
            });
    });
}
