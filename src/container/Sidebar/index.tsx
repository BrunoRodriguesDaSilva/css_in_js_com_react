import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, Container } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
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
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </Container>
  </aside>
)

export default Sidebar
