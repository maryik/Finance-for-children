document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector(".btn")
    const buttonTwo = document.querySelector(".btn-2")
    let imagePart = document.querySelector(".image-part")
    const text = document.querySelector(".text")
    const logo = document.querySelector(".logo")
    const signIn = document.querySelector(".sign-in")
    const logoVxod = document.querySelector(".logo-vxod")

    logoVxod.style.display = "none"
    button.addEventListener('click', function(){
        imagePart.classList.remove('move-right')
        imagePart.classList.add('move-left')
        text.textContent = "Sign In to name"
        logo.style.display = "none"
        logoVxod.style.display = "block"
    })
    buttonTwo.addEventListener('click', function(){
        imagePart.classList.remove('move-left')
        imagePart.classList.add('move-right')
        text.textContent = "Sign Up to name"
        logo.style.display = "block"
        logoVxod.style.display = "none"
    })
    const usernameInput = document.querySelector(".username-input")
    const emailInput = document.querySelector(".email-input")
    const passwordInput = document.querySelector(".password-input")
    const buttonRegister = document.querySelector(".btn-register")
    const buttonLogin = document.querySelector(".btn-login")
    const emailInputVxod = document.querySelector(".email-input-vxod")
    const passwordInputVxod = document.querySelector(".password-input-vxod")

    buttonRegister.addEventListener('click', function(){
        if(usernameInput.value == "" || emailInput.value == "" || passwordInput.value == ""){
            alert("Заполните все поля")
        }
        else if(passwordInput.value.length < 8){
            alert("Пароль должен быть больше 8 символов")
        }
        else if(emailInput.value.indexOf("@") == -1){
            alert("Введите почту верно")
        }
        else{
            alert("Вы зарегистрировались")
            const register = {
                username: usernameInput.value,
                email: emailInput.value,
                password:  passwordInput.value,
            }
            usernameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
            
            localStorage.setItem('registerData', JSON.stringify(register));
            let registerData = localStorage.getItem('registerData')
            registerData = JSON.parse(registerData)
            console.log(registerData)
        }
    });
    buttonLogin.addEventListener('click', function(){
        let person = localStorage.getItem('registerData')
        person = JSON.parse(person)
        console.log(person)
        console.log(emailInputVxod.value)
        console.log(passwordInputVxod.value)
        if(emailInputVxod.value == person.email && passwordInputVxod.value == person.password){
            alert("Добро пожаловать!")
            window.location.href = "/pages/glav.html"
        }
        else if(emailInputVxod.value != person.email){
            alert("Неправильная почта")
        }
        else if(passwordInputVxod.value != person.password){
            alert("Неправильный пароль")
        }
        else{
            alert("Такого пользователя не существет")
        }
        emailInputVxod.value = ""
        passwordInputVxod.value = ""
    })
    for (item in localStorage){
        console.log(item)
    }
})


