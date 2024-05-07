import { DateTime, Interval } from "luxon";

export type DateRangeProps = {
  readonly start: Date;
  readonly end?: Date;
};

export function DateRange({ start, end = undefined }: DateRangeProps) {
  const formattedStart = DateTime.fromJSDate(start).toFormat("MMM yyyy");
  const formattedEnd = end
    ? DateTime.fromJSDate(end).toFormat("MMM yyyy")
    : "Present";

  const duration = Interval.fromDateTimes(
    DateTime.fromJSDate(start),
    DateTime.fromJSDate(end ?? new Date()),
  )
    .toDuration()
    .rescale();

  const years = duration.get("years");
  const months = duration.get("months");

  return (
    <div className="flex flex-1 flex-col text-slate-400">
      <div className="uppercase">
        {formattedStart} — {formattedEnd}
      </div>
      <div>
        {years > 0 ? `${years}Y` : ""} {months > 0 ? `${months}M` : ""}
      </div>
    </div>
  );
}

export default DateRange;
