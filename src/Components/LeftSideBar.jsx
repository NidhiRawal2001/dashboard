import React from "react";
import img from "../pictures/sideNavbar-1.svg"
import AccountMetrics from "../pictures/AccountMetrics.svg"
import Affiliates from "../pictures/Affiliates.svg"
import Announcement from "../pictures/Announcement.svg"
import billing from "../pictures/billing.svg"
import downlaod from "../pictures/downlaod.svg"
import economic from "../pictures/economic.svg"
import education from "../pictures/education.svg"
import fundding from "../pictures/fundding.svg"
import leaderBoader from "../pictures/leaderBoader.svg"
import marketNews from "../pictures/marketNews.svg"
import payment from "../pictures/payment.svg"
import payout from "../pictures/payout.svg"
import setting from "../pictures/setting.svg"
import support from "../pictures/support.svg"
import verify from "../pictures/verify.svg"
import tradeJ from "../pictures/tradeIcon.svg"
// import img from "../pictures/"
// import img from "../pictures/setting.svg"

const LeftSideBarMenu2 =[
    {
        img: 
        setting
        ,
        title: "Settings"
      },
      {
        img: 
        payout
        ,
        title: "Payout"
      },
      {
        img: 
        billing
        ,
        title: "Billing"
      },
      {
        img: 
        verify
        ,
        title: "Verification"
      },
      {
        img: 
        support
        ,
        title: "Support"
      },
     

    ]
 const LeftSideBarMenu1 =[
    {
        img: 
            img
        ,
        title: "Dashboard",
        selected:"N"
      },
      {
        img: 
        AccountMetrics
        ,
        title: "Account Metrics",
        selected:"Y"
      },
      {
        img: 
        payment
        ,
        title: "Payment",
        selected:"N"
      },
      {
        img: 
        fundding
        ,
        title: "Funding Evaluation",
        selected:"N"
      },
      {
        img: 
        marketNews
        ,
        title: "Market News",
        selected:"N"
      },
      {
        img: 
        tradeJ
        ,
        title: "Trade Journal",
        selected:"N"
      },
      {
        img: 
        economic
        ,
        title: "Economic Calender",
        selected:"N"
      },
      {
        img: 
        leaderBoader
        ,
        title: "Leaderboard",
        selected:"N"
      },
      {
        img: 
        Announcement
        ,
        title: "Announcement",
        selected:"N"
      },
      {
        img: 
        Affiliates
        ,
        title: "Affiliates",
        selected:"N"
      },
      {
        img: 
        education
        ,
        title: "Education",
        selected:"N"
      },
      {
        img: 
        downlaod
        ,
        title: "Downloads",
        selected:"N"
      },
      

    ]
const LeftSideBar = () => {
  return (
    <div class="mainDiv">
      <div class="logo">logo</div>
      <div style={{ padding: "20px 20px" } }>
      {LeftSideBarMenu1.map((item, index) => (
        <div  style={item.selected === "Y" ? { background: "#3BD1F2", color:"white" ,padding:"10px", borderRadius:"10px"} : {padding:"10px", borderRadius:"10px"}}>
          <div key={index} className="logoMenu" style={item.selected === "Y" ? { background: "#3BD1F2", color:"white"} : null}>
            <span><img src={item.img} alt="" /></span>
            <span>{item.title}</span>
          </div>
          </div>
        ))}
    
        {/* <div class="logoMenu">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.24339 22.7577L1.24227 22.7566C0.907063 22.4221 0.75 22.0426 0.75 21.5775V2.4225C0.75 1.95738 0.907063 1.57789 1.24227 1.24339L1.24339 1.24227C1.57789 0.907063 1.95738 0.75 2.4225 0.75H8.8275C9.29262 0.75 9.67211 0.907063 10.0066 1.24227L10.0077 1.24339C10.3429 1.57789 10.5 1.95738 10.5 2.4225V21.5775C10.5 22.0426 10.3429 22.4221 10.0077 22.7566L10.0066 22.7577C9.67211 23.0929 9.29262 23.25 8.8275 23.25H2.4225C1.95738 23.25 1.57789 23.0929 1.24339 22.7577ZM13.9934 22.7577L13.9923 22.7566C13.6571 22.4221 13.5 22.0426 13.5 21.5775V14.4225C13.5 13.9574 13.6571 13.5779 13.9923 13.2434C14.3282 12.9081 14.7086 12.7508 15.173 12.75C15.1732 12.75 15.1734 12.75 15.1736 12.75L21.5775 12.75C22.0426 12.75 22.4221 12.9071 22.7566 13.2423L22.7577 13.2434C23.0929 13.5779 23.25 13.9574 23.25 14.4225V21.5775C23.25 22.0426 23.0929 22.4221 22.7577 22.7566L22.7566 22.7577C22.4221 23.0929 22.0426 23.25 21.5775 23.25H15.1725C14.7074 23.25 14.3279 23.0929 13.9934 22.7577ZM13.9934 9.25773L13.9923 9.25661C13.6571 8.92211 13.5 8.54262 13.5 8.0775V2.4225C13.5 1.95738 13.6571 1.57789 13.9923 1.24339L13.9934 1.24227C14.3279 0.907063 14.7074 0.75 15.1725 0.75H21.5775C22.0426 0.75 22.4221 0.907063 22.7566 1.24227L22.7577 1.24339C23.0929 1.57789 23.25 1.95738 23.25 2.4225V8.0775C23.25 8.54262 23.0929 8.92211 22.7577 9.25661L22.7566 9.25773C22.4221 9.59294 22.0426 9.75 21.5775 9.75H15.1725C14.7074 9.75 14.3279 9.59294 13.9934 9.25773Z"
                stroke="#1D1F35"
                stroke-width="1.5"
              />
            </svg>
          </span>
          <span>Dashboard</span>
        </div> */}
      </div>
      <div style={{ padding: "20px 20px", borderTop: "2px solid black" }}>
      {LeftSideBarMenu2.map((item, index) => (
        <div style={{padding:"10px", borderRadius:"10px"}}>
          <div key={index} className="logoMenu">
            <span><img src={item.img} alt="" /></span>
            <span>{item.title}</span>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
