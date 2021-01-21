const form = document.getElementById('form');
const username = document.getElementById('userName');
const email = document.getElementById('email');
const phone = document.getElementById('phoneNumber');
const password = document.getElementById('password');
const cpassword = document.getElementById('cPassword');

// Add Event
form.addEventListener('submit',(event) => {
    event.preventDefault();
    validate();
})

const sendData = (usernameVal,sRate, count) =>{
    if(sRate === count){
        alert('registration succesfull');
        swal("Welcome! "+usernameVal, "Signup Completed", "success");
        location.href = `index.html?username=${usernameVal}`
    }
}
//For Final Data validation 
const successMsg = (usernameVal) =>{
	let formGrp = document.getElementsByClassName('form-group');
	var count= formGrp.length - 1;
	for (var i = 0; i<formGrp.length; i++ ){
		 if(formGrp[i].className === "form-group success" ){
			 var sRate = 0 + i;
			sendData(usernameVal,sRate,count); 
		 }else{
			 return false;
		 }
			 
	}
} 

//more email  validation
const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
     if(atSymbol < 1) return false;
     var dot = emailVal.lastIndexOf('.');
     if(dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

//define validate function

const validate = () => {
    const usernameVal = userName.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phoneNumber.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal =cPassword.value.trim();

    //username Validation 
    if(usernameVal === "" ){
        setErrorMsg(username,'username cannot be blank');
    }else if(usernameVal.length <= 2 ){
        setErrorMsg(username,'username must be be 3 character');
    }else{
        setSuccessMsg(username);
    }

    //email Validation 
    if(emailVal === "" ){
        setErrorMsg(email,'email cannot be blank');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email,'not a valid email');
    }else{
        setSuccessMsg(email);
    }

    //Phone Number Validation 
    if(phoneVal === "" ){
        setErrorMsg(phone,'number cannot be blank');
    }else if(phoneVal.length != 11 ){
        setErrorMsg(phone,'not a valid phone number');
    }else{
        setSuccessMsg(phone);
    }

     //password Validation 
     if(passwordVal === "" ){
        setErrorMsg(password,'password cannot be blank');
    }else if(passwordVal.length <= 6 ){
        setErrorMsg(password,'password must be be 6 character');
    }else{
        setSuccessMsg(password); 
    }

    //Confirm Password Validation 
    if(cpasswordVal === "" ){
        setErrorMsg(cPassword,'confirm password cannot be blank');
    }else if(passwordVal != cpasswordVal ){
        setErrorMsg(cPassword,'password are not matching');
    }else{
        setSuccessMsg(cPassword); 
    }

    successMsg(usernameVal);

}
// for Error msg
function setErrorMsg (input , errorMsgs) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    formGroup.className = "form-group error";
    small.innerText = errorMsgs;
}
// for Success msg

function setSuccessMsg(input){
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";

}
