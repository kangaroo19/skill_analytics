import { PageHeader, PositionButton, SkillList } from "./components";

interface SkillPageProps {
  title: string;
  skillID: number;
}

export default function SkillPage({ title, skillID }: SkillPageProps) {
  console.log(title);
  return (
    <>
      <PageHeader>{title}</PageHeader>
      <PositionButton />
      <SkillList skillID={skillID} />
    </>
  );
}
