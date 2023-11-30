import React from 'react'
import NavMenu from '../Navbar/NavMenu'
import Dropdown from '../Dropdown/Dropdown'
import Table from '../Table/Table'
import Graph from '../Graph/Graph'
import Wrapper from '../Wrapper'
import News from '../News/News'
import Footer from '../Footer/Footer'

const HomePage = () => {
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