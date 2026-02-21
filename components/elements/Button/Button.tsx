import React from "react";
import { join } from "@/utils/helper-client";
import classes from "./Button.module.scss";

import Link, { LinkProps } from "next/link";

export const buttonVariants = ["", "glass", "nav", "text", "light"] as const;
export type ButtonVariantType = (typeof buttonVariants)[number];
export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariantType;
};

export type CustomLinkProps = ButtonProps &
  Omit<LinkProps, keyof ButtonProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | keyof ButtonProps> & {
    isLink: true;
    href: string;
  };

export type CustomButtonProps = ButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps> & {
    isLink?: false;
  };

const Button = ({
  children,
  className,
  variant = "",
  isLink,
  ...props
}: CustomButtonProps | CustomLinkProps) => {
  if (isLink) {
    const { href, ...otherProps } = props as CustomLinkProps;

    return (
      <Link
        className={join(
          className,
          classes.Button,
          variant.length > 0 ? classes["Button--" + variant] : null,
        )}
        href={href}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as CustomButtonProps;

  return (
    <button
      className={join(
        className,
        classes.Button,
        variant.length > 0 ? classes["Button--" + variant] : null,
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
