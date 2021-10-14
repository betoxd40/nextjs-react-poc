import Link from "next/link";
import { FC } from "react";

type PaginationProps = {
  page: number;
  total: number;
};

const PER_PAGE = 2;

export const Pagination: FC<PaginationProps> = ({ page, total }) => {
  const lastPage = Math.ceil(total / PER_PAGE);
  return (
    <>
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <a className="btn-secondary">Prev</a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <a className="btn-secondary">Next</a>
        </Link>
      )}
    </>
  );
};
