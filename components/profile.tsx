import Link from "next/link";
import {getOffice} from "@/data/fetch";

//Hämtar ett kontor, för tillfället 'dummydata'
interface Colleague {
    name:   string,
    img:    string,     //path
    //data:   string    //endpoint
}

type Office = {
    [key: string]: Colleague;
};

//Komponent för varje person, rendera en massa av dessa i 'Explorer'
const Card = ({ name, img }:Colleague) => {
    return(
        <div className="flex flex-col gap-y-0.5 items-center">
        <img className="w-9/12" src={img}/>
        <p className="bg-gray-200 w-9/12 text-black text-center">{name}</p>
        </div>
    )
};

//En utforskare för kontoret.
export default async function Explorer (){
    const data:Office = await getOffice();
    if(data){
        // Key är namn yo!

        let cards:JSX.Element[] = [];
        for (const [key, value] of Object.entries(data)){
            cards.push(
                <>
                <Card name={key} img={value.img}  />
                <Link key={key} href={`/card/${key}`}>{"KEY: " + key}</Link>
                </>
            )
        }
        return <>{cards}</>;
    }
}