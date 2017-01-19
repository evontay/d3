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

// Binding data into DOM 2 =====================================================
var someData = [1,2,3]
  var indexing = d3.select('body').selectAll('h2')
    .data(someData)
    .enter()
    .append('h2')
    .text(function (d,i) {
      return "index = " + i + " d = " + d;
    });

// Creating SVG data circle visualisation ======================================
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

// Using SVG coordinate space ==================================================
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

// Binding JSON Objects to the __data__ Attribute ==============================
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

// D3.js Path Data Generator Line ==============================================
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

// Dynamically Adjusting SVG Container Space ===================================
var jsonRectangles = [
  { 'x_axis':10, 'y_axis':10, 'height':20, 'width':20, 'color':'green' },
  { 'x_axis':160, 'y_axis':40, 'height':20, 'width':20, 'color':'purple' },
  { 'x_axis':70, 'y_axis':70, 'height':20, 'width':20, 'color':'red' }
];

var max_x = 0;
var max_y = 0;

for (var i = 0; i < jsonRectangles.length; i++) {
  var temp_x, temp_y;

  var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
  var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;

  if ( temp_x >= max_x ) { max_x = temp_x; }
  if ( temp_y >= max_y ) { max_y = temp_y; }
  }


max_x;
//returns 180 (160 + 20 width)

max_y;
//returns 90 (70 + 20 height)

var svgContainer = d3.select('body').append('svg')
                                    .attr('width', max_x + 20)
                                    .attr('height', max_y + 20)
                                    .attr('class', 'red');
// + 20 is for 20px padding from the elements

var rectangles = svgContainer.selectAll('rect')
                              .data(jsonRectangles)
                              .enter()
                              .append('rect');

var RectangleAttributes = rectangles
                          .attr('x', function(d) { return d.x_axis; })
                          .attr('y', function(d) { return d.y_axis; })
                          .attr('height', function(d) { return d.height; })
                          .attr('width', function(d) { return d.width; })
                          .style('fill', function(d) { return d.color; });

// D3.js Scale Linear ==========================================================

//Initial Data
var initialScaleData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000];

var newScaledData = [];
var minDataPoint = d3.min(initialScaleData);
var maxDataPoint = d3.max(initialScaleData);

var linearScale = d3.scaleLinear()
                          .domain([ minDataPoint, maxDataPoint ])
                          .range([0, 100]);

for (var i=0; i < initialScaleData.length; i++) {
  newScaledData[i] = linearScale(initialScaleData[i]);
}

newScaledData;
// [0, 10, 30, 20, 50, 40, 70, 60, 90, 80, 100]

// SVG Group Elements and D3.js ================================================
var circleData = [
  {'cx':20, 'cy':20, 'radius':20, 'color':'green'},
  {'cx':70, 'cy':70, 'radius':20, 'color':'purple'}
];

var rectangleData = [
  {'rx':110, 'ry':110, 'width':30, 'height':30, 'color':'blue'},
  {'rx':160, 'ry':160, 'width':30, 'height':30, 'color':'red'}
];

var svgContainer = d3.select('body').append('svg')
                                    .attr('width', 200)
                                    .attr('height', 200)
                                    .attr('class', 'red');

var circleGroup = svgContainer.append('g')
                              .attr('transform', 'translate(80,0)');

var circles = circleGroup.selectAll('circle')
                          .data(circleData)
                          .enter()
                          .append('circle');

var circleAttributes = circles
                        .attr('cx', function(d) {return d.cx;})
                        .attr('cy', function(d) {return d.cy;})
                        .attr('r', function(d) {return d.radius;})
                        .style('fill', function(d) {return d.color;});

var rectangles = svgContainer.selectAll('rect')
                              .data(rectangleData)
                              .enter()
                              .append('rect');

var rectangleAttributes = rectangles
                          .attr('x', function(d) {return d.rx;})
                          .attr('y', function(d) {return d.ry;})
                          .attr('height', function(d) {return d.height;})
                          .attr('width', function(d) {return d.width;})
                          .style('fill', function(d) {return d.color;});
