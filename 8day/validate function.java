function validate(){

    var regForm = document.reg;
    var firstname = regForm.fn;
    var lastname = regForm.ln;
    var pass = regForm.pw;
    var confirmPass = regForm.cpw;
    var gender = regForm.gen;
    var technology = regForm.tech;

    if(firstname.value.length < 3){
        alert("FirstName should be more than 3 characters!");
        return false;
    }
    if (lastname.value.length < 3){
        alert("LastName should be more than 3 characters!");
        return false;
    }
    if(pass.value.length < 3){
        alert("Password must be more than 3 characters!");
        return false;
    }
    if(pass.value != confirmPass.value){
        alert("Password and Confirm Password should match!");
        return false;
    }
    if(gender.value.length < 1){
        alert("Gender must be selected!");
        return false;
    }
    var flag = false;
    for(var i = 0; i < technology.length; i++){
        if(technology[i].checked){
            flag = true;
        }
    }
    if(flag == false){
        alert("Atleast 1 Skill must be selected");
        return false;
    }
    return true;
}