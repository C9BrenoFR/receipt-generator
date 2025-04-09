'use client';

import { Box, Tab, Tabs } from "@mui/material"
import Menu from "../menu/menu";
import { AssignmentInd, Home, People } from "@mui/icons-material";

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
      <div className="hidden md:flex">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="one" label="Dashboard" />
          <Tab value="two" label="Meus Funcionarios" />
          <Tab value="three" label="Gerar Recibo" />
        </Tabs>
      </div>
      <div className="md:hidden">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="one" label={<Home/>} />
          <Tab value="two" label={<People/>} />
          <Tab value="three" label={<AssignmentInd/>} />
        </Tabs>
      </div>
      <div></div>
      <Menu name={user?.name}/>
    </Box>
   )
}