function konversiSuhu(celcius) {
    return {
        fahrenheit: (9 / 5) * celcius + 32,
    };
}

const form = document.getElementById("converter");
const tbody = document.getElementById("table-body");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(
        new FormData(e.target)
    );

    const celcius = Number(data.celcius);
    const { fahrenheit } = konversiSuhu(celcius);

    const row = document.createElement("tr");

    const tdCelcius = document.createElement("td");
    tdCelcius.textContent = `${celcius}°C`;

    const tdFahrenheit = document.createElement("td");
    tdFahrenheit.textContent = `${fahrenheit}°F`;

    const tdHasil = document.createElement("td");
    tdHasil.textContent = `${celcius}°C = ${fahrenheit}°F`;

    row.appendChild(tdCelcius);
    row.appendChild(tdFahrenheit);
    row.appendChild(tdHasil);

    tbody.appendChild(row);

    form.reset();
});