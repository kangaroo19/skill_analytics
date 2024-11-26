export const fetchData = async (): Promise<SkillCardPropTypes[]> => {
  const response = await fetch(
    "http://localhost:5555/skills-frequency/2/2024_11_11"
  );

  if (!response.ok) {
    throw new Error("데이터를 가져오는 데 실패했습니다.");
  }

  const rawData = await response.json();

  // 필드 이름 매핑
  return rawData.map((item: any) => ({
    skillName: item.skill_name, // API의 skill_name을 skillName으로 매핑
    count: item.count,
    frequency: item.frequency,
  }));
};