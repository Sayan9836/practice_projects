import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import UserList from './UserList';
import { FormControl, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import './filter.css'
const SortFilter = () => {
    const [data, setData] = useState([]);

    const arr = ["ID", "NAME", "EMAIL", "PHONE", "ADDRESS", "STATUS"];
    useEffect(() => {
        FetchData();
    }, [])

    const FetchData = async () => {
        const result = await axios.get('http://localhost:5000/users')
        setData(result.data);
        console.log(result.data);
    }

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>email</TableCell>
                            <TableCell>phone</TableCell>
                            <TableCell>address</TableCell>
                            <TableCell>status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data?.map((user) => {
                                return <TableRow key={TableRow.name}>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.address}</TableCell>
                                    <TableCell>{user.status}</TableCell>
                                </TableRow>
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="bottom-row">
                    <FormControl sx={{width : "max(20%,10rem)", margin:" 2rem 0 0 4rem"}}>
                        <Select>
                            {arr?.map((ele) => {
                                return <MenuItem>{ele}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
            </div>
        </div>
    )
}

export default SortFilter