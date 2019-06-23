(function() {
  const name = document.getElementById("name");
  const displayName = document.getElementById("displayName");

  name.addEventListener("change", function() {
    const value = '<img src="xx" onerror="alert(\'xss attack\')" />';
    displayName.innerHTML = name.value;//value;
  });

})();
