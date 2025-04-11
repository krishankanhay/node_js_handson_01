// import http module
const http = require('http')
const JSON_DATA = require('./json')

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write("<title>Node_js_hands_01</title> <h1>What is Node JS</h1> <p>Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.</p> <p> Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side, providing a powerful and efficient way to build scalable network applications. Node.js is event-driven and non-blocking, making it well-suited for handling concurrent connections and building real-time applications.</p>")
        response.write("<h2>Need for Node.js:</h2> <ol> <li>Single Language: With Node.js, you can use JavaScript for both server-side and client-side development, providing consistency across your entire application.</li> <li>Asynchronous and Event-Driven: Node.js is designed to handle asynchronous operations efficiently, making it suitable for building scalable and performant applications.</li> <li> Community and Modules: Node.js has a large and active community, and it provides a vast ecosystem of modules through npm (Node Package Manager), making it easy to add functionality to your applications. </li> </ol>")
        response.end();
    }
    else if (request.url === "/user") {
        const JSON_STORE = JSON.stringify(JSON_DATA);
        response.write(JSON_STORE)
        response.end();
    }
    else {
        response.write("<h1>404 error</h1>")
        response.end();
    }
})

server.listen(5080, () => {
    console.log("server started...");
})




