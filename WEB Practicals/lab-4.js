function Check()
{
    reseterror();

    if(document.getElementById("name").value==""){
        document.getElementById("nameerr").innerHTML='Name Field cannot be empty';
    }
    else if(!document.getElementById("name").value.match(/^[A-Za-z\s]*$/)){
        document.getElementById("namerr").innerHTML='Only characters allowed';
    }
    if(document.getElementById("mobile").value==""){
        document.getElementById("mobileerr").innerHTML='Mobile field cannot be empty';
    }
    else if(!document.getElementById("mobile").value.match(/[6789]{1}[0-9]{9}/)){
        document.getElementById("namerr").innerHTML='Wrong format of mobile';
    }
    if(document.getElementById("course").value=="-1"){
        document.getElementById("courseerr").innerHTML='Please select a course';
    }
    if(document.getElementById("email").value==""){
        document.getElementById("emailerr").innerHTML='Please enter a valid email address';
    }
    else if(!document.getElementById("email").value.match(/^[a-zA-Z0-9._!#$%*+=?-]+@[a-a-zA-Z0-9-]+(?:\.[a-a-zA-Z]+)*$/)){
        document.getElementById("emailerr").innerHTML='Wrong format of address';
    }
    if(document.getElementById("pass").value==""){
        document.getElementById("passerr").innerHTML='Password field cannot be empty';
    }
    if(document.getElementById("pass").value==""){
        document.getElementById("passerr").innerHTML='Password field cannot be empty';
    }
    else if(document.getElementById("passcheck").value !=document.getElementById("pass").value){
        document.getElementById("passcheckerr").innerHTML='Password doesnot match';
    }
}
    
function reseterror()
{
document.getElementById("nameerr").innerHTML="";
document.getElementById("moblieerr").innerHTML="";
document.getElementById("courseerr").innerHTML="";
document.getElementById("emailerr").innerHTML="";
document.getElementById("passerr").innerHTML="";
document.getElementById("passcheckerr").innerHTML="";
}

function resetfield()
{
reseterror();
document.getElementById("name").innerHTML="";
document.getElementById("mobile").innerHTML="";
document.getElementById("email").innerHTML="";
document.getElementById("pass").innerHTML="";
document.getElementById("passcheck").innerHTML="";
}
