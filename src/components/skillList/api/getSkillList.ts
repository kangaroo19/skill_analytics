import { SkillCardPropTypes } from "../types";

/**
 *
 * @param type 어떤 직무 보여줄지
 * @returns
 */
export const getSkillList = async (type: number): Promise<SkillCardPropTypes[]> => {
  const response = await fetch(`http://localhost:5555/skills-frequency/${type}/2024_12_02`);

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
