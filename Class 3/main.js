
// Global Scope example

// Variable defined in the global scope
const appName = "InventoryManager";

function displayAppName() {
    // Accessing the global variable from within a function
    console.log("Current App: " + appName);
}

function updateAppName(newName) {
    // Global variables are accessible across different functions
    console.log("Updating " + appName + " to " + newName);
}

// Executing the code
displayAppName(); // Output: Current App: InventoryManager
updateAppName("StockMaster"); // Output: Updating InventoryManager to StockMaster




// Function Scope example

function sessionTracker() {
    // This variable is function-scoped
    var sessionID = "SECURE-9981";

    console.log("Inside function: " + sessionID); // Accessible here
}

sessionTracker();

// Attempting to access the variable outside the function
try {
    console.log("Outside function: " + sessionID);
} catch (error) {
    console.log("Result: ReferenceError: sessionID is not defined");
}


// Block Scope example

const userRole = "admin";

if (true) {
    // These variables are block-scoped to this 'if' statement
    let accessCode = 12345;
    const sessionToken = "ABC-XYZ";

    console.log("Inside block - Access Code:", accessCode);    // Output: 12345
    console.log("Inside block - Session Token:", sessionToken); // Output: ABC-XYZ
}

// Attempting to access them outside the block
try {
    console.log(accessCode);
} catch (e) {
    console.log("Result: ReferenceError: accessCode is not defined");
}

try {
    console.log(sessionToken);
} catch (e) {
    console.log("Result: ReferenceError: sessionToken is not defined");
}



// lexical Scope example

function parentFunction() {
    const parentName = "I am the Parent";

    function childFunction() {
        // The child can access 'parentName' because of Lexical Scope
        const childName = "I am the Child";
        console.log("Child accessing parent data:", parentName);
    }

    childFunction();

    // The parent CANNOT access 'childName'
    try {
        console.log(childName);
    } catch (e) {
        console.log("Parent tried to access child data: ReferenceError!");
    }
}

parentFunction();
