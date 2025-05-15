function Brojkerage() {
  return (
    <div className="container mt-3 ">
      <div className="row p-5 text-center border-top ">
        <div className="col-6 p-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brojkerage calculator</h3>

            <div className="container mt-5">
              <div className="card shadow p-4">
                <h2 className="mb-4">Zerodha Brokerage Calculator</h2>

                <div className="form-group">
                  <label>Segment</label>
                  <select className="form-control">
                    <option value="delivery">Equity Delivery (₹0)</option>
                    <option value="intraday">
                      Equity Intraday (0.03% or ₹20)
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Buy Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter buy price"
                  />
                </div>

                <div className="form-group">
                  <label>Sell Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter sell price"
                  />
                </div>

                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter quantity"
                  />
                </div>

                <button className="btn btn-primary mt-3 ">Calculate</button>

                {/* Placeholder result box */}
                <div className="alert alert-secondary mt-4" role="alert">
                  Brokerage: ₹ --
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-6 p-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
          <div className="mt-5">
            <table className="table table-bordered mt-3">
              <thead className="thead-light">
                <tr>
                  <th>Charge Type</th>
                  <th>Equity Delivery</th>
                  <th>Equity Intraday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>₹0</td>
                  <td>0.03% or ₹20/order</td>
                </tr>
                <tr>
                  <td>STT (Securities Transaction Tax)</td>
                  <td>0.1% on buy & sell</td>
                  <td>0.025% on sell</td>
                </tr>
                <tr>
                  <td>Exchange Transaction Charges</td>
                  <td>0.00345%</td>
                  <td>0.00345%</td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>18% on brokerage + exchange charges</td>
                  <td>Same as delivery</td>
                </tr>
                <tr>
                  <td>SEBI Charges</td>
                  <td>₹10 per crore</td>
                  <td>₹10 per crore</td>
                </tr>
                <tr>
                  <td>Stamp Duty</td>
                  <td>0.015% on buy side</td>
                  <td>0.003% on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <h2 className="text-muted">Disclaimer</h2>
      <p className="text-muted mt-3">
        For Delivery based trades, a minimum of ₹0.01 will be charged per
        contract note. Clients who opt to receive physical contract notes will
        be charged ₹20 per contract note plus courier charges. Brokerage will
        not exceed the rates specified by SEBI and the exchanges. All statutory
        and regulatory charges will be levied at actuals. Brokerage is also
        charged on expired, exercised, and assigned options contracts. Free
        investments are available only for our retail individual clients.
        Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
        (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
        contract value will be charged for contracts where physical delivery
        happens. For netted off positions in physically settled contracts, a
        brokerage of 0.1% will be charged.
      </p>
    </div>
  );
}

export default Brojkerage;
