import { colorMap } from "./constants";
import { iconMap, Technology } from "./types";

export const getIcon = (tech: Technology) => {
  const Icon = iconMap[tech.icon] as
    | React.ComponentType<{
        className?: string;
        "aria-hidden"?: string;
      }>
    | undefined;
  if (!Icon) return null;

  const colorClass = colorMap[tech.name] || "text-gray-600 hover:text-gray-700";

  return (
    <div
      className="inline-block group"
      aria-label={tech.name}
      title={tech.name}
    >
      <Icon
        className={`w-5 h-5 ${colorClass} transition-colors duration-200`}
        aria-hidden="true"
      />
    </div>
  );
};

export const calculateDuration = (
  startDate: string,
  endDate: string,
  language: string = "en",
): string => {
  const start = new Date(startDate);
  const end =
    endDate.toLowerCase() === "present" ? new Date() : new Date(endDate);

  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();

  const years = Math.floor(months / 12);
  const remainingMonths = (months % 12) + 1;

  if (language === "fr") {
    const yearsText = years > 0 ? `${years} an${years > 1 ? "s" : ""}` : "";
    const monthsText = remainingMonths > 0 ? `${remainingMonths} mois` : "";

    if (yearsText && monthsText) {
      return `${yearsText} et ${monthsText}`;
    }
    return yearsText || monthsText || "Moins d'un mois";
  }

  // Default to English
  const yearsText = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthsText =
    remainingMonths > 0
      ? `${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`
      : "";

  if (yearsText && monthsText) {
    return `${yearsText} and ${monthsText}`;
  }
  return yearsText || monthsText || "Less than a month";
};

export const formatDate = (
  dateString: string,
  language: string = "en",
): string => {
  if (dateString.toLowerCase() === "present") {
    return language === "fr" ? "Présent" : "Present";
  }
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    timeZone: "UTC", // Ensure consistent date formatting across timezones
  };

  // Use the appropriate locale for date formatting
  const locale = language === "fr" ? "fr-FR" : "en-US";
  const date = new Date(dateString);

  // Format the date
  let formattedDate = date.toLocaleDateString(locale, options);

  // Capitalize first letter for French months
  if (language === "fr") {
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return formattedDate;
};

export const getLocalizedContent = (
  currentLanguage: string,
  content: { en: string | string[]; fr: string | string[] },
) => {
  const value = content[currentLanguage as keyof typeof content] || content.en;
  return Array.isArray(value) ? value : [value];
};
