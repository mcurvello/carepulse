import * as sdk from 'node-appwrite'

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client()

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67046b2000136a867f1a')
  .setKey('standard_da886b2386ee7016404981059f0dda93ce065b9d2a9df6cd0570a2e8bcd71308df37dbfae2482ad69f1cf567d1320185ba0e58f6eba8a778d3a0b20cc64b3208f4aeffe258a7639205a2cf5bbfce303f2f10289fbc42138a657c29d2c070e5eff10c065d94f35a920424ab6d3ec22369209242b44c1fc56c0aae20b1a2112334')

export const databases = new sdk.Databases(client)
export const storage = new sdk.Storage(client)
export const messaging = new sdk.Messaging(client)
export const users = new sdk.Users(client)