//let new_1 =document.getElementById("new")
//new_1.innerHTML="I am cornelius"//


/*let oldElemnt = document.createElement("p");
oldElemnt.innerHTML = "jklm";
document.body.appendChild(oldElemnt);
console.log(oldElemnt);


let newElement=document.createElement("h1");
newElement.innerHTML="pastor";
document.body.replaceChild(newElement,oldElemnt)*/
let input1 = document.querySelector(".leftpart1");
let buttons = document.querySelectorAll(".btn1");
console.log(buttons)
let custom_btn = document.querySelector(".custom");
let input2 = document.querySelector(".leftpart2");
let tip_amnt = document.querySelector(".doll");
let total_amnt = document.getElementById("doll1");
console.log(total_amnt);
let reset_btn = document.getElementById("bb")
console.log(buttons.length);

let tip_value=0;
let bill_value=0;
let people_value=1;

function calculatetip(){
    if(input2.value==""){
        total_amnt.innerHTML = "$" + bill_value.toFixed(2);
    }
    if(input2.value < 1){
        alert("The field for number of people cannot be empty");
        return;
    }
     let tip_calc =(tip_value * bill_value) / 100 / people_value;
     let total_calc =((tip_value * bill_value) / 100 + bill_value)/people_value;

     tip_amnt.innerHTML = "$"+ tip_calc.toFixed(2)
     total_amnt.innerHTML = "$"+ total_calc.toFixed(2)
}

input1.addEventListener("input",function(e){
    console.log("sdrefgf");
    bill_value = Number(input1.value);
    calculatetip()
})

input2.addEventListener("input",function(e){
    console.log("sdrefgf");
    // if(input2.value=0){
    //     return;
    // }
    people_value = Number(input2.value);
    calculatetip();
})

custom_btn.addEventListener("input",function(e){
    buttons.forEach(function(bbtn){
        bbtn.classList.remove("active");
    })
    console.log("sdrefgf");
    tip_value = custom_btn.value;
    calculatetip()
})

reset_btn.addEventListener("click",function(e){
    console.log("button is working")
    location.reload();
    e.preventDefault;
    input1.value="";
    custom_btn.value="";
    input2.value=1;
    tip_amnt.innerHTML = "$"+"0.00";
    total_amnt.innerHTML = "$"+"0.00";
    buttons[2].classList.add("active")
    buttons.forEach(function(btn){
    btn.removeEventListener("click", function(e){
        tip_value=btn.getAttribute("data-tip");
        calculatetip();       
        })
    })
    custom_btn.removeEventListener("input",function(e){
        tip_value = custom_btn.value;
        calculatetip();
    })
})

buttons.forEach(function(btn){//seperate each button from the combined buttons
    console.log(btn);
    btn.addEventListener("click", function(e){//Enables direct clicking on each button
        e.preventDefault;
        buttons.forEach(function(bbtn){//separate each button so the active background shifts onclick
            bbtn.classList.remove("active");
        })
        custom_btn.value="";
        btn.classList.add("active");
        tip_value=btn.getAttribute("data-tip");
        calculatetip();
    })
})

/*input2.addEventListener(`input`,function(e){
    e.preventDefault
    input1.addEventListener(`input`,function(e){
        e.preventDefault
        total_amnt.innerHTML = "$" + input1.value/input2.value;
    })
})
//new class
document.getElementById("new_butt").addEventListener("mouseover",function(e){
    e.preventDefault;
    document.querySelector(`#b`).style.background="yellow";
})*/




