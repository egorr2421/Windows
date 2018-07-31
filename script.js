$("document").ready(function(){
			var xs;
			var ys;
			var my_com = document.getElementById('my_term');
			var wind = document.getElementsByClassName('lol');
			var win = document.getElementsByClassName('lo');
			var cl = document.getElementsByClassName('close');
			var pysk = document.getElementsByClassName('lk');
			var sver = document.getElementsByClassName('H');
			var sulka = document.getElementsByClassName('z');
			var s=0;
			var r=0;
		my_com.oncontextmenu = function(){
			return false;
		}
		document.onmouseup = function(){
		document.removeEventListener('mousemove',lolka,false);
		if(event.target.className[0] === "X"){
		r=Number(event.target.className.substring(8));
		win[r].style.left='-111000px';
		}
		if(event.target.className[0] === "H"){
		//$('.lk').clone(true).appendTo('.elem_pyssk');
		var p= Number(event.target.className.substring(1));	
		win[p].style.left='-111000px';
		$('.lk').clone(true).appendTo('.elem_pyssk');
		pysk[pysk.length-1].className="zew_lem " + p;
		sulka[sulka.length-1].className="z " + p;
		//pysk[pysk.length-1].className+=event.target.className[event.target.className.length-1];	
		}
		if(event.target.className[0] === "z"){
 			var p= Number(event.target.className.substring(1));	
			win[p].style.left='300px';
			event.target.style.position=" absolute";
			event.target.style.left="-10000px";
 		}
		}
		
	
		var lolka =function (event){
			win[s].style.left = (event.clientX - Number(xs))+ 'px';
			win[s].style.top =  (event.clientY - Number(ys))+ 'px';
		};
		my_com.ondblclick = function (){
			$('.w').clone(true).appendTo('body');
			win[win.length-1].style.left= '200px';
			win[win.length-1].style.top= '200px';
			win[win.length-1].className = "lo window";
			win[win.length-1].className+=" " + (win.length-1);
			wind[wind.length-1].className+=" " + (wind.length-1);
			cl[cl.length-1].className+=" " + (wind.length-1);
			sver[sver.length-1].className+=" " + (wind.length-1);
			wind = document.getElementsByClassName('lol');
		    win = document.getElementsByClassName('lo');
			wind[(wind.length-1)].onmousedown = function (){
			xs =Number(event.clientX)- parseInt(win[(win.length-1)].style.left);
			ys =Number(event.clientY)- parseInt(win[(win.length-1)].style.top);
			document.addEventListener('mousemove', lolka,false);
	}	
		}	
	 	document.onmousedown = function (){
	 		if(event.target.className[0]=="l"){
	 		xs =Number(event.clientX)- parseInt(win[event.target.className[event.target.className.length-1]].style.left);
	 		ys =Number(event.clientY)- parseInt(win[event.target.className[event.target.className.length-1]].style.top);
	 		s = Number(event.target.className[event.target.className.length-1]);
	 		document.addEventListener('mousemove', lolka(event,s),false);
	 	}
	 }	
});