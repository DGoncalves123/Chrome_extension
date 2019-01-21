
'use strict';

window.onload = function () {
    var select = document.getElementById("category");
    for(var i = 2011; i >= 1900; --i) {
        var option = document.createElement('option');
        option.text = option.value = i;
        select.add(option, 0);
    }
};