/*jslint browser: true, white: true, plusplus: true*/
/*global angular, console, alert*/

(function () {
  'use strict';

  var app = angular.module('status');

  /* Edit with path of TC-JSON-API */
  app.api = "http://azerothshard.org/modules/TC-JSON-API/public/index.php";

  /* Your server name */
  app.serverName = "AzerothShard";

  /* Pulse time diff in days */
  app.pulseTime = 7;

}());
