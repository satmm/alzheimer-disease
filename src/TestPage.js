import React from 'react';
import './TestPage.css';

const TestPage = () => {
  return (
    <div className="test-page">
      <div className="background-image"></div>
      <div className="form-container">
        <form>
          <div className="form-heading">
            <h2>Alzheimer's Disease Assessment</h2>
          </div>

          <div className="form-content">
            <div className="row">
              <div className="column">
                <label>ASF:</label>
                <input type="number" placeholder="Enter ASF" />
              </div>
              <div className="column">
                <label>MR DELAY:</label>
                <input type="number" placeholder="Enter MR DELAY" />
              </div>
            </div>

            <div className="row">
              <div className="column">
                <label>GENDER:</label>
                <select>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="PreferNotToSay">Prefer not to say</option>
                </select>
              </div>
              <div className="column">
                <label>AGE:</label>
                <input type="number" placeholder="Enter AGE" />
              </div>
            </div>

            <div className="row">
              <div className="column">
                <label>EDUC:</label>
                <input type="number" placeholder="Enter EDUC" />
              </div>
              <div className="column">
                <label>SES:</label>
                <input type="number" placeholder="Enter SES" />
              </div>
            </div>

            <div className="row">
              <div className="column">
                <label>MMSE:</label>
                <input type="number" placeholder="Enter MMSE" />
              </div>
              <div className="column">
                <label>CDR:</label>
                <input type="number" placeholder="Enter CDR" />
              </div>
            </div>

            <div className="row">
              <div className="column">
                <label>eTIV:</label>
                <input type="number" placeholder="Enter eTIV" />
              </div>
              <div className="column">
                <label>nWBV:</label>
                <input type="number" placeholder="Enter nWBV" />
              </div>
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

     
    </div>
  );
};

export default TestPage;
