import { FacebookIcon } from "lucide-react";

interface FacebookButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function FacebookButton({ ...props }: FacebookButtonProps) {
  return (
    <button
      {...props}
      className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-black border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
    >
      <FacebookIcon className="w-6 h-6 text-[#1877F2]" />
      <span className="text-[15px] font-medium">Continue with Facebook</span>
    </button>
  );
}
