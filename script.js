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

// Using SVG coordinate space
var spaceCircles = [30, 70, 110];

var svgContainer = d3.select('body').append('svg')
                                      .attr('width', 200)
                                      .attr('height', 200)
                                      .style('border', '1px solid blue')
                                      .attr('class', 'red');


var circles = svgContainer.selectAll('circle')
                          .data(spaceCircles)
                          .enter()
                          .append('circle');

var circleAttributes = circles
                        .attr('cx', function (d) {
                          return d;
                        })
                        .attr('cy', function (d) {
                          return d;
                        })
                        .attr('r', 20)
                        .style ('fill', function(d) {
                          var returnColor;
                          if (d === 30) { returnColor = 'purple';
                          } else if (d === 70) {returnColor = 'blue';
                          } else if (d === 110) {returnColor = 'darkblue';}
                          return returnColor;
                        });

// Binding JSON Objects to the __data__ Attribute
var jsonCircles = [
  {
    "x_axis": 30,
    "y_axis": 30,
    "radius": 20,
    "color": "green"
  }, {
    "x_axis": 70,
    "y_axis": 70,
    "radius": 20,
    "color": "purple"
  }, {
    "x_axis": 110,
    "y_axis": 100,
    "radius": 20,
    "color": "red"
  }
];

var svgContainer = d3.select('body').append('svg')
                                    .attr('width', 200)
                                    .attr('height', 200)
                                    .attr('class', 'red');

var circles = svgContainer.selectAll('circle')
                          .data(jsonCircles)
                          .enter()
                          .append('circle');

var circleAttributes = circles
                        .attr('cx', function (d) { return d.x_axis; })
                        .attr('cy', function (d) {return d.y_axis; })
                        .attr('r', function (d) {return d.radius; })
                        .style('fill', function (d) {return d.color;});

// D3.js Path Data Generator Line
var lineData = [
  { 'x':1, 'y':5 },
  { 'x':20, 'y':20 },
  { 'x':40, 'y':10 },
  { 'x':60, 'y':40 },
  { 'x':80, 'y':5 },
  { 'x':100, 'y':60 }
];

var lineFunction = d3.line()
                  .x(function(d) {return d.x;})
                  .y(function(d) {return d.y;})

var svgContainer = d3.select('body').append('svg')
                                    .attr('width', 200)
                                    .attr('height', 200)
                                    .attr('class', 'red');

var lineGraph = svgContainer.append('path')
                            .attr('d',lineFunction (lineData))
                            .attr('stroke', 'blue')
                            .attr('stroke-width', 2)
                            .attr('fill', 'none');
