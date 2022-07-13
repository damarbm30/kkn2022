import React from "react";
import { umkm } from "../../data";

const Highlight = () => {
  return (
    <main className="pb-12">
      <h1 className="mb-12 text-center text-3xl font-bold md:text-4xl">UMKM Unggulan</h1>
      <div className="mx-auto grid max-w-fit grid-cols-1 gap-8 md:grid-cols-2">
        {umkm.map((item) => (
          <div className="max-w-[320px] justify-center rounded-xl p-4 shadow-2xl">
            <h2 className="text-xl font-medium">{item.name}</h2>
            <figure>
              <img src={item.img} alt="" className=" my-4 w-[240px]" />
              <figcaption>{item.desc}</figcaption>
            </figure>
          </div>
        ))}

        {/* <div className="justify-center rounded-xl p-4 shadow-2xl">
          <h2 className="text-xl font-medium">Nama UMKM</h2>
          <figure>
            <img src="https://dummyimage.com/600x400/000/fff" alt="" className=" my-4 w-[240px]" />
            <figcaption>Caption gambar</figcaption>
          </figure>
        </div> */}
      </div>
    </main>
  );
};

export default Highlight;
