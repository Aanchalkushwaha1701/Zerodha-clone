function RightSection({
  imageURL,
  productName,
  productDesrcription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-6 " style={{marginTop:"150px"}}>
          <h1 className="fs-4 text-muted mb-3" style={{lineHeight:"3"}}>{productName}</h1>
          <p>{productDesrcription}</p>
          <a href={learnMore}>
            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6">
            <img src={imageURL}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
