console.log('JavaScript Homework');
console.log('CRUD operations');

const articleListHtml = document.querySelector(".article-list")

document.getElementById("get-data").addEventListener("click", getData)

function getData() {
    fetch("https://simple-json-server-scit.herokuapp.com/posts")
    .then(handleFetchResponse)
    .then(useJSONResponse);
}

function handleFetchResponse(response) {
    console.log("response", response);
    return response.json();
}

function useJSONResponse(json) {
    console.log(json);
    renderArticles(json)
}

function renderArticles(articleList) {
    articleListHtml.innerHTML = "";
    for (const articleData of articleList) {
        console.log(articleData);
        renderArticle(articleData);
        pullComments(articleData.id)

    }
}

function renderArticle(articleData) {
    const article = document.createElement("div");
    const articleTitle = document.createElement("h3");
    const articleContent = document.createElement("p");

    article.appendChild(articleTitle);
    article.appendChild(articleContent);

    articleListHtml.appendChild(article);

    articleTitle.innerText = articleData.title;
    articleContent.innerText = articleData.content;

    const commList = document.createElement("div");
    commList.classList.add("comments-list");

    article.appendChild(commList);
}

function pullComments(dataParameters) {
    fetch ('https://simple-json-server-scit.herokuapp.com/comments?postId=' + dataParameters)
    .then(fetchComments)
    .then(jsonComments);
}

function fetchComments(response) {
    console.log(response);
    return response.json();
}

function jsonComments (json) {
    console.log(json);
    showComments(json);
}

function showComments(commentList) {
    for (const commentsData of commentList) {
        renderComments(commentsData);
    }
}

function renderComments (commentsData) {
    const newElement = document.querySelectorAll(".comments-list");

    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.style.marginLeft = "25px";
    const commentUser = document.createElement("h3");
    commentUser.classList.add("user-comment");
    const commentText = document.createElement("p");
    commentText.classList.add("text-comment");

    newElement[commentsData.postId].appendChild(comment);
    comment.appendChild(commentUser);
    comment.appendChild(commentText);

    commentUser.innerText = commentsData.username;
    commentText.innerText = commentsData.content
}