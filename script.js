const orbitData = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 14, 10, 6];
const orbitLabels = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p']
const orbitData_test = [2, 2, 6, 2, 3, 1, 4, 2,1 ,1 ,1 ,1,6]
const orbitScale = 20
const barWidth = 30
const barSpacing = 35

var margin = { 'top': 20, 'right': 50, 'bottom': 20, 'left': 50 };
var width = $(".container").width() - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;
var svg = d3.select("#bar-chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .style('background-color', 'gray')
  

svg.selectAll('.orbit-bar')
    .data(orbitData)
    .enter()
    .append('rect')
    .attr('x', (d,i)=>margin.right+i*barSpacing)
    .attr('y', (d,i)=>height-d*orbitScale)
    .attr('width', barWidth)
    .attr('height', d=>d*orbitScale)
    .attr('stroke', (d,i)=>{
      let orbitType = orbitLabels[i].split('')[1]
      if(orbitType === 's'){
        return '#D93F3C'
      } else if (orbitType === 'p'){
        return '#3279AD'
      } else if (orbitType === 'd' ){
        return '#224087'
      }else{
        return '#161D58'
      }
    })
    .attr('stroke-width', 1.5)
    .attr('fill', 'transparent')
    

svg.selectAll('.electron-bar')
    .data(orbitData_test)
    .enter()
    .append('rect')
    .attr('x', (d,i)=>margin.right+i*barSpacing+1.5)
    .attr('y', d=>height-d*orbitScale+1.5)
    .attr('width', barWidth-3)
    .attr('height', d=>d*orbitScale-3)
    .attr('fill', (d,i)=>{
      let orbitType = orbitLabels[i].split('')[1]
      if(orbitType === 's'){
        return '#D93F3C'
      } else if (orbitType === 'p'){
        return '#3279AD'
      } else if (orbitType === 'd' ){
        return '#224087'
      }else{
        return '#161D58'
      }
    })

svg.selectAll('.label')
    .data(orbitData)
    .enter()
    .append('text')
    .attr('x', (d,i)=>margin.right+i*barSpacing+barWidth/4)
    .attr('y', d=>height+20)
    .text((d,i)=> orbitLabels[i])
    .style('font-family', 'Nunito')

svg.selectAll('.dash-line')
   .data(orbitData)
   .enter()
   .append('line')
   .attr('x1', (d,i)=>margin.right+i*barSpacing)
   .attr('y1', d=> height-d*orbitScale/2)
   .attr('x2', (d,i)=>margin.right+i*barSpacing+barWidth)
   .attr('y2', d=> height-d*orbitScale/2)
   .style('stroke', 'black')
   .style('stroke-dasharray','4 1')
  //  .attrs({
  //    x1: (d,i)=>i*30,
  //    y1: d=> height-d*5, 
  //    x2: (d,i)=>i*30+25,
  //    y1: d=> height-d*5, 
  //  })
  //  .style('stroke', 'black')

