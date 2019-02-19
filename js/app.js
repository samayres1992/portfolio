/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,function(e,a,t,i){return a+a+t+t+i+i});var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function clamp(e,a,t){return Math.min(Math.max(e,a),t)}function isInArray(e,a){return a.indexOf(e)>-1}var pJS=function(e,a){var t=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:t,w:t.offsetWidth,h:t.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var i=this.pJS;a&&Object.deepExtend(i,a),i.tmp.obj={size_value:i.particles.size.value,size_anim_speed:i.particles.size.anim.speed,move_speed:i.particles.move.speed,line_linked_distance:i.particles.line_linked.distance,line_linked_width:i.particles.line_linked.width,mode_grab_distance:i.interactivity.modes.grab.distance,mode_bubble_distance:i.interactivity.modes.bubble.distance,mode_bubble_size:i.interactivity.modes.bubble.size,mode_repulse_distance:i.interactivity.modes.repulse.distance},i.fn.retinaInit=function(){i.retina_detect&&window.devicePixelRatio>1?(i.canvas.pxratio=window.devicePixelRatio,i.tmp.retina=!0):(i.canvas.pxratio=1,i.tmp.retina=!1),i.canvas.w=i.canvas.el.offsetWidth*i.canvas.pxratio,i.canvas.h=i.canvas.el.offsetHeight*i.canvas.pxratio,i.particles.size.value=i.tmp.obj.size_value*i.canvas.pxratio,i.particles.size.anim.speed=i.tmp.obj.size_anim_speed*i.canvas.pxratio,i.particles.move.speed=i.tmp.obj.move_speed*i.canvas.pxratio,i.particles.line_linked.distance=i.tmp.obj.line_linked_distance*i.canvas.pxratio,i.interactivity.modes.grab.distance=i.tmp.obj.mode_grab_distance*i.canvas.pxratio,i.interactivity.modes.bubble.distance=i.tmp.obj.mode_bubble_distance*i.canvas.pxratio,i.particles.line_linked.width=i.tmp.obj.line_linked_width*i.canvas.pxratio,i.interactivity.modes.bubble.size=i.tmp.obj.mode_bubble_size*i.canvas.pxratio,i.interactivity.modes.repulse.distance=i.tmp.obj.mode_repulse_distance*i.canvas.pxratio},i.fn.canvasInit=function(){i.canvas.ctx=i.canvas.el.getContext("2d")},i.fn.canvasSize=function(){i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i&&i.interactivity.events.resize&&window.addEventListener("resize",function(){i.canvas.w=i.canvas.el.offsetWidth,i.canvas.h=i.canvas.el.offsetHeight,i.tmp.retina&&(i.canvas.w*=i.canvas.pxratio,i.canvas.h*=i.canvas.pxratio),i.canvas.el.width=i.canvas.w,i.canvas.el.height=i.canvas.h,i.particles.move.enable||(i.fn.particlesEmpty(),i.fn.particlesCreate(),i.fn.particlesDraw(),i.fn.vendors.densityAutoParticles()),i.fn.vendors.densityAutoParticles()})},i.fn.canvasPaint=function(){i.canvas.ctx.fillRect(0,0,i.canvas.w,i.canvas.h)},i.fn.canvasClear=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h)},i.fn.particle=function(e,a,t){if(this.radius=(i.particles.size.random?Math.random():1)*i.particles.size.value,i.particles.size.anim.enable&&(this.size_status=!1,this.vs=i.particles.size.anim.speed/100,i.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=t?t.x:Math.random()*i.canvas.w,this.y=t?t.y:Math.random()*i.canvas.h,this.x>i.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>i.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),i.particles.move.bounce&&i.fn.vendors.checkOverlap(this,t),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var s=e.value[Math.floor(Math.random()*i.particles.color.value.length)];this.color.rgb=hexToRgb(s)}else void 0!=e.value.r&&void 0!=e.value.g&&void 0!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),void 0!=e.value.h&&void 0!=e.value.s&&void 0!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=hexToRgb(this.color.value));this.opacity=(i.particles.opacity.random?Math.random():1)*i.particles.opacity.value,i.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=i.particles.opacity.anim.speed/100,i.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var n={};switch(i.particles.move.direction){case"top":n={x:0,y:-1};break;case"top-right":n={x:.5,y:-.5};break;case"right":n={x:1,y:-0};break;case"bottom-right":n={x:.5,y:.5};break;case"bottom":n={x:0,y:1};break;case"bottom-left":n={x:-.5,y:1};break;case"left":n={x:-1,y:0};break;case"top-left":n={x:-.5,y:-.5};break;default:n={x:0,y:0}}i.particles.move.straight?(this.vx=n.x,this.vy=n.y,i.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=n.x+Math.random()-.5,this.vy=n.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=i.particles.shape.type;if("object"==typeof r){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if("image"==this.shape){var o=i.particles.shape;this.img={src:o.image.src,ratio:o.image.width/o.image.height},this.img.ratio||(this.img.ratio=1),"svg"==i.tmp.img_type&&void 0!=i.tmp.source_svg&&(i.fn.vendors.createSvgImg(this),i.tmp.pushing&&(this.img.loaded=!1))}},i.fn.particle.prototype.draw=function(){function e(){i.canvas.ctx.drawImage(r,a.x-t,a.y-t,2*t,2*t/a.img.ratio)}var a=this;if(void 0!=a.radius_bubble)var t=a.radius_bubble;else var t=a.radius;if(void 0!=a.opacity_bubble)var s=a.opacity_bubble;else var s=a.opacity;if(a.color.rgb)var n="rgba("+a.color.rgb.r+","+a.color.rgb.g+","+a.color.rgb.b+","+s+")";else var n="hsla("+a.color.hsl.h+","+a.color.hsl.s+"%,"+a.color.hsl.l+"%,"+s+")";switch(i.canvas.ctx.fillStyle=n,i.canvas.ctx.beginPath(),a.shape){case"circle":i.canvas.ctx.arc(a.x,a.y,t,0,2*Math.PI,!1);break;case"edge":i.canvas.ctx.rect(a.x-t,a.y-t,2*t,2*t);break;case"triangle":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t,a.y+t/1.66,2*t,3,2);break;case"polygon":i.fn.vendors.drawShape(i.canvas.ctx,a.x-t/(i.particles.shape.polygon.nb_sides/3.5),a.y-t/.76,2.66*t/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,1);break;case"star":i.fn.vendors.drawShape(i.canvas.ctx,a.x-2*t/(i.particles.shape.polygon.nb_sides/4),a.y-t/1.52,2*t*2.66/(i.particles.shape.polygon.nb_sides/3),i.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==i.tmp.img_type)var r=a.img.obj;else var r=i.tmp.img_obj;r&&e()}i.canvas.ctx.closePath(),i.particles.shape.stroke.width>0&&(i.canvas.ctx.strokeStyle=i.particles.shape.stroke.color,i.canvas.ctx.lineWidth=i.particles.shape.stroke.width,i.canvas.ctx.stroke()),i.canvas.ctx.fill()},i.fn.particlesCreate=function(){for(var e=0;e<i.particles.number.value;e++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value))},i.fn.particlesUpdate=function(){for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];if(i.particles.move.enable){var t=i.particles.move.speed/2;a.x+=a.vx*t,a.y+=a.vy*t}if(i.particles.opacity.anim.enable&&(1==a.opacity_status?(a.opacity>=i.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=i.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),i.particles.size.anim.enable&&(1==a.size_status?(a.radius>=i.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=i.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),"bounce"==i.particles.move.out_mode)var s={x_left:a.radius,x_right:i.canvas.w,y_top:a.radius,y_bottom:i.canvas.h};else var s={x_left:-a.radius,x_right:i.canvas.w+a.radius,y_top:-a.radius,y_bottom:i.canvas.h+a.radius};switch(a.x-a.radius>i.canvas.w?(a.x=s.x_left,a.y=Math.random()*i.canvas.h):a.x+a.radius<0&&(a.x=s.x_right,a.y=Math.random()*i.canvas.h),a.y-a.radius>i.canvas.h?(a.y=s.y_top,a.x=Math.random()*i.canvas.w):a.y+a.radius<0&&(a.y=s.y_bottom,a.x=Math.random()*i.canvas.w),i.particles.move.out_mode){case"bounce":a.x+a.radius>i.canvas.w?a.vx=-a.vx:a.x-a.radius<0&&(a.vx=-a.vx),a.y+a.radius>i.canvas.h?a.vy=-a.vy:a.y-a.radius<0&&(a.vy=-a.vy)}if(isInArray("grab",i.interactivity.events.onhover.mode)&&i.fn.modes.grabParticle(a),(isInArray("bubble",i.interactivity.events.onhover.mode)||isInArray("bubble",i.interactivity.events.onclick.mode))&&i.fn.modes.bubbleParticle(a),(isInArray("repulse",i.interactivity.events.onhover.mode)||isInArray("repulse",i.interactivity.events.onclick.mode))&&i.fn.modes.repulseParticle(a),i.particles.line_linked.enable||i.particles.move.attract.enable)for(var n=e+1;n<i.particles.array.length;n++){var r=i.particles.array[n];i.particles.line_linked.enable&&i.fn.interact.linkParticles(a,r),i.particles.move.attract.enable&&i.fn.interact.attractParticles(a,r),i.particles.move.bounce&&i.fn.interact.bounceParticles(a,r)}}},i.fn.particlesDraw=function(){i.canvas.ctx.clearRect(0,0,i.canvas.w,i.canvas.h),i.fn.particlesUpdate();for(var e=0;e<i.particles.array.length;e++){var a=i.particles.array[e];a.draw()}},i.fn.particlesEmpty=function(){i.particles.array=[]},i.fn.particlesRefresh=function(){cancelRequestAnimFrame(i.fn.checkAnimFrame),cancelRequestAnimFrame(i.fn.drawAnimFrame),i.tmp.source_svg=void 0,i.tmp.img_obj=void 0,i.tmp.count_svg=0,i.fn.particlesEmpty(),i.fn.canvasClear(),i.fn.vendors.start()},i.fn.interact.linkParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=i.particles.line_linked.opacity-n/(1/i.particles.line_linked.opacity)/i.particles.line_linked.distance;if(r>0){var c=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(a.x,a.y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}},i.fn.interact.attractParticles=function(e,a){var t=e.x-a.x,s=e.y-a.y,n=Math.sqrt(t*t+s*s);if(n<=i.particles.line_linked.distance){var r=t/(1e3*i.particles.move.attract.rotateX),c=s/(1e3*i.particles.move.attract.rotateY);e.vx-=r,e.vy-=c,a.vx+=r,a.vy+=c}},i.fn.interact.bounceParticles=function(e,a){var t=e.x-a.x,i=e.y-a.y,s=Math.sqrt(t*t+i*i),n=e.radius+a.radius;n>=s&&(e.vx=-e.vx,e.vy=-e.vy,a.vx=-a.vx,a.vy=-a.vy)},i.fn.modes.pushParticles=function(e,a){i.tmp.pushing=!0;for(var t=0;e>t;t++)i.particles.array.push(new i.fn.particle(i.particles.color,i.particles.opacity.value,{x:a?a.pos_x:Math.random()*i.canvas.w,y:a?a.pos_y:Math.random()*i.canvas.h})),t==e-1&&(i.particles.move.enable||i.fn.particlesDraw(),i.tmp.pushing=!1)},i.fn.modes.removeParticles=function(e){i.particles.array.splice(0,e),i.particles.move.enable||i.fn.particlesDraw()},i.fn.modes.bubbleParticle=function(e){function a(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function t(a,t,s,n,c){if(a!=t)if(i.tmp.bubble_duration_end){if(void 0!=s){var o=n-p*(n-a)/i.interactivity.modes.bubble.duration,l=a-o;d=a+l,"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else if(r<=i.interactivity.modes.bubble.distance){if(void 0!=s)var v=s;else var v=n;if(v!=a){var d=n-p*(n-a)/i.interactivity.modes.bubble.duration;"size"==c&&(e.radius_bubble=d),"opacity"==c&&(e.opacity_bubble=d)}}else"size"==c&&(e.radius_bubble=void 0),"opacity"==c&&(e.opacity_bubble=void 0)}if(i.interactivity.events.onhover.enable&&isInArray("bubble",i.interactivity.events.onhover.mode)){var s=e.x-i.interactivity.mouse.pos_x,n=e.y-i.interactivity.mouse.pos_y,r=Math.sqrt(s*s+n*n),c=1-r/i.interactivity.modes.bubble.distance;if(r<=i.interactivity.modes.bubble.distance){if(c>=0&&"mousemove"==i.interactivity.status){if(i.interactivity.modes.bubble.size!=i.particles.size.value)if(i.interactivity.modes.bubble.size>i.particles.size.value){var o=e.radius+i.interactivity.modes.bubble.size*c;o>=0&&(e.radius_bubble=o)}else{var l=e.radius-i.interactivity.modes.bubble.size,o=e.radius-l*c;o>0?e.radius_bubble=o:e.radius_bubble=0}if(i.interactivity.modes.bubble.opacity!=i.particles.opacity.value)if(i.interactivity.modes.bubble.opacity>i.particles.opacity.value){var v=i.interactivity.modes.bubble.opacity*c;v>e.opacity&&v<=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}else{var v=e.opacity-(i.particles.opacity.value-i.interactivity.modes.bubble.opacity)*c;v<e.opacity&&v>=i.interactivity.modes.bubble.opacity&&(e.opacity_bubble=v)}}}else a();"mouseleave"==i.interactivity.status&&a()}else if(i.interactivity.events.onclick.enable&&isInArray("bubble",i.interactivity.events.onclick.mode)){if(i.tmp.bubble_clicking){var s=e.x-i.interactivity.mouse.click_pos_x,n=e.y-i.interactivity.mouse.click_pos_y,r=Math.sqrt(s*s+n*n),p=((new Date).getTime()-i.interactivity.mouse.click_time)/1e3;p>i.interactivity.modes.bubble.duration&&(i.tmp.bubble_duration_end=!0),p>2*i.interactivity.modes.bubble.duration&&(i.tmp.bubble_clicking=!1,i.tmp.bubble_duration_end=!1)}i.tmp.bubble_clicking&&(t(i.interactivity.modes.bubble.size,i.particles.size.value,e.radius_bubble,e.radius,"size"),t(i.interactivity.modes.bubble.opacity,i.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},i.fn.modes.repulseParticle=function(e){function a(){var a=Math.atan2(d,p);if(e.vx=u*Math.cos(a),e.vy=u*Math.sin(a),"bounce"==i.particles.move.out_mode){var t={x:e.x+e.vx,y:e.y+e.vy};t.x+e.radius>i.canvas.w?e.vx=-e.vx:t.x-e.radius<0&&(e.vx=-e.vx),t.y+e.radius>i.canvas.h?e.vy=-e.vy:t.y-e.radius<0&&(e.vy=-e.vy)}}if(i.interactivity.events.onhover.enable&&isInArray("repulse",i.interactivity.events.onhover.mode)&&"mousemove"==i.interactivity.status){var t=e.x-i.interactivity.mouse.pos_x,s=e.y-i.interactivity.mouse.pos_y,n=Math.sqrt(t*t+s*s),r={x:t/n,y:s/n},c=i.interactivity.modes.repulse.distance,o=100,l=clamp(1/c*(-1*Math.pow(n/c,2)+1)*c*o,0,50),v={x:e.x+r.x*l,y:e.y+r.y*l};"bounce"==i.particles.move.out_mode?(v.x-e.radius>0&&v.x+e.radius<i.canvas.w&&(e.x=v.x),v.y-e.radius>0&&v.y+e.radius<i.canvas.h&&(e.y=v.y)):(e.x=v.x,e.y=v.y)}else if(i.interactivity.events.onclick.enable&&isInArray("repulse",i.interactivity.events.onclick.mode))if(i.tmp.repulse_finish||(i.tmp.repulse_count++,i.tmp.repulse_count==i.particles.array.length&&(i.tmp.repulse_finish=!0)),i.tmp.repulse_clicking){var c=Math.pow(i.interactivity.modes.repulse.distance/6,3),p=i.interactivity.mouse.click_pos_x-e.x,d=i.interactivity.mouse.click_pos_y-e.y,m=p*p+d*d,u=-c/m*1;c>=m&&a()}else 0==i.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},i.fn.modes.grabParticle=function(e){if(i.interactivity.events.onhover.enable&&"mousemove"==i.interactivity.status){var a=e.x-i.interactivity.mouse.pos_x,t=e.y-i.interactivity.mouse.pos_y,s=Math.sqrt(a*a+t*t);if(s<=i.interactivity.modes.grab.distance){var n=i.interactivity.modes.grab.line_linked.opacity-s/(1/i.interactivity.modes.grab.line_linked.opacity)/i.interactivity.modes.grab.distance;if(n>0){var r=i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",i.canvas.ctx.lineWidth=i.particles.line_linked.width,i.canvas.ctx.beginPath(),i.canvas.ctx.moveTo(e.x,e.y),i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x,i.interactivity.mouse.pos_y),i.canvas.ctx.stroke(),i.canvas.ctx.closePath()}}}},i.fn.vendors.eventsListeners=function(){"window"==i.interactivity.detect_on?i.interactivity.el=window:i.interactivity.el=i.canvas.el,(i.interactivity.events.onhover.enable||i.interactivity.events.onclick.enable)&&(i.interactivity.el.addEventListener("mousemove",function(e){if(i.interactivity.el==window)var a=e.clientX,t=e.clientY;else var a=e.offsetX||e.clientX,t=e.offsetY||e.clientY;i.interactivity.mouse.pos_x=a,i.interactivity.mouse.pos_y=t,i.tmp.retina&&(i.interactivity.mouse.pos_x*=i.canvas.pxratio,i.interactivity.mouse.pos_y*=i.canvas.pxratio),i.interactivity.status="mousemove"}),i.interactivity.el.addEventListener("mouseleave",function(e){i.interactivity.mouse.pos_x=null,i.interactivity.mouse.pos_y=null,i.interactivity.status="mouseleave"})),i.interactivity.events.onclick.enable&&i.interactivity.el.addEventListener("click",function(){if(i.interactivity.mouse.click_pos_x=i.interactivity.mouse.pos_x,i.interactivity.mouse.click_pos_y=i.interactivity.mouse.pos_y,i.interactivity.mouse.click_time=(new Date).getTime(),i.interactivity.events.onclick.enable)switch(i.interactivity.events.onclick.mode){case"push":i.particles.move.enable?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):1==i.interactivity.modes.push.particles_nb?i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb,i.interactivity.mouse):i.interactivity.modes.push.particles_nb>1&&i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case"remove":i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case"bubble":i.tmp.bubble_clicking=!0;break;case"repulse":i.tmp.repulse_clicking=!0,i.tmp.repulse_count=0,i.tmp.repulse_finish=!1,setTimeout(function(){i.tmp.repulse_clicking=!1},1e3*i.interactivity.modes.repulse.duration)}})},i.fn.vendors.densityAutoParticles=function(){if(i.particles.number.density.enable){var e=i.canvas.el.width*i.canvas.el.height/1e3;i.tmp.retina&&(e/=2*i.canvas.pxratio);var a=e*i.particles.number.value/i.particles.number.density.value_area,t=i.particles.array.length-a;0>t?i.fn.modes.pushParticles(Math.abs(t)):i.fn.modes.removeParticles(t)}},i.fn.vendors.checkOverlap=function(e,a){for(var t=0;t<i.particles.array.length;t++){var s=i.particles.array[t],n=e.x-s.x,r=e.y-s.y,c=Math.sqrt(n*n+r*r);c<=e.radius+s.radius&&(e.x=a?a.x:Math.random()*i.canvas.w,e.y=a?a.y:Math.random()*i.canvas.h,i.fn.vendors.checkOverlap(e))}},i.fn.vendors.createSvgImg=function(e){var a=i.tmp.source_svg,t=/#([0-9A-F]{3,6})/gi,s=a.replace(t,function(a,t,i,s){if(e.color.rgb)var n="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else var n="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return n}),n=new Blob([s],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(n),o=new Image;o.addEventListener("load",function(){e.img.obj=o,e.img.loaded=!0,r.revokeObjectURL(c),i.tmp.count_svg++}),o.src=c},i.fn.vendors.destroypJS=function(){cancelAnimationFrame(i.fn.drawAnimFrame),t.remove(),pJSDom=null},i.fn.vendors.drawShape=function(e,a,t,i,s,n){var r=s*n,c=s/n,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(a,t),e.moveTo(0,0);for(var v=0;r>v;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},i.fn.vendors.exportImg=function(){window.open(i.canvas.el.toDataURL("image/png"),"_blank")},i.fn.vendors.loadImg=function(e){if(i.tmp.img_error=void 0,""!=i.particles.shape.image.src)if("svg"==e){var a=new XMLHttpRequest;a.open("GET",i.particles.shape.image.src),a.onreadystatechange=function(e){4==a.readyState&&(200==a.status?(i.tmp.source_svg=e.currentTarget.response,i.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),i.tmp.img_error=!0))},a.send()}else{var t=new Image;t.addEventListener("load",function(){i.tmp.img_obj=t,i.fn.vendors.checkBeforeDraw()}),t.src=i.particles.shape.image.src}else console.log("Error pJS - No image.src"),i.tmp.img_error=!0},i.fn.vendors.draw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type?i.tmp.count_svg>=i.particles.number.value?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):void 0!=i.tmp.img_obj?(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame)):i.tmp.img_error||(i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw)):(i.fn.particlesDraw(),i.particles.move.enable?i.fn.drawAnimFrame=requestAnimFrame(i.fn.vendors.draw):cancelRequestAnimFrame(i.fn.drawAnimFrame))},i.fn.vendors.checkBeforeDraw=function(){"image"==i.particles.shape.type?"svg"==i.tmp.img_type&&void 0==i.tmp.source_svg?i.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(i.tmp.checkAnimFrame),i.tmp.img_error||(i.fn.vendors.init(),i.fn.vendors.draw())):(i.fn.vendors.init(),i.fn.vendors.draw())},i.fn.vendors.init=function(){i.fn.retinaInit(),i.fn.canvasInit(),i.fn.canvasSize(),i.fn.canvasPaint(),i.fn.particlesCreate(),i.fn.vendors.densityAutoParticles(),i.particles.line_linked.color_rgb_line=hexToRgb(i.particles.line_linked.color)},i.fn.vendors.start=function(){isInArray("image",i.particles.shape.type)?(i.tmp.img_type=i.particles.shape.image.src.substr(i.particles.shape.image.src.length-3),i.fn.vendors.loadImg(i.tmp.img_type)):i.fn.vendors.checkBeforeDraw()},i.fn.vendors.eventsListeners(),i.fn.vendors.start()};Object.deepExtend=function(e,a){for(var t in a)a[t]&&a[t].constructor&&a[t].constructor===Object?(e[t]=e[t]||{},arguments.callee(e[t],a[t])):e[t]=a[t];return e},window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.pJSDom=[],window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var t=document.getElementById(e),i="particles-js-canvas-el",s=t.getElementsByClassName(i);if(s.length)for(;s.length>0;)t.removeChild(s[0]);var n=document.createElement("canvas");n.className=i,n.style.width="100%",n.style.height="100%";var r=document.getElementById(e).appendChild(n);null!=r&&pJSDom.push(new pJS(e,a))},window.particlesJS.load=function(e,a,t){var i=new XMLHttpRequest;i.open("GET",a),i.onreadystatechange=function(a){if(4==i.readyState)if(200==i.status){var s=JSON.parse(a.currentTarget.response);window.particlesJS(e,s),t&&t()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};
!function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function B(r){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},e=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.forEach(function(t){var e,n,a;e=r,a=i[n=t],n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a})}return r}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var t=function(){},e={},n={},a=null,o={mark:t,measure:t};try{"undefined"!=typeof window&&(e=window),"undefined"!=typeof document&&(n=document),"undefined"!=typeof MutationObserver&&(a=MutationObserver),"undefined"!=typeof performance&&(o=performance)}catch(t){}var c=(e.navigator||{}).userAgent,s=void 0===c?"":c,h=e,p=n,l=a,f=o,u=!!h.document,g=!!p.documentElement&&!!p.head&&"function"==typeof p.addEventListener&&"function"==typeof p.createElement,k=~s.indexOf("MSIE")||~s.indexOf("Trident/"),v="___FONT_AWESOME___",A=16,b="fa",y="svg-inline--fa",U="data-fa-i2svg",w="data-fa-pseudo-element",x="data-fa-pseudo-element-pending",C="data-prefix",N="data-icon",S="fontawesome-i2svg",z=["HTML","HEAD","STYLE","SCRIPT"],M=function(){try{return!0}catch(t){return!1}}(),O={fas:"solid",far:"regular",fal:"light",fab:"brands",fa:"solid"},E={solid:"fas",regular:"far",light:"fal",brands:"fab"},j="fa-layers-text",P=/Font Awesome 5 (Solid|Regular|Light|Brands|Free|Pro)/,L={900:"fas",400:"far",normal:"far",300:"fal"},_=[1,2,3,4,5,6,7,8,9,10],T=_.concat([11,12,13,14,15,16,17,18,19,20]),R=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter"].concat(_.map(function(t){return"".concat(t,"x")})).concat(T.map(function(t){return"w-".concat(t)})),I=h.FontAwesomeConfig||{};if(p&&"function"==typeof p.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(t){var e,n=d(t,2),a=n[0],r=n[1],i=""===(e=function(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(a))||"false"!==e&&("true"===e||e);null!=i&&(I[r]=i)})}var F=B({},{familyPrefix:b,replacementClass:y,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},I);F.autoReplaceSvg||(F.observeMutations=!1);var V=B({},F);h.FontAwesomeConfig=V;var Y=h||{};Y[v]||(Y[v]={}),Y[v].styles||(Y[v].styles={}),Y[v].hooks||(Y[v].hooks={}),Y[v].shims||(Y[v].shims=[]);var D=Y[v],q=[],W=!1;function X(t){g&&(W?setTimeout(t,0):q.push(t))}g&&((W=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState))||p.addEventListener("DOMContentLoaded",function t(){p.removeEventListener("DOMContentLoaded",t),W=1,q.map(function(t){return t()})}));var K,G="pending",J="settled",Q="fulfilled",Z="rejected",$=function(){},tt="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,et="undefined"==typeof setImmediate?setTimeout:setImmediate,nt=[];function at(){for(var t=0;t<nt.length;t++)nt[t][0](nt[t][1]);K=!(nt=[])}function rt(t,e){nt.push([t,e]),K||(K=!0,et(at,0))}function it(t){var e=t.owner,n=e._state,a=e._data,r=t[n],i=t.then;if("function"==typeof r){n=Q;try{a=r(a)}catch(t){lt(i,t)}}ot(i,a)||(n===Q&&ct(i,a),n===Z&&lt(i,a))}function ot(e,n){var a;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===r(n))){var t=n.then;if("function"==typeof t)return t.call(n,function(t){a||(a=!0,n===t?st(e,t):ct(e,t))},function(t){a||(a=!0,lt(e,t))}),!0}}catch(t){return a||lt(e,t),!0}return!1}function ct(t,e){t!==e&&ot(t,e)||st(t,e)}function st(t,e){t._state===G&&(t._state=J,t._data=e,rt(ut,t))}function lt(t,e){t._state===G&&(t._state=J,t._data=e,rt(dt,t))}function ft(t){t._then=t._then.forEach(it)}function ut(t){t._state=Q,ft(t)}function dt(t){t._state=Z,ft(t),!t._handled&&tt&&global.process.emit("unhandledRejection",t._data,t)}function mt(t){global.process.emit("rejectionHandled",t)}function ht(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof ht==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){lt(e,t)}try{t(function(t){ct(e,t)},n)}catch(t){n(t)}}(t,this)}ht.prototype={constructor:ht,_state:G,_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor($),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===Z&&tt&&rt(mt,this)),this._state===Q||this._state===Z?rt(it,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},ht.all=function(c){if(!Array.isArray(c))throw new TypeError("You must pass an array to Promise.all().");return new ht(function(n,t){var a=[],r=0;function e(e){return r++,function(t){a[e]=t,--r||n(a)}}for(var i,o=0;o<c.length;o++)(i=c[o])&&"function"==typeof i.then?i.then(e(o),t):a[o]=i;r||n(a)})},ht.race=function(r){if(!Array.isArray(r))throw new TypeError("You must pass an array to Promise.race().");return new ht(function(t,e){for(var n,a=0;a<r.length;a++)(n=r[a])&&"function"==typeof n.then?n.then(t,e):t(n)})},ht.resolve=function(e){return e&&"object"===r(e)&&e.constructor===ht?e:new ht(function(t){t(e)})},ht.reject=function(n){return new ht(function(t,e){e(n)})};var pt="function"==typeof Promise?Promise:ht,gt=A,vt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bt(t){if(t&&g){var e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=p.head.childNodes,a=null,r=n.length-1;-1<r;r--){var i=n[r],o=(i.tagName||"").toUpperCase();-1<["STYLE","LINK"].indexOf(o)&&(a=i)}return p.head.insertBefore(e,a),t}}var yt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wt(){for(var t=12,e="";0<t--;)e+=yt[62*Math.random()|0];return e}function xt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function kt(t){return t.classList?xt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(t){return t})}function At(t,e){var n,a=e.split("-"),r=a[0],i=a.slice(1).join("-");return r!==t||""===i||(n=i,~H.indexOf(n))?null:i}function Ct(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Nt(n){return Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,": ").concat(n[e],";")},"")}function St(t){return t.size!==vt.size||t.x!==vt.x||t.y!==vt.y||t.rotate!==vt.rotate||t.flipX||t.flipY}function zt(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}var Mt={x:0,y:0,width:"100%",height:"100%"};function Ot(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,c=t.symbol,s=t.title,l=t.extra,f=t.watchable,u=void 0!==f&&f,d=a.found?a:n,m=d.width,h=d.height,p="fa-w-".concat(Math.ceil(m/h*16)),g=[V.replacementClass,i?"".concat(V.familyPrefix,"-").concat(i):"",p].filter(function(t){return-1===l.classes.indexOf(t)}).concat(l.classes).join(" "),v={children:[],attributes:B({},l.attributes,{"data-prefix":r,"data-icon":i,class:g,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(h)})};u&&(v.attributes[U]=""),s&&v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(wt())},children:[s]});var b,y,w,x,k,A,C,N,S,z,M,O,E,j,P,L,_,T,R,H,I,F,Y,D=B({},v,{prefix:r,iconName:i,main:n,mask:a,transform:o,symbol:c,styles:l.styles}),q=a.found&&n.found?(y=(b=D).children,w=b.attributes,x=b.main,k=b.mask,A=b.transform,C=x.width,N=x.icon,S=k.width,z=k.icon,M=zt({transform:A,containerWidth:S,iconWidth:C}),O={tag:"rect",attributes:B({},Mt,{fill:"white"})},E={tag:"g",attributes:B({},M.inner),children:[{tag:"path",attributes:B({},N.attributes,M.path,{fill:"black"})}]},j={tag:"g",attributes:B({},M.outer),children:[E]},P="mask-".concat(wt()),L="clip-".concat(wt()),_={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:[z]},{tag:"mask",attributes:B({},Mt,{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,j]}]},y.push(_,{tag:"rect",attributes:B({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(P,")")},Mt)}),{children:y,attributes:w}):function(t){var e=t.children,n=t.attributes,a=t.main,r=t.transform,i=Nt(t.styles);if(0<i.length&&(n.style=i),St(r)){var o=zt({transform:r,containerWidth:a.width,iconWidth:a.width});e.push({tag:"g",attributes:B({},o.outer),children:[{tag:"g",attributes:B({},o.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:B({},a.icon.attributes,o.path)}]}]})}else e.push(a.icon);return{children:e,attributes:n}}(D),W=q.children,X=q.attributes;return D.children=W,D.attributes=X,c?(R=(T=D).prefix,H=T.iconName,I=T.children,F=T.attributes,Y=T.symbol,[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:B({},F,{id:!0===Y?"".concat(R,"-").concat(V.familyPrefix,"-").concat(H):Y}),children:I}]}]):function(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(St(o)&&n.found&&!a.found){var c=n.width/n.height/2,s=.5;r.style=Nt(B({},i,{"transform-origin":"".concat(c+o.x/16,"em ").concat(s+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}(D)}function Et(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,c=t.watchable,s=void 0!==c&&c,l=B({},o.attributes,i?{title:i}:{},{class:o.classes.join(" ")});s&&(l[U]="");var f,u,d,m,h,p,g,v,b,y=B({},o.styles);St(r)&&(y.transform=(u=(f={transform:r,startCentered:!0,width:n,height:a}).transform,d=f.width,m=void 0===d?A:d,h=f.height,p=void 0===h?A:h,g=f.startCentered,b="",b+=(v=void 0!==g&&g)&&k?"translate(".concat(u.x/gt-m/2,"em, ").concat(u.y/gt-p/2,"em) "):v?"translate(calc(-50% + ".concat(u.x/gt,"em), calc(-50% + ").concat(u.y/gt,"em)) "):"translate(".concat(u.x/gt,"em, ").concat(u.y/gt,"em) "),b+="scale(".concat(u.size/gt*(u.flipX?-1:1),", ").concat(u.size/gt*(u.flipY?-1:1),") "),b+="rotate(".concat(u.rotate,"deg) ")),y["-webkit-transform"]=y.transform);var w=Nt(y);0<w.length&&(l.style=w);var x=[];return x.push({tag:"span",attributes:l,children:[e]}),i&&x.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),x}var jt=function(){},Pt=V.measurePerformance&&f&&f.mark&&f.measure?f:{mark:jt,measure:jt},Lt='FA "5.7.2"',_t=function(t){Pt.mark("".concat(Lt," ").concat(t," ends")),Pt.measure("".concat(Lt," ").concat(t),"".concat(Lt," ").concat(t," begins"),"".concat(Lt," ").concat(t," ends"))},Tt={begin:function(t){return Pt.mark("".concat(Lt," ").concat(t," begins")),function(){return _t(t)}},end:_t},Rt=function(t,e,n,a){var r,i,o,c,s,l=Object.keys(t),f=l.length,u=void 0!==a?(c=e,s=a,function(t,e,n,a){return c.call(s,t,e,n,a)}):e;for(o=void 0===n?(r=1,t[l[0]]):(r=0,n);r<f;r++)o=u(o,t[i=l[r]],i,t);return o};var Ht=D.styles,It=D.shims,Ft={},Yt={},Dt={},qt=function(){var t=function(a){return Rt(Ht,function(t,e,n){return t[n]=Rt(e,a,{}),t},{})};Ft=t(function(t,e,n){return e[3]&&(t[e[3]]=n),t}),Yt=t(function(e,t,n){var a=t[2];return e[n]=n,a.forEach(function(t){e[t]=n}),e});var i="far"in Ht;Dt=Rt(It,function(t,e){var n=e[0],a=e[1],r=e[2];return"far"!==a||i||(a="fas"),t[n]={prefix:a,iconName:r},t},{})};function Wt(t,e){return Ft[t][e]}qt();var Xt=D.styles,Bt=function(){return{prefix:null,iconName:null,rest:[]}};function Ut(t){return t.reduce(function(t,e){var n=At(V.familyPrefix,e);if(Xt[e])t.prefix=e;else if(V.autoFetchSvg&&-1<["fas","far","fal","fab","fa"].indexOf(e))t.prefix=e;else if(n){var a="fa"===t.prefix?Dt[n]||{prefix:null,iconName:null}:{};t.iconName=a.iconName||n,t.prefix=a.prefix||t.prefix}else e!==V.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t},Bt())}function Vt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function Kt(t){var n,e=t.tag,a=t.attributes,r=void 0===a?{}:a,i=t.children,o=void 0===i?[]:i;return"string"==typeof t?Ct(t):"<".concat(e," ").concat((n=r,Object.keys(n||{}).reduce(function(t,e){return t+"".concat(e,'="').concat(Ct(n[e]),'" ')},"").trim()),">").concat(o.map(Kt).join(""),"</").concat(e,">")}var Gt=function(){};function Jt(t){return"string"==typeof(t.getAttribute?t.getAttribute(U):null)}var Qt={replace:function(t){var e=t[0],n=t[1].map(function(t){return Kt(t)}).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(V.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"\x3c!-- ".concat(e.outerHTML," --\x3e"):"");else if(e.parentNode){var a=document.createElement("span");e.parentNode.replaceChild(a,e),a.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~kt(e).indexOf(V.replacementClass))return Qt.replace(t);var a=new RegExp("".concat(V.familyPrefix,"-.*"));delete n[0].attributes.style;var r=n[0].attributes.class.split(" ").reduce(function(t,e){return e===V.replacementClass||e.match(a)?t.toSvg.push(e):t.toNode.push(e),t},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" ");var i=n.map(function(t){return Kt(t)}).join("\n");e.setAttribute("class",r.toNode.join(" ")),e.setAttribute(U,""),e.innerHTML=i}};function Zt(n,t){var a="function"==typeof t?t:Gt;0===n.length?a():(h.requestAnimationFrame||function(t){return t()})(function(){var t=!0===V.autoReplaceSvg?Qt.replace:Qt[V.autoReplaceSvg]||Qt.replace,e=Tt.begin("mutate");n.map(t),e(),a()})}var $t=!1;function te(){$t=!1}var ee=null;function ne(t){if(l&&V.observeMutations){var r=t.treeCallback,i=t.nodeCallback,o=t.pseudoElementsCallback,e=t.observeMutationsRoot,n=void 0===e?p:e;ee=new l(function(t){$t||xt(t).forEach(function(t){if("childList"===t.type&&0<t.addedNodes.length&&!Jt(t.addedNodes[0])&&(V.searchPseudoElements&&o(t.target),r(t.target)),"attributes"===t.type&&t.target.parentNode&&V.searchPseudoElements&&o(t.target.parentNode),"attributes"===t.type&&Jt(t.target)&&~R.indexOf(t.attributeName))if("class"===t.attributeName){var e=Ut(kt(t.target)),n=e.prefix,a=e.iconName;n&&t.target.setAttribute("data-prefix",n),a&&t.target.setAttribute("data-icon",a)}else i(t.target)})}),g&&ee.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ae(t){for(var e="",n=0;n<t.length;n++){e+=("000"+t.charCodeAt(n).toString(16)).slice(-4)}return e}function re(t){var e,n,a=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),i=void 0!==t.innerText?t.innerText.trim():"",o=Ut(kt(t));return a&&r&&(o.prefix=a,o.iconName=r),o.prefix&&1<i.length?o.iconName=(e=o.prefix,n=t.innerText,Yt[e][n]):o.prefix&&1===i.length&&(o.iconName=Wt(o.prefix,ae(t.innerText))),o}var ie=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(t,e){var n=e.toLowerCase().split("-"),a=n[0],r=n.slice(1).join("-");if(a&&"h"===r)return t.flipX=!0,t;if(a&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(a){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t},e):e};function oe(t){var e,n,a,r,i,o,c,s=re(t),l=s.iconName,f=s.prefix,u=s.rest,d=(e=t.getAttribute("style"),n=[],e&&(n=e.split(";").reduce(function(t,e){var n=e.split(":"),a=n[0],r=n.slice(1);return a&&0<r.length&&(t[a]=r.join(":").trim()),t},{})),n),m=ie(t.getAttribute("data-fa-transform")),h=null!==(a=t.getAttribute("data-fa-symbol"))&&(""===a||a),p=(i=xt((r=t).attributes).reduce(function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t},{}),o=r.getAttribute("title"),V.autoA11y&&(o?i["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(wt()):(i["aria-hidden"]="true",i.focusable="false")),i),g=(c=t.getAttribute("data-fa-mask"))?Ut(c.split(" ").map(function(t){return t.trim()})):Bt();return{iconName:l,title:t.getAttribute("title"),prefix:f,transform:m,symbol:h,mask:g,extra:{classes:u,styles:d,attributes:p}}}function ce(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}(ce.prototype=Object.create(Error.prototype)).constructor=ce;var se={fill:"currentColor"},le={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},fe={tag:"path",attributes:B({},se,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},ue=B({},le,{attributeName:"opacity"}),de={tag:"g",children:[fe,{tag:"circle",attributes:B({},se,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:B({},le,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:B({},ue,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:B({},se,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:B({},ue,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:B({},se,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:B({},ue,{values:"0;0;1;1;0;0;"})}]}]},me=D.styles;function he(r,i){return new pt(function(t,e){var n={found:!1,width:512,height:512,icon:de};if(r&&i&&me[i]&&me[i][r]){var a=me[i][r];return t(n={found:!0,width:a[0],height:a[1],icon:{tag:"path",attributes:{fill:"currentColor",d:a.slice(4)[0]}}})}r&&i&&!V.showMissingIcons?e(new ce("Icon is missing for prefix ".concat(i," with icon name ").concat(r))):t(n)})}var pe=D.styles;function ge(t){var i,e,o,c,s,l,f,n,u,a=oe(t);return~a.extra.classes.indexOf(j)?function(t,e){var n=e.title,a=e.transform,r=e.extra,i=null,o=null;if(k){var c=parseInt(getComputedStyle(t).fontSize,10),s=t.getBoundingClientRect();i=s.width/c,o=s.height/c}return V.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),pt.resolve([t,Et({content:t.innerHTML,width:i,height:o,transform:a,title:n,extra:r,watchable:!0})])}(t,a):(i=t,o=(e=a).iconName,c=e.title,s=e.prefix,l=e.transform,f=e.symbol,n=e.mask,u=e.extra,new pt(function(r,t){pt.all([he(o,s),he(n.iconName,n.prefix)]).then(function(t){var e=d(t,2),n=e[0],a=e[1];r([i,Ot({icons:{main:n,mask:a},prefix:s,iconName:o,transform:l,symbol:f,mask:a,title:c,extra:u,watchable:!0})])})}))}function ve(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;if(g){var e=p.documentElement.classList,a=function(t){return e.add("".concat(S,"-").concat(t))},r=function(t){return e.remove("".concat(S,"-").concat(t))},i=V.autoFetchSvg?Object.keys(O):Object.keys(pe),o=[".".concat(j,":not([").concat(U,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(U,"])")})).join(", ");if(0!==o.length){var c=xt(t.querySelectorAll(o));if(0<c.length){a("pending"),r("complete");var s=Tt.begin("onTree"),l=c.reduce(function(t,e){try{var n=ge(e);n&&t.push(n)}catch(t){M||t instanceof ce&&console.error(t)}return t},[]);return new pt(function(e,t){pt.all(l).then(function(t){Zt(t,function(){a("active"),a("complete"),r("pending"),"function"==typeof n&&n(),s(),e()})}).catch(function(){s(),t()})})}}}}function be(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;ge(t).then(function(t){t&&Zt([t],e)})}function ye(u,d){var m="".concat(x).concat(d.replace(":","-"));return new pt(function(a,t){if(null!==u.getAttribute(m))return a();var e=xt(u.children).filter(function(t){return t.getAttribute(w)===d})[0],n=h.getComputedStyle(u,d),r=n.getPropertyValue("font-family").match(P),i=n.getPropertyValue("font-weight");if(e&&!r)return u.removeChild(e),a();if(r){var o=n.getPropertyValue("content"),c=~["Light","Regular","Solid","Brands"].indexOf(r[1])?E[r[1].toLowerCase()]:L[i],s=Wt(c,ae(3===o.length?o.substr(1,1):o));if(e&&e.getAttribute(C)===c&&e.getAttribute(N)===s)a();else{u.setAttribute(m,s),e&&u.removeChild(e);var l={iconName:null,title:null,prefix:null,transform:vt,symbol:!1,mask:null,extra:{classes:[],styles:{},attributes:{}}},f=l.extra;f.attributes[w]=d,he(s,c).then(function(t){var e=Ot(B({},l,{icons:{main:t,mask:Bt()},prefix:c,iconName:s,extra:f,watchable:!0})),n=p.createElement("svg");":before"===d?u.insertBefore(n,u.firstChild):u.appendChild(n),n.outerHTML=e.map(function(t){return Kt(t)}).join("\n"),u.removeAttribute(m),a()}).catch(t)}}else a()})}function we(t){return pt.all([ye(t,":before"),ye(t,":after")])}function xe(t){return!(t.parentNode===document.head||~z.indexOf(t.tagName.toUpperCase())||t.getAttribute(w)||t.parentNode&&"svg"===t.parentNode.tagName)}function ke(r){if(g)return new pt(function(t,e){var n=xt(r.querySelectorAll("*")).filter(xe).map(we),a=Tt.begin("searchPseudoElements");$t=!0,pt.all(n).then(function(){a(),te(),t()}).catch(function(){a(),te(),e()})})}var Ae="svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}";function Ce(){var t=b,e=y,n=V.familyPrefix,a=V.replacementClass,r=Ae;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,".".concat(a))}return r}function Ne(t){return{found:!0,width:t[0],height:t[1],icon:{tag:"path",attributes:{fill:"currentColor",d:t.slice(4)[0]}}}}function Se(){V.autoAddCss&&!je&&(bt(Ce()),je=!0)}function ze(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(t){return Kt(t)})}}),Object.defineProperty(e,"node",{get:function(){if(g){var t=p.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Me(t){var e=t.prefix,n=void 0===e?"fa":e,a=t.iconName;if(a)return Vt(Ee.definitions,n,a)||Vt(D.styles,n,a)}var Oe,Ee=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var e,n,a;return e=t,(n=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];var r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(t){e.definitions[t]=B({},e.definitions[t]||{},r[t]),function t(e,a){var n=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,r=void 0!==n&&n,i=Object.keys(a).reduce(function(t,e){var n=a[e];return n.icon?t[n.iconName]=n.icon:t[e]=n,t},{});"function"!=typeof D.hooks.addPack||r?D.styles[e]=B({},D.styles[e]||{},i):D.hooks.addPack(e,i),"fas"===e&&t("fa",a)}(t,r[t]),qt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,t){var o=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(o).map(function(t){var e=o[t],n=e.prefix,a=e.iconName,r=e.icon;i[n]||(i[n]={}),i[n][a]=r}),i}}])&&i(e.prototype,n),a&&i(e,a),t}()),je=!1,Pe={i2svg:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(g){Se();var e=t.node,n=void 0===e?p:e,a=t.callback,r=void 0===a?function(){}:a;return V.searchPseudoElements&&ke(n),ve(n,r)}return pt.reject("Operation requires a DOM of some kind.")},css:Ce,insertCss:function(){je||(bt(Ce()),je=!0)},watch:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=t.observeMutationsRoot;!1===V.autoReplaceSvg&&(V.autoReplaceSvg=!0),V.observeMutations=!0,X(function(){Te({autoReplaceSvgRoot:e}),ne({treeCallback:ve,nodeCallback:be,pseudoElementsCallback:ke,observeMutationsRoot:n})})}},Le=(Oe=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?vt:n,r=e.symbol,i=void 0!==r&&r,o=e.mask,c=void 0===o?null:o,s=e.title,l=void 0===s?null:s,f=e.classes,u=void 0===f?[]:f,d=e.attributes,m=void 0===d?{}:d,h=e.styles,p=void 0===h?{}:h;if(t){var g=t.prefix,v=t.iconName,b=t.icon;return ze(B({type:"icon"},t),function(){return Se(),V.autoA11y&&(l?m["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(wt()):(m["aria-hidden"]="true",m.focusable="false")),Ot({icons:{main:Ne(b),mask:c?Ne(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:v,transform:B({},vt,a),symbol:i,title:l,extra:{attributes:m,styles:p,classes:u}})})}},function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:Me(t||{}),a=e.mask;return a&&(a=(a||{}).icon?a:Me(a||{})),Oe(n,B({},e,{mask:a}))}),_e={noAuto:function(){V.autoReplaceSvg=!1,V.observeMutations=!1,ee&&ee.disconnect()},config:V,dom:Pe,library:Ee,parse:{transform:function(t){return ie(t)}},findIconDefinition:Me,icon:Le,text:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,a=void 0===n?vt:n,r=e.title,i=void 0===r?null:r,o=e.classes,c=void 0===o?[]:o,s=e.attributes,l=void 0===s?{}:s,f=e.styles,u=void 0===f?{}:f;return ze({type:"text",content:t},function(){return Se(),Et({content:t,transform:B({},vt,a),title:i,extra:{attributes:l,styles:u,classes:["".concat(V.familyPrefix,"-layers-text")].concat(m(c))}})})},counter:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.title,a=void 0===n?null:n,r=e.classes,i=void 0===r?[]:r,o=e.attributes,c=void 0===o?{}:o,s=e.styles,l=void 0===s?{}:s;return ze({type:"counter",content:t},function(){return Se(),function(t){var e=t.content,n=t.title,a=t.extra,r=B({},a.attributes,n?{title:n}:{},{class:a.classes.join(" ")}),i=Nt(a.styles);0<i.length&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}({content:t.toString(),title:a,extra:{attributes:c,styles:l,classes:["".concat(V.familyPrefix,"-layers-counter")].concat(m(i))}})})},layer:function(t){return ze({type:"layer"},function(){Se();var e=[];return t(function(t){Array.isArray(t)?t.map(function(t){e=e.concat(t.abstract)}):e=e.concat(t.abstract)}),[{tag:"span",attributes:{class:"".concat(V.familyPrefix,"-layers")},children:e}]})},toHtml:Kt},Te=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,e=void 0===t?p:t;(0<Object.keys(D.styles).length||V.autoFetchSvg)&&g&&V.autoReplaceSvg&&_e.dom.i2svg({node:e})};!function(t){try{t()}catch(t){if(!M)throw t}}(function(){u&&(h.FontAwesome||(h.FontAwesome=_e),X(function(){Te(),ne({treeCallback:ve,nodeCallback:be,pseudoElementsCallback:ke})})),D.hooks=B({},D.hooks,{addPack:function(t,e){D.styles[t]=B({},D.styles[t]||{},e),qt(),Te()},addShims:function(t){var e;(e=D.shims).push.apply(e,m(t)),qt(),Te()}})})}();
import EventEmitter from './events';
import defaultOptions from './defaultOptions';

const BULMA_CAROUSEL_EVENTS = {
  'ready': 'carousel:ready',
  'slideBefore': 'carousel:slide:before',
  'slideAfter': 'carousel:slide:after'
};

const onSwipeStart = Symbol('onSwipeStart');
const onSwipeMove = Symbol('onSwipeMove');
const onSwipeEnd = Symbol('onSwipeEnd');

var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

export default class bulmaCarousel extends EventEmitter {
  constructor(selector, options = {}) {
    super();

    this.element = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    this._clickEvents = ['click'];
    /// Set default options and merge with instance defined
    this.options = {
      ...defaultOptions,
      ...options
    };
    if (this.element.dataset.autoplay) {
      this.options.autoplay =  this.element.dataset.autoplay;
    }
    if (this.element.dataset.delay) {
      this.options.delay =  this.element.dataset.delay;
    }
    if (this.element.dataset.size && !this.element.classList.contains('carousel-animate-fade')) {
      this.options.size = this.element.dataset.size;
    }
    if (this.element.classList.contains('carousel-animate-fade')) {
      this.options.size = 1;
    }
    if (this.element.dataset.stopautoplayoninteraction) {
      this.options.stopautoplayoninteraction = this.element.dataset.stopautoplayoninteraction;
    }

    this.forceHiddenNavigation = false;

    this[onSwipeStart] = this[onSwipeStart].bind(this);
    this[onSwipeMove] = this[onSwipeMove].bind(this);
    this[onSwipeEnd] = this[onSwipeEnd].bind(this);

    this.init();
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */
  static attach(selector = '.carousel, .hero-carousel', options = {}) {
    let instances = new Array();

    const elements = document.querySelectorAll(selector);
    [].forEach.call(elements, element => {
      setTimeout(() => {
        instances.push(new bulmaCarousel(element, options));
      }, 100);
    });
    return instances;
  }

  /**
   * Initiate plugin
   * @method init
   * @return {void}
   */
  init() {
    this.container = this.element.querySelector('.carousel-container');
    this.items = this.element.querySelectorAll('.carousel-item');
    this.currentItem = {
      element: this.element,
      node: this.element.querySelector('.carousel-item.is-active'),
      pos: -1
    };
    this.currentItem.pos = this.currentItem.node ? Array.from(this.items).indexOf(this.currentItem.node) : -1;
    if (!this.currentItem.node) {
      this.currentItem.node = this.items[0];
      this.currentItem.node.classList.add('is-active');
      this.currentItem.node.style.opacity = 1;
      this.currentItem.pos = 0;
    }
    this.forceHiddenNavigation = this.items.length <= 1;

    let images = this.element.querySelectorAll('img');
    [].forEach.call(images, img => {
      img.setAttribute('draggable', false);
    });

    this._resize();
    this._setOrder();
    this._initNavigation();
    this._bindEvents();

    if (this.options.autoplay) {
      this._autoPlay(this.options.delay);
    }

    this.emit(BULMA_CAROUSEL_EVENTS.ready, this.currentItem);
  }

  _resize() {
    const computedStyle = window.getComputedStyle(this.element);
    const width = parseInt(computedStyle.getPropertyValue('width'), 10);

    // Detect which animation is setup and auto-calculate size and transformation
    if (this.options.size > 1) {
      if (this.options.size >= Array.from(this.items).length) {
        this.offset = 0;
      } else {
        this.offset = width / this.options.size;
      }

      this.container.style.left = 0 - this.offset + 'px';
      this.container.style.transform = `translateX(${this.offset}px)`;
      [].forEach.call(this.items, item => {
        item.style.flexBasis = `${this.offset}px`;
      });
    }

    // If animation is fade then force carouselContainer size (due to the position: absolute)
    if (this.element.classList.contains('carousel-animate-fade') && this.items.length) {
      let img = this.items[0].querySelector('img');
      let scale = 1;
      if (img.naturalWidth) {
        scale = width / img.naturalWidth;
        this.container.style.height = (img.naturalHeight * scale) + 'px';
      } else {
        img.onload = () => {
          scale = width / img.naturalWidth;
          this.container.style.height = (img.naturalHeight * scale) + 'px';
        }
      }
    }
  }

  /**
   * Bind all events
   * @method _bindEvents
   * @return {void}
   */
  _bindEvents() {
    if (this.previousControl) {
      this._clickEvents.forEach(clickEvent => {
        this.previousControl.addEventListener(clickEvent, e => {
          if (!supportsPassive) {
            e.preventDefault();
          }
          if (this._autoPlayInterval) {
            clearInterval(this._autoPlayInterval);
            if (!this.options.stopautoplayoninteraction) {
              this._autoPlay(this.options.delay);
            }
          }
          this._slide('previous');
        }, supportsPassive ? { passive: true } : false);
      });
    }

    if (this.nextControl) {
      this._clickEvents.forEach(clickEvent => {
        this.nextControl.addEventListener(clickEvent, e => {
          if (!supportsPassive) {
            e.preventDefault();
          }
          if (this._autoPlayInterval) {
            clearInterval(this._autoPlayInterval);
            if (!this.options.stopautoplayoninteraction) {
              this._autoPlay(this.options.delay);
            }
          }
          this._slide('next');
        }, supportsPassive ? { passive: true } : false);
      });
    }

    // Bind swipe events
    this.element.addEventListener('touchstart', this[onSwipeStart], supportsPassive ? { passive: true } : false);
    this.element.addEventListener('mousedown', this[onSwipeStart], supportsPassive ? { passive: true } : false);
    this.element.addEventListener('touchmove', this[onSwipeMove], supportsPassive ? { passive: true } : false);
    this.element.addEventListener('mousemove', this[onSwipeMove], supportsPassive ? { passive: true } : false);
    this.element.addEventListener('touchend', this[onSwipeEnd], supportsPassive ? { passive: true } : false);
    this.element.addEventListener('mouseup', this[onSwipeEnd], supportsPassive ? { passive: true } : false);
  }

  destroy() {
    this.element.removeEventListener('touchstart', this[onSwipeStart], supportsPassive ? { passive: true } : false);
    this.element.removeEventListener('mousedown', this[onSwipeStart], supportsPassive ? { passive: true } : false);
    this.element.removeEventListener('touchmove', this[onSwipeMove], supportsPassive ? { passive: true } : false);
    this.element.removeEventListener('mousemove', this[onSwipeMove], supportsPassive ? { passive: true } : false);
    this.element.removeEventListener('touchend', this[onSwipeEnd], supportsPassive ? { passive: true } : false);
    this.element.removeEventListener('mouseup', this[onSwipeEnd], supportsPassive ? { passive: true } : false);
  }

  /**
   * Save current position on start swiping
   * @method onSwipeStart
   * @param  {Event}    e Swipe event
   * @return {void}
   */
  [onSwipeStart](e) {
    if (!supportsPassive) {
      e.preventDefault();
    }

    e = e ? e : window.event;
    e = ('changedTouches' in e) ? e.changedTouches[0] : e;
    this._touch = {
      start: {
        time: new Date().getTime(), // record time when finger first makes contact with surface
        x: e.pageX,
        y: e.pageY
      },
      dist: {
        x: 0,
        y: 0
      }
    }
  }

  /**
   * Save current position on end swiping
   * @method onSwipeMove
   * @param  {Event}  e swipe event
   * @return {void}
   */
  [onSwipeMove](e) {
    if (!supportsPassive) {
      e.preventDefault();
    }
  }

  /**
   * Save current position on end swiping
   * @method onSwipeEnd
   * @param  {Event}  e swipe event
   * @return {void}
   */
  [onSwipeEnd](e) {
    if (!supportsPassive) {
      e.preventDefault();
    }

    e = e ? e : window.event;
    e = ('changedTouches' in e) ? e.changedTouches[0] : e;
    this._touch.dist = {
      x: e.pageX - this._touch.start.x, // get horizontal dist traveled by finger while in contact with surface
      y: e.pageY - this._touch.start.y // get vertical dist traveled by finger while in contact with surface
    };

    this._handleGesture();
  }

  /**
   * Identify the gestureand slide if necessary
   * @method _handleGesture
   * @return {void}
   */
  _handleGesture() {
    const elapsedTime = new Date().getTime() - this._touch.start.time; // get time elapsed
    if (elapsedTime <= this.options.allowedTime) { // first condition for awipe met
      if (Math.abs(this._touch.dist.x) >= this.options.threshold && Math.abs(this._touch.dist.y) <= this.options.restraint) { // 2nd condition for horizontal swipe met
        (this._touch.dist.x < 0)
          ? this._slide('next')
          : this._slide('previous'); // if dist traveled is negative, it indicates left swipe
      }
    }
  }

  /**
   * Initiate Navigation area and Previous/Next buttons
   * @method _initNavigation
   * @return {[type]}        [description]
   */
  _initNavigation() {
    this.previousControl = this.element.querySelector('.carousel-nav-left');
    this.nextControl = this.element.querySelector('.carousel-nav-right');

    if (this.items.length <= 1 || this.forceHiddenNavigation) {
      if (this.container && !this.element.classList.contains('carousel-animate-fade')) {
        this.container.style.left = '0';
      }
      if (this.previousControl) {
        this.previousControl.style.display = 'none';
      }
      if (this.nextControl) {
        this.nextControl.style.display = 'none';
      }
    }
  }

  /**
   * Update each item order
   * @method _setOrder
   */
  _setOrder() {
    this.currentItem.node.style.order = '1';
    this.currentItem.node.style.zIndex = '1';
    let item = this.currentItem.node;
    let i,
      j,
      ref;
    for (
      i = j = 2, ref = Array.from(this.items).length; (
        2 <= ref
        ? j <= ref
        : j >= ref); i = 2 <= ref
      ? ++j
      : --j) {
      item = this._next(item);
      item.style.order = '' + i % Array.from(this.items).length;
      item.style.zIndex = '0';
    }
  }

  /**
   * Find next item to display
   * @method _next
   * @param  {Node} element Current Node element
   * @return {Node}         Next Node element
   */
  _next(element) {
    if (element.nextElementSibling) {
      return element.nextElementSibling;
    } else {
      return this.items[0];
    }
  }

  /**
   * Find previous item to display
   * @method _previous
   * @param  {Node}  element Current Node element
   * @return {Node}          Previous Node element
   */
  _previous(element) {
    if (element.previousElementSibling) {
      return element.previousElementSibling;
    } else {
      return this.items[this.items.length - 1];
    }
  }

  /**
   * Update slides to display the wanted one
   * @method _slide
   * @param  {String} [direction='next'] Direction in which items need to move
   * @return {void}
   */
  _slide(direction = 'next') {
    if (this.items.length) {
      this.oldItemNode = this.currentItem.node;
      this.emit(BULMA_CAROUSEL_EVENTS.slideBefore, this.currentItem);
      if(this.options.stopautoplayoninteraction) {
        clearInterval(this._autoPlayInterval);
      }
      // initialize direction to change order
      if (direction === 'previous') {
        this.currentItem.node = this._previous(this.currentItem.node);
        // add reverse class
        if (!this.element.classList.contains('carousel-animate-fade')) {
          this.element.classList.add('is-reversing');
          this.container.style.transform = `translateX(${ - Math.abs(this.offset)}px)`;
        }
      } else {
        // Reorder items
        this.currentItem.node = this._next(this.currentItem.node);
        // re_slide reverse class
        this.element.classList.remove('is-reversing');
        this.container.style.transform = `translateX(${Math.abs(this.offset)}px)`;
      }
      this.currentItem.node.classList.add('is-active');
      this.oldItemNode.classList.remove('is-active');

      // Disable transition to instant change order
      this.element.classList.remove('carousel-animated');
      // Enable transition to animate order 1 to order 2
      setTimeout(() => {
        this.element.classList.add('carousel-animated');
      }, 50);

      this._setOrder();
      this.emit(BULMA_CAROUSEL_EVENTS.slideAfter, this.currentItem);
    }
  }

  /**
   * Initiate autoplay system
   * @method _autoPlay
   * @param  {Number}  [delay=5000] Delay between slides in milliseconds
   * @return {void}
   */
  _autoPlay(delay = 5000) {
    this._autoPlayInterval = setInterval(() => {
      this._slide('next');
    }, delay);
  }
}

particlesJS(
  "galaxy", {
   "particles": {
    "number": {
      "value": 2,
      "density": {
        "enable": true,
        "value_area": 50
      }
    },
     
     
    "color": {
      "value": ["#de0061", "#00a2a5", "#a8c94d"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 4,
        "color": "rgba(119, 197, 187, 0.38)"
      },
    },
      "opacity": {
      "value": 0.8,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 10,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "push": {
        "particles_nb": 10
      }
    }
  },

    "push": {
      "particles_nb": 2
    },
  "retina_detect": true
});