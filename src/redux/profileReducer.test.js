import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";


let state={postsData: [
        {id:0, header:'Привет', text:'Текст поста 1-2-3', likeCounts:5},
        {id:1, header:'Привет 2', text:'Текст поста 1-2-3-4', likeCounts:3},
        {id:2, header:'Привет 3', text:'ААА Текст поста 1-2-3-4', likeCounts:3}
    ]
}

test('new post should be added', () => {
    //1. test data
    let action=addPostActionCreator("TEST TEXT");

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    
    expect(newState.postsData.length).toBe(4);

});


test('new post should be corrected', () => {
    //1. test data
    let action=addPostActionCreator("TEST TEXT");

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    
    expect(newState.postsData[3].text).toBe("TEST TEXT");

});


test('after delelted length should be decrised', () => {
    //1. test data
    let action=deletePost(1);

    

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    
    expect(newState.postsData.length).toBe(2);

});

test('after delelted length should not be changed if ID incorrect', () => {
    //1. test data
    let action=deletePost(1000);

    

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    
    expect(newState.postsData.length).toBe(3);

});