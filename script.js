const inputbox=document.querySelector("#inputTask");
const addButton=document.querySelector("#addButton");
const tasklist=document.querySelector(".tasklist");


addButton.addEventListener("click",function(){
    if(inputbox.value===""){
        alert("Please enter a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        tasklist.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00D7"; 
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();

})
tasklist.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    

    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",tasklist.innerHTML);
}
function referseshowdata(){
    tasklist.innerHTML=localStorage.getItem("data");
}
referseshowdata();
