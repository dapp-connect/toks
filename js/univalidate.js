function uniValidate(f) {var highlight_color='yellow';var shaded_color='#ccc';var validate_err=0;var mismatch_err=0;for(var i=0;i<f.elements.length;i++) {var e=f.elements[i];if(e.value===undefined) continue;var c=e.className.split(' ');var req=false;var invalid=false;var nomatch=false;for(var j=0;j<c.length;j++) {v=e.value.replace(/^s+|s+$/g,'');if(c[j].indexOf('-if')>-1){sc=c[j].split(':');if(sc[0].indexOf('-checked')>-1){ck=true;if(sc[0].indexOf('-not-checked')>-1){ck=false;} ex=sc[1].split('=');b=document.getElementsByName(ex[0]);for(var k=0;k<b.length;k++) {if(b[k].checked==ck&&(b[k].value==ex[1]||b[k].value==ex[1].replace(/_/,' '))){req=true;}}} else if(sc[1].indexOf('!=')>-1){ex=sc[1].split('!=');if(parseFloat(f[ex[0]].value)!=ex[1]){req=true;}}else if(sc[1].indexOf('=')>-1){ex=sc[1].split('=');if(parseFloat(f[ex[0]].value)==ex[1]){req=true;}}else if(sc[1].indexOf('>')>-1){ex=sc[1].split('>');if(parseFloat(f[ex[0]].value)>ex[1]){req=true;}}else if(sc[1].indexOf('<')>-1){ex=sc[1].split('<');if(parseFloat(f[ex[0]].value)<ex[1]){req=true;}}else if(sc[0].indexOf('-not')>-1){if(f[sc[1]].value==''){req=true;}}else{if(f[sc[1]].value!=''){req=true;}}} if(c[j]=='required'){req=true;} if(c[j]=='nonzero'){v=parseFloat(v);} if(c[j]=='email'){v=v.match(/.+@.+..+/);} if(c[j].indexOf('require-choice')>-1){if(c[j]=='require-choice'){req=true;} var n=e.name;siblings=document.getElementsByName(n);v=false;for(k=0;k<siblings.length;k++) {if(siblings[k].checked){v=true;}}} if(c[j].indexOf('require-match')>-1){sc=c[j].split(':');if(f[sc[1]].value!=e.value){nomatch=true;f[sc[1]].style.backgroundColor=shaded_color;}}} if(req&&!v){invalid=true;} if(e.nextSibling&&e.nextSibling.nodeName=='LABEL'){e.nextSibling.style.backgroundColor=invalid?highlight_color:'';} e.style.backgroundColor=(invalid+nomatch)?(invalid?highlight_color:shaded_color):'';validate_err+=invalid;mismatch_err+=nomatch;} if(mismatch_err+validate_err){if(mismatch_err){alert('Please make sure the shaded fields match');} if(validate_err){alert('Please complete the highlighted field'+(validate_err>1?'s':''));} return false;} return true;}