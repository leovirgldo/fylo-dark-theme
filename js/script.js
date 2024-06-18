let inputEmail = document.querySelector("#email");
let button = document.querySelector("#button");
let message = document.querySelector(".error");
let form = document.querySelector("form")
let boxInput = document.querySelector("#button");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = inputEmail.value;
    const getEmail = validateEmail(email);

    if(getEmail){
        message.textContent = '';
        button.style.marginTop = "28px";
        inputEmail.value = '';
        if(innerWidth > 991){
            boxInput.style.marginTop = "11px";
        };
    }else{
        message.textContent = 'Please enter a valid email address';
        boxInput.style.marginTop = "12px";
    }
})

const validateEmail = (email) =>{
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email);
}