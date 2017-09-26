
//funcion elegir opciones de cada impresora
function elegir(id1,id2) 
{
        var e = document.getElementById(id1);
		var value = e.options[e.selectedIndex].value;
		document.getElementById(id2).style.visibility="visible";
		//impresora 1
		if(id1=='sel1'&& id2=='imp1')
		{
			if(value==0)
			{
				document.getElementById(id2).style.visibility="hidden";
				document.getElementById(id2).innerHTML ='';
			}else
				if(value==1)//configuraciones
				{
					document.getElementById(id2).innerHTML ='<h4>Descargar</h4><br><a href="https://www.youtube.com/watch?v=acHKPu4oIro&list=LLiXEdduc5GcYtrFLIamd4nw&index=1">Calidad Alta</a><br><a href="index.html#services">Calidad Estandar</a><br><a href="index.html#services">Calidad Baja</a>';
									
				}else 
					if(value==2)//software
					{
						document.getElementById(id2).innerHTML ='<h4>Descargar</h4><br><a href="index.html#services">Matter Control</a><br><a href="index.html#services">Netfabb</a><br><a href="http://3dp.rocks/lithophane/">Lithophane (Fotos Relieve)</a>';
					}else
						if(value==3)//videos
						{					
							document.getElementById(id2).innerHTML ='<h4>Descargar</h4><br><a rel="nofollow" href="index.html#services" target="_blank">¿Cómo cambiar el material?</a><br><a href="index.html#services">¿Como destapar el extrusor?</a><br><a rel="nofollow" target="_blank" href="http://3dp.rocks/lithophane">¿Cómo calibrar?</a><br>';
						}
		}else//impresora 2
			if(id1=='sel2'&& id2=='imp2')
			{
				if(value==0)
				{
					document.getElementById(id2).style.visibility="hidden";
					document.getElementById(id2).innerHTML ='';
				}else
					if(value==1)//configuraciones
					{
						document.getElementById(id2).innerHTML ='<h4>Descargar</h4><br><a href="https://www.youtube.com/watch?v=b8PPap4dJog&index=2&list=LLiXEdduc5GcYtrFLIamd4nw">Calidad Alta</a><br><a href="index.html#services">Calidad Estandar</a><br><a href="index.html#services">Calidad Baja</a>';
										
					}else 
						if(value==2)//software
						{
							document.getElementById(id2).innerHTML ='<h4>Descargar</h4><br><a href="index.html#services">Matter Control</a><br><a href="index.html#services">Netfabb</a><br><a href="http://3dp.rocks/lithophane/">Lithophane (Fotos Relieve)</a>';
						}else
							if(value==3)//videos
							{					
								document.getElementById(id2).innerHTML ='<h4>Descargar</h4><br><a rel="nofollow" href="index.html#services" target="_blank">¿Cómo cambiar el material?</a><br><a href="index.html#services">¿Como destapar el extrusor?</a><br><a rel="nofollow" target="_blank" href="http://3dp.rocks/lithophane">¿Cómo calibrar?</a><br>';
							}
			}else//impresora 3
				if(id1=='sel3'&& id2=='imp3')
				{
					if(value==0)
					{
						document.getElementById(id2).style.visibility="hidden";
						document.getElementById(id2).innerHTML ='';
					}else
						if(value==1)//configuraciones
						{
							document.getElementById(id2).innerHTML ='<h4>Descargar</h4><br><a href="https://mega.nz/#F!gw8iQLwI">Calidad Alta</a><br><a href="index.html#services">Calidad Estandar</a><br><a href="index.html#services">Calidad Baja</a>';
											
						}else 
							if(value==2)//software
							{
								document.getElementById(id2).innerHTML ='<h4>Descargar</h4><br><a href="index.html#services">Matter Control</a><br><a href="index.html#services">Netfabb</a><br><a href="http://3dp.rocks/lithophane/">Lithophane (Fotos Relieve)</a>';
							}else
								if(value==3)//videos
								{					
									document.getElementById(id2).innerHTML ='<h4>Descargar</h4><br><a rel="nofollow" href="index.html#services" target="_blank">¿Cómo cambiar el material?</a><br><a href="index.html#services">¿Como destapar el extrusor?</a><br><a rel="nofollow" target="_blank" href="http://3dp.rocks/lithophane">¿Cómo calibrar?</a><br>';
								}
				}
    }
