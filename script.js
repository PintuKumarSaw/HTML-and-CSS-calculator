
let result ="";

let btn = document.querySelectorAll('.button');

Array.from(btn).forEach(b => {
    b.addEventListener("click", (e)=>{

        console.log(e.target);

        if(e.target.innerHTML == "="){

            if(result.length > 0){
            result = eval(result);
            document.getElementById("insertValue").value = result;
            }
        }

        else if(e.target.innerHTML == "AC"){
            result = "00";
            document.getElementById("insertValue").value = result;
        }
        
        else if(e.target.innerHTML == "x"){
            result = result.slice(0, result.length-1);
            document.getElementById("insertValue").value = result;
        }

        else if (e.currentTarget.innerHTML =="+" || e.target.innerHTML=="-" || e.target.innerHTML=="*" || e.target.innerHTML=="/" || e.target.innerHTML=="%"){
            if(result.length>0){
                result = result+e.target.innerHTML;
                document.getElementById("insertValue").value = result;
            }
        }
    

        else{
            if(result == "00"){
                result =e.target.innerHTML;
                document.getElementById("insertValue").value = result;  
            }
            else{
                result = result +  e.target.innerHTML;
                document.getElementById("insertValue").value = result;
            }

        }
    })
});
    



