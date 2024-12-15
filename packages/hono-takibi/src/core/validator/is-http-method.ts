import { HttpMethod } from '../../types'

/**
 * Type guard function to check if a string is a valid HTTP method
 *
 * @function
 * @param method - The string to check against valid HTTP methods
 * @returns True if the string is a valid HTTP method, with type narrowing to HttpMethod
 */
export function isHttpMethod(method: string): method is HttpMethod {
  return (
    method === 'get' ||
    method === 'post' ||
    method === 'put' ||
    method === 'delete' ||
    method === 'patch' ||
    method === 'options' ||
    method === 'head'
  )
}