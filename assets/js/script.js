var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})



const nameInput = document.getElementById("name");
const mail = document.getElementById("mail");
const password = document.getElementById("password");



const signUp = e => {

  function alert() {
    alert("asdfsgd");
  }
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
    localStorage.setItem("isLogin", true);
    exist.preventDefault();
    document.querySelector('form').reset();
    document.getElementById('nameInput').focus();

    // I cant Fix here
    const nameSection = document.querySelector(".nameSection");
    nameSection.innerHTML += `<h4 class="mb-4">Maria Smantha</h4>`
  }
  else {
    alert("This Account has Already Exist!");
  }



  e.preventDefault();


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





// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByClassName("navbar").style.top = "0";
//   } else {
//     document.getElementsByClassName("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }


// var Buttons= document.querySelectorAll(".btn");

// Buttons.localStorage("time", setTimeout());
// Buttons.localStorage("loginDate", setInterval(12,2));