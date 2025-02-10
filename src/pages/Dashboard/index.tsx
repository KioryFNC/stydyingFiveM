import { OverviewCard } from "../../components/Overview"
import * as Element from "./styles"
import {Actions} from "../../components/Actions"
import walkieTalkie from "../../assets/walkieTalkie.png"
import uniform from "../../assets/uniform.png"
import map from "../../assets/map.png"
import discord from "../../assets/discord.png"

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
          <h1>members</h1>
        </Element.Members>

        <Element.Actions>
          <Actions image={walkieTalkie} btn="ENTRAR" label="RÁDIO"/>
          <Actions image={uniform} btn="VESTIR" label="UNIFORME"/>
          <Actions image={map} btn="MARCAR" label="LOCALIZAÇÃO"/>
          <Actions image={discord} btn="ENTRAR" label="DISCORD"/>
        </Element.Actions>
      </Element.Content>
    </Element.Root>
  )
}