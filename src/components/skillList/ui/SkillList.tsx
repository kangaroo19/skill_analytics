import { SkillCardPropTypes } from "../types";
import { useQuery } from "@tanstack/react-query";
import { Card, Progress } from "@/components/ui";
import Image from "next/image";
import { getSkillList } from "../api/getSkillList";
import { useState } from "react";
import setImageSrc from "@/features/skillFrequency/utils/setImageSrc";

export default function SkillList() {
  const { data, isLoading, error } = useQuery<SkillCardPropTypes[]>({
    queryKey: ["data"], // 데이터 키를 설정합니다.
    queryFn: () => getSkillList(1),
  });
  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }
  return (
    <>
      {data?.map((item, idx) => (
        <SkillCard
          key={idx}
          ranking={idx + 1}
          skillName={item.skillName} // data에서 skillName을 매핑
          count={item.count} // data에서 count를 매핑
          frequency={item.frequency} // data에서 frequency를 매핑
        />
      ))}
    </>
  );
}

const SkillCard: React.FC<SkillCardPropTypes> = ({ ranking, skillName, count, frequency }) => {
  const [imageSrc, setImageSrcState] = useState(setImageSrc(skillName));

  return (
    <Card.Card className="flex w-full items-center space-x-4 py-2 px-4 my-4 rounded-lg">
      <span className="text-center text-3xl font-spoqa-regular w-10">{ranking}</span>
      <Image
        src={imageSrc}
        width={50}
        height={50}
        alt={`${skillName} Icon`}
        onError={() => setImageSrcState("/noImg.png")} // 기본 이미지 경로 설정
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
