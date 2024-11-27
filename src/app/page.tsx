"use client";

import PageHeader from "@/components/PageHeader";
import { SkillCard } from "@/features/skillFrequency";
import { fetchData } from "@/lib/query/fetchSkillFrequency";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading, error } = useQuery<SkillCardPropTypest[]>({
    queryKey: ["data"], // 데이터 키를 설정합니다.
    queryFn: fetchData,
  });

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>에러가 발생했습니다.</div>;
  }
  return (
    <div className="font-spoqa-regular">
      <PageHeader>홈</PageHeader>
      {data?.map((item, idx) => (
        <SkillCard
          ranking={idx + 1}
          skillName={item.skillName} // data에서 skillName을 매핑
          count={item.count} // data에서 count를 매핑
          frequency={item.frequency} // data에서 frequency를 매핑
        />
      ))}
    </div>
  );
}
