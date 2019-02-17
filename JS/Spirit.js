var Spirits=function () {
    var self=this;
    this.type=null;//默认类型背景
    this.life=0;
    this.parent=null;
    var resourceses={};//美术资源
    this.x=0;
    this.y=0;
    this.w=0;
    this.h=0;
    this.updata=function () {

    };
    this.addResourceses=function (Resources) {//加载图片资源(也需要数组形式)
        resourceses=Resources;
    };
    this.removeResourceses=function () {
        resourceses=[];
    }
};
