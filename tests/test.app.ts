
angular =  require("angular");
var uiRouter =  require("angular-ui-router");
 
import { HomeController } from "../app/home/home.controller";
import { AboutController } from "../app/about/about.controller";
import { ContactController } from "../app/contact/contact.controller";



namespace Tests{

    var app = angular.module("app", []);

    app.controller("homeController", HomeController);
    app.controller("aboutController", AboutController);
    app.controller("contactController", ContactController);
}