'use client';

import { useState } from "react";
import Navigation from "@/components/navigation/navigation";
import { Session } from "next-auth";
import Employees from "../employees/employees";
import Receipt from "../receipt/receipt";
import Dashboard from "../dashboard/dashboard";
import { Employee } from "@/types/employee";
import { User } from "@prisma/client";

interface AuthPageProps{
    session: Session | null
    employees: Employee[]
    user: User
}

export default function AuthPage({session, employees, user}: AuthPageProps){
    const [value, setValue] = useState('one');

    function handleChange(event: React.SyntheticEvent, newValue: string){
        setValue(newValue);
    };

    function renderExibition(){
        if(value === 'two')
            return(<Employees employees={employees}/>)
        if(value === 'three')
            return(<Receipt user={user} employees={employees}/>)
        return(<Dashboard name={String(session?.user?.name)}/>)
    }

    return(
       <main className="h-screen w-full">
            <Navigation user={session?.user} value={value} handleChange={handleChange} />
            {renderExibition()}
       </main>
    )
}