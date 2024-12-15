import { cn } from "@/lib/utils/class-cn";
import { ChevronLeftIcon } from "lucide-react";

type ChevronLeftProps = {
  size?: number;
  className?: string;
};

export default function ChevronLeft({ size = 20, className }: ChevronLeftProps) {
  return <ChevronLeftIcon size={size} className={cn("rtl:-scale-x-100", className)} />;
}
