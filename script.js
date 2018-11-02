const orbitData = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 14, 10, 6, 2, 14, 10, 6 ];
const orbitLabels = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p']
const orbitData_test = [2, 2, 6, 2, 3, 1, 4, 2,1 ,1 ,1 ,1,6]
let selectedAtomicNumber = 10
const atomicNumberObj = convertDataToAtomicNumberObj()
const symbolObj = convertDataToSymbolObj()


drawBarChart=()=>{
const orbitScale = 15
const barWidth = 30
const barSpacing = 35
let margin = { 'top': 20, 'right': 50, 'bottom': 50, 'left': 50 };
let width = $(".container").width() - margin.left - margin.right;
let height = 400 - margin.top - margin.bottom;
let svg = d3.select("#bar-chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .style('background-color', '')
            .append('g')
            .attr('transform', "translate(" + margin.left + "," + margin.top + ")");
  
svg.selectAll('.orbit-bar')
    .data(orbitData)
    .enter()
    .append('rect')
    .attr('x', (d,i)=>i*barSpacing)
    .attr('y', (d,i)=>height-d*orbitScale)
    .attr('width', barWidth)
    .attr('height', d=>d*orbitScale)
    .attr('stroke', (d,i)=>{
      let orbitType = orbitLabels[i].split('')[1]
      if(orbitType === 's'){
        return '#D93F3C'
      } else if (orbitType === 'p'){
        return '#1D8DBC'
      } else if (orbitType === 'd' ){
        return '#224087'
      }else{
        return '#0C1351'
      }
    })
    .attr('stroke-width', 1.5)
    .attr('fill', 'transparent')
    

svg.selectAll('.electron-bar')
    .data(orbitData_test)
    .enter()
    .append('rect')
    .attr('x', (d,i)=>i*barSpacing+1.5)
    .attr('y', d=>height)
    .attr('height', 0)
    .attr('width', barWidth-3)
    .transition()
    .delay((d,i)=>i*200)
    .duration(200)
    .attr('height', d=>d*orbitScale-3)
    .attr('y', d=>height-d*orbitScale+1.5)
    .attr('fill', (d,i)=>{
      let orbitType = orbitLabels[i].split('')[1]
      if(orbitType === 's'){
        return '#D93F3C'
      } else if (orbitType === 'p'){
        return '#1D8DBC'
      } else if (orbitType === 'd' ){
        return '#224087'
      }else{
        return '#0C1351'
      }
    })

svg.selectAll('.label')
    .data(orbitData)
    .enter()
    .append('text')
    .attr('x', (d,i)=>i*barSpacing+barWidth/4)
    .attr('y', d=>height+20)
    .text((d,i)=> orbitLabels[i])
    .style('font-family', 'Nunito')

svg.selectAll('.dash-line')
   .data(orbitData)
   .enter()
   .append('line')
   .attr('x1', (d,i)=>i*barSpacing)
   .attr('y1', d=> height-d*orbitScale/2)
   .attr('x2', (d,i)=>i*barSpacing+barWidth)
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

}

drawLineChart=()=>{
  let margin = { 'top': 50, 'right': 50, 'bottom': 80, 'left': 110 };
  //let width = $(".container").width() - margin.left - margin.right;
  let width = 720
  let height = 420 - margin.top - margin.bottom;
  let svg = d3.select("#line-chart").append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .style('background-color', '')
              .append('g')
              .attr('transform', "translate(" + margin.left + "," + margin.top + ")");

  let xScale = d3.scaleLinear()
            .domain([0,104])
            .range([0, width])
            //.padding(0.1)

  let yScale = d3.scaleLinear()
            .domain([0,d3.max(atomic_data, d=>d.ionizationE)+300])
            .range([height,0])

  let line = d3.line()
              .x(d=>xScale(d.atomic_number))
              .y(d=>yScale(d.ionizationE))
              .curve(d3.curveCatmullRom)
  
  let path = svg.append('path')
                .datum(atomic_data)
                .attr('class', 'line')
                .attr('d', line)
  
  let totalLength = path.node().getTotalLength();

  path
    .attr("stroke-dasharray", totalLength + " " + totalLength) 
    .attr("stroke-dashoffset", totalLength)
    .transition() 
    .duration(1000) 
    .ease(d3.easeLinear) 
    .attr("stroke-dashoffset", 0)

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));
  
  svg.append("g")
    .attr("class", "y axis")
    .call(d3.axisLeft(yScale));
  
  svg.append('text')
      .attr('x', -70)
      .attr('y', -15)
      .attr('class', 'label')
      .text('Ionization Energy(kJ/mol)')
  
  svg.append('text')
      .attr('x', (width-margin.left)/2)
      .attr('y', height+40)
      .attr('class', 'label')
      .text('Atomic Number')
  
  svg.append('circle')
    .attr('class', 'dot')
    .attr('cx', xScale(selectedAtomicNumber))
    .attr('cy', yScale(atomicNumberObj[String(selectedAtomicNumber)]['ionizationE']))
    .attr('r', 10)
    .style('opacity', 0.4)
  
  svg.append('circle')
    .attr('class', 'dot')
    .attr('cx', xScale(selectedAtomicNumber))
    .attr('cy', yScale(atomicNumberObj[String(selectedAtomicNumber)]['ionizationE']))
    .attr('r', 6)
    .style('stroke', '#fff')

  svg.append('rect')
      .attr('class', 'tooltip')
      .attr('x', xScale(selectedAtomicNumber)+20)
      .attr('y', yScale(atomicNumberObj[String(selectedAtomicNumber)]['ionizationE']-10))
   
}


function convertDataToAtomicNumberObj(){ 
    let atomicNumberObj = {}   
    atomic_data.forEach(atom=>{
      atomicNumberObj[String(atom.atomic_number)]={
        symbol: atom['symbol'],
        ionizationE: atom['ionizationE'],
        electron_config: atom['electron_config']
      }
    })
    return atomicNumberObj
}

function convertDataToSymbolObj(){ 
    let symbolObj = {}   
    atomic_data.forEach(atom=>{
      symbolObj[atom.symbol]={
        atomic_number: atom['atomic_number'],
        ionizationE: atom['ionizationE'],
        electron_config: atom['electron_config']
      }
    })
    return symbolObj
}

drawBarChart()
drawLineChart()

