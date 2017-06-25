// Adds the svg canvas
var chart2 = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
// Get the data
d3.csv("data2.csv", function(error, data) {
    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.close = +d.close;
    });

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.close; })]);

    // Add the valueline path.
    chart2.append("path")
        .attr("class", "line")
        .attr("d", valueline(data));

    // Add the X Axis
    chart2.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the Y Axis
    chart2.append("g")
        .attr("class", "y axis")
        .call(yAxis);

});


// var n = 500; // number of points
// var r = 5.5;

// var a_min = -1.5;
// var a_max = 2.5;
// var b_min = -0.5;
// var b_max = 1.2;

// document.querySelector('#a_slider').min = a_min;
// document.querySelector('#a_slider').max = a_max;
// document.querySelector('#b_slider').min = b_min;
// document.querySelector('#b_slider').max = b_max;
// document.querySelector('#a_slider').value = (a_min + a_max) / 2;
// document.querySelector('#b_slider').value = (b_min + b_max) / 2;

// var inputs = document.querySelectorAll('input');
// [].forEach.call(inputs, function(inp) {
//   inp.step = 0.001;
// });



// var width = 500;
// var height = 500;

// var xn_plot = d3.select('body')
// 	.append('svg:svg')
// 	.attr('width', width)
// 	.attr('height', height)
// 	.attr('class', 'xn_plot')

// var xy_plot = d3.select('xn-plot')
// 	.append('svg')
// 	// .attr('width', width + margin.right + margin.left)
// 	// .attr('height', height + margin.top + margin.bottom)
// 	.attr('class', 'xy_plot')
// 	.on('mousemove', mouse_mooved)
// 	// .attr("onmousemove", "mouse_mooved(event)")

// // var main = xy_plot.append('g')
// // 	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
// // 	.attr('width', width)
// // 	.attr('height', height)
// // 	.attr('class', 'main')

// // x and y scales, I've used linear here but there are other options
// // the scales translate data values to pixel values for you
// // scales are constand (TODO zoom-sliders)
// var x = d3.scaleLinear()
// 	.domain([-r, r]) // the range of the values to plot
// 	.range([ 0, width ]); // the pixel range of the x-axis
// 	// .domain([0, d3.max(xdata)]) // the range of the values to plot
// 	// .range([ 0, width ]); // the pixel range of the x-axis
// var y = d3.scaleLinear()
// 	.domain([-r, r])
// 	.range([ height, 0 ]);

// var a_scale = d3.scaleLinear()
// 	.domain([a_min, a_max])
// 	.range([0, width])

// var b_scale = d3.scaleLinear()
// 	.domain([b_min, b_max])
// 	.range([height, 0])

// // draw the x axis
// var xAxis = d3.axisBottom(x)
// xy_plot.append('g')
// 	.attr('transform', 'translate(0,' + height + ')')
// 	.attr('class', 'main axis date')
// 	.call(xAxis);
// // draw the y axis
// var yAxis = d3.axisLeft(y)
// 	xy_plot.append('g')
// 	// .attr('transform', 'translate(0,0)')
// 	.attr('transform', 'translate(0,' + width + ')')
// 	.attr('class', 'main axis date')
// 	.call(yAxis);


// // // draw the x axis
// // var xAxis = d3.axisBottom(x)
// // main.append('g')
// // 	.attr('transform', 'translate(0,' + height + ')')
// // 	.attr('class', 'main axis date')
// // 	.call(xAxis);
// // // draw the y axis
// // var yAxis = d3.axisLeft(y)
// // 	main.append('g')
// // 	.attr('transform', 'translate(0,0)')
// // 	.attr('class', 'main axis date')
// // 	.call(yAxis);

// // draw the graph object
// var g = xy_plot.append("svg:g"); 

// function redraw() 
// {
// // 	g.selectAll("scatter-dots")
// // 		// .exit().remove()
// // 		.data(yy, function(d) { return d; });
	
// 	var xdata = [0.1];
// 	var ydata = [0.2];
// 	var a = document.getElementById("a_slider").value;
// 	var b = document.getElementById("b_slider").value;


// 	// Henon Map
// 	for (var i = 0; i < n; i++) 
// 	{
// 		var x_next = 1 - a * Math.pow(xdata[xdata.length - 1], 2) + ydata[ydata.length - 1];
// 		var y_next = b * xdata[xdata.length - 1];
// 		xdata.push(x_next);
// 		ydata.push(y_next);
// 	}

// 	g.selectAll("*").remove(); //without that line old data remains
// 	g.selectAll("scatter-dots")
// 		.data(ydata)  // using the values in the ydata array
// 		.enter().append("svg:circle")  // create a new circle for each value
// 		.attr("cy", function (d) { return y(d); } ) // translate y value to a pixel
// 		.attr("cx", function (d,i) { return x(xdata[i]); } ) // translate x value
// 		.attr("r", 1) // radius of circle
// 		.style("opacity", 1.0); // opacity of circle
// 		document.querySelector('#a_out').value = a;
// 		document.querySelector('#b_out').value = b;
// }

// function mouse_mooved() 
// {
// 	// var mouse_xy = [0, 0];
// 	var mouse_xy = d3.mouse(this);
// 	document.querySelector('#a_slider').value = a_scale.invert(mouse_xy[0]);
// 	document.querySelector('#b_slider').value = a_scale.invert(mouse_xy[1]);
// 	document.querySelector('#a_out').value = b_scale.invert(mouse_xy[0]);
// 	document.querySelector('#b_out').value = b_scale.invert(mouse_xy[1]);
// 	redraw();

// }
// // redraw(initial);