import { HeartHandshake } from "lucide-react";
import "./style.css";
import Link from "next/link";

export default function WantToHelp() {
  return (
    <section className="wantToHelp w-full flex items-center justify-center">
      <div className="wantToHelpContainer width90 maxWidth flex items-center justify-between">
        <h3 className="text-4xl font-bold">
          Interested in contributing towards
          <br />
          educating girls?
        </h3>
        <Link href="#" className="font-semibold text-gray-600">
          <HeartHandshake className="inline-block text-[#c2950d]" size={30} />{" "}
          Yes! I want to help
        </Link>
      </div>
    </section>
  );
}
