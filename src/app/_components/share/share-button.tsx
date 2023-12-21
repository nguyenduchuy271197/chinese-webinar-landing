import { Share } from "lucide-react";

export default function ShareButton() {
  return (
    <button className="inline-flex items-center py-2 px-4 text-sm rounded-full bg-neutral-200 hover:bg-neutral-300 transition font-medium">
      Chia sẻ <Share className="ml-2 w-4 h-4" />
    </button>
  );
}
