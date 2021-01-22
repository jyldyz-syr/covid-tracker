import React, { useReducer, useEffect } from "react";
import axios from "axios";

const authContext = React.createContext();

const INIT_STATE = {
  countries: [],
  changeCountry: null,
  max: null
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COUNT":
      return { ...state, countries: action.payload };
    case "GET_CHANGED_COUNTRY":
      return { ...state, changeCountry: action.payload };
    case "MAX":
        return {...state, max: action.payload}
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  
  useEffect(() => {
    handleCountryChange('Kyrgyzstan');
  }, []);

  async function getCount() {
    let { data } = await axios(`https://api.covid19api.com/countries`);
    console.log(data)
    let data2 = data.map((item) => item.Country);
    dispatch({
      type: "GET_COUNT",
      payload: data2,
    });
  }

  async function handleCountryChange(countryName) {
    let { data } = await axios(
      `https://api.covid19api.com/total/country/${countryName}?from=2021-01-10T00:00:00Z&to=2021-01-14T00:00:00Z`
    );

    let res = data.map((item) => item.Recovered);

    let max = Math.max(...res);

    dispatch({
      type: "MAX",
      payload: max,
    });
    
    dispatch({
      type: "GET_CHANGED_COUNTRY",
      payload: data,
    });
  }

  return (
    <authContext.Provider
      value={{
        countries: state.countries,
        changeCountry: state.changeCountry,
        max: state.max,
        getCount,
        handleCountryChange,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
export { authContext };
