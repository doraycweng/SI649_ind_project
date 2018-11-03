const orbitData = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 14, 10, 6, 2, 14, 10, 6 ];
const orbitLabels = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p']
let electron_config = [2,2,3]
let selectedAtomicNumber = 7
const atomicNumberObj = convertDataToAtomicNumberObj()
const symbolObj = convertDataToSymbolObj()

const orbitScale = 13
const barWidth = 30
const barSpacing = 35
let margin_barChart = { 'top': 50, 'right': 50, 'bottom': 50, 'left': 50 };
let width_barChart = $(".container").width() - margin_barChart.left - margin_barChart.right;
let height_barChart = 300 - margin_barChart.top - margin_barChart.bottom;
let svg_barChart = d3.select("#bar-chart")
              .append('g')
              .attr('transform', "translate(" + margin_barChart.left + "," + margin_barChart.top + ")");

let margin = { 'top': 70, 'right': 50, 'bottom': 80, 'left': 80 };
let width = 750
let height = 410 - margin.top - margin.bottom;
let svg = d3.select("#line-chart")
              .append('g')
              .attr('transform', "translate(" + margin.left + "," + margin.top + ")")

drawOrbitalBar=()=>{
  //orbitals
  svg_barChart.selectAll('.orbit-bar')
    .data(orbitData)
    .enter()
    .append('rect')
    .attr('x', (d,i)=>i*barSpacing)
    .attr('y', (d,i)=>height_barChart-d*orbitScale)
    .attr('width', barWidth)
    .attr('height', d=>d*orbitScale)
    .attr('stroke', (d,i)=>{
      let orbitType = orbitLabels[i].split('')[1]
      if(orbitType === 's'){
        return '#86CAC7'
      } else if (orbitType === 'p'){
        return '#1D8DBC'
      } else if (orbitType === 'd' ){
        return '#31519E'
      }else{
        return '#161D58'
      }
    })
    .attr('stroke-width', 1.5)
      .attr('fill', 'transparent')
   
    //dash-line
    svg_barChart.selectAll('.dash-line')
      .data(orbitData)
      .enter()
      .append('line')
      .attr('class', 'dash-line')
      .attr('x1', (d,i)=>i*barSpacing)
      .attr('y1', d=> height_barChart-d*orbitScale/2)
      .attr('x2', (d,i)=>i*barSpacing+barWidth)
      .attr('y2', d=> height_barChart-d*orbitScale/2)
      .style('stroke', 'black')
      .style('stroke-dasharray','4 1') 
  
    //label
    svg_barChart.selectAll('.label')
      .data(orbitData)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', (d,i)=>i*barSpacing+barWidth/4)
      .attr('y', d=>height_barChart+20)
      .text((d,i)=> orbitLabels[i])

    svg_barChart.append('text')
                .attr('class', 'label')
                .attr('x', -10)
                .attr('y', 10)
                .text('Electron Configuration')

    //legends
    svg_barChart.append('rect')
        .attr('x', orbitData.length*barSpacing+15)
        .attr('y', height_barChart/2)
        .attr('height', 10)
        .attr('width', 10)
        .attr('stroke', '#86CAC7')
        .attr('stroke-width', 1.5)
        .attr('fill', 'transparent')

    svg_barChart.append('text')
        .attr('x', orbitData.length*barSpacing+30)
        .attr('y', height_barChart/2+10)
        .text('s orbital (2 electrons)')
        .attr('class', 'legend')

    svg_barChart.append('rect')
        .attr('x', orbitData.length*barSpacing+15)
        .attr('y', height_barChart/2+20)
        .attr('height', 10)
        .attr('width', 10)
        .attr('stroke', '#1D8DBC')
        .attr('stroke-width', 1.5)
        .attr('fill', 'transparent')

    svg_barChart.append('text')
        .attr('x', orbitData.length*barSpacing+30)
        .attr('y', height_barChart/2+10+20)
        .text('p orbital (6 electrons)')
        .attr('class', 'legend')
      
    svg_barChart.append('rect')
        .attr('x', orbitData.length*barSpacing+15)
        .attr('y', height_barChart/2+40)
        .attr('height', 10)
        .attr('width', 10)
        .attr('stroke', '#31519E')
        .attr('stroke-width', 1.5)
        .attr('fill', 'transparent')

    svg_barChart.append('text')
        .attr('x', orbitData.length*barSpacing+30)
        .attr('y', height_barChart/2+10+40)
        .text('d orbital (10 electrons)')
        .attr('class', 'legend')

    svg_barChart.append('rect')
        .attr('x', orbitData.length*barSpacing+15)
        .attr('y', height_barChart/2+60)
        .attr('height', 10)
        .attr('width', 10)
        .attr('stroke', '#161D58')
        .attr('stroke-width', 1.5)
        .attr('fill', 'transparent')

    svg_barChart.append('text')
        .attr('x', orbitData.length*barSpacing+30)
        .attr('y', height_barChart/2+10+60)
        .text('f orbital (14 electrons)')
        .attr('class', 'legend')

    svg_barChart.append('line')
        .attr('x1', orbitData.length*barSpacing+15)
        .attr('y1', height_barChart/2+85)
        .attr('x2', orbitData.length*barSpacing+15+10)
        .attr('y2', height_barChart/2+85)
        .style('stroke', 'black')
        .style('stroke-dasharray','3 0.8')

    svg_barChart.append('text')
        .attr('x', orbitData.length*barSpacing+30)
        .attr('y', height_barChart/2+10+80)
        .text('Half-filled line')
        .attr('class', 'legend')
}


drawBarChart=()=>{
  var bars=svg_barChart.selectAll('.electron-bar')
                        .data(electron_config)

  bars.enter()
      .append('rect')
      .attr("class","electron-bar")
      .attr('x', (d,i)=>i*barSpacing+1.5)
      .attr('y', d=>height_barChart)
      .attr('height', 0)
      .attr('width', barWidth-3)
      .merge(bars)
      .transition()
      .delay((d,i)=>i*50)
      .duration(50)
      .attr('height', d=>d*orbitScale-3)
      .attr('y', d=>height_barChart-d*orbitScale+1.5)
      .attr('fill', (d,i)=>{
        let orbitType = orbitLabels[i].split('')[1]
        if(orbitType === 's'){
          return '#86CAC7'
        } else if (orbitType === 'p'){
          return '#1D8DBC'
        } else if (orbitType === 'd' ){
          return '#31519E'
        }else{
          return '#161D58'
        }
      })

  bars.exit()
    .transition()
    .duration(100)
    .attr('height', 0)
    .attr('y', height_barChart)
    .remove()

  svg_barChart.selectAll('.dash-line').raise()
}

drawLineChart=()=>{
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

  // svg.append("g")
  //   .attr("class", "y axis")
  //   .call(d3.axisLeft(yScale));

  var yAxis = d3.axisRight(yScale)
            .tickSize(width)

  var g = svg.append("g")

  g.append("g")
    .call(()=>{
      g.call(yAxis);
      g.select(".domain").remove()
      g.selectAll(".tick:not(:first-of-type) line")
        .attr("stroke", "#A8A8A8")
        .attr("stroke-dasharray", "2,2")
      g.selectAll(".tick text")
        .attr("x", -5).attr("dy", 3)
        .style("text-anchor", 'end')
        .style("font-family", 'Lato')
        .style("font-weight", 600)
        .style("font-size", '12px')
    });
  
  svg.append('text')
      .attr('x', -38)
      .attr('y', -35)
      .attr('class', 'label')
      .text('1st Ionization')
  
  svg.append('text')
      .attr('x', -38)
      .attr('y', -15)
      .attr('class', 'label')
      .text('Energy (kJ/mol)')
  
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
    .attr('r', 5)
    .style('stroke', '#fff')

  // svg.append('rect')
  //     .attr('class', 'tooltip')
  //     .attr('x', xScale(selectedAtomicNumber)+20)
  //     .attr('y', yScale(atomicNumberObj[String(selectedAtomicNumber)]['ionizationE'])-30)
  //     .attr('width', 85)
  //     .attr('height', 50)
  //     .attr('stroke', 'gray')
  //     .attr('stroke-width', 0.8)
  //     .attr('fill', 'transparent')
  //     .attr('rx', 4)
      // .attr('ry', 4)
  
  svg.append('text')
      .attr('class', 'tooltipText')
      .attr('x', xScale(selectedAtomicNumber)-20)
      .attr('y', yScale(atomicNumberObj[String(selectedAtomicNumber)]['ionizationE'])-20)
      .text(atomicNumberObj[String(selectedAtomicNumber)]['ionizationE'])
      .attr('stroke', '#dd5201')
  
}

function updateLineDot(){
  d3.selectAll(".dot").remove()
  d3.select(".tooltipText").remove()

  let xScale = d3.scaleLinear()
            .domain([0,104])
            .range([0, width])
            //.padding(0.1)

  let yScale = d3.scaleLinear()
            .domain([0,d3.max(atomic_data, d=>d.ionizationE)+300])
            .range([height,0])

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

  svg.append('text')
    .attr('class', 'tooltipText')
    .attr('x', xScale(selectedAtomicNumber)-20)
    .attr('y', yScale(atomicNumberObj[String(selectedAtomicNumber)]['ionizationE'])-20)
    .text(atomicNumberObj[String(selectedAtomicNumber)]['ionizationE'])
    .attr('stroke', '#dd5201')
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

let slider = document.querySelector(".slider");
let output = document.querySelector("#atomicNumberValue");
let output_symbol = document.querySelector("#symbolValue");
output.innerHTML = slider.value;
output_symbol.innerHTML = atomicNumberObj[slider.value]['symbol']

slider.addEventListener('input', ()=>{
  output.innerHTML = slider.value;
  selectedAtomicNumber = slider.value;
  electron_config = atomicNumberObj[String(selectedAtomicNumber)]['electron_config']
  output_symbol.innerHTML = atomicNumberObj[String(selectedAtomicNumber)]['symbol']
  drawBarChart()
  updateLineDot()
  updateSelectedState()
})

let element_boxes = document.querySelectorAll(".element-box")

element_boxes.forEach(element=>{
  element.addEventListener('click', ()=>{
      selectedAtomicNumber=element.getAttribute('id')
      element.classList.add('selected')
      slider.value = selectedAtomicNumber
      output.innerHTML = slider.value
      electron_config = atomicNumberObj[String(selectedAtomicNumber)]['electron_config']
      output_symbol.innerHTML = atomicNumberObj[String(selectedAtomicNumber)]['symbol']
      drawBarChart()
      updateLineDot()
      updateSelectedState()
  })
})

function updateSelectedState(){
  element_boxes.forEach(element=>{
  if(element.getAttribute('id')===selectedAtomicNumber){
    element.classList.add('selected')
  }else{
    element.classList.remove('selected')
  }
})
}


drawOrbitalBar()
drawBarChart()
drawLineChart()

