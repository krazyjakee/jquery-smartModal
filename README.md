jQuery smartModal
=================

A *'smart'* jQuery modal plugin that's highly configurable, easy-to-use &amp; implement. Includes multiple implementation options like timed, automatic, sticky modals and more!

## Documentation

It's simple to create modals with the smartModal plugin. Just add a little bit of HTML and *viola*, you've got a modal.

To get started, create your modal box by adding the class, `smartmodal` to it. You can define a *trigger class* by specifying the `id` attribute:

```html
<div class="smartmodal" id="triggerID">I'm a normal modal!</div>
<a href="#" class="triggerID">Click me</a> to trigger a normal modal.<br>
```

Now when a user clicks on an element with the `triggerID` class, the modal will popup.

## Configuration

The *jQuery smartModal* allows for additional configuration options to allow for more flexibility and control over the models.

### Modal Attribute Options

| Attribute      | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| `data-expires` | Integer. Specify the number of days until the cookie expires. |