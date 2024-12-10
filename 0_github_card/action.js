document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const container = document.querySelector('.container');
    const photoDiv = document.querySelector('.photo');
    const bioDiv = document.querySelector('.bio');

    // Event Listener for the "Yes!" Button
    yesButton.addEventListener('click', () => {
        const requestURL = 'https://api.github.com/users/Techincalsehrni';
        const xhr = new XMLHttpRequest(); // is a built-in JavaScript object that allows you to make HTTP requests to interact with servers. It is used to fetch data from APIs or servers without refreshing the web page, enabling asynchronous communication between the browser and the server.

        xhr.open('GET', requestURL);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) 
                // When status === 200, it indicates that the request was successful, meaning the server processed it and returned the requested data.
                {
                    const data = JSON.parse(this.responseText);

                    // Populate the .photo div
                    photoDiv.innerHTML = `<img src="${data.avatar_url}" alt="Profile Photo" style="width: 150px; height: 150px; border-radius: 50%; border: 2px solid white;">`;

                    // Populate the .bio div
                    bioDiv.innerHTML = `
                        <p style="color: white; font-size: 1.25rem; margin: 10px 0;">Bio: ${data.bio || "No bio available"}</p>
                        <p style="color: white; font-size: 1.25rem;">Followers: ${data.followers}</p>
                    `;
                } else {
                    bioDiv.innerHTML = `<p style="color: red; font-size: 1.25rem;">Failed to fetch data! Status: ${xhr.status}</p>`;
                }
            }
        };

        xhr.send();
    });

    // Event Listener for the "No!" Button
    noButton.addEventListener('click', () => {
        container.style.display = 'none';
    });
});
