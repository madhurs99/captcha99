/**
 * CAPTCHA99 jQuery Plugin
 *
 * Throws user a simple Math problem to identify humans from bots. 
 * If the answer is correct the form is submitted.
 * Else the form submition is prevented and text 'Wrong Answer' is displayed
 * @usage 
 *      1. Include this js file in HTML/JSP page using the below code -->
 *			<script src="captcha99-0.0.1.js" type="text/javascript"></script>
 *
 *		2. Put the below code where you want to place your captcha challenge --> 
 *			Please answer the below question to proceed:
 *			<div id="anyID"></div>
 *
 *		3. Now invoke the plugin in $(document).ready() by passing the id of the captcha div
 *			created in the previous step. e.g. $('#captchaID').captcha99();
 *
 *		4. For customizing, there are three options
 *			a. target:				type	- string 
 *									value	- ID of the form for submition has to be prevented
 *									default	- 'form' i.e. it binds all form on the page with captcha
 *			b. usePhrase:			type	- boolean 
 *									values	- true or false. 
 *											  false: signs (+, -, *) will be used.
 *											  true: phrases (plus, minus, multiply by) will be used 
 *									default	- false i.e. signs like +,-,* will be used
 *			c. numberOfOperations:	type	- number 
 *									values	- 1, 2 or 3
 *											  1: only addition operation will be used
 *											  2: addition and substraction operations will be used
 *											  3: addition, substraction ans multiplication operations will be used
 *									default	- 3 i.e. all three operations will be used
 * @name captcha99-0.0.1.js
 * @category jQuery Plugins/CAPTCHA
 * @author Madhur Sharma (madhurs99@gmail.com)
 * @version 0.0.1
 * @created 23 November 2011
 */

 (function($) {
  $.fn.captcha99 = function(options) {
	
	var operation = ["+", "-", "*"];
	var operationPhrase = ["plus", "minus", "multiply by"];

	var defaults = $.extend({
      target			: 'form',
	  usePhrase			: false,
	  numberOfOperations: 3
    },options);

	return this.each(function(){
		generateCaptcha(this);
		bindTarget();
	});
	
	function generateCaptcha(captchaDiv){
		$(captchaDiv).append('<span id="one99"></span><span id="operation99"></span><span id="two99"></span>=<input id="inputValue99" type="text"><span id="wrongAnswer99"></span>');
		$('#one99, #two99, #inputValue99').css({'margin-left':'5px','margin-right':'5px'});
		populateValues();
	};

	function bindTarget(){
		if(defaults.target!='form'){
			defaults.target='#' + defaults.target;
		}
		$(defaults.target).submit(function(event){
			var result;
			var currentOperation = $('#operation99').html();
			var inputValue = parseInt($('#inputValue99').val());

			if(currentOperation=="-" || currentOperation=="minus") {
				result = parseInt($('#one99').html()) - parseInt($('#two99').html());
			} else if (currentOperation=="+" || currentOperation=="plus") {
				result = parseInt($('#one99').html()) + parseInt($('#two99').html());
			} else {
				result = parseInt($('#one99').html()) * parseInt($('#two99').html())
			}
			if (result != inputValue) {
				$('#wrongAnswer99').html('Wrong Answer').css({'color':'red', 'padding-left': '5px'});
				event.preventDefault();
				populateValues(currentOperation);
				$('#inputValue99').val('');
			}
		});
	};

	function populateValues(){
		var currentOperation;
		if (defaults.usePhrase) {
			currentOperation = operationPhrase[Math.floor(Math.random()*defaults.numberOfOperations)];
		}else {
			currentOperation = operation[Math.floor(Math.random()*defaults.numberOfOperations)];
		}
		var randomnumber_one = Math.floor(Math.random()*10);
		var randomnumber_two = Math.floor(Math.random()*10);
		if(currentOperation=="-" || currentOperation=="minus"){
			if(randomnumber_one < randomnumber_two){
				var tmp = randomnumber_one;
				randomnumber_one = randomnumber_two;
				randomnumber_two = tmp;
			}
		}
		$('#one99').html(randomnumber_one);
		$('#two99').html(randomnumber_two);
		$('#operation99').html(currentOperation);
	};
  };
})(jQuery);