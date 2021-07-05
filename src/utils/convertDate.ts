export function convertDate(date) {
  let unix_timestamp = date
  
  const newDate = new Date(unix_timestamp * 1000);
 
  const hours = newDate.getHours();
 
  const minutes = "0" + newDate.getMinutes();
 
  const formattedTime = hours + ':' + minutes.substr(-2);

  return formattedTime;
}