const emailLoginLabel = document.getElementById('emailLoginLabel')
const passwordLoginLabel = document.getElementById('passwordLoginLabel')
const inputEmailLogin = document.getElementById('inputEmailLogin')
const inputPasswordRegister = document.getElementById('inputPasswordLogin')
const buttonSubmitLogin = document.getElementById('btnSubmitLogin')
const errorTextEmailLogin = document.getElementById("errorTextEmailLogin")
const errorTextPasswordLogin = document.getElementById("errorTextPasswordLogin")

buttonSubmitLogin.addEventListener('click',(event) =>{
  event.preventDefault()
  let TextEmailLogin = ""
  let TextPasswordLogin = ""
  
  const email = inputEmailLogin.value
  if(email == "")
  {
    emailLoginLabel.style.color = 'red'
    inputEmailLogin.style.borderBottomColor = 'red'
    inputEmailLogin.classList.add('erroractive')
    TextEmailLogin += "email harus diisi<br>"
  }
  
  const passsword = inputPasswordRegister.value
  if(passsword == "")
  {
    passwordLoginLabel.style.color = 'red'
    inputPasswordRegister.style.borderBottomColor = 'red'
    inputPasswordRegister.classList.add('erroractive')
    TextPasswordLogin += "password harus diisi<br>"
  }
  errorTextEmailLogin.innerHTML = TextEmailLogin
  errorTextPasswordLogin.innerHTML = TextPasswordLogin
})
