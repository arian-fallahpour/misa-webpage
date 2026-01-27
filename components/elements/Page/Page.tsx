import React from "react";
import classes from "./Page.module.scss";
import { join } from "@/utils/helper-client";

const Page = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <main className={join(classes.Page, className)}>{children}</main>;
};

export default Page;
