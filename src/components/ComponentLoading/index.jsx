import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  opacity: 0.5;
`;

const ComponentLoading = () => {
  return (
    <Loading>
      <Spin
        indicator={<LoadingOutlined />}
        style={{ color: "#ff55a5" }}
        size="large"
      />
    </Loading>
  );
};

export default ComponentLoading;
