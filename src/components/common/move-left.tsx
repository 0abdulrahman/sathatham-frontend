import { cn } from "@/lib/utils/class-cn";
import { MoveLeftIcon } from "lucide-react";

type MoveLeftProps = {
  size?: number;
  className?: string;
};

export default function MoveLeft({ size = 20, className }: MoveLeftProps) {
  return <MoveLeftIcon size={size} className={cn("rtl:-scale-x-100", className)} />;
}
