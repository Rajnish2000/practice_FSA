let url = 'https://jsonplaceholder.typicode.com/comments';


async function getComments(){
    try{
        let comment = await axios.get(url);
        console.log(comment.data);
        let cmt =document.querySelector('.main');
        let i = 0;
        while(i<100){
            cmt.innerHTML +=`<div class="comments">
                                <h2>Post ID : ${comment.data[i].postId} </h2>
                                <h3>Post: <i>${comment.data[i].name}</i></h3>
                                <p class="comment-body">${comment.data[i].body}</p>
                                <a href="#">${comment.data[i].email}</a>
                            </div>`;
            i++;
        }

    }
    catch(error){
        console.error('Error:', error);
    }
}

getComments();