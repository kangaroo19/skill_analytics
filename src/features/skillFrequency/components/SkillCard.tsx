import { Card, Progress } from "@/components/ui";
import Image from "next/image";

interface SkillCardPropTypes {
  ranking: number;
  skillName: string;
  count: number;
  frequency: number;
}
export const SkillCard: React.FC<SkillCardPropTypes> = ({
  ranking,
  skillName,
  count,
  frequency,
}) => {
  return (
    <Card.Card className="flex w-full items-center space-x-4 py-2 px-4 my-4 rounded-lg">
      <span className="text-center text-3xl font-spoqa-regular w-10">
        {ranking}
      </span>
      <Image
        src={`https://cdn.simpleicons.org/${skillName
          .toLowerCase()
          .replace(/\s+/g, "")
          .replace(/-/g, "")}`}
        width={50}
        height={50}
        alt="React Icon"
      />
      <Card.CardHeader className="flex-1 p-2">
        <Card.CardTitle className="text-lg">{skillName}</Card.CardTitle>
        <Progress value={count} className="h-4" />
      </Card.CardHeader>
      <div className="flex items-end h-full">
        <span className="leading-none text-lg">{count}</span>
      </div>
    </Card.Card>
  );
}
