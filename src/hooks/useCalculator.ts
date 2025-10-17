import { create, all } from 'mathjs';
import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import useLocalStorage from './useLocalStorage';
import useKeyboard from './useKeyboard';

export interface HistoryEntry {
  expression: string;
  result: string
}

const math = create(all);

export const useCalculator = () => {
    const [expression, setExpression] = useState("0");
    const [history, setHistory] = useLocalStorage<HistoryEntry[]>('calculator-history', []);

    // Создаем ref, чтобы хранить актуальное значение expression
    const expressionRef = useRef(expression);
    useEffect(() => {
        expressionRef.current = expression;
    }, [expression]);

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
      // Теперь мы читаем самое свежее значение из ref, а не из замыкания
      const currentExpression = expressionRef.current;
      const sanitizedExpression = currentExpression.replace(/×/g, "*").replace(/÷/g, "/").replace(/,/g, ".");
      const result = math.evaluate(sanitizedExpression);

      if (result === undefined || result === null) {
        throw new Error("Invalid expression");
      }

      const newHistoryEntry: HistoryEntry = { expression: currentExpression, result: result.toString() };
      
      // Вызываем сеттеры последовательно, а не внутри друг друга
      setHistory(prevHistory => [...prevHistory, newHistoryEntry]);
      setExpression(result.toString());

    } catch (error) {
      setExpression(`Ошибка`);
    }
  }, [setHistory]); // Функция теперь стабильна, т.к. не зависит от expression

  const clear = useCallback((): void => {
    setExpression("0");
    setHistory([]);
  }, [setHistory]);

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

  useKeyboard(keyMap);

  return {expression, handleInput, handleParentheses, calculate, clear, history, handleBackspace}
}