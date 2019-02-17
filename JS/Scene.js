var Scene = function () {
    var self=this;
    this.parentCan=null;
    this.play=null;
    this.spirits=[];
    this.replacePlay=function (Play) {//装载玩家
        this.play=Play;
        this.play.parent=this;
    };
    this.Controller=function () {//玩家控制器
        if(!this.parentCan)return;
        if(!this.play)return;
        document.onkeydown=function(event){
            if(event.keyCode==40){ //向下
                self.play.playMoveFlag["down"]=true;
            };
            if(event.keyCode==38){ //向上
                self.play.playMoveFlag["up"]=true;
            };
            if(event.keyCode==37){ //向左
                self.play.playMoveFlag["left"]=true;
            };
            if(event.keyCode==39){ //向右
                self.play.playMoveFlag["right"]=true;
            };
        };  document.onkeyup=function(event){
            if(event.keyCode==40){ //向下
                self.play.playMoveFlag["down"]=false;
            };
            if(event.keyCode==38){ //向上
                self.play.playMoveFlag["up"]=false;
            };
            if(event.keyCode==37){ //向左
                self.play.playMoveFlag["left"]=false;
            };
            if(event.keyCode==39){ //向右
                self.play.playMoveFlag["right"]=false;
            };
        };
        this.parentCan.addEventListener("mousedown",function(e){
            play.fireFlag=true;
        });
        this.parentCan.addEventListener("mouseup",function(e){
            play.fireFlag=false;
        });
        this.parentCan.addEventListener("mousemove",function(e){
            let can =self.parentCan;
            var x = event.clientX - can.getBoundingClientRect().left;
            var y = event.clientY - can.getBoundingClientRect().top;
            play.targetX=x;
            play.targetY=y;
        });
    };

    this.addspirit=function (spirit) {
        this.spirits[this.spirits.length]=spirit;
    };
    this.updata=function () {
        if (this.spirits.length != 0) {
            for (var i = 0; i < this.spirits.length; i++) {
                this.spirits[i].updata();

                if(this.spirits[i].life<0) this.spirits.splice(i,1);
            }
        }
        if(this.play!=null){
            play.updata();
        }
    }
};