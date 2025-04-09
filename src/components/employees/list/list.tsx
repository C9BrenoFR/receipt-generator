import * as React from 'react';
import { List as MuiList } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { Employee } from '@/types/employee';


interface ListProps {
    employees : Employee[]
}

export default function List({employees} : ListProps) {
  return (
    <MuiList sx={{ width: '100%', maxWidth: 360, bgcolor: '#f9f9f9' }}>
      {employees.map(employee => (
        <ListItem key={employee.id}>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={employee.name} secondary={"R$" + employee.salary.toLocaleString()} />
        </ListItem>
      ))}
    </MuiList>
  );
}