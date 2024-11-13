export const fetchData = async (): Promise<SkillCardPropTypes[]> => {
  const response = await fetch(
    "http://localhost:5555/skills-frequency/2/2024_11_11"
  );
  if (!response.ok) {
    throw new Error("데이터를 가져오는 데 실패했습니다.");
  }
  return response.json();
};
