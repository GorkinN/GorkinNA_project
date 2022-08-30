import React from 'react';
import Hlink from '../../Hlink/Hlink';
import Regulartext from '../../Text/RegularText/RegularText';
import './CompanyContacts.css';
//import "../../common.css";
const Companycontacts = () => {
    return (
        <div className="header__company-contacts _container">
                <div className="company-contacts__info">
                    <ul className="company-contacts__info-list">
                        <li className="company-contacts__info-item">
                            <Hlink href={"#"}>
                                Chat with us
                            </Hlink>
                        </li>
                        <li className="company-contacts__info-item">
                            <Regulartext>+420 336 775 664</Regulartext>
                        </li>
                        <li className="company-contacts__info-item">
                            <Regulartext>info@freshnesecom.com</Regulartext>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="company-contacts__info-list">
                        <li className="company-contacts__info-item_long-margin">
                            <Hlink href={"#"}>
                                Blog
                            </Hlink>
                        </li>
                        <li className="company-contacts__info-item_long-margin">
                            <Hlink href={"#"}>
                                About Us
                            </Hlink>
                        </li>
                        <li className="company-contacts__info-item_long-margin">
                            <Hlink href={"#"}>
                                Careers
                            </Hlink>
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default Companycontacts;
