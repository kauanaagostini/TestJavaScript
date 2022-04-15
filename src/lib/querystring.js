// module.exports.queryString = (obj) => {
//   const entries = Object.entries(obj).map(item => {
//     return `${item[0]}=${item[1]}`;
//   });
//   return entries.join('&');
// };
// refatorando a função acima=>

// module.exports.queryString = (obj) =>
//   Object.entries(obj)
//     .map(([key, value]) => {
//       if (typeof value === 'object' && !Array.isArray(value)) {
//         throw new Error('Please check your params');
//       }
//       return `${key}=${value}`
//     })
//     .join('&');
// refatorando o metodo acima => 
const keyValeuToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check your params');
  }
  return `${key}=${value}`
}

export function queryString(obj) { return Object.entries(obj).map(keyValeuToString).join('&'); }

// module.exports.parse = string => {
//   return Object.fromEntries(
//     string.split('&').map(item => {
//       return item.split('=');
//     }),
//   );
// };
// refatorando metodo acima =>
// module.exports.parse = string =>
//   Object.fromEntries(
//     string.split('&').map(item => {
//       const parts = item.split('=');
//       if (parts[1].indexOf(',') > -1) {
//         parts[1] = parts[1].split(',');
//       }
//       return parts;
//     }),
//   );
// refatorando metodo acima =>
export function parse(string) {
  return Object.fromEntries(
    string.split('&').map(item => {
      let [key, value] = item.split('=');
      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }
      return [key, value];
    }),
  );
}
