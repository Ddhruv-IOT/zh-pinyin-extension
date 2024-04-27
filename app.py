from flask import Flask, request, jsonify
from flask_cors import CORS
from pypinyin import pinyin, Style
from googletrans import Translator

def translate_to_chinese(english_text):
    translator = Translator()
    translated_text = translator.translate(english_text, src='zh-cn', dest='en').text
    return translated_text

# Test the function
# english_text = "Hello, I am king."


app = Flask(__name__)
CORS(app)


def convert_to_pinyin(chinese_text):
    pinyin_text = pinyin(chinese_text)
    return ' '.join([item[0] for item in pinyin_text])

# Test the function


@app.route('/process_text', methods=['POST'])
def process_text():
    paragraph_text = request.json.get('text', '')
    print(paragraph_text)
    # pinyin_text = convert_to_pinyin(paragraph_text)
    # print(pinyin_text)  # Output: 'hē lōu hǎo ār yù?
    chinese_text = translate_to_chinese(paragraph_text)

    # Here, you can process the paragraph text as you want
    # For simplicity, let's just convert it to uppercase
    processed_text = chinese_text#paragraph_text.upper()
    # processed_text = pinyin_text
    return {'processed_text': processed_text}

@app.route('/process_text', methods=['OPTIONS'])
def options():
    response = jsonify({'message': 'CORS preflight request successful'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

if __name__ == '__main__':
    app.run(debug=True, port=5000)
