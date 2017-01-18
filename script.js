// Add svg circle using chained method
d3.select("body")
  .append("svg")
  .attr("width", 50)
  .attr("height", 50)
  .append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  .style("fill", "purple");

// Add svg circle the normal way
var bodySelection = d3.select("body");

var svgSelection = bodySelection.append("svg")
  .attr("width", 50).attr("height", 50);

var circleSelection = svgSelection.append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  .style("fill", "pink");

// Binding data into DOM
var theData = [ 1, 2, 3 ]

var p = d3.select('body').selectAll('h1')
  .data(theData)
  .enter()
  .append('h1')
  .text('hello!!!')
