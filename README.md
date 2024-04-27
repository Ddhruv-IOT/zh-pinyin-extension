# Zh-Pinyin-Extension

## Overview
Zh-Pinyin Extension simplifies Chinese language learning by enabling one-click conversion of characters to Pinyin and optional translation to English with a double-click. This Chrome extension is designed to enhance comprehension for learners, leveraging a Flask server for conversion and utilizing the py-pinyin package.

## Features
- Single-click conversion of text to Pinyin
- [UPCOMING] Optional double-click conversion to English
- [UPCOMING] Triple-click returns text to original state
- Seamless integration with Chrome browser

## Tools and Technologies Used
- Flask
- py-pinyin package
- google-trans package
- Chrome Extensions

## Working
The extension utilizes a Flask server to aid in text conversion. On a single click, text within a line or paragraph is converted to Pinyin using the py-pinyin package.

## Getting Started
To get started with zh-pinyin-extension, follow the steps:

1. **Clone the Repository:**
   
   ```bash
   git clone https://github.com/Ddhruv-IOT/zh-pinyin-extension
   cd zh-pinyin-extension
   ```

2. **Install the dependencies**
   
   ```bash
   pip install -r requirements.py
   ```

3. **Start the Flask Server**
   ```bash
   pythom -m flask run
   ```

4. **Load the Chrome Extension**

    Open Chrome Extensions, turn on develope mode, the select `load unpacked` and navigate to `chrome-ext` folder of this app and then load it

5. **Start the Extension**

    Click on the Extension to start it


## How to Contribute
Contributions are welcome! Feel free to fork the repository and submit pull requests with your enhancements or bug fixes.

## Links and Demo
- [Demo Video](link_to_demo_video)
- [LinkedIn Post](link_to_linkedin_post)

## Notes
- Ensure that the Flask server is running for text conversion to work properly.
- Refer to the documentation for additional details on extension usage and development.

## Upcoming Features
- Improved user interface
- Enhanced language support
- Integration with external dictionaries

## Thank You
Thank you for using and contributing to En Zh-Cn Pinyin Extension!
