const namaRegisterLabel = document.getElementById('namaRegisterLabel')
const emailRegisterLabel = document.getElementById('emailRegisterLabel')
const passwowrdRegisterLabel = document.getElementById('passwowrdRegisterLabel')
const re_passwordRegisterLabel = document.getElementById('re_passwordRegisterLabel')
const ageRegisterLabel = document.getElementById('ageRegisterLabel')
const agreementRegisterLabel = document.getElementById('agreementRegisterLabel')

const namaRegister = document.getElementById('namaRegister')
const emailRegister = document.getElementById('emailRegister')
const passwordRegister =document.getElementById('passwordRegister')
const re_passwordRegister = document.getElementById('re_passwordRegister')
const ageRegister = document.getElementById('ageRegister')
const agreementRegistere = document.getElementById('agreementRegistere')

const errorTextnamaRegister = document.getElementById('errorTextNamaRegister')
const errorTextemailRegister = document.getElementById('errorTextEmailRegister')
const errorTextpasswordRegister =document.getElementById('errorTextPasswordRegister')
const errorTextre_passwordRegister = document.getElementById('errorTextRePasswordRegister')
const errorTextageRegister = document.getElementById('errorTextAgeRegister')
const errorTextagreementRegistere = document.getElementById('errorTextAgreementRegister')
const btnSubmitRegister = document.getElementById('btnSubmitRegister')


btnSubmitRegister.addEventListener('click',(event) =>{
  event.preventDefault()
  let text_namaRegister_value_default = ""
  let text_emailRegister_value_default = ""
  let text_passwordRegister_value_default = ""
  let text_re_passwordRegister_value_default = ""
  let text_agreRegister_value_default = ""
  let text_agreementRegistere_value_default = ""

  const namaRegisterValue = namaRegister.value
  const emailRegisterValue = emailRegister.value
  const passwordRegisterValue = passwordRegister.value
  const re_passwordRegisterValue = re_passwordRegister.value
  const agreRegisterValue = ageRegister.value
  const agreementRegistereValue = agreementRegistere.value
  
  if(namaRegisterValue == "")
  {
    namaRegisterLabel.style.color = 'red'
    namaRegister.style.borderBottomColor = 'red'
    namaRegister.classList.add('erroractive')
    text_namaRegister_value_default += "nama harus diisi<br>"
  }
  if(emailRegisterValue == "")
  {
    emailRegisterLabel.style.color = 'red'
    emailRegister.style.borderBottomColor = 'red'
    emailRegister.classList.add('erroractive')
    text_emailRegister_value_default += "email harus diisi<br>"
  }
  if(passwordRegisterValue == "")
  {
    passwowrdRegisterLabel.style.color = 'red'
    passwordRegister.style.borderBottomColor = 'red'
    passwordRegister.classList.add('erroractive')
    text_passwordRegister_value_default += "password harus diisi<br>"
  }
  if(re_passwordRegisterValue == "")
  {
    re_passwordRegisterLabel.style.color = 'red'
    re_passwordRegister.style.borderBottomColor = 'red'
    re_passwordRegister.classList.add('erroractive')
    text_re_passwordRegister_value_default += "re password harus diisi<br>"
  }


  if(agreRegisterValue == "")
  {
    ageRegisterLabel.style.color = 'red'
    ageRegister.style.borderBottomColor = 'red'
    ageRegister.style.color = 'red'
    text_agreRegister_value_default += "date harus diisi<br>"
  }
  if(!agreementRegistere.checked)
  {
    agreementRegisterLabel.style.color = 'red'
    agreementRegistere.style.borderBottomColor = 'red'
    agreementRegistere.style.color = 'red'
    text_agreementRegistere_value_default += "agreement harus diisi"
  }


  errorTextnamaRegister.innerHTML = text_namaRegister_value_default
  errorTextemailRegister.innerHTML = text_emailRegister_value_default
  errorTextpasswordRegister.innerHTML = text_passwordRegister_value_default
  errorTextre_passwordRegister.innerHTML = text_re_passwordRegister_value_default
  errorTextageRegister.innerHTML = text_agreRegister_value_default
  errorTextagreementRegistere.innerHTML = text_agreementRegistere_value_default

})