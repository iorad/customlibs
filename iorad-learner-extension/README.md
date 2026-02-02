
## iorad Library

The iorad learner widget displays a library of your choice.
Visit [https://www.iorad.com/libraries?tab=my](https://www.iorad.com/libraries?tab=my) to view your available libraries or create a new one if needed.
Make a note of the library name, as you will need it later to configure the widget.

### Widget Configuration

You need a subscription that includes the "Widgets" feature. You also need a website for the initial widget connection.

To connect your widget, go to [https://www.iorad.com/connectIntegrations/widgets](https://www.iorad.com/connectIntegrations/widgets) and follow the instructions.

You will be asked to add a script tag like this to your website:

```html
<script src="https://www.iorad.com/widgets/live/[USER_ID]" async></script>
```

Take note of your actual USER_ID, you'll need it in the extension code later.

Once connected, use the "Connected Library" dropdown to select your library. You can also customize other widget options as needed, such as colors and fonts.

### Extension Integration

This folder provides a minimal example of a Manifest V3 browser extension that injects the iorad learner widget into specific URLs.

You can integrate the relevant parts into your own extension as needed.

- Run a [content script](content.js) on the URLs where you want to inject the iorad learner widget.

	The content script loads a small JavaScript file (`page.js`) into the page context to avoid the CSP restrictions of MV3 extensions, the `page.js` also lets us programmatically override the widget options if needed, via the `window.ioradWidgetCustomOptions` object.

- The [`page.js`](page.js) file injects the iorad learner widget by adding a `<script>` tag to the page.

	The script `src` should be set to `https://www.iorad.com/widgets/live/${USER_ID}`, where `USER_ID` is your iorad user ID.

- Some websites have CSP rules that prevent the injection of external scripts. To bypass these restrictions, we use the `declarativeNetRequest` API to remove the CSP headers from the responses of the target URLs.

	See the [`rule_remove_csp.json`](rule_remove_csp.json) file for the rule definition. Remove or restrict the rules as needed for your actual target websites.

Check the [`manifest.json`](manifest.json) to see how to assign proper permissions for the required URLs:
- content_scripts matches
- host_permissions
- web_accessible_resources matches

### Go Live from tutorials embedded into your extension

1) Inject the iorad widget on every page where LIVE may run (including any new tabs LIVE opens).

2) Embed tutorials with this URL param: partnerExtensionEmbed=true.
