// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var token = '';

chrome.storage.sync.get('token', function(data) {
    token = data.token;
    console.log('Just got this token: ',token);
  });




let link = document.URL;
let name = document.getElementById('name');
let shipp = document.getElementById('shipping');
let category = document.getElementById('category');
let button2 = document.getElementById('button');
let tab1 = ''
chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            // and use that tab to fill in out title and url
            var tab = tabs[0];   
            console.log(tab.url)  
            tab1=tab.url       
        });

button2.onclick = function(element) {
  	//var form = document.createElement("form");
  	//form.setAttribute("method", "post");
    //form.setAttribute("action", "buy4me.com/add");//name of endpoint
    //form.setAttribute("action", "http://localhost:8080/b4m/extension/create_item");
    var l2="http://localhost:8080/b4m/extension/create_item"
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
    name = document.getElementById('name');
    console.log(name)
    var request = new XMLHttpRequest();
    request.onreadystatechange= function () {
        if (request.readyState==4 && request.status == 200) {
            console.log(tab1)//is sent with this url
            var st=name.value + " added to ";
            st=st+ category.value;
            alert(st);
            location.href = 'popup.html';
        }else if (request.readyState==4 && request.status == 400){
            var st="Error adding"
            alert(st);
            location.href = 'popup.html';
        }
    }
    request.open("POST", l2, true);
    request.setRequestHeader("token", token);
    //console.log(tab1)
    request.setRequestHeader("url", tab1);
    request.setRequestHeader("name", name.value);
    request.setRequestHeader("shipping", shipp.value);
    request.setRequestHeader("alarm_value", 0);
    request.setRequestHeader("category_name", category.value);
    request.setRequestHeader("Content-Type", "application/json");
    request.send("");





   // form.setAttribute("action", l2);
    //console.log('sending to: ',l2);
    /*var toke = document.createElement("input");
    toke.setAttribute("type", "hidden");
    toke.setAttribute("name", "token");
    toke.setAttribute("value", token.value);
    form.appendChild(toke);
    var lin = document.createElement("input");
    lin.setAttribute("type", "hidden");
    lin.setAttribute("name", "link");
    lin.setAttribute("value", link.value);
    form.appendChild(lin);
    var nam = document.createElement("input");
    nam.setAttribute("type", "hidden");
    nam.setAttribute("name", "name");
    nam.setAttribute("value", name.value);
    form.appendChild(nam);
    var ship = document.createElement("input");
    ship.setAttribute("type", "hidden");
    ship.setAttribute("name", "shipp");
    ship.setAttribute("value", shipp.value);
    form.appendChild(ship);
    var categor = document.createElement("input");
    categor.setAttribute("type", "hidden");
    categor.setAttribute("name", "category");
    categor.setAttribute("value", category.value);
    form.appendChild(categor);*/
    //document.body.appendChild(form);
   // form.submit();
    
  
};
