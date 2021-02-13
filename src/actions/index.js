
export function getCity() {
  return async (dispatch) => {
    const respons = await fetch("https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json");
    const city = await respons.json();
    console.log(city);
    dispatch({
      type : "GET_CITY",
      value : city
    })
  }
}
export function getDestiantion(destin) {
  return {
    type : "DESTINATION_CITY",
    value : destin
  }
}
