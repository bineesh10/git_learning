document.getElementById("dataForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const country = document.getElementById("country").value;
  const language = document.getElementById("language").value;

  fetch("submit.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ country, language })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("result").innerHTML = `
      <strong>Country:</strong> ${data.country}<br>
      <strong>Language:</strong> ${data.language}<br>
      <strong>Continent:</strong> ${data.continent}<br>
      <strong>Population:</strong> ${data.population}
    `;
  })
  .catch(err => console.error("Error:", err));
});
