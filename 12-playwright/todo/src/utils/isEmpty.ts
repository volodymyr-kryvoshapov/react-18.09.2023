export function isEmpty(value: any) {
  if (typeof value === 'string') {
    return value.length === 0;
  }
  if (value === null || value === undefined) {
    return true;
  }

  return false;
}