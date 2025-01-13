"use client";

import PageHeader from "@/components/SkillPage/ui/components/PageHeader";
import { SkillList } from "@/features/skillFrequency";
import PositionButton from "@/components/SkillPage/ui/components/PositionButton";

export default function Home() {
  return (
    <div className="font-spoqa-regular">
      <PageHeader>프론트엔드</PageHeader>
      <PositionButton />
      <SkillList />
    </div>
  );
}
