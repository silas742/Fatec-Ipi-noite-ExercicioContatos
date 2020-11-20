import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ContatosTela from '../Fatec-Ipi-Noite-Contatos/telas/ContatosTela';
import AdicionarContatosTela from '../Fatec-Ipi-Noite-Contatos/telas/AdicionarContatoTela';

const Navigator = createStackNavigator({
    Contatos: ContatosTela,
    AdicionarContato: AdicionarContatosTela
});

export default createAppContainer(Navigator);