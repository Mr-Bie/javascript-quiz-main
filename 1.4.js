let theObject = {};

const handler = {
    get: () => "404"
};

// create a proxy with a handler that return "404" unconditionally
theObject = new Proxy(theObject, handler);

console.log(theObject.a);
console.log(theObject.b);