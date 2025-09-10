document.getElementById("getWeather").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Enter a city");

  // Prompt user for API key (safe for GitHub push)
  const apiKey = prompt("Enter your Weather API key:");
  if (!apiKey) return alert("API key is required");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod !== 200) throw new Error(data.message);

    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Condition: ${data.weather[0].description}</p>
    `;
  } catch (err) {
    alert("Error: " + err.message);
  }
});
