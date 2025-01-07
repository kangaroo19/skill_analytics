import PageHeader from "@/components/PageHeader";
import PositionButton from "@/features/skillFrequency/ui/PositionButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-spoqa-regular">
      <PageHeader>홈</PageHeader>
      <PositionButton />
    </div>
  );
}
