// JavaScript Document
<canvas id="chart"></canvas>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
fetch('/api/data')
.then(r => r.json())
.then(data => {
  new Chart(document.getElementById("chart"), {
    type: 'line',
    data: {
      labels: data.time,
      datasets: [{
        label: 'Temperature',
        data: data.temp
      }]
    }
  });
});
</script>
