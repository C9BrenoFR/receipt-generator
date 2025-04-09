'use client';

import { Box, Tab, Tabs } from "@mui/material"
import Menu from "../menu/menu";

interface NavigationProps{
    user?: {
        name?: string | null
        email?: string | null
        image?: string | null
    }
    value: string
    handleChange : (event: React.SyntheticEvent, newValue: string) => void
}

export default function Navigation({user, value, handleChange}: NavigationProps){
   return(
    <Box sx={{ width: '100%',  paddingX: 2, display:'flex', justifyContent:"space-between"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab value="one" label="Dashboard" />
        <Tab value="two" label="Meus Funcionarios" />
        <Tab value="three" label="Gerar Recibo" />
      </Tabs>
      <div></div>
      <Menu name={user?.name}/>
    </Box>
   )
}