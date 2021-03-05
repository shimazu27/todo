
var addTask = function(){
    var dataList = {
      name:document.getElementById("name").value,
      todo:document.getElementById("todo").value,
      option:document.getElementById("option").value
    };
    var key = document.getElementById("name").value;
      localStorage.setItem(key,JSON.stringify(dataList));

    var form1 = document.getElementById("name");
    var form2 = document.getElementById("todo");
    var form3 = document.getElementById("option");
    form1.value = "";
    form2.value = "";
    form3.value = "";
    viewTask();
};

var removeTask = function(key){
    localStorage.removeItem(key);
    viewTask();
};

var clearTasks = function(){
    localStorage.clear();
    viewStorage();
};

var viewTask = function(){
    var tb = document.getElementById("tb");

    while(tb.firstChild){
      tb.removeChild(tb.firstChild);
    }

    for (var i=0; i < localStorage.length; i++) {
        var _key = localStorage.key(i);
        var data = JSON.parse(window.localStorage.getItem(_key));
        var _name = data.name;
        var _todo = data.todo;
        var _option = data.option;
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        tb.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        td1.innerHTML = _name;
        td2.innerHTML = _todo;
        td3.innerHTML = _option;
        td4.innerHTML = '<input type="button" onclick="removeTask(\'' + _key + '\')" value="削除">';
    };
};

window.onload = function() {
    viewTask();

    document.getElementById("add").onclick = function() {
        addTask();
    };

    document.getElementById("clear").onclick = function() {
        clearTasks();
    };
};
