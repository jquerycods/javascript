﻿(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://connect.facebook.net/tr_TR/sdk.js#xfbml=1&version=v2.8";fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));(function($){var fbRoot;function saveFacebookRoot(){if($('#fb-root').length){fbRoot=$('#fb-root').detach();}};function restoreFacebookRoot(){if(fbRoot!=null){if($('#fb-root').length){$('#fb-root').replaceWith(fbRoot);}else{$('body').append(fbRoot);}}
if(typeof FB!=="undefined"&&FB!==null){FB.XFBML.parse();}};document.addEventListener('turbolinks:request-start',saveFacebookRoot)
document.addEventListener('turbolinks:load',restoreFacebookRoot)}(jQuery));if(typeof DISQUS==="undefined"){var disqus_shortname='bloggerekibi';(function(){var dsq=document.createElement('script');dsq.type='text/javascript';dsq.async=true;dsq.src='//'+disqus_shortname+'.disqus.com/embed.js';(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(dsq);})();}else{DISQUS.reset({reload:true,config:function(){this.page.identifier=document.title;this.page.url=location.href;}});}