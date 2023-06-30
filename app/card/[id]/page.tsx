import { getOffice, getColleague } from "@/data/fetch";
type Colleague = {
    id:         string, //Name
    img:        string,
    content:    string
  }
  
  async function generateStaticParams(){
    const data = await getOffice();
    return Object.keys(data);
  }
  
  export default async function CardModal( 
    { params } : 
    { params: { id:string } }) {

    const data:Colleague = await getColleague(params.id)

    return(
      <>
        <h1>INTE INTERCEPT</h1>
        <hr/>
        <p>Namn: {data.id}</p>
        <p>img: {data.img}</p>
        <p>Content: {data.content}</p>
      </>
    )
  }