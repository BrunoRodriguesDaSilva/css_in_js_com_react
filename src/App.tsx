import EstiloGLobal, { Container } from './styles'
import Sidebar from './container/Sidebar'
import Sobre from './container/Sobre'
import Projetos from './container/Projetos'

function App() {
  return (
    <>
      <EstiloGLobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
