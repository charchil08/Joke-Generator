const jokes = document.getElementById('jokes');
const jokeBtn = document.getElementById('joke-btn');

// https://icanhazdadjoke.com/

//Using fetch API
// const jokeGenerator = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     };

//     fetch('https://icanhazdadjoke.com', setHeader)
//         .then((res) => res.json()
//             .then((data) => {
//                 jokes.innerHTML = data.joke;
//             })
//         ).catch((err) => console.log(err));
// }

//Async await -
// you can use function keyord like this - 
    // async function jokeGenerator()
const jokeGenerator = async () => {
    try {

        const setHeader = {
            headers: {
                Accept:"application/json"
            }
        }

        const res = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;

    } catch(err) {
        console.log(`Error - ${err}`);
    }
}

jokeBtn.addEventListener('click', jokeGenerator);
jokeGenerator();