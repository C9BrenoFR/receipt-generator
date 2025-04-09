'use client';

import { Button, TextField, Typography } from "@mui/material";
import { signIn } from "next-auth/react";


export default function Home() {

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      email : formData.get('email'),
      password: formData.get('password')
    }

    signIn("credentials",{
      ...data,
      callbackUrl: '/auth'
    });
  }

  return (
    <div className="h-screen w-full bg-background flex items-center justify-center">
      <form onSubmit={login} className="bg-cards w-fit h-fit p-4 shadow-XXL flex flex-col justify-center items-center gap-2 rounded-md">
        <Typography variant="h6" sx={{mb:4}}>Faça Login!</Typography>
        
        <TextField name="email" id="email" label="Digite seu email" variant="outlined" />
        <TextField name="password" id="password" label="Digite sua senha" variant="outlined" />
        
        <Button type="submit" variant="outlined">Login</Button>
      </form>
    </div>
  );
}
