(function ($) {
    
		$.fn.tabslet = function (params) {	        
	        var defaults = {
	                // default settings
	        };
	        var settings = $.extend({}, defaults, params);
	        var $that = this;
	        return this.each(function() {
	            $this = $(this);
	            function clearTabs() {
	                $this.find(".tab-content").hide();
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


var t;

$(document).ready(function () { 
    t = $(".main").tabslet({ 
        dummyOption: "dummyValue", 
        callbackFn: function (i) {
            alert("Hi, callback running with index " + i);
        },
        initTab: 2
        
    });
    alert('now I\'ll try to activate using exposed method');
    t.goToTab(3);
 });