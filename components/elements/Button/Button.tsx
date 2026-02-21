import React, { ReactNode } from "react";
import { join } from "@/utils/helper-client";
import classes from "./Button.module.scss";

import Link from "next/link";

const Button = ({
  children,
  className,

  variant = "",
  isLoading,
  isLink,
  href,
  ...otherProps
}: {
  children: ReactNode;
  className?: string;
  variant?: "" | "nav" | "glass" | "text" | "light";
  isLoading?: boolean;
  isLink?: boolean;
  href?: string;
} & React.ComponentPropsWithoutRef<"button"> &
  React.ComponentPropsWithoutRef<typeof Link>) => {
  if (isLink) {
    return (
      <Link
        className={join(
          className,
          classes.Button,
          variant.length > 0 ? classes["Button--" + variant] : null,
        )}
        disabled={isLoading}
        href={href}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={join(
        className,
        classes.Button,
        variant.length > 0 ? classes["Button--" + variant] : null,
      )}
      disabled={isLoading}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
