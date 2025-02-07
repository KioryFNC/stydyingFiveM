import { NavLink, Outlet } from "react-router-dom";
import * as Element from "./styles"

import person from "../../assets/person.png"
import dashboard from "../../assets/routesIcon/dashboard.png"
import bank from "../../assets/routesIcon/bank.png"
import trophy from "../../assets/routesIcon/trophy.svg"
import workbook from "../../assets/routesIcon/workbook.svg"
import mission from "../../assets/routesIcon/mission.svg"
import docs from "../../assets/routesIcon/docs.svg"
import store from "../../assets/routesIcon/store.svg"

import exit from "../../assets/exit.svg"

export function DefaultLayout() {
  return (
    <Element.Root>
      <Element.Navigation>
        <Element.Profile>
          <img src={person} alt="" />
          <div>
            <strong>Yuri Barros</strong>
            <span>#5592</span>
          </div>
        </Element.Profile>

        <Element.Routes>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              <img src={dashboard} alt="" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/financeiro" className={({ isActive }) => (isActive ? "active" : "")}>
              <img src={bank} alt="" />
              Financeiro
            </NavLink>
          </li>
          <li>
            <NavLink to="/financeiro" className={({ isActive }) => (isActive ? "active" : "")}>
              <img src={trophy} alt="" />
              Ranking
            </NavLink>
          </li>
          <li>
            <NavLink to="/financeiro" className={({ isActive }) => (isActive ? "active" : "")}>
              <img src={workbook} alt="" />
              Farm
            </NavLink>
          </li>
          <li>
            <NavLink to="/financeiro" className={({ isActive }) => (isActive ? "active" : "")}>
              <img src={mission} alt="" />
              Missões
            </NavLink>
          </li>
          <li>
            <NavLink to="/financeiro" className={({ isActive }) => (isActive ? "active" : "")}>
              <img src={docs} alt="" />
              Logs
            </NavLink>
          </li>
          <li>
            <NavLink to="/financeiro" className={({ isActive }) => (isActive ? "active" : "")}>
              <img src={store} alt="" />
              Loja
            </NavLink>
          </li>
        </Element.Routes>
      </Element.Navigation>

      <Element.Header>
        <h1> LIDER - LOS VAGOS</h1>

        <button>
          <img src={exit} alt="" />
          SAIR
        </button>
      </Element.Header>

      <Element.Content>
        <Outlet />
      </Element.Content>
    </Element.Root>
  )
}