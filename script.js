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
var theData = [ "mary", "barry", "larry"]

var h1 = d3.select('body').selectAll('h1')
  .data(theData)
  .enter()
  .append('h1')
  .text(function (d) {
    var addedNumber = d;
    var tempNumber;
    tempNumber = addedNumber + "!";
    return tempNumber; }
    );

// Binding data into DOM 2
var someData = [1,2,3]
  var indexing = d3.select('body').selectAll('h2')
    .data(someData)
    .enter()
    .append('h2')
    .text(function (d,i) {
      return "index = " + i + " d = " + d;
    });

// Creating SVG data circle visualisation
var circleRadii = [40, 20, 10]

var svgContainer = d3.select('body').append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .attr('class', "red");

var circles = svgContainer.selectAll('circle')
                          .data(circleRadii)
                          .enter()
                          .append('circle');

var circleAttributes = circles
                        .attr('cx', 50)
                        .attr('cy', 50)
                        .attr('r', function (d){
                          return d;
                        })
                        .attr('fill', function (d) {
                          var returnColor;
                          if (d === 40) {returnColor = "blueviolet";
                          } else if (d === 20) {returnColor = "blue";
                          } else if (d === 10) {returnColor = "darkblue";}
                          return returnColor;
                        });
