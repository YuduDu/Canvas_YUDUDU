function hitball(ev)
	{
		var mx,my;
		if(ev.layerX || ev.layerX==0){
			mx = ev.layerX;
			my = ev.layerY;
		}else if(ev.offsetX || ev.offsetX==0){
			mx = ev.offsetX;
			my = ev.offsetY;
		}
        if(x_ball-10<mx<x_ball+10&&y_ball-10<my<y_ball+10)
        {
        	count+=1;
        }
       console.log(count);
    }

			
   	var mycanvas=document.getElementById('canvas');

	mycanvas.addEventListener("mousedown",function(evt){
	 	var mx,my;
		var rect = canvas.getBoundingClientRect();
		mx=evt.clientX - rect.left;
		my=evt.clientY - rect.top;
        if( (x_ball-25)<mx && mx<(x_ball+25) && (y_ball-25)<my && my<(y_ball+25))
        {
        	count+=1;
        	vx=vx+Math.random()*20;
  			vy=vy+Math.random()*20;
        }
  		
	},false);