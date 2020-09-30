/* import axios from "axios";

const countriesList = async () => {
  let countryNames;
  try {
    const res = await axios.get("/");
    const countries = res.data;

    countryNames = countries.map((e) => e.name);
    // console.log(countryNames);
    return countryNames;
  } catch (e) {
    console.error(e);
  }
};

export default countriesList;
 */
