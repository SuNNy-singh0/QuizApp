import axios, { Axios } from "axios";

const base ="http://localhost:8080/QuizProject/quiz";
class empservice{
savecontent(content){
    return axios.post(base+"/register",content)
}
getallContent(){
    return axios.get(base+"/getall")
}
getallContentbyid(id){
return axios.get(base+"get"+"/"+id)
}
deleteContent(id){
    return axios.delete(base+"/delete/"+id)
}

}
export default new empservice();