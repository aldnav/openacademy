odoo.define(function (require) {
    var options = require('web_editor.snippets.options');
    options.registry.snippet_testimonial_options = options.Class.extend({
        onFocus: function () {
            alert("On focus!")
        },
    });
});


// Event	Description
// start	Fires when the publisher selects the snippet for the first time in an editing session or when the snippet is drag-dropped into the page
// onFocus	Fires each time the snippet is selected by the user or when the snippet is drag-dropped into the page.
// onBlur	This event occurs when a snippet loses focus.
// onClone	Fires just after a snippet is duplicated.
// onRemove	It occurs just before that the snippet is removed.
// onBuilt	Fires just after that the snippet is drag and dropped into a drop zone. When this event is triggered, the content is already inserted in the page.
// cleanForSave	It trigger before the publisher save the page.
