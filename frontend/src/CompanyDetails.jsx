import React from 'react';
import './App.css'; // Import CSS file for styling

const companyDetailsArray = [
  { name: 'Company A', eps: 2.5, peRatio: 15, salesRevenue: 500000, netProfit: 75000, roe: 12, debtToEquity: 0.8 },
  { name: 'Company B', eps: 3.0, peRatio: 18, salesRevenue: 600000, netProfit: 90000, roe: 15, debtToEquity: 1.2 },
  { name: 'Company C', eps: 1.8, peRatio: 10, salesRevenue: 450000, netProfit: 65000, roe: 10, debtToEquity: 0.6 }
];

function CompanyDetails({ companyData }) {
  const company = companyDetailsArray.find(c => c.name.toLowerCase() === companyData.toLowerCase());

  if (!company) {
    return <div>No company data available for "{companyData}".</div>;
  }

  return (
    <div className="company-details-container col-md-6 m-auto d-block">
      <table className="table table-bordered table-dark table-opacity">
        <thead>
          <tr>
            <th colSpan="2" className="text-center">
              <h2 className="company-name">{company.name}</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>EPS (Earnings Per Share)</th>
            <td>{company.eps}</td>
          </tr>
          <tr>
            <th>P/E Ratio (Price-to-Earnings)</th>
            <td>{company.peRatio}</td>
          </tr>
          <tr>
            <th>Sales/Revenue (Total Income)</th>
            <td>{company.salesRevenue}</td>
          </tr>
          <tr>
            <th>Net Profit (Profit After Tax)</th>
            <td>{company.netProfit}</td>
          </tr>
          <tr>
            <th>Return on Equity (ROE)</th>
            <td>{company.roe}</td>
          </tr>
          <tr>
            <th>Debt to Equity Ratio</th>
            <td>{company.debtToEquity}</td>
          </tr>
        </tbody>
      </table>
      <a href="/">
        <input type="submit" value="Back" className='btn btn-primary' />
      </a>
    </div>
  );
}



export default CompanyDetails;
