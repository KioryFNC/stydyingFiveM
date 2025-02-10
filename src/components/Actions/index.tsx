import * as Element from './styles'
import Edit from '../../assets/edit.png'

interface ActionsProps {
  image: string,
  label: string,
  btn: string,
}

export function Actions({ image, label, btn }: ActionsProps) {
  return (
    <Element.Action>
        <img src={image} />
        <Element.Texts>
          <span>{label}</span>
          <button>{btn}</button>
        </Element.Texts>
        <img src={Edit} />
    </Element.Action>
  )
}