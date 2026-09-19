function Universe() {
    return ( 
       <div className="container">
        <div className="row text-center">
            <h1 className="fs-2 text-muted mb-3">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row mt-5">
        <div className="col-4 p-3  ">
             <img src="Media/images/smallcaseLogo.png" />
             <p className="text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 ">
           <img style={{width:"40%"}}src="Media/images/streakLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 ">
             <img style={{width:"50%"}}src="Media/images/sensibullLogo.svg" />
          <p className="text-small  mt-2 text-muted">Thematic investment platform</p>
        </div>
        </div>
        <div className="row">
        <div className="col-4 p-3 mt-5">
          <img style={{width:"50%"}}src="Media/images/zerodhaFundhouse.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"50%"}}src="Media/images/goldenpiLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width:"40%"}}src="Media/images/dittoLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        </div>
         <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
        </div>
       </div>
     );
}

export default Universe;