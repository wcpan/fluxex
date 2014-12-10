HISTORY
=======

0.1.8 https://github.com/zordius/fluxex/releases/tag/v0.1.8
   * [CORE] Now all stores receive magic action `**UPDATEALL**` then emit change.
   * [EXTRA] Now gulp `develop` task will watch/lint/restart by server script.
   * [EXTRA] New `.getUrl()` method in common store `page`.
   * [EXTRA] New method `routeToURL()` to deal with client side routing by `this.routing` action.
   * [EXTRA] New helper function `middlewareRouting()` to mount a routing fluxexapp.

0.1.7 https://github.com/zordius/fluxex/releases/tag/v0.1.7
   * [CORE] Now all action promise handler can access context by `this`.
   * [CORE] New `.restore()` method for `FluxexObject`, `FluxexStore` and `Fluxex`.
   * [EXTRA] New helper function `middleware` to mount fluxexapp + action as express middleware.
   * [EXTRA] New common store `page` to deal with url and routing information.
   * [EXTRA] Sorter watch delay time for gulp tasks. Add document about vim setting to prevent double change events.
   * [EXTRA] New mixin to provide common `getInitialState()` and `onStoreChange`()` implement.

0.1.6-2 https://github.com/zordius/fluxex/releases/tag/v0.1.6-2
   * [EXTRA] Better gulpfile for develop envionment.

0.1.6-1 https://github.com/zordius/fluxex/releases/tag/v0.1.6-1
   * [CORE] Add `.executeAction()` to react mixin .

0.1.6 https://github.com/zordius/fluxex/tree/7689ecf34286c76efb96feb65c5239c7f0acc46d
   * First version for beta test.
   * [CORE] Internal methods for react mixin now prefix with _ .
   * [Example] first sample project to demo fluxex.