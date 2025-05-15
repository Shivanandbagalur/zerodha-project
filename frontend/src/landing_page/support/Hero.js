function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="  pt-5" id="supportwrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-5 ">
        <div className="col-6 pt-1 pl-3 ">
          <h1 className="fs-4 ">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="p-2 mt-4 mb-3"
            placeholder="Eg: how do i activate F&O, why is my 
            order getting rejected ..."
          />
          <br />
          <a href="" className=" ">
            Track account opening{" "}
          </a>
          <a href="" className="p-3">
            Track segment activation{" "}
          </a>
          <a href="" className="p-3">
            Intraday margins{" "}
          </a>
          <br></br>
          <br></br>
          <a href="" className="pl-2 ">
            Kite user manual
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-5 pt-2 ">
          <h1 className="fs-3 mb-3 mr-5  ">Featured</h1>
          <ol style={{ lineHeight: "45px" }}>
            <li>
              <a href="">Surveillance measure on scrips - May 2025 </a>
            </li>
            <li>
              <a href="">Latest Intraday leverages and Square-off timings </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
