import { Layout, EventItem, Pagination } from "@/components";
import { API_URL } from "@/config";
import { FC } from "react";

type EventsProps = {
  events: any;
  page: number;
  total: number;
};

const PER_PAGE = 2;

const EventsPage: FC<EventsProps> = ({ events, page, total }) => {
  return (
    <>
      <Layout title="DJ Events | Find the hottest parties">
        <h1>Events</h1>
        {events.length === 0 ? (
          <h3>No events to Show</h3>
        ) : (
          events.map((evt) => <EventItem key={evt.id} event={evt} />)
        )}

        <Pagination page={page} total={total} />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();

  // Fetch Events
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const events = await eventRes.json();

  return { props: { events, page: +page, total } };
}

export default EventsPage;
