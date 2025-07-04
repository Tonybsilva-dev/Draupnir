import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta = {
  title: 'Components/Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Header

Componente de cabeçalho funcional com nome do usuário à esquerda, logo central e botão de login/logout à direita.

- Mostra "Olá, Antonio!" quando logado e "Visitante" quando deslogado.
- O botão alterna entre "Logar" e "Deslogar".
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => <Header />,
  parameters: {
    docs: {
      description: {
        story: 'Header funcional com alternância de login/logout.',
      },
    },
  },
}; 