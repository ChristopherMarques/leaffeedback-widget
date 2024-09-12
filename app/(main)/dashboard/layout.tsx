import React, { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col h-screen w-screen">{children}</div>;
};

export default MainLayout;
