// Utility functions for formatting date and time for display

export const formatDateForDisplay = (isoDate: string): string => {
  if (!isoDate) return '';
  
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
};

export const formatTimeForDisplay = (time24: string): string => {
  if (!time24) return '';
  
  // If it's already in HH:MM:SS format, return as is
  if (time24.includes(':')) {
    return time24;
  }
  
  return time24;
};

export const getCurrentISODate = (): string => {
  return new Date().toISOString().split('T')[0];
};

export const getCurrentTime = (): string => {
  return new Date().toTimeString().split(' ')[0];
};