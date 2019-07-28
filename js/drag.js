//获取元素
var draggleTitle = document.getElementById('draggleTitle');
var dv = document.getElementById('dv');
var x = 0;
var y = 0;
var l = 0;
var t = 0;
var isDown = false;
//鼠标按下事件
draggleTitle.onmousedown = function(e) {
    //获取x坐标和y坐标
    x = e.clientX;
    y = e.clientY;

    //获取左部和顶部的偏移量
    l = dv.offsetLeft;
    t = dv.offsetTop;
    //开关打开
    isDown = true;
    //设置样式  
    dv.style.cursor = 'move';
    //鼠标移动
    document.onmousemove = function(e) {
        if (isDown == false) {
            return;
        }
        //获取x和y
        var nx = e.clientX;
        var ny = e.clientY;
        //计算移动后的左偏移量和顶部的偏移量
        var nl = nx - (x - l);
        var nt = ny - (y - t);
        if(nl<=0)//左右边界限定
        {
            nl=0;
        }
        else if(nl>=getInner().w-dv.offsetWidth)//元素在最右边时的判定，屏幕的宽度减去元素自身的宽度
        {
            nl=Math.floor(getInner().w-dv.offsetWidth);
        }
        if(nt<=0)//上下边界限定
        {
            nt=0;
        }
        else if(nt>=getInner().h-dv.offsetHeight)//元素在最下边时的判定，屏幕的高度减去元素自身的高度
        {
            nt=Math.floor(getInner().h-dv.offsetHeight) - 1;
        }
        dv.style.left = nl + 'px';
        dv.style.top = nt + 'px';
    }
    //鼠标抬起事件
    document.onmouseup = function() {
        //开关关闭
        isDown = false;
        dv.style.cursor = 'default';
    }
}
//得到浏览器页面内容区窗口的大小
function getInner()
{
	if(typeof innerHeight=='undefined')
	{
		return {
			w:document.documentElement.clientWidth,
			h:document.documentElement.clientHeight
		}//IE浏览器适用
	}
	else
	{
		return {
			w: innerWidth,
			h: innerHeight
		}//非IE浏览器适用
	}
}