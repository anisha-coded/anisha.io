/**
 * Convert clsx-style values into a space-separated class string.
 * @param {...(string | number | false | null | undefined | Array<unknown> | Record<string, unknown>)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  const classes = []

  const add = (input) => {
    if (!input) return

    if (typeof input === "string" || typeof input === "number") {
      classes.push(String(input))
    } else if (Array.isArray(input)) {
      input.forEach(add)
    } else if (typeof input === "object") {
      Object.entries(input).forEach(([name, enabled]) => {
        if (enabled) classes.push(name)
      })
    }
  }

  inputs.forEach(add)

  // Remove duplicate class tokens while retaining their original order.
  return [...new Set(classes.join(" ").split(/\s+/).filter(Boolean))].join(" ")
} 


export const isIframe = window.self !== window.top;
