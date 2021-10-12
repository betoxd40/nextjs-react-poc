import { FC } from "react";
import qs from "qs";
import { useRouter } from "next/router";
import Link from "next/link";
import { Layout, EventItem } from "@/components";
import { API_URL } from "@/config";

type SearchPageProps = {
  events: any;
};

const SearchPage: FC<SearchPageProps> = ({ events }) => {
  const router = useRouter();
  return (
    <>
      <Layout title="Search Results">
        <Link href="/events">Go Back</Link>
        <h1>Search Results for {router.query.term}</h1>
        {events.length === 0 ? (
          <h3>No events to Show</h3>
        ) : (
          events.map((evt) => <EventItem key={evt.id} event={evt} />)
        )}
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query} `);
  const events = await res.json();

  return { props: { events } };
}

export default SearchPage;
