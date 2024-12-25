import React from 'react';

function Carousel() {
  return (
    <div class='mt-5 w-100 px-5 '>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner rounded-4">
            <div className="carousel-item active">
            <img src="/img/1.PNG"alt="..." />
            </div>
            <div className="carousel-item">
            <img src="/img/2.jpg" alt="..." />
            </div>
            <div className="carousel-item">
            <img src="/img/3.jpg" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  );
}

export default Carousel;
