import {
  zeroPad,
  longMonths,
  shortMonths,
  throwWrongFormatError,
  longDayNames,
  shortDayNames,
} from './utils/main.util';

export function list(arr: (string | number)[]): string {
  if (Array.isArray(arr) && arr.every((i) => typeof i === 'string' || typeof i === 'number')) {
    return arr.length === 1
      ? arr[0]?.toString()
      : [arr.slice(0, arr.length - 1).join(', '), arr[arr.length - 1]].join(' and ');
  }
  throw new Error('arr is not array of string or number');
}
export function hoursBySeconds(seconds: number, format: 'LONG' | 'MEDIUM' | 'SHORT'): string {
  try {
    const hours: number = Math.floor(seconds / 3600);
    const minutes: number = Math.floor((seconds % 3600) / 60);
    const secs: number = Math.floor((seconds % 3600) % 60);
    let hoursToDisplay: string = '';
    let minutesToDisplay: string = '';
    let secondsToDisplay: string = '';
    if (format === 'LONG') {
      hoursToDisplay = hours > 0 ? hours + (hours === 1 ? ' hour, ' : ' hours, ') : '0 hours, ';
      minutesToDisplay = minutes > 0 ? minutes + (minutes === 1 ? ' minute, ' : ' minutes, ') : '0 minutes, ';
      secondsToDisplay = secs > 0 ? secs + (secs === 1 ? ' second' : ' seconds') : '0 seconds';
    } else if (format === 'MEDIUM') {
      hoursToDisplay = hours > 0 ? hours + (hours === 1 ? ' hr, ' : ' hrs, ') : '0 hrs, ';
      minutesToDisplay = minutes > 0 ? minutes + (minutes === 1 ? ' min, ' : ' mins, ') : '0 mins, ';
      secondsToDisplay = secs > 0 ? secs + (secs === 1 ? ' sec' : ' secs') : '0 secs';
    } else if (format === 'SHORT') {
      hoursToDisplay = `${zeroPad(hours, 2).toString()}:`;
      minutesToDisplay = `${zeroPad(minutes, 2).toString()}:`;
      secondsToDisplay = zeroPad(secs, 2).toString();
    } else {
      throw new Error('Invalid format, Format should either be LONG, MEDIUM or SHORT');
    }
    return `${hoursToDisplay}${minutesToDisplay}${secondsToDisplay}`;
  } catch (error) {
    throw error;
  }
}
export function monthByNumber(monthNum: number, format: 'LONG' | 'SHORT' = 'LONG'): string {
  if (monthNum < 1 || monthNum > 12) {
    throw new Error('monthNum is out of range');
  }
  if (monthNum % 1 !== 0) {
    throw new Error('monthNum should not have decimal places');
  }
  let month = '';
  if (format === 'LONG') {
    month = longMonths[monthNum - 1];
  } else if (format === 'SHORT') {
    month = shortMonths[monthNum - 1];
  } else {
    throwWrongFormatError(format, false);
  }
  return month;
}
export function dayByNumber(dayNum: number, format: 'LONG' | 'SHORT' = 'LONG'): string {
  if (dayNum < 1 || dayNum > 7) {
    throw new Error('dayNum is out of range');
  }
  if (dayNum % 1 !== 0) {
    throw new Error('dayNum should not have decimal places');
  }
  let day: string = '';
  if (format === 'LONG') {
    day = longDayNames[dayNum - 1];
  } else if (format === 'SHORT') {
    day = shortDayNames[dayNum - 1];
  } else {
    throw new Error('Invalid format, Format should either be LONG or SHORT');
  }
  return day;
}
export function commaSeparatedNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
