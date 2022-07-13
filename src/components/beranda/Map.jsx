import React from "react";
import UMKM_Map from "../../assets/img/Indonesia-Political-Map.jpg";

const Map = () => {
  return (
    <main className="mt-12 pb-12">
      <h1 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        Peta Sebaran UMKM dan Wisata
      </h1>
      <img src={UMKM_Map} alt="" className="mx-auto flex max-w-xs md:max-w-4xl" />
    </main>
  );
};

export default Map;
