# How to extend this app

This app is designed to be easily extensible. It is based on the Router-Middleware-Controller-Service pattern.

## Request flow
```mermaid
graph LR
A[Request] --> B[Express Listener] --> C[Router] --> D[Middlewares] --> E[Controller] --> F[Service] --> G[Response]
```
The request is received by the Express listener. Then the adequate router is called. It defines the middlewares and controller that will handle this type of request. The middlewares are usually in charge of verifying inputs and authorizations .The controller calls the service(s) it needs to and send the response.

## Adding a new endpoint
To add a new endpoint, you need to create a controller and create/update a service and a router.

The new controller will call the service that you will create/update and send the formatted response.

### Creating/updating a router
You need to create a router if the path is not already defined by an existing router. You need to update the router if the path is already defined and you want to add a new method to it.  
If you create a new router, you need to add it to the `app.ts` file below the existing `app.use(*path*, *router*)`.

Template : 
```typescript
import { Router } from 'express';

const router = Router();

// Add a get method
router.get(*youChoosenPath*, 
    [
        // Add middlewares here
        // And finally the controller
    ]
)

export default router;
```

### Creating/updating a service
You can either add a new method to a similar existing service or decide to create a new one.

Template : 
```typescript
export default class *ServiceName* {
    public *methodName*(*parameters*) : *returnType* {
        // Do stuff here
    }
}
```

### Creating a controller
You will need to create a controller to handle the new type of request you want to support. The new controller will be referenced in the router you want to use.

Template : 
```typescript
import { Request, Response } from 'express';
import *ServiceName* from '../services/*ServiceName*';

export default (req: Request, res: Response) => {
    // Get the parameters from the request
    const *parameterName* = req.params.*parameterName*;

    // Call the service
    const *variableName* = *ServiceName*.methodName(*parameterName*);

    // Send the response
    res.status(200).json({
        *variableName*,
    });
}
```
