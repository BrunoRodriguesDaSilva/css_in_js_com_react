import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, Container } from './styles'

const Sidebar = () => (
  <aside>
    <Container>
      <Avatar />
      <Titulo fontSize={16}>Bruno Rodrigues</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        BrunoRodriguesDaSilva
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Front-End
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </Container>
  </aside>
)

export default Sidebar
