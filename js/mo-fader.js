var MoFader = new Class({
	Implements: [Events, Options],
	options:{
		fOpt:'my-fader', 	// define carousel
        ffOpt:'li', 		// define carousel name list
		fInterval: 3000 	// set fade interval
	},
	initialize: function(options){
		this.setOptions(options);
		this.fade();
	},
	fade: function(){
		var fader = $(this.options.fOpt),
            faders = fader.getElements(this.options.ffOpt),
			faderWrapperAutoSizeWidth = fader.getSize().x,
			faderWrapperAutoSizeHeigth = fader.getSize().y,
			animReady = 0;
		
		fader.setStyles({'width':faderWrapperAutoSizeWidth,'height':faderWrapperAutoSizeHeigth,'position':'relative','overflow':'hidden'});
		faders.setStyles({'width':faderWrapperAutoSizeWidth,'height':faderWrapperAutoSizeHeigth,'position':'absolute','left':0,'right':0,'opacity':0});
		faders[0].setStyle('opacity',1);
		faders.setStyle('z-index',0);

		if (faders.length > 2) {
			var activeSlider = 0;
			var fadeAction = setInterval(function(){
				faders.setStyle('z-index',0);
				if (animReady != 0) {
					faders.setStyle('opacity',0);
				}
				animReady = 1;
				if (activeSlider == 0) {
					faders[activeSlider].setStyle('z-index',1);
					faders[faders.length-1].setStyle('opacity',1);
					faders[activeSlider].morph({'opacity':1});
					activeSlider++;
				} else if (activeSlider < faders.length-1 && activeSlider != 0 ) {
					faders[activeSlider].setStyle('z-index',1);
					faders[activeSlider-1].setStyle('opacity',1);
					faders[activeSlider].morph({'opacity':1});
					activeSlider++;
				} else {
					faders[activeSlider].setStyle('z-index',1);
					faders[activeSlider-1].setStyle('opacity',1);
					faders[activeSlider].morph({'opacity':1});
					activeSlider = 0;
				}
			}, this.options.fInterval);
		}
		
	}
});
// TODO: create fader
// TODO: add arrows as pagination
// TODO: add pause if hovered