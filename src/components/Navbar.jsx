import StoreIcon from "@mui/icons-material/Store";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNavbar = () => setNav(!nav);
  const closeMobileMenu = () => setNav(false);

  return (
    <header className="fixed z-50 mx-auto inline w-full">
      <nav className="top-0 flex items-center justify-between bg-slate-600 pl-6 text-xl font-medium">
        <div>
          <a href="/">
            <StoreIcon style={{ fontSize: 50, color: "rgb(209, 213, 219)" }} />
          </a>
        </div>
        <ul className="hidden text-gray-300 md:flex md:gap-10 md:px-8">
          <li className="h-20 transition-all hover:text-white">
            <Link
              to="/"
              className="flex h-full items-center py-3 hover:border-b-4 hover:border-solid hover:border-white hover:transition-all"
            >
              Beranda
            </Link>
          </li>
          <li className="h-20 transition-all hover:text-white">
            <Link
              to="/artikel"
              className="flex h-full items-center py-3 hover:border-b-4 hover:border-solid hover:border-white hover:transition-all"
            >
              Artikel
            </Link>
          </li>
          <li className="h-20 transition-all hover:text-white">
            <Link
              to="/potensi-daerah"
              className="flex h-full items-center py-3 hover:border-b-4 hover:border-solid hover:border-white hover:transition-all"
            >
              Potensi Daerah
            </Link>
          </li>
          <li className="h-20 transition-all hover:text-white">
            <Link
              to="/dokumentasi"
              className="flex h-full items-center py-3 hover:border-b-4 hover:border-solid hover:border-white hover:transition-all"
            >
              Dokumentasi Kegiatan
            </Link>
          </li>
        </ul>
        <div className="pr-6 md:hidden" onClick={handleNavbar}>
          {nav ? (
            <CloseIcon style={{ fontSize: 50, color: "rgb(209, 213, 219)" }} />
          ) : (
            <MenuIcon style={{ fontSize: 50, color: "rgb(209, 213, 219)" }} />
          )}
        </div>
        <div
          className={
            nav
              ? "absolute top-[50px] left-0 z-10 flex h-[calc(100vh-50px)] w-full flex-col items-center justify-evenly bg-white"
              : "hidden"
          }
        >
          <ul className="flex w-full flex-col text-center text-slate-500">
            <Link
              to="/"
              className="my-4 py-8 text-3xl hover:bg-slate-500 hover:text-white"
              onClick={closeMobileMenu}
            >
              <li>Beranda</li>
            </Link>
            <Link
              to="/artikel"
              className="my-4 py-8 text-3xl hover:bg-slate-500 hover:text-white"
              onClick={closeMobileMenu}
            >
              <li>Artikel</li>
            </Link>
            <Link
              to="/potensi-daerah"
              className="my-4 py-8 text-3xl hover:bg-slate-500 hover:text-white"
              onClick={closeMobileMenu}
            >
              <li>Potensi Daerah</li>
            </Link>
            <Link
              to="/dokumentasi"
              className="my-4 py-8 text-3xl hover:bg-slate-500 hover:text-white"
              onClick={closeMobileMenu}
            >
              <li>Dokumentasi Kegiatan</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
