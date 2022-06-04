import { Flex } from "@chakra-ui/react"
import { useState } from "react";
import Header from '../components/Header'
import List from '../components/List'
import Map from '../components/Map'
import PlaceDetail from '../components/PlaceDetail'


const places = [
  {name: 'Sample Place1'},
  {name: 'Sample Place1'},
  {name: 'Sample Place1'},
  {name: 'Sample Place1'},
  {name: 'Sample Place1'},
  {name: 'Sample Place1'}
]

const Home = () => {

  const [coordinates, setCoordinates] = useState({lat: 34.852619, lng: -82.394012})
  const [type, setType] = useState('restaurants');
  const [ratings, setRatings] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  return (
  <Flex
    justifyContent = {"center"}
    alignItems = {"center"}
    width = {"100vw"}
    height = {"100vh"}
    maxWidth = {"100vw"}
    maxHeight = {"100vh"}
    position = {"relative"}
    // bg = {'blue.400'}
  >
    <Header 
      setType = {setType}
      setRatings = {setRatings}
      setCoordinates = {setCoordinates}
     
    />

    <List places={places} isLoading={isLoading} />

    <Map setCoordinates = {setCoordinates} coordinates = {coordinates} />

  </Flex>
  )
}
export default Home