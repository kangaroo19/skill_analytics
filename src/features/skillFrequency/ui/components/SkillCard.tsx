import { Card, Progress } from "@/components/ui";
import Image from "next/image";
import { SkillCardPropTypes } from "../../types";
import setImageSrc from "../../utils/setImageSrc";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SkillCard: React.FC<SkillCardPropTypes> = ({ ranking, skillName, count }) => {
  const router = useRouter();
  console.log(router);

  const [imageSrc, setImageSrcState] = useState(setImageSrc(skillName));
  return (
    <Card.Card className="flex w-full items-center space-x-4 py-2 px-4 my-4 rounded-lg">
      <span className="text-center text-3xl font-spoqa-regular w-10">{ranking}</span>
      <Image
        src={imageSrc}
        width={50}
        height={50}
        alt={`${skillName} Icon`}
        onError={(e) => {
          setImageSrcState("/noImg.png");
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
