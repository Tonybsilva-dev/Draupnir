import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import Avatar from '../../atoms/Avatar/Avatar';

const USERNAME = 'Antonio';
const USER_AVATAR = '';

const navLinks = [
  { label: 'Início', href: '#' },
  { label: 'Componentes', href: '#' },
  { label: 'Tokens', href: '#' },
  { label: 'Sobre', href: '#' },
];

export const Header: React.FC = () => {
  const [logged, setLogged] = useState(true);

  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-white border-b border-zinc-200 shadow-sm">
      {/* Esquerda: Logo */}
      <div className="flex items-center gap-2 min-w-[120px]">
        <span className="text-xl font-bold text-zinc-900 select-none">Draupnir DS</span>
      </div>

      {/* Centro: Navegação */}
      <nav className="flex-1 flex justify-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-zinc-700 hover:text-green-700 font-medium transition-colors px-2 py-1 rounded"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Direita: Usuário */}
      <div className="flex items-center gap-4 min-w-[180px] justify-end">
        {logged ? (
          <Dropdown>
            <Dropdown.Trigger asChild>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-zinc-100 transition">
                <Avatar size="sm" description={USERNAME} image={USER_AVATAR || undefined} />
                <span className="text-zinc-800 font-medium">{USERNAME}</span>
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item>Perfil</Dropdown.Item>
              <Dropdown.Item>Configurações</Dropdown.Item>
              <Dropdown.Item onSelect={() => setLogged(false)} className="text-red-600">Sair</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        ) : (
          <Button variant="primary" onClick={() => setLogged(true)}>
            Logar
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header; 