import Image from "next/image";
import { Card, Progress } from "./ui";
import { ReactNode } from "react";

interface SkillCardPropTypes {
  skillName: string;
  count: number;
  frequency: number;
}

export default function SkillCard({
  skillName,
  count,
  frequency,
}: SkillCardPropTypes) {
  return (
    <Card.Card className="flex w-full items-center space-x-4 p-2 rounded-lg">
      <span className="text-3xl font-spoqa-regular">1</span>
      <Image
        src={`https://cdn.simpleicons.org/${skillName.toLowerCase()}`}
        width={50}
        height={50}
        alt="React Icon"
      />
      <Card.CardHeader className="flex-1 p-2">
        <Card.CardTitle className="text-lg">{skillName}</Card.CardTitle>
        <Progress value={count} className="h-4" />
      </Card.CardHeader>
      <div className="flex items-end h-full">
        <span className="leading-none text-lg">{count}%</span>
      </div>
    </Card.Card>
  );
}
