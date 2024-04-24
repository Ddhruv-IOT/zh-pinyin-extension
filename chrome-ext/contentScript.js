document.addEventListener("click", function(event) {
    // if event.target.tagName === "P") {
      event.target.style.color = "red";
      let paragraphText = event.target.textContent;
        console.log(paragraphText);
    // event.target.textContent = "Processing...";
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
    // }
  });

// document.addEventListener("click", function(event) {
//     if (event.target.nodeType === Node.TEXT_NODE) {
//       // Check if the clicked element is a text node
//       event.target.parentElement.style.color = "red";
//     }
//   });