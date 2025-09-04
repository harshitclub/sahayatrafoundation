import Link from "next/link";
import "./style.css";
import { UserPlus } from "lucide-react";

function GetInvolvedBtn() {
  return (
    <Link href="#" className="getInvolvedBtn">
      <UserPlus className="inline-block -mt-1" size={20} strokeWidth={1.8} />{" "}
      Get Involved
    </Link>
  );
}

export default GetInvolvedBtn;
