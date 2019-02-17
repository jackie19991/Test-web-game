var Role=function (x,y,w,h) {
    var self=this;
    this.type="role";
    this.parent=null;
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.updata=function () {
    };
};
Role.prototype=new Spirits();