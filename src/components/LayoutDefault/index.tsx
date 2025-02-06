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
            <img src={dashboard} alt="" />
            <NavLink to="/" >Dashboard</NavLink>
          </li>
          <li>
            <img src={bank} alt="" />
            <NavLink to="/" >Financeiro</NavLink>
          </li>
          <li>
            <img src={trophy} alt="" />
            <NavLink to="/" >Ranking</NavLink>
          </li>
          <li>
            <img src={workbook} alt="" />
            <NavLink to="/" >Farm</NavLink>
          </li>
          <li>
            <img src={mission} alt="" />
            <NavLink to="/" >Missões</NavLink>
          </li>
          <li>
            <img src={docs} alt="" />
            <NavLink to="/" >Logs</NavLink>
          </li>
          <li>
            <img src={store} alt="" />
            <NavLink to="/" >Loja</NavLink>
          </li>
        </Element.Routes>
      </Element.Navigation>

      <Element.Header>

      </Element.Header>

      <Element.Content>
        <Outlet />
      </Element.Content>
    </Element.Root>
  )
}