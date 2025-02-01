<h1 align="center" style="font-size: 100px; font-family: 'Arial';"><strong> Team: The Codelessmen </strong></h1>

---

## Contents:

- [Introduction](#introduction-efficient-data-extraction-from-financial-reports)
- [Challenge: Track-5 AI city data extraction](#challenge-track-5-ai-city-data-extraction)
   - [Achieving Accuracy](#achieving-100%-accuracy)
   - [Efficient Extraction Process](#efficient-extraction-process)
   - [Extracting Only Current Quarter Data](#extracting-only-current-quarter-data)
   - [Handling Edge Cases](#handling-edge-cases)
   - [Integrating Open-Source Solutions](#integrating-open-source-solutions)
- [Limitations](#limitations)
- [Tools We Use](#tools-we-use)
- [Installation and Setup](#installation-and-setup-google-colab)
- [Team](#team)

---

## Introduction - Efficient Data Extraction from Financial Reports

Publicly listed companies release their financial results every quarter and annually, making them available on the NSE/BSE websites in the form of PDF reports. These reports contain essential financial information, including Revenue/Sales, Operating Profit, and Net Profit. However, extracting structured data from these reports is a challenging task due to the presence of both text and image-based content.

This project aims to develop a highly accurate and efficient solution to extract financial data from these reports. The extracted data must be 100% accurate, as financial inaccuracy is not acceptable. Only solutions meeting this criterion will advance to the efficiency evaluation phase, where the fastest extraction method will be ranked the highest.

By leveraging open-source technologies and advanced OCR techniques, this project strives to automate and streamline financial data extraction, ensuring both precision and speed in processing financial reports.


---

## Challenge: Track-5 AI city data extraction

### Achieving 100% Accuracy
Text-based PDFs: Extracting financial data reliably when reports contain structured text.
Image-based PDFs: Handling scanned or image-based reports where OCR (Optical Character Recognition) is needed.
Handling Variability: Companies use different report formats, layouts, fonts, and table structures. Ensuring correct data extraction across various formats is crucial.
Noise and Artifacts: Some PDFs may contain watermarks, background colors, or low-quality scans that interfere with OCR accuracy.

### Efficient Extraction Process
Speed Optimization: Once accuracy is ensured, your solution must extract data as quickly as possible.
Parallel Processing: Implementing multiprocessing or GPU acceleration to handle large reports efficiently.
Preprocessing: Optimizing document preprocessing (deskewing, denoising, binarization) to improve OCR speed and accuracy.

### Extracting Only Current Quarter Data
Identifying Date Ranges: Financial reports contain multiple periods (quarterly, yearly, past comparisons). Extracting only the current quarter’s data without confusion is a challenge.
Table and Text Alignment: Data points may not be explicitly labeled. The system must correctly associate numbers with their corresponding financial categories.

### Handling Edge Cases
Multiple Sub-Companies: Some reports contain consolidated and standalone financials. Your solution must correctly differentiate them.
PDF Structure Issues: Some reports have tables split across pages, merged cells, or unusual layouts that complicate extraction.
Currency and Units: Ensuring consistency in currency symbols, units (millions, crores), and decimal formats.

### Integrating Open-Source Solutions
Choosing the Right OCR Engine: Evaluating Tesseract, EasyOCR, or other alternatives if PaddleOCR is not suitable.
PDF Parsing Libraries: Using pdfplumber, pdf2image, PyMuPDF, or other tools effectively.
Data Validation & Post-Processing: Implementing validation mechanisms to detect and correct potential errors in extracted data.

---

## Limitations

- Limited Output for Smaller Companies
  - Low-quality PDFs (screenshots) affect data extraction.

- DPI Constraints
  - Currently using 300 DPI due to system limitations.
  - Works well for large companies with semi-formatted reports.
- Challenges with Low-Quality Reports
  - Blurry or pixelated text reduces OCR accuracy.
  - Requires higher DPI for better results.
- Potential Solution
  - Increase DPI setting for improved extraction from low-quality PDFs.

---

## Tools We Use

- **Data Source**: [BSE/NSE Reliance financial status](https://www.bseindia.com/xml-data/corpfiling/AttachHis/c389663f-3f7a-4c58-84d8-5ba2debfd886.pdf)
- **AI Tools**: ChatGPT, Gemini

---

## Installation and Setup - Google Colab

- *Example pdf:*
  Download link: [Reliance.pdf](https://www.bseindia.com/xml-data/corpfiling/AttachHis/c389663f-3f7a-4c58-84d8-5ba2debfd886.pdf)

  Ensure that file name is "Reliance.pdf" and uploaded in the directery "/content/" on Google Colab.

- *Install Required Dependencies:*

```bash
pip install pdf2image pillow paddlepaddle paddleocr opencv-python numpy
pip install --upgrade tensorboard==2.18.0
pip install --upgrade tensorflow-tpu
pip install pdfplumber
pip install pytesseract easyocr pandas tabulate json
apt-get install -y poppler-utils tesseract-ocr
apt-get update
```

- *Correct Tesseract installation:*

```bash
import pytesseract
pytesseract.pytesseract.tesseract_cmd = "/usr/bin/tesseract"
```

- *Clone the Repository:* 

```bash
git clone [repository link]
```

---

## Team Members:
- **Ronit Rathod** 
- **Manan Tarsariya**
- **Aryan Sariya**
- **Jainim Jariwala**
- **Umang Kaklotar**
    
---
