export async function getOffice() {
    
    const res = await fetch('http://localhost:3001/brief', {cache:"no-store"});
    if (!res.ok) {
        throw new Error(res.url);
    }

    return res.json()
}

export async function getColleague(name:string) {
    
    const res = await fetch(`http://localhost:3001/full/${name}`, {cache:"no-store"});
    if (!res.ok) {
        throw new Error(res.url);
    }

    return res.json()
}

export async function getFull() {
    
    const res = await fetch(`http://localhost:3001/full`, {cache:"no-store"});
    if (!res.ok) {
        throw new Error(res.url);
    }

    return res.json()
}