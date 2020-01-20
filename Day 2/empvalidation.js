function validate(){
    alert("Enter the details");

    var name=document.getElementById("name").value;
    var code=document.getElementById("code").value;

    if(name=="")
    {
        document.getElementById("name-error").innerHTML="Name is required.";
    }
    else
    {
        document.getElementById("name-error").innerHTML="";
    }

    if(code=="")
    {
        document.getElementById("code-error").innerHTML="Emp code is required.";
    }
    else
    {
        document.getElementById("code-error").innerHTML="";
    }

}