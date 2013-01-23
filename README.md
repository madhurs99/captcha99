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