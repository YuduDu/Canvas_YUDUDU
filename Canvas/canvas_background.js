var a=0;
  	var x_ball=20;
  	var y_ball=40;
  	var vx=5;
  	var vy=5;
  	var count=0;
  	
  	function init(){
  		setInterval(draw,31);
  	}
  	

      
    function draw() {
    	  var ctx = document.getElementById('canvas').getContext('2d');
			ctx.clearRect(0,0,500,500);
			ctx.globalCompositeOperation='source-over';
			ctx.save();
			//background
			ctx.translate(250,250);
			ctx.rotate((2*Math.PI/50)*a);
			//ctx.arc(0,0,300,0,Math.PI*2);
			for(var i=0;i<10;i++){
				ctx.fillStyle = 'rgb(250,'+Math.floor(255-24*i)+',0)';
				var startangle=i*Math.PI/5;
				var endangle=(i+1)*Math.PI/5;
				ctx.beginPath();
				ctx.moveTo(0,0);
				ctx.arc(0,0,400,startangle,endangle);
				ctx.fill();
			}
			a++;
			if(a == 50)
			{
				a=0;
			}
			//glory
			
			for(var j=0;j<10;j++)
			{
				ctx.beginPath();
				ctx.arc(0,0,50*j+a,0,Math.PI*2,false);
				ctx.strokeStyle='rgba(250,250,250,'+(0.5-0.08*j)+')';
				ctx.lineWidth=(3*j);
				ctx.stroke();
			}
			
			ctx.restore();
			
			//ball
			ctx.fillStyle='rgb('+Math.floor(255-240*Math.random())+',200,150)';
			ctx.strokeStyle='rgb(0,0,0)';
			ctx.beginPath();
			ctx.arc(x_ball,y_ball,15,0,Math.PI*2);//radius 15
			ctx.stroke();
			ctx.fill();
			x_ball+=vx;
			y_ball+=vy;
			if(x_ball>485||x_ball<15)
			{	
				vx=vx*(-1);
				vy=vy*(0.7+Math.random());
			}
				
			if(y_ball>485||y_ball<15)
			{
				vy=vy*(-1);
				vx=vx*(0.7+Math.random());
			}
			
			if(vx >= 20)
			{
				vx=8;
			}
			if(vy>=20)
			{
				vy=8;
			}
			if(vy<=-20)
			{
				vy=-8;
			}
			if(vx<=-20)
			{
				vx=-8;
			}
			
			//score
			ctx.font='30px Lucida Console';
       		ctx.fillStyle='blue';
       		ctx.fillText("Score: "+count,10,30);
			ctx.restore();	
    }

	
	