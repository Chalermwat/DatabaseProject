function login(){
  console.log("log in");
  var user = document.getElementsByName("username")[0].value;
  var pass = document.getElementsByName("password")[0].value;
  console.log(user);
  console.log(pass);
  if(user=="user"&&pass=="user"){
    window.location.href = "/member"
  }
  else if(user=="admin"&&pass=="admin"){
    window.location.href = "/admin"
  }
}

function signup(){
  window.location.href="/signup"
}