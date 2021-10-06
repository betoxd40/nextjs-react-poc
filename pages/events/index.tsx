import { Layout, EventItem } from "@/components";
import { API_URL } from "@/config";
import { FC } from "react";

type EventsProps = {
  events: any;
};

const Events: FC<EventsProps> = ({ events }) => {
  return (
    <>
      <Layout title="DJ Events | Find the hottest parties">
        <h1>Events</h1>
        {events.length === 0 ? (
          <h3>No events to Show</h3>
        ) : (
          events.map((evt) => <EventItem key={evt.id} event={evt} />)
        )}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return { props: { events: events.slice(0, 3) }, revalidate: 1 };
}

export default Events;
