A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

 ## Object
 collection of properties and methods
.toLowercase

## parts of Opp

- object literal

-construction function
-prototypes
-classes
-instances(new,this)


 ## 4 pillars
 abstraction
 Encapsulation
 plymorphism


 ## behind the scenes when the new keyword is used:
 a new object is linked:the newly created object gets linked to the it has access to properties and methodd defined on the constror's prototype


 the constructor is called:the constructor is called with the specified arguments and this is bound to the newly created object.