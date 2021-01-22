import React, { useContext, useEffect } from 'react';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import { authContext } from '../context/AuthContext';

const Countries = () => {
const {getCount, countries, handleCountryChange} = useContext(authContext)


useEffect(()=>{
  getCount()
}, [])
    
    return (
            
          <FormControl
          
          style={{
            backgroundColor: "White",
            color: "Black",
            borderRadius: "1px",
            borderColor: "transparent",
            textAlign: "left",
            margin: "1%",
            padding:"2%",
            
          }}
          >
          
    
      <FormControl >
      <NativeSelect defaultValue="Kyrgyzstan" onChange={(e) => handleCountryChange( e.target.value)}>
        <option value="Kyrgyzstan"> Kyrgyzstan</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>

          </FormControl>
    );
};

export default Countries;
