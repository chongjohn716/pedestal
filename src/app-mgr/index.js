import { registerApplication, start } from 'single-spa'

const System = window.System

export function hashPrefix (prefix) {
  return function (location) {
    return location.pathname.startsWith(`/${prefix}`)
  }
}

// function loadResources () {
// }

function loadApp (app, el) {
  registerApplication(app.name, () => {
    return System.import(app.url).then(app => {
      debugger
      return app.default
    })
  }, hashPrefix(app.path), {
    domElement: el
  })
}

export function registerApplications (appList, el) {
  console.log('system', System)
  appList.map(app => {
    loadApp(app, el)
  })
  start()
}
