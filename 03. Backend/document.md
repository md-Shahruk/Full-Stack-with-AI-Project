# Backend Engineering
## Phase 0
### **Client:** A device/app/server that's want something to server is called Client.
- Browser
- Mobile app
- Desktop app
- Another server

### **Server:** A server is a computer/system where  runs application and handle others requests. 
#### The function of server can include:
- Accept request
- User authenticate
- Conduct business logic
- Retriving data from database
- Change data
- Create response

### **API:** An API is a type of interface/rule that allows one application to communicate with another.

### **Request:** When a client sends a message to the server for the data, that is a request. 
#### An HTTP request typically contains:
- Method
- URL
- Headers
- Body

### **Response:** After getting a request from the server, the data or message sent to the client is called a response.
#### Response:
- Status code
- Headers
- Body

### **URL:** (Uniform Resource Locator): It tells us where to go in the resource or server.
#### Like: https://example.com/users
- https://: Protocol
- example.com: Domain/Host
- /users: Path

### **HTTP:** HTTP is a protocol for communication between client and a server on the web.
#### HTTP specifies:
- How to send a request
- What will the response be like?
- What will the method be like?
- How will the status be known?
- How will the headers work?

#### Some important methods of HTTP:
- GET: Give me data
- POST: Insert a new data
- PUT: Update or replace this resource
- PATCH: Update a specific part from resource
- DELETE: Delete the data

### **HTTP Status Codes:** 
- 200-Ok: The request was succesful.
- 201-Created: The request was succesful and a new resource was created.
- 400-Bad Request: The client sent an invalid/bad request.
- 401-Unauthorized: First need to authenticate yourself.
- 403-Forbidden: (Pemission) Server knows who you are, but don't have permission to perform that action.
- 404-Not Found: The request resource could not be found. I can't find what your are asking.
- 500-Internal Server error: Something unexpected went wrong when the server was processing the request. 