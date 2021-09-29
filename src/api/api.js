import axios from "axios";

const instancse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'8b3d1552-4acb-4080-86cf-9b508a379dd2'
    }
});



export const usersApi ={
    getUsersAPI (currentPage =1, pageSize=10) 
    {
        return instancse.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data            //Промис, возвращает только данные
        })          
    },
    //
    follow (userId) 
    {
        return instancse.post('follow/'+userId);
    },

    unFollow (userId) {
        return instancse.delete('follow/'+userId);
    }
}


export const profileApi ={
    getProfile (userId = 2)
    {
        return instancse.get(`profile/`+userId); 
    },
    getStatus (userId)
    {
        
        return instancse.get('profile/status/'+userId);
    },
    updateStatus (status)
    {
        return instancse.put('profile/status', {status:status});
    }
}

export const authApi = {
    getAuth ()
    {
        return instancse.get('auth/me');
    }
}


export default usersApi;
