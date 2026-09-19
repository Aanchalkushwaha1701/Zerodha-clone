import "./Hero.css";
function Hero() {
  return (
    <div className="container-fluid" id="support-hero">
      <div className="p-5" id="wrapper-hero">
        <h4>Support Portal</h4>
        <a href="">TrackTicket</a>
      </div>
      <div className=" row p-5  mb-5">
        <div className="col-6 p-5">
          <h3 className="fs-3">
           
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input type="text" placeholder="Eg.how do i activate F&O" />
          <br/>
          <a style={{marginRight:"20px"}} href="">Track account opening</a>
          <a style={{marginRight:"20px"}}href="">Track segment activation</a>
          <br/>
          <a style={{marginRight:"20px"}}href="">Intraday margins</a>
          <a style={{marginRight:"20px"}}href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
            <h3>Featured</h3>
            <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
