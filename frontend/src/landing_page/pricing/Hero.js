function Hero() {
  return (
    <div className="container ">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Charges</h1>
        <h3 className="text-muted fs-5 mt-3">List of all charges and taxes</h3>
      </div>
      <div className="row p-5 mt-3 ">
        <div className="col-4 p-5">
          <img src="mediaimages/pricingEquity.svg" />
          <h2 className="fs-3">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE,BSE), are absolutely free
            -&#8377; 0 brojkerage
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="mediaimages/intradayTrades.svg" />
          <h2 className="fs-3">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="mediaimages/pricingEquity.svg" />
          <h2 className="fs-3">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
