import * as RadixDialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { Icon } from "./Icon";
import { cn } from "../lib/cn";

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Dialog({ open, onOpenChange, title, children, className }: DialogProps) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-50 bg-true-950/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <RadixDialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
            "w-[calc(100%-2rem)] max-w-2xl max-h-[85vh] overflow-y-auto",
            "bg-true-900 border border-true-800 rounded-3xl shadow-2xl",
            "p-8 md:p-10",
            "focus:outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            className,
          )}
        >
          {title && (
            <RadixDialog.Title className="sr-only">{title}</RadixDialog.Title>
          )}
          <RadixDialog.Close
            className="absolute top-3 right-3 w-11 h-11 inline-flex items-center justify-center rounded-full text-true-400 hover:text-white hover:bg-true-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-rev-500"
            aria-label="Fechar"
          >
            <Icon name="x" size="md" />
          </RadixDialog.Close>
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
