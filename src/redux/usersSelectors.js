
//Селектор - это функиця, принимающая state и возвращающая только необходимыен данные
export const getCurrentUsers = (state) =>
{
    return state.users.users;
}


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

