/**
 * Polyfill for react-router-dom's withRouter HOC
 * This allows React Router components to work with Next.js by making withRouter a pass-through
 * Components wrapped with withRouter will receive router props from Next.js page wrappers
 */

import React from 'react'

// Mock withRouter - returns component wrapped to accept router props
export function withRouter(Component) {
  return function WithRouterComponent(props) {
    // If router props are provided (from Next.js wrapper), use them
    // Otherwise, component will need to be wrapped at page level
    return <Component {...props} />
  }
}

// Mock Link - redirect to Next.js Link usage
// Suppress warnings in production, only show in development
export const Link = ({ to, children, ...props }) => {
  // Handle case where 'to' might be an object (location object)
  let href = to
  
  // More robust handling of different input types
  if (href === null || href === undefined) {
    href = '/'
  } else if (typeof href === 'object') {
    // Log detailed information about the object
    if (process.env.NODE_ENV === 'development') {
      console.error('React Router Link received object instead of string:', {
        object: href,
        keys: Object.keys(href || {}),
        pathname: href.pathname,
        href: href.href,
        stringified: String(href),
        stack: new Error().stack
      })
    }
    // If it's a location object, extract pathname
    href = href.pathname || href.href || href.toString?.() || '/'
    // If toString() still returns [object Object], default to '/'
    if (href === '[object Object]' || (typeof href === 'object' && href !== null)) {
      href = '/'
    }
  } else if (typeof href !== 'string') {
    // Fallback for any other non-string type
    const originalHref = href
    href = String(href)
    if (href === '[object Object]' || href === 'null' || href === 'undefined') {
      if (process.env.NODE_ENV === 'development') {
        console.error('React Router Link received invalid value:', {
          original: originalHref,
          type: typeof originalHref,
          stringified: href,
          stack: new Error().stack
        })
      }
      href = '/' // Default to home if object stringified incorrectly
    }
  }
  
  // Ensure href is always a string and valid
  href = String(href || '/').trim()
  
  // Additional safety check - if it still looks like an object stringification, default to '/'
  if (href === '[object Object]' || href.startsWith('[object')) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('React Router Link: Invalid href detected, defaulting to "/". Original value:', to)
    }
    href = '/'
  }
  
  // Ensure href starts with '/' for relative paths
  if (href && !href.startsWith('/') && !href.startsWith('http') && !href.startsWith('#')) {
    href = '/' + href
  }
  
  if (process.env.NODE_ENV === 'development') {
    // Only log once per unique route to reduce console spam
    if (!Link._warnedRoutes) Link._warnedRoutes = new Set()
    if (!Link._warnedRoutes.has(href)) {
      Link._warnedRoutes.add(href)
      // Uncomment if you want to see these warnings:
      // console.warn(`React Router Link detected for route: ${href}. Using anchor tag fallback.`)
    }
  }
  
  // Prevent navigation if href is still invalid
  const handleClick = (e) => {
    if (href === '[object Object]' || !href || href === '/[object Object]') {
      e.preventDefault()
      if (process.env.NODE_ENV === 'development') {
        console.error('React Router Link: Prevented navigation to invalid href:', href, 'Original to:', to)
      }
      return false
    }
    // Call original onClick if provided
    if (props.onClick) {
      props.onClick(e)
    }
  }
  
  // Return a simple anchor tag as fallback
  return <a href={href} {...props} onClick={handleClick}>{children}</a>
}

// Mock other React Router exports
export const Route = () => null
export const Switch = ({ children }) => <>{children}</>
export const BrowserRouter = ({ children }) => <>{children}</>
export const Router = ({ children }) => <>{children}</>
export const useHistory = () => ({ push: () => {}, replace: () => {}, goBack: () => {} })
export const useLocation = () => ({ pathname: '', search: '', hash: '' })
export const useParams = () => ({})
export const useRouteMatch = () => ({ path: '', url: '', params: {}, isExact: true })
