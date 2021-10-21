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
                let table1 = document.createElement('table')
                bo1.style.height = "80%";
                bo1.style.width = "33%";
                bo1.style.borderStyle = "solid";
                bo1.style.borderColor = "#e31010";
                bo1.style.borderWidth = "1px";
                bo1.style.float = "left";
                bo1.style.textAlign = "center";
                table1.style.border = "0";
                table1.style.width = "100%";
                table1.style.height = "100%";
                table1.innerHTML  += "<tr>规则难易</tr><tr>策略性</tr><tr>娱乐性</tr><tr>随机性</tr><tr>互动感</tr><tr>代入感</tr><tr>美术</tr>"
                bo1.appendChild(table1);
                
                let bo2 = document.createElement('div')
                bo2.style.height = "80%";
                bo2.style.width = "33%";
                bo2.style.borderStyle = "solid";
                bo2.style.borderColor = "#e31010";
                bo2.style.borderWidth = "1px";
                bo2.style.float = "left";
                bo2.style.textAlign = "center";
                // bo2.innerHTML += "<h5>" + yyy.nandu.toFixed(2)+ "/5.00</h5>" +
                let bo3 = document.createElement('div')
                bo3.style.height = "80%";
                bo3.style.width = "33%";
                bo3.style.borderStyle = "solid";
                bo3.style.borderColor = "#e31010";
                bo3.style.borderWidth = "1px";
                bo3.style.float = "right";

                div.appendChild(header);
                div.appendChild(bo1);
                div.appendChild(bo2);
                div.appendChild(bo3);
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
