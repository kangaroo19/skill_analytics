"use client";

import PageHeader from "@/components/PageHeader";
import { SkillList } from "@/features/skillFrequency";

export default function Home() {
  return (
    <div className="font-spoqa-regular">
      <PageHeader>프론트엔드</PageHeader>
      <SkillList />
    </div>
  );
}
