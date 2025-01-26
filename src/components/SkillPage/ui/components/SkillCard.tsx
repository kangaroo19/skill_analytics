"use client";

import { Card, Progress } from "@/components/ui";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { SkillCardPropTypes } from "../../types";

const SkillCard: React.FC<SkillCardPropTypes> = ({ ranking, skillName, count }) => {
  const [imageSrc, setImageSrc] = useState(() => setImageSrcPath(skillName));
  useEffect(() => {
    setImageSrc(() => setImageSrcPath(skillName));
  }, [skillName]);
  const handleImageError = () => {
    setImageSrc("/noImg.png"); // 기본 이미지 경로로 변경
  };

  return (
    <Card.Card className="flex w-full items-center space-x-4 py-2 px-4 my-4 rounded-lg">
      <span className="text-center text-3xl font-spoqa-regular w-10">{ranking}</span>
      <div className="relative w-12 h-12">
        <Image
          src={imageSrc}
          width={50}
          height={50}
          alt={`${skillName} Icon`}
          className="object-contain"
          onError={handleImageError} // 이미지 로드 실패 시 실행
        />
      </div>
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

function setImageSrcPath(skillName: string): string {
  return `https://cdn.simpleicons.org/${skillName.toLowerCase().replace(/\s+/g, "").replace(/-/g, "")}`;
}
