
import { AvailabilityForce } from "@/types/AvailabilityForce.types";
import { formatTime } from "@/utils/timeUtils.utils";

import styles from "./Meetings.module.scss";

const MeetingItem = ({ meeting }: { meeting: AvailabilityForce }) => {

  return (
    <li className={styles.item}>
      <div>
        <h3>
          {meeting.name} - {meeting.company.name}
        </h3>
        <p>
          {formatTime(meeting.time.start)} - {formatTime(meeting.time.end)}
        </p>
      </div>
      <div className={styles.checkIn}>
        <img src="/assets/Check-in-white.svg" alt="" />
        <span className="sr-only">Check in</span>
      </div>
    </li>
  )
}

export default MeetingItem;
