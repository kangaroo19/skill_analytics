import { Suspense } from "react";
import { PageHeader, PositionButton, SkillList } from "./components";
import SkeletonList from "./components/SkeletonList";
import ReactFloatingProfile from "react-floating-profile";

interface SkillPageProps {
  title: string;
  skillID: number;
}

export default function SkillPage({ title, skillID }: SkillPageProps) {
  return (
    <>
      <ReactFloatingProfile />
      <PageHeader>{title}</PageHeader>
      <PositionButton />
      {/* <Suspense fallback={<SkeletonList />}> */}
      <SkillList skillID={skillID} />
      {/* </Suspense> */}
    </>
  );
}
