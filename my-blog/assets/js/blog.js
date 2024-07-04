document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogPostsContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        const authorElement = document.createElement('small');
        authorElement.textContent = `Posted by ${post.username}`;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(authorElement);

        blogPostsContainer.appendChild(postElement);
    });
});

document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});
