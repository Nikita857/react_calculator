import { create, all } from 'mathjs';
import { useState, useCallback, useMemo } from "react"; // 1. Импортируем useMemo
import useLocalStorage from './useLocalStorage';
import useKeyboard from './useKeyboard'; // 2. Импортируем наш новый хук

export interface HistoryEntry {
  expression: string;
  result: string
}

const math = create(all);

export const useCalculator = () => {
    const [expression, setExpression] = useState("0");
    
    // 2. Заменяем useState и useEffect одной строкой!
    const [history, setHistory] = useLocalStorage<HistoryEntry[]>('calculator-history', []);

  const handleInput = useCallback((value: string): void => {
    setExpression(prev => {
      if (prev === "0" && !"*÷+-%,".includes(value)) return value;
      if (prev === "Ошибка") return value;
      return prev + value;
    });
  }, []);

  const handleParentheses = useCallback((): void => {
    setExpression(prev => {
      const openBrackets = (prev.match(/\(/g) || []).length;
      const closeBrackets = (prev.match(/\)/g) || []).length;
      if (openBrackets > closeBrackets) return prev + ")";
      if (prev === "0") return "(";
      return prev + "(";
    });
  }, []);

  const handleBackspace = useCallback((): void => {
    setExpression(prev => prev.length > 1 ? prev.slice(0, -1) : "0");
  }, []);

  const calculate = useCallback((): void => {
    try {
      const sanitizedExpression = expression.replace(/×/g, "*").replace(/÷/g, "/").replace(/,/g, ".");
      const result = math.evaluate(sanitizedExpression);
      if (result === undefined || result === null) throw new Error("Invalid expression");
      const newHistoryEntry: HistoryEntry = { expression, result: result.toString() };
      setHistory([...history, newHistoryEntry]);
      setExpression(result.toString());
    } catch (error) {
      setExpression(`Ошибка`);
    }
  }, [expression, history, setHistory]);

  const clear = useCallback((): void => {
    setExpression("0");
    setHistory([]);
  }, [setHistory]);

  // 3. Описываем карту наших клавиш и действий
  const keyMap = useMemo(() => ({
    '0': () => handleInput('0'), '1': () => handleInput('1'), '2': () => handleInput('2'),
    '3': () => handleInput('3'), '4': () => handleInput('4'), '5': () => handleInput('5'),
    '6': () => handleInput('6'), '7': () => handleInput('7'), '8': () => handleInput('8'),
    '9': () => handleInput('9'),
    '.': () => handleInput(','), ',': () => handleInput(','),
    '+': () => handleInput('+'), '-': () => handleInput('-'),
    '*': () => handleInput('×'), '/': () => handleInput('÷'),
    '%': () => handleInput('%'), '(': () => handleInput('('), ')': () => handleInput(')'),
    'Enter': (e: KeyboardEvent) => { e.preventDefault(); calculate(); },
    '=': (e: KeyboardEvent) => { e.preventDefault(); calculate(); },
    'Backspace': (e: KeyboardEvent) => { e.preventDefault(); handleBackspace(); },
    'Escape': (e: KeyboardEvent) => { e.preventDefault(); clear(); },
  }), [handleInput, calculate, handleBackspace, clear]);

  // 4. Вызываем наш хук и передаем ему карту
  useKeyboard(keyMap);

  return {expression, handleInput, handleParentheses, calculate, clear, history, handleBackspace}
}