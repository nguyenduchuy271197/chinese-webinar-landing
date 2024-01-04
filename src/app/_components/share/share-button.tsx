import { Share } from "lucide-react";

export default function ShareButton() {
  return (
    <button className="inline-flex items-center py-2 px-4 body2-semi rounded-full bg-neutral-200 hover:bg-neutral-300 transition">
      Chia sẻ <Share className="ml-2 size-4" />
    </button>
  );
}
