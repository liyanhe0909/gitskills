var Star = function(){

    this.num = 50;
    this.spd = [];
    this.bornX = [];
    this.bornY = [];
    this.type = [];
    this.len = 5;

}

Star.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.bornX[i] = Math.random() * 800;
        this.bornY[i] = Math.random() * 800;
    }
}

Star.prototype.draw = function(){

    for(var i=0;i<this.num;i++){

        this.type[i] = Math.random(); // [0,1)
        //this.spd[i] = Math.random() * 10 - 5;// [-5,5)

        //this.bornX[i] -= this.spd[i];
        //this.bornY[i] -= this.spd[i];

        ctx.clearRect(this.bornX[i],this.bornY[i],21,21);

        if(this.type[i] < 0.4){
            ctx.drawImage(starFImg,this.bornX[i],this.bornY[i]);
        }else{
            ctx.drawImage(starBImg,this.bornX[i],this.bornY[i]);
        }
        ctx.drawImage(moon,350,150);
    }

}

Star.prototype.drawStar = function(img,pos){

    ctx.drawImage(img,pos.x,pos.y);

    lastLocX = pos.x;
    lastLocY = pos.y;

}

Star.prototype.drawStarDown = function(pos){

    this.drawStar(starFImg,pos);

    this.bornX.push(pos.x);
    this.bornY.push(pos.y);
    this.num += 1;

}

Star.prototype.drawStarMove = function(pos){

        ctx2.clearRect(lastLocX,lastLocY,20,20);

        this.drawStar(starFImg,pos);
}