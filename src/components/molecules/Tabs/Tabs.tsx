import { ComponentProps, forwardRef, ReactNode, useState, createContext, useContext } from 'react';
import { colors, spacing, borders, borderRadius, typography } from '../../../tokens';

// Contexto para compartilhar estado entre Tabs e TabItem
type TabsContextType = {
  activeTab: string;
  setActiveTab: (id: string) => void;
  orientation?: 'horizontal' | 'vertical';
};

const TabsContext = createContext<TabsContextType | null>(null);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabItem must be used within Tabs');
  }
  return context;
};

export type TabsProps = {
  children: ReactNode;
  defaultActiveTab?: string;
  activeTab?: string;
  onTabChange?: (activeTab: string) => void;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
};

export const Tabs = ({
  children,
  defaultActiveTab,
  activeTab: controlledActiveTab,
  onTabChange,
  orientation = 'horizontal',
  className,
  style
}: TabsProps) => {
  const [uncontrolledActiveTab, setUncontrolledActiveTab] = useState<string>(defaultActiveTab || '');
  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : uncontrolledActiveTab;

  const setActiveTab = (id: string) => {
    if (!isControlled) setUncontrolledActiveTab(id);
    onTabChange?.(id);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, orientation }}>
      <div
        className={className}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: orientation === 'vertical' ? 'row' : 'column',
          ...style,
        }}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export type TabListProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const TabList = forwardRef<HTMLDivElement, TabListProps>(({
  children,
  className,
  style
}, ref) => {
  const { orientation } = useTabs();

  return (
    <div
      ref={ref}
      role="tablist"
      aria-orientation={orientation}
      className={className}
      style={{
        display: 'flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        borderBottom: orientation === 'horizontal' ? `${borders.sm} solid ${colors.divider.default}` : 'none',
        borderRight: orientation === 'vertical' ? `${borders.sm} solid ${colors.divider.default}` : 'none',
        ...style,
      }}
    >
      {children}
    </div>
  );
});

TabList.displayName = 'TabList';

export type TabTriggerProps = ComponentProps<"button"> & {
  value: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const TabTrigger = forwardRef<HTMLButtonElement, TabTriggerProps>(({
  value,
  children,
  className,
  style,
  ...props
}, ref) => {
  const { activeTab, setActiveTab, orientation } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      ref={ref}
      {...props}
      role="tab"
      aria-selected={isActive}
      aria-controls={`tab-panel-${value}`}
      onClick={() => setActiveTab(value)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: `${spacing[3]} ${spacing[4]}`,
        background: 'none',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        fontSize: typography.text.sm,
        fontWeight: isActive ? typography.fontWeight.semibold : typography.fontWeight.medium,
        color: isActive ? colors.text.primary : colors.text.secondary,
        borderBottom: orientation === 'horizontal' && isActive ? `2px solid ${colors.primary[500]}` : 'none',
        borderRight: orientation === 'vertical' && isActive ? `2px solid ${colors.primary[500]}` : 'none',
        transition: 'all 0.2s',
        minWidth: orientation === 'vertical' ? '120px' : 'auto',
        ...style,
      }}
      className={className}
    >
      {children}
    </button>
  );
});

TabTrigger.displayName = 'TabTrigger';

export type TabContentProps = {
  value: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const TabContent = forwardRef<HTMLDivElement, TabContentProps>(({
  value,
  children,
  className,
  style
}, ref) => {
  const { activeTab } = useTabs();
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      ref={ref}
      role="tabpanel"
      id={`tab-panel-${value}`}
      aria-labelledby={`tab-trigger-${value}`}
      style={{
        flex: 1,
        padding: spacing[4],
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
});

TabContent.displayName = 'TabContent';

// Adiciona subcomponentes ao Tabs
Tabs.List = TabList;
Tabs.Trigger = TabTrigger;
Tabs.Content = TabContent;

export default Tabs; 