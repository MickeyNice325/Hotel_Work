import React from 'react';
import { Link } from 'react-router-dom';
function Buyroom() {
  return (
    <div>
      <div className="container mt-5">
        {/* Progress Bar */}
        <div className="d-flex justify-content-center mb-4">
          <div className="progress" style={{ width: '50%' }}>
            <div className="progress-bar" style={{ width: '33%' }} role="progressbar">1</div>
            <div className="progress-bar bg-secondary" style={{ width: '33%' }} role="progressbar">2</div>
            <div className="progress-bar bg-secondary" style={{ width: '34%' }} role="progressbar">3</div>
          </div>
        </div>
        <div className="row">
          {/* Left Form Section */}
          <div className="col-md-6 text-start">
            <h4 className="mb-3">ผู้เข้าพัก</h4>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" id="firstName" placeholder="ชื่อ" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="lastName" placeholder="นามสกุล" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="phone" placeholder="อีเมล" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="phone" placeholder="เบอร์โทร" />
              </div>

              <h5 className="mt-4">ประเภทห้องพักและบริการเพิ่มเติม</h5>
            <div className="row">
            {/* ประเภทห้องพัก */}
            <div className="col-md-6">
                <h6>ประเภทห้องพัก</h6>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="roomType" id="singleRoom" />
                <label className="form-check-label" htmlFor="singleRoom">ห้องเดี่ยว</label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="roomType" id="doubleRoom" />
                <label className="form-check-label" htmlFor="doubleRoom">ห้องคู่</label>
                </div>
            </div>

            {/* บริการเพิ่มเติม */}
            <div className="col-md-6">
                <h6>บริการเพิ่มเติม</h6>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="breakfast" />
                <label className="form-check-label" htmlFor="breakfast">อาหารเช้า</label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="wifi" />
                <label className="form-check-label" htmlFor="wifi">Wi-Fi</label>
                </div>
            </div>
            </div>
              <h5 className="mt-4 ">จำนวนผู้เข้าพัก</h5>
              <div className="form-check ">
                <input className="form-check-input" type="radio" name="guests" id="oneGuest" />
                <label className="form-check-label" htmlFor="oneGuest">1</label>
              </div>
              <div className="form-check mb-5">
                <input className="form-check-input" type="radio" name="guests" id="twoGuests" />
                <label className="form-check-label" htmlFor="twoGuests">2</label>
              </div>
            </form>
          </div>

{/* Right Details Section */}
<div className="col-md-6">
  <div className="card">
    <div className="card-header text-white" style={{ backgroundColor: "#4B3C84", }}>
      <div className="d-flex justify-content-between align-items-center">
        <span>วันที่ 20/11/2567</span>
        <i className="bi bi-arrow-right"></i>
        <span>วันที่ 20/11/2569</span>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        {/* รูปภาพ */}
        <div className="col-md-4">
          <img src="img/4.jpg" className="img-fluid rounded" alt="Room" />
        </div>
        {/* ข้อมูล */}
        <div className="col-md-8 text-start">
          <h5 className="card-title fw-bold ">ห้องที่ตึงที่สุดในจักรวาลมาเวล</h5>
          <p className="card-text">
            21 ถ. บ้านม่วง ตำบลช้างเผือก อำเภอเมืองเชียงใหม่<br />
            เชียงใหม่ 50300-052 009 557
          </p>
          <p className="card-text">
            เห็นวิวภูเขาใหญ่<br />
            ตั้งอยู่ใกล้พิพิธภัณฑ์สถานแห่งชาติ<br />
            มีพื้นที่จอดรถฟรี<br />
            รวมบริการที่เหมาะสำหรับนักท่องเที่ยว
          </p>
          <h6 className="mt-3">บริการฟรี</h6>
          <ul className="list-unstyled">
            <li>✔ Wi-Fi ทุกจุด (ฟรี)</li>
            <li>✔ อาหารเช้า</li>
            <li>✔ ที่จอดรถฟรี</li>
            <li>✔ บริการรับส่งสนามบิน</li>
            <li>✔ สิ่งอำนวยความสะดวก</li>
          </ul>
          <p className="card-text text-end fs-5 fw-bold">ราคา 10,000 บาท</p>
          <Link to="/buyroom2" className="btn btn-success w-100">ถัดไป</Link>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Buyroom;
