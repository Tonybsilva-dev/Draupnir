import Avatar from '../../atoms/Avatar/Avatar';
import Typography from '../../atoms/Typography/Typography';
import { Input } from '../../molecules/Input/Input';
import Divider from '../../atoms/Divider/Divider';
import { Button } from '../../atoms/Button/Button';
import { Badge } from '../../atoms/Badge/Badge';
import Dropdown from '../Dropdown/Dropdown';
import { Home, Layers, CheckSquare, BarChart2, Users, LifeBuoy, Settings, LogOut, ChevronDown, SearchIcon } from 'lucide-react';
import { colors, spacing, borders, borderRadius, typography } from '../../../tokens';
import React from 'react';

export const Sidebar = () => (
  <aside style={{
    width: 280,
    height: '100vh',
    background: colors.background.light,
    borderRight: `${borders.sm} solid ${colors.divider.default}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: spacing[4],
    boxSizing: 'border-box',
  }}>
    {/* Topo: Logo e busca */}
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], marginBottom: spacing[4] }}>
        <Avatar size="md" name="Untitled UI" />
        <Typography semantic="heading" level={2} size="title2" style={{ fontWeight: typography.fontWeight.bold }}>
          Draupnir DS
        </Typography>
      </div>
      <Input.Root style={{ marginBottom: spacing[4] }}>
        <Input.Prefix>
          <SearchIcon className='w-4 h-4' />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>
      {/* Menu principal */}
      <nav>
        <SidebarLink icon={<Home size={20} />} label="Home" href="/home" active chevron />
        <SidebarLink icon={<BarChart2 size={20} />} label="Dashboard" href="/dashboard" />
        {/* Dropdown de Projects ocupando toda a largura */}
        <Dropdown>
          <Dropdown.Trigger style={{ width: '100%' }}>
            <SidebarLink icon={<Layers size={20} />} label="Projects" href="#" chevron fill />
          </Dropdown.Trigger>
          <Dropdown.Content style={{ width: '100%' }}>
            <Dropdown.Item>Active Projects</Dropdown.Item>
            <Dropdown.Item>Archived Projects</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
        <SidebarLink icon={<CheckSquare size={20} />} label="Tasks" href="/tasks" />
        <SidebarLink icon={<Users size={20} />} label="Users" href="/users" />
        <SidebarLink icon={<BarChart2 size={20} />} label="Reporting" href="/reporting" />
      </nav>
    </div>
    {/* Rodapé */}
    <div>
      <Divider style={{ margin: `${spacing[4]} 0` }} />
      {/* Suporte */}
      <SidebarLink icon={<LifeBuoy size={20} />} label="Support" href="/support" />
      {/* Configurações destacadas */}
      <SidebarLink icon={<Settings size={20} />} label="Settings" href="/settings" highlight />
      {/* Card de status */}
      <StatusCard />
      {/* Perfil do usuário */}
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing[2], marginTop: spacing[4] }}>
        <Avatar size="sm" name="Olivia Rhye" image="/olivia.jpg" />
        <div style={{ flex: 1 }}>
          <Typography size="md" style={{ fontWeight: typography.fontWeight.bold }}>Antonio S</Typography>
          <Typography size="sm" variant="secondary">antonio@draupnirds.com</Typography>
        </div>
        <Button variant="ghost" aria-label="Logout"><LogOut size={18} /></Button>
      </div>
    </div>
  </aside>
);

// SidebarLink auxiliar
const SidebarLink = ({ icon, label, href, badge, active, chevron, highlight, fill = false }: {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: string;
  active?: boolean;
  chevron?: boolean;
  highlight?: boolean;
  fill?: boolean;
}) => {
  const [hover, setHover] = React.useState(false);
  const isActive = active || highlight;
  const baseBg = isActive ? 'rgba(255, 102, 0, 0.08)' : 'transparent';
  const hoverBg = 'rgba(255, 102, 0, 0.08)';
  const baseColor = highlight ? colors.primary[500] : active ? colors.primary[500] : colors.text.primary;
  const hoverColor = colors.primary[500];

  return (
    <a
      href={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: spacing[2],
        padding: `${spacing[2]} ${spacing[3]}`,
        color: hover ? hoverColor : baseColor,
        background: hover ? hoverBg : baseBg,
        textDecoration: 'none',
        fontWeight: typography.fontWeight.medium,
        fontSize: typography.text.md,
        borderRadius: borderRadius.sm,
        marginBottom: spacing[1],
        transition: 'background 0.2s, color 0.2s',
        position: 'relative',
        cursor: 'pointer',
        width: fill ? '100%' : undefined,
        marginLeft: fill ? 0 : undefined,
        marginRight: fill ? 0 : undefined,
      }}
      className="sidebar-link"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
      <span style={{ flex: 1, textAlign: 'left' }}>{label}</span>
      {badge && <Badge>{badge}</Badge>}
      {chevron && <ChevronDown size={16} style={{ opacity: 0.5 }} />}
    </a>
  );
};

// StatusCard auxiliar
const StatusCard = () => (
  <div style={{
    background: 'rgba(139,92,246,0.08)',
    borderRadius: borderRadius.md,
    padding: spacing[3],
    margin: `${spacing[3]} 0`,
    fontSize: typography.text.sm,
    color: colors.primary[500],
  }}>
    <div style={{ fontWeight: typography.fontWeight.bold, marginBottom: 4 }}>Used space</div>
    <div style={{ color: colors.text.secondary, marginBottom: 8 }}>
      Your team has used 80% of your available space. Need more?
    </div>
    <div style={{ background: 'rgba(139,92,246,0.15)', borderRadius: 4, height: 6, marginBottom: 8 }}>
      <div style={{ background: colors.primary[500], width: '80%', height: '100%', borderRadius: 4 }} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Button variant="ghost" style={{ fontSize: typography.text.sm, padding: 0 }}>Dismiss</Button>
      <Button variant="ghost" style={{ fontSize: typography.text.sm, color: colors.primary[500], padding: 0 }}>Upgrade plan</Button>
    </div>
  </div>
);

export default Sidebar; 