
## iorad Library

The iorad learner widget displays a library of your choice.
Visit [https://ldev.iorad.dev/libraries?tab=my](https://ldev.iorad.dev/libraries?tab=my) to view your available libraries or create a new one if needed.
Make a note of the library name, as you will need it later to configure the widget.

### Widget Configuration

You need an iorad account with a subscription that includes the "Widgets" feature. You will also need a website where you can manually add the iorad widget for the initial connection.

To connect your widget, go to [https://ldev.iorad.dev/connectIntegrations/widgets](https://ldev.iorad.dev/connectIntegrations/widgets) and follow the instructions provided.

You will be asked to add a script tag like the following to your website:

```html
<script src="https://www.iorad.com/widgets/live/[USER_ID]" async></script>
```

Take note of your actual USER_ID, you'll need it in the extension code later.

Once connected, use the Connection → "Connected Library" dropdown to select your desired library. You can also customize other widget options as needed, such as colors and fonts.

### Extension Integration

This folder provides a minimal example of a Manifest V3 browser extension that injects the iorad learner widget into specific URLs (for example, "workday.com" and "salesforce.com").

You can integrate the relevant parts into your own extension as needed.

- Run a content script on the URLs where you want to inject the iorad learner widget.

	The content script loads a small JavaScript file (`page.js`) into the page context to avoid the CSP restrictions of MV3 extensions.

- The `page.js` file injects the iorad learner widget by adding a `<script>` tag to the page.

	The script `src` should be set to `https://www.iorad.com/widgets/live/${USER_ID}`.
where `USER_ID` is your iorad user ID.

Check the `manifest.json` to see how to assign proper permissions for the required URLs:
- content_scripts matches
- host_permissions
- web_accessible_resources matches
