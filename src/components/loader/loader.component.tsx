import React from "react";
import { Spin } from "antd";
import {
  LoadingOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";

interface Props {
  status?: "loading" | "success" | "error" | "hidden";
  size?: "small" | "medium" | "large";
}

const sizes = {
  small: 18,
  medium: 24,
  large: 30,
};

const Loader: React.FC<Props> = ({ status = "loading", size = "medium" }) => {
  const LoaderIcon = <LoadingOutlined style={{ fontSize: sizes[size] }} spin />;

  const statuses = {
    loading: <Spin indicator={LoaderIcon} />,
    success: (
      <CheckOutlined style={{ fontSize: sizes[size], color: "#52c41a" }} />
    ),
    error: (
      <CloseOutlined style={{ fontSize: sizes[size], color: "#f5222d" }} />
    ),
    hidden: null,
  };

  const component = statuses[status];

  return component;
};

export default Loader;
