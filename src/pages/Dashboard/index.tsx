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
import { useMembers } from "../../contexts/MembersContext" 
import { useState } from "react"
 
export function Dashboard() {
  const { members, inviteMember, removeMember, promoteMember, demoteMember, sortMembers } = useMembers();
  const [search, setSearch] = useState("")
  const [filterType, setFilterType] = useState("id")
  const [isAscending, setIsAscending] = useState(true)

  const toggleFilter = (type: string) => {
    if (filterType === type) {
      setIsAscending(!isAscending)
    } else {
      setFilterType(type)
      setIsAscending(true)
    }
  }

  const handleInvite = () => {
    if (search.trim() !== "") {
      inviteMember(search, "Membro", "Online", 100)
      setSearch("")
    }
  };

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) || member.id.includes(search)
  )

  const sortedMembers = sortMembers(filteredMembers, filterType, isAscending)


  return (
    <Element.Root>
      <Element.Status>
        <OverviewCard value={members.filter(member => member.status === "Online").length.toString()} label="Membros Online" color="green"/>
        <OverviewCard value={members.length.toString()} label="Membros Totais" color="blue"/>
        <OverviewCard value="340" label="Horas Jogadas" color="yellow"/>
        <OverviewCard value="140/400" label="Farm Meta" color="purple"/>
      </Element.Status>
      <Element.Content>
        <Element.Members>
          <Element.Header>
            <div>
              <Search />
              <input 
                type="text" 
                placeholder="Pesquisar por nome ou ID" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
              />
            </div>
            <button onClick={handleInvite}> 
              <img src={plus} />CONVIDAR
            </button>
          </Element.Header>

          <Element.Table>
            <table>
              <thead>
                <tr>
                  <th onClick={() => toggleFilter("name")}>Membro <Filter /></th>
                  <th onClick={() => toggleFilter("role")}>Cargo <Filter /></th>
                  <th onClick={() => toggleFilter("status")}>Status <Filter /></th>
                  <th onClick={() => toggleFilter("goal")}>Meta <Filter /></th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {sortedMembers.map((member) => (
                  <tr key={member.id}>
                    <td>{member.name} <span>[{member.id.padStart(4, "0")}]</span></td>
                    <td>{member.role}</td>
                    <td>
                      <Element.StatusIndicator $status={member.status}>
                        {member.status}
                      </Element.StatusIndicator> 
                    </td>
                    <td>{member.goal} / 400</td>
                    <td>
                      <button onClick={() => promoteMember(member.id)}><UpArrow /></button>
                      <button onClick={() => demoteMember(member.id)}><DownArrow /></button>
                      <button onClick={() => removeMember(member.id)}><X /></button>
                    </td>
                  </tr>
                ))}
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