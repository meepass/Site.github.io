var title = localStorage.getItem("title")


if (localStorage.hasOwnProperty("title")) {
    document.title = title

function settitle(title) {
  if (title !== "") {
  localStorage.setItem("title", title)
  document.title = title
  } else {
  localStorage.removeItem("title")
  document.title = "\u200E"
  }
}

function setdefault() {
  settitle("School Heaven")
}
function animateDropDownMore(){
  $()
}
function popUp() {
  if(!localStorage.lol && confirm("By using School Heaven you agree to our Terms Of Service. Press 'ok' if you agree to the Terms, Press 'cancel' to read the Terms of Service.")){
    txt = "You pressed OK!";
  } else {
      
  }
  localStorage.lol=true
}
