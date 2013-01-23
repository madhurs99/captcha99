/**
 * @name captcha99-0.0.1.js
 * @category jQuery Plugins/CAPTCHA
 * @author Madhur Sharma (madhurs99@gmail.com)
 * @version 0.0.1
 * @created 23 November 2011
 */
 (function($) {  $.fn.captcha99 = function(options) {var operation = ["+", "-", "*"];var operationPhrase = ["plus", "minus", "multiply by"];var defaults = $.extend({      target: 'form',  usePhrase: false,  numberOfOperations: 3    },options);return this.each(function(){generateCaptcha(this);bindTarget();});function generateCaptcha(captchaDiv){$(captchaDiv).append('<span id="one99"></span><span id="operation99"></span><span id="two99"></span>=<input id="inputValue99" type="text"><span id="wrongAnswer99"></span>');$('#one99, #two99, #inputValue99').css({'margin-left':'5px','margin-right':'5px'});populateValues();};function bindTarget(){if(defaults.target!='form'){defaults.target='#' + defaults.target;}$(defaults.target).submit(function(event){var result;var currentOperation = $('#operation99').html();var inputValue = parseInt($('#inputValue99').val());if(currentOperation=="-" || currentOperation=="minus") {result = parseInt($('#one99').html()) - parseInt($('#two99').html());} else if (currentOperation=="+" || currentOperation=="plus") {result = parseInt($('#one99').html()) + parseInt($('#two99').html());} else {result = parseInt($('#one99').html()) * parseInt($('#two99').html())}if (result != inputValue) {$('#wrongAnswer99').html('Wrong Answer').css({'color':'red', 'padding-left': '5px'});event.preventDefault();populateValues(currentOperation);$('#inputValue99').val('');}});};function populateValues(){var currentOperation;if (defaults.usePhrase) {currentOperation = operationPhrase[Math.floor(Math.random()*defaults.numberOfOperations)];}else {currentOperation = operation[Math.floor(Math.random()*defaults.numberOfOperations)];}var randomnumber_one = Math.floor(Math.random()*10);var randomnumber_two = Math.floor(Math.random()*10);if(currentOperation=="-" || currentOperation=="minus"){if(randomnumber_one < randomnumber_two){var tmp = randomnumber_one;randomnumber_one = randomnumber_two;randomnumber_two = tmp;}}$('#one99').html(randomnumber_one);$('#two99').html(randomnumber_two);$('#operation99').html(currentOperation);};  };})(jQuery);