from flask import Flask, request, jsonify
from flask_cors import CORS
import fitz  # PyMuPDF
import logging

app = Flask(__name__)
CORS(app)  # Enable CORS for cross-origin requests



# Set up logging
logging.basicConfig(level=logging.INFO)

# Set maximum file size to 16 MB
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16 MB

@app.errorhandler(413)
def request_entity_too_large(error):
    return jsonify({"error": "File is too large"}), 413

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and file.filename.endswith('.pdf'):
        try:
            # Extract text from the PDF
            with fitz.open(stream=file.read(), filetype="pdf") as pdf_document:
                text = ""
                for page in pdf_document:
                    text += page.get_text()

            # Here you would process text to extract the desired data
            # For demonstration, let's assume we extracted the following data:
            extracted_data = {
                "companyName": "Sample Company",
                "eps": 2.5,
                "peRatio": 15,
                "salesRevenue": 500000,
                "netProfit": 75000,
                "roe": 12,
                "debtToEquity": 0.8
            }

            return jsonify({"data": extracted_data}), 200

        except Exception as e:
            logging.error(f"Error processing PDF: {e}")
            return jsonify({"error": "Failed to process PDF"}), 500

    # return jsonify({"error": "Invalid file type"}), 400
    return render_template('CompanyDetails.jsx')

if __name__ == '__main__':
    app.run(debug=True)