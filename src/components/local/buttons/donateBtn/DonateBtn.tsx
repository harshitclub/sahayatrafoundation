import { HeartHandshake } from "lucide-react";
import Link from "next/link";
import "./style.css";

function DonateBtn() {
  return (
    <Link
      href="/donate" // use actual donate page route
      className="donateNowBtn"
      aria-label="Donate Now to support our mission"
    >
      <HeartHandshake
        className="inline-block -mt-1"
        size={20}
        strokeWidth={1.8}
        aria-hidden="true"
      />{" "}
      <span>Donate Now</span>
    </Link>
  );
}

export default DonateBtn;
