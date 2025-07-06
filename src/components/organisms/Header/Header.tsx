import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { Input } from '../../molecules/Input/Input';
import { Button } from '../../atoms/Button/Button';
import Box from '../../atoms/Box/Box';
import { SearchIcon, Globe, User, Settings as SettingsIcon, LogOut } from 'lucide-react';
import Avatar from '../../atoms/Avatar/Avatar';
import Typography from '../../atoms/Typography/Typography';

export const Header = () => {
  const [logged, setLogged] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 relative">
      {/* Esquerda: Logo */}
      <div className="flex items-center min-w-[120px]">
        <Avatar size="lg" name="Logo" className="w-[120px] h-[40px] bg-transparent" />
      </div>

      {/* Centro: Barra de pesquisa usando Input do DS */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] max-w-[50vw]">
        <Input.Root>
          <Input.Prefix>
            <SearchIcon />
          </Input.Prefix>
          <Input.Control placeholder="Search..." />
        </Input.Root>
      </div>

      {/* Direita: Navegação, Internacionalização, Login/Profile */}
      <div className="flex items-center gap-2 ml-auto">
        <nav className="flex items-center gap-1" role="navigation">
          <Dropdown>
            <Dropdown.Trigger asChild>
              <Button variant="ghost" aria-label="Internacionalização">
                <Globe className="w-5 h-5" />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item>
                <Typography size="xs">ENGLISH</Typography>
              </Dropdown.Item>
              <Dropdown.Item>
                <Typography size="xs">SPANISH</Typography>
              </Dropdown.Item>
              <Dropdown.Item >
                <Typography size="xs" className="font-medium">PORTUGUESE</Typography>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </nav>
        {!logged ? (
          <Button variant="primary" onClick={() => setLogged(true)}>
            <Typography size="sm" className="font-medium">LOGIN</Typography>
          </Button>
        ) : (
          <Dropdown>
            <Dropdown.Trigger asChild>
              <Button variant="outline" className="flex items-center gap-2 px-3">
                <Avatar size="sm" name="User" className="bg-transparent w-1/3 justify-center" image='https://avatars.githubusercontent.com/u/54373473?v=4' />
                <span className="hidden sm:inline">
                  <Typography size="xs" className="font-medium">PROFILE</Typography>
                </span>
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <Typography size="xs">ACCOUNT</Typography>
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="flex items-center gap-2">
                  <SettingsIcon className="w-4 h-4" />
                  <Typography size="xs">SETTINGS</Typography>
                </div>
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => setLogged(false)} className="text-red-600">
                <div className="flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  <Typography size="xs" className="font-medium">LOGOUT</Typography>
                </div>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        )}
      </div>
    </header>
  );
}; 