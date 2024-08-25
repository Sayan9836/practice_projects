import { Box, Pagination, Stack } from '@mui/material';
import React, { useState } from 'react'

const Index = () => {
  const [currPage, setCurrPage] = useState(1)
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97]

  const Tlength = arr.length;
  const DataPerPage = 5;
  const indexOfLastData = currPage * DataPerPage;
  const indexOfFirstData = indexOfLastData - DataPerPage;
  const currDatas = arr.slice(indexOfFirstData, indexOfLastData);

  const paginate = (event, value) => {
    console.log(value);
    setCurrPage(value);
  }
  return (
    <Box>
      {
        currDatas?.map((ele,index)=>{
          return <Box>
            {ele}
          </Box>
        })
      }
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(Tlength / DataPerPage)}
          color='standard'
          defaultPage={1}
          page={currPage}
          onChange={paginate}
          shape='rounded'
          size='large'
        />
      </Stack>
    </Box>
  )
}

export default Index
