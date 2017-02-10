// Select all of the li tags in the document, and change their text to "list item".

<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    d3.selectAll("li")
      .text("list item") 
  </script>
</body>
