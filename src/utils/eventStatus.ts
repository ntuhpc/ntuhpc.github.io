export type EventStatus = 'Upcoming' | 'Ongoing' | 'Completed' | 'Cancelled';

// Event dates are day-granular (times are freeform display strings), so status
// is derived by comparing calendar dates in Singapore time (UTC+8).
const singaporeDateKey = (date: Date) =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Singapore' }).format(date);

export function getEventStatus(
  event: { startDate: Date; endDate?: Date; cancelled?: boolean },
  now: Date = new Date(),
): EventStatus {
  if (event.cancelled) return 'Cancelled';
  const todayKey = singaporeDateKey(now);
  // startDate/endDate are parsed from YYYY-MM-DD as midnight UTC, so the ISO
  // date portion is the intended calendar date.
  const startKey = event.startDate.toISOString().slice(0, 10);
  const endKey = (event.endDate ?? event.startDate).toISOString().slice(0, 10);
  if (todayKey < startKey) return 'Upcoming';
  if (todayKey > endKey) return 'Completed';
  return 'Ongoing';
}
