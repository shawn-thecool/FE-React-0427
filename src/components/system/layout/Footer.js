import React from 'react';

function Footer({ companyName }) {
  return (
    <footer className="footer">
      <small className="txt_copyright">Copyright ⓒ {companyName} All rights reserved.</small>
    </footer>
  );
}

export default Footer;
