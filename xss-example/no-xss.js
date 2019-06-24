(function() {
  const name = document.getElementById("name");
  const displayName = document.getElementById("displayName");

  name.addEventListener("change", function() {
    displayName.textContent = name.value;
  });

})();
