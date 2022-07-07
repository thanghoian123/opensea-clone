import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'z6rx1qey',
  dataset: 'production',
  apiVersion: '2021-07-07', // use current UTC date - see "specifying API version"!
  token: 'sktcd6DIBUVcoTCF1lj5fNCCSZgP94xDOtgLN6S8iIoCGB4XzlcA3unAVVmSFxXPiTY6Ly3mSBRmiB9QaFejhhAhju6WE17wCS8zVDEManr9kqbheeYJ5QzxTiyYYs8G5YOxHb0KqHpQH2DBiEYswJVTHSCkCWta1dslkFxWLYDPo8NX8AlN', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})