import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getURL } from '../utils/index';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AddMoneyToWallet from "../Payment/AddMoneyToWallet"

const theme = createTheme();

export default function Home() {


   
  return (
    <>
     <div class="mui-container">
        <table>
            <tr class="mui--appbar-height">
            <td class="mui--text-title">Brand.io</td>
            <td class="mui--text-right">
                <ul class="mui-list--inline mui--text-body2">
                <li><a href="#">About</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Login</a></li>
                </ul>
            </td>
            </tr>
        </table>
    </div>
    </>

  )
}
