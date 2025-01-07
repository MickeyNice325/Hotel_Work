import React from 'react';

import { Link } from 'react-router-dom';

function RoomDetail1() {
  return (
    <div>
      
        {/* Header Section */}
        <div className="mb-4">
        <div className="text-center mt-2">
        <div className="text-center mt-2">
            <div className="d-flex justify-content-start">
                <button className="btn btn-purple mx-2 text-start">ห้องที่ตึงที่สุดในจักรวาลมาเวล</button>
                <button className="btn btn-purple mx-2 text-start">ประเภทห้อง : ครอบครัว</button>
                <button className="btn btn-purplelow mx-2 text-start">ราคา: 100,000 บาท/คืน</button>
            </div>
        </div>

        </div>
        </div>

        {/* Image Gallery */}
        <div className="row">
            <div className="d-flex mx-3">
                <div className="col-6 mb-3">
                    <img src="/img/pexels.jpg" alt="Gallery Image" className="img-fluid rounded" 
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}/>
                </div>
                <div className="col-6">
                    <img src="/img/hotel2.jpg" alt="Gallery Image" className="img-fluid rounded" 
                    style={{ width: '90%', height: '300px', objectFit: 'cover' }}/>
                </div>
        </div>

          <div className="col-3 ms-3">
            <img
              src="/img/hotel1.jpg"
              alt="Gallery Image"
              className="img-fluid rounded"
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-3 ms-3">
            <img
              src="/img/hotel1.jpg"
              alt="Gallery Image"
              className="img-fluid rounded"
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-5 ">
            <img
              src="/img/hotel1.jpg"
              alt="Gallery Image"
              className="img-fluid rounded"
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
          </div>
          
        </div>
{/* Feature Section with Booking */}
<div className="highlight-box mt-4 d-flex justify-content-between">
  {/* Feature Section */}
  <div className="features-section w-75">
    <div className="row text-center">
      <div className="col">
        <i className="fas fa-swimmer fa-2x text-primary"></i>
        <span className="d-block mt-2">สระว่ายน้ำ</span>
      </div>
      <div className="col">
        <i className="fas fa-baby fa-2x text-primary"></i>
        <span className="d-block mt-2">บริการเด็ก</span>
      </div>
      <div className="col">
        <i className="fas fa-utensils fa-2x text-primary"></i>
        <span className="d-block mt-2">อาหารเช้าฟรี</span>
      </div>
      <div className="col">
        <i className="fas fa-parking fa-2x text-primary"></i>
        <span className="d-block mt-2">ที่จอดรถ</span>
      </div>
      <div className="col">
        <i className="fas fa-wifi fa-2x text-primary"></i>
        <span className="d-block mt-2">Wi-Fi ฟรี</span>
      </div>
      <div className="col">
        <i className="fas fa-tv fa-2x text-primary"></i>
        <span className="d-block mt-2">ทีวี</span>
      </div>
    </div>
  </div>

{/* Booking Section */}
<div
  className="booking-section w-50 mx-3 card card-custom"
  style={{ backgroundColor: "#4B3C84", borderRadius: "15px" }}
>
  <div className="bg-purple rounded p-4 text-white">
    <div className="d-flex justify-content-between mb-3">
      <div className="me-2 w-50">
        <label htmlFor="checkin" className="form-label">วันที่จอง</label>
        <input
          type="date"
          className="form-control"
          id="checkin"
          style={{ borderRadius: "8px" }}
        />
      </div>
      <div className="ms-2 w-50">
        <label htmlFor="checkout" className="form-label">ถึงวันที่</label>
        <input
          type="date"
          className="form-control"
          id="checkout"
          style={{ borderRadius: "8px" }}
        />
      </div>
    </div>
    <Link to='/buyroom'
      className="btn btn-danger w-100"
      style={{ borderRadius: "8px" }}
    >
      จองเลย
    </Link>
  </div>
</div>

</div>


  {/* Description Section */}
  <div className="mt-4 text-start ms-3">
          <h4>เกี่ยวกับที่พัก (ห้องที่ตึงที่สุดในจักรวาลมาเวล)</h4>
          <p>
          ห้องที่ตึงที่สุดในจักรวาลมาเวล ซึ่งมักจะมีขนาดกว้างขวางกว่าห้องมาตรฐาน เหมาะสำหรับครอบครัว ภายในห้องจะมีเตียงขนาดใหญ่ เช่น เตียงควีนไซส์หรือคิงไซส์ พร้อมสิ่งอำนวยความสะดวกครบครัน เช่น โทรทัศน์จอแบน, ผาเช็ดตัว, wi-fi, เครื่องปรับอากาศ, อ่างอาบน้ำ, สระว่ายน้ำ และมีบริการอาหารเช้า/เย็น ฟรี
          </p>
        </div>
{/* Recommended Rooms */}
<div className="mt-4 text-start ms-2">
  <h5>ห้องพักที่คล้ายกัน / แนะนำ</h5>
  <div className="row">
    <div className="col-md-6 mb-4">
      <div className="card card-custom d-flex flex-row p-3" style={{ backgroundColor: "#4B3C84", borderRadius: "15px" }}>
        <img
          src="/img/6.jpg"
          className="img-fluid rounded me-3"
          alt="..."
          style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "10px" }}
        />
        <div className="text-white d-flex flex-column justify-content-between">
          <div>
            <div className="d-flex">
              <span className="me-3">
                <i className="fas fa-swimmer me-1"></i> สระว่ายน้ำ
              </span>
              <span className="me-3">
                <i className="fas fa-wind me-1"></i> เครื่องปรับอากาศ
              </span>
              <span>
                <i className="fas fa-parking me-1"></i> ที่จอดรถ
              </span>
            </div>
          </div>
          <Link to="#" className="btn btn-danger mt-3  w-100" style={{ alignSelf: "start" }}>
            ดูเพิ่มเติม
          </Link>
        </div>
      </div>
    </div>
    <div className="col-md-6 mb-4">
      <div className="card card-custom d-flex flex-row p-3" style={{ backgroundColor: "#4B3C84", borderRadius: "15px" }}>
        <img
          src="/img/3.jpg"
          className="img-fluid rounded me-3"
          alt="..."
          style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "10px" }}
        />
        <div className="text-white d-flex flex-column justify-content-between">
          <div>
          <div className="d-flex">
              <span className="me-3">
                <i className="fas fa-swimmer me-1"></i> สระว่ายน้ำ
              </span>
              <span className="me-3">
                <i className="fas fa-wind me-1"></i> เครื่องปรับอากาศ
              </span>
              <span>
                <i className="fas fa-parking me-1"></i> ที่จอดรถ
              </span>
            </div>
          </div>
          <Link to="#" className="btn btn-danger mt-3 w-100 " style={{ alignSelf: "start" }}>
            ดูเพิ่มเติม
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default RoomDetail1;
