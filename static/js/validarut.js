//
// Validador de Rut
// Descargado desde http://www.juque.cl/
//
function revisarDigito( dvr )
{	
	dv = dvr + "";
	if ( dv != '0' && dv != '1' && dv != '2' && dv != '3' && dv != '4' && dv != '5' && dv != '6' && dv != '7' && dv != '8' && dv !='9' && dv != 'k'  && dv != 'K')	
	{		
		alert("Debe ingresar un digito verificador valido");		
		window.document.form1.rut.focus();		
		window.document.form1.rut.select();		
		return false;	
	}	
	return true;
}

function revisarDigito2( crut )
{	
	largo = crut.length;	
	if ( largo < 2 )	
	{		
		//alert("Debe ingresar el rut completo");		
		window.document.form1.rut.focus();		
		window.document.form1.rut.select();		
		return false;	
	}	
	if ( largo > 2 )		
		rut = crut.substring(0, largo - 1);	
	else		
		rut = crut.charAt(0);	
	dv = crut.charAt(largo-1);	
	revisarDigito( dv );	

	if ( rut == null || dv == null ){
		return 0;	
            }
	var dvr = '0';
	suma = 0;	
	mul  = 2;	

	for (i= rut.length -1 ; i >= 0; i--)	
	{	
		suma = suma + rut.charAt(i) * mul;		
		if (mul == 7)
                {			
                    mul = 2	;
                }
		else  { 			
                    mul++;
                }
	}	
	res = suma % 11;
	if (res==1){		
            dvr = 'k';
        }
	else if (res==0)
            {		
		dvr = '0';
            }
            else	
            {		
                    dvi = 11-res;		
                    dvr = dvi + "";	
            }
	if ( dvr != dv.toLowerCase() )	
	{		
		alert("EL rut es incorrecto");	
		window.document.form1.rut.focus();		
		window.document.form1.rut.select();		
		return false;
	}
        
	return true;
}

function Rut(texto)
{	
	var tmpstr = "";	
	for ( i=0; i < texto.length ; i++ )
        {		
            if ( texto.charAt(i) != ' ' && texto.charAt(i) != '.' && texto.charAt(i) != '-' )
            {
                tmpstr = tmpstr + texto.charAt(i);
            }
        }
	texto = tmpstr;	
	largo = texto.length;	

	if ( largo < 2 )	
	{		
		alert("Debe ingresar el rut completo");		
		window.document.form1.rut.focus();		
		window.document.form1.rut.select();		
		return false;	
	}	

	for (i=0; i < largo ; i++ )	
	{			
		if ( texto.charAt(i) !="0" && texto.charAt(i) != "1" && texto.charAt(i) !="2" && texto.charAt(i) != "3" && texto.charAt(i) != "4" && texto.charAt(i) !="5" && texto.charAt(i) != "6" && texto.charAt(i) != "7" && texto.charAt(i) !="8" && texto.charAt(i) != "9" && texto.charAt(i) !="k" && texto.charAt(i) != "K" )
 		{			
			alert("El valor ingresado no corresponde a un R.U.T valido");			
			window.document.form1.rut.focus();			
			window.document.form1.rut.select();			
			return false;		
		}	
	}	

	var invertido = "";	
	for ( i=(largo-1),j=0; i>=0; i--,j++ )
        {	
            invertido = invertido + texto.charAt(i);
        }
	var dtexto = "";	
	dtexto = dtexto + invertido.charAt(0);	
	dtexto = dtexto + '-';	
	cnt = 0;	

	for ( i=1,j=2; i<largo; i++,j++ )	
	{		
	//alert("i=[" + i + "] j=[" + j +"]" );		
            if ( cnt == 3 )		
            {			
                dtexto = dtexto + '.';			
                j++;			
                dtexto = dtexto + invertido.charAt(i);			
                cnt = 1;		
            }		
            else		
            {				
		dtexto = dtexto + invertido.charAt(i);			
		cnt++;		
            }	
	}

	invertido = "";	
	for ( i=(dtexto.length-1),j=0; i>=0; i--,j++ )
        {		
            invertido = invertido + dtexto.charAt(i);
        }

	window.document.form1.rut.value = invertido.toUpperCase();		

	if ( revisarDigito2(texto) )
        {
            //alert('rut correcto');
            //window.location.href="http://www.google.com" //no funciono
            //window.location.assign("probando"); //no funciono
            return true;
        }
			

	return false;
}

function prueba(texto){
    if(Rut(texto)){
        if (jQuery('#regiones').val()!='sin-region')
        {
            if (jQuery('#comunas').val()!='sin-comuna')
            {
                if(form1.chkAcepto.checked)
                {
                window.location.href="Registrado.html"; //si se valido bien manda a esta pagina
                return false;
                }
                else{
                    window.location.href="#"; //si no es valido se mantiene en la pagina de formulario
                    alert('Debe Aceptar Terminos Y Condiciones');
                    return false;
                }
            }
            else{
                window.location.href="#"; //si no es valido se mantiene en la pagina de formulario
                alert('Debe seleccionar una Comuna');
                return false;
            }
        }
        else{
            window.location.href="#"; //si no es valido se mantiene en la pagina de formulario
            alert('Debe seleccionar una Region');
            return false;
        }
    }
    else{
        window.location.href="#"; //si no es valido se mantiene en la pagina de formulario
        return false;
    }
}
//16.096.021-2
//16.096.021-3

var RegionesYcomunas = {

	"regiones": [{
			"NombreRegion": "Arica y Parinacota",
			"comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
	},
		{
			"NombreRegion": "Tarapac??",
			"comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Cami??a", "Colchane", "Huara", "Pica"]
	},
		{
			"NombreRegion": "Antofagasta",
			"comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollag??e", "San Pedro de Atacama", "Tocopilla", "Mar??a Elena"]
	},
		{
			"NombreRegion": "Atacama",
			"comunas": ["Copiap??", "Caldera", "Tierra Amarilla", "Cha??aral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
	},
		{
			"NombreRegion": "Coquimbo",
			"comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicu??a", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbal??", "Monte Patria", "Punitaqui", "R??o Hurtado"]
	},
		{
			"NombreRegion": "Valpara??so",
			"comunas": ["Valpara??so", "Casablanca", "Conc??n", "Juan Fern??ndez", "Puchuncav??", "Quintero", "Vi??a del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa Mar??a", "Quilpu??", "Limache", "Olmu??", "Villa Alemana"]
	},
		{
			"NombreRegion": "Regi??n del Libertador Gral. Bernardo O???Higgins",
			"comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Do??ihue", "Graneros", "Las Cabras", "Machal??", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requ??noa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Ch??pica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
	},
		{
			"NombreRegion": "Regi??n del Maule",
			"comunas": ["Talca", "ConsVtuci??n", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "R??o Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curic??", "Huala????", "Licant??n", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuqu??n", "Linares", "Colb??n", "Longav??", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
	},
		{
			"NombreRegion": "Regi??n del Biob??o",
			"comunas": ["Concepci??n", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tom??", "Hualp??n", "Lebu", "Arauco", "Ca??ete", "Contulmo", "Curanilahue", "Los ??lamos", "Tir??a", "Los ??ngeles", "Antuco", "Cabrero", "Laja", "Mulch??n", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa B??rbara", "Tucapel", "Yumbel", "Alto Biob??o", "Chill??n", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chill??n Viejo", "El Carmen", "Ninhue", "??iqu??n", "Pemuco", "Pinto", "Portezuelo", "Quill??n", "Quirihue", "R??nquil", "San Carlos", "San Fabi??n", "San Ignacio", "San Nicol??s", "Treguaco", "Yungay"]
	},
		{
			"NombreRegion": "Regi??n de la Araucan??a",
			"comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufqu??n", "Puc??n", "Saavedra", "Teodoro Schmidt", "Tolt??n", "Vilc??n", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacaut??n", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Pur??n", "Renaico", "Traigu??n", "Victoria", ]
	},
		{
			"NombreRegion": "Regi??n de Los R??os",
			"comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "M??fil", "Mariquina", "Paillaco", "Panguipulli", "La Uni??n", "Futrono", "Lago Ranco", "R??o Bueno"]
	},
		{
			"NombreRegion": "Regi??n de Los Lagos",
			"comunas": ["Puerto Montt", "Calbuco", "Cocham??", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maull??n", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de V??lez", "Dalcahue", "Puqueld??n", "Queil??n", "Quell??n", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "R??o Negro", "San Juan de la Costa", "San Pablo", "Chait??n", "Futaleuf??", "Hualaihu??", "Palena"]
	},
		{
			"NombreRegion": "Regi??n Ais??n del Gral. Carlos Ib????ez del Campo",
			"comunas": ["Coihaique", "Lago Verde", "Ais??n", "Cisnes", "Guaitecas", "Cochrane", "O???Higgins", "Tortel", "Chile Chico", "R??o Ib????ez"]
	},
		{
			"NombreRegion": "Regi??n de Magallanes y de la Ant??rVca Chilena",
			"comunas": ["Punta Arenas", "Laguna Blanca", "R??o Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Ant??rVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
	},
		{
			"NombreRegion": "Regi??n Metropolitana de Santiago",
			"comunas": ["Cerrillos", "Cerro Navia", "Conchal??", "El Bosque", "Estaci??n Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maip??", "??u??oa", "Pedro Aguirre Cerda", "Pe??alol??n", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaqu??n", "San Miguel", "San Ram??n", "Vitacura", "Puente Alto", "Pirque", "San Jos?? de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhu??", "Curacav??", "Mar??a Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Pe??aflor"]
	}]
}


jQuery(document).ready(function () {

	var iRegion = 0;
	var htmlRegion = '<option value="sin-region">Seleccione regi??n</option><option value="sin-region">--</option>';
	var htmlComunas = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';

	jQuery.each(RegionesYcomunas.regiones, function () {
		htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + 
                        RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
		iRegion++;
	});

	jQuery('#regiones').html(htmlRegion);
	jQuery('#comunas').html(htmlComunas);
	jQuery('#regiones').change(function () {
		var iRegiones = 0;
		var valorRegion = jQuery(this).val();
		var htmlComuna = '<option value="sin-comuna">Seleccione comuna</option><option value="sin-comuna">--</option>';
		jQuery.each(RegionesYcomunas.regiones, function () {
			if (RegionesYcomunas.regiones[iRegiones].NombreRegion == valorRegion) {
				var iComunas = 0;
				jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function () {
					htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '">' + 
                                                RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '</option>';
					iComunas++;
				});
			}
			iRegiones++;
		});
		jQuery('#comunas').html(htmlComuna);
	});
	jQuery('#comunas').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('Seleccione Regi??n');
		} else if (jQuery(this).val() == 'sin-comuna') {
			alert('Seleccione Comuna');
		}
	});
	jQuery('#regiones').change(function () {
		if (jQuery(this).val() == 'sin-region') {
			alert('Seleccione regi??n');
		}
	});

});