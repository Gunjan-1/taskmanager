let inputs = document.getElementById("data");
let text = document.querySelector(".text")

 function Add(){
    if(inputs.value == ""){
        alert("please enter task data");
    }else{
        let newdata = document.createElement("li");
        newdata.innerHTML = inputs.value;
        text.appendChild(newdata);
        let button =document.createElement("button");
        button.innerHTML="remove";
        newdata.appendChild(button);
    }
    inputs.value="";
     SetData();
}
  text.addEventListener("click", function(a){
        if(a.target.tagName ==="LI"){
            a.target.classList.toggle("checked");
            SetData();
        }else if(a.target.tagName==="BUTTON"){
            a.target.parentElement.remove();
             SetData();
        }
    },false);

    function SetData(){
        localStorage.setItem("datacheck",text.innerHTML);
    }
    function Getdata(){
       text.innerHTML=localStorage.getItem("datacheck");
    }
    Getdata();
