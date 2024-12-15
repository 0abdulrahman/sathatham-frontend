import { cn } from "@/lib/utils/class-cn";
import { ChevronRightIcon } from "lucide-react";

type ChevronRightProps = {
  size?: number;
  className?: string;
};

export default function ChevronRight({ size = 20, className }: ChevronRightProps) {
  return <ChevronRightIcon size={size} className={cn("rtl:-scale-x-100", className)} />;
}
