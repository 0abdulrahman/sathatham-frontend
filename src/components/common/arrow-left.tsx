import { cn } from "@/lib/utils/class-cn";
import { ArrowLeftIcon } from "lucide-react";

type ArrowLeftProps = {
  size?: number;
  className?: string;
};

export default function ArrowLeft({ size = 20, className }: ArrowLeftProps) {
  return <ArrowLeftIcon size={size} className={cn("rtl:-scale-x-100", className)} />;
}
