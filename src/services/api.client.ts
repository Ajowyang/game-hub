import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "0efec530d36543bd9b134a16e7b8949b"
    }
})

