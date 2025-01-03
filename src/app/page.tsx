"use client";

import PageHeader from "@/components/PageHeader";
import { SkillList } from "@/features/skillFrequency";
import PositionButton from "@/features/skillFrequency/ui/PositionButton";

export default function Home() {
  return (
    <div className="font-spoqa-regular">
      <PageHeader>프론트엔드</PageHeader>
      <PositionButton />
      <SkillList />
    </div>
  );
}
