document.addEventListener("keypress",function(event){
    makeSound(event.key);
});

function makeSound(data){
    switch (data) {
        case "A":
            var audio1=new Audio("C:\Users\rahul\Downloads\thunder-25689.mp3");
            audio1.play();
            break;
       case "83":
            var audio2=new Audio("./sounds/kick-bass.mp3");
            audio2.play();
            break;
       case "68":
            var audio3=new Audio("./sounds/snare.mp3");
            audio3.play();
            break;
       case "70":
            var audio4=new Audio("./sounds/tom-1.mp3");
            audio4.play();
            break;
        case "71":
            var audio5=new Audio("./sounds/tom-2.mp3");
            audio5.play();
            break;
        case "72":
            var audio6=new Audio("./sounds/tom-3.mp3");
            audio6.play();
            break;
        case "74":
            var audio7=new Audio("./sounds/tom-4.mp3");
            audio7.play();
            break;    
        default: console.log(key);
       }
}