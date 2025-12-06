import type React from "react";

export type BaseCardType = {
  label: string;
  color: string;
  icon: React.ElementType;
};
export type CardType = BaseCardType & {
  value: number;
};
