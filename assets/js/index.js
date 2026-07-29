const viewport = window.innerWidth;
if (viewport <= 768) {
  error415();
}

function error415() {
  const page = (window.location.href = "../../pages/415_error.html");
  return (document.querySelector("body").innerHTML = page);
}
