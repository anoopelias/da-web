(function() {
  const sendButton = document.getElementById("send");

  sendButton.addEventListener("click", function() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === XMLHttpRequest.DONE) {
        console.log("Request complete");
      }
    }
    xmlhttp.open("GET", "http://abc.com:3000/send");
    xmlhttp.send();
  });

})();
