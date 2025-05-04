'use client'

import { useEffect, useState } from "react";
import { getAvailabilityForce } from "@/services/getAvailabilityForce";
import MeetingItem from "@/components/meetings/MeetingItem";

import { AvailabilityForce } from "@/types/AvailabilityForce.types";
import styles from "./Meetings.module.scss";

const Meetings: React.FC = () => {
  const [availabilityForce, setAvailabilityForce] = useState<AvailabilityForce[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAvailabilityForce();
        setAvailabilityForce(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <h2 className={styles.header}>Meetings</h2>
    <ul className={styles.meetingsList}>   
      {
        availabilityForce.length > 0 ? (
          availabilityForce.map((meeting) => (
            <MeetingItem key={meeting.id} meeting={meeting} />
          ))
        ) : (
          <p>No meetings available</p>
        )}
    </ul>
    </>
  );
};

export default Meetings;