export const environment = {
  production: true,
  apiUrl: 'https://swift-finance.herokuapp.com',
  tokenAllowedDomains: [ /swift-finance.herokuapp.com/ ],
  tokenDisallowedRoutes: [/\/oauth\/token/],
};