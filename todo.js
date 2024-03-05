let input=document.querySelector("input");

const listContainer=document.getElementById("list-container");
function addTask(){
    if(input.value===''){
        alert("You must write something!");
    }else{
    let li=document.createElement("li");
    li.innerText=input.value;
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    }
    input.value="";
    saveData();

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");

    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
});
function saveData(){
   localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
