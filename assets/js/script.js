var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})




const nameInput = document.getElementById("name")
const mail = document.getElementById("mail")
const password = document.getElementById("password")


const signUp = e => {
  let nameInput = document.getElementById('name').value,
    mail = document.getElementById('mail').value,
    password = document.getElementById('password').value;

  let formData = JSON.parse(localStorage.getItem('formData')) || [];


  let exist = formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(data =>
      data.nameInput.toLowerCase() == nameInput.toLowerCase()
    );

  if (!exist) {
    location.pathname = "index.html";
    window.location.replace("/index.html");
    formData.push({ nameInput, mail, password });
    localStorage.setItem('formData', JSON.stringify(formData));
    document.querySelector('form').reset();
    document.getElementById('nameInput').focus();
    alert("Account Created.\nPlease Sign In Now.");
    exist.preventDefault();

  }
  else {
    alert("This Account has Already Exist!");
  }

 
  e.preventDefault();

  // const strength=document.getElementsByClassName("strength");

}

function signIn(e) {
  let mail = document.getElementById('mail').value, password = document.getElementById('password').value;
  let formData = JSON.parse(localStorage.getItem('formData')) || [];
  let exist = formData.length &&
    JSON.parse(localStorage.getItem('formData')).some(data => data.mail.toLowerCase() == mail && data.password.toLowerCase() == password);
  if (!exist) {
    alert("Incorrect login informations");
  }

  else {
    location.pathname = "index.html";
    window.location.replace("/index.html");
  }

  e.preventDefault();
}



