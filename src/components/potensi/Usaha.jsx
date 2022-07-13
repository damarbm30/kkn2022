import React from "react";
import ListUsaha from "./ListUsaha";
import { usaha } from "../../data";

const Usaha = () => {
  return (
    <div>
      <h1 className="mb-12 text-center text-4xl font-bold">Usaha Mikro Kecil Menengah</h1>
      <ListUsaha usaha={usaha} />
      {/* <h1 className="mt-12 text-center text-4xl font-bold">Wisata</h1> */}
    </div>
  );
};

export default Usaha;
