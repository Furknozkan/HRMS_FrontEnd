import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="row footer-top">
          <div className="col-lg-6">
            <a href="/#" className="logo">
            👨‍💼HRMS
            </a>
          </div>
          <div className="col-lg-2 footer-menu">
            <nav>
              <h5>İletişim</h5>
              <ul>
                <li>
                  <a href="/#">Mail</a>
                </li>
                <li>
                  <a href="/#">Teknik Destek</a>
                </li>
                <li>
                  <a href="/#">Canlı Destek</a>
                </li>
              </ul>
            </nav>


          </div>
          <div className="col-lg-2 footer-menu">
            <nav>
              <h5>Topluluk</h5>
              <ul>
                <li>
                  <a href="/#">Hakkımızda</a>
                </li>
                <li>
                  <a href="/#">Sorun Bildir</a>
                </li>
               
              </ul>
            </nav>
          </div>
          <div className="col-lg-2 footer-menu">
            <nav>
              <h5>Yardımcı Kaynaklar</h5>
              <ul>
                
                <li>
                  <a href="/#">CV Rehberi</a>
                </li>
                <li>
                  <a href="/#">Kullanım</a>
                </li>
                <li>
                  <a href="/#">Sık Sorulan Sorular</a>
                </li>
               
                <li>
                  <a href="/#">Kariyer</a>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="footer-bottom">
            <p>
              &copy; 2021 . All rights reserved.
            </p>
            <nav className="footer-menu d-inline">
              <ul>
                <li>
                  <a href="/#">Kullanım Koşulları</a>
                </li>
                <li>
                  <a href="/#">Gizlilik Politikası</a>
                </li>
                <li>
                  <a href="/#">Güvenlik</a>
                </li>
                
            
              </ul>
            </nav>
           
          </div>
        </div>
      </div>
    </div>
  );
}