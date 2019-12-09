let myChart = document.getElementById('resultsChart').getContext('2d');

    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';


    let massPopChart = new Chart(myChart, {
      type:'horizontalBar', //bar, horizontalBar, line, doughnut, radar, polar Area
      data: {
        labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[{
          label:'Population',
          data:[
                2345,
                4432,
                5433,
                6234,
                1234,
                5431
          ],
          //backgroundColor = 'green'
          backgroundColor:[
            'rgba(255, 99, 50, 0.6)',
            'rgba(200, 150, 0, 0.6)',
            'rgba(150, 200, 50, 0.6)',
            'rgba(100, 250, 100, 0.6)',
            'rgba(50, 50, 150, 0.6)',
            'rgba(0, 200, 200, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:2,
          hoverBorderColor:'#444'
        }]
      },
      options:{
        title:{
          display: true, 
          text: 'Largest cities in Massachusetts',
          fontSize: 25
        },
        legend: {
          display:true,
          position:'right',
          labels: {
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });