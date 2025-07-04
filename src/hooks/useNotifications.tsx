import React, { createContext, useCallback, useContext, useState } from "react";
import Notice, { NoticeProps } from "../components/molecules/Notice/Notice";

export type NotificationType = "notice" | "toast" | "banner";

// Posições permitidas por tipo
export type NoticePosition = "center-top" | "center-bottom";
export type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center-top" | "center-bottom";
export type BannerPosition = "top" | "bottom";
export type NotificationPosition = NoticePosition | ToastPosition | BannerPosition;

export type Notification = Omit<NoticeProps, "onClose"> & {
  id: string;
  notificationType: NotificationType;
  position?: NotificationPosition;
};

interface NotificationsContextProps {
  notifications: Notification[];
  notify: (notification: Omit<Notification, "id">) => void;
  remove: (id: string) => void;
}

const NotificationsContext = createContext<NotificationsContextProps | undefined>(undefined);

export const NotificationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = useCallback((notification: Omit<Notification, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications((prev: Notification[]) => [...prev, { ...notification, id }]);
  }, []);

  const remove = useCallback((id: string) => {
    setNotifications((prev: Notification[]) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <NotificationsContext.Provider value={{ notifications, notify, remove }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export function useNotifications() {
  const ctx = useContext(NotificationsContext);
  if (!ctx) throw new Error("useNotifications deve ser usado dentro de NotificationsProvider");
  return ctx;
}

// Mapeamento de posições para classes Tailwind
const positionClassMap: Record<NotificationPosition, string> = {
  // Notice
  "center-top": "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2",
  "center-bottom": "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2",
  // Toast
  "top-right": "fixed top-6 right-6 z-50 flex flex-col items-end gap-2",
  "top-left": "fixed top-6 left-6 z-50 flex flex-col items-start gap-2",
  "bottom-right": "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2",
  "bottom-left": "fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2",
  // Toast também pode usar center-top e center-bottom
  // Banner
  "top": "fixed top-0 left-0 w-full z-50 flex flex-col items-center gap-2",
  "bottom": "fixed bottom-0 left-0 w-full z-50 flex flex-col items-center gap-2",
};

// Posições permitidas por tipo
const allowedPositions: Record<NotificationType, NotificationPosition[]> = {
  notice: ["center-top", "center-bottom"],
  toast: ["top-right", "top-left", "bottom-right", "bottom-left", "center-top", "center-bottom"],
  banner: ["top", "bottom"],
};

export const NotificationsContainer: React.FC = () => {
  const { notifications, remove } = useNotifications();

  // Agrupa por posição
  const grouped = notifications.reduce<Record<NotificationPosition, Notification[]>>(
    (acc, n) => {
      // Valida posição permitida
      const positions = allowedPositions[n.notificationType];
      const pos = n.position && positions.includes(n.position) ? n.position : positions[0];
      acc[pos] = acc[pos] || [];
      acc[pos].push(n);
      return acc;
    },
    {
      "center-top": [],
      "center-bottom": [],
      "top-right": [],
      "top-left": [],
      "bottom-right": [],
      "bottom-left": [],
      "top": [],
      "bottom": [],
    }
  );

  return (
    <>
      {(Object.keys(positionClassMap) as NotificationPosition[]).map((pos) =>
        grouped[pos].length > 0 ? (
          <div key={pos} className={positionClassMap[pos]}>
            {grouped[pos].map((n) => (
              <Notice
                key={n.id}
                {...n}
                onClose={() => remove(n.id)}
                autoCloseMs={n.autoCloseMs}
              />
            ))}
          </div>
        ) : null
      )}
    </>
  );
}; 