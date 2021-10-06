import Link from "next/link";
import { Layout, EventItem } from "@/components";
import { API_URL } from "@/config";
import { FC } from "react";

type HomeProps = {
  events: any;
};

const Home: FC<HomeProps> = ({ events }) => {
  console.log("🚀 ~ file: index.tsx ~ line 10 ~ events", events);
  return (
    <>
      <Layout title="DJ Events | Find the hottest parties">
        <h1>Upcoming events</h1>
        {events.length === 0 ? (
          <h3>No events to Show</h3>
        ) : (
          <>
            {events.map((evt) => (
              <EventItem key={evt.id} event={evt} />
            ))}
            <Link href={`/events`}>
              <a className="btn-secondary">View all Events</a>
            </Link>
          </>
        )}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return { props: { events }, revalidate: 1 };
}

export default Home;
