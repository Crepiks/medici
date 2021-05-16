import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LoaderIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;

const Loader: React.FC = () => <Spin indicator={LoaderIcon} />;

export default Loader;
