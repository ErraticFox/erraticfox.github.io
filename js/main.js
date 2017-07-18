$(document).ready(() => {
	$('img[src$=".svg"]').each(function() {
		var $img = $(this)
		var imgURL = $img.attr('src')
		var attributes = $img.prop("attributes")

		$.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg')

			// Remove any invalid XML tags
			$svg = $svg.removeAttr('xmlns:a')

			// Loop through IMG attributes and apply on SVG
			$.each(attributes, function() {
				$svg.attr(this.name, this.value)
			})
			$img.replaceWith($svg);
		}, 'xml')
	})
})
