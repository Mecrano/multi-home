import React, { useState } from 'react'
import { Tabs, Tab } from 'vtex.styleguide'

function Multihome(props: any) {
  const brandSelected = localStorage.getItem('brandSeleted')
  const [tabActive, setTabActive] = useState(brandSelected || '1')

  return (
    <Tabs>
      <Tab
        label="Home 1"
        active={'1' === tabActive}
        onClick={() => {
          setTabActive('1')
          localStorage.setItem('brandSeleted', '1')
        }}
      >
        {'1' === tabActive ? props.children[0] : null}
      </Tab>
      <Tab
        label="Home 2"
        active={'2' === tabActive}
        onClick={() => {
          setTabActive('2')
          localStorage.setItem('brandSeleted', '2')
        }}
      >
        {'2' === tabActive ? props.children[1] : null}
      </Tab>
    </Tabs>
  )
}

export default Multihome
