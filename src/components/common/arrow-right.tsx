import { cn } from "@/lib/utils/class-cn";
import { ArrowRightIcon } from "lucide-react";

type ArrowRightProps = {
  size?: number;
  className?: string;
};

export default function ArrowRight({ size = 20, className }: ArrowRightProps) {
  return <ArrowRightIcon size={size} className={cn("rtl:-scale-x-100", className)} />;
}
