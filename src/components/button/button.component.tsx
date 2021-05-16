import React from "react";
import { Button as AntDesignButton } from "antd";

const Button: React.FC = ({ children }) => (
  <AntDesignButton type="primary">{children}</AntDesignButton>
);

export default Button;
