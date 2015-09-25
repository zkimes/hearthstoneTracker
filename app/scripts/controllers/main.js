'use strict';

/**
 * @ngdoc function
 * @name hearthstoneTrackerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hearthstoneTrackerApp
 */
angular.module('hearthstoneTrackerApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.classes=[
    	'Druid',
    	'Hunter',
    	'Mage',
    	'Paladin',
    	'Priest',
    	'Rogue',
    	'Shaman',
    	'Warlock',
    	'Warrior'
    ];

    this.history = [

    ];

    this.record = function(outcome){
    	var result = {
    		class: this.currentClass,
    		result: outcome
    	};
    	this.history.push(result);
    	this.currentClass = '';
    };

  });
