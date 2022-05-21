function aler(){
    alert("Loading Weather Report...")
    console.log("working")
}

var cookiebar = document.querySelector("#cookiebar")
function disappear(){
    cookiebar.style.display = ("none")
}








var isfahrenheit = true
function convert(element){
    var temperature1 = document.querySelector("#t1")
    var temperature2 = document.querySelector("#t2")
    var temperature3 = document.querySelector("#t3")
    var temperature4 = document.querySelector("#t4")
    var temperature5 = document.querySelector("#t5")
    var temperature6 = document.querySelector("#t6")
    var temperature7 = document.querySelector("#t7")
    var temperature8 = document.querySelector("#t8")
    if (isfahrenheit==true){
       
        temperature1.innerText = 24 + "°"
        temperature2.innerText = 18 + "°"
        temperature3.innerText = 27 + "°"
        temperature4.innerText = 19 + "°"
        temperature5.innerText = 21 + "°"
        temperature6.innerText = 16 + "°"
        temperature7.innerText = 26 + "°"
        temperature2.innerText = 21 + "°"
        isfahrenheit=false
    }
    
    else {
        
        temperature1.innerText = 75 + "°"
        temperature2.innerText = 65 + "°"
        temperature3.innerText = 80 + "°"
        temperature4.innerText = 66 + "°"
        temperature5.innerText = 69 + "°"
        temperature6.innerText = 61 + "°"
        temperature7.innerText = 78 + "°"
        temperature2.innerText = 70 + "°"
        isfahrenheit=true
    }

    //    this is what is left of a previous failed attempt--please ignore
    
    //*/ var temp = document.querySelector("#t" + i);
    //     var val = temp.innerText
        
    //     if (element.value == "°C"){
    //         function tocelcius(val){
    //             val = ((val -32)*(5/9))
    //             return val
    //             console.log(working)
    //         } 
    //     }else {
    //             val = temp.innerText
    //             return val
    //             console.log(val)
    //             }/*
        
    
}
