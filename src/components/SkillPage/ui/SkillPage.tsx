import { Suspense } from "react";
import { PageHeader, PositionButton, SkillList } from "./components";
import SkeletonList from "./components/SkeletonList";

interface SkillPageProps {
  title: string;
  skillID: number;
}

export default function SkillPage({ title, skillID }: SkillPageProps) {
  return (
    <>
      <PageHeader>{title}</PageHeader>
      <PositionButton />
      <Suspense fallback={<SkeletonList />}>
        <SkillList skillID={skillID} />
      </Suspense>
    </>
  );
}
