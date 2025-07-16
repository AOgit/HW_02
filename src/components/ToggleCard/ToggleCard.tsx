import { cn } from "clsx-for-tailwind";
import { useState } from "react";

export default function ToggleCard() {
  const [isBlue, setIsBlue] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center h-70 gap-10">
      <div className={cn("h-24 w-48 rounded-xl shadow-lg flex items-center justify-center", {"bg-blue-400": isBlue, "bg-yellow-300": !isBlue})}>ToggleCard</div>
      <button
        type="button"
        className="rounded-xl shadow-lg w-50 border-1! border-gray-300!"
        onClick={() => {
          setIsBlue((prev) => !prev);
        }}
      >
        Toggle card color
      </button>
    </div>
  );
}
