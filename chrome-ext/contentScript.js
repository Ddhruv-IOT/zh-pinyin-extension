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


// document.addEventListener("click", function(event) {
//   // Check if the clicked element has only text content
//   if (isTextOnly(event.target)) {
//       // Add your processing logic here
//       event.target.style.color = "red";
//       let paragraphText = event.target.textContent;
//       console.log(paragraphText);
//       fetch('http://localhost:5000/process_text', {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({text: paragraphText})
//       })
//       .then(response => response.json())
//       .then(data => {
//           event.target.textContent = data.processed_text;
//       })
//       .catch(error => {
//           console.error('Error:', error);
//       });
//   }
// });

// function isTextOnly(element) {
//   // Iterate through child nodes
//   for (var i = 0; i < element.childNodes.length; i++) {
//       // Check if the child node is a text node or a whitespace node
//       if (element.childNodes[i].nodeType !== Node.TEXT_NODE && 
//           element.childNodes[i].nodeType !== Node.COMMENT_NODE) {
//           return false; // If it's not a text node or a comment node, return false
//       }
//   }
//   return true; // If all child nodes are text nodes or whitespace nodes, return true
// }

// logic 2 MOUSE UP

// document.addEventListener("mouseup", function(event) {
//     var selectedText = window.getSelection().toString().trim();
//     if (selectedText !== "") {
//         // color to red 
//         event.target.style.color = "green";

//     }
// });


// BUTTON LOGIC BETA

// document.addEventListener("DOMContentLoaded", function() {
//     // Save settings when the Save button is clicked
//     document.getElementById('stopConversionCheckbox').addEventListener('click', function() {
//        if (document.getElementById('stopConversionCheckbox').checked) {
//         var stopConversion = true;
//         chrome.storage.sync.set({ stopConversion: stopConversion }, function() {
//             console.log('Stop Conversion option saved');
//           });
//         } else {
//           var stopConversion = false;
//           chrome.storage.sync.set({ stopConversion: stopConversion }, function() {
//             console.log('Stop Conversion option saved');
//           });
       
//         } 
//       // Save the stopConversion option to Chrome storage
      
// });}
// );

// on body load
// document.addEventListener("DOMContentLoaded", function() {
// const checkbox = document.getElementById('stopConversionCheckbox');
// // const checkbox = document.getElementById('myCheckbox');

// // Add event listener to checkbox
// checkbox.addEventListener('change', function() {
//     // Check if checkbox is checked
//     if (this.checked) {
//         // If checked, update result div with message
//         document.getElementById('result').innerText = 'Checkbox is checked';
//     } else {
//         // If not checked, update result div with different message
//         document.getElementById('result').innerText = 'Checkbox is not checked';
//     }
// });
// });
// Add event listener to checkbox
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mouseup", function(event) {
        var selectedText = window.getSelection().toString().trim();
        if (selectedText !== "") {
            // color to red 
            event.target.style.color = "green";
    }
    });
const checkbox = document.getElementById('stopConversionCheckbox');

checkbox.addEventListener('change', function() {
    // Check if checkbox is checked
    if (this.checked) {
        // If checked, update result div with message
        // document.getElementsByTagName('h1').innerText = 'Checkbox is checked';
    } else {
        // If not checked, update result div with different message
        document.getElementById('result').innerText = 'Checkbox is not checked';
        document.addEventListener("mouseup", function(event) {
            var selectedText = window.getSelection().toString().trim();
            if (selectedText !== "") {
                // color to red 
                event.target.style.color = "green";
        }
        });
        // document.getElementsByTagName('h1').innerText = 'Checkbox is not checked';
          
    }
});
});
 