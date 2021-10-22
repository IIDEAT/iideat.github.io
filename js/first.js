AV.init({
    appId: "1wFqGRggvkflvsHK71yBeoLp-gzGzoHsz",
    appKey: "wHzWdO649dBr7q09CuunEv5i",
    serverURL: "https://1wfqgrgg.lc-cn-n1-shared.com"
});

(async function start() {

        var onlyone = 0;
        var query = new AV.Query('zhuoban');
        boards = await query.find()
        let array = boards.map((xxx) => xxx.attributes)
        for (let i = 0; i < array.length; i++) {
            yyy = array[i];
            document.getElementById(yyy.name + '_show' + "_img").onclick = function () {
                let zzz= yyy;
                if (onlyone == 0) {
                    onlyone = 1
                    let div = document.createElement('div')
                    div.id = zzz.name + "_div"
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
                    h1.innerText = zzz.name_cn;
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
                    bo2.innerHTML += "<h5 style='height:14%;'>" + zzz.nandu.toFixed(2) + "/5.00</h5>" + "<h5 style='height:14%;'>" + zzz.celue.toFixed(2) + "/5.00</h5>"
                        + "<h5 style='height:14%;'>" + zzz.yule.toFixed(2) + "/5.00</h5>" + "<h5 style='height:14%;'>" + zzz.suiji.toFixed(2) + "/5.00</h5>"
                        + "<h5 style='height:14%;'>" + zzz.hudong.toFixed(2) + "/5.00</h5>" + "<h5 style='height:14%;'>" + zzz.dairu.toFixed(2) + "/5.00</h5>"
                        + "<h5 style='height:14%;'>" + zzz.meishu.toFixed(2) + "/5.00</h5>"
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
                    submit.onclick = function () {
                        let zzz = yyy
                        var nandu = $("#nandu_s option:selected").val()
                        var celue = $("#celue_s option:selected").val()
                        var yule = $("#yule_s option:selected").val()
                        var suiji = $("#suiji_s option:selected").val()
                        var hudong = $("#hudong_s option:selected").val()
                        var dairu = $("#dairu_s option:selected").val()
                        var meishu = $("#meishu_s option:selected").val()

                        if (zzz.name == "xuri")
                        {
                            var id = "616fbf57e4378370b74e4210";
                        }
                        else if (zzz.name == "shenmi")
                        {
                            var id ="616fe19ee4378370b74e5d10";
                        }
                        const ooo = AV.Object.createWithoutData('zhuoban', id);

                        ooo.set("nandu", (zzz.nandu * zzz.num + parseInt(nandu))/(zzz.num + 1));
                        ooo.set("celue", (zzz.celue * zzz.num + parseInt(celue))/(zzz.num + 1));
                        ooo.set("yule", (zzz.yule * zzz.num + parseInt(yule))/(zzz.num + 1));
                        ooo.set("suiji", (zzz.suiji * zzz.num + parseInt(suiji))/(zzz.num + 1));
                        ooo.set("hudong", (zzz.hudong * zzz.num + parseInt(hudong))/(zzz.num + 1));
                        ooo.set("dairu", (zzz.dairu * zzz.num + parseInt(dairu))/(zzz.num + 1));
                        ooo.set("meishu", (zzz.meishu * zzz.num + parseInt(meishu))/(zzz.num + 1));
                        ooo.set("num", zzz.num + 1);
                        ooo.save();

                        var obj = document.getElementById("btn_submit");
                        obj.parentNode.removeChild(obj);
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
                    cancel.onclick = function () {
                        let zzz = yyy
                        var obj = document.getElementById(zzz.name + "_div");
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

            }

        }


    }
)();

