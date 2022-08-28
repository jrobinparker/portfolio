import React from "react";

const Header = ({ headerId, headerText }) => {
  return (
    <div className="header-container">
      <div className="header" id={`${headerId}`}>
        {headerText}
      </div>
    </div>
  );
};

export default Header;
