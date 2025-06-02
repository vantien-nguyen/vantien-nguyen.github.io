import { colorMap } from "./constants";
import { iconMap, Technology } from "./types";


export const getIcon = (tech: Technology) => {
  const Icon = iconMap[tech.icon] as React.ComponentType<{ 
        className?: string; 
        'aria-hidden'?: string 
      }> | undefined;
  if (!Icon) return null;

  const colorClass = colorMap[tech.name] || 'text-gray-600 hover:text-gray-700';

  return (
    <div className="inline-block group" aria-label={tech.name} title={tech.name}>
      <Icon 
        className={`w-5 h-5 ${colorClass} transition-colors duration-200`}
        aria-hidden="true"
      />
    </div>
  );
};


export const calculateDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = endDate.toLowerCase() === 'present' ? new Date() : new Date(endDate);
  
  let months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12 + 1;
  
  const yearsText = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthsText = remainingMonths > 0 ? `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : '';
  
  if (yearsText && monthsText) {
    return `${yearsText} and ${monthsText}`;
  }
  return yearsText || monthsText || 'Less than a month';
};

export const formatDate = (dateString: string): string => {
  if (dateString.toLowerCase() === 'present') return 'Present';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
