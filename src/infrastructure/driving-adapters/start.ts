import 'module-alias/register'
import path from 'path'
import * as dotenv from 'dotenv'
import { TuttoDataFakerBackendApp } from './api/tuttodatafakernackendapp'
import { TuttoDataFakerGraphQL } from './graphql/tuttodatafakergraphql'

try {
  dotenv.config({
    path: path.resolve(__dirname, '../../../.env')
  })

  new TuttoDataFakerBackendApp().start()
  new TuttoDataFakerGraphQL().start()
} catch (error) {
  console.log(error)
}