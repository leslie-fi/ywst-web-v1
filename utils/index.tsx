export const DateFormatter = ({ dateString }: { dateString: string }) => {
  // const date = Date.parse(dateString);
  return <time dateTime={dateString}>{dateString}</time>;
};