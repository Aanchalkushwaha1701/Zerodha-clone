function Team() {
    return ( 
        <div className="container">
            <div className="row border-top mt-5  p-5">
                <h1 className="text-center fs-2 ">People</h1>
            </div>
            <div className="row">
                <div className="col-6 text-center text-muted">
                    <img  src="Media/images/nithinKamath.jpg" alt="nithin" style={{borderRadius:"100%",width:"40%"}}/>
                    <h5 className="mt-4">Nithin Kamath</h5>
                    <h6>Founder,CEO</h6>
                </div>
                <div className="col-6 text-muted">
                     <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
                </div>
            </div>
        </div>
     );
}

export default Team;