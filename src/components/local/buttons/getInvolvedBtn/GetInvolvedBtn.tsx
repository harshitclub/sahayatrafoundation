import Link from "next/link";
import "./style.css";
import { UserPlus } from "lucide-react";

function GetInvolvedBtn() {
  return (
    <Link
      href="/get-involved" // replace with actual route
      className="getInvolvedBtn"
      aria-label="Get involved with our NGO"
    >
      <UserPlus
        className="inline-block -mt-1"
        size={20}
        strokeWidth={1.8}
        aria-hidden="true"
      />{" "}
      <span>Get Involved</span>
    </Link>
  );
}

export default GetInvolvedBtn;
