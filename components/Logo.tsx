
import { Target } from "lucide-react";

interface LogoProps {
  variant?: "default" | "small";
}

export const Logo = ({ variant = "default" }: LogoProps) => {
  return (
    <div className="flex items-center">
      <Target className={`${variant === "small" ? "w-6 h-6" : "w-8 h-8"} text-dart-green mr-2`} />
      <span className={`font-bold ${variant === "small" ? "text-lg" : "text-xl"} bg-clip-text text-transparent bg-gradient-to-r from-dart-green via-dart-green-dark to-dart-accent`}>
        Dartopia
      </span>
    </div>
  );
};
