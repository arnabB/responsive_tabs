(function ($) {
    
		$.fn.jqtabs = function (params) {	        
	        var defaults = {
	                // default settings
	        };
	        var settings = $.extend({}, defaults, params);
	        var $that = this;
	        return this.each(function() {
	            $this = $(this);
	            function clearTabs() {
	                $this.find(".tab-content").hide();
	                $(".tablink").css("border","none");
	            }
	            function activateTab(i) {
	                clearTabs();
	                $("#tab-"+i).show();
					$("select.mob-nav").val("tab-"+i);
					$("ul.nav-list li:nth-child("+i+")").children("a").css("border-bottom","5px solid #777777");
                    settings.callbackFn(i);
	            }
				$this.find(".nav-list").on("click", "li", function() {
	                activateTab($(this).index()+1);
	            });
	            $this.find(".mob-nav").change(function() {
	                var x = $( "select.mob-nav option:selected" ).attr('value').split('-')[1];
				    activateTab(x);
	            });	            
	            // init with settings
                activateTab(settings.initTab);
                $that.goToTab = function (index) {
                    alert('activation thru method exposure, index ' + index);
                    activateTab(index);                    
                };
	        });
    	};
    })(jQuery);


