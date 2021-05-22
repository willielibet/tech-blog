// module.exports = {
//     format_time: (date) => {
//       return date.toLocaleTimeString();
//     },
//     format_date: (date) => {
//       //format date as MM/DD/YYYY
//       return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
//         new Date(date).getFullYear()
//       }`;
//     },
//   };


  module.exports = {
    format_time: (date) => {
            return date.toLocaleTimeString();
          },
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  };
  