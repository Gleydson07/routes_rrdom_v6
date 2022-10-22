export const replaceRouteParams = (route, params, options) => {
  let routeReplaced = route;
  params && params.length && params.forEach(({name, value}) => {
    routeReplaced = routeReplaced.replace(`:${name}`, value);
  });

  if (options) {
    routeReplaced += `?${options}`;
  }
  
  return routeReplaced;
}