import { Button } from "@/components/ui";

export default function PositionButton() {
  return (
    <div className="flex space-x-4 py-2">
      <Button variant="outline">프론트엔드</Button>
      <Button variant="outline">서버/백엔드</Button>
      <Button variant="outline">안드로이드</Button>
      <Button variant="outline">IOS</Button>
    </div>
  );
}
