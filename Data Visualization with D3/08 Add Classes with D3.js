/*
Add the attr() method to the code in the editor and put a class of bar on the div elements.
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
    const dataset3 = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    d3.select("body").selectAll("div")
      .data(dataset3)
      .enter()
      .append("div")
      // Add your code below this line
      .attr("class", "bar")
      
      
      // Add your code above this line
  </script>
</body>
