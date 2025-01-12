let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn=>{
    btn.addEventListener("click",e=>{

        let elementId =e.currentTarget.id;

        if(elementId=='decrease'){
            count--;
        }
        else if(elementId=='increase'){
            count++;
        }
        else{
            count =0;
        }

        value.textContent = count;  
        value.style.color =count >0 ? "green" : count < 0 ? "red" :  " #007bff"

    }); 
});

