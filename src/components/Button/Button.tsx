import React from 'react';
import { Button, styled, type ButtonProps } from '@mui/material';

// Типы для пропсов
interface CalculatorButtonProps extends Omit<ButtonProps, 'variant'> {
  operation?: boolean;
  equals?: boolean;
  zero?: boolean;
  clear?: boolean;
  children: React.ReactNode;
}

// Стилизованная кнопка
const StyledCalculatorButton = styled(Button, {
  shouldForwardProp: (prop) => !['operation', 'equals', 'zero', 'clear'].includes(prop as string),
})<CalculatorButtonProps>(({operation, equals, zero, clear }) => ({
  minWidth: equals ? '120px' : '60px',
  height: '60px',
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
    borderRadius: '30px',
    justifyContent: 'flex-start',
    paddingLeft: '50px',
    marginLeft: '18px'
  }),
}));

// Основной компонент кнопки
const CalculatorButton: React.FC<CalculatorButtonProps> = ({ 
  children, 
  operation = false, 
  equals = false, 
  zero = false, 
  clear = false,
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
      {children}
    </StyledCalculatorButton>
  );
};

export default CalculatorButton;