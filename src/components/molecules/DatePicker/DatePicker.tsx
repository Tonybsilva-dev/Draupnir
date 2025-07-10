import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../../utils/cn';
import { colors, spacing, borders, borderRadius, typography } from '../../../tokens';

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  minDate?: Date;
  maxDate?: Date;
  format?: 'dd/MM/yyyy' | 'yyyy-MM-dd';
  className?: string;
  style?: React.CSSProperties;
}

const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder = 'Selecione uma data',
  disabled = false,
  required = false,
  minDate,
  maxDate,
  format = 'dd/MM/yyyy',
  className,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
  const [currentMonth, setCurrentMonth] = useState(() => {
    const date = value || new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
  });
  const [closing, setClosing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Formatar data para exibição
  const formatDate = (date: Date): string => {
    if (format === 'dd/MM/yyyy') {
      return date.toLocaleDateString('pt-BR');
    }
    return date.toISOString().split('T')[0];
  };

  // Parsear data do input
  const parseDate = (value: string): Date | null => {
    if (format === 'dd/MM/yyyy') {
      const parts = value.split('/');
      if (parts.length === 3) {
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1;
        const year = parseInt(parts[2]);
        const date = new Date(year, month, day);
        if (date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) {
          return date;
        }
      }
    } else {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        return date;
      }
    }
    return null;
  };

  // Atualizar input quando value mudar
  useEffect(() => {
    if (value) {
      setSelectedDate(value);
      setInputValue(formatDate(value));
      setCurrentMonth(new Date(value.getFullYear(), value.getMonth(), 1));
    } else {
      setSelectedDate(null);
      setInputValue('');
    }
  }, [value, format]);

  // Fechar calendário ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setClosing(true);
        setTimeout(() => {
          setIsOpen(false);
          setClosing(false);
        }, 180);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Gerar dias do mês
  const getDaysInMonth = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];

    // Dias do mês anterior
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }

    // Dias do mês atual
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  // Verificar se data está no range permitido
  const isDateInRange = (date: Date): boolean => {
    if (minDate && date < minDate) return false;
    if (maxDate && date > maxDate) return false;
    return true;
  };

  // Selecionar data
  const handleDateSelect = (date: Date) => {
    if (!isDateInRange(date)) return;

    setSelectedDate(date);
    setInputValue(formatDate(date));
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
      onChange?.(date);
    }, 180);
  };

  // Navegar para mês anterior/próximo
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Manipular input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const parsedDate = parseDate(value);
    if (parsedDate && isDateInRange(parsedDate)) {
      setSelectedDate(parsedDate);
      onChange?.(parsedDate);
    } else if (value === '') {
      setSelectedDate(null);
      onChange?.(null);
    }
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled) {
      setIsOpen(true);
      e.target.style.borderColor = 'rgb(var(--primary))';
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = 'rgb(var(--divider))';
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const days = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <div className={cn('relative', className)} style={style}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-label="Selecionar data"
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{
          width: '100%',
          padding: '8px 12px',
          border: `1px solid rgb(var(--divider))`,
          borderRadius: borderRadius.sm,
          backgroundColor: 'rgb(var(--bg-light))',
          color: 'rgb(var(--text-primary))',
          fontSize: typography.text.sm,
          fontFamily: typography.fontFamily.primary,
          outline: 'none',
          transition: 'all 0.2s',
          cursor: disabled ? 'not-allowed' : 'text',
          opacity: disabled ? 0.5 : 1,
        }}
      />

      {(isOpen || closing) && !disabled && (
        <div
          ref={calendarRef}
          role="dialog"
          aria-label="Calendário"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 1000,
            backgroundColor: 'rgb(var(--bg-light))',
            border: `1px solid rgb(var(--divider))`,
            borderRadius: borderRadius.md,
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            padding: '16px',
            minWidth: '280px',
            marginTop: '4px',
            opacity: closing ? 0 : 1,
            transform: closing ? 'translateY(-8px)' : 'translateY(0)',
            pointerEvents: closing ? 'none' : 'auto',
            transition: 'opacity 0.18s, transform 0.18s',
          }}
        >
          {/* Header do calendário */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
          }}>
            <button
              onClick={goToPreviousMonth}
              aria-label="Mês anterior"
              style={{
                background: 'none',
                border: 'none',
                fontSize: typography.text.lg,
                cursor: 'pointer',
                color: 'rgb(var(--text-primary))',
                padding: '4px',
                borderRadius: borderRadius.sm,
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(var(--bg-hover))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              ‹
            </button>

            <span style={{
              fontSize: typography.text.md,
              fontWeight: typography.fontWeight.medium,
              color: 'rgb(var(--text-primary))',
            }}>
              {currentMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            </span>

            <button
              onClick={goToNextMonth}
              aria-label="Próximo mês"
              style={{
                background: 'none',
                border: 'none',
                fontSize: typography.text.lg,
                cursor: 'pointer',
                color: 'rgb(var(--text-primary))',
                padding: '4px',
                borderRadius: borderRadius.sm,
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(var(--bg-hover))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              ›
            </button>
          </div>

          {/* Dias da semana */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '4px',
            marginBottom: '8px',
          }}>
            {weekDays.map((day) => (
              <div
                key={day}
                style={{
                  textAlign: 'center',
                  fontSize: typography.text.xs,
                  fontWeight: typography.fontWeight.medium,
                  color: 'rgb(var(--text-secondary))',
                  padding: '4px',
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Dias do mês */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '4px',
          }}>
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => day && handleDateSelect(day)}
                disabled={!day || !isDateInRange(day)}
                aria-label={day ? `Selecionar ${formatDate(day)}` : undefined}
                style={{
                  width: '32px',
                  height: '32px',
                  border: 'none',
                  borderRadius: borderRadius.sm,
                  fontSize: typography.text.sm,
                  cursor: day && isDateInRange(day) ? 'pointer' : 'default',
                  backgroundColor: day === selectedDate ? 'rgb(var(--primary))' : 'transparent',
                  color: day === selectedDate ? 'rgb(var(--text-contrast))' : 'rgb(var(--text-primary))',
                  opacity: !day || !isDateInRange(day) ? 0.3 : 1,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (day && isDateInRange(day)) {
                    e.currentTarget.style.backgroundColor = day === selectedDate
                      ? 'rgb(var(--primary))'
                      : 'rgb(var(--bg-hover))';
                  }
                }}
                onMouseLeave={(e) => {
                  if (day && isDateInRange(day)) {
                    e.currentTarget.style.backgroundColor = day === selectedDate
                      ? 'rgb(var(--primary))'
                      : 'transparent';
                  }
                }}
              >
                {day ? day.getDate() : ''}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker; 