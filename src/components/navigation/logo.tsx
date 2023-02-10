import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link
      className="text-xl mx-2 link-text"
      to="/"
    >
      m<span className="text-red-500">.</span>wyd
    </Link>
  );
}

export default Logo;