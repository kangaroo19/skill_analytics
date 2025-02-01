import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// MySQL 커넥션 풀 설정
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "qweqwe123",
  database: "root",
});

// GET 요청 처리
export async function GET(req) {
  try {
    // URL에서 검색 파라미터 가져오기
    const { searchParams } = new URL(req.url);
    const jobCategory = searchParams.get("jobCategory");
    const date = searchParams.get("date");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    if (!jobCategory || !date) {
      return NextResponse.json({ error: "jobCategory와 date는 필수입니다." }, { status: 400 });
    }

    const formattedDate = date.replace(/-/g, "_");
    const offset = (page - 1) * limit;

    const connection = await pool.getConnection();

    try {
      // 전체 개수 조회
      const [[{ totalItems }]] = await connection.query(
        `SELECT COUNT(*) AS totalItems FROM skills_frequency_${jobCategory}_${formattedDate}`
      );
      console.log(totalItems);
      // 페이지네이션 적용하여 데이터 조회
      const [rows] = await connection.query(
        `SELECT * FROM skills_frequency_${jobCategory}_${formattedDate} 
         ORDER BY count DESC 
         LIMIT ? OFFSET ?`,
        [limit, offset]
      );
      connection.release(); // 커넥션 반환

      return NextResponse.json({
        data: rows,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(totalItems / limit),
          totalItems: totalItems,
          perPage: limit,
        },
      });
    } catch (error) {
      connection.release();
      console.error("DB 오류:", error);
      return NextResponse.json({ error: "데이터를 불러오는 중 오류가 발생했습니다." }, { status: 500 });
    }
  } catch (error) {
    console.error("서버 오류:", error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
