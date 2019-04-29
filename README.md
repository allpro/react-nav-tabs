# React NavTabs


[![npm package][npm-badge]][npm]
[![gzip-size][gzip-size-badge]][gzip-size]
[![install-size][install-size-badge]][install-size]
[![build][build-badge]][build]
[![coverage][coveralls-badge]][coveralls]
[![license][license-badge]][license]
[![donate][donate-badge]][donate]


[React-Nav-Tabs](https://www.npmjs.com/package/@allpro/react-nav-tabs) 
is a wrapper that integrates **Material UI Tabs** ("Tabs")
with **React Router 4/5**. 
The tabs now function as navigation, and stay in perfect sync with the URL.
Hyperlinks, Back/Forward buttons, and all other navigation work as expected.

The output for the `<Tabs>` and `<Content>` (tab-content) are handled by 
separate subcomponents to allow the tabs to be used in any layout.
NavTabs can also be nested as many levels as desired; (ie: tabs inside tabs).

All the normal props for Material UI Tabs can be used,
These can applied in multiple ways.
If you have existing Tabs in your app, it's easy to convert them to NavTabs,
with no change to their appearance.


## Examples

**See live demos at: https://allpro.github.io/react-nav-tabs/**


### Structure Example

If you use NavTabs without any configuration, it will use sample data to 
create a 3-tab layout with content placeholders. This is useful for quickly 
prototyping a layout. If desired, the cosmetic styles can be done before even
deciding on what the tabs/content will eventually be.
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
A `component` must be specified for each tab - this is the tab-content.
The `path` is considered relative to the parent path _unless_ it starts with a 
slash like: "/absolute/path"
If `props` are specified, these will be passed to the `component` for that tab.

Cosmetic props for the [Tabs component](https://material-ui.com/api/tabs/) 
can be set directly on the `<Tabs>` component.
It also accepts **one extra prop**: **`TabProps`**.
These are a hash of props you'd like to pass to _each_ of the auto-generated
[Tab components](https://material-ui.com/api/tab/).
If you some `<Tab>` components require unique props, 
then add these to the tab configuration data.
For example, the `disabled` prop for "Contact Us" is specific to that
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
        <NavTabs
            tabs={tabs}
            defaultTab={0}
        >
            <Tabs />
            <Content />
        </NavTabs>
	);
}
```


#### DETAILS COMING SOON...

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
