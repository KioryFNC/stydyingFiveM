import { Outlet } from "react-router-dom";
import * as Element from "./styles"

export function DefaultLayout() {
  return (
    <Element.Root>
      <Element.Navigation>

      </Element.Navigation>

      <Element.Header>

      </Element.Header>

      <Element.Content>
        <Outlet />
      </Element.Content>
    </Element.Root>
  )
}