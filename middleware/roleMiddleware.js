const roles = {
  SCRUM_MASTER: ['manageProjects', 'viewUsers', 'manageUsers'],
  PRODUCT_OWNER: ['manageBacklogs', 'viewUsers'],
  DEVELOPER: ['viewBacklogs', 'updateTasks']
};

function roleMiddleware(permission) {
  return (req, res, next) => {
    // Debugging: Log req.user to see if it's set
    console.log(req.user);  // Check if user data is present in the request

    if (!req.user) {
      return res.status(401).json({ msg: 'Unauthorized: No user found in request.' });
    }

    const userRole = req.user.role; // `req.user` should be populated by JWT middleware
    if (roles[userRole] && roles[userRole].includes(permission)) {
      return next(); // User has permission, proceed
    }
    return res.status(403).json({ msg: 'Access denied' }); // User lacks permission
  };
}

module.exports = { roleMiddleware};

