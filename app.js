const reserva = document.getElementById('reserva');

reserva.addEventListener('click', reser);
function reser() {
  Swal.fire({
  title: '¿Quieres realizar la reserva?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'SI'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'GRACIAS POR TU RESERVA!',
    )
  }
});


  // Swal.fire({
	// title: "Gracias Por Su Compra"
	// text:
	// html:
	// icon:
	// confirmButtonText:
	// footer:
	// width:
	// padding:
	// background:
	// grow:
	// backdrop:
	// timer:
	// timerProgressBar:
	// toast:
	// position:
	// allowOutsideClick:
	// allowEscapeKey:
	// allowEnterKey:
	// stopKeydownPropagation:

	// input:
	// inputPlaceholder:
	// inputValue:
	// inputOptions:
	
	//  customClass:
	// 	container:
	// 	popup:
	// 	header:
	// 	title:
	// 	closeButton:
	// 	icon:
	// 	image:
	// 	content:
	// 	input:
	// 	actions:
	// 	confirmButton:
	// 	cancelButton:
	// 	footer:	

	// showConfirmButton:
	// confirmButtonColor:
	// confirmButtonAriaLabel:

	// showCancelButton:
	// cancelButtonText:
	// cancelButtonColor:
	// cancelButtonAriaLabel:
	
	// buttonsStyling:
	// showCloseButton:
	// closeButtonAriaLabel:


	// imageUrl:
	// imageWidth:
	// imageHeight:
	// imageAlt:
// });
}

function limpiarFormulario() {
    document.getElementById("fromulario").reset();
  }