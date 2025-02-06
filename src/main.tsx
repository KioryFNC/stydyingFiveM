import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { Fragment } from 'react/jsx-runtime'

createRoot(document.getElementById('root')!).render(
  <Fragment>
    <App />
  </Fragment>
)
