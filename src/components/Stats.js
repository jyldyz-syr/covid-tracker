import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

import {
  Col,
  Jumbotron,
} from "reactstrap";
import { authContext } from "../context/AuthContext";
import Countries from "./Countries";




const Stats = (props) => {
  const {changeCountry, max} = useContext(authContext)


// let max = arr[0]

  // for(let i = 0; i<4; i++){
  //   if(max<arr[i]){
  //     max=arr[i]
  //   }
  // }
  // console.log(max)


  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setCountries(await fetchCountries());
  //   };

  //   fetchAPI();
  // }, []);



  return (
    <div>

      <Col xs="12"
      style={{
        backgroundColor:"#EDF7FF",
        display:"flex",
        justifyContent:"start",
        paddingLeft:"6%",
        borderRadius:"5%"
      }}>
      <Countries/>
      </Col>


      <Col
        xs="12"
        style={{
          padding: "5%",
          paddingTop:"1%",
          backgroundColor: "#EDF7FF",
          width: "100%",
          height: "100%",
          borderRadius:"5%"
        }}
      >
        <Col
          xs="12"
          style={{
            display: "flex",
          
          }}
        >       
        

        {/* STATS_BLOCK */}

        <Col
          xs="8"
         
        >
          
          {/* TABLE_BLOCK */}
         {changeCountry ? (changeCountry.map(item =>(
           
            <Col
            xs="12"
            style={{
              backgroundColor: "White",
              display: "flex",
              borderRadius: "1%",
            }}
          >
            {/* TABLE LEFT */}
            <Col
              xs="4"
              style={{
                margin: "1%",
                display:"flex",
                alignItems: "center",
                fontWeight:"700",
              }}
            >
              <p> {item.Date}</p>
          
            </Col>

            {/* TABLE RIGHT */}
            <Col
              xs="8"
              style={{
                margin: "2%",
                display: "flex",
                justifyContent: "column",
                fontSize: "13px",
              }}
            >
              {/* TABLE RIGHT DATA START */}

              <Col>
                <Col
                  xs="6"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Active
                  </p>
                  <p
                    style={{
                      backgroundColor: "#EDF7FF",
                      borderRadius: "5%",
                      display: "flex",
                      padding: "5%",
                    }}
                  >
                    {item.Active}
                  </p>
                </Col>

                <Col
                  xs="6"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Confirmed
                  </p>
                  <p
                    style={{
                      backgroundColor: "#EDF7FF",
                      borderRadius: "5%",
                      display: "flex",
                      padding: "5%",
                    }}
                  >
                    {item.Confirmed}
                  </p>
                </Col>
              </Col>

              {/* TABLE RIGHT DATA END */}

              {/* TABLE RIGHT DATA START */}

              <Col display="flex">
                <Col
                  xs="6"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Deaths:
                  </p>
                  <p
                    style={{
                      backgroundColor: "#EDF7FF",
                      borderRadius: "5%",
                      display: "flex",
                      padding: "5%",
                    }}
                  >
                    {item.Deaths}
                  </p>
                </Col>

                <Col
                  xs="6"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Recovered
                  </p>
                  <p
                    style={{
                      backgroundColor: "#EDF7FF",
                      borderRadius: "5%",
                      display: "flex",
                      padding: "5%",
                    }}
                  >
                      {item.Recovered}
                  </p>
                </Col>
              </Col>

              {/* TABLE RIGHT DATA END */}
            </Col>
          </Col>

          

         ))) : (<h1></h1>)}
          {/* GREEN BLOCK */}
        </Col>
        <Col xs="4">
            <Jumbotron
              style={{
                backgroundColor: "#1BBC9B",
                borderRadius: "5px",
                color: "white",
              }}
            >
              <p className="lead">Top Recorered Cases</p>
              <h1 className="display-3">{max}</h1>

           
            </Jumbotron>
          </Col>
          </Col>
      </Col>
    
    </div>
  );
};

export default Stats;
