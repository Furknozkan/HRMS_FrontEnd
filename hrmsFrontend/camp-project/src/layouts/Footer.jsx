import React from 'react'
import "./Footer.css"
const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column1*/}
                    <div className="col">
                        <h4>İletişim</h4>
                        <ul className="list-unstyled">
                            <li>E-Mail</li>
                            <li>Fax</li>
                            <li>Canlı destek</li>
                        </ul>
                    </div>
                    {/*Column2*/}
                    <div className="col">
                        <h4>Bizi Takip Edin</h4>
                        <ul className="list-unstyled">
                            <li>İnstagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>

                        </ul>


                    </div>
                     {/*Column3*/}
                     <div className="col">
                        <h4>Bloglar</h4>
                        <ul className="list-unstyled">
                            <li>Vizyonumuz</li>
                            <li>Misyonumuz</li>
                            <li>Hedeflerimiz</li>

                        </ul>


                    </div>
                    {/*Column3*/}
                    <div className="col">
                        <h4>Faydalı Linkler</h4>
                        <ul className="list-unstyled">
                            <li>Sıkça sorulanlar</li>
                            <li>HRMS nedir?</li>
                            <li>İş ilanları</li>

                        </ul>


                    </div>
                    

                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} All rights reserved

                    </p>

                </div>
            </div>
        </div>
    )
}
export default Footer;