var Bullet=function (x,y,sX,sY) {
    var self=this;
    this.type="bullet";
    this.life=50;
    this.sX=sX;
    this.sY=sY;
    this.x=x;
    this.y=y;
    this.w=5;
    this.h=5;
    this.updata=function () {
        this.y+=this.sY;
        this.x+=this.sX;
        this.life--;
    };
    this.setLife=function(){
        return this.life;
    }

};
Bullet.prototype=new Spirits();