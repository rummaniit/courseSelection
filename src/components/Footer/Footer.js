import { CFooter, CLink } from '@coreui/react';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <h1>Footer</h1>
            <CFooter>
                <div>
                    <CLink href="https://coreui.io">CoreUI</CLink>
                    <span>&copy; 2021 creativeLabs.</span>
                </div>
                <div>
                    <span>Powered by</span>
                    <CLink href="https://coreui.io">CoreUI</CLink>
                </div>
            </CFooter>
        </div>
    );
};

export default Footer;