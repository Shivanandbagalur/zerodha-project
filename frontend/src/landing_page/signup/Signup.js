function SignUp() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center  mt-5 fs-1 text-muted">
          Open a free demat and trading account online
        </h1>
        <p className=" text-center text-muted fs-5 p-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
        <div className="col-7 p-4 mt-4">
          <img src="mediaimages\accountopen.svg" />
        </div>
        <div className="col-5 mt-5 p-5">
          <h1 className="p-1">Signup now</h1>
          <p className="text-muted p-1 ml-5 ">
            Or track your existing application
          </p>

          <div class="container">
            <div class="input-group">
              {/* <!-- Static flag image on the left --> */}
              <span
                class="input-group-text p-3 "
                style={{ width: "80px", border: "0.2px solid black" }}
              >
                <img
                  className="ml-3"
                  src="https://flagcdn.com/in.svg"
                  alt="india flag"
                  class="flag-icon"
                />
                +91
              </span>
              <input
                style={{ width: "250px", border: "0.2px solid black" }}
                id="phone"
                type="tel"
                placeholder="     Enter your phone number"
              />
            </div>
          </div>
          <div className="p-3">
            <button
              id="sign"
              className="p-2 item-center"
              style={{ width: "250px" }}
            >
              <h4>Get OTP</h4>
            </button>
          </div>
          <p className="text-muted fs-6 p-2">
            By proceeding, you agree to the{" "}
            <a style={{ textDecoration: "none" }} href="">
              Zerodha terms
            </a>{" "}
            &{" "}
            <a style={{ textDecoration: "none" }} href="">
              privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
