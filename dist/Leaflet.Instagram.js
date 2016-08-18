/*! Leaflet.Instagram 2014-06-26 */
L.Instagram = L.FeatureGroup.extend({
    options: {
        icon: {
            iconSize: [40, 40],
            className: "leaflet-marker-instagram"
        },
        popup: {
            className: "leaflet-popup-instagram"
        },
        imageTemplate: '<a href="{link}" title="View on Instagram"><img src="{image_standard}"/></a><p>{caption}</a></p>',
        videoTemplate: '<a href="{link}" title="View on Instagram"><video autoplay controls poster="{image_standard}"><source src="{video_standard}" type="video/mp4"/></video></a><p>{caption}</a></p>',
        onClick: function(a) {
            var b = a.layer.image,
                c = this.options,
                d = c.imageTemplate;
            "video" === b.type && document.createElement("video").canPlayType("video/mp4; codecs=avc1.42E01E,mp4a.40.2") && (d = c.videoTemplate), a.layer.bindPopup(L.Util.template(d, b), c.popup).openPopup()
        }
    },
    initialize: function(a, b) {
        this._url = a, b = L.setOptions(this, b), L.FeatureGroup.prototype.initialize.call(this), b.onClick && this.on("click", b.onClick, this)
    },
    onAdd: function(a) {
        this.load(), L.FeatureGroup.prototype.onAdd.call(this, a)
    },
    load: function(a) {
        var b = this;
        return reqwest({
            url: a || this._url,
            type: "jsonp",
            success: function(a) {
                b._parse(a.data || a.rows || []), b.fire("load", {
                    data: a
                })
            }
        }), this
    },
    _parse: function(a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            d.images ? d.location && (this.options.filter ? d.tags && -1 !== d.tags.indexOf(this.options.filter) && this.addLayer(this._parseImage(d)) : this.addLayer(this._parseImage(d))) : this.addLayer(d)
        }
        return this
    },
    _parseImage: function(a) {
        return {
            latitude: a.location.latitude,
            longitude: a.location.longitude,
            image_thumb: a.images.thumbnail.url,
            image_standard: a.images.standard_resolution.url,
            caption: a.caption ? a.caption.text : "",
            type: a.type,
            video_standard: "video" === a.type ? a.videos.standard_resolution.url : null,
            link: a.link
        }
    },
    addLayer: function(a) {
        var b = L.marker([a.latitude, a.longitude], {
            icon: L.icon(L.extend({
                iconUrl: a.image_thumb
            }, this.options.icon)),
            title: a.caption || ""
        });
        b.image = a, L.FeatureGroup.prototype.addLayer.call(this, b)
    }
}), L.instagram = function(a, b) {
    return new L.Instagram(a, b)
};
