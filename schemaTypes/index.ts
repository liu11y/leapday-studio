import { collection } from './collection'
import { siteSettings } from './siteSettings'
import { invitation } from './invitation' // 这行是新加的

export const schemaTypes = [collection, siteSettings, invitation] // 把 invitation 加进括号里