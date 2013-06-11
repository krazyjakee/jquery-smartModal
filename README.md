jQuery smartModal
=================

A *'smart'* jQuery modal plugin that's highly configurable, easy-to-use &amp; implement. Includes multiple implementation options like timed, automatic, sticky modals and more!

## Installation

Include the `jquery.smartModal.js` script *after* the jQuery library (unless you are packaging scripts somehow else):

```html
<script src='jquery.smartModal.js'></script>
```

**Do not include the script directly from GitHub**. The file is being served as text/plain and as such being blocked in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.

Add the CSS from the `jquery.smartModal.css` to your exisiting CSS or link to it directly:

```html
<link rel='stylesheet' href='jquery.smartModal.css'>
```

*Feel free to edit the CSS to suit your site's needs.*

## Usage

To get started, create your modal box by adding the class, `smartmodal` to it. You can define a *trigger class* by specifying the `id` attribute:

```html
<div class="smartmodal" id="triggerID">I'm a normal modal!</div>
<a href="#" class="triggerID">Click me</a> to trigger a normal modal.<br>
```

Now when a user clicks on an element with the `triggerID` class, the modal will popup.

## Configuration

The *jQuery smartModal* allows for additional configuration options to allow for more flexibility and control over the models.

### Class Attribute Options

| Class | Description |
| --- | --- |
| `once` | Will only show the modal once per page load. [jquery.cookie](https://github.com/carhartl/jquery-cookie) will need to be loaded to enable modals to be shown once per visit. |

### Modal Attribute Options

| Attribute | Description |
| --- | --- |
| `data-expires` | *Integer.* Specify the number of days until the cookie expires. |