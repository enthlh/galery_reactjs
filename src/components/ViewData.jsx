import GetData from "../class/GetData"
const ViewData = () =>{
    let list_data  = GetData.data;
    return list_data.map((d,i)=>{
        return(
            <div className="wrapper" key={i}>
                <h1 className="Content-title">
                    {d.login}
                </h1>
                <img className="Content-image" src={d.avatar_url} alt="ryu" />
            </div>
        ) 
    })

}

export default ViewData