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
        console.log("hello")
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
    const passwordInput = document.querySelector(".password-input")
    const passwordInputTwo = document.querySelector(".password-input-vxod")
    const btnEye = document.querySelector(".btn-eye")
    const btnEyeTwo = document.querySelector(".btn-eye-vxod")
    const icon = document.querySelector(".icon")
    const iconTwo = document.querySelector(".icon-2")
    let click = true

    function openEye(){
        if(click){
            passwordInput.type = "text"
            passwordInputTwo.type = "text"
            icon.src = "icons/eye.svg"
            iconTwo.src = "icons/eye.svg"
            click = false
        }
        else{
            passwordInput.type = "password"
            passwordInputTwo.type = "password"
            click = true
            icon.src = "icons/eye-fill.svg"
            iconTwo.src = "icons/eye-fill.svg"
        }
    }
    btnEye.addEventListener('click', openEye)
    btnEyeTwo.addEventListener('click', openEye)

    const buttonRegister = document.querySelector(".btn-register")
    const buttonLogin = document.querySelector(".btn-login")
    const usernameInput = document.querySelector(".username-input")
    const emailInputVxod = document.querySelector(".email-input-vxod")
    const passwordInputVxod = document.querySelector(".password-input-vxod")
    const emailInput = document.querySelector(".email-input")

    
    buttonRegister.addEventListener('click', function(){
        usernameInput.value = ""
        emailInput.value = ""
        passwordInput.value = ""
    })
    buttonLogin.addEventListener('click', function(){
        emailInputVxod.value = ""
        passwordInputVxod.value = ""
    })
    
})

