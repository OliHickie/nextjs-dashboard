import { Item } from "../../types/CustomerForce.types";
import { formatTime, formatDayOfWeek } from "@/utils/timeUtils.utils";
import { FaChevronRight } from "react-icons/fa6";

import styles from "./CustomerForce.module.scss";

const CustomerForceItem: React.FC<{ item: Item; type: string }> = ({ item, type }: { item: Item; type: string }) => {

  const getDate = () => {
    if (type === "viewing") {
      return formatDayOfWeek(item.date) + " @" + formatTime(item.date);
    } else if (type === "move") {
      return formatDayOfWeek(item.date);
    }
    return item.date;
  }

  return (
    <li 
      className={styles.item} 
      aria-label={`${type} for ${item.room}`} 
      role="button" 
      tabIndex={0}
    >
      <div>
        <h3>{item.room} - {item.company}</h3>
        <p>{getDate()}</p>
      </div>
        <FaChevronRight size={24} aria-hidden="true" />
    </li>
  );
};

export default CustomerForceItem;