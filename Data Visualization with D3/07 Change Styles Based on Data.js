/*
Add the style() method to the code in the editor to set the color of the h2 elements conditionally. Write the callback function so if the data value is less than 20, it returns "red", otherwise it returns "green".
Note: You can use if-else logic, or the ternary operator.
*/

<body>
  <script>
    const dataset6 = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    d3.select("body").selectAll("h2")
      .data(dataset6)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line
      .style("color", (d) => {
             if (d < 20){
               return "red"   
              }
             else {
               return "green"
             }        
      });
      // Add your code above this line
  </script>
</body>
