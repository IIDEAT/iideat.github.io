AV.init({
  appId: "1wFqGRggvkflvsHK71yBeoLp-gzGzoHsz",
  appKey: "wHzWdO649dBr7q09CuunEv5i",
  serverURL: "https://1wfqgrgg.lc-cn-n1-shared.com"
});

var query = new AV.Query('zhuoban');
  query.find().then( (boards)=> {
      let array = boards.map((xxx)=>xxx.attributes)
      console.log("wwww")
      array.forEach((yyy =>{
        console.log(yyy.name)
          // let li = document.createElement('li')
          // li.innerText = yyy.name
          // let boardlist = document.querySelector('#messageList')
          // boardlist.appendChild(li)
      }))
    },function (error) {
     alert('提交失败，改天再来')
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
