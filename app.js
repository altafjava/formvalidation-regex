const name = document.getElementById('name')
name.addEventListener('blur', validateName)
const pincode = document.getElementById('pincode')
pincode.addEventListener('blur', validatePincode)
const email = document.getElementById('email')
email.addEventListener('blur', validateEmail)
const mobile = document.getElementById('mobile')
mobile.addEventListener('blur', validateMobile)

function validateName() {
  const regex = /^[A-Za-z ]{3,20}$/
  if (regex.test(name.value)) {
    name.classList.remove('is-invalid')
  } else {
    name.classList.add('is-invalid')
  }
}
function validatePincode() {
  const regex = /^[1-9][0-9]{5}$/
  if (regex.test(pincode.value)) {
    pincode.classList.remove('is-invalid')
  } else {
    pincode.classList.add('is-invalid')
  }
}
function validateEmail() {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (regex.test(email.value)) {
    email.classList.remove('is-invalid')
  } else {
    email.classList.add('is-invalid')
  }
}
function validateMobile() {
  const regex = /^[6-9]\d{9}$/
  if (regex.test(mobile.value)) {
    mobile.classList.remove('is-invalid')
  } else {
    mobile.classList.add('is-invalid')
  }
}
