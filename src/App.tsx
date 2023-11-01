import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import EstiloGLobal, { Container } from './styles'
import Sidebar from './container/Sidebar'
import Sobre from './container/Sobre'
import Projetos from './container/Projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [themeDark, setThemeDark] = useState(false)

  function trocaTema() {
    setThemeDark(!themeDark)
  }

  return (
    <ThemeProvider theme={themeDark ? temaDark : temaLight}>
      <EstiloGLobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
