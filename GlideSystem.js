//gs
// This API provides different methods to get information about the system, the current Logged in user, etc. 
/*
addInfoMessage() endOfLastMonth()
addErrorMessage() endOfLastWeek()
getUser() endOfLastYear()
getUserName() endOfNextMonth()
getUserID() endOfNextWeek()
getUserDisplayName() endOfNexYear()
hasRole() endOfThisYear()
error() endOfThisQuarter()
eventQueue() endOfThisMonth
eventQueueScheduled() hoursAgo()
getErrorMessage() hoursAgoStart()
getSession() minutesAgoEnd()
getSessionID() minutesAgoStart()
setRedirect() monthsAgo()
Info() monthsAgoStart()
isDebugging() nil()
isInteractive() yearsAgo() 
isLoggedIn() yesterday()
getAvatar() Warn()
setProperty() tableExists()
*/


gs.addInfoMessage();
gs.addErrorMessage();

//Returns a reference to the user object for the current user.
gs.getUser();
gs.getUserDisplayName();  //System Administrator
gs.getUserID(); //sys id
gs.getUserName();
gs.getUserNameByUserID('admin'); //system administrator
gs.hasRole();
gs.hasRoleInGroup('admin', group); // true or false
 
//It checks if the script is running because a user is doing something on the screen (like clicking a button or saving a form), or if it’s running in the background (like a scheduled job or integration).
gs.isInteractive();

//Displays the file path to the current user's avatar.
gs.getUser().getAvatar();

//clear all session messages saved using addErrorMessage() or addInfoMessage ().
/*Session messages are shown at the top of the form. In client side scripts,
use g_form.clearMessages () to remove session messages.*/
gs.flushMessages();

gs.beginningOfLastMonth();
gs.beginningOfLastWeek();
