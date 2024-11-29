const roles = {
  SCRUM_MASTER: [
    'manageProjects', 'viewProjects',
    'manageBacklogs', 'viewBacklogs',
    'manageReleaseBacklogs', 'viewReleaseBacklogs',
    'manageSprintBacklogs', 'viewSprintBacklogs',
    'manageCards', 'viewCards',
    'manageUsers', 'viewUsers',
    'manageColumns', 'viewColumns',
    'manageTeams', 'viewTeams',
  ],
  PRODUCT_OWNER: [
    'manageProductBacklog', 'viewProductBacklog',
    'manageReleaseBacklogs', 'viewReleaseBacklogs',
    'manageSprintBacklogs', 'viewSprintBacklogs',
    'manageCards', 'viewCards',
    'viewColumns',
  ],
  DEVELOPER: [
    'viewBacklogs', 'viewReleaseBacklogs', 'viewSprintBacklogs', 'viewCards', 'updateCards', 'viewColumns',
  ],
};

function checkRole(...requiredRoles) {
  return (req, res, next) => {
    const userRole = req.user.role; // Asegúrate de que el role del usuario esté en `req.user.role`

    // Verifica si el rol del usuario está en los roles requeridos
    const hasPermission = requiredRoles.some(role => roles[userRole].includes(role));

    if (!hasPermission) {
      return res.status(403).json({ message: 'No tienes permiso para realizar esta acción' });
    }

    next(); // El usuario tiene permiso, continuar con la ejecución de la ruta
  };
}

module.exports = { checkRole };


function roleMiddleware(...allowedRoles) {
  return (req, res, next) => {
    // Debugging: Log req.user to see if it's set
    console.log(req.user);  // Asegúrate de que el `req.user` esté poblado por un middleware previo (como JWT)

    if (!req.user) {
      return res.status(401).json({ msg: 'Unauthorized: No user found in request.' });
    }

    const userRole = req.user.role; // El rol del usuario se debería encontrar en `req.user.role`
    if (allowedRoles.includes(userRole)) {
      return next(); // El usuario tiene un rol permitido, continúa con la siguiente acción
    }

    return res.status(403).json({ msg: 'Access denied' }); // Si el usuario no tiene el rol adecuado, accede denegado
  };
}

module.exports = { roleMiddleware };
