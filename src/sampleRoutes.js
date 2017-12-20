// function createRoute(name, rating, location) {
//   return { name, rating, location }
// }
//
// class Route {
//   constructor(name, rating, location) {
//     this.name = name
//     this.rating = rating
//     this.location = location
//   }
// }

const sampleRoutes = {
  // route1: new Route('Valhalla', 'V7', 'Flag Staff'),
  // route1: new Route('Valhalla', 'V7', 'Flag Staff'),
  // route1: new Route('Valhalla', 'V7', 'Flag Staff'),
  // route1: new Route('Valhalla', 'V7', 'Flag Staff'),
  // route1: new Route('Valhalla', 'V7', 'Flag Staff'),
  route1: {
    name: 'Valhalla',
    rating: 'V7',
    location: 'Flag Staff'
  },
  route2: {
    name: 'Tommys Arete',
    rating: 'V7',
    location: 'RMNP',
    lat: 2123,
    long: 43243
  },
  route3: {
    name: 'Standard Bulge',
    rating: 'V5',
    location: 'Boulder Canyon'
  },
  route4: {
    name: 'Trice',
    rating: 'V12',
    location: 'Flag Staff'
  },
  route5: {
    name: 'The Kind',
    rating: 'V5',
    location: 'Emerald Lake'
  },
  route6: {
    name: 'Tiger Stripes',
    rating: 'V5',
    location: 'Emerald Lake'
  }
}

export default sampleRoutes;
