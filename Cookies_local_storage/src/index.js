function setCookies() {
  var firstnameValue = document.getElementById("firstname").value;
  var emailValue = document.getElementById("email").value;
  document.cookie = `firstname=${firstnameValue}; max-age=86400`;
  document.cookie = `email=${emailValue}; max-age=86400`;

  console.log("Cookies set");
}

function showCookies() {
  alert(document.cookie);
}
