# React NavTabs


[![npm package][npm-badge]][npm]
[![gzip-size][gzip-size-badge]][gzip-size]
[![install-size][install-size-badge]][install-size]
[![build][build-badge]][build]
[![coverage][coveralls-badge]][coveralls]
[![license][license-badge]][license]
[![donate][donate-badge]][donate]


[React-Nav-Tabs](https://www.npmjs.com/package/@allpro/react-nav-tabs) 
is a helper that integrates **Material UI Tabs** with **React Router 4/5**. 
The tabs then function as navigation, and sync with the URL.
Hyperlinks, Back/Forward buttons, and all other navigation work as expected.

**Motivation**

I usually want each 'tab' in a set of tabs to have a unique URL.
This makes Back/Forward function as users expect, 
and makes it possible to 'link' directly to a specific tab.

Integrating Tabs with React Router requires making each 'tab' a `<Link>` 
component, with a corresponding `<Route>` component for each tab.
This requires a lot of boilerplate and is error-prone.
NavTabs makes it fast & easy to create navigation-tabs.

## Live Example

Try the demo at: https://allpro.github.io/react-nav-tabs

Play with the demo code at:
https://codesandbox.io/s/github/allpro/react-nav-tabs/tree/master/example

If you pull or fork the repo, you can run the demo like this:
- In the root folder, run `npm start`
- In a second terminal, in the `/example` folder, run `npm start`
- The demo will start at http://localhost:3000
- Changes to the component _or_ the demo will auto-update the browser


## Installation

-   NPM: `npm install @allpro/react-nav-tabs`
-   Yarn: `yarn add @allpro/react-nav-tabs`
-   CDN: Exposed global is `ReactNavTabs`
    -   Unpkg: `<script src="https://unpkg.com/@allpro/react-nav-tabs/umd/react-nav-tabs.min.js"></script>`
    -   JSDelivr: `<script src="https://cdn.jsdelivr.net/npm/@allpro/react-nav-tabs/umd/react-nav-tabs.min.js"></script>`

## Compatibility

NavTabs uses the new React Context API, so requires React 16.3.
It uses the `withRouter()` HOC provided by React-Router 4+.

#### Peer-Dependencies

RRP will work in any project meeting these dependencies.
```json
"peerDependencies": {
    "prop-types": ">=15",
    "react": ">=16.3",
    "react-dom": ">=16.3",
    "react-router-dom": ">=4"
}
```


## Usage

NavTabs integrates the Material UI `<Tabs>` and `<Tab>` components with 
React Router `<Route>` components.
NavTabs consists of 3 separate components:

- **`<NavTabs>` Wrapper** &nbsp; (default export)
  <br>Tab configuration is set on this component.
    It does not output any mark-up.
  <br>See [NavTabs Component Props](#navtabs-component-props)

- **`<Tabs>` Subcomponent** &nbsp; (named export)
  <br>Outputs the Material UI `<Tabs>` component.
  <br>See [Tabs Subomponent Props](#tab-subcomponent-props)

- **`<Content>` Subcomponent** &nbsp; (named export)
  <br>Outputs the React Router `<Route>` components (one per tab).
  <br>See [Content Subomponent Props](#content-subcomponent-props)

The `<Tabs>` and `<Content>` are **subcomponents** so they can fit any layout.

NavTabs can also be _nested_ (tabs within tabs).

If you have existing Tabs in your app, it's simple to convert them to NavTabs,
with no change to their appearance.

### NavTabs Component Props

Usually you only need to set the `tabs` prop.
The other props are needed only for edge-cases.

- **`tabs`** &nbsp; {array} `[null]` &nbsp; _required_
  <br>This is the configuration of all the tabs.
  <br>(If `tabs` is not set, a sample set of tabs will be displayed)
  <br>See **[`tabs` Configuration](#tabs-configuration)** below.

- **`defaultTab`** &nbsp; {integer/false} `[0]` &nbsp; _optional_
  <br>Specify which tab should display by default.
  <br>Set to `false` to have _no tab selected_ by default.
  <br>NavTabs will automatially _redirect_ to the path set for the first tab 
  	if necessary.

- **`depth`** &nbsp; {integer} `[null]` &nbsp; _optional_
  <br>When NavTabs are nested, it cannot automatically determine which part
      of the URL is for the tabs. This can be handled by specifying which 
      segment of the URL the tabs occupy.
      Set to `0` for the root of the URL, `1` for the second segment, and so on.

- **`parentPath`** &nbsp; {boolean} `[true]` &nbsp; _optional_
  <br>This also addresses the issue of confusing URLs that cannot be 
      automatically parsed. In most cases, using `depth` is easier.

- **`rootPath`** &nbsp; {boolean} `[true]` &nbsp; _optional_
  <br>Handles scenarios where one tab is the 'root' ("/") of the website.
  <br>In most cases this can be handled by just leaving the tab `path' blank.

### `tabs` Configuration

The `tabs` prop accepts an array of tab-configurations.
Each tab configuration accepts these props:

- **`label`** &nbsp; {string} `[]` &nbsp; _required_
  <br>The text to display on the tab - identical to the 
     [Material UI Tab](https://material-ui.com/api/tab/) label prop.

- **`path`** &nbsp; {string} `[]` &nbsp; _required_
  <br>Set a path the same as if adding a sub-route to React Router.
  <br>The `path` is treated as relative to the parent path 
      _unless_ path starts with a slash, like: `"/absolute/path"`.

- **`exact`** &nbsp; {boolean} `[false]` &nbsp; _optional_
  <br>This is the React Router 'exact' prop.
     In most cases NavTabs will set this appropriately automatically.

- **`component`** &nbsp; {component} `[null]` &nbsp; _required_
  <br>Import and specify the component to display when tab is selected.
  <br>**If no component is set, a `<Placeholder>` component will display.**

- **`props`** &nbsp; {object} `[null]` &nbsp; _optional_
  <br>Any props that you want to pass to the `component` specified.

Any other props specified will be passed-through to the
[Material UI Tab](https://material-ui.com/api/tab/) component.
For example, set `disabled: true` to disable a tab.

### `<Tab>` Subcomponent Props

NavTabs exports a named `<Tab>` component that outputs the Tabs markup.
This is separate so the tabs can be rendered inside a special layout or wrapper.

This component does not _require_ any props, but you can set any of the props
accepted by the [Material UI Tabs](https://material-ui.com/api/tabs/) component.

To pass the same props to _each_ of the autogenerated
[Material UI Tab](https://material-ui.com/api/tab/) sub-compoents,
add them in a `TabProps` prop.
<br>(To set different props for each `<Tab>`, add them to the `tabs` config.) 

### `<Content>` Subcomponent Props

NavTabs exports a named `<Content>` component that outputs all the 
`<Route>` components; one for each tab.
This is separate so the tab-content can be rendered separate from the tabs.
<br>This component does not accept any props.


## Examples

### Structure Example

If NavTabs is implemented _without any configuration_, 
**sample `tabs` data is used to create a quick 3-tab prototype**. 
Cosmetic tab styles can be applied and tested before the real content exists.

If `tabs` configuration is set, but some tabs are missing a `component` prop,
NavTabs will render placeholders as the content for those tabs.
```javascript
import NavTabs, { Tabs, Content } from '@allpro/react-nav-tabs'

function Test() {
    return (
        <NavTabs>
            <CustomHeader>
                <Tabs />
            </CustomHeader>

            <ContentWrapper>
                <Content />
            </ContentWrapper>
        </NavTabs>
    );
}
```

### Configuration Example

Normally you will configure your tabs and content.
A `component` must be specified as the 'content' for each tab.

If a `props` key is specified, these are passed to the `component` for that tab.

Cosmetic props for the [Tabs component](https://material-ui.com/api/tabs/) 
can be set directly on the `<Tabs>` component.
It also accepts **one extra prop**: **`TabProps`**.
These are a hash of props you'd like to pass to _each_ of the auto-generated
[Tab components](https://material-ui.com/api/tab/).
If some `<Tab>` components require unique props, 
add these to the tab configuration data.
For example, the `disabled` prop for "Contact Us" (below) is specific to that
[Tab](https://material-ui.com/api/tab/).

```javascript
const tabs = [
    {
        label: 'Company',
        path:  'company',
        component: CompanyDescription
    },
    {
        label: 'Contact Us',
        path:  'contacts',
        disabled: true, // Extra prop to pass-through to MUI 'Tab' component
        component: ContactInfo
    },
    {
        label: 'Careers',
        path:  'careers',
        component: JobPostings,
        props: { filter: 'current' }
    }
];

function Test() {
    return (
        <NavTabs tabs={tabs}>
            <Tabs />
            <Content />
        </NavTabs>
    );
}
```


## Built With

- [create-react-library](https://github.com/DimiMikadze/create-react-library) - 
A React component framework based on
[create-react-app](https://github.com/facebook/create-react-app)

## Contributing

Please read 
[CONTRIBUTING.md](https://github.com/allpro/react-nav-tabs/blob/master/CONTRIBUTING.md)
for details on our code of conduct, 
and the process for submitting pull requests to us.

## Versioning

We use SemVer for versioning. For the versions available, 
see the tags on this repository.

## License

MIT © [allpro](https://github.com/allpro)
<br>See
[LICENSE](https://github.com/allpro/react-nav-tabs/blob/master/LICENSE)
file for details


[gzip-size-badge]: http://img.badgesize.io/https://cdn.jsdelivr.net/npm/@allpro/react-nav-tabs/umd/@allpro/react-nav-tabs.min.js?compression=gzip
[gzip-size]: http://img.badgesize.io/https://cdn.jsdelivr.net/npm/@allpro/react-nav-tabs/umd/@allpro/react-nav-tabs.min.js

[install-size-badge]: https://packagephobia.now.sh/badge?p=@allpro/react-nav-tabs
[install-size]: https://packagephobia.now.sh/result?p=@allpro/react-nav-tabs

[npm-badge]: http://img.shields.io/npm/v/@allpro/react-nav-tabs.svg?style=flat-round
[npm]: https://www.npmjs.com/package/@allpro/react-nav-tabs

[build-badge]: https://travis-ci.org/allpro/react-nav-tabs.svg?branch=master
[build]: https://travis-ci.org/allpro/react-nav-tabs

[coveralls-badge]: https://coveralls.io/repos/github/allpro/react-nav-tabs/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/allpro/react-nav-tabs?branch=master

[license-badge]: https://badgen.now.sh/badge/license/MIT/blue
[license]: https://github.com/allpro/react-nav-tabs/blob/master/LICENSE

[donate-badge]: https://img.shields.io/badge/Donate-PayPal-green.svg?style=flat-round
[donate]: https://paypal.me/KevinDalman
