(function() {
  const sendButton = document.getElementById("send");
  let count = 0;

  sendButton.addEventListener("click", function() {
    setCookie("clientCount", count++);
    printCookie();
    console.log("Sending request");
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      console.log("Got response");
      if (xmlhttp.readyState === XMLHttpRequest.DONE) {
        setTimeout(printCookie, 0);
      }
    }
    xmlhttp.open("GET", "send");
    xmlhttp.send();
  });

  function printCookie() {
    console.log("Client cookie", document.cookie);
  }

  function setCookie(name, value) {
    document.cookie = name + "=" + value + ";";
  }
})();
