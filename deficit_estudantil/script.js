function mostrarAba(evt) {
  var abas = document.querySelectorAll(".grid-section");
  for (var i = 0; i < abas.length; i++) {
    if (abas[i].id === evt) {
      abas[i].style.display = "block";
    } else {
      abas[i].style.display = "none";
    }
  }
}

function iniciarFormulario() {
  mostrarAba();
}

const ctx = document.getElementById("grafico1");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2024", "2023", "2022", "2021", "2020", "2019"],
    datasets: [
      {
        label: "Maior Porcentagem",
        backgroundColor: [
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
        ],
        data: [100, 30, 50, 80, 40, 20],
        borderWidth: 1,
        borderColor: "#000",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Educação de Qualidade",
        color: "#fff",
        font: {
          size: 18,
        },
      },
    },
  },
});

const novo = document.getElementById("grafico2");

const data = {
  labels: ["São Paulo", "Belo Horizonte", "Pernambuco"],
  datasets: [
    {
      label:
        "Cidades com maior índice de desempenho de educação com Construindo Sonhos",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(0, 200, 0)",
        "rgb(255, 20, 147)",
        "rgb(255, 255, 0)",
      ],
      hoverOffset: 4,
    },
  ],
};

const chart = new Chart(novo, {
  type: "doughnut",
  data: data,
  labels: ["Rio de Janeiro", "Belo Horizonte", "Pernambuco"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
});
