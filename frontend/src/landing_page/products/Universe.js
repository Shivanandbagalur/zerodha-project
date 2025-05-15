function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img
            src="mediaimages/smallcaseLogo.png"
            style={{ width: "50%", marginTop: "10px" }}
          />
          <p className="text-small text-muted mt-3">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="mediaimages/streakLogo.png"
            style={{ width: "40%", marginTop: "10px" }}
          />
          <p className="text-small text-muted mt-3">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="mediaimages/sensibullLogo.svg"
            style={{ width: "40%", marginTop: "20px" }}
          />
          <p className="text-small text-muted mt-4">Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="mediaimages/zerodhaFundhouse.png"
            style={{ width: "45%", marginTop: "10px" }}
          />
          <p className="text-small text-muted mt-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="mediaimages/goldenpiLogo.png"
            style={{ width: "40%", marginTop: "10px" }}
          />
          <p className="text-small text-muted mt-3">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="mediaimages/dittoLogo.png"
            style={{ width: "35%", marginTop: "10px" }}
          />
          <p className="text-small text-muted mt-2">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
