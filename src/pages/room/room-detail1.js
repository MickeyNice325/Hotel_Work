import React from 'react';

import { BrowserRouter } from 'react-router-dom';

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
            <div className="d-flex ">
                <div className="col-6 mb-3 mx-3">
                    <img src="/img/pexels.jpg" alt="Gallery Image" className="img-fluid rounded" />
                </div>
                <div className="col-6 ">
                    <img src="/img/hotel2.jpg" alt="Gallery Image" className="img-fluid rounded" />
                </div>
        </div>

          <div className="col-3">
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery Image"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-3">
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery Image"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-3">
            <img
              src="https://via.placeholder.com/150"
              alt="Gallery Image"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Feature Section */}
        <div className="highlight-box mt-4">
          <div className="row text-center">
            <div className="col">
              <span>สระว่ายน้ำ</span>
            </div>
            <div className="col">
              <span>บริการเด็ก</span>
            </div>
            <div className="col">
              <span>อาหารเช้าฟรี</span>
            </div>
            <div className="col">
              <span>ที่จอดรถ</span>
            </div>
            <div className="col">
              <span>Wi-Fi ฟรี</span>
            </div>
            <div className="col">
              <span>ทีวี</span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-4">
          <h2>เกี่ยวกับที่พัก</h2>
          <p>
            ห้องที่ดีที่สุดในรีสอร์ทสวนสวรรค์ ซึ่งมาพร้อมกับสิ่งอำนวยความสะดวกครบครัน เช่น
            โทรทัศน์จอแบน อินเทอร์เน็ต Wi-Fi สระว่ายน้ำ และอื่นๆ ฟรี
          </p>
        </div>

        {/* Recommended Rooms */}
        <div className="mt-4">
          <h2>ห้องพักที่คล้ายกัน / แนะนำ</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card card-custom">
                <img
                  src="https://via.placeholder.com/300x200"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">สระว่ายน้ำ</h5>
                  <p className="card-text">เครื่องปรับอากาศ</p>
                  <Link to="#" className="btn btn-primary">
                    ดูเพิ่มเติม
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-custom">
                <img
                  src="https://via.placeholder.com/300x200"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">ที่จอดรถ</h5>
                  <p className="card-text">ทีวีเพดาน</p>
                  <Link to="#" className="btn btn-primary">
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
