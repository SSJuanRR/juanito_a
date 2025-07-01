function mostrarResultados() {
  const inputs = document.querySelectorAll('.informacion');
  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = "<h3>--- Resultados y premios ---</h3>";

  const premios = [
    "$1,000,000",
    "$500,000",
    "$250,000",
    "$100,000",
    "Medalla",
  ];

  inputs.forEach((input, index) => {
    const nombre = input.value.trim() || "Desconocido";
    let premio = "";

    if (index < premios.length) {
      premio = premios[index];
    } else {
      premio = "Un dulce";
    }

    const resultado = `${index + 1}. ${nombre} - Premio: ${premio}`;
    const p = document.createElement("p");
    p.textContent = resultado;
    resultadosDiv.appendChild(p);
  });
}