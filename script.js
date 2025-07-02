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
        span.innerHTML="\u00D7"; // Unicode for multiplication sign
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
    //toggle means to add the class if it is not present, or remove it if it is present
    //classlist is a property of the element that returns a collection of the class names of the element

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