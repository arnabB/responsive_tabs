responsive_tabs
===============
HTML Markup
======================
<script src="jquery.js"></script>
		<script src="jquery.tabs.js"></script>
		<link href="css/main.css" rel="stylesheet">
		<link href="css/demo.css" rel="stylesheet">
	<div class="main">
				
				 
				<nav class="nav">
					<ul class="nav-list">
						<li class="nav-item"><a href="#" trgt="tab-1" class="tablink">Tab 1 </a></li>
						<li class="nav-item"><a href="#" trgt="tab-2" class="tablink">Tab 2</a></li>
						<li class="nav-item"><a href="#" trgt="tab-3" class="tablink">Tab 3</a></li>
						
					</ul>
				</nav>
				
				<select class="mob-nav" id="select-nav">
					<option value="tab-1">tab1</option>
					<option value="tab-2">tab2</option>
					<option value="tab-3">tab3</option>
				</select>
				
				<div id="tabContentHolder" class="cont">
					<div id="tab-1" class="tab-content">Content 1</div>
					<div id="tab-2" class="tab-content">Content 2</div>
					<div id="tab-3" class="tab-content">Content 3</div>
				</div>
			


	</div>



JS
==============

Call "jqtabs" on the wrapper that is div.main (in this example).
```javascript
t = $(".main").jqtabs({ 					//Call to plugin
		        dummyOption: "dummyValue",  //Some dummy value we may need
		        callbackFn: function (i) {  //Call back function defined here, it gets triggered when a tab is selected
		            alert("Hi, callback running with index " + i);
		        },
		        initTab: 2  //initial tab index to select
		        
		    });
		    alert('now I\'ll try to activate using exposed method');
		    t.goToTab(3);  //call this function and pass index to select 'i'th function
		 });
```
