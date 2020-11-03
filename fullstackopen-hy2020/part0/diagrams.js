// 0.4: new note

// Create a similar diagram depicting the situation where the user creates a new note on page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button.
// If necessary, show operations on the browser or on the server as comments on the diagram.
// The diagram does not have to be a sequence diagram. Any sensible way of presenting the events is fine.

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js
// user submits new note
browser->server: HTTP POST request to the server address new_note
server->browser: server responds with HTTP status code 302 (a redirect, server asks the browser to do a new HTTP GET request to the address defined in the headers Location - the address 'notes')
// new GET request
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

// 0.5: Single page app && 0.6: New note
// 0.5 Create a diagram depicting the situation where the user goes to the single page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa
// 0.6 Create a diagram depicting the situation where the user creates a new note using the single page version of the app.

// 0.5
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js
// 0.6 ^^ same process then user submits new note
browser->server: HTTP POST request to the server address new_note_spa
server->browser: server responds with HTTP status code 201 (created)
// ***** no further requests because new note was submitted using a form which had an eventhandler to sent + post to server in spa.js *****
// ***** server is able to correctly parse data because the header 'Content-type: application/json' lets the server know data is in JSON format *****
