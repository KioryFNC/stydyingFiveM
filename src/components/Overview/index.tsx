import * as Element from './styles'

interface OverviewCardProps {
  color: string,
  value: string | number,
  label: string,
}

export function OverviewCard({ value, label, color }: OverviewCardProps) {
  return (
    <Element.Card>
      <Element.Dot color={color}/>
      <Element.Text>
        <Element.Value>{value}</Element.Value>
        <Element.Label>{label}</Element.Label>
      </Element.Text>
    </Element.Card>
  )
}