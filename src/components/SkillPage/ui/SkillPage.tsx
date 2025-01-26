import { PageHeader, PositionButton, SkillList } from "./components";

interface SkillPageProps {
  title: string;
  skillID: number;
}

export default function SkillPage({ title, skillID }: SkillPageProps) {
  return (
    <>
      <PageHeader>{title}</PageHeader>
      <PositionButton />
      <SkillList skillID={skillID} />
    </>
  );
}
