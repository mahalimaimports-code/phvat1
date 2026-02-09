"use client";

import type { ButtonHTMLAttributes } from "react";

type DemoActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  message: string;
};

export default function DemoActionButton({ message, ...props }: DemoActionButtonProps) {
  return (
    <button
      {...props}
      type={props.type ?? "button"}
      onClick={(event) => {
        props.onClick?.(event);
        if (!event.defaultPrevented) {
          window.alert(message);
        }
      }}
    />
  );
}
