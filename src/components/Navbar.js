import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NTM <br />HOTEL</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" to="/" aria-current="page">หน้าแรก</Link>  {/* ใช้ Link แทน a */}
                            <Link className="nav-link" to="/contact">ติดต่อสอบถามได้ที่</Link>  {/* ใช้ Link แทน a */}
                            <Link className="nav-link" to="/about">เกี่ยวกับโรงแรม</Link>  {/* ใช้ Link แทน a */}
                            <Link className="nav-link" to="/contact-methods">ช่องทางการติดต่อ</Link>  {/* ใช้ Link แทน a */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
