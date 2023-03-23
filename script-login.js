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
    TextEmailLogin += "e-mail is required<br>"
  }else if(!email.includes("@gmail.com"))
  {
      TextEmailLogin += "invalid e-mail must be contain @gmail.com<br>"
  }else
  {
    emailLoginLabel.style.color = 'black'
    inputEmailLogin.style.borderBottomColor = 'black'
    TextEmailLogin += ""
  }

  
  
  const passsword = inputPasswordRegister.value
  if(passsword == "")
  {
    passwordLoginLabel.style.color = 'red'
    inputPasswordRegister.style.borderBottomColor = 'red'
    inputPasswordRegister.classList.add('erroractive')
    TextPasswordLogin += "password is required<br>"
  }else
  {
    passwordLoginLabel.style.color = 'black'
    inputPasswordRegister.style.borderBottomColor = 'black'
    TextPasswordLogin += ""
  }
  errorTextEmailLogin.innerHTML = TextEmailLogin
  errorTextPasswordLogin.innerHTML = TextPasswordLogin
})
