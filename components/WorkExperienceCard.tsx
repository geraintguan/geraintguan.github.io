import { ReactNode } from "react";
import { DateTime, Interval } from "luxon";

export type WorkExperienceCardProps = {
  readonly startDate: Date;
  readonly endDate?: Date;
  readonly place: string;
  readonly title: string;
  readonly description: ReactNode;
  readonly badges?: string[];
};

const emptyArray: string[] = [];

export function WorkExperienceCard({
  startDate,
  endDate = undefined,
  place,
  title,
  description,
  badges = emptyArray,
}: WorkExperienceCardProps) {
  const formattedStartDate =
    DateTime.fromJSDate(startDate).toFormat("MMM yyyy");
  const formattedEndDate = endDate
    ? DateTime.fromJSDate(endDate).toFormat("MMM yyyy")
    : "Present";

  const duration = Interval.fromDateTimes(
    DateTime.fromJSDate(startDate),
    DateTime.fromJSDate(endDate ?? new Date()),
  )
    .toDuration()
    .rescale();

  const years = duration.get("years");
  const months = duration.get("months");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="flex flex-1 flex-col text-slate-400">
          <div className="uppercase">
            {formattedStartDate} — {formattedEndDate}
          </div>
          <div>
            {years > 0 ? `${years}Y` : ""} {months > 0 ? `${months}M` : ""}
          </div>
        </div>
        <div className="mt-4 flex flex-col lg:mt-0">
          <div className="text-right text-lg font-bold text-slate-100">
            {title}
          </div>
          <div className="text-right text-slate-400">{place}</div>
        </div>
      </div>
      <div className="text-slate-300">{description}</div>
      <div className="flex flex-wrap gap-4">
        {badges.sort().map((badge) => (
          <div
            className="min-w-fit rounded-md bg-indigo-900 px-3 py-1 text-xs font-bold text-indigo-300"
            key={badge}
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}
