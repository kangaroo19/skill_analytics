import Image from "next/image";
import { Card, Progress } from "./ui";

export default function SkillCard() {
  return (
    <Card.Card className="flex w-full items-center space-x-4 p-2 rounded-lg">
      <span className="text-3xl font-spoqa-regular">1</span>
      <Image
        src="https://cdn.simpleicons.org/react"
        width={50}
        height={50}
        alt="React Icon"
      />
      <Card.CardHeader className="flex-1 p-2">
        <Card.CardTitle className="text-lg">리액트</Card.CardTitle>
        <Progress value={23} className="h-4" />
      </Card.CardHeader>
      <div className="flex items-end h-full">
        <span className="leading-none text-lg">23%</span>
      </div>
    </Card.Card>
  );
}
