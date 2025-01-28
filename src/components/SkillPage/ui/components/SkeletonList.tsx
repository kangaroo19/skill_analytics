import { Card } from "@/components/ui";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonList() {
  const skeletonArray = Array.from({ length: 10 });
  return (
    <>
      {skeletonArray.map(() => (
        <SkeletonItem />
      ))}
    </>
  );
}

function SkeletonItem() {
  return (
    <Card.Card className="flex w-full items-center space-x-4 py-2 px-4 my-4 rounded-lg">
      <div className="w-12 h-12">
        <Skeleton className="h-4 w-full h-full rounded-full" />
      </div>
      <div className="flex-1 p-2">
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-4 " />
      </div>
    </Card.Card>
  );
}
