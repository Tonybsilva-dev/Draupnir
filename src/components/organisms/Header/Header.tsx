import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { Input } from '../../molecules/Input/Input';
import { Button } from '../../atoms/Button/Button';
import Box from '../../atoms/Box/Box';
import { SearchIcon, Globe, User, Settings as SettingsIcon, LogOut } from 'lucide-react';
import Avatar from '../../atoms/Avatar/Avatar';
import Typography from '../../atoms/Typography/Typography';
import { colors, spacing, borders, borderRadius, typography } from '../../../tokens';

export const Header = () => {
  const [logged, setLogged] = useState(false);

  return (
    <header
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `${spacing[4]} ${spacing[6]}`,
        background: colors.background.light,
        borderBottom: `${borders.sm} solid ${colors.divider}`,
        position: 'relative',
        minHeight: 64,
        boxSizing: 'border-box',
      }}
    >
      {/* Esquerda: Logo */}
      <div style={{ display: 'flex', alignItems: 'center', minWidth: 120 }}>
        <Avatar size="lg" name="Logo" style={{ width: 120, height: 40, background: 'transparent' }} />
      </div>

      {/* Centro: Barra de pesquisa usando Input do DS */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 320,
          maxWidth: '50vw',
        }}
      >
        <Input.Root>
          <Input.Prefix>
            <SearchIcon />
          </Input.Prefix>
          <Input.Control placeholder="Search..." />
        </Input.Root>
      </div>

      {/* Direita: Navegação, Internacionalização, Login/Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], marginLeft: 'auto' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: spacing[1] }} role="navigation">
          <Dropdown>
            <Dropdown.Trigger asChild>
              <Button variant="ghost" aria-label="Internacionalização">
                <Globe style={{ width: 20, height: 20 }} />
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
                <Typography size="xs" style={{ fontWeight: typography.fontWeight.medium }}>PORTUGUESE</Typography>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </nav>
        {!logged ? (
          <Button variant="primary" onClick={() => setLogged(true)}>
            <Typography size="sm" style={{ fontWeight: typography.fontWeight.medium }}>LOGIN</Typography>
          </Button>
        ) : (
          <Dropdown>
            <Dropdown.Trigger asChild>
              <Button variant="outline" style={{ display: 'flex', alignItems: 'center', gap: spacing[2], paddingLeft: spacing[3], paddingRight: spacing[3] }}>
                <Avatar size="sm" name="User" style={{ background: 'transparent', width: 32, height: 32, justifyContent: 'center' }} image='https://avatars.githubusercontent.com/u/54373473?v=4' />
                <span style={{ display: 'inline' }}>
                  <Typography size="xs" style={{ fontWeight: typography.fontWeight.medium }}>PROFILE</Typography>
                </span>
              </Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                  <User style={{ width: 16, height: 16 }} />
                  <Typography size="xs">ACCOUNT</Typography>
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                  <SettingsIcon style={{ width: 16, height: 16 }} />
                  <Typography size="xs">SETTINGS</Typography>
                </div>
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => setLogged(false)} style={{ color: colors.error[600] }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
                  <LogOut style={{ width: 16, height: 16 }} />
                  <Typography size="xs" style={{ fontWeight: typography.fontWeight.medium }}>LOGOUT</Typography>
                </div>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        )}
      </div>
    </header>
  );
}; 