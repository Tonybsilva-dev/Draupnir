import { useEffect, useState } from 'react';
import { colors, spacing } from '../../../tokens';

export type LoadingProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "auto" | "light" | "dark";
};

const sizeMap = {
  sm: { width: 12, height: 12 },
  md: { width: 20, height: 20 },
  lg: { width: 32, height: 32 },
};

function getLoadingColor(variant: "auto" | "light" | "dark") {
  if (variant === 'light') return '#FFF';
  if (variant === 'dark') return '#212121';
  // auto: laranja padrão do DS
  return '#FF6F00';
}

export function Loading({
  label = "Loading content",
  size = "md",
  variant = "auto"
}: LoadingProps) {
  const { width, height } = sizeMap[size];
  const [resolvedColor, setResolvedColor] = useState<string>(() => getLoadingColor(variant));

  useEffect(() => {
    setResolvedColor(getLoadingColor(variant));
  }, [variant]);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div style={{ position: 'relative', display: 'inline-flex' }}>
        <div style={{ width, height, background: resolvedColor, borderRadius: '50%' }} />
        <div style={{ width, height, background: resolvedColor, borderRadius: '50%', position: 'absolute', top: 0, left: 0, opacity: 0.5, animation: 'loading-ping 1s cubic-bezier(0,0,0.2,1) infinite' }} />
        <div style={{ width, height, background: resolvedColor, borderRadius: '50%', position: 'absolute', top: 0, left: 0, opacity: 0.3, animation: 'loading-pulse 1.2s cubic-bezier(0.4,0,0.6,1) infinite' }} />
      </div>
      <span style={{ position: 'absolute', left: '-9999px' }}>{label}</span>
      <style>{`
        @keyframes loading-ping {
          0% { transform: scale(1); opacity: 0.5; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes loading-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

export default Loading;

