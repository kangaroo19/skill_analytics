"use client";

import { useInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getSkillList } from "../../api/getSkillList";
import { SkillCardPropTypes } from "../../types";
import SkillCard from "./SkillCard";
import { useEffect, useRef } from "react";

interface SkillListProps {
  skillID: number;
}

export default function SkillList({ skillID }: SkillListProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery<any>({
    queryKey: ["skillList", skillID], // skillID를 포함해 데이터 키 설정
    queryFn: ({ pageParam = 1 }) => getSkillList(skillID, 1),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.pagination.currentPage < lastPage.pagination.totalPages
        ? lastPage.pagination.currentPage + 1
        : undefined;
    },
  });
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);
  console.log(data);
  return (
    <>
      {data?.pages.map((page) =>
        page.data.map((item: SkillCardPropTypes, idx: number) => (
          <SkillCard
            key={`${item.skillName}-${idx}`} // 유니크한 key 설정
            ranking={idx + 1}
            skillName={item.skillName}
            count={item.count}
            frequency={item.frequency}
          />
        ))
      )}

      {hasNextPage && (
        <div ref={observerRef} className="text-center text-gray-500">
          {isFetchingNextPage ? "로딩 중..." : "스크롤하여 더 보기"}
        </div>
      )}
    </>
  );
}
