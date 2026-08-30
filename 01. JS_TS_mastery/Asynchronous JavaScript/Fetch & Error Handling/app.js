async function githubUserFinder(){
    try {
        const res = await fetch('https://api.github.com/users/md-Shahruk');
        
        if (!res.ok){
            
            const statusMessages = {
                404: 'User not found',
                403: 'Rate limit exceeded.',
                500: 'GitHub server error.'
            };
            
            const message = statusMessages[res.status] || `Error ${res.status}: Something went wrong`;
            throw new Error(message);
        }
        
        const data = await res.json();
        console.log(`Name: ${data.name}`);
        console.log(`Followers: ${data.followers}`);
        console.log(`Public repos: ${data.public_repos}`);
        console.log(`Location: ${data.location}`);
        
    } catch(error) {
        console.log('Error:', error.message);
    }
}

githubUserFinder();