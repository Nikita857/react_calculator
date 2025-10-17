import React from 'react';
import { Button, styled, type ButtonProps } from '@mui/material';

// Типы для пропсов
interface CalculatorButtonProps extends Omit<ButtonProps, 'variant'> {
  operation?: boolean;
  equals?: boolean;
  zero?: boolean;
  clear?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

// Стилизованная кнопка
const StyledCalculatorButton = styled(Button, {
  // Добавили 'icon' в список, чтобы не передавать этот проп в DOM
  shouldForwardProp: (prop) => !['operation', 'equals', 'zero', 'clear', 'icon'].includes(prop as string),
})<CalculatorButtonProps>(({operation, equals, zero, clear }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  fontSize: '1.5rem',
  fontWeight: operation || equals ? 500 : 400,
  margin: '4px',
  backgroundColor: equals 
    ? '#4285f4' // Синий для кнопки "="
    : operation 
    ? '#dadce0' // Серый для операций
    : clear
    ? '#dadce0' // Серый для AC
    : '#f1f3f4', // Светло-серый для цифр
  
  color: equals ? '#ffffff' : '#202124', // Белый для "=", черный для остальных
  
  '&:hover': {
    backgroundColor: equals 
      ? '#3367d6' // Темно-синий при наведении на "="
      : operation || clear
      ? '#c8c9cc' // Темно-серый при наведении на операции
      : '#e4e5e7', // Темно-серый при наведении на цифры
  },
  
  '&:active': {
    transform: 'scale(0.95)',
    transition: 'transform 0.1s',
  },
  
  // Специальные стили для кнопки 0 (шире)
  ...(equals && {
    flexGrow: 2, // Make the equals button take up more space
    borderRadius: '34px', // Adjust border radius for a pill shape
  }),
}));

// Основной компонент кнопки
const CalculatorButton: React.FC<CalculatorButtonProps> = ({ 
  children, 
  operation = false, 
  equals = false, 
  zero = false, 
  clear = false,
  icon,
  ...props 
}) => {
  return (
    <StyledCalculatorButton
      operation={operation}
      equals={equals}
      zero={zero}
      clear={clear}
      {...props}
    >
      {icon || children}
    </StyledCalculatorButton>
  );
};

export default CalculatorButton;