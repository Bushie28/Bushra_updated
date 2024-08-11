document.addEventListener('DOMContentLoaded', function() {
		console.log('Scripts loaded');
    const blogList = document.getElementById('blog-list');
    
    fetch('data/posts.json')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post'); 
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <small>${post.date}</small>
            `;
            blogList.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error loading blog posts:', error));
});
