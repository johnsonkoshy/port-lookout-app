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
                    "Connection Sizes:  2 x 6 inch cargo hoses [T.B.C.]",
                    "Anchorage:  12-mile anchorage/N. Orleans, if needed",
                    "Transit Time From SWPASS:  8 hours"]
    
    const list3 = ["Stowages:  #1-4P,4S,5P,5S",
                    "Parcel #(s):  #1-64654BBLS drilling fluid",
                    "Shore Figures:  TBD",
                    "Cargo to Discharge:  TBD"
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