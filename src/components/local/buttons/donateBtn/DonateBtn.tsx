import { HeartHandshake } from "lucide-react";
import Link from "next/link";
import "./style.css";

function DonateBtn() {
  return (
    <Link href="#" className="donateNowBtn">
      <HeartHandshake
        className="inline-block -mt-1"
        size={20}
        strokeWidth={1.8}
      />{" "}
      Donate Now
    </Link>
  );
}

export default DonateBtn;
