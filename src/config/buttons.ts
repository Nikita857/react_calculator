export interface ButtonConfig {
  label: string;
  value: string;
  type: "digit" | "operator" | "action" | "parentheses" | "equals" | "decimal";
  props?: { [key: string]: boolean };
}

export type CalculatorLayout = ButtonConfig[][];

interface AppButtonConfig {
  normal: CalculatorLayout;
  scientific: CalculatorLayout;
}

export const buttonConfig: AppButtonConfig = {
  normal: [
    [
      { label: "AC", value: "AC", type: "action", props: { clear: true } },
      {
        label: "( )",
        value: "()",
        type: "parentheses",
        props: { operation: true },
      },
      { label: "%", value: "%", type: "operator", props: { operation: true } },
      { label: "÷", value: "÷", type: "operator", props: { operation: true } },
    ],
    [
      { label: "7", value: "7", type: "digit" },
      { label: "8", value: "8", type: "digit" },
      { label: "9", value: "9", type: "digit" },
      { label: "×", value: "×", type: "operator", props: { operation: true } },
    ],
    [
      { label: "4", value: "4", type: "digit" },
      { label: "5", value: "5", type: "digit" },
      { label: "6", value: "6", type: "digit" },
      { label: "-", value: "-", type: "operator", props: { operation: true } },
    ],
    [
      { label: "1", value: "1", type: "digit" },
      { label: "2", value: "2", type: "digit" },
      { label: "3", value: "3", type: "digit" },
      { label: "+", value: "+", type: "operator", props: { operation: true } },
    ],
    [
      { label: "0", value: "0", type: "digit", props: { zero: true } },
      { label: ",", value: ",", type: "decimal" },
      { label: "=", value: "=", type: "equals", props: { equals: true } },
    ],
  ],
  scientific: [
    [
      { label: "sin", value: "sin(", type: "operator" },
      { label: "cos", value: "cos(", type: "operator" },
      { label: "tan", value: "tan(", type: "operator" },
      { label: "√", value: "sqrt(", type: "operator" },
    ],
    [
      { label: "AC", value: "AC", type: "action", props: { clear: true } },
      {
        label: "( )",
        value: "()",
        type: "parentheses",
        props: { operation: true },
      },
      { label: "%", value: "%", type: "operator", props: { operation: true } },
      { label: "÷", value: "÷", type: "operator", props: { operation: true } },
    ],
    [
      { label: "7", value: "7", type: "digit" },
      { label: "8", value: "8", type: "digit" },
      { label: "9", value: "9", type: "digit" },
      { label: "×", value: "×", type: "operator", props: { operation: true } },
    ],
    [
      { label: "4", value: "4", type: "digit" },
      { label: "5", value: "5", type: "digit" },
      { label: "6", value: "6", type: "digit" },
      { label: "-", value: "-", type: "operator", props: { operation: true } },
    ],
    [
      { label: "1", value: "1", type: "digit" },
      { label: "2", value: "2", type: "digit" },
      { label: "3", value: "3", type: "digit" },
      { label: "+", value: "+", type: "operator", props: { operation: true } },
    ],
    [
      { label: "0", value: "0", type: "digit", props: { zero: true } },
      { label: ",", value: ",", type: "decimal" },
      { label: "=", value: "=", type: "equals", props: { equals: true } },
    ],
  ],
};
