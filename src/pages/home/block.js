import React from "react";
import { Link } from "react-router-dom";

const Block = ({ label, icon, link }) => {
  return (
    <div className="flex flex-col items-center">
      <Link to={link}>
        <div className="block-button border-4 rounded-xl inline-block border-primary p-6 cursor-pointer">
          <div className="text-primary">{icon}</div>
        </div>
      </Link>
      <h3 className="text-primary font-semibold text-xl mt-4">{label}</h3>
    </div>
  );
};

export default Block;
 