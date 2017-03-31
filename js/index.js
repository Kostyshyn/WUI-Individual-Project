var submit = document.getElementById('submit');
var login = document.getElementById('login');
var password = document.getElementById('password');
var error = document.getElementById('error');
var success = document.getElementById('success');
var form = document.getElementById('login_form');
var span = document.getElementById('err');

var errors = {
	'passError': 'Password invalid!',
	'empty': 'Please enter login and password!',
	'noUser': 'User not found!',
	'onlyNumbers': 'Password can not contain only numbers!',
	'lengthErrPass': 'Password must be greater than 8 characters!',
	'lengthErrLog': 'Login must be greater than 3 characters and less than 15!'
};

function renderSuccess(){
	success.classList.add('success');
	setTimeout(function(){
		window.location.href = 'page.html';
	}, 2000);
};

function renderError(type){
	span.innerHTML = errors[type];
	error.classList.add('error');
};

function resetErrors(){
	error.classList.remove('error');
	success.classList.remove('success');
};

function validation(){
	var passValue = password.value.trim();
	var loginValue = login.value.trim();
	var isNumber = /[0-9]/.test(passValue);
	var isChar = /[a-z]/i.test(passValue);
	console.log('Login: ' + loginValue + ', password: ' + passValue);
	if (passValue == '' || loginValue == ''){
		renderError('empty');
	} else if (passValue.length < 8){
		renderError('lengthErrPass');
	} else if (loginValue.length < 3 || loginValue.length > 15){
		renderError('lengthErrLog');
	} else if (isNumber && !isChar){
		renderError('onlyNumbers');
	} else {
		renderSuccess();
	}

}; 

login.addEventListener('keypress', function(e){
	resetErrors();
});

password.addEventListener('keypress', function(e){
	resetErrors();
});

submit.addEventListener('click', function(e){
	e.preventDefault()
	validation();
	form.reset();
});
