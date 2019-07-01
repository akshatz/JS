profile=localStorage.getItem("userDetails");
profile1=JSON.parse(profile);
var uname=profile1.Username;
function logout(){
    sessionStorage.clear();
}
function edit(){
    // document.getElementById("fname").readOnly=false;
    // document.getElementById("lname").readOnly=false;
    document.getElementById("Address").disabled=false;
    
}
function viewProfile(){
    // document.getElementById("fname").readOnly=true;
    // document.getElementById("lname").readOnly=true;
    // document.getElementById("address").readOnly=true;
    
    var unameSession = sessionStorage.getItem("uname");
    for (var i=0; i< profile.length; i++){
        unameSession=uname;
        document.getElementsByName("gender").value=profile[i].gender
        document.getElementById("Address").value=profile1[i].Address;
        document.getElementById("lname").value=profile1[i].lname;
        document.getElementById("fname").value=profile1[i].fname;
        break;
    }
   
    location.reload;
}