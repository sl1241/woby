
/* IMPORT */

import { for as _for } from '../oby'
import type { Child, FunctionMaybe, ObservableReadonly } from '../types'

/* MAIN */

const For = <T>({ values, fallback, children }: { values: FunctionMaybe<readonly T[]>, fallback?: Child, children: ((value: T, index: ObservableReadonly<number>) => Child) }): ObservableReadonly<Child> => {

    return _for(values, children, fallback)

}

/* EXPORT */

export default For
