import React, { useMemo } from "react";
import logo from "../assets/logo.png";
import { useStoreState } from "../redux/selector";
import locale from "../localization/locale.json";
import { useDispatch } from "react-redux";
import { setLang } from "../redux/lang";
import { NavLink } from "react-router-dom";

function Navbar() {
  const states = useStoreState();
  const langData = useMemo(() => locale[states.lang], [states.lang]);
  const dispatch = useDispatch();

  return (
    <div className="Navbar">
      <img src={logo} alt="" />

      <div className="cart">
        <NavLink>{langData.home}</NavLink>
        <NavLink>{langData.destination}</NavLink>
        <NavLink>{langData.about}</NavLink>
        <NavLink>{langData.partner}</NavLink>
        <button className="btn">{langData.login}</button>
        <button className="btn">{langData.register}</button>
        <select
          value={states.lang}
          onChange={(e) => dispatch(setLang(e.target.value))}
        >
          <option value="uz">UZ</option>
          <option value="en">EN</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar;
