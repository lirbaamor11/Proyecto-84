pizza_list_array = [];

function getmenu()
	{    
        // Da un nombre apropiado de identificación como nombre_pizza
        
        //Agrega la función push() para introducir un elemento al array
        
        var remove_commas = pizza_list_array.join("<br># ");
        document.getElementById("mostrar_menú").innerHTML =  "# " + remove_commas;
	}