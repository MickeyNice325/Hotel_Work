import React from 'react';

function Footer() {
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">NTM <br></br>HOTEL</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-light" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <p className="text-start"><strong>ติดต่อสอบถามได้ที่<br/>0856231987<br/> NTMHOTEL</strong></p>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
        
    );
}
export default Footer;