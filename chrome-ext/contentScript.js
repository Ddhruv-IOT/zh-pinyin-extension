// document.addEventListener("click", function(event) {
//     // if event.target.tagName === "P") {
//       event.target.style.color = "red";
//       let paragraphText = event.target.textContent;
//         console.log(paragraphText);
//     // event.target.textContent = "Processing...";
//       fetch('http://localhost:5000/process_text', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({text: paragraphText})
//     })
//     .then(response => response.json())
//     .then(data => {
//       event.target.textContent = data.processed_text;
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//     // }
//   });

// // document.addEventListener("click", function(event) {
// //     if (event.target.nodeType === Node.TEXT_NODE) {
// //       // Check if the clicked element is a text node
// //       event.target.parentElement.style.color = "red";
// //     }
// //   });


document.addEventListener("click", function(event) {
  // Check if the clicked element has only text content
  if (isTextOnly(event.target)) {
      // Add your processing logic here
      event.target.style.color = "red";
      let paragraphText = event.target.textContent;
      console.log(paragraphText);
      fetch('http://localhost:5000/process_text', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({text: paragraphText})
      })
      .then(response => response.json())
      .then(data => {
          event.target.textContent = data.processed_text;
      })
      .catch(error => {
          console.error('Error:', error);
      });
  }
});

function isTextOnly(element) {
  // Iterate through child nodes
  for (var i = 0; i < element.childNodes.length; i++) {
      // Check if the child node is a text node or a whitespace node
      if (element.childNodes[i].nodeType !== Node.TEXT_NODE && 
          element.childNodes[i].nodeType !== Node.COMMENT_NODE) {
          return false; // If it's not a text node or a comment node, return false
      }
  }
  return true; // If all child nodes are text nodes or whitespace nodes, return true
}
