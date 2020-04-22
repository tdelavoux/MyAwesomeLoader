/*
 * MyAwesomeLoader
 * Librairie de génération de loaders.
 * @author  : Delavoux Thibault
 * @version : 1.0
 *
 * Licence MIT
 * 
 */

class myAwesomeLoader{

	/** --------------------------- INITIALISATION ET PARAMETRAGES  --------------------------------- */
	constructor(param){
		this.message		= param && param.message	?  param.message : 'Loading ...';
		this.imgPath		= param && param.imgPath ?  param.imgPath :'./img/default.gif';
		this.backgroundColor= param && param.backgroundColor	?  param.backgroundColor : '#fff';
		this.textColor		= param && param.textColor	?  param.textColor : '#000';
	}

	// Modification manuelle des paramètres
	setMessage(message) {this.message =  message;}
	setImg(img){this.imgPath = imgPath ?  imgPath : './img/default.gif';}
	setBackground(backgroundColor){this.backgroundColor= backgroundColor?  backgroundColor : '#fff';}
	setTextColor(textColor){this.textColor		= textColor	?  textColor : '#000';}

	/** --------------------------- Degugs --------------------------------- */
	// Récupération dans la console du message à un moment donné
	getMessage()			{console.log(this.message);}
	getImgPath()			{console.log(this.imgPath);}
	getBackgroundColor()	{console.log(this.backgroundColor);}
	getTextColor()			{console.log(this.textColor);}


	/* #####################################################################################################################
	*									 Fonctionnement du loader
   ######################################################################################################################## */

	// Arrêt manuel du loader
	stopLoader(){
		$('#myAwesomeLoader_aff_img').remove();
		$('#myAwesomeLoader_img').remove();
		$('body').css('overflow', 'visible');
	}

	// Lancement du loader
	load(){
		loader = img(this.message, this.imgPath, this.backgroundColor, this.textColor);
		$('body').append(loader);
		$('body').css('overflow', 'hidden');
	}
}



/* #####################################################################################################################
 *									 Definition des loaders
######################################################################################################################## */

function img(message, imgPath, backgroundColor, textColor){
	var loader = '<div id="myAwesomeLoader_aff_img" style="background-color:'+ backgroundColor +';" >' +
					'<div id="myAwesomeLoader_img">' +
						'<img  src="'+ imgPath + '" >'+
						'<div class="myAwesomeLoader_TextImg"  style="color:'+ textColor +';" >'+ message + '</div>' +
					'</div>'+
				'</div>';
	return loader;
}