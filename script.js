document.querySelector('.img-btn').addEventListener('click', function () {
	document.querySelector('.cont').classList.toggle('s-signup')
}
);

function printError(Id, Msg) {
	document.getElementById(Id).innerHTML = Msg;
}
var password = document.getElementById('password');
  function check(elem){
    if (elem.value.length > 0) {
      if (elem.value!=password.value) {
        document.getElementById('alert').innerText = "Confirm password does not match";
      }else {
		document.getElementById('alert').innerText = "";
		
			swal({
				title: "Good job!",
				text: " You have created your account !",
				icon: "success",
			  });
		
	  } 
    }else{
		document.getElementById('alert').innerText = "Please Fill confirm pasword";
	}
  }
function validateForm() {

	var name = document.Form.name.value;
	var email = document.Form.email.value;
	var nameErr = emailErr = true;

	if (name == "") {
		printError("nameErr", "Please enter your name");
		var elem = document.getElementById("name");
		elem.classList.add("input-2");
		elem.classList.remove("input-1");
	} else {
		var regex = /^[a-zA-Z\s]+$/;
		if (regex.test(name) === false) {
			printError("nameErr", "Please enter a valid name");
			var elem = document.getElementById("name");
			elem.classList.add("input-2");
			elem.classList.remove("input-1");
		} else {
			printError("nameErr", "");
			nameErr = false;
			var elem = document.getElementById("name");
			elem.classList.add("input-1");
			elem.classList.remove("input-2");


		}
	}

if (email == "") {
	printError("emailErr", "Please enter your email address");
	var elem = document.getElementById("email");
	elem.classList.add("input-2");
	elem.classList.remove("input-1");
} else {

	var regex = /^\S+@\S+\.\S+$/;
	if (regex.test(email) === false) {
		printError("emailErr", "Please enter a valid email address");
		var elem = document.getElementById("email");
		elem.classList.add("input-2");
		elem.classList.remove("input-1");
	} else {
		printError("emailErr", "");
		emailErr = false;
		var elem = document.getElementById("email");
		elem.classList.add("input-1");
		elem.classList.remove("input-2");

	}
}
if ((nameErr || emailErr) == true) {
	return false;
}
}
