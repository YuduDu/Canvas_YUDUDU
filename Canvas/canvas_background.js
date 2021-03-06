var a=0;
  	var x_ball=20;//position of the ball
  	var y_ball=40;
  	var vx=10;//speed of the ball
  	var vy=10;
  	var b=1;//control moving of the center of background
  	var count=0;//score
  	
  	function init(){
  		setInterval(draw,28);
  	}
  	

      
    function draw() {
    	  var ctx = document.getElementById('canvas').getContext('2d');
			ctx.clearRect(0,0,500,500);
			ctx.globalCompositeOperation='source-over';
			ctx.save();
			
			//background
			ctx.translate(250,250);
			var x_c=32*Math.cos(b*Math.PI/72) +48*Math.cos(-(2/3)*(b*Math.PI/72));
			var y_c=32*Math.sin(b*Math.PI/72) + 48*Math.sin(-(2/3)*(b*Math.PI/72));
			ctx.translate(x_c,y_c);//moving background center
			ctx.rotate((2*Math.PI/50)*a);// rotate background
			for(var i=0;i<1000;i++){ //draw background
				ctx.fillStyle = 'rgb(0,'+Math.floor(255-0.24*i)+',125)';
				var startangle=i*Math.PI/500;
				var endangle=(i+1)*Math.PI/500;
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.arc(0,0,500,startangle,endangle);
				ctx.fill();

			}
			a++;
			b++;
			if(b==2000)
			{
				b=1;
			}
			if(a == 50)
			{
				a=0;
			}
			//light of the background
			for(var j=0;j<10;j++)
			{
				ctx.beginPath();
				ctx.arc(0,0,50*j+a,0,Math.PI*2,false);
				ctx.strokeStyle='rgba(250,250,250,'+(0.5-0.08*j)+')';
				ctx.lineWidth=(4*j);
				ctx.stroke();
			}
			//ball
			ctx.restore();
			ctx.fillStyle='rgb(0,120,0)';
			ctx.strokeStyle='rgb(0,0,0)';
			ctx.beginPath();
			ctx.arc(x_ball,y_ball,15,0,Math.PI*2);//radius 15
			ctx.stroke();
			ctx.fill();
			// light in the ball
			ctx.save();
			ctx.fillStyle='rgba(250,250,250,0.8)';
			ctx.translate(x_ball,y_ball);
			if(vx<0)
			{
				ctx.rotate((2*Math.PI/50)*(vx-a));
			}
			else
			{
				ctx.rotate((2*Math.PI/50)*(vx+a));
			}
			ctx.beginPath();
			ctx.arc(5,5,5,0,Math.PI*2);
			ctx.moveTo(8,11);
			ctx.arc(-2,10,3,0,Math.PI*2);
			ctx.fill();
			ctx.restore();
			
			//move the ball
			x_ball+=vx;
			y_ball+=vy;
			if(x_ball>485||x_ball<15)
			{	
				vx=vx*(-1);
				vy=vy*(0.7+Math.random());
			}
			else
			{
				if(vx >= 25)
				{
					vx=10;
				}
				if(vx<=-25)
				{
					vx=-10;
				}
			}
				
			if(y_ball>485||y_ball<15)
			{
				vy=vy*(-1);
				vx=vx*(0.7+Math.random());
			}
			else
			{
				if(vy>=25)
				{
					vy=10;
				}
				if(vy<=-25)
				{
					vy=-10;
				}
			}
			

			//score
			ctx.font='30px Lucida Console';
       		ctx.fillStyle='yellow';
       		ctx.fillText("Score: "+count,10,30);
			ctx.restore();	
    }

	
	