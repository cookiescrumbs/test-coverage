export const chartOptions = {
    title: {
      display: true,
        text: 'Automated, Manual & Total number of Requirements per Domain'
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Manual'
        }
      }],
      xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Automated'
          }
      }]
    },
    legend: {
      display: true,
      position: 'bottom'
    }
  };
