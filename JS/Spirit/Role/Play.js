var Play=function (x,y,w,h) {
    var self=this;
    this.parent=null;
    this.targetX=0;
    this.targetY=0;
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    var fireCd=0;
    this.playMoveFlag={
        up:false,
        left:false,
        down:false,
        right:false
    };
    this.fireFlag=false;
    this.updata=function () {
        move();
        if(self.fireFlag)fire();
        if(fireCd!=0)fireCd--;
        // console.log(this.targetX+","+this.targetY)
    };
    var move=function () {
        if(self.playMoveFlag["up"])self.y--;
        if(self.playMoveFlag["down"])self.y++;
        if(self.playMoveFlag["left"])self.x--;
        if(self.playMoveFlag["right"])self.x++;
    };
    var fire=function () {
        if(fireCd!=0)return;
        let x=self.x+w/2;
        let y=self.y+h/2;

        let Sx=Math.abs(self.targetX-x);
        let Sy=Math.abs(self.targetY-y);
        let s=2/*子弹速度*//(Sx+Sy);
        Sx=s*Sx;
        Sy=s*Sy;
        if(x>self.targetX)Sx=-Sx;
        if(y>self.targetY)Sy=-Sy;

        self.parent.addspirit(new Bullet(x,y,Sx,Sy));
        fireCd=10/*开火间隔*/;
    }
};
Play.prototype=new Role();