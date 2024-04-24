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
        data: [60, 33, 25, 15, 5, 20],
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
  labels: ["Bahia", "Amazonas", "São Paulo"],
  datasets: [
    {
      label:
        "Cidades com maior índice de desempenho de educação com Construindo Sonhos",
      data: [250, 250, 250],
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
  labels: ["Bahia", "Amazonas", "São Paulo"],
  datasets: [
    {
      label: "My First Dataset",
      data: [250, 250, 250],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Estados com maior desempenho da Educação Digital",
        color: "#fff",
        font: {
          size: 18,
        },
      },
    },
  },
});

const dados = document.getElementById("grafico3");

new Chart(dados, {
  type: "bar",
  data: {
    labels: ["2030", "2029", "2028", "2027", "2026", "2025"],
    datasets: [
      {
        label: "100%",
        backgroundColor: [
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
        ],
        data: [100, 50, 50, 45, 40, 70],
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
        text: "Meta para 2030",
        color: "#fff",
        font: {
          size: 18,
        },
      },
    },
  },
});
