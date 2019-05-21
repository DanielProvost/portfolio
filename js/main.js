var url = window.location.href
console.log(url)
var cible = url.lastIndexOf('/')
var point = url.lastIndexOf('.php')
var pageActuel = url.substring(cible+1,point)
console.log(pageActuel)
	
	
	if (pageActuel == 'work1' || pageActuel == 'work2'){
		var ancre = document.getElementById('work')
		ancre.style.color = '#940000'	
		var dd = document.querySelector('dd')
		dd.style.display = 'block';
	}
	var ancre = document.getElementById(pageActuel)
ancre.style.color = '#940000'

var larg = (document.body.clientWidth)
console.log(larg)

if (larg < 400){
	document.querySelector('nav').className = 'hide'
}

function classNameManager(element, className) {

	if(element.className.indexOf(className) > -1) {
		element.className = element.className.replace(className, '');
			console.log(element.className);
	} else {
		element.className = element.className + ' ' + className;
	}
}

var bouton = document.getElementById('burger')	
bouton.addEventListener('click', function(){
	
	var eltHide = document.querySelector('nav')
	classNameManager(eltHide, 'hide')
	
})



