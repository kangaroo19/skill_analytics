// https://cdn.simpleicons.org/ 경로 이미지 적용 위한 skillName 포멧팅 함수

export default function setImageSrc(skillName: string): string {
  return `https://cdn.simpleicons.org/${skillName
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/-/g, "")}`;
}
