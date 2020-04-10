// funsion para cambiar el tema del proyecto
var style = localStorage.getItem('style') || 'verde';

function changeColor(color){
	const style = `styles/${color}.css`;
	$('#style').attr('href', style);
	localStorage.setItem('style', color);	
}

changeColor(style);	

//Funsion para hacer submit del formulario
function onSubmit(event){
	const { name, email, message } = event.target
	event.preventDefault();
	alert(`Gracias ${name.value} por contactar con nosotros, ahora es nuestro turno. Tendras nuestra respuesta a tu pregunta en el correo ${email.value}`);
	$('#messages').append(`
		<h1 class="name">${name.value}<h1>
		<span><small class="date">${Date()}<small></span>
		<p class="message">Mensage: ${message.value}</p>
		<hr>
	`);
	document.getElementById('form').reset();
}