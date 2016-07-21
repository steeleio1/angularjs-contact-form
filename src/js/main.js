import angular from "angular";
import angular_messages from "angular-messages";

// console.log (angular)

import {ContactController} from "./contacts.controller";
import { serverLink } from './server.link';


angular 
  .module('app', ['ngMessages'])
  .constant('SERVER', serverLink)
  .controller('ContactController', ContactController);


