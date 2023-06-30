import Modal from "@/components/modal";
import { getFull, getColleague } from "@/data/fetch";
type Colleague = {
    id:         string, //Name
    img:        string,
    content:    string
  }
  
  async function generateStaticParams(){

    const data:Colleague[] = await getFull();

    return data.map(({id}) => id)

  }
  
  export default async function CardModal( 
    { params } : 
    { params: {id:string} }) {

    const data:Colleague = await getColleague(params.id)

    console.log(data);

    return(
    <Modal>
        <p>Namn: {data.id}</p>
        <p>IMG: {data.img}</p>
        <p>CONTENT: {data.content}</p>
    </Modal>
    );
  }
