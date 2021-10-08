import { FC } from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components";
import { API_URL } from "@/config";
import styles from "@/styles/Event.module.css";
import { formatDate } from "@/utils";

type EventProps = {
  event: any;
};

const EventPage: FC<EventProps> = ({ event }) => {
  const deleteEvent = () => null;

  return (
    <Layout title="DJ Events | Find the hottest parties">
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${event.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>

        <span>
          {formatDate(event.date)} at {event.time}
        </span>
        <h1>{event.name}</h1>
        {event.image && (
          <div className={styles.image}>
            <Image
              src={event.image.formats.medium.url}
              width={960}
              height={600}
              alt={event.slug}
            />
          </div>
        )}
        <h3>Performers</h3>
        <p>{event.performers}</p>

        <h3>Description:</h3>
        <p>{event.description}</p>
        <h3>Venue: {event.venue}</h3>
        <p>{event.address}</p>

        <Link href={`/events`}>
          <a className={styles.back}>Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();
  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const event = await res.json();

  return { props: { event: event[0] }, revalidate: 1 };
}

export default EventPage;
