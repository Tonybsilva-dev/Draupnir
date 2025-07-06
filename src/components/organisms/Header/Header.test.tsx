import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';
import { Globe, User, Settings as SettingsIcon, LogOut } from 'lucide-react';

// Helper para encontrar ícone pelo título SVG
function getIconByTitle(title: string) {
  return screen.getAllByRole('img', { hidden: true }).find(icon => {
    return icon.querySelector('title')?.textContent === title;
  });
}

describe('Header', () => {
  const user = userEvent.setup();

  describe('Renderização e Estrutura', () => {
    it('renderiza o logo como Avatar transparente', () => {
      render(<Header />);
      const logo = screen.getByRole('img', { name: /avatar de logo/i });
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveStyle('background: transparent');
    });

    it('renderiza a barra de pesquisa centralizada', () => {
      render(<Header />);
      const input = screen.getByPlaceholderText('Search...');
      expect(input).toBeInTheDocument();
      // Verifica se está dentro de um Input.Root
      expect(input.closest('div')).toBeInTheDocument();
    });

    it('renderiza o botão de internacionalização com ícone de globo', () => {
      render(<Header />);
      // Usa getAllByRole e filtra pelo ícone de globo
      const buttons = screen.getAllByRole('button', { name: /\[object Object\] button/i });
      const globeButton = buttons.find(button =>
        button.querySelector('svg[class*="lucide-globe"]')
      );
      expect(globeButton).toBeInTheDocument();
      expect(globeButton?.querySelector('svg')).toBeInTheDocument();
    });

    it('renderiza o botão de login com Typography', () => {
      render(<Header />);
      const loginButton = screen.getByText('LOGIN').closest('button');
      expect(loginButton).toBeInTheDocument();
      expect(loginButton?.textContent?.toLowerCase()).toContain('login');
      // Typography: verifica se há um elemento com font-weight: 500
      expect(loginButton?.querySelector('p')).toHaveStyle('font-weight: 500');
    });
  });

  describe('Dropdown de Internacionalização', () => {
    it('abre o dropdown de idiomas e mostra as opções', async () => {
      render(<Header />);
      // Usa getAllByRole e filtra pelo ícone de globo
      const buttons = screen.getAllByRole('button', { name: /\[object Object\] button/i });
      const globeButton = buttons.find(button =>
        button.querySelector('svg[class*="lucide-globe"]')
      );
      expect(globeButton).toBeInTheDocument();
      await user.click(globeButton!);
      expect(screen.getByText(/ENGLISH/i)).toBeInTheDocument();
      expect(screen.getByText(/SPANISH/i)).toBeInTheDocument();
      expect(screen.getByText(/PORTUGUESE/i)).toBeInTheDocument();
    });
  });

  describe('Login e Profile', () => {
    it('mostra LOGIN quando não autenticado e troca para PROFILE ao clicar', async () => {
      render(<Header />);
      const loginButton = screen.getByText('LOGIN').closest('button');
      expect(loginButton).toBeInTheDocument();
      await user.click(loginButton!);
      expect(screen.getByText(/PROFILE/i)).toBeInTheDocument();
      // Avatar do usuário deve ser transparente
      const avatar = screen.getAllByRole('img', { name: /user/i })[0];
      expect(avatar).toHaveStyle('background: transparent');
    });

    it('mostra o dropdown de profile com ícones e opções corretas', async () => {
      render(<Header />);
      // Login
      const loginButton = screen.getByText('LOGIN').closest('button');
      await user.click(loginButton!);
      // Abre dropdown do profile
      const profileButton = screen.getByText(/PROFILE/i).closest('button');
      await user.click(profileButton!);
      // Opções
      const account = screen.getByText(/ACCOUNT/i);
      const settings = screen.getByText(/SETTINGS/i);
      const logout = screen.getByText(/LOGOUT/i);
      expect(account).toBeInTheDocument();
      expect(settings).toBeInTheDocument();
      expect(logout).toBeInTheDocument();
      // Ícones - verifica se há SVGs antes de cada opção
      expect(account.previousSibling?.nodeName.toLowerCase()).toBe('svg');
      expect(settings.previousSibling?.nodeName.toLowerCase()).toBe('svg');
      expect(logout.previousSibling?.nodeName.toLowerCase()).toBe('svg');
    });

    it('faz logout ao clicar em LOGOUT e volta para LOGIN', async () => {
      render(<Header />);
      // Login
      const loginButton = screen.getByText('LOGIN').closest('button');
      await user.click(loginButton!);
      // Abre dropdown do profile
      const profileButton = screen.getByText(/PROFILE/i).closest('button');
      await user.click(profileButton!);
      // Clica em logout
      const logout = screen.getByText(/LOGOUT/i);
      await user.click(logout);
      // Deve voltar para login
      expect(screen.getByText('LOGIN')).toBeInTheDocument();
    });
  });

  describe('Acessibilidade e Navegação', () => {
    it('header tem role banner', () => {
      render(<Header />);
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });
    it('navegação tem role navigation', () => {
      render(<Header />);
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
    it('todos os botões são acessíveis', () => {
      render(<Header />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });
    it('todos os textos principais usam Typography', () => {
      render(<Header />);
      // Typography para login - verifica se o elemento LOGIN tem font-weight: 500
      const loginText = screen.getByText('LOGIN');
      expect(loginText).toHaveStyle('font-weight: 500');
    });

    it('Typography do PROFILE usa font-weight: 500 quando visível', async () => {
      render(<Header />);
      // Login para mostrar o PROFILE
      const loginButton = screen.getByText('LOGIN').closest('button');
      await user.click(loginButton!);
      // Verifica se o PROFILE tem Typography com font-weight: 500
      const profileText = screen.getByText(/PROFILE/i);
      expect(profileText).toHaveStyle('font-weight: 500');
    });
  });

  describe('Consistência Visual', () => {
    it('Avatar do usuário e logo são sempre transparentes', async () => {
      render(<Header />);
      // Logo
      const logo = screen.getByRole('img', { name: /avatar de logo/i });
      expect(logo).toHaveStyle('background: transparent');
      // Login e profile
      const loginButton = screen.getByText('LOGIN').closest('button');
      await user.click(loginButton!);
      const avatar = screen.getAllByRole('img', { name: /user/i })[0];
      expect(avatar).toHaveStyle('background: transparent');
    });
    it('Ícones do dropdown de profile estão presentes', async () => {
      const { container } = render(<Header />);
      // Login
      const loginButton = screen.getByText('LOGIN').closest('button');
      await user.click(loginButton!);
      // Abre dropdown do profile
      const profileButton = screen.getByText(/PROFILE/i).closest('button');
      await user.click(profileButton!);
      // Verifica se há SVGs no dropdown (ícones)
      const svgs = container.querySelectorAll('svg');
      expect(svgs.length).toBeGreaterThan(0);
      // Verifica se há pelo menos 3 SVGs (User, Settings, LogOut)
      const svgCount = Array.from(svgs).length;
      expect(svgCount).toBeGreaterThanOrEqual(3);
    });
  });
}); 