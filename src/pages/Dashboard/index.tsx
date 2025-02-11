import { OverviewCard } from "../../components/Overview"
import * as Element from "./styles"
import {Actions} from "../../components/Actions"
import walkieTalkie from "../../assets/walkieTalkie.png"
import uniform from "../../assets/uniform.png"
import map from "../../assets/map.png"
import discord from "../../assets/discord.png"
import plus from "../../assets/plus.svg"
import { Search } from "../../assets/search"
import { UpArrow } from "../../assets/UpArrow"
import { DownArrow } from "../../assets/DownArrow"
import { X } from "../../assets/X"
import { Filter } from "../../assets/Filter"

export function Dashboard() {
  return (
    <Element.Root>
      <Element.Status>
        <OverviewCard value="48" label="Membros Online" color="green"/>
        <OverviewCard value="105" label="Membros Totais" color="blue"/>
        <OverviewCard value="340" label="Horas Jogadas" color="yellow"/>
        <OverviewCard value="140/400" label="Farm Meta" color="purple"/>
      </Element.Status>
      <Element.Content>
        <Element.Members>
          <Element.Header>
            <div>
              <Search />
              <input type="text" placeholder="Pesquisar por nome ou ID"/>
            </div>
            <button> <img src={plus} />CONVIDAR</button>
          </Element.Header>

          <Element.Table>
            <table>
              <thead>
                <tr>
                  <th>Membro <Filter /></th>
                  <th>Cargo <Filter /></th>
                  <th>Status <Filter /></th>
                  <th>Meta <Filter /></th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Yuri Barros <span>[5592]</span></td>
                  <td>Líder</td>
                  <td>Online</td>
                  <td>140/400</td>
                  <td><UpArrow /> <DownArrow /> <X /></td>
                </tr>
                <tr>
                  <td>Diego Araujo <span>[2424]</span></td>
                  <td>Sub-líder</td>
                  <td>Online</td>
                  <td>140/400</td>
                  <td><UpArrow /> <DownArrow /> <X /></td>
                </tr>
                <tr>
                  <td>Luan Barros <span>[1010]</span></td>
                  <td>Gerente</td>
                  <td>Online</td>
                  <td>140/400</td>
                  <td><UpArrow /> <DownArrow /> <X /></td>
                </tr>
                <tr>
                  <td>Thiago Barros <span>[1818]</span></td>
                  <td>Membro</td>
                  <td>Online</td>
                  <td>140/400</td>
                  <td><UpArrow /> <DownArrow /> <X /></td>
                </tr>
                <tr>
                  <td>Yuri Barros <span>[5592]</span></td>
                  <td>Líder</td>
                  <td>Online</td>
                  <td>140/400</td>
                  <td><UpArrow /> <DownArrow /> <X /></td>
                </tr>
                <tr>
                  <td>Diego Araujo <span>[2424]</span></td>
                  <td>Sub-líder</td>
                  <td>Online</td>
                  <td>140/400</td>
                  <td><UpArrow /> <DownArrow /> <X /></td>
                </tr>
                <tr>
                  <td>Luan Barros <span>[1010]</span></td>
                  <td>Gerente</td>
                  <td>Online</td>
                  <td>140/400</td>
                  <td><UpArrow /> <DownArrow /> <X /></td>
                </tr>
                <tr>
                  <td>Thiago Barros <span>[1818]</span></td>
                  <td>Membro</td>
                  <td>Online</td>
                  <td>140/400</td>
                  <td><UpArrow /> <DownArrow /> <X /></td>
                </tr>
                <tr>
                  <td>Yuri Barros <span>[5592]</span></td>
                  <td>Líder</td>
                  <td>Online</td>
                  <td>140/400</td>
                  <td><UpArrow /> <DownArrow /> <X /></td>
                </tr>
                <tr>
                  <td>Diego Araujo <span>[2424]</span></td>
                  <td>Sub-líder</td>
                  <td>Online</td>
                  <td>140/400</td>
                  <td><UpArrow /> <DownArrow /> <X /></td>
                </tr>
                <tr>
                  <td>Luan Barros <span>[1010]</span></td>
                  <td>Gerente</td>
                  <td>Online</td>
                  <td>140/400</td>
                  <td><UpArrow /> <DownArrow /> <X /></td>
                </tr>
                <tr>
                  <td>Thiago Barros <span>[1818]</span></td>
                  <td>Membro</td>
                  <td>Online</td>
                  <td>140/400</td>
                  <td><UpArrow /> <DownArrow /> <X /></td>
                </tr>
              </tbody>
            </table>
          </Element.Table>
        </Element.Members>

        <Element.Activity>
          <Actions image={walkieTalkie} btn="ENTRAR" label="RÁDIO"/>
          <Actions image={uniform} btn="VESTIR" label="UNIFORME"/>
          <Actions image={map} btn="MARCAR" label="LOCALIZAÇÃO"/>
          <Actions image={discord} btn="ENTRAR" label="DISCORD"/>
        </Element.Activity>
      </Element.Content>
    </Element.Root>
  )
}