import { Card, Progress } from "@/components/ui";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { SkillCardPropTypes } from "../../types";

const SkillCard: React.FC<SkillCardPropTypes> = ({ ranking, skillName, count }) => {
  const pathname = usePathname();

  // useMemo로 imageSrc 계산
  const imageSrc = useMemo(() => setImageSrcPath(skillName, pathname), [skillName]);

  return (
    <Card.Card className="flex w-full items-center space-x-4 py-2 px-4 my-4 rounded-lg">
      <span className="text-center text-3xl font-spoqa-regular w-10">{ranking}</span>
      <img
        src={imageSrc}
        width={50}
        height={50}
        alt={`${skillName} Icon`}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/noImg.png";
        }}
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
};

export default SkillCard;

function setImageSrcPath(skillName: string, pathname: string): string {
  return `https://cdn.simpleicons.org/${skillName.toLowerCase().replace(/\s+/g, "").replace(/-/g, "")}`;
}
