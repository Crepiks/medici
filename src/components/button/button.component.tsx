import React from "react";
import { Button as AntDesignButton } from "antd";

interface Props {
  onClick?: () => {};
}

const Button: React.FC<Props> = ({ children, onClick = () => {} }) => (
  <AntDesignButton type="primary" onClick={onClick}>
    {children}
  </AntDesignButton>
);

export default Button;
