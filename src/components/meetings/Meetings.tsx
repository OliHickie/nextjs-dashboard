'use client'

import { useEffect, useState } from "react";
import { getAvailabilityForce } from "@/services/getAvailabilityForce";
import MeetingItem from "@/components/meetings/MeetingItem";
import { useBuilding } from "@/context/BuildingContext";

import { AvailabilityForce } from "@/types/AvailabilityForce.types";
import styles from "./Meetings.module.scss";

const Meetings: React.FC = () => {
  const [availabilityForce, setAvailabilityForce] = useState<AvailabilityForce[] | null>(null);
  const { buildingId } = useBuilding();

  useEffect(() => {
    const fetchData = async () => {
      if (!buildingId) {
        console.error("Building ID is not set");
        return;
      }
      try {
        const data = await getAvailabilityForce(buildingId);
        setAvailabilityForce(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [buildingId]);

  return (
    <>
    <h2 className="global-subheading">Meetings</h2>
    { !availabilityForce ? (
      <p>Loading...</p>
    ) : availabilityForce.length > 0 ? (
      <ul className={styles.meetingsList}>
      {availabilityForce.map((meeting) => (
        <MeetingItem key={meeting.id} meeting={meeting} />
      ))}
      </ul>
    ) : (
      <p>No meetings available</p>
    )}
    </>
  );
};

export default Meetings;