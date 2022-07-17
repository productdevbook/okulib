import { merge } from 'lodash'
import { defaultOptions } from './options'
import { AuthFunc } from './auth'
import { AppContext, AuthOptions } from './types'
export type { AppContext, AuthOptions }

export { defaultOptions }

export function AuthClient(ctx: AppContext) {
  const options = merge(defaultOptions, ctx.options)
  if (options.baseURL)
    ctx.axios.defaults.baseURL = options.baseURL
  const authPlugin = AuthFunc(options, ctx.axios)
  return authPlugin
}
