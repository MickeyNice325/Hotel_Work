import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function Buyroom2() {
  const [showQR, setShowQR] = useState(false);

  const handleNextClick = () => {
    // แสดง SweetAlert2 พร้อม QR Code
    Swal.fire({
      title: 'ยืนยันการชำระเงิน?',
      text: "กรุณาตรวจสอบข้อมูลก่อนยืนยัน",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'ยกเลิก',
      didClose: () => {
        // เมื่อกดยืนยัน (confirm) จะเปิด QR Code และปุ่มกลับหน้าแรก
        Swal.fire({
          title: 'QR Code สำหรับการชำระเงิน',
          imageUrl: '/img/qrcode.png',  // ใส่ URL ของไฟล์ QR Code
          imageWidth: 256,
          imageHeight: 256,
          imageAlt: 'QR Code',
          confirmButtonText: 'กลับสู่หน้าแรก',
        }).then((result) => {
          if (result.isConfirmed) {
            // ทำการ redirect หรือการกระทำอื่นๆ เมื่อกด "กลับสู่หน้าแรก"
            window.location.href = '/';  // หรือใช้ Link ใน React
          }
        });
      },
    });
  };

  return (
    <div>
      <div className="container mt-5">
        {/* Progress Bar */}
        <div className="d-flex justify-content-center mb-4">
          <div className="progress" style={{ width: '50%' }}>
            <div className="progress-bar" style={{ width: '33%' }} role="progressbar">1</div>
            <div className="progress-bar" style={{ width: '33%' }} role="progressbar">2</div>
            <div className="progress-bar bg-secondary" style={{ width: '34%' }} role="progressbar">3</div>
          </div>
        </div>

        <div className="row">
          {/* Left Form Section */}
          <div className="col-md-6 text-start">
            <h4 className="mb-3">ชำระเงิน</h4>
            <form>
              <div className="mb-3">
                {/* Dropdown เลือกประเภทบัตร */}
                <select className="form-select" id="cardType" defaultValue="">
                  <option value="" disabled>เลือกประเภทบัตร</option>
                  <option value="visa">Visa</option>
                  <option value="mastercard">MasterCard</option>
                  <option value="amex">American Express</option>
                  <option value="jcb">JCB</option>
                </select>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="cardName" placeholder="ชื่อบนบัตร" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="cardNumber" placeholder="หมายเลขบัตร" />
              </div>
              <div className="mb-3 d-flex">
                <div className="me-3">
                  <label htmlFor="expiryDate" className="form-label">วันหมดอายุ</label>
                  <input type="date" className="form-control" id="expiryDate" />
                </div>
                <div>
                  <label htmlFor="cvv" className="form-label">รหัส CVC/CVV</label>
                  <input type="text" className="form-control" id="cvv" maxLength="4" placeholder="XXX" />
                </div>
              </div>
            </form>
          </div>

          {/* Right Details Section */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-white" style={{ backgroundColor: "#4B3C84" }}>
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
                    <h5 className="card-title fw-bold">ห้องที่ตึงที่สุดในจักรวาลมาเวล</h5>
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
                    <button
                      onClick={handleNextClick}
                      className="btn btn-success w-100"
                    >
                      ถัดไป
                    </button>
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

export default Buyroom2;
