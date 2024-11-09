import Image from "next/image";
import { Progress } from "./ui/progress";

export default function SkillCard() {
  return (
    <div>
      <Image
        src="https://cdn.simpleicons.org/react"
        width={50}
        height={50}
        alt="React Icon"
      />
      <Progress value={23} className="h-4" />
    </div>
  );
}
