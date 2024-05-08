import { ReactNode } from "react";
import load from "@loadable/component";
import DateRangeSkeleton from "./DateRangeSkeleton";

const DateRange = load(() => import("./DateRange"), {
  fallback: <DateRangeSkeleton />,
});

const emptyArray: string[] = [];

export type WorkExperienceCardProps = {
  readonly startDate: Date;
  readonly endDate?: Date;
  readonly place: string;
  readonly title: string;
  readonly description: ReactNode;
  readonly badges?: string[];
};

export function WorkExperienceCard({
  startDate,
  endDate = undefined,
  place,
  title,
  description,
  badges = emptyArray,
}: WorkExperienceCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <DateRange end={endDate} start={startDate} />
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
