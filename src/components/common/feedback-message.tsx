import { cn } from "@/lib/utils/class-cn";
import { Info } from "lucide-react";

type FeedbackMessageProps = {
  className?: string;
  iconSize?: number;
  children?: React.ReactNode;
};

export default function FeedbackMessage({ className, iconSize = 15, children }: FeedbackMessageProps) {
  if (!children) return null;

  return (
    <p className={cn("mt-1 flex items-center gap-1 text-[0.8rem] font-medium leading-[1.3] text-destructive", className)}>
      <Info size={iconSize} className="flex-shrink-0" /> {children}
    </p>
  );
}
