// step-1 add the button 
document.getElementById('btn-submit').addEventListener('click',function(){
//    step-2 get the email address inside the email field 
// always remember to use .value to get text from an input field 
const emailField = document.getElementById('user-email');
const email= emailField.value;

// step-3 get passward 
// set id on the html element 
 const passwordField=document.getElementById('user-password');
 const password= passwordField.value;

//  Do not verify email password on the client  side 

if (email === "mhabir10@gmail.com" && password=== "abcd"){
    window.location.href="bank.html";

}


else{
    alert("Toke ami ei site e dhukte debo na ...")
}

 
})