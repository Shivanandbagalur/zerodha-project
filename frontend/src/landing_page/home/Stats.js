import React from "react";
function stats() {
  return (
    <div className="container p-3">
      <div className="row p-4">
        <div className="col-6 p-4">
          <h1 className="fs-2 mb-5">Trust With Confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+crore customer trust Zerodha with &#8377;3.5+lakh
            crores worth of equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks,spam, "gamification", or annoying push
            notifications.High apps that you use at your pace,the way you like.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app,but a whole ecosystem.our investment in 30+ fintech
            startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and kill Switch,we don't facilitate
            transactions,but actively help you do better withyour money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="mediaimages/ecosystem.png" style={{ width: "90%" }}></img>
          <div className="text-center">
            <a href="" className="mx-5 " style={{ textDecoration: "none" }}>
              Explore our products
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default stats;
