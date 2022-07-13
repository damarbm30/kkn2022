import React from "react";
import ItemUsaha from "./ItemUsaha";

const ListUsaha = ({ usaha }) => {
  return (
    // <div className="mx-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
    <div className="mx-auto flex w-[100%] flex-wrap justify-center gap-12">
      {usaha.map((umkm) => (
        <ItemUsaha usaha={umkm} key={umkm.id} />
      ))}
    </div>
  );
};

export default ListUsaha;
