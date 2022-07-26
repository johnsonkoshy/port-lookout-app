import React from "react";
import Box from "@mui/material/Box";
import BigPortInfo from "./bigportinfo";
import SmallPortInfo from "./smallportinfo";



export default function OtherPortInfo() {

    const list1 = ["Position:  29.870, -89.943 [miss river mile 80]", 
                    "Side to:  STB side to",
                    "Max Draft Channel:  48 feet FW",
                    "Max Draft Alongside:  45 ft"]
    
    const list2 = ["Gangway:  Ship gangway",
                    "Stowage: Holds # 1,2,3,4,& 5",
                    "Anchorage:  12-mile anchorage/N. Orleans, if needed",
                    "Transit Time From SWPASS:  8 hours"]
    
    const list3 = ["Last 3 Cargoes: Last - Barytes in Bulk, 2nd Last - Coal in Bulk, 3rd Last - Soybeans",
                    "Shore Figures:  TBD",
                    "Cargo to Discharge:  TBD",
                    ""
                    ]
    
    const list4 = ["Bunkers:  Yes, permitted alongside for fee",
                    "Freshwater available:  Yes",
                    "Deliveries:  Launch boat required",
                    "Shore Leave/Crew Change:  Allowed [at present]"]

    return(

        <Box>
           <BigPortInfo list1 = {list1} list2={list2} list3={list3} list4={list4} ></BigPortInfo>
           <SmallPortInfo></SmallPortInfo>
        </Box>
    )
}