// funsion para cambiar el tema del proyecto

function changeColor(color){
	var style = $('#style').attr('href', `styles/${color}.css`);
	console.log(style);
}