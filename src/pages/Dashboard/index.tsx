import { OverviewCard } from "../../components/Overview"
import * as Element from "./styles"

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
          
        </Element.Actions>
      </Element.Content>
    </Element.Root>
  )
}