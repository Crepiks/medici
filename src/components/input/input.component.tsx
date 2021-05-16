import React from "react";
import { Input as AntDesignInput } from "antd";

interface Props {
  value?: string;
  onInput?: (text: string) => void;
}

const Input: React.FC<Props> = ({ value = "", onInput = (f) => f }) => (
  <AntDesignInput
    value={value}
    onInput={(e) => {
      const value = (e.target as HTMLInputElement).value;
      onInput(value);
    }}
  />
);

export default Input;
