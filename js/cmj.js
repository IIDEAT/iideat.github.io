AV.init({
  appId: "1wFqGRggvkflvsHK71yBeoLp-gzGzoHsz",
  appKey: "wHzWdO649dBr7q09CuunEv5i",
  serverURL: "https://1wfqgrgg.lc-cn-n1-shared.com"
});

var query = new AV.Query('Message');
  query.find().then( (messages)=> {
      let array = messages.map((xxx)=>xxx.attributes)

      array.forEach((yyy =>{
          let li = document.createElement('li')
          li.innerText = yyy.name +' : '+yyy.content;
          let messageList = document.querySelector('#messageList')
          messageList.appendChild(li)
      }))
    },function (error) {
     alert('提交失败，改天再来')
  });

let myForm = document.querySelector('#postMessage')
myForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let name = myForm.querySelector('input[name=name]').value;
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
         'name':name,
         'content': content
      }).then((object)=>{
          let li = document.createElement('li')
          li.innerText = `${object.attributes.name} : ${object.attributes.content}`
          let messageList = document.querySelector('#messageList')
          messageList.appendChild(li)
          myForm.querySelector('input[name=name]').value = ''
          myForm.querySelector('input[name=content]').value = ''

      })
})
