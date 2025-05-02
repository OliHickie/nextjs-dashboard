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
