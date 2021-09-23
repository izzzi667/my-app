import axios from "axios";

const instancse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'8b3d1552-4acb-4080-86cf-9b508a379dd2'
    }
});


export const getUsers =(currentPage =1, pageSize=10) =>
{
    return instancse.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
        return response.data            //Промис, возвращает только данные
    })          
}


export const follow = (userId) =>
{
    return instancse.post('follow/'+userId);
}

export const unFollow = (userId) =>{
    return instancse.delete('follow/'+userId);
}


export default getUsers;
