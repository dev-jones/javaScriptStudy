function documentTitle(theTitle) {

    if(!theTitle) theTitle = "United Document";
}

function documentTitle(theTitle) {

    theTitle = theTitle || "United Document";
}

documentTitle("title"); // theTitle = "title"
documentTitle()         // theTitle = "United Document"


function a() {

    return "11";
}

function documentTitle(theTitle) {

    theTitle = theTitle || a();

    console.log(theTitle);
}

documentTitle();    // theTitle = "11"


function isAdult(age) {

    if(age && age > 17) {

        return true;
    }else {

        return false;
    }
}

function isAdult(age) {

    return age && age > 17;
}

isAdult(16)     // false
isAdult(18)     // true
isAdult()       // false

function logIn(name) {
    console.log('login');
}

function signUp() {
    console.log('signUp');
}

function enter(userName) {
    if(userName) {
        logIn(userName);
    }else {
        signUp();
    }
}

enter('lee');   // console.log('login');

function enter(userName) {
    userName && logIn(userName) || signUp();
}

function check(userName) {

    var userId;

    if(userName && userName.loggedIn) {
        
        userId = userName.id;
    }else {

        userId = null;
    }

    console.log(userId);
}

check({
    'loggedIn' : true,
    'id' : 'lee'
});     // lee

function check(userName) {

    var userId = userName && userName.loggedIn && userName.id;
}