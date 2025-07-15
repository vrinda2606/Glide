/*
g_user
Glide user typically running from client side (browser)
Glide User API and methods are useful to get current logged in user details and their roles.
(used in client scripts and UI policies but is also found in UI actions that run on the client)
We cannot use in Business Rules or UI Actions that run on the server.
*/


// client side methods
g_user.firstName //system
g_user.lastName //administrator
g_user.fullName //system administrator //g_user.getFullName
g_user.userName //admin


g_user.userID //sys id // client side method
g_user.getUserID() or gs.getUserID() //sys id // server side method

g_user.hasRoleExactly('admin') //true
g_user.hasRoleExactly('VS') //false

g_user.hasRole
/*
ƒ (role, includeDefaults) {
       if (this.hasRoleExactly('maint', includeDefaults))
           return true;
       if (this.hasRoleExactly(role, includeDefaults))
           return true;
       if (r…
*/

g_user.hasRoles
// Returns true if the user has any role, regardless of which specific role it is.
/*
ƒ (includeDefaults) {
    	if (includeDefaults)
    		return (this.allRoles.length > 0);
    	else
    		return (this.roles.length > 0);
    }
*/



//Server or Scoped Methods
var g = gs.getUser(); 
//to access the user info by storing it in a variable

gs.print(g.getFirstName());
g.getLastName();
g.getFullName();
g.getName(); //username of the user --> admin (e.g.)
g.getDisplayName();
g.getUserRoles();

g.getEmail();
g.getID(); //sys id of currently logged in user
g.getAllRoles(); //array of all roles