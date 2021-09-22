
import { Barra, ContainerCabecalho } from './styled'

import Cookies from 'js-cookie'
import { useHistory } from 'react-router';

export default function Cabecalho() {
    const navegation = useHistory;

    const logoff = () => {
        Cookies.remove('usuario-logado');
        navegation.push('/');
    }

    return (
        <ContainerCabecalho>
            <img src="/assets/images/logo-monkchat.png" alt="" />
            <Barra />
            <div className="titulo"> MonkChat </div>
            <div onClick={logoff}>&nbsp;&nbsp;Sair</div>
        </ContainerCabecalho>
    )
}
