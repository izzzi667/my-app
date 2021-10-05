import {createSelector} from "reselect";


//Селектор - это функиця, принимающая state и возвращающая только необходимыен данные
export const getCurrentUsersSelector = (state) =>
{
    return state.users.users;
}

export const getCurrentUsersWithReselector = createSelector ( getCurrentUsersSelector, (users) => 
{
    //Фильтрация - только для демонстрации CreateSelector будет вызвать селектор, проверять, изменились ли
    //значения и создавать новый объект только если данные изменились
    return users.filter();
})


export const getPageSize = (state) =>
{
    return state.users.pageSize;
}

export const getTotalUsersCount = (state) =>
{
    return state.users.totalUsersCount;
}

export const getCurrentPageNumber = (state) =>
{
    return state.users.currentPage;
}


export const getisFethcing = (state) =>
{
    return state.users.isFethcing;
}

export const getfollowingInProgress = (state) =>
{
    return state.users.followingInProgress;
}

