import {createTheme} from '@mui/material'

export const LightTheme = createTheme({

    palette: {
         primary: {
             main:'#1B3595' ,
             dark:'#1D2D67' ,
             light:'#c7e0f4',
             contrastText:'#ffffff' ,
         },
         secondary: {
            main:'#0078d4' ,
            dark:'#2b88d8' ,
            light:'#deecf9',
            contrastText:'#ffffff' ,
        },
        background:{
            default: '#f7f6f3',
            paper: '#ffffff'
        }
    }
})