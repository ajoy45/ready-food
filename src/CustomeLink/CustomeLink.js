import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomeLink = ({ children,to}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
      <Link
        style={{ textDecoration: match ? " underline" : "none" }}
        to={to}
      >
        {children}
      </Link>
      
    </div>
    );
};

export default CustomeLink;