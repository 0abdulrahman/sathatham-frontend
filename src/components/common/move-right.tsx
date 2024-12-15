import { cn } from "@/lib/utils/class-cn";
import { MoveRightIcon } from "lucide-react";

type MoveRightProps = {
  size?: number;
  className?: string;
};

export default function MoveRight({ size = 20, className }: MoveRightProps) {
  return <MoveRightIcon size={size} className={cn("rtl:-scale-x-100", className)} />;
}
