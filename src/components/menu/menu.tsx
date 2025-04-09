"use client";

import { Button, Menu as MenuButton, MenuItem } from "@mui/material"
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react"

interface MenuProps{
    name: string | null | undefined
}

export default function Menu({name}: MenuProps){
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const router = useRouter();
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

   return(  
    <>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{ color: '#011126' }}
        >
            {name}
        </Button>
        <MenuButton
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem sx={{ color: '#011126' }} onClick={() => router.push('/profile')}>Profile</MenuItem>
            <MenuItem sx={{ color: '#011126' }} onClick={() => signOut()}>Logout</MenuItem>
        </MenuButton>
    </>
   )
}