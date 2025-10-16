/* eslint-disable @typescript-eslint/no-unused-vars */
import Mexp from "math-expression-evaluator";
import { useState } from "react";

export const useCalculator = () => {
    const [expression, setExpression] = useState("0");

  const mexp = new Mexp

  const handleInput = (value: string): void => {
    // Если текущее выражение "0" и вводим не оператор, заменяем "0"
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

  const calculate = (): void => {
    try {
      
      const sanitizedExpression = expression
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/,/g, ".");
      console.log(sanitizedExpression);
      
      // Исправление: используем Mexp напрямую, без создания экземпляра
      const result = mexp.eval(sanitizedExpression);
      setExpression(result.toString());
    } catch (error) {
      setExpression(`Ошибка: ${error}`);
    }
  };

  const clear = (): void => {
    setExpression("0");
  };

  return {expression, handleInput, handleParentheses, calculate, clear}
}