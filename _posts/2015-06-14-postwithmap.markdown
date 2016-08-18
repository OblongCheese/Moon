---
layout: post-with-map
title:  "Test Map Post"
date:   2015-06-14
---

<p class="intro"><span class="dropcap">T</span>est post with a map embedded in it.</p>

This post makes use of a different Jekyll layout to display a map. I thought about using Javascript to make a call to Instagram and only display the map if there are photos from today, but I think that's probably a little bit too lazy.

The way this is achieved is by two separate calls to the Instagram API because I don't understand how the internals of Leaflet.Instagram work.

Leaflet.Instagram does pull down all of the information from Instagram that I need. It pulls down more information than I need. But I don't know how to access that "outside" of the instatiation of the Leaflet map. I don't think there are any accessors functions for me to make use of.

So, what I do is:

* create the map
* call the built-in fitWorld() function to make the map start by displaying the whole world
* draw all the map tiles into the map
* draw the Instagram photos into the map from today's date (used a bit of Liquid templating language to transform the post date to Unix time)

Now's when things get a bit lazy/bad:

* make another call to the Instagram API using jQuery.getJSON, because I saw that code on another site somewhere
* for each Instagram photo that is returned by this action, set the zoom level of the map AND call panTo() to move the map to that photos' location

I have yet to test, but I believe that for each photo displayed on the day's map, the map will pan to each one as they are drawn. This will probably happen within <1 second and maybe not even be noticable, but eh. I will have to test it and see how it looks one day soon.
