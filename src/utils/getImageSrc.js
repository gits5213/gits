/**
 * Utility to safely extract image source from Next.js imported images
 * Handles both string paths and object imports
 * In Next.js, imported images should be strings, but we handle edge cases
 */
export function getImageSrc(image) {
  if (!image) return ''
  
  // If it's already a string, return it (most common case)
  if (typeof image === 'string') {
    return image
  }
  
  // If it's an object, try to extract the src property
  if (typeof image === 'object' && image !== null) {
    // Next.js Image component format: { src: string, width: number, height: number }
    if (image.src && typeof image.src === 'string') {
      return image.src
    }
    // Webpack processed image: might be the default export
    if (image.default) {
      return getImageSrc(image.default)
    }
    // ES module default export
    if (image.__esModule && image.default) {
      return getImageSrc(image.default)
    }
  }
  
  // Try to convert to string (shouldn't happen with proper webpack config)
  const str = String(image)
  if (str !== '[object Object]' && str !== 'null' && str !== 'undefined') {
    return str
  }
  
  // Last resort: return empty string
  if (process.env.NODE_ENV === 'development') {
    console.warn('getImageSrc: Unable to extract image path from:', image)
  }
  return ''
}
