import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      className="text-xl mx-2 link-text"
      to="/"
      title="logo"
    >
      m<span className="text-red-500">.</span>wyd
    </Link>
  );
}