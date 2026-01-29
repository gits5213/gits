/**
 * Adapter utility to convert Next.js router to React Router compatible props
 * This allows existing React Router components to work with Next.js
 */

import { usePathname, useRouter } from 'next/navigation'

export function useNextRouterAdapter() {
  const pathname = usePathname()
  const router = useRouter()
  
  // Ensure pathname is always a string, default to '/' if null/undefined
  const safePathname = pathname || '/'
  
  return {
    location: {
      pathname: safePathname,
      search: '',
      hash: '',
      state: undefined
    },
    history: {
      push: (path) => {
        // Ensure path is a string, not an object
        let pathString = '/'
        if (typeof path === 'string') {
          pathString = path
        } else if (path && typeof path === 'object') {
          pathString = path.pathname || path.href || path.toString?.() || '/'
          // If toString() returns [object Object], default to '/'
          if (pathString === '[object Object]' || (typeof pathString === 'object' && pathString !== null)) {
            pathString = '/'
          }
        } else if (path !== null && path !== undefined) {
          pathString = String(path)
          if (pathString === '[object Object]' || pathString === 'null' || pathString === 'undefined') {
            pathString = '/'
          }
        }
        
        // Final safety check
        pathString = String(pathString || '/').trim()
        if (pathString === '[object Object]' || pathString.startsWith('[object')) {
          if (process.env.NODE_ENV === 'development') {
            console.warn('nextRouterAdapter: Invalid path detected in push(), defaulting to "/". Original:', path)
          }
          pathString = '/'
        }
        
        router.push(pathString)
      },
      replace: (path) => {
        // Ensure path is a string, not an object
        let pathString = '/'
        if (typeof path === 'string') {
          pathString = path
        } else if (path && typeof path === 'object') {
          pathString = path.pathname || path.href || path.toString?.() || '/'
          // If toString() returns [object Object], default to '/'
          if (pathString === '[object Object]' || (typeof pathString === 'object' && pathString !== null)) {
            pathString = '/'
          }
        } else if (path !== null && path !== undefined) {
          pathString = String(path)
          if (pathString === '[object Object]' || pathString === 'null' || pathString === 'undefined') {
            pathString = '/'
          }
        }
        
        // Final safety check
        pathString = String(pathString || '/').trim()
        if (pathString === '[object Object]' || pathString.startsWith('[object')) {
          if (process.env.NODE_ENV === 'development') {
            console.warn('nextRouterAdapter: Invalid path detected in replace(), defaulting to "/". Original:', path)
          }
          pathString = '/'
        }
        
        router.replace(pathString)
      },
      go: (n) => {
        if (n < 0) router.back()
        else if (n > 0) router.forward()
      },
      goBack: () => router.back(),
      goForward: () => router.forward(),
      length: 0,
      action: 'PUSH',
      location: {
        pathname: safePathname,
        search: '',
        hash: '',
        state: undefined
      }
    },
    match: {
      params: {},
      isExact: true,
      path: safePathname,
      url: safePathname
    }
  }
}

/**
 * HOC to wrap React Router components with Next.js router props
 */
export function withNextRouter(Component) {
  return function NextRouterWrapper(props) {
    const routerProps = useNextRouterAdapter()
    return <Component {...props} {...routerProps} />
  }
}
