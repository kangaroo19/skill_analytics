"use client";

import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import { memo } from "react";
function PositionButton() {
  const router = useRouter();
  const onClickRoutes = (event: React.MouseEvent<HTMLDivElement>) => {
    const { name } = event.target as HTMLButtonElement;
    if (name) {
      router.push(`/${name}`);
    }
  };
  return (
    <div className="flex space-x-4 py-2" onClick={onClickRoutes}>
      <Button variant="secondary" name="frontend" className="bg-blue-500 text-white hover:bg-blue-600">
        프론트엔드
      </Button>
      <Button variant="outline" name="backend">
        서버/백엔드
      </Button>
      <Button variant="outline" name="android">
        안드로이드
      </Button>
      <Button variant="outline" name="ios">
        IOS
      </Button>
    </div>
  );
}

export default memo(PositionButton);
