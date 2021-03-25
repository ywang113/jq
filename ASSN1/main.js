const get = (element) => {
    return document.getElementById(`${element}`)
}

const validatePwd = (pwd) => {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/
    return reg.test(pwd)
}

const doubleValidatePwd = (pwd1,pwd2) => {
    return pwd1 === pwd2
}


const loginBtn = get('loginbtn')
const closeFormBtn = get('close')
const userTypeSelect = get('userTypeSelect')
const abnInput = get('abn')
const registForm = get('register')


loginBtn.addEventListener('click', () => {
    document.querySelector('.modal').style.display ='flex';
});


closeFormBtn.addEventListener('click', () => {
    document.querySelector('.modal').style.display ='none';
});

    // add ABN line, if user is host
userTypeSelect.onchange = (event) => {
    const value = event.target.value
    if(value === "host"){
        abnInput.classList.add('active')
        abnInput.required = true
    }
    else{
        abnInput.classList.remove('active')
        abnInput.required = false
    }
}

function RegisterOnSubmit(register){
    // validate password
    const password1 = registForm.password.value
    const password2 = registForm.conpassword.value

    if(validatePwd(password1)){
        // validate passed
        alert("Password Validation Succeeded")
        if(doubleValidatePwd(password1,password2)){
            // TODO: add css to give user feedback
            alert("Password Matched")
        }
        else{
            // TODO: add css to give user feedback
            alert("Password not matched")
        }
    }
    else{
        //validate not passed
        alert("Password need include 6- 12 charators, least 1 lower case letter, 1 uppercase letter, 1 number and one of following special characters ! @ # $")
    }


}



   var x = document.getElementById("login");
   var y = document.getElementById("register");
   var z = document.getElementById("btn");

   function register(){
       x.style.left = "-400px";
       y.style.left = "50px";
       z.style.left = "110px";
   }

   function login(){
       x.style.left = "50px";
       y.style.left = "450px";
       z.style.left = "0";
   }