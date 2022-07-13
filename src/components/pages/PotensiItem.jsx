import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmptyList from "../common/EmptyList";
import { usaha } from "../../data";
import Chip from "../common/Chip";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";

const PotensiItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  // get blog from its id
  useEffect(() => {
    let item = usaha.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, []);

  return (
    <div className="relative top-[40px] bg-zinc-200 pb-12 pt-8 md:top-[80px] md:pt-0">
      <Link
        to="/potensi-daerah"
        className="mb-8 ml-4 inline-block pt-4 text-2xl font-medium text-gray-400 transition-all hover:text-gray-700"
      >
        <span>&#8592;</span> Kembali
      </Link>

      {item ? (
        <div className="my-0 mx-auto max-w-[700px]">
          <header className="text-center">
            <p className="text-xs font-medium text-gray-400">
              Dipublikasikan pada {item.createdAt}
            </p>
            <h1 className="text-3xl font-bold md:text-4xl">{item.title}</h1>
            <div className="flex justify-center gap-4">
              {item.subCategory.map((category, index) => (
                <div className="my-2 md:my-4">
                  <Chip key={index} label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={item.cover} alt="cover" className="w-full rounded-2xl px-2 md:px-0" />
          <div className="m-2 mt-4 justify-center rounded-xl bg-white p-4 shadow-2xl">
            <ul className="mt-4 ml-4">
              <li className="mb-1 flex items-center gap-1">
                <PersonOutlineOutlinedIcon />
                {item.owner}
              </li>
              <li className="mb-1 flex items-center gap-1">
                <LocationOnOutlinedIcon />
                {item.address}
              </li>
              <li className="mb-1 flex items-center gap-1">
                <LocalPhoneOutlinedIcon />
                {item.phone}
              </li>
              <li className="mb-1 flex items-center gap-1">
                <WorkOutlineOutlinedIcon />
                {item.product}
              </li>
              <li className="flex items-center gap-1">
                <LocalAtmOutlinedIcon />
                {item.price}
              </li>
            </ul>
            <p className="mt-4 px-4 text-justify">{item.firstParagraph}</p>
            <p className="mt-4 px-4 text-justify">{item.secondParagraph}</p>
          </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default PotensiItem;
