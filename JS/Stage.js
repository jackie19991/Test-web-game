var Stage=function(canvas){
	var self=this;
	var can = canvas;
	var canHandle = can.getContext("2d");
	var scene=null;
	this.replace = function(x) { //装载场景类
        scene = x;
        scene.parentCan=can;
        scene.Controller();
	};
	this.updata = function() { //更新方法
        if (scene == null) return;
        scene.updata();
        this.draw();
    };
	this.draw = function() { //重绘并更新所装载的场景
        if (scene == null) return;
		canHandle.clearRect(0, 0, can.width, can.height);
        for (let i=0;i<scene.spirits.length;i++) {
        	var spirit=scene.spirits[i];
        	canHandle.fillRect(spirit.x,spirit.y,spirit.w,spirit.h);
		}
    	if(scene.play!=null){
    		canHandle.fillRect(scene.play.x,scene.play.y,scene.play.w,scene.play.h)
		}
        // alert("重绘");
	};

	setInterval(function() {self.updata();},1000/60);//计时器 隔一定时间更新场景信息
};