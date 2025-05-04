// returns the time difference between now and the date input in hours or days
export const timeAgo = (dateInput: string | Date): string => {
  const now = new Date();
  const past = new Date(dateInput);
  const diffMs = now.getTime() - past.getTime();

  if (diffMs <= 0) return '0 hours';

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);

  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  } else {
    return `${days} day${days !== 1 ? 's' : ''}`;
  }
}

export const sortByDate = (a: string | Date, b: string | Date): number => {
  const dateA = new Date(a).getTime();
  const dateB = new Date(b).getTime();

  return dateB - dateA;
}

// returns 08:30
export const formatTime = (dateInput: string): string => {
  const date = new Date(dateInput);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

// returns Thursday 19th
export const formatDayOfWeek = (dateInput: string | Date): string => {
  const date = new Date(dateInput);

  const weekday = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(date);
  const day = date.getDate();

  const getOrdinal = (n: number): string => {
    if (n >= 11 && n <= 13) return `${n}th`;
    switch (n % 10) {
      case 1: return `${n}st`;
      case 2: return `${n}nd`;
      case 3: return `${n}rd`;
      default: return `${n}th`;
    }
  };

  return `${weekday} ${getOrdinal(day)}`;
};
