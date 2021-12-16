httpPostTest();
function httpPostTest() {

    var url = 'http://anonym.ink:8000/homework/get_homework';

    var xhr = new XMLHttpRequest();

    xhr.responseType = "text";

    xhr.open('POST', url);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");

    xhr.send();
    xhr.onload = function (e) {

        console.log('onload e====>' + JSON.stringify(e));

    };

    xhr.onreadystatechange = function (e) {

        console.log('onreadystatechange e====>' + JSON.stringify(e));

        if (xhr.readyState == 4 && xhr.status == 200) {

            var xhrRes = xhr.responseText;

            console.log('return message====>' + xhrRes);

        }

    };

}