function clickTrackingLink(n){$.ajax({type:"POST",url:"/admin/frontend/tracking_link_log.php",data:"id="+n,dataType:"text",success:function(n){return!0},error:function(n,t,a){}})}function trackModal(n){$.ajax({type:"POST",url:"/admin/frontend/tracking_modal_log.php",data:"id="+n,dataType:"text",success:function(n){return!0},error:function(n,t,a){}})}function clickRelatedLink(n){$.ajax({type:"POST",url:"/admin/frontend/related_link_log.php",data:"id="+n,dataType:"text",success:function(n){return!0},error:function(n,t,a){}})}function trackCAlcXML(n){$.ajax({type:"POST",url:"/admin/frontend/tracking_calcxml_log.php",data:"id="+n,dataType:"text",success:function(n){return!0},error:function(n,t,a){}})}$(document).ready(function(){$("A.related_link").each(function(){var n=this.id.replace("related_link_","");$(this).click(function(){clickRelatedLink(n)})})});