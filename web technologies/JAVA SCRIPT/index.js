function loadjson(file,callback){
    var xhr= new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

loadjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    details(data);
})
var s=document.querySelector(".main");
function details(dt){
    console.log(dt.college);
    var h1=document.createElement("h1");
    h1.textContent=dt.name;
    s.appendChild(h1);

    var clg=document.createElement("p")
    var clg=document.createElement("h3");
    h3.textContent=dt.address;
    s.appendChild(h3);
}