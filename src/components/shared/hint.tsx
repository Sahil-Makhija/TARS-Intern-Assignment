import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui";

interface HintProps {
  children: React.ReactNode;
  description: string;
  side?: "left" | "top" | "right" | "bottom";
  sideOffset?: number;
}

export const Hint = ({
  children,
  description,
  side,
  sideOffset,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          sideOffset={sideOffset}
          side={side}
          className="text-xs max-w-[220px] break-words bg-secondary text-muted-foreground"
        >
          {description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
