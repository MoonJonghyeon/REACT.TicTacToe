import React from 'react'
import Tr from './tr'

const Table = ({tableData, dispatch}) => {
  return (
    <table>
      <tbody>
      {Array(tableData.length).fill().map((tr, i) => (<Tr key={i} dispatch={dispatch} rowData={tableData[i]} rowIndex={i} />))}
      </tbody>
    </table>      
  )
}
  
export default Table;