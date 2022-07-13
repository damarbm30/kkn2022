import React from "react";
// import TourIcon from "@mui/icons-material/Tour";
// import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const Hero = () => {
  return (
    <main className="flex flex-col bg-zinc-200">
      <h1 className="text-center text-3xl font-bold md:text-4xl">Desa Gemawang</h1>
      <div className="mx-auto mt-12 grid max-w-[1366px] gap-12 md:grid-cols-2">
        <p className="mx-4 text-justify text-lg md:text-2xl">
          Sejarah Desa Gemawang jika dikaitkan dengan cerita masyarakat desa, kata gemawang berasal
          dari akronim <em>gema di awang-awang</em>. Desa Gemawang pada era dahulu telah terdengar
          atau kondang di mana-mana, dikarenakan menjadi salah satu percontohan desa vokasi di
          Indonesia. Mulai dari kegiatan desa, potensi yang dimiliki, sampai keterampilan{" "}
          <em>life skill</em> masyarakatnya
        </p>
        <div className="mx-4 flex min-w-[280px] flex-col rounded-xl border border-slate-300 bg-zinc-200 py-2 text-center shadow-xl">
          <h1 className="mb-4 text-2xl font-medium text-slate-500">Data Wilayah</h1>
          {/* <p className="flex items-center justify-center gap-1 text-xl font-medium text-slate-500">
            <LocalMallIcon className="text-indigo-600" /> Data Wilayah
          </p>
          <div className="flex flex-wrap items-center justify-center px-4">
            <p className="flex items-center gap-1 px-4 py-2 text-slate-500">
              <CircleOutlinedIcon fontSize="small" className="text-indigo-600" />
              Batik Gemawang
            </p>
            <p className="flex items-center gap-1 px-4 py-2 text-slate-500">
              <CircleOutlinedIcon fontSize="small" className="text-indigo-600" />
              Hafara Sepatu Batik
            </p>
          </div> */}
          {/* <p>Wisata</p>
          <div className="flex flex-wrap justify-center px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <LocalMallIcon className="h-6 text-indigo-600" /> Wisata 1
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <TourIcon className="h-6 text-indigo-600" /> Wisata 2
            </p>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Hero;
