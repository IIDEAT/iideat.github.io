AV.init({
    appId: "1wFqGRggvkflvsHK71yBeoLp-gzGzoHsz",
    appKey: "wHzWdO649dBr7q09CuunEv5i",
    serverURL: "https://1wfqgrgg.lc-cn-n1-shared.com"
});

var onlyone = 0;
var query = new AV.Query('zhuoban');
query.find().then((boards) => {
    let array = boards.map((xxx) => xxx.attributes)

    array.forEach((yyy => {
        let a = document.createElement('a')
        let ul = document.createElement('ul')
        let li_name = document.createElement('li')
        li_name.className = 'ProTi';
        li_name.innerText = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + yyy.name_cn;
        ul.appendChild(li_name);
        let li = document.createElement('li')
        li.innerText = "作\xa0\xa0\xa0\xa0\xa0\xa0者：" + yyy.author;
        ul.appendChild(li);
        let li2 = document.createElement('li')
        var score = ((yyy.nandu + yyy.suiji + yyy.yule + yyy.celue + yyy.dairu + yyy.hudong + yyy.meishu) / 7).toFixed(2);
        console.log(score);
        li2.innerText = "桌瓣评分：" + score.toString() + " (" + yyy.num.toString() + "人评分)";
        ul.appendChild(li2);
        a.rel = 'src/pic/' + yyy.name + '.png'
        a.id = yyy.name + '_show'
        $('body').on("click", "#" + a.id + "_img", function () {
            if (onlyone == 0) {
                console.log(yyy.name);
                let div = document.createElement('div')
                div.id = yyy.name + "_div"
                div.style.background = "#F8F8F5";
                div.style.borderStyle = "solid";
                div.style.borderColor = "#D4D4D4";
                div.style.borderWidth = "1px";
                div.style.height = "80%";
                div.style.width = "30%";
                div.style.zIndex = 9999;
                div.style.position = 'relative';
                div.style.top = "40%";
                div.style.left = "50%";
                div.style.boxShadow = "2px 2px 5px #000";
                div.style.transform = "translate(-50%, -50%)";

                let header = document.createElement('div')
                header.style.padding = "5%";
                header.style.textAlign = "center";
                let h1 = document.createElement('h1')
                h1.innerText = yyy.name_cn;
                header.appendChild(h1);

                let bo1 = document.createElement('div')
                bo1.style.height = "80%";
                bo1.style.width = "33%";
                bo1.style.border = "0";
                bo1.style.float = "left";
                bo1.style.textAlign = "center";
                bo1.innerHTML += "<h5 style='height:14%;'>规则难易</h5><h5 style='height:14%;'>策略性</h5><h5 style='height:14%;'>娱乐性</h5>" +
                    "<h5 style='height:14%;'>随机性</h5><h5 style='height:14%;'>互动感</h5><h5 style='height:14%;'>代入感</h5><h5 style='height:14%;'>美术</h5>"

                let bo2 = document.createElement('div')
                bo2.style.height = "80%";
                bo2.style.width = "33%";
                bo2.style.border = "0";
                bo2.style.float = "left";
                bo2.style.textAlign = "center";
                bo2.innerHTML += "<h5 style='height:14%;'>" + yyy.nandu.toFixed(2)+ "/5.00</h5>" + "<h5 style='height:14%;'>" + yyy.celue.toFixed(2)+ "/5.00</h5>"
                    + "<h5 style='height:14%;'>" + yyy.yule.toFixed(2)+ "/5.00</h5>" + "<h5 style='height:14%;'>" + yyy.suiji.toFixed(2)+ "/5.00</h5>"
                    + "<h5 style='height:14%;'>" + yyy.hudong.toFixed(2)+ "/5.00</h5>" + "<h5 style='height:14%;'>" + yyy.dairu.toFixed(2)+ "/5.00</h5>"
                    + "<h5 style='height:14%;'>" + yyy.meishu.toFixed(2)+ "/5.00</h5>"
                let bo3 = document.createElement('div')
                bo3.style.height = "80%";
                bo3.style.width = "32%";
                bo3.style.border = "0";
                bo3.style.float = "right";
                bo3.innerHTML += "<select style='height:14%; width:100%;' id='nandu_s'><option value ='5'>5</option><option value ='4'>4</option><option value ='3'>3</option><option value ='2'>2</option><option value ='1'>1</option></select>"
                bo3.innerHTML += "<select style='height:14%;width:100%;' id='celue_s'><option value ='5'>5</option><option value ='4'>4</option><option value ='3'>3</option><option value ='2'>2</option><option value ='1'>1</option></select>"
                bo3.innerHTML += "<select style='height:14%;width:100%;' id='yule_s'><option value ='5'>5</option><option value ='4'>4</option><option value ='3'>3</option><option value ='2'>2</option><option value ='1'>1</option></select>"
                bo3.innerHTML += "<select style='height:14%;width:100%;' id='suiji_s'><option value ='5'>5</option><option value ='4'>4</option><option value ='3'>3</option><option value ='2'>2</option><option value ='1'>1</option></select>"
                bo3.innerHTML += "<select style='height:14%;width:100%;' id='hudong_s'><option value ='5'>5</option><option value ='4'>4</option><option value ='3'>3</option><option value ='2'>2</option><option value ='1'>1</option></select>"
                bo3.innerHTML += "<select style='height:14%;width:100%;' id='dairu_s'><option value ='5'>5</option><option value ='4'>4</option><option value ='3'>3</option><option value ='2'>2</option><option value ='1'>1</option></select>"
                bo3.innerHTML += "<select style='height:14%;width:100%;' id='meishu_s'><option value ='5'>5</option><option value ='4'>4</option><option value ='3'>3</option><option value ='2'>2</option><option value ='1'>1</option></select>"

                let submit = document.createElement('input')
                submit.type = "submit"
                submit.id = 'btn_submit'
                submit.style.height = "5%"
                submit.style.width = "30%"
                submit.style.float = 'left'
                submit.style.left = "10%"
                submit.style.position = "relative"
                submit.value = "确定"
                submit.onclick = function()
                {

                }
                let cancel = document.createElement('input')
                cancel.type = 'button'
                cancel.id = 'btn_cancel'
                cancel.style.height = "5%"
                cancel.style.width = "30%"
                cancel.style.float = 'right'
                cancel.style.right = "10%"
                cancel.style.position = "relative"
                cancel.value = "关闭"
                cancel.onclick = function()
                {
                    var obj = document.getElementById(yyy.name + "_div");
                    obj.parentNode.removeChild(obj);
                    onlyone = 0;
                }
                div.appendChild(header);
                div.appendChild(bo1);
                div.appendChild(bo2);
                div.appendChild(bo3);
                div.appendChild(submit);
                div.appendChild(cancel);
                document.getElementById('imageFlow').appendChild(div);
            }
            onlyone = 1;
        })

        a.appendChild(ul);
        document.getElementById('ddd').appendChild(a);
        // let li = document.createElement('li')
        // li.innerText = yyy.name
        // let boardlist = document.querySelector('#messageList')
        // boardlist.appendChild(li)
    }))
});

// let myForm = document.querySelector('#postMessage')
// myForm.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     let name = myForm.querySelector('input[name=name]').value;
//     let content = myForm.querySelector('input[name=content]').value
//     var Message = AV.Object.extend('Message');
//     var message = new Message();
//     message.save({
//          'name':name,
//          'content': content
//       }).then((object)=>{
//           let li = document.createElement('li')
//           li.innerText = `${object.attributes.name} : ${object.attributes.content}`
//           let messageList = document.querySelector('#messageList')
//           messageList.appendChild(li)
//           myForm.querySelector('input[name=name]').value = ''
//           myForm.querySelector('input[name=content]').value = ''

//       })
// })


var imf = function(){
	var lf = 0;
	var instances = [];
	function getElementsByClass(object, tag, className){
		var o = object.getElementsByTagName(tag);
		for (var i = 0, n = o.length, ret = []; i < n; i++)
			if (o[i].className == className) ret.push(o[i]);
		if (ret.length == 1) ret = ret[0];
		return ret;
	}

	function addEvent(o, e, f){
		if (window.addEventListener) o.addEventListener(e, f, false);
		else if (window.attachEvent) r = o.attachEvent('on' + e, f);
	}

	function createReflexion(cont, img){
		var flx = false;
		/* ---- DXImageTransform 变化---- */
		flx = document.createElement('div');//把添加倒影换成添加产品信息
		//消除了IE下面的倒影
		//flx.title = img.title;
		//flx.replaceChild(document.createTextNode(o.text), this.legend.firstChild);
		//flx.alt.nodeValue = document.getElementById("text").getAttribute("title");

		/* ---- insert Reflexion 添加倒影换成添加文本---- */
		flx.style.position = 'absolute';
		flx.style.left = '-1000px';
		cont.appendChild(flx);
		return flx;
	}

	/* //////////// ==== ImageFlow Constructor 构造==== //////////// */
	function ImageFlow(oCont, size, zoom, border){
		this.diapos = [];
		this.scr = false;
		this.size = size;
		this.zoom = zoom;
		this.bdw = border;
		this.oCont = oCont;
		this.oc = document.getElementById(oCont);
		this.scrollbar = getElementsByClass(this.oc, 'div', 'scrollbar');
		//this.text       = getElementsByClass(this.oc,   'div', 'text');//改掉单个产品的标题显视方式
		//this.title      = getElementsByClass(this.text, 'div', 'title');
		//this.legend     = getElementsByClass(this.text, 'div', 'legend');
		this.bar = getElementsByClass(this.oc, 'img', 'bar');
		this.arL = getElementsByClass(this.oc, 'img', 'arrow-left');
		this.arR = getElementsByClass(this.oc, 'img', 'arrow-right');
		this.bw = this.bar.width;
		this.alw = this.arL.width - 5;
		this.arw = this.arR.width - 5;
		this.bar.parent = this.oc.parent = this;
		this.arL.parent = this.arR.parent = this;
		this.view = this.back = -1;
		this.resize();
		this.oc.onselectstart = function(){
			return false;
		}
		/* ---- create images 创建图---- */
		var img = getElementsByClass(this.oc, 'div', 'bank').getElementsByTagName('a');
		this.NF = img.length;
		for (var i = 0, o; o = img[i]; i++) {
			this.diapos[i] = new Diapo(this, i,
				o.rel,
				o.title || '- ' + i + ' -',
				o.innerHTML || o.rel,
				o.href || '',
				o.target || '_self',
				o.cloneNode(true),
				o.id
			);
		}

		/* ==== add mouse wheel events 加载鼠标滚轮动作==== */
		var temp_h1 = document.body.clientHeight;
		var temp_h2 = document.documentElement.clientHeight;
		var isXhtml = (temp_h2<=temp_h1&&temp_h2!=0)?true:false;
		var htmlbody = isXhtml?document.documentElement:document.body;

		if (window.addEventListener)
			this.oc.addEventListener('DOMMouseScroll', function(e){
				this.parent.scroll(-e.detail);
				htmlbody.style.overflow = "hidden";//上下滚动BUG清除
			}, false);
		else this.oc.onmousewheel = function(){
			this.parent.scroll(event.wheelDelta);
			htmlbody.style.overflow = "hidden";
			this.onmouseout = function(){
				htmlbody.style.overflow = "auto";
			}
		}

		/* ==== scrollbar drag N drop 移动==== */
		this.bar.onmousedown = function(e){
			if (!e) e = window.event;
			var scl = e.screenX - this.offsetLeft;
			var self = this.parent;
			/* ---- move bar 移动小块---- */
			this.parent.oc.onmousemove = function(e){
				if (!e) e = window.event;
				self.bar.style.left = Math.round(Math.min((self.ws - self.arw - self.bw), Math.max(self.alw, e.screenX - scl))) + 'px';
				self.view = Math.round(((e.screenX - scl)) / (self.ws - self.alw - self.arw - self.bw) * self.NF);
				if (self.view != self.back) self.calc();
				return false;
			}

			/* ---- release scrollbar 释放滚动条---- */
			this.parent.oc.onmouseup = function(e) {
				self.oc.onmousemove = null;
				return false;
			}
			return false;
		}

		/* ==== right arrow 右箭头==== */
		this.arR.onclick = this.arR.ondblclick = function(){
			if (this.parent.view < this.parent.NF - 1)
				this.parent.calc(1);
		}
		/* ==== Left arrow 左箭头==== */
		this.arL.onclick = this.arL.ondblclick = function(){
			if (this.parent.view > 0)
				this.parent.calc(-1);
		}
	}
	/* //////////// ==== ImageFlow prototype ==== //////////// */
	ImageFlow.prototype = {
		/* ==== targets ==== */
		calc: function(inc) {
			if (inc) this.view += inc;
			var tw = 0;
			var lw = 0;
			var o = this.diapos[this.view];
			if (o && o.loaded) {
				/* ---- reset 重置---- */
				var ob = this.diapos[this.back];
				if (ob && ob != o) {
					ob.img.className = 'diapo';
					ob.z1 = 1;
				}
				/* ---- update legend 更新说明---- */
				//this.title.replaceChild(document.createTextNode(o.title), this.title.firstChild);
				//this.legend.replaceChild(document.createTextNode(o.text), this.legend.firstChild);
				/* ---- update hyperlink 更新超级链接---- */
				if (o.url) {
					o.img.className = 'diapo link';
					window.status = 'hyperlink: ' + o.url;
				} else {
					o.img.className = 'diapo';
					window.status = '';
				}
				/* ---- calculate target sizes & positions 计算目标大小与设置---- */
				o.w1 = Math.min(o.iw, this.wh * .5) * o.z1;
				var x0 = o.x1 = (this.wh * .5) - (o.w1 * .5);
				var x = x0 + o.w1 + this.bdw;
				for (var i = this.view + 1, o; o = this.diapos[i]; i++){
					if (o.loaded) {
						o.x1 = x;
						o.w1 = (this.ht / o.r) * this.size;
						x += o.w1 + this.bdw;
						tw += o.w1 + this.bdw;
					}
				}
				x = x0 - this.bdw;
				for (var i = this.view - 1, o; o = this.diapos[i]; i--) {
					if (o.loaded) {
						o.w1 = (this.ht / o.r) * this.size;
						o.x1 = x - o.w1;
						x -= o.w1 + this.bdw;
						tw += o.w1 + this.bdw;
						lw += o.w1 + this.bdw;
					}
				}
				/* ---- save preview view ---- */
				this.back = this.view;
			}
		},

		/* ==== mousewheel scrolling 鼠标滚轮滚动==== */
		scroll: function(sc){
			if (sc < 0) {
				if (this.view < this.NF - 1) this.calc(1);//左移个数；
			} else {
				if (this.view > 0) this.calc(-1);
			}
		},
		/* ==== resize 调整 ==== */
		resize: function(){
			this.wh = this.oc.clientWidth;
			this.ht = this.oc.clientHeight;
			this.ws = this.scrollbar.offsetWidth;
			this.calc();
			this.run(true);
		},
		/* ==== move all images 移动所有的图片 ==== */
		run: function(res) {
			var i = this.NF;
			while (i--) this.diapos[i].move(res);
		}

	}

	/* //////////// ==== Diapo Constructor 构造==== //////////// */
	Diapo = function(parent, N, src, title, text, url, target,ch, id){
		this.parent = parent;
		this.loaded = false;
		this.title = title;
		this.text = text;
		this.url = url;
		this.target = target;
		this.N = N;
		this.CH = ch;
		this.img = document.createElement('img');
		this.img.src = src;
		this.img.parent = this;
		this.img.className = 'diapo';
		this.img.style.position = 'absolute';
		this.img.id = id + "_img";
		this.x0 = this.parent.oc.clientWidth;
		this.x1 = this.x0;
		this.w0 = 0;
		this.w1 = 0;
		this.z1 = 1;
		this.img.parent = this;

		this.parent.oc.appendChild(this.img);

		/* ---- display external link 显视外部链接---- */
		if (url){
			this.img.onmouseover = function(){
				this.className = 'diapo link';
			}
			this.img.onmouseout = function(){
				this.className = 'diapo';
			}
		}
	}
	/* //////////// ==== Diapo prototype模型 ==== //////////// */
	Diapo.prototype = {
		/* ==== HTML rendering 渲染==== */
		move: function(res){
			if (this.loaded){
				var sx = this.x1 - this.x0;
				var sw = this.w1 - this.w0;
				if (Math.abs(sx) > 2 || Math.abs(sw) > 2 || res){
					/* ---- paint only when moving ==移动时绘制---- */
					this.x0 += sx * .1;
					this.w0 += sw * .1;
					if (this.x0 < this.parent.wh && this.x0 + this.w0 > 0) {
						/* ---- paint only visible images 只绘制能看到的图---- */
						this.visible = true;
						var o = this.img.style;
						var h = this.w0 * this.r;
						/* ---- diapo ---- */
						o.left = Math.round(this.x0) + 'px';
						o.bottom = Math.floor(this.parent.ht * .25) + 'px';
						o.width = Math.round(this.w0) + 'px';
						o.height = Math.round(h) + 'px';
						/* ---- reflexion 倒影 ---- */
						if (this.flx){
							var o = this.flx.style;
							o.left = Math.round(this.x0) + 'px';
							o.top = Math.ceil(this.parent.ht * .75 + 1) + 'px';
							o.width = Math.round(this.w0) + 'px';
							o.height = Math.round(h) + 'px';
							this.flx.appendChild(this.CH)//添加...
						}
					} else {
						/* ---- disable invisible images 看不见的图失效---- */
						if (this.visible) {
							this.visible = false;
							this.img.style.width = '0px';
							if (this.flx) this.flx.style.width = '0px';
						}
					}
				}
			} else {
				/* ==== image onload 图像截入==== */
				if (this.img.complete && this.img.width){
					/* ---- get size image ---- */
					this.iw = this.img.width;
					this.ih = this.img.height;
					this.r = this.ih / this.iw;
					this.loaded = true;
					/* ---- create reflexion生成倒影 换成添加文本---- */
					this.flx = createReflexion(this.parent.oc, this.img);
					if (this.parent.view < 0) this.parent.view = this.N;
					this.parent.calc();
				}
			}
		},
		/* ==== diapo onclick 幻灯片单击==== */

	}
	/* //////////// ==== public methods 公共方法==== //////////// */
	return{
		/* ==== initialize script 初始化 === */
		create: function(div, size, zoom, border) {
			/* ---- instanciate imageFlow 实例化---- */
			var load = function() {
				var loaded = false;
				var i = instances.length;
				while (i--) if (instances[i].oCont == div) loaded = true;
				if (!loaded) {
					/* ---- push new imageFlow instance 新实例进栈---- */
					instances.push(
						new ImageFlow(div, size, zoom, border)
					);
					/* ---- init script (once) 初始化---- */
					if (!imf.initialized) {
						imf.initialized = true;
						/* ---- window resize event 窗口调整动作---- */
						addEvent(window, 'resize', function(){
							var i = instances.length;
							while (i--) instances[i].resize();
						});
						/* ---- stop drag N drop 停止拖动---- */
						addEvent(document.getElementById(div), 'mouseout', function(e){
							if (!e) e = window.event;
							var tg = e.relatedTarget || e.toElement;
							if (tg && tg.tagName == 'HTML') {
								var i = instances.length;
								while (i--) instances[i].oc.onmousemove = null;
							}
							return false;
						});
						setInterval(function() {
							var i = instances.length;
							
							while (i--) instances[i].run();
						}, 16);
					}
				}
			}
			/* ---- window onload event ---- */
			addEvent(window, 'load', function(){
				load();
			});
		}
	}
}();
