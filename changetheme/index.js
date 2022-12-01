function changeTheme() {
  if (document.getElementById("themes").value == "light") {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }

  if (document.getElementById("themes").value == "dark") {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
  }

  if (document.getElementById("themes").value == "blue") {
    document.body.style.backgroundColor = "#0000ff";
    document.body.style.color = "#ffe600";
  }
}
