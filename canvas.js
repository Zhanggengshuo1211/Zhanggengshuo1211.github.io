var canvas = document.getElementById('canvas1');
    var ctx = canvas.getContext('2d');
    console.log(ctx);
    var  CANVAS_WIDTH = canvas.width = 400;
    var  CANVAS_HEIGHT = canvas.height = 400;
    var j=5;
    
    var btns = document.querySelectorAll('button');
        btns[0].onclick = function(){  
                frameY=0;
                j=6;
            }
        btns[1].onclick = function(){ 
                frameY=1;
                j=6;
        }
        btns[2].onclick = function(){
                frameY=2;
                j=6;
        }
        btns[3].onclick = function(){ 
                frameY=3;
                j=8;
        }
        btns[4].onclick = function(){ 
                frameY=4;
                j=9;
        }
        btns[5].onclick = function(){ 
                frameY=5;
                j=4;
        }
        btns[6].onclick = function(){
                frameY=6;
                j=6;
        }
        btns[7].onclick = function(){
                frameY=7;
                j=6;
        }
        btns[8].onclick = function(){
                frameY=8;
                j=11;
        }
        btns[9].onclick = function(){
                frameY=9;
                j=3;
        }

    var playImage = new Image();
    playImage.src = 'img/shadow_dog.png';
    var spriteWidth = 575;
    var spriteHeight = 523;
    let frameX=0;
    let frameY=5;
    let GameFrame = 0;
    var staggeredFrames = 5;
    function animate(){
        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
       /*  ctx.drawImage(image,sx,sy,sw,sh , dx,dy,dw,dh); */
       let position = Math.floor(GameFrame/staggeredFrames) % j;
       frameX = spriteWidth * position;
       ctx.drawImage(playImage,
            frameX,frameY*spriteHeight,
            spriteWidth,spriteHeight,
            0,0,
            CANVAS_WIDTH,CANVAS_HEIGHT);
           /*  if(GameFrame % staggeredFrames ==0){
                if(frameX<6)frameX++;
                else frameX = 0;
            } */
            GameFrame++;
        requestAnimationFrame(animate); 
    }
    animate();