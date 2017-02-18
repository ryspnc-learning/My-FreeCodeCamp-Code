/*
Add the style() method to the code in the editor to set the height property for each element. 
Use a callback function to return the value of the data point with the string "px" added to it.
*/

<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset7 = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    d3.select("body").selectAll("div")
      .data(dataset7)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line
      .style("height", (d) => d)
      
     
      // Add your code above this line
  </script>
</body>
