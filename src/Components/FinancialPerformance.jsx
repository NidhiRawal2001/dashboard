import React from "react";
import graph from "../pictures/graph.svg";
import uk from "../pictures/uk.svg";
import waveGragh from "../pictures/waveGragh1.svg";
import startDate from "../pictures/startDate.svg";
import Balance from "../pictures/Balance.svg";
import Expirydate from "../pictures/Expirydate.svg";
import gremany from "../pictures/gremany.svg";
import eup from "../pictures/eup.svg";
import Eqyity from "../pictures/Equity.svg";

const logomenu = [
  {
    name: "Longs Won",
    percentage: "(641/921) 69%",
    worstTrade: "N",
  },
  {
    name: "Shorts Won",
    percentage: "(506/812) 62%",
    worstTrade: "N",
  },
  {
    name: "Best Trade",
    percentage: "2,880.00",
    worstTrade: "N",
  },
  {
    name: "Worst Trade",
    percentage: "-1,985.28",
    worstTrade: "Y",
  },
  {
    name: "Best Trade (Pips)",
    percentage: "550.0",
    worstTrade: "Y",
  },
  {
    name: "Worst Trade (Pips)",
    percentage: "-3,651.0",
    worstTrade: "N",
  },
  {
    name: "Avg. Trade Length",
    percentage: "1h 56m",
    worstTrade: "N",
  },
];
const country = [
  {
    countryImg: uk,
    countryCurrency1: "GBPUSD",
    countryCurrency2: "British pound / u.s. dollor",
    percentage: "1.35168",
    percentageprofitOrloss: "−0.00177 (−0.13%)",
    waveGragh:waveGragh,
    status: "L",
  },
  {
    countryImg: gremany,
    countryCurrency1: "EURJPY",
    countryCurrency2: "EURO / Japanese yen",
    percentage: "1.35168",
    percentageprofitOrloss: "−0.00177 (−0.13%)",
    waveGragh:waveGragh,
    status: "N",
  },
  {
    countryImg: eup,
    countryCurrency1: "EURUSD",
    countryCurrency2: "British pound / u.s. dollor",
    percentage: "1.35168",
    percentageprofitOrloss: "−0.00177 (−0.13%)",
    waveGragh:waveGragh,
    status: "p",
  },
];
const cardtDate = [
  {
    icone: startDate,
    dateType: "Start Date",
    date: "01 Jan 2023",
  },
  {
    icone: Expirydate,
    dateType: "Expiry date",
    date: "31 Jan 2023",
  },
  {
    icone: Balance,
    dateType: "Balance",
    date: "$52,215.52",
  },
  {
    icone: Eqyity,
    dateType: "Equity",
    date: "$52,136.96",
  },
];

const FinancialPerformance = () => {
  return (
    <div class="FinancialMainDiv">
      <div style={{ width: "40.7%" }}>
        <div class="FinancialMainDivCard">
          {cardtDate.map((items)=>(
<>
     <div class="card">
            <div>
              {" "}
              <img src={items.icone} alt="" />
            </div>
            <div class="cardTypeDate">{items.dateType}</div>
            <div class="cardDate">{items.date}</div>
          </div>
</>
          ))}
        </div>
        <div class="fp">
          <div
            style={{
              background: "white",
              padding: "20px",
             paddingBlockEnd:"19%",
              borderRadius: "10px",
            }}
          >
             {logomenu.map((items)=>(
                <>
            <div
              style={{ borderBottom: "1px solid black", marginBottom: "20px", marginTop:"20px" }}
            >
             
                <div className="logoMenu1">
                <span className="logoMenuP1">{items.name}</span>
                <span className={ `${items.worstTrade == "Y" ? "logoMenuP2red" :"logoMenuP2"}`}>{items.percentage}</span>
              </div>
            </div>
            </>
              ))}
          </div>
        </div>
      </div>

      <div style={{ width: "76.3%" }}>
        <div class="fp">
          <div class="graph">
            <div class="graphHeader">
              <div style={{ fontSize: "20px", fontWeight: "700" }}>
                Finacial Performance
              </div>
              <div style={{ display: "flex" }}>
                <button>1M</button>
                <button>5M</button>
                <button style={{background:"#3BD1F2"}}>1D</button>
                <button>1MO</button>
              </div>
              <div style={{ display: "flex" }}>
                <div class="balance">Balance</div>
                <div class="profit">Profit</div>
              </div>
            </div>
            <img
              src={graph}
              style={{ marginTop: "35px", marginBottom: "25px" }}
            />
          </div>
          
        </div>
        <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 15px",
            }}
          >
            <p style={{ fontSize: "20px", fontWeight: "600" }}>Others</p>
            <p style={{ fontSize: "16px", fontWeight: "500" }}>See All</p>
          </div>
        <div class="country fp">
          {country.map((items)=>(

            <>
             <div class="countrycard">
            <div style={{ display: "flex" }}>
              <img src={items.countryImg} alt="" />
              <div>
                <p style={{fontSize:"14px",fontWeight:"700"}}>{items.countryCurrency1}</p>
                <p style={{color:"#979797",fontSize:"14px",fontWeight:"400"}}>{items.countryCurrency2}</p>
              </div>
            </div>
            <div>
              <div style={{fontSize:"20px",fontWeight:"600"}}>{items.percentage}</div>
              <div style={items.status === "L" ? { color: "#FA4D4D" ,fontWeight:"500",fontSize:"15px" } : items.status === "p" ? {color:"#4CB736" ,fontWeight:"500",fontSize:"15px"} : {color:"#1D1F35" ,fontWeight:"500",fontSize:"15px"}}>{items.percentageprofitOrloss}</div>
            </div>
            <div>
              <img src={items.waveGragh} alt="" />
            </div>
          </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialPerformance;
