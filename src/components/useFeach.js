import {useState, useEffect} from "react"
import axios from "axios"

const useFeach = (url)=>{
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
    axios.get(url)
    .then(res => {
        // console.log(res.data);
        setData(res.data);
        setLoading(false);
    })
    .catch(err =>{
        console.log(err)
        setLoading(true)
    })
    }, []);

    return{data, loading}

}
export default useFeach;