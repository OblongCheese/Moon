---
layout: post
title:  "First Jekyll Post"
date:   2015-06-14
---

<!-- intro - will be put on main page -->

<p class="intro"><span class="dropcap">W</span>elcome to our travelog. I have set this little site up as a way for family and friends to keep track of our travels in Europe.</p>

I have spent approximately 8 hours so far getting the site up and running. In that time I have:

* installed Ruby on Ubuntu 14.04
* installed Jekyll using Ruby
* tried out a few different Jekyll "themes" (site shells)
* implemented a Leaflet map
* implemented a Leaflet addon for displaying all my "recent" Instagram photos
* begun investigation on how to display a small leaflet map per-post with Instagram photos from that day

Most of the time has been spent troubleshooting things which I previously had very little knowledge of, such as realizing that including two different versions of jQuery in the same HTML page will cause the Fancybox image display plugin to not work; and also being gently reminded that HTML is parsed serially; i.e. you cannot call a function of jQuery in the page before you have loaded the jQuery library.

I also had a little bit of trouble understanding the process of allowing myself access to my own Instagram photos via the Instagram API. Currently I am using cURL to generate the correct passphrase to grant myself access to my own photos, however Instagram warns that passphrase lifetime is indeterminate: keeping it up to date may become cumbersome in the future. How will I know if the passphrase has been deleted? How annoyed will I be if I have to regularly update the passphrase using cURL?

I will sign off this post for now. I hope my next post will contain a mini-map with Instagram photos from that day displayed on it.

<!-- write pararaphs as required -->

<!-- insert a picture - probably hosted elsewhere though... -->
<img src="{{ '/assets/img/touring.jpg' | prepend: site.baseurl }}" alt=""> 

<!-- more paragraphs -->
