//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')

}

window.GOVUKPrototypeKit.documentReady(function () {
})

window.GOVUKPrototypeKit.documentReady(function () {
  window.MOJFrontend.initAll()
})
