import { useNavigate } from "react-router-dom"; 
const NotFound = ()=>{
    const navigate = useNavigate()
    return (
        <section>
            <h1>
                Not Found 404
            </h1>
            <button onClick={()=>navigate('/')}>Back to home</button>
        </section>
    )
}

export default NotFound;