/*Bar chart Nombre de cas positifs au COVID-19*/
const labels = ["11/08", "12/08", "13/08", "14/08", "15/08", "16/08", "17/08"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Cas de COVID-19",
      data: [3416, 3841, 3531, 4231, 4516, 3341, 3559],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 99, 132, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
        "rgb(255, 99, 132)",
      ],
      borderWidth: 0.25,
    },
  ],
};
const config1 = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
var myChart1 = new Chart(document.getElementById("myChart1"), config1);

/*Line chart Total des cas positifs de COVID-19*/
const labels2 = ["06/06", "24/06", "12/07", "30/7", "17/08"];
const data2 = {
  labels: labels2,
  datasets: [
    {
      label: "Cas de COVID-19",
      data: [376, 2234, 14776, 86063, 156186],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};
const config2 = {
  type: "line",
  data: data2,
};

var myChart2 = new Chart(document.getElementById("myChart2"), config2);

/*Horizontal Bar Chart Nombre de cas positifs par région*/
const labels3 = ["Binh Tan", "Binh Chanh", "District 8",
                 "Thu Duc", "Binh Thanh", "Distric 7", "Distric 10",
                 "Hoc Mon", "Distric 12", "Distric 4", "Distric 1",
                 "Distric 3", "Tan Binh", "Go Vap","Distric 11",
                 "Tan Phu","Distric 6","Nha Be","Distric 5","Cu Chi",
                 "Phu Nhuan", "Can Gio"
                ];
const data3 = {
  labels: labels3,
  datasets: [
    {
      axis: "y",
      label: "Cas de COVID-19",
      data: [13492, 12842, 12214, 9458, 8688, 8200,
             7849, 7799, 7614, 7569, 6884, 5914, 5904,
             5675, 5623, 5422, 5403, 5381, 4321, 3949, 1829, 734],
      fill: false,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)"
      

      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)"
      ],
      borderWidth: 1,
    },
  ],
};
const config3 = {
  type: "bar",
  data: data3,
  options: {
    indexAxis: "y",
  },
};
var myChart3 = new Chart(document.getElementById("myChart3"), config3);
