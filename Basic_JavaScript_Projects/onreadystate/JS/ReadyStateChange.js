function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("change").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
  }