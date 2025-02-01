import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Import routing components
import CompanyDetails from './CompanyDetails.jsx'; // Ensure the correct import path and file name
import logo from './images/logo.png';

function UploadPage({ setCompanyData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      setCompanyData(searchTerm);
      navigate('/company-details');
    }
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    console.log(`File uploaded: ${uploadedFile.name}`);
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.error) {
        console.error(data.error);
        return;
      }

      setCompanyData(data.data); // Store the extracted data in the parent component's state
      navigate('/company-details'); // Redirect to the details page

    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <>
      <div className="text-center text-light font-weight-bold gradient-bg" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="col-md-1">
          <img src={logo} alt="Logo" className="logo" style={{ marginRight: '10px' }} />
        </div>
        <div className="col-md-10" style={{ textAlign: 'center' }}>
          <h1 style={{ margin: '0 auto' }}><strong>The Codeless Men</strong></h1>
        </div>
      </div>


      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-4">
              <div className="card-body">
                <form onSubmit={handleSearchSubmit}>
                  <label htmlFor="search" className="form-label">Search for a company:</label>
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="form-control"
                    placeholder="Enter company name"
                  />
                  <button type="submit" className="btn-upload">
                    Search
                  </button>
                </form>
                <hr />
                <label htmlFor="file-upload" className="form-label">Choose a PDF file:</label>
                <input
                  type="file"
                  id="file-upload"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="form-control"
                />
                <button onClick={handleFileUpload} className="btn-upload" disabled={!file}>
                  Upload
                </button>
              </div>
            </div>
            <div className="bottom-left-text">
              Efficient Data Extraction from Financial Reports
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [companyData, setCompanyData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage setCompanyData={setCompanyData} />} /> {/* Pass data to UploadPage */}
        <Route path="/company-details" element={<CompanyDetails companyData={companyData} />} />
      </Routes>
    </Router>
  );
}

export default App;
