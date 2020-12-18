Chart.plugins.register({
   afterDatasetsDraw: function(chart) {
      if (chart.tooltip._active && chart.tooltip._active.length) {
         var activePoint = chart.tooltip._active[0],
             ctx = chart.ctx,
             y_axis = chart.scales['y-axis-0'],
             x = activePoint.tooltipPosition().x,
             topY = y_axis.top,
             bottomY = y_axis.bottom;
         // draw line
         ctx.save();
         ctx.beginPath();
         ctx.moveTo(x, topY);
         ctx.lineTo(x, bottomY);
         ctx.lineWidth = 2;
         ctx.strokeStyle = '#07C';
         ctx.stroke();
         ctx.restore();
      }
   }
})
var marketing = ['2017-08-05', '2017-08-12'];
var amount = [50, 70];

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2017-08-02', '2017-08-05', '2017-08-09', '2017-08-12', '2017-08-14'],
    datasets: [{
      label: 'LINE',
      data: [3, 1, 4, 2, 5],
      backgroundColor: 'rgba(0, 119, 290, 0.2)',
      borderColor: 'rgba(0, 119, 290, 0.6)'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
