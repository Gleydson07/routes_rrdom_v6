export const replaceRouteParams = (route, params) => {
  let routeReplaced = route;
  params && params.length && params.forEach(({name, value}) => {
    routeReplaced = routeReplaced.replace(`:${name}`, value);
  })
  
  return routeReplaced;
}