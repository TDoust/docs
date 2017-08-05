document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-40aceec172c5b3cf62f5333920ddab3a7342a1d12dfdd1581f49f0f35fc0de4a.css">')
document.write('<div id=\"gist36535956\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-fade-ino\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"blob-wrapper data type-arduino\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-fade-ino-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-fade-ino-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">/*<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-fade-ino-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> Fade<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-fade-ino-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-fade-ino-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> Modified 6/6/16 to demonstrate Macchina 2.0 RGB LEDs,<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-fade-ino-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> also functioning as a HELLO WORLD type sketch. <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-fade-ino-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-fade-ino-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> This example shows how to fade an LED on the RGB LED<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-fade-ino-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> using the analogWrite() function.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-fade-ino-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-fade-ino-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> The analogWrite() function uses PWM, so if<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-fade-ino-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> you want to change the pin you&#39;re using, be<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-fade-ino-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> sure to use another PWM capable pin. On most<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-fade-ino-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> Arduino, the PWM pins are identified with <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-fade-ino-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> a &quot;~&quot; sign, like ~3, ~5, ~6, ~9, ~10 and ~11.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-fade-ino-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-fade-ino-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> This example code is in the public domain.<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-fade-ino-LC17\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> <span class=\"pl-c\">*/<\/span><\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-fade-ino-LC18\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-fade-ino-LC19\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">int<\/span> led = <span class=\"pl-c1\">5<\/span>;           <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> the PWM pin the LED is attached to: #5 is the BLUE LED, #12 is GREEN, #11 is RED within the RRB LED. <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-fade-ino-LC20\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">int<\/span> brightness = <span class=\"pl-c1\">0<\/span>;    <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> how bright the LED is<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-fade-ino-LC21\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">int<\/span> fadeAmount = <span class=\"pl-c1\">5<\/span>;    <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> how many points to fade the LED by<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-fade-ino-LC22\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-fade-ino-LC23\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> the setup routine runs once when you press reset:<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-fade-ino-LC24\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">void<\/span> <span class=\"pl-en\">setup<\/span>() {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-fade-ino-LC25\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> declare led pin to be an output:<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-fade-ino-LC26\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">pinMode<\/span>(led, OUTPUT);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-fade-ino-LC27\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-fade-ino-LC28\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-fade-ino-LC29\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">//<\/span> the loop routine runs over and over again forever:<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-fade-ino-LC30\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">void<\/span> <span class=\"pl-en\">loop<\/span>() {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-fade-ino-LC31\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> set the brightness of led pin:<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-fade-ino-LC32\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">analogWrite<\/span>(led, brightness);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-fade-ino-LC33\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-fade-ino-LC34\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> change the brightness for next time through the loop:<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-fade-ino-LC35\" class=\"blob-code blob-code-inner js-file-line\">  brightness = brightness + fadeAmount;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-fade-ino-LC36\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L37\" class=\"blob-num js-line-number\" data-line-number=\"37\"><\/td>\n        <td id=\"file-fade-ino-LC37\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> reverse the direction of the fading at the ends of the fade:<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L38\" class=\"blob-num js-line-number\" data-line-number=\"38\"><\/td>\n        <td id=\"file-fade-ino-LC38\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">if<\/span> (brightness == <span class=\"pl-c1\">0<\/span> || brightness == <span class=\"pl-c1\">255<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L39\" class=\"blob-num js-line-number\" data-line-number=\"39\"><\/td>\n        <td id=\"file-fade-ino-LC39\" class=\"blob-code blob-code-inner js-file-line\">    fadeAmount = -fadeAmount ;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L40\" class=\"blob-num js-line-number\" data-line-number=\"40\"><\/td>\n        <td id=\"file-fade-ino-LC40\" class=\"blob-code blob-code-inner js-file-line\">  }<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L41\" class=\"blob-num js-line-number\" data-line-number=\"41\"><\/td>\n        <td id=\"file-fade-ino-LC41\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\"><span class=\"pl-c\">//<\/span> wait for 30 milliseconds to see the dimming effect<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L42\" class=\"blob-num js-line-number\" data-line-number=\"42\"><\/td>\n        <td id=\"file-fade-ino-LC42\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">delay<\/span>(<span class=\"pl-c1\">30<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-fade-ino-L43\" class=\"blob-num js-line-number\" data-line-number=\"43\"><\/td>\n        <td id=\"file-fade-ino-LC43\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/macchina/57f3b4a208d271f154163d4260ccdbb7/raw/1195a0d62d064a3d4bd1c343b2a9512d13bd41de/Fade.INO\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/macchina/57f3b4a208d271f154163d4260ccdbb7#file-fade-ino\">Fade.INO<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
