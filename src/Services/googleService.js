// const getCurrentPosition = (lat = "25.4574592", long = "78.60060159999999") => {
//   const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyBfvdlr4pZ5UbmIM9KzNSASmDy9pZsLQn0`;
//   return fetch(url)
//   .then((data) => data.json())
//   .then((data) => {
//     return data;
//   });
// };
export const getPosition = async (
  lat = "25.4574592",
  long = "78.60060159999999"
) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyBfvdlr4pZ5UbmIM9KzNSASmDy9pZsLQn0`;
    const data = await fetch(url);
    const result = await data.json();
    return result.result;
  } catch (error) {
    throw error;
  }
};

export const getAddress = (data) => {
  try {
    const address = data[0].formatted_address;
    let state = "";
    //Fetching State of country
    const [value] = data.results.filter((v) => {
      return v.types.includes("administrative_area_level_1");
    });
    if (value) {
      state = value.formatted_address;
    }
    return {
      address,
      state,
    };
  } catch (error) {
    throw error;
  }
};

// export default {
//   getPosition,
//   getAddress,
// };
