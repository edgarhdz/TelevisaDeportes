function hideEmailText(){
	$('.email-txt').val("");
}

function showEmailText(){
    if($('.email-txt').val()==""){
        $('.email-txt').val("Correo electrónico");
    }
}
