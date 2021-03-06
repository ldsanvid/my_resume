var trace0= {
    x: [12],
    y: ['CD'],
    name: '2015',
    orientation: 'h',
    marker: {
      color: 'rgba(87, 20, 255, 1)',
      width: 1
    },
    type: 'bar'
  };
  
  
  var trace3 = {
    x: [25],
    y: ['CD'],
    name: '2019',
    orientation: 'h',
    marker: {
      color: 'rgba(15, 239, 255, 1)',
      width: 1
    },
    type: 'bar'
  };
  
  var data2= [trace0, trace3];
  
  var layout2 = {
    title: "Porcentaje de votación de Centro Democrático en el Norte de Santander",
    barmode: 'stack', xaxis:{title: '% de votación'}
  };
  
  Plotly.newPlot('plot', data2, layout2);
  
  var trace1 = {
    x: ['VAMOS', 'UNE'],
    y: [12, 22],
    name: 'Primera vuelta',
    marker: {color: 'rgba(87, 255, 15, 1)'},
    type: 'bar',
  };
  
  var trace2 = {
    x: ['VAMOS', 'UNE'],
    y: [58, 42],
    name: 'Segunda vuelta',
    marker: {color: 'rgba(50, 168, 0, 1)'},
    type: 'bar',
  };
  
  var data = [trace1, trace2];
  
  var layout = {barmode: 'stack', title:'Elección Presidencial de 2019', xaxis:{title: 'Candidatos'}, yaxis: {
    title: '% de votación'}}
  
  Plotly.newPlot('plot2', data, layout);
  
  var trace4 = {
    x: ['Encuesta de diciembre','Encuesta de febrero', "1° encuesta de marzo", "2° encuesta de marzo", "Encuesta de abril", "Resultado de la elección"],
    y: [20, 24, 25, 26, 27, 30],
    name:'Cambio Democrático',
    marker: {color: 'rgba(0, 168, 163, 1)'},
    type: 'scatter',
  }
  
  var trace5 = {
    x: ['Encuesta de diciembre','Encuesta de febrero', "1° encuesta de marzo", "2° encuesta de marzo", "Encuesta de abril", "Resultado de la elección"],
    y: [52, 48, 44, 39, 36, 33],
    name:'PRD',
    marker: {color: 'rgba(245, 0, 0, 1)'},
    type: 'scatter',
  }
  
  var data3 = [trace4, trace5];
  
  var layout3 = {
    title:'Seguimiento de encuestas y resultado final', yaxis:{title:"%"}
  };
  
  Plotly.newPlot('plot3', data3, layout3)
  
  var trace7 = {
    x: [8,17],
    y: ['Encuesta', 'Resultado'],
    mode: 'markers',
    marker: {
      size:[40,90], color: 'rgba(245, 147, 0, 1)'}
  };
  
  var data4 = [trace7];
  
  var layout4 = {
    title:'Seguimiento de encuestas y resultado final', yaxis:{title:"%"}
  };
  
  Plotly.newPlot('plot4', data4, layout4)
