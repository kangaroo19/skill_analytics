import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui";
import PositionButton from "@/features/skillFrequency/ui/PositionButton";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-spoqa-regular mt-4">
      <PageHeader>개발자 채용 공고를 크롤링해 기술 스택 통계를 분석하고 시각화하는 웹 애플리케이션 이에요.</PageHeader>
      <Image src="/landingImage.png" width={500} height={500} alt="Picture of the author" />
      <div className="flex justify-center w-full">
        <Link href="/front" className="w-1/2">
          <Button className="w-full py-6 my-auto mx-0 rounded-xl">시작하기</Button>
        </Link>
      </div>
    </div>
  );
}
