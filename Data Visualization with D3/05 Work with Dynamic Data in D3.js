/*
Change the text() method so it does not place "New Title" in each heading. 
Instead, it displays the data from the array with a space and "USD". 
For example, the first heading should say "12 USD".
*/

<body>
  <script>
    const dataset4 = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
    d3.select("body").selectAll("h2")
      .data(dataset4)
      .enter()
      .append("h2")
      // Add your code below this line
      .text((d) => d + " USD");
      // Add your code above this line
  </script>
</body>
