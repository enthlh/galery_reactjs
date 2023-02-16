import axios from "axios"
class GetData {
 constructor(){
    axios.get('https://api.github.com/users').then((res)=>{
    this.data=res.data;
 }).catch((err)=>{
    return err
 })
 }
}

export default new GetData