
'use strict';

let token = '#123';
//location.href = 'login.html';
var button = document.getElementById('button');
let email = document.getElementById('email');
let password = document.getElementById('password');



chrome.storage.sync.get('token', function(data) {
    token = data.token;
    console.log('Just got this token: ',token);
    var request2 = new XMLHttpRequest();
var l3="http://localhost:8080/b4m/extension/verify"
request2.onreadystatechange= function () {
    console.log("fez")
    if (request2.readyState==4 && request2.status == 200) {
        location.href = 'popup.html';
    }else if (request2.readyState==4 && request2.status == 404){
    

        button.onclick = function(element) {
            var l2="http://localhost:8080/b4m/extension/login"
            /*l2=l2+"token="
            l2=l2+token
            l2=l2+"&link="
            l2=l2+link
            l2=l2+"&name="
            l2=l2+name.value
            l2=l2+"&shipp="
            l2=l2+shipp.value
            l2=l2+"&category="
            l2=l2+category.value*/


            var request = new XMLHttpRequest();
            request.onreadystatechange= function () {
                if (request.readyState==4 && request.status == 200) {
                    var json = JSON.parse(request.responseText);
                    chrome.storage.sync.set({token: json.token}, function() {
                        console.log('token set.',json.token);
                      });
                    chrome.storage.sync.set({categories: json.categories}, function() {
                        console.log('cats  set.',json.categories);
                      });
                    location.href = 'popup.html';
                }else if (request.readyState==4 && request.status == 400){
                    location.href = 'login.html';
                }
            }
            request.open("PUT", l2, true);
            request.setRequestHeader("email", email.value);
            request.setRequestHeader("password", password.value);
            request.setRequestHeader("Content-Type", "application/json");
            request.send("");
        }
    }

}
request2.open("PUT", l3, true);
request2.setRequestHeader("Content-Type", "application/json");
console.log('TOKEN TO SEND: ',token);
request2.setRequestHeader("token", token);
request2.send("");



  });




