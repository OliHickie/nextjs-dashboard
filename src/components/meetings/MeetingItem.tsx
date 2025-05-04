
import { AvailabilityForce } from "@/types/AvailabilityForce.types";
import { formatTime } from "@/utils/timeUtils.utils";
import Image from "next/image";

import styles from "./Meetings.module.scss";

const MeetingItem = ({ meeting }: { meeting: AvailabilityForce }) => {

  return (
    <li className={styles.item} aria-label={`Check in for ${meeting.company.name}`} role="button" tabIndex={0}>
      <div>
        <h3>
          {meeting.room} - {meeting.company.name}
        </h3>
        <p>
          {formatTime(meeting.time.start)} - {formatTime(meeting.time.end)}
        </p>
      </div>
      <div className={styles.checkIn}>
        <Image
          src="/assets/Check-in-white.svg"
          alt=""
          width={24}
          height={24}
        />
        <span className="sr-only">Check in</span>
      </div>
    </li>
  )
}

export default MeetingItem;
