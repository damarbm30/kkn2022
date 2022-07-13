import React from "react";

const Chip = ({ label }) => {
  return (
    <p className="w-fit rounded-md bg-gradient-to-r from-slate-500 to-blue-300 py-1 px-2 text-xs capitalize text-white">
      {label}
    </p>
  );
};

export default Chip;
