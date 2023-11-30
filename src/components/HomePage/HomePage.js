import React, {useEffect} from 'react'
import NavMenu from '../Navbar/NavMenu'
import Dropdown from '../Dropdown/Dropdown'
import Table from '../Table/Table'
import Graph from '../Graph/Graph'
import Wrapper from '../Wrapper'
import News from '../News/News'
import Footer from '../Footer/Footer'
import {fetchStockDetails} from '../../actions/utilities'


const HomePage = () => {

  useEffect(() => {
    // // Code to run on component mount
    // console.log('Component is mounted');
    // fetchStockDetails().then(response => {
		// 	console.log(response);
		// });;

    const fetchData = async () => {
      try {
        // Perform asynchronous operations (e.g., data fetching)
        const response = await fetchStockDetails();
       // const data = await response.json();

        // Handle the data as needed
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the asynchronous function


  }, []);

  return (
    <Wrapper>

      <NavMenu />
      <Dropdown />
      <Graph />
      <Table />
      <News />
      <Footer />
    </Wrapper>
  )
}

export default HomePage