import { SkillCardPropTypes } from "../types";
import { useQuery } from "@tanstack/react-query";
import SkillCard from "./components/SkillCard";
import { fetchSkillList } from "../lib/fetchSkillList";

export default function SkillList() {
  const { data, isLoading, error } = useQuery<SkillCardPropTypes[]>({
    queryKey: ["data"], // 데이터 키를 설정합니다.
    queryFn: fetchSkillList,
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
