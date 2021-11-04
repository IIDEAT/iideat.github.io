AV.init({
    appId: "1wFqGRggvkflvsHK71yBeoLp-gzGzoHsz",
    appKey: "wHzWdO649dBr7q09CuunEv5i",
    serverURL: "https://1wfqgrgg.lc-cn-n1-shared.com"
});
(function () {
    var onlyone = 0;
    var query = new AV.Query('zhuoban');

    boards = query.find().then((boards) => {
            let array = boards.map((xxx) => xxx.attributes)
            array.forEach((yyy => {


                var dict1 = {"难易度": yyy.nandu, "随机性": yyy.suiji, "美\xa0\xa0术": yyy.meishu}
                var dict2 = {"策略性": yyy.celue, "互动感": yyy.hudong}
                var dict3 = {
                    "评\xa0\xa0分": ((yyy.nandu + yyy.suiji + yyy.yule + yyy.celue + yyy.dairu + yyy.hudong + yyy.meishu) / 7).toFixed(2),
                    "娱乐性": yyy.yule,
                    "代入感": yyy.dairu
                }
                let a = document.createElement('div')
                a.style.height = "30vh";
                a.style.fontSize = "1.5rem";
                a.className = "col"
                let img = document.createElement('img')
                img.src = './src/pic/' + yyy.name + '.png';
                img.style.width = "20%";
                img.style.height = "100%";
                img.style.float = "left";
                a.appendChild(img);
                let table = document.createElement('table')

                table.style.height = "100%";
                table.style.width = "80%";
                table.style.float = "right";
                table.style.textAlign = "left";
                let tr1 = document.createElement('tr')
                let th1 = document.createElement('th')
                th1.style.fontSize = "20px";
                th1.innerText = yyy.name_cn;
                tr1.appendChild(th1);
                for (var key in dict1) {
                    let score = parseFloat(dict1[key]);
                    let yellow_star = parseInt(score);
                    let star_per = parseFloat(score - yellow_star) * 100;
                    let gray_star = parseInt(5 - score);
                    let th = document.createElement('th')
                    let view1 = document.createElement('view')
                    view1.style.width = "100%";
                    let div = document.createElement('div')
                    div.style.width = "25%";
                    div.style.float = "left";
                    div.innerText = key + "：";
                    let view2 = document.createElement('view')
                    view2.style.display = "flex";
                    view2.style.width = "75%";
                    view2.style.float = "left";
                    if (yellow_star > 0)
                    {
                        let view_yellow = document.createElement('view')
                        view_yellow.className = 'star';
                        for (i = 0; i < yellow_star; i++) {
                            let ystar = document.createElement('view')
                            ystar.className = "icon icon_yellow";
                            ystar.style.float = "left";
                            if (! (i == yellow_star - 1 && star_per > 0))
                            {
                                ystar.style.marginRight = "0.3rem";
                            }
                            view_yellow.appendChild(ystar)
                        }
                        view2.appendChild(view_yellow)
                    }
                    if (star_per > 0) {
                        let view_half = document.createElement('view')
                        view_half.style.position = "relative";
                        view_half.className = 'star';
                        let view_g = document.createElement('view')
                        view_g.className = "icon icon_gray";
                        view_g.style.float = "left";
                        view_half.appendChild(view_g)
                        let view_y = document.createElement('view')
                        view_y.className = "icon icon_yellow";
                        view_y.style.float = "left";
                        view_y.style.width = star_per.toString() + "%";
                        view_y.style.overflow = "hidden";
                        view_y.style.position = "absolute";
                        view_y.style.left = "0";
                        view_y.style.top = "0";
                        view_half.appendChild(view_y)
                        view2.appendChild(view_half)
                    }
                    if (gray_star > 0)
                    {
                        let view_gray = document.createElement('view')
                        view_gray.className = 'star';
                        for (i = 0; i < gray_star; i++) {
                            let gstar = document.createElement('view')
                            gstar.className = "icon icon_gray";
                            gstar.style.float = "left";
                            if (! (i == gray_star - 1 ))
                            {
                                gstar.style.marginRight = "0.3rem";
                            }
                            view_gray.appendChild(gstar)
                        }
                        view2.appendChild(view_gray)
                    }
                    view1.appendChild(div)
                    view1.appendChild(view2)
                    th.appendChild(view1)
                    tr1.appendChild(th)
                }
                table.appendChild(tr1)

                let tr2 = document.createElement('tr')
                let th2 = document.createElement('th')
                th2.innerText = "作\xa0\xa0者：" + yyy.author;
                tr2.appendChild(th2);
                for (var key in dict2) {
                    // let score = dict2[key];
                    let score = 3.5;
                    let yellow_star = parseInt(score);
                    let star_per = parseFloat(score - yellow_star) * 100;
                    let gray_star = parseInt(5 - score);

                    let th = document.createElement('th')
                    let view1 = document.createElement('view')
                    view1.style.width = "100%";
                    let div = document.createElement('div')
                    div.style.width = "25%";
                    div.style.float = "left";
                    div.innerText = key + "：";
                    let view2 = document.createElement('view')
                    view2.style.display = "flex";
                    view2.style.width = "75%";
                    view2.style.float = "left";
                    if (yellow_star > 0)
                    {
                        let view_yellow = document.createElement('view')
                        view_yellow.className = 'star';
                        for (i = 0; i < yellow_star; i++) {
                            let ystar = document.createElement('view')
                            ystar.className = "icon icon_yellow";
                            ystar.style.float = "left";
                            if (! (i == yellow_star - 1 && star_per > 0))
                            {
                                ystar.style.marginRight = "0.3rem";
                            }
                            view_yellow.appendChild(ystar)
                        }
                        view2.appendChild(view_yellow)
                    }
                    if (star_per > 0) {
                        let view_half = document.createElement('view')
                        view_half.style.position = "relative";
                        view_half.className = 'star';
                        let view_g = document.createElement('view')
                        view_g.className = "icon icon_gray";
                        view_g.style.float = "left";
                        view_half.appendChild(view_g)
                        let view_y = document.createElement('view')
                        view_y.className = "icon icon_yellow";
                        view_y.style.width = star_per.toString() + "%";
                        view_y.style.float = "left";
                        view_y.style.overflow = "hidden";
                        view_y.style.position = "absolute";
                        view_y.style.left = "0";
                        view_y.style.top = "0";
                        view_half.appendChild(view_y)
                        view2.appendChild(view_half)
                    }
                    if (gray_star > 0)
                    {
                        let view_gray = document.createElement('view')
                        view_gray.className = 'star';
                        for (i = 0; i < gray_star; i++) {
                            let gstar = document.createElement('view')
                            gstar.className = "icon icon_gray";
                            gstar.style.float = "left";
                            if (! (i == gray_star - 1 ))
                            {
                                gstar.style.marginRight = "0.3rem";
                            }
                            view_gray.appendChild(gstar)
                        }
                        view2.appendChild(view_gray)
                    }
                    view1.appendChild(div)
                    view1.appendChild(view2)
                    th.appendChild(view1)
                    tr2.appendChild(th)
                }
                let th_e = document.createElement('th')
                th_e.innerText = "共" + (yyy.num).toString() + "人评分";
                tr2.appendChild(th_e)
                table.appendChild(tr2)


                let tr3 = document.createElement('tr')
                for (var key in dict3) {
                    let score = dict3[key];
                    let yellow_star = parseInt(score);
                    let star_per = parseFloat(score - yellow_star) * 100;
                    let gray_star = parseInt(5 - score);
                    let th = document.createElement('th')
                    let view1 = document.createElement('view')
                    view1.style.width = "100%";
                    let div = document.createElement('div')
                    div.style.width = "25%";
                    div.style.float = "left";
                    div.innerText = key + "：";
                    let view2 = document.createElement('view')
                    view2.style.display = "flex";
                    view2.style.width = "75%";
                    view2.style.float = "left";
                    if (yellow_star > 0)
                    {
                        let view_yellow = document.createElement('view')
                        view_yellow.className = 'star';
                        for (i = 0; i < yellow_star; i++) {
                            let ystar = document.createElement('view')
                            ystar.className = "icon icon_yellow";
                            ystar.style.float = "left";
                            if (! (i == yellow_star - 1 && star_per > 0))
                            {
                                ystar.style.marginRight = "0.3rem";
                            }
                            view_yellow.appendChild(ystar)
                        }
                        view2.appendChild(view_yellow)
                    }
                    if (star_per > 0) {
                        let view_half = document.createElement('view')
                        view_half.style.position = "relative";
                        view_half.className = 'star';
                        let view_g = document.createElement('view')
                        view_g.className = "icon icon_gray";
                        view_g.style.float = "left";
                        view_half.appendChild(view_g)
                        let view_y = document.createElement('view')
                        view_y.className = "icon icon_yellow";
                        view_y.style.float = "left";
                        view_y.style.width = star_per.toString() + "%";
                        view_y.style.overflow = "hidden";
                        view_y.style.position = "absolute";
                        view_y.style.left = "0";
                        view_y.style.top = "0";
                        view_half.appendChild(view_y)
                        view2.appendChild(view_half)
                    }
                    if (gray_star > 0)
                    {
                        let view_gray = document.createElement('view')
                        view_gray.className = 'star';
                        for (i = 0; i < gray_star; i++) {
                            let gstar = document.createElement('view')
                            gstar.className = "icon icon_gray";
                            gstar.style.float = "left";
                            if (! (i == gray_star - 1 ))
                            {
                                gstar.style.marginRight = "0.3rem";
                            }
                            view_gray.appendChild(gstar)
                        }
                        view2.appendChild(view_gray)
                    }
                    view1.appendChild(div)
                    view1.appendChild(view2)
                    th.appendChild(view1)
                    tr3.appendChild(th)
                }
                let button = document.createElement('button');
                button.type = 'button';
                button.innerText = '我要打分';
                button.id = "btn_" + yyy.name;
                button.onclick = function () {
                    let zzz = yyy;
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

                            if (zzz.name == "xuri") {
                                var id = "616fbf57e4378370b74e4210";
                            } else if (zzz.name == "shenmi") {
                                var id = "616fe19ee4378370b74e5d10";
                            }
                            else if (zzz.name == "kaka") {
                                var id = "618345bbcd64666bf22cf3b5";
                            }
                            else if (zzz.name == "dianli") {
                                var id = "61834642cd64666bf22cf41b";
                            }
                            else if (zzz.name == "shenhai") {
                                var id = "618347045820fb592cc38832";
                            }
                            else if (zzz.name == "huoxing") {
                                var id = "618347485820fb592cc38861";
                            }
                            else if (zzz.name == "zhengbian") {
                                var id = "61834765cd64666bf22cf4a0";
                            }
                            else if (zzz.name == "bogendi") {
                                var id = "61834804cd64666bf22cf516";
                            }
                            else if (zzz.name == "qingshu") {
                                var id = "61834826cd64666bf22cf527";
                            }
                            else if (zzz.name == "furao") {
                                var id = "6183484fcd64666bf22cf533";
                            }
                            else if (zzz.name == "nuhai") {
                                var id = "6183486acd64666bf22cf53e";
                            }

                            const ooo = AV.Object.createWithoutData('zhuoban', id);

                            ooo.set("nandu", (zzz.nandu * zzz.num + parseInt(nandu)) / (zzz.num + 1));
                            ooo.set("celue", (zzz.celue * zzz.num + parseInt(celue)) / (zzz.num + 1));
                            ooo.set("yule", (zzz.yule * zzz.num + parseInt(yule)) / (zzz.num + 1));
                            ooo.set("suiji", (zzz.suiji * zzz.num + parseInt(suiji)) / (zzz.num + 1));
                            ooo.set("hudong", (zzz.hudong * zzz.num + parseInt(hudong)) / (zzz.num + 1));
                            ooo.set("dairu", (zzz.dairu * zzz.num + parseInt(dairu)) / (zzz.num + 1));
                            ooo.set("meishu", (zzz.meishu * zzz.num + parseInt(meishu)) / (zzz.num + 1));
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
                        document.getElementById('aaa').appendChild(div);
                    }




                }
                tr3.appendChild(button);
                table.appendChild(tr3)
                a.appendChild(table)
                document.get("aaa").appendChild(a);
            }
            ))
        }
    )})();
