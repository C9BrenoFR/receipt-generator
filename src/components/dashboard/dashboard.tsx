interface DashboardProps{
    name: string
}

export default function Dashboard({name} : DashboardProps){
    return(
        <div className="h-5/6 w-full flex items-center justify-center">
            <div className="bg-cards w-[60%] h-[80%] shadow-XXL rounded-lg flex justify-center p-4">
                <h2>Bem vindo(a) de volta, {name}</h2>
            </div>
        </div>
    )
 }