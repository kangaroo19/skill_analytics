"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { getSkillList } from "../../api/getSkillList";
import { SkillCardPropTypes } from "../../types";
import SkillCard from "./SkillCard";

interface SkillListProps {
  skillID: number;
}

export default function SkillList({ skillID }: SkillListProps) {
  const { data } = useSuspenseQuery<SkillCardPropTypes[]>({
    queryKey: ["skillList", skillID], // skillID를 포함해 데이터 키 설정
    queryFn: () => getSkillList(skillID),
  });

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
