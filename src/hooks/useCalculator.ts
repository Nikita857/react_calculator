/* eslint-disable @typescript-eslint/no-unused-vars */
import { create, all } from "mathjs";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export interface HistoryEntry {
  expression: string;
  result: string;
}

const math = create(all);

export const useCalculator = () => {
  const [expression, setExpression] = useState("0");
  const [history, setHistory] = useLocalStorage<HistoryEntry[]>(
    "calculator-history",
    []
  );

  const handleInput = (value: string): void => {
    if (expression === "0" && !"*÷+-%,".includes(value)) {
      setExpression(value);
    } else {
      setExpression(expression + value);
    }
  };

  const handleParentheses = (): void => {
    const openBrackets = (expression.match(/\(/g) || []).length;
    const closeBrackets = (expression.match(/\)/g) || []).length;

    if (openBrackets > closeBrackets) {
      setExpression(expression + ")");
    } else {
      if (expression === "0") {
        setExpression("(");
      } else {
        setExpression(expression + "(");
      }
    }
  };

  const handleBackspace = (): void => {
    if (expression.length > 1) {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression("0");
    }
  };

  const calculate = (): void => {
    try {
      const sanitizedExpression = expression
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/,/g, ".");

      const result = math.evaluate(sanitizedExpression);

      const newHistoryEntry: HistoryEntry = {
        expression: expression,
        result: result.toString(),
      };

      setHistory([...history, newHistoryEntry]);
      setExpression(result.toString());
    } catch (error) {
      setExpression(`Ошибка`);
    }
  };

  const clear = (): void => {
    setExpression("0");
  };

  const handleClearHistory = (): void => {
    setHistory([]);
  };

  return {
    expression,
    handleInput,
    handleParentheses,
    calculate,
    clear,
    history,
    handleBackspace,
    handleClearHistory,
  };
};
