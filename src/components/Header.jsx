import logo from "../images/logo.svg";
import menuClose from "../images/icon-menu-close.svg";
import burger from "../images/icon-menu.svg";
import { useRef } from "react";
export default function Header() {
  const modalRef = useRef(null);
  function handleClose() {
    modalRef.current?.close();
  }
  function handleOpen() {
    modalRef.current?.showModal();
  }
  return (
    <header>
      <img src={logo} alt="Logo" className="logo-image" />
      <img
        src={burger}
        onClick={handleOpen}
        alt="Burger-menu"
        className="burger-image"
      />
      <ul className="nav-list">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
      <dialog ref={modalRef} className="modal">
        <nav>
          <img
            src={menuClose}
            onClick={handleClose}
            alt="Close menu"
            className="menu-close"
          />
          <ul className="nav-list-dialog">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      </dialog>
    </header>
  );
}
