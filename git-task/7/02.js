var form = document.getElementById('form');
var text = document.querySelector('[type=text]')
var btn = document.getElementById('btn')

btn.onclick = function () {
    var formData = new FormData(form)
    formData.get('name')
    formData.append("message", "afcs")
    fetch('http://anonym.ink:8000/homework/fufubot_test', { //请求的服务器地址
        body: formData,  //请求的数据
        // body:{name:"mumu",age:20}, //第二种请求数据的方法json
        method: "POST", //请求方法
        headers: {  //请求头信息
            // 'Content-Type': 'application/x-www-form-urlencoded' //用url编码形式处理数据
            'Content-Type': 'application/json' //第二种请求头编写方式json
        }
    })
        .then(res => res.text())
        .then(res => { console.log(res); })
        .then(res => { return res })

}

