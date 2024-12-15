import React from "react";
import { DateTimeFormatOptions, useFormatter } from "next-intl";

type FormatDateProps = {
  date: Date | string | number;
  endDate?: Date | string | number;
  additionalFormats?: DateTimeFormatOptions;
  replaceFormatWith?: DateTimeFormatOptions | string;
};

/**
 * FormatDate component to format dates based on internationalization settings and application locale.
 * It supports formatting a single date or a range between two dates.
 *
 * @param {Date | string | number} props.date - The start date to format. Can be a Date object, a date string, or a timestamp.
 * @param {Date | string | number} [props.endDate='1999-09-09'] - The end date for a range. If given, a range between two dates will be displayed.
 * @param {DateTimeFormatOptions} [props.additionalFormats] - Additional formatting options to apply to the date format.
 * @param {DateTimeFormatOptions | string} [props.replaceFormatWith] - Replacement format options or a format string that overrides the default format.
 *
 * @returns {JSX.Element} The formatted date or date range as a React JSX element.
 *
 * @example
 * // Basic usage with a date string
 * <FormatDate date="2024-06-03" />
 * // Returns Mon, Jun 3
 *
 * @example
 * // Formatting a date range
 * <FormatDate date="2024-06-03" endDate="2024-06-10" range />
 * // Returns Mon, Jun 3 – Mon, Jun 10
 *
 * @example
 * // With additional formatting options
 * <FormatDate
 *   date={new Date('2024-06-03')}
 *   additionalFormats={{ year: 'numeric' }}
 * />
 * // Returns Mon, Jun 3, 2024
 *
 * @example
 * // Replacing the default format with a completely new one
 * <FormatDate
 *   date="2024-06-03"
 *   replaceFormatWith={{ dateStyle: 'full' }}
 * />
 * // Returns June 3, 2024
 */
export default function FormatDate({
  date = "1999-09-09",
  endDate,
  additionalFormats,
  replaceFormatWith,
}: FormatDateProps) {
  const format = useFormatter();

  const startDateObject = new Date(date);
  const endDateObject = endDate ? new Date(endDate) : null;

  let dateFormat: DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    numberingSystem: "latn",
  };

  if (additionalFormats) dateFormat = { ...dateFormat, ...additionalFormats };

  if (endDateObject)
    return <>{format.dateTimeRange(startDateObject, endDateObject, replaceFormatWith || dateFormat)}</>;

  return <>{format.dateTime(startDateObject, replaceFormatWith || dateFormat)}</>;
}
