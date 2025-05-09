import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";

export default ({ portfolioLinks }) => {
    return (
      <>
      <style>{`
        .text-box {
          color: #5846f9 !important;
        }
        .text-box:hover {
          color: #5846f9 !important;
        }
        .text-back{
        background-color: #5846f9 !important;
        }
        .text-back:hover{
              background-color: #5846f9 !important;
        }
      `}</style>
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            {
                portfolioLinks && portfolioLinks.map(({ title, caption }, index) => 
                    <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x text-box"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={ `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}` } alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>{ title }</h4>
                            <p className="text-muted">{ caption }</p>
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </section>
      </>
    )
}