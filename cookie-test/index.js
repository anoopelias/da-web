(function() {
  const sendButton = document.getElementById("send");
  let count = getCookie("clientCount") || 0;

  sendButton.addEventListener("click", function() {
    printCookie("Before");
    setCookie("clientCount", ++count);
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === XMLHttpRequest.DONE) {
        printCookie("After");
      }
    }
    xmlhttp.open("GET", "send");
    xmlhttp.send();
  });

  function printCookie(context) {
    console.log(context, "clientCount", getCookie("clientCount"));
    console.log(context, "serverCount", getCookie("serverCount"));
  }

  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  function setCookie(name, value) {
    document.cookie = name + "=" + value + ";";
  }
})();
