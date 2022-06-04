import {React, useState} from "react";
import { Box, MenuItem, MenuList } from "@chakra-ui/react";

import GoogleMapReact from 'google-map-react';

const Map = ({coordinates, setCoordinates }) => {

  
  return (
    <Box width={"full"} height={"full"}>
      
      <GoogleMapReact 
      bootstrapURLKeys={{key: 'AIzaSyBdyP2inMcrQSveGDd5xJX_9qL6r3LwH2Y'}}
      defaultCenter = { coordinates }
      center = { coordinates }
      defaultZoom = { 10 }
      margin = {[50, 50, 50, 50]}
      options = {""}
      onChange = {() => {}}
      onChildClick = {() => {}}
      
      >
     
    

      </GoogleMapReact>
    </Box>
  )
}

export default Map