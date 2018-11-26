/*
© 2017-present Harald Rudell <harald.rudell@gmail.com> (http://www.haraldrudell.com)
This source code is licensed under the ISC-style license found in the LICENSE file in the root directory of this source tree.
*/
export { default as chmod } from './rollupChmodPlugin'
export { default as shebang } from './rollupShebangPlugin'
export { default as DirectoryResolver } from './rollupDirectoryResolverPlugin'

import DirectoryResolver from './rollupDirectoryResolverPlugin'
export function directoryResolver(...args) {
  return new DirectoryResolver(...args)
}
