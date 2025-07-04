import { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

export const Header = () => {
  const [logged, setLogged] = useState(true);

  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 min-w-[120px]">
        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
          <span className="text-black font-bold text-sm">D</span>
        </div>
        <span className="font-semibold text-gray-900">Draupnir</span>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          Dashboard
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          Projects
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          Team
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          Settings
        </a>
      </nav>

      {/* Right: User */}
      <div className="flex items-center gap-4 min-w-[180px] justify-end">
        {logged ? (
          <Dropdown>
            <Dropdown.Trigger asChild>
              <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 transition">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span className="text-sm text-gray-700">User</span>
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item onSelect={() => setLogged(false)} className="text-red-600">Logout</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        ) : (
          <button
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
            onClick={() => setLogged(true)}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}; 