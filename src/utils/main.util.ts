export const longMonths: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const shortMonths: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export const longDayNames: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const shortDayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const siFileUnits: string[] = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
export const iecFileUnits: string[] =  ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

export const zeroPad = (num: number, places: number): string => {
  const zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join('0') + num;
};
export const throwWrongFormatError = (format: 'LONG' | 'MEDIUM' | 'SHORT', hasMedium: boolean = true) => {
  const formats: string[] = ['LONG', 'MEDIUM', 'SHORT'];
  const hasMediumMsg: string = 'Invalid format, Format should either be LONG, MEDIUM or SHORT';
  const hasNoMediumMsg: string = 'Invalid format, Format should either be LONG or SHORT';
  if (formats.indexOf(format) > -1) {
    if (!hasMedium && format === 'MEDIUM') {
      throw new Error(hasNoMediumMsg);
    }
  } else {
    if (hasMedium) {
      throw new Error(hasMediumMsg);
    } else {
      throw new Error(hasNoMediumMsg);
    }
  }
};
