/* Shield UI 1.7.40 Trial Version | Copyright 2013-2019 Shield UI Ltd. | http://www.shieldui.com/eula */
function a(b) {
	this.ok = !1, "#" == b.charAt(0) && (b = b.substr(1, 6)), b = b.replace(/ /g, ""), b = b.toLowerCase();
	var c = {
		aliceblue: "f0f8ff",
		antiquewhite: "faebd7",
		aqua: "00ffff",
		aquamarine: "7fffd4",
		azure: "f0ffff",
		beige: "f5f5dc",
		bisque: "ffe4c4",
		black: "000000",
		blanchedalmond: "ffebcd",
		blue: "0000ff",
		blueviolet: "8a2be2",
		brown: "a52a2a",
		burlywood: "deb887",
		cadetblue: "5f9ea0",
		chartreuse: "7fff00",
		chocolate: "d2691e",
		coral: "ff7f50",
		cornflowerblue: "6495ed",
		cornsilk: "fff8dc",
		crimson: "dc143c",
		cyan: "00ffff",
		darkblue: "00008b",
		darkcyan: "008b8b",
		darkgoldenrod: "b8860b",
		darkgray: "a9a9a9",
		darkgreen: "006400",
		darkkhaki: "bdb76b",
		darkmagenta: "8b008b",
		darkolivegreen: "556b2f",
		darkorange: "ff8c00",
		darkorchid: "9932cc",
		darkred: "8b0000",
		darksalmon: "e9967a",
		darkseagreen: "8fbc8f",
		darkslateblue: "483d8b",
		darkslategray: "2f4f4f",
		darkturquoise: "00ced1",
		darkviolet: "9400d3",
		deeppink: "ff1493",
		deepskyblue: "00bfff",
		dimgray: "696969",
		dodgerblue: "1e90ff",
		feldspar: "d19275",
		firebrick: "b22222",
		floralwhite: "fffaf0",
		forestgreen: "228b22",
		fuchsia: "ff00ff",
		gainsboro: "dcdcdc",
		ghostwhite: "f8f8ff",
		gold: "ffd700",
		goldenrod: "daa520",
		gray: "808080",
		green: "008000",
		greenyellow: "adff2f",
		honeydew: "f0fff0",
		hotpink: "ff69b4",
		indianred: "cd5c5c",
		indigo: "4b0082",
		ivory: "fffff0",
		khaki: "f0e68c",
		lavender: "e6e6fa",
		lavenderblush: "fff0f5",
		lawngreen: "7cfc00",
		lemonchiffon: "fffacd",
		lightblue: "add8e6",
		lightcoral: "f08080",
		lightcyan: "e0ffff",
		lightgoldenrodyellow: "fafad2",
		lightgrey: "d3d3d3",
		lightgreen: "90ee90",
		lightpink: "ffb6c1",
		lightsalmon: "ffa07a",
		lightseagreen: "20b2aa",
		lightskyblue: "87cefa",
		lightslateblue: "8470ff",
		lightslategray: "778899",
		lightsteelblue: "b0c4de",
		lightyellow: "ffffe0",
		lime: "00ff00",
		limegreen: "32cd32",
		linen: "faf0e6",
		magenta: "ff00ff",
		maroon: "800000",
		mediumaquamarine: "66cdaa",
		mediumblue: "0000cd",
		mediumorchid: "ba55d3",
		mediumpurple: "9370d8",
		mediumseagreen: "3cb371",
		mediumslateblue: "7b68ee",
		mediumspringgreen: "00fa9a",
		mediumturquoise: "48d1cc",
		mediumvioletred: "c71585",
		midnightblue: "191970",
		mintcream: "f5fffa",
		mistyrose: "ffe4e1",
		moccasin: "ffe4b5",
		navajowhite: "ffdead",
		navy: "000080",
		oldlace: "fdf5e6",
		olive: "808000",
		olivedrab: "6b8e23",
		orange: "ffa500",
		orangered: "ff4500",
		orchid: "da70d6",
		palegoldenrod: "eee8aa",
		palegreen: "98fb98",
		paleturquoise: "afeeee",
		palevioletred: "d87093",
		papayawhip: "ffefd5",
		peachpuff: "ffdab9",
		peru: "cd853f",
		pink: "ffc0cb",
		plum: "dda0dd",
		powderblue: "b0e0e6",
		purple: "800080",
		red: "ff0000",
		rosybrown: "bc8f8f",
		royalblue: "4169e1",
		saddlebrown: "8b4513",
		salmon: "fa8072",
		sandybrown: "f4a460",
		seagreen: "2e8b57",
		seashell: "fff5ee",
		sienna: "a0522d",
		silver: "c0c0c0",
		skyblue: "87ceeb",
		slateblue: "6a5acd",
		slategray: "708090",
		snow: "fffafa",
		springgreen: "00ff7f",
		steelblue: "4682b4",
		tan: "d2b48c",
		teal: "008080",
		thistle: "d8bfd8",
		tomato: "ff6347",
		turquoise: "40e0d0",
		violet: "ee82ee",
		violetred: "d02090",
		wheat: "f5deb3",
		white: "ffffff",
		whitesmoke: "f5f5f5",
		yellow: "ffff00",
		yellowgreen: "9acd32"
	};
	for (var d in c) b == d && (b = c[d]);
	for (var e = [{
			re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
			example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
			process: function (a) {
				return [parseInt(a[1]), parseInt(a[2]), parseInt(a[3])]
			}
		}, {
			re: /^(\w{2})(\w{2})(\w{2})$/,
			example: ["#00ff00", "336699"],
			process: function (a) {
				return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
			}
		}, {
			re: /^(\w{1})(\w{1})(\w{1})$/,
			example: ["#fb0", "f0f"],
			process: function (a) {
				return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
			}
		}], f = 0; f < e.length; f++) {
		var g = e[f].re,
			h = e[f].process,
			i = g.exec(b);
		i && (channels = h(i), this.r = channels[0], this.g = channels[1], this.b = channels[2], this.ok = !0)
	}
	this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function () {
		return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
	}, this.toHex = function () {
		var a = this.r.toString(16),
			b = this.g.toString(16),
			c = this.b.toString(16);
		return 1 == a.length && (a = "0" + a), 1 == b.length && (b = "0" + b), 1 == c.length && (c = "0" + c), "#" + a + b + c
	}, this.getHelpXML = function () {
		for (var b = new Array, d = 0; d < e.length; d++)
			for (var f = e[d].example, g = 0; g < f.length; g++) b[b.length] = f[g];
		for (var h in c) b[b.length] = h;
		var i = document.createElement("ul");
		i.setAttribute("id", "rgbcolor-examples");
		for (var d = 0; d < b.length; d++) try {
			var j = document.createElement("li"),
				k = new a(b[d]),
				l = document.createElement("div");
			l.style.cssText = "margin: 3px; border: 1px solid black; background:" + k.toHex() + "; color:" + k.toHex(), l.appendChild(document.createTextNode("test"));
			var m = document.createTextNode(" " + b[d] + " -> " + k.toRGB() + " -> " + k.toHex());
			j.appendChild(l), j.appendChild(m), i.appendChild(j)
		} catch (n) {}
		return i
	}
}! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
	function b(b) {
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = g.detail * -1), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = g.wheelDeltaX * -1), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = m * -1, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = g.deltaY * -1, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = l * -1)), 0 !== m || 0 !== l) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				j *= q, m *= q, l *= q
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				j *= r, m *= r, l *= r
			}
			if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || n < f) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();
				o = b.clientX - s.left, p = b.clientY - s.top
			}
			return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
		}
	}

	function c() {
		f = null
	}

	function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
	}
	var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		i = Array.prototype.slice;
	if (a.event.fixHooks)
		for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function () {
			if (this.addEventListener)
				for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
			else this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
		},
		teardown: function () {
			if (this.removeEventListener)
				for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
			else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function (b) {
			var c = a(b),
				d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
		},
		getPageHeight: function (b) {
			return a(b).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	a.fn.extend({
		mousewheel: function (a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function (a) {
			return this.unbind("mousewheel", a)
		}
	})
}),
function () {
	function b() {
		var b = {};
		return b.FRAMERATE = 30, b.MAX_VIRTUAL_PIXELS = 3e4, b.init = function (a) {
			b.Definitions = {}, b.Styles = {}, b.Animations = [], b.Images = [], b.ctx = a, b.ViewPort = new function () {
				this.viewPorts = [], this.Clear = function () {
					this.viewPorts = []
				}, this.SetCurrent = function (a, b) {
					this.viewPorts.push({
						width: a,
						height: b
					})
				}, this.RemoveCurrent = function () {
					this.viewPorts.pop()
				}, this.Current = function () {
					return this.viewPorts[this.viewPorts.length - 1]
				}, this.width = function () {
					return this.Current().width
				}, this.height = function () {
					return this.Current().height
				}, this.ComputeSize = function (a) {
					return null != a && "number" == typeof a ? a : "x" == a ? this.width() : "y" == a ? this.height() : Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2)
				}
			}
		}, b.init(), b.ImagesLoaded = function () {
			for (var a = 0; a < b.Images.length; a++)
				if (!b.Images[a].loaded) return !1;
			return !0
		}, b.trim = function (a) {
			return a.replace(/^\s+|\s+$/g, "")
		}, b.compressSpaces = function (a) {
			return a.replace(/[\s\r\t\n]+/gm, " ")
		}, b.ajax = function (a) {
			var b;
			return b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), b ? (b.open("GET", a, !1), b.send(null), b.responseText) : null
		}, b.parseXml = function (a) {
			if (window.DOMParser) {
				var b = new DOMParser;
				return b.parseFromString(a, "text/xml")
			}
			a = a.replace(/<!DOCTYPE svg[^>]*>/, "");
			var c = new ActiveXObject("Microsoft.XMLDOM");
			return c.async = "false", c.loadXML(a), c
		}, b.Property = function (a, b) {
			this.name = a, this.value = b
		}, b.Property.prototype.getValue = function () {
			return this.value
		}, b.Property.prototype.hasValue = function () {
			return null != this.value && "" !== this.value
		}, b.Property.prototype.numValue = function () {
			if (!this.hasValue()) return 0;
			var a = parseFloat(this.value);
			return (this.value + "").match(/%$/) && (a /= 100), a
		}, b.Property.prototype.valueOrDefault = function (a) {
			return this.hasValue() ? this.value : a
		}, b.Property.prototype.numValueOrDefault = function (a) {
			return this.hasValue() ? this.numValue() : a
		}, b.Property.prototype.addOpacity = function (c) {
			var d = this.value;
			if (null != c && "" != c && "string" == typeof this.value) {
				var e = new a(this.value);
				e.ok && (d = "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + c + ")")
			}
			return new b.Property(this.name, d)
		}, b.Property.prototype.getDefinition = function () {
			var a = this.value.match(/#([^\)']+)/);
			return a && (a = a[1]), a || (a = this.value), b.Definitions[a]
		}, b.Property.prototype.isUrlDefinition = function () {
			return 0 == this.value.indexOf("url(")
		}, b.Property.prototype.getFillStyleDefinition = function (a, c) {
			var d = this.getDefinition();
			return null != d && d.createGradient ? d.createGradient(b.ctx, a, c) : null != d && d.createPattern ? d.createPattern(b.ctx, a) : null
		}, b.Property.prototype.getDPI = function (a) {
			return 96
		}, b.Property.prototype.getEM = function (a) {
			var c = 12,
				d = new b.Property("fontSize", b.Font.Parse(b.ctx.font).fontSize);
			return d.hasValue() && (c = d.toPixels(a)), c
		}, b.Property.prototype.getUnits = function () {
			var a = this.value + "";
			return a.replace(/[0-9\.\-]/g, "")
		}, b.Property.prototype.toPixels = function (a, c) {
			if (!this.hasValue()) return 0;
			var d = this.value + "";
			if (d.match(/em$/)) return this.numValue() * this.getEM(a);
			if (d.match(/ex$/)) return this.numValue() * this.getEM(a) / 2;
			if (d.match(/px$/)) return this.numValue();
			if (d.match(/pt$/)) return this.numValue() * this.getDPI(a) * (1 / 72);
			if (d.match(/pc$/)) return 15 * this.numValue();
			if (d.match(/cm$/)) return this.numValue() * this.getDPI(a) / 2.54;
			if (d.match(/mm$/)) return this.numValue() * this.getDPI(a) / 25.4;
			if (d.match(/in$/)) return this.numValue() * this.getDPI(a);
			if (d.match(/%$/)) return this.numValue() * b.ViewPort.ComputeSize(a);
			var e = this.numValue();
			return c && e < 1 ? e * b.ViewPort.ComputeSize(a) : e
		}, b.Property.prototype.toMilliseconds = function () {
			if (!this.hasValue()) return 0;
			var a = this.value + "";
			return a.match(/s$/) ? 1e3 * this.numValue() : a.match(/ms$/) ? this.numValue() : this.numValue()
		}, b.Property.prototype.toRadians = function () {
			if (!this.hasValue()) return 0;
			var a = this.value + "";
			return a.match(/deg$/) ? this.numValue() * (Math.PI / 180) : a.match(/grad$/) ? this.numValue() * (Math.PI / 200) : a.match(/rad$/) ? this.numValue() : this.numValue() * (Math.PI / 180)
		}, b.Font = new function () {
			this.Styles = "normal|italic|oblique|inherit", this.Variants = "normal|small-caps|inherit", this.Weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit", this.CreateFont = function (a, c, d, e, f, g) {
				var h = null != g ? this.Parse(g) : this.CreateFont("", "", "", "", "", b.ctx.font);
				return {
					fontFamily: f || h.fontFamily,
					fontSize: e || h.fontSize,
					fontStyle: a || h.fontStyle,
					fontWeight: d || h.fontWeight,
					fontVariant: c || h.fontVariant,
					toString: function () {
						return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(" ")
					}
				}
			};
			var a = this;
			this.Parse = function (c) {
				for (var d = {}, e = b.trim(b.compressSpaces(c || "")).split(" "), f = {
						fontSize: !1,
						fontStyle: !1,
						fontWeight: !1,
						fontVariant: !1
					}, g = "", h = 0; h < e.length; h++) f.fontStyle || a.Styles.indexOf(e[h]) == -1 ? f.fontVariant || a.Variants.indexOf(e[h]) == -1 ? f.fontWeight || a.Weights.indexOf(e[h]) == -1 ? f.fontSize ? "inherit" != e[h] && (g += e[h]) : ("inherit" != e[h] && (d.fontSize = e[h].split("/")[0]), f.fontStyle = f.fontVariant = f.fontWeight = f.fontSize = !0) : ("inherit" != e[h] && (d.fontWeight = e[h]), f.fontStyle = f.fontVariant = f.fontWeight = !0) : ("inherit" != e[h] && (d.fontVariant = e[h]), f.fontStyle = f.fontVariant = !0) : ("inherit" != e[h] && (d.fontStyle = e[h]), f.fontStyle = !0);
				return "" != g && (d.fontFamily = g), d
			}
		}, b.ToNumberArray = function (a) {
			for (var c = b.trim(b.compressSpaces((a || "").replace(/,/g, " "))).split(" "), d = 0; d < c.length; d++) c[d] = parseFloat(c[d]);
			return c
		}, b.Point = function (a, b) {
			this.x = a, this.y = b
		}, b.Point.prototype.angleTo = function (a) {
			return Math.atan2(a.y - this.y, a.x - this.x)
		}, b.Point.prototype.applyTransform = function (a) {
			var b = this.x * a[0] + this.y * a[2] + a[4],
				c = this.x * a[1] + this.y * a[3] + a[5];
			this.x = b, this.y = c
		}, b.CreatePoint = function (a) {
			var c = b.ToNumberArray(a);
			return new b.Point(c[0], c[1])
		}, b.CreatePath = function (a) {
			for (var c = b.ToNumberArray(a), d = [], e = 0; e < c.length; e += 2) d.push(new b.Point(c[e], c[e + 1]));
			return d
		}, b.BoundingBox = function (a, b, c, d) {
			this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN, this.x = function () {
				return this.x1
			}, this.y = function () {
				return this.y1
			}, this.width = function () {
				return this.x2 - this.x1
			}, this.height = function () {
				return this.y2 - this.y1
			}, this.addPoint = function (a, b) {
				null != a && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = a, this.x2 = a), a < this.x1 && (this.x1 = a), a > this.x2 && (this.x2 = a)), null != b && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = b, this.y2 = b), b < this.y1 && (this.y1 = b), b > this.y2 && (this.y2 = b))
			}, this.addX = function (a) {
				this.addPoint(a, null)
			}, this.addY = function (a) {
				this.addPoint(null, a)
			}, this.addBoundingBox = function (a) {
				this.addPoint(a.x1, a.y1), this.addPoint(a.x2, a.y2)
			}, this.addQuadraticCurve = function (a, b, c, d, e, f) {
				var g = a + 2 / 3 * (c - a),
					h = b + 2 / 3 * (d - b),
					i = g + 1 / 3 * (e - a),
					j = h + 1 / 3 * (f - b);
				this.addBezierCurve(a, b, g, i, h, j, e, f)
			}, this.addBezierCurve = function (a, b, c, d, e, f, g, h) {
				var j = [a, b],
					k = [c, d],
					l = [e, f],
					m = [g, h];
				for (this.addPoint(j[0], j[1]), this.addPoint(m[0], m[1]), i = 0; i <= 1; i++) {
					var n = function (a) {
							return Math.pow(1 - a, 3) * j[i] + 3 * Math.pow(1 - a, 2) * a * k[i] + 3 * (1 - a) * Math.pow(a, 2) * l[i] + Math.pow(a, 3) * m[i]
						},
						o = 6 * j[i] - 12 * k[i] + 6 * l[i],
						p = -3 * j[i] + 9 * k[i] - 9 * l[i] + 3 * m[i],
						q = 3 * k[i] - 3 * j[i];
					if (0 != p) {
						var r = Math.pow(o, 2) - 4 * q * p;
						if (!(r < 0)) {
							var s = (-o + Math.sqrt(r)) / (2 * p);
							0 < s && s < 1 && (0 == i && this.addX(n(s)), 1 == i && this.addY(n(s)));
							var t = (-o - Math.sqrt(r)) / (2 * p);
							0 < t && t < 1 && (0 == i && this.addX(n(t)), 1 == i && this.addY(n(t)))
						}
					} else {
						if (0 == o) continue;
						var u = -q / o;
						0 < u && u < 1 && (0 == i && this.addX(n(u)), 1 == i && this.addY(n(u)))
					}
				}
			}, this.isPointInBox = function (a, b) {
				return this.x1 <= a && a <= this.x2 && this.y1 <= b && b <= this.y2
			}, this.addPoint(a, b), this.addPoint(c, d)
		}, b.Transform = function (a) {
			var c = this;
			this.Type = {}, this.Type.translate = function (a) {
				this.p = b.CreatePoint(a), this.apply = function (a) {
					a.translate(this.p.x || 0, this.p.y || 0)
				}, this.applyToPoint = function (a) {
					a.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0])
				}
			}, this.Type.rotate = function (a) {
				var c = b.ToNumberArray(a);
				this.angle = new b.Property("angle", c[0]), this.cx = c[1] || 0, this.cy = c[2] || 0, this.apply = function (a) {
					a.translate(this.cx, this.cy), a.rotate(this.angle.toRadians()), a.translate(-this.cx, -this.cy)
				}, this.applyToPoint = function (a) {
					var b = this.angle.toRadians();
					a.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]), a.applyTransform([Math.cos(b), Math.sin(b), -Math.sin(b), Math.cos(b), 0, 0]), a.applyTransform([1, 0, 0, 1, -this.p.x || 0, -this.p.y || 0])
				}
			}, this.Type.scale = function (a) {
				this.p = b.CreatePoint(a), this.apply = function (a) {
					a.scale(this.p.x || 1, this.p.y || this.p.x || 1)
				}, this.applyToPoint = function (a) {
					a.applyTransform([this.p.x || 0, 0, 0, this.p.y || 0, 0, 0])
				}
			}, this.Type.matrix = function (a) {
				this.m = b.ToNumberArray(a), this.apply = function (a) {
					a.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5])
				}, this.applyToPoint = function (a) {
					a.applyTransform(this.m)
				}
			}, this.Type.SkewBase = function (a) {
				this.base = c.Type.matrix, this.base(a), this.angle = new b.Property("angle", a)
			}, this.Type.SkewBase.prototype = new this.Type.matrix, this.Type.skewX = function (a) {
				this.base = c.Type.SkewBase, this.base(a), this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0]
			}, this.Type.skewX.prototype = new this.Type.SkewBase, this.Type.skewY = function (a) {
				this.base = c.Type.SkewBase, this.base(a), this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0]
			}, this.Type.skewY.prototype = new this.Type.SkewBase, this.transforms = [], this.apply = function (a) {
				for (var b = 0; b < this.transforms.length; b++) this.transforms[b].apply(a)
			}, this.applyToPoint = function (a) {
				for (var b = 0; b < this.transforms.length; b++) this.transforms[b].applyToPoint(a)
			};
			for (var d = b.trim(b.compressSpaces(a)).replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/), e = 0; e < d.length; e++) {
				var f = d[e].split("(")[0],
					g = d[e].split("(")[1].replace(")", ""),
					h = new this.Type[f](g);
				h.type = f, this.transforms.push(h)
			}
		}, b.AspectRatio = function (a, c, d, e, f, g, h, i, j, k) {
			c = b.compressSpaces(c), c = c.replace(/^defer\s/, "");
			var l = c.split(" ")[0] || "xMidYMid",
				m = c.split(" ")[1] || "meet",
				n = d / e,
				o = f / g,
				p = Math.min(n, o),
				q = Math.max(n, o);
			"meet" == m && (e *= p, g *= p), "slice" == m && (e *= q, g *= q), j = new b.Property("refX", j), k = new b.Property("refY", k), j.hasValue() && k.hasValue() ? a.translate(-p * j.toPixels("x"), -p * k.toPixels("y")) : (l.match(/^xMid/) && ("meet" == m && p == o || "slice" == m && q == o) && a.translate(d / 2 - e / 2, 0), l.match(/YMid$/) && ("meet" == m && p == n || "slice" == m && q == n) && a.translate(0, f / 2 - g / 2), l.match(/^xMax/) && ("meet" == m && p == o || "slice" == m && q == o) && a.translate(d - e, 0), l.match(/YMax$/) && ("meet" == m && p == n || "slice" == m && q == n) && a.translate(0, f - g)), "none" == l ? a.scale(n, o) : "meet" == m ? a.scale(p, p) : "slice" == m && a.scale(q, q), a.translate(null == h ? 0 : -h, null == i ? 0 : -i)
		}, b.Element = {}, b.EmptyProperty = new b.Property("EMPTY", ""), b.Element.ElementBase = function (a) {
			if (this.attributes = {}, this.styles = {}, this.children = [], this.attribute = function (a, c) {
					var d = this.attributes[a];
					return null != d ? d : (1 == c && (d = new b.Property(a, ""), this.attributes[a] = d), d || b.EmptyProperty)
				}, this.style = function (a, c) {
					var d = this.styles[a];
					if (null != d) return d;
					var e = this.attribute(a);
					if (null != e && e.hasValue()) return this.styles[a] = e, e;
					var f = this.parent;
					if (null != f) {
						var g = f.style(a);
						if (null != g && g.hasValue()) return g
					}
					return 1 == c && (d = new b.Property(a, ""), this.styles[a] = d), d || b.EmptyProperty
				}, this.render = function (a) {
					if ("none" != this.style("display").value && "hidden" != this.attribute("visibility").value) {
						if (a.save(), this.attribute("mask").hasValue()) {
							var b = this.attribute("mask").getDefinition();
							null != b && b.apply(a, this)
						} else if (this.style("filter").hasValue()) {
							var c = this.style("filter").getDefinition();
							null != c && c.apply(a, this)
						} else this.setContext(a), this.renderChildren(a), this.clearContext(a);
						a.restore()
					}
				}, this.setContext = function (a) {}, this.clearContext = function (a) {}, this.renderChildren = function (a) {
					for (var b = 0; b < this.children.length; b++) this.children[b].render(a)
				}, this.addChild = function (a, c) {
					var d = a;
					c && (d = b.CreateElement(a)), d.parent = this, this.children.push(d)
				}, null != a && 1 == a.nodeType) {
				for (var c = 0; c < a.childNodes.length; c++) {
					var d = a.childNodes[c];
					1 == d.nodeType && this.addChild(d, !0), this.captureTextNodes && 3 == d.nodeType && this.addChild(new b.Element.tspan(d), !1)
				}
				for (var c = 0; c < a.attributes.length; c++) {
					var e = a.attributes[c];
					this.attributes[e.nodeName] = new b.Property(e.nodeName, e.nodeValue)
				}
				var f = b.Styles[a.nodeName];
				if (null != f)
					for (var g in f) this.styles[g] = f[g];
				if (this.attribute("class").hasValue())
					for (var h = b.compressSpaces(this.attribute("class").value).split(" "), i = 0; i < h.length; i++) {
						if (f = b.Styles["." + h[i]], null != f)
							for (var g in f) this.styles[g] = f[g];
						if (f = b.Styles[a.nodeName + "." + h[i]], null != f)
							for (var g in f) this.styles[g] = f[g]
					}
				if (this.attribute("id").hasValue()) {
					var f = b.Styles["#" + this.attribute("id").value];
					if (null != f)
						for (var g in f) this.styles[g] = f[g]
				}
				if (this.attribute("style").hasValue())
					for (var f = this.attribute("style").value.split(";"), c = 0; c < f.length; c++)
						if ("" != b.trim(f[c])) {
							var j = f[c].split(":"),
								g = b.trim(j[0]),
								k = b.trim(j[1]);
							this.styles[g] = new b.Property(g, k)
						}
				this.attribute("id").hasValue() && null == b.Definitions[this.attribute("id").value] && (b.Definitions[this.attribute("id").value] = this)
			}
		}, b.Element.RenderedElementBase = function (a) {
			this.base = b.Element.ElementBase, this.base(a), this.setContext = function (a) {
				if (this.style("fill").isUrlDefinition()) {
					var c = this.style("fill").getFillStyleDefinition(this, this.style("fill-opacity"));
					null != c && (a.fillStyle = c)
				} else if (this.style("fill").hasValue()) {
					var d = this.style("fill");
					"currentColor" == d.value && (d.value = this.style("color").value), a.fillStyle = "none" == d.value ? "rgba(0,0,0,0)" : d.value
				}
				if (this.style("fill-opacity").hasValue()) {
					var d = new b.Property("fill", a.fillStyle);
					d = d.addOpacity(this.style("fill-opacity").value), a.fillStyle = d.value
				}
				if (this.style("stroke").isUrlDefinition()) {
					var c = this.style("stroke").getFillStyleDefinition(this, this.style("stroke-opacity"));
					null != c && (a.strokeStyle = c)
				} else if (this.style("stroke").hasValue()) {
					var e = this.style("stroke");
					"currentColor" == e.value && (e.value = this.style("color").value), a.strokeStyle = "none" == e.value ? "rgba(0,0,0,0)" : e.value
				}
				if (this.style("stroke-opacity").hasValue()) {
					var e = new b.Property("stroke", a.strokeStyle);
					e = e.addOpacity(this.style("stroke-opacity").value), a.strokeStyle = e.value
				}
				if (this.style("stroke-width").hasValue()) {
					var f = this.style("stroke-width").toPixels();
					a.lineWidth = 0 == f ? .001 : f
				}
				if (this.style("stroke-linecap").hasValue() && (a.lineCap = this.style("stroke-linecap").value), this.style("stroke-linejoin").hasValue() && (a.lineJoin = this.style("stroke-linejoin").value), this.style("stroke-miterlimit").hasValue() && (a.miterLimit = this.style("stroke-miterlimit").value), "undefined" != typeof a.font && (a.font = b.Font.CreateFont(this.style("font-style").value, this.style("font-variant").value, this.style("font-weight").value, this.style("font-size").hasValue() ? this.style("font-size").toPixels() + "px" : "", this.style("font-family").value).toString()), this.attribute("transform").hasValue()) {
					var g = new b.Transform(this.attribute("transform").value);
					g.apply(a)
				}
				if (this.attribute("clip-path").hasValue()) {
					var h = this.attribute("clip-path").getDefinition();
					null != h && h.apply(a)
				}
				this.style("opacity").hasValue() && (a.globalAlpha = this.style("opacity").numValue())
			}
		}, b.Element.RenderedElementBase.prototype = new b.Element.ElementBase, b.Element.PathElementBase = function (a) {
			this.base = b.Element.RenderedElementBase, this.base(a), this.path = function (a) {
				return null != a && a.beginPath(), new b.BoundingBox
			}, this.renderChildren = function (a) {
				this.path(a), b.Mouse.checkPath(this, a), "" != a.fillStyle && a.fill(), "" != a.strokeStyle && a.stroke();
				var c = this.getMarkers();
				if (null != c) {
					if (this.style("marker-start").isUrlDefinition()) {
						var d = this.style("marker-start").getDefinition();
						d.render(a, c[0][0], c[0][1])
					}
					if (this.style("marker-mid").isUrlDefinition())
						for (var d = this.style("marker-mid").getDefinition(), e = 1; e < c.length - 1; e++) d.render(a, c[e][0], c[e][1]);
					if (this.style("marker-end").isUrlDefinition()) {
						var d = this.style("marker-end").getDefinition();
						d.render(a, c[c.length - 1][0], c[c.length - 1][1])
					}
				}
			}, this.getBoundingBox = function () {
				return this.path()
			}, this.getMarkers = function () {
				return null
			}
		}, b.Element.PathElementBase.prototype = new b.Element.RenderedElementBase, b.Element.svg = function (a) {
			this.base = b.Element.RenderedElementBase, this.base(a), this.baseClearContext = this.clearContext, this.clearContext = function (a) {
				this.baseClearContext(a), b.ViewPort.RemoveCurrent()
			}, this.baseSetContext = this.setContext, this.setContext = function (a) {
				a.strokeStyle = "rgba(0,0,0,0)", a.lineCap = "butt", a.lineJoin = "miter", a.miterLimit = 4, this.baseSetContext(a), this.attribute("x").hasValue() || (this.attribute("x", !0).value = 0), this.attribute("y").hasValue() || (this.attribute("y", !0).value = 0), a.translate(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y"));
				var c = b.ViewPort.width(),
					d = b.ViewPort.height();
				if (this.attribute("width").hasValue() || (this.attribute("width", !0).value = "100%"), this.attribute("height").hasValue() || (this.attribute("height", !0).value = "100%"), "undefined" == typeof this.root) {
					c = this.attribute("width").toPixels("x"), d = this.attribute("height").toPixels("y");
					var e = 0,
						f = 0;
					this.attribute("refX").hasValue() && this.attribute("refY").hasValue() && (e = -this.attribute("refX").toPixels("x"), f = -this.attribute("refY").toPixels("y")), a.beginPath(), a.moveTo(e, f), a.lineTo(c, f), a.lineTo(c, d), a.lineTo(e, d), a.closePath(), a.clip()
				}
				if (b.ViewPort.SetCurrent(c, d), this.attribute("viewBox").hasValue()) {
					var g = b.ToNumberArray(this.attribute("viewBox").value),
						h = g[0],
						i = g[1];
					c = g[2], d = g[3], b.AspectRatio(a, this.attribute("preserveAspectRatio").value, b.ViewPort.width(), c, b.ViewPort.height(), d, h, i, this.attribute("refX").value, this.attribute("refY").value), b.ViewPort.RemoveCurrent(), b.ViewPort.SetCurrent(g[2], g[3])
				}
			}
		}, b.Element.svg.prototype = new b.Element.RenderedElementBase, b.Element.rect = function (a) {
			this.base = b.Element.PathElementBase, this.base(a), this.path = function (a) {
				var c = this.attribute("x").toPixels("x"),
					d = this.attribute("y").toPixels("y"),
					e = this.attribute("width").toPixels("x"),
					f = this.attribute("height").toPixels("y"),
					g = this.attribute("rx").toPixels("x"),
					h = this.attribute("ry").toPixels("y");
				return this.attribute("rx").hasValue() && !this.attribute("ry").hasValue() && (h = g), this.attribute("ry").hasValue() && !this.attribute("rx").hasValue() && (g = h), g = Math.min(g, e / 2), h = Math.min(h, f / 2), null != a && (a.beginPath(), a.moveTo(c + g, d), a.lineTo(c + e - g, d), a.quadraticCurveTo(c + e, d, c + e, d + h), a.lineTo(c + e, d + f - h), a.quadraticCurveTo(c + e, d + f, c + e - g, d + f), a.lineTo(c + g, d + f), a.quadraticCurveTo(c, d + f, c, d + f - h), a.lineTo(c, d + h), a.quadraticCurveTo(c, d, c + g, d), a.closePath()), new b.BoundingBox(c, d, c + e, d + f)
			}
		}, b.Element.rect.prototype = new b.Element.PathElementBase, b.Element.circle = function (a) {
			this.base = b.Element.PathElementBase, this.base(a), this.path = function (a) {
				var c = this.attribute("cx").toPixels("x"),
					d = this.attribute("cy").toPixels("y"),
					e = this.attribute("r").toPixels();
				return null != a && (a.beginPath(), a.arc(c, d, e, 0, 2 * Math.PI, !0), a.closePath()), new b.BoundingBox(c - e, d - e, c + e, d + e)
			}
		}, b.Element.circle.prototype = new b.Element.PathElementBase, b.Element.ellipse = function (a) {
			this.base = b.Element.PathElementBase, this.base(a), this.path = function (a) {
				var c = 4 * ((Math.sqrt(2) - 1) / 3),
					d = this.attribute("rx").toPixels("x"),
					e = this.attribute("ry").toPixels("y"),
					f = this.attribute("cx").toPixels("x"),
					g = this.attribute("cy").toPixels("y");
				return null != a && (a.beginPath(), a.moveTo(f, g - e), a.bezierCurveTo(f + c * d, g - e, f + d, g - c * e, f + d, g), a.bezierCurveTo(f + d, g + c * e, f + c * d, g + e, f, g + e), a.bezierCurveTo(f - c * d, g + e, f - d, g + c * e, f - d, g), a.bezierCurveTo(f - d, g - c * e, f - c * d, g - e, f, g - e), a.closePath()), new b.BoundingBox(f - d, g - e, f + d, g + e)
			}
		}, b.Element.ellipse.prototype = new b.Element.PathElementBase, b.Element.line = function (a) {
			this.base = b.Element.PathElementBase, this.base(a), this.getPoints = function () {
				return [new b.Point(this.attribute("x1").toPixels("x"), this.attribute("y1").toPixels("y")), new b.Point(this.attribute("x2").toPixels("x"), this.attribute("y2").toPixels("y"))]
			}, this.path = function (a) {
				var c = this.getPoints();
				return null != a && (a.beginPath(), a.moveTo(c[0].x, c[0].y), a.lineTo(c[1].x, c[1].y)), new b.BoundingBox(c[0].x, c[0].y, c[1].x, c[1].y)
			}, this.getMarkers = function () {
				var a = this.getPoints(),
					b = a[0].angleTo(a[1]);
				return [
					[a[0], b],
					[a[1], b]
				]
			}
		}, b.Element.line.prototype = new b.Element.PathElementBase, b.Element.polyline = function (a) {
			this.base = b.Element.PathElementBase, this.base(a), this.points = b.CreatePath(this.attribute("points").value), this.path = function (a) {
				var c = new b.BoundingBox(this.points[0].x, this.points[0].y);
				null != a && (a.beginPath(), a.moveTo(this.points[0].x, this.points[0].y));
				for (var d = 1; d < this.points.length; d++) c.addPoint(this.points[d].x, this.points[d].y), null != a && a.lineTo(this.points[d].x, this.points[d].y);
				return c
			}, this.getMarkers = function () {
				for (var a = [], b = 0; b < this.points.length - 1; b++) a.push([this.points[b], this.points[b].angleTo(this.points[b + 1])]);
				return a.push([this.points[this.points.length - 1], a[a.length - 1][1]]), a
			}
		}, b.Element.polyline.prototype = new b.Element.PathElementBase, b.Element.polygon = function (a) {
			this.base = b.Element.polyline, this.base(a), this.basePath = this.path, this.path = function (a) {
				var b = this.basePath(a);
				return null != a && (a.lineTo(this.points[0].x, this.points[0].y), a.closePath()), b
			}
		}, b.Element.polygon.prototype = new b.Element.polyline, b.Element.path = function (a) {
			this.base = b.Element.PathElementBase, this.base(a);
			var c = this.attribute("d").value;
			c = c.replace(/,/gm, " "), c = c.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"), c = c.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"), c = c.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2"), c = c.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"), c = c.replace(/([0-9])([+\-])/gm, "$1 $2"), c = c.replace(/(\.[0-9]*)(\.)/gm, "$1 $2"), c = c.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 "), c = b.compressSpaces(c), c = b.trim(c), this.PathParser = new function (a) {
				this.tokens = a.split(" "), this.reset = function () {
					this.i = -1, this.command = "", this.previousCommand = "", this.start = new b.Point(0, 0), this.control = new b.Point(0, 0), this.current = new b.Point(0, 0), this.points = [], this.angles = []
				}, this.isEnd = function () {
					return this.i >= this.tokens.length - 1
				}, this.isCommandOrEnd = function () {
					return !!this.isEnd() || null != this.tokens[this.i + 1].match(/^[A-Za-z]$/)
				}, this.isRelativeCommand = function () {
					switch (this.command) {
						case "m":
						case "l":
						case "h":
						case "v":
						case "c":
						case "s":
						case "q":
						case "t":
						case "a":
						case "z":
							return !0
					}
					return !1
				}, this.getToken = function () {
					return this.i++, this.tokens[this.i]
				}, this.getScalar = function () {
					return parseFloat(this.getToken())
				}, this.nextCommand = function () {
					this.previousCommand = this.command, this.command = this.getToken()
				}, this.getPoint = function () {
					var a = new b.Point(this.getScalar(), this.getScalar());
					return this.makeAbsolute(a)
				}, this.getAsControlPoint = function () {
					var a = this.getPoint();
					return this.control = a, a
				}, this.getAsCurrentPoint = function () {
					var a = this.getPoint();
					return this.current = a, a
				}, this.getReflectedControlPoint = function () {
					if ("c" != this.previousCommand.toLowerCase() && "s" != this.previousCommand.toLowerCase()) return this.current;
					var a = new b.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
					return a
				}, this.makeAbsolute = function (a) {
					return this.isRelativeCommand() && (a.x += this.current.x, a.y += this.current.y), a
				}, this.addMarker = function (a, b, c) {
					null != c && this.angles.length > 0 && null == this.angles[this.angles.length - 1] && (this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(c)), this.addMarkerAngle(a, null == b ? null : b.angleTo(a))
				}, this.addMarkerAngle = function (a, b) {
					this.points.push(a), this.angles.push(b)
				}, this.getMarkerPoints = function () {
					return this.points
				}, this.getMarkerAngles = function () {
					for (var a = 0; a < this.angles.length; a++)
						if (null == this.angles[a])
							for (var b = a + 1; b < this.angles.length; b++)
								if (null != this.angles[b]) {
									this.angles[a] = this.angles[b];
									break
								}
					return this.angles
				}
			}(c), this.path = function (a) {
				var c = this.PathParser;
				c.reset();
				var d = new b.BoundingBox;
				for (null != a && a.beginPath(); !c.isEnd();) switch (c.nextCommand(), c.command) {
					case "M":
					case "m":
						var e = c.getAsCurrentPoint();
						for (c.addMarker(e), d.addPoint(e.x, e.y), null != a && a.moveTo(e.x, e.y), c.start = c.current; !c.isCommandOrEnd();) {
							var e = c.getAsCurrentPoint();
							c.addMarker(e, c.start), d.addPoint(e.x, e.y), null != a && a.lineTo(e.x, e.y)
						}
						break;
					case "L":
					case "l":
						for (; !c.isCommandOrEnd();) {
							var f = c.current,
								e = c.getAsCurrentPoint();
							c.addMarker(e, f), d.addPoint(e.x, e.y), null != a && a.lineTo(e.x, e.y)
						}
						break;
					case "H":
					case "h":
						for (; !c.isCommandOrEnd();) {
							var g = new b.Point((c.isRelativeCommand() ? c.current.x : 0) + c.getScalar(), c.current.y);
							c.addMarker(g, c.current), c.current = g, d.addPoint(c.current.x, c.current.y), null != a && a.lineTo(c.current.x, c.current.y)
						}
						break;
					case "V":
					case "v":
						for (; !c.isCommandOrEnd();) {
							var g = new b.Point(c.current.x, (c.isRelativeCommand() ? c.current.y : 0) + c.getScalar());
							c.addMarker(g, c.current), c.current = g, d.addPoint(c.current.x, c.current.y), null != a && a.lineTo(c.current.x, c.current.y)
						}
						break;
					case "C":
					case "c":
						for (; !c.isCommandOrEnd();) {
							var h = c.current,
								i = c.getPoint(),
								j = c.getAsControlPoint(),
								k = c.getAsCurrentPoint();
							c.addMarker(k, j, i), d.addBezierCurve(h.x, h.y, i.x, i.y, j.x, j.y, k.x, k.y), null != a && a.bezierCurveTo(i.x, i.y, j.x, j.y, k.x, k.y)
						}
						break;
					case "S":
					case "s":
						for (; !c.isCommandOrEnd();) {
							var h = c.current,
								i = c.getReflectedControlPoint(),
								j = c.getAsControlPoint(),
								k = c.getAsCurrentPoint();
							c.addMarker(k, j, i), d.addBezierCurve(h.x, h.y, i.x, i.y, j.x, j.y, k.x, k.y), null != a && a.bezierCurveTo(i.x, i.y, j.x, j.y, k.x, k.y)
						}
						break;
					case "Q":
					case "q":
						for (; !c.isCommandOrEnd();) {
							var h = c.current,
								j = c.getAsControlPoint(),
								k = c.getAsCurrentPoint();
							c.addMarker(k, j, j), d.addQuadraticCurve(h.x, h.y, j.x, j.y, k.x, k.y), null != a && a.quadraticCurveTo(j.x, j.y, k.x, k.y)
						}
						break;
					case "T":
					case "t":
						for (; !c.isCommandOrEnd();) {
							var h = c.current,
								j = c.getReflectedControlPoint();
							c.control = j;
							var k = c.getAsCurrentPoint();
							c.addMarker(k, j, j), d.addQuadraticCurve(h.x, h.y, j.x, j.y, k.x, k.y), null != a && a.quadraticCurveTo(j.x, j.y, k.x, k.y)
						}
						break;
					case "A":
					case "a":
						for (; !c.isCommandOrEnd();) {
							var h = c.current,
								l = c.getScalar(),
								m = c.getScalar(),
								n = c.getScalar() * (Math.PI / 180),
								o = c.getScalar(),
								p = c.getScalar(),
								k = c.getAsCurrentPoint(),
								q = new b.Point(Math.cos(n) * (h.x - k.x) / 2 + Math.sin(n) * (h.y - k.y) / 2, -Math.sin(n) * (h.x - k.x) / 2 + Math.cos(n) * (h.y - k.y) / 2),
								r = Math.pow(q.x, 2) / Math.pow(l, 2) + Math.pow(q.y, 2) / Math.pow(m, 2);
							r > 1 && (l *= Math.sqrt(r), m *= Math.sqrt(r));
							var s = (o == p ? -1 : 1) * Math.sqrt((Math.pow(l, 2) * Math.pow(m, 2) - Math.pow(l, 2) * Math.pow(q.y, 2) - Math.pow(m, 2) * Math.pow(q.x, 2)) / (Math.pow(l, 2) * Math.pow(q.y, 2) + Math.pow(m, 2) * Math.pow(q.x, 2)));
							isNaN(s) && (s = 0);
							var t = new b.Point(s * l * q.y / m, s * -m * q.x / l),
								u = new b.Point((h.x + k.x) / 2 + Math.cos(n) * t.x - Math.sin(n) * t.y, (h.y + k.y) / 2 + Math.sin(n) * t.x + Math.cos(n) * t.y),
								v = function (a) {
									return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2))
								},
								w = function (a, b) {
									return (a[0] * b[0] + a[1] * b[1]) / (v(a) * v(b))
								},
								x = function (a, b) {
									return (a[0] * b[1] < a[1] * b[0] ? -1 : 1) * Math.acos(w(a, b))
								},
								y = x([1, 0], [(q.x - t.x) / l, (q.y - t.y) / m]),
								z = [(q.x - t.x) / l, (q.y - t.y) / m],
								A = [(-q.x - t.x) / l, (-q.y - t.y) / m],
								B = x(z, A);
							w(z, A) <= -1 && (B = Math.PI), w(z, A) >= 1 && (B = 0);
							var C = 1 - p ? 1 : -1,
								D = y + C * (B / 2),
								E = new b.Point(u.x + l * Math.cos(D), u.y + m * Math.sin(D));
							if (c.addMarkerAngle(E, D - C * Math.PI / 2), c.addMarkerAngle(k, D - C * Math.PI), d.addPoint(k.x, k.y), null != a) {
								var w = l > m ? l : m,
									F = l > m ? 1 : l / m,
									G = l > m ? m / l : 1;
								a.translate(u.x, u.y), a.rotate(n), a.scale(F, G), a.arc(0, 0, w, y, y + B, 1 - p), a.scale(1 / F, 1 / G), a.rotate(-n), a.translate(-u.x, -u.y)
							}
						}
						break;
					case "Z":
					case "z":
						null != a && a.closePath(), c.current = c.start
				}
				return d
			}, this.getMarkers = function () {
				for (var a = this.PathParser.getMarkerPoints(), b = this.PathParser.getMarkerAngles(), c = [], d = 0; d < a.length; d++) c.push([a[d], b[d]]);
				return c
			}
		}, b.Element.path.prototype = new b.Element.PathElementBase, b.Element.pattern = function (a) {
			this.base = b.Element.ElementBase, this.base(a), this.createPattern = function (a, c) {
				var d = this.attribute("width").toPixels("x", !0),
					e = this.attribute("height").toPixels("y", !0),
					f = new b.Element.svg;
				f.attributes.viewBox = new b.Property("viewBox", this.attribute("viewBox").value), f.attributes.width = new b.Property("width", d + "px"), f.attributes.height = new b.Property("height", e + "px"), f.attributes.transform = new b.Property("transform", this.attribute("patternTransform").value), f.children = this.children;
				var g = document.createElement("canvas");
				g.width = d, g.height = e;
				var h = g.getContext("2d");
				this.attribute("x").hasValue() && this.attribute("y").hasValue() && h.translate(this.attribute("x").toPixels("x", !0), this.attribute("y").toPixels("y", !0));
				for (var i = -1; i <= 1; i++)
					for (var j = -1; j <= 1; j++) h.save(), h.translate(i * g.width, j * g.height), f.render(h), h.restore();
				var k = a.createPattern(g, "repeat");
				return k
			}
		}, b.Element.pattern.prototype = new b.Element.ElementBase, b.Element.marker = function (a) {
			this.base = b.Element.ElementBase, this.base(a), this.baseRender = this.render, this.render = function (a, c, d) {
				a.translate(c.x, c.y), "auto" == this.attribute("orient").valueOrDefault("auto") && a.rotate(d), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && a.scale(a.lineWidth, a.lineWidth), a.save();
				var e = new b.Element.svg;
				e.attributes.viewBox = new b.Property("viewBox", this.attribute("viewBox").value), e.attributes.refX = new b.Property("refX", this.attribute("refX").value), e.attributes.refY = new b.Property("refY", this.attribute("refY").value), e.attributes.width = new b.Property("width", this.attribute("markerWidth").value), e.attributes.height = new b.Property("height", this.attribute("markerHeight").value), e.attributes.fill = new b.Property("fill", this.attribute("fill").valueOrDefault("black")), e.attributes.stroke = new b.Property("stroke", this.attribute("stroke").valueOrDefault("none")), e.children = this.children, e.render(a), a.restore(), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && a.scale(1 / a.lineWidth, 1 / a.lineWidth), "auto" == this.attribute("orient").valueOrDefault("auto") && a.rotate(-d), a.translate(-c.x, -c.y)
			}
		}, b.Element.marker.prototype = new b.Element.ElementBase, b.Element.defs = function (a) {
			this.base = b.Element.ElementBase, this.base(a), this.render = function (a) {}
		}, b.Element.defs.prototype = new b.Element.ElementBase, b.Element.GradientBase = function (a) {
			this.base = b.Element.ElementBase, this.base(a), this.gradientUnits = this.attribute("gradientUnits").valueOrDefault("objectBoundingBox"), this.stops = [];
			for (var c = 0; c < this.children.length; c++) {
				var d = this.children[c];
				"stop" == d.type && this.stops.push(d)
			}
			this.getGradient = function () {}, this.createGradient = function (a, c, d) {
				var e = this;
				this.attribute("xlink:href").hasValue() && (e = this.attribute("xlink:href").getDefinition());
				var f = function (a) {
						if (d.hasValue()) {
							var c = new b.Property("color", a);
							return c.addOpacity(d.value).value
						}
						return a
					},
					g = this.getGradient(a, c);
				if (null == g) return f(e.stops[e.stops.length - 1].color);
				for (var h = 0; h < e.stops.length; h++) g.addColorStop(e.stops[h].offset, f(e.stops[h].color));
				if (this.attribute("gradientTransform").hasValue()) {
					var i = b.ViewPort.viewPorts[0],
						j = new b.Element.rect;
					j.attributes.x = new b.Property("x", -b.MAX_VIRTUAL_PIXELS / 3), j.attributes.y = new b.Property("y", -b.MAX_VIRTUAL_PIXELS / 3), j.attributes.width = new b.Property("width", b.MAX_VIRTUAL_PIXELS), j.attributes.height = new b.Property("height", b.MAX_VIRTUAL_PIXELS);
					var k = new b.Element.g;
					k.attributes.transform = new b.Property("transform", this.attribute("gradientTransform").value), k.children = [j];
					var l = new b.Element.svg;
					l.attributes.x = new b.Property("x", 0), l.attributes.y = new b.Property("y", 0), l.attributes.width = new b.Property("width", i.width), l.attributes.height = new b.Property("height", i.height), l.children = [k];
					var m = document.createElement("canvas");
					m.width = i.width, m.height = i.height;
					var n = m.getContext("2d");
					return n.fillStyle = g, l.render(n), n.createPattern(m, "no-repeat")
				}
				return g
			}
		}, b.Element.GradientBase.prototype = new b.Element.ElementBase, b.Element.linearGradient = function (a) {
			this.base = b.Element.GradientBase, this.base(a), this.getGradient = function (a, b) {
				var c = b.getBoundingBox();
				this.attribute("x1").hasValue() || this.attribute("y1").hasValue() || this.attribute("x2").hasValue() || this.attribute("y2").hasValue() || (this.attribute("x1", !0).value = 0, this.attribute("y1", !0).value = 0, this.attribute("x2", !0).value = 1, this.attribute("y2", !0).value = 0);
				var d = "objectBoundingBox" == this.gradientUnits ? c.x() + c.width() * this.attribute("x1").numValue() : this.attribute("x1").toPixels("x"),
					e = "objectBoundingBox" == this.gradientUnits ? c.y() + c.height() * this.attribute("y1").numValue() : this.attribute("y1").toPixels("y"),
					f = "objectBoundingBox" == this.gradientUnits ? c.x() + c.width() * this.attribute("x2").numValue() : this.attribute("x2").toPixels("x"),
					g = "objectBoundingBox" == this.gradientUnits ? c.y() + c.height() * this.attribute("y2").numValue() : this.attribute("y2").toPixels("y");
				return d == f && e == g ? null : a.createLinearGradient(d, e, f, g)
			}
		}, b.Element.linearGradient.prototype = new b.Element.GradientBase, b.Element.radialGradient = function (a) {
			this.base = b.Element.GradientBase, this.base(a), this.getGradient = function (a, b) {
				var c = b.getBoundingBox();
				this.attribute("cx").hasValue() || (this.attribute("cx", !0).value = "50%"), this.attribute("cy").hasValue() || (this.attribute("cy", !0).value = "50%"), this.attribute("r").hasValue() || (this.attribute("r", !0).value = "50%");
				var d = "objectBoundingBox" == this.gradientUnits ? c.x() + c.width() * this.attribute("cx").numValue() : this.attribute("cx").toPixels("x"),
					e = "objectBoundingBox" == this.gradientUnits ? c.y() + c.height() * this.attribute("cy").numValue() : this.attribute("cy").toPixels("y"),
					f = d,
					g = e;
				this.attribute("fx").hasValue() && (f = "objectBoundingBox" == this.gradientUnits ? c.x() + c.width() * this.attribute("fx").numValue() : this.attribute("fx").toPixels("x")), this.attribute("fy").hasValue() && (g = "objectBoundingBox" == this.gradientUnits ? c.y() + c.height() * this.attribute("fy").numValue() : this.attribute("fy").toPixels("y"));
				var h = "objectBoundingBox" == this.gradientUnits ? (c.width() + c.height()) / 2 * this.attribute("r").numValue() : this.attribute("r").toPixels();
				return a.createRadialGradient(f, g, 0, d, e, h)
			}
		}, b.Element.radialGradient.prototype = new b.Element.GradientBase, b.Element.stop = function (a) {
			this.base = b.Element.ElementBase, this.base(a), this.offset = this.attribute("offset").numValue(), this.offset < 0 && (this.offset = 0), this.offset > 1 && (this.offset = 1);
			var c = this.style("stop-color");
			this.style("stop-opacity").hasValue() && (c = c.addOpacity(this.style("stop-opacity").value)), this.color = c.value
		}, b.Element.stop.prototype = new b.Element.ElementBase, b.Element.AnimateBase = function (a) {
			this.base = b.Element.ElementBase, this.base(a), b.Animations.push(this), this.duration = 0, this.begin = this.attribute("begin").toMilliseconds(), this.maxDuration = this.begin + this.attribute("dur").toMilliseconds(), this.getProperty = function () {
				var a = this.attribute("attributeType").value,
					b = this.attribute("attributeName").value;
				return "CSS" == a ? this.parent.style(b, !0) : this.parent.attribute(b, !0)
			}, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.calcValue = function () {
				return ""
			}, this.update = function (a) {
				if (null == this.initialValue && (this.initialValue = this.getProperty().value, this.initialUnits = this.getProperty().getUnits()), this.duration > this.maxDuration) {
					if ("indefinite" != this.attribute("repeatCount").value && "indefinite" != this.attribute("repeatDur").value) return "remove" == this.attribute("fill").valueOrDefault("remove") && !this.removed && (this.removed = !0, this.getProperty().value = this.initialValue, !0);
					this.duration = 0
				}
				this.duration = this.duration + a;
				var b = !1;
				if (this.begin < this.duration) {
					var c = this.calcValue();
					if (this.attribute("type").hasValue()) {
						var d = this.attribute("type").value;
						c = d + "(" + c + ")"
					}
					this.getProperty().value = c, b = !0
				}
				return b
			}, this.from = this.attribute("from"), this.to = this.attribute("to"), this.values = this.attribute("values"), this.values.hasValue() && (this.values.value = this.values.value.split(";")), this.progress = function () {
				var a = {
					progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
				};
				if (this.values.hasValue()) {
					var c = a.progress * (this.values.value.length - 1),
						d = Math.floor(c),
						e = Math.ceil(c);
					a.from = new b.Property("from", parseFloat(this.values.value[d])), a.to = new b.Property("to", parseFloat(this.values.value[e])), a.progress = (c - d) / (e - d)
				} else a.from = this.from, a.to = this.to;
				return a
			}
		}, b.Element.AnimateBase.prototype = new b.Element.ElementBase, b.Element.animate = function (a) {
			this.base = b.Element.AnimateBase, this.base(a), this.calcValue = function () {
				var a = this.progress(),
					b = a.from.numValue() + (a.to.numValue() - a.from.numValue()) * a.progress;
				return b + this.initialUnits
			}
		}, b.Element.animate.prototype = new b.Element.AnimateBase, b.Element.animateColor = function (c) {
			this.base = b.Element.AnimateBase, this.base(c), this.calcValue = function () {
				var b = this.progress(),
					c = new a(b.from.value),
					d = new a(b.to.value);
				if (c.ok && d.ok) {
					var e = c.r + (d.r - c.r) * b.progress,
						f = c.g + (d.g - c.g) * b.progress,
						g = c.b + (d.b - c.b) * b.progress;
					return "rgb(" + parseInt(e, 10) + "," + parseInt(f, 10) + "," + parseInt(g, 10) + ")"
				}
				return this.attribute("from").value
			}
		}, b.Element.animateColor.prototype = new b.Element.AnimateBase, b.Element.animateTransform = function (a) {
			this.base = b.Element.AnimateBase, this.base(a), this.calcValue = function () {
				for (var a = this.progress(), c = b.ToNumberArray(a.from.value), d = b.ToNumberArray(a.to.value), e = "", f = 0; f < c.length; f++) e += c[f] + (d[f] - c[f]) * a.progress + " ";
				return e
			}
		}, b.Element.animateTransform.prototype = new b.Element.animate, b.Element.font = function (a) {
			this.base = b.Element.ElementBase, this.base(a), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.isRTL = !1, this.isArabic = !1, this.fontFace = null, this.missingGlyph = null, this.glyphs = [];
			for (var c = 0; c < this.children.length; c++) {
				var d = this.children[c];
				"font-face" == d.type ? (this.fontFace = d, d.style("font-family").hasValue() && (b.Definitions[d.style("font-family").value] = this)) : "missing-glyph" == d.type ? this.missingGlyph = d : "glyph" == d.type && ("" != d.arabicForm ? (this.isRTL = !0, this.isArabic = !0, "undefined" == typeof this.glyphs[d.unicode] && (this.glyphs[d.unicode] = []), this.glyphs[d.unicode][d.arabicForm] = d) : this.glyphs[d.unicode] = d)
			}
		}, b.Element.font.prototype = new b.Element.ElementBase, b.Element.fontface = function (a) {
			this.base = b.Element.ElementBase, this.base(a), this.ascent = this.attribute("ascent").value, this.descent = this.attribute("descent").value, this.unitsPerEm = this.attribute("units-per-em").numValue()
		}, b.Element.fontface.prototype = new b.Element.ElementBase, b.Element.missingglyph = function (a) {
			this.base = b.Element.path, this.base(a), this.horizAdvX = 0
		}, b.Element.missingglyph.prototype = new b.Element.path, b.Element.glyph = function (a) {
			this.base = b.Element.path, this.base(a), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.unicode = this.attribute("unicode").value, this.arabicForm = this.attribute("arabic-form").value
		}, b.Element.glyph.prototype = new b.Element.path, b.Element.text = function (a) {
			this.captureTextNodes = !0, this.base = b.Element.RenderedElementBase, this.base(a), this.baseSetContext = this.setContext, this.setContext = function (a) {
				this.baseSetContext(a), this.style("dominant-baseline").hasValue() && (a.textBaseline = this.style("dominant-baseline").value), this.style("alignment-baseline").hasValue() && (a.textBaseline = this.style("alignment-baseline").value)
			}, this.renderChildren = function (a) {
				this.textAnchor = this.style("text-anchor").valueOrDefault("start"), this.x = this.attribute("x").toPixels("x"), this.y = this.attribute("y").toPixels("y");
				for (var b = 0; b < this.children.length; b++) this.renderChild(a, this, b)
			}, this.renderChild = function (a, b, c) {
				var d = b.children[c];
				d.attribute("x").hasValue() ? d.x = d.attribute("x").toPixels("x") : (this.attribute("dx").hasValue() && (this.y += this.attribute("dx").toPixels("x")), d.attribute("dx").hasValue() && (this.x += d.attribute("dx").toPixels("x")), d.x = this.x);
				var e = d.measureText(a);
				if ("start" != this.textAnchor && (0 == c || d.attribute("x").hasValue())) {
					for (var f = e, g = c + 1; g < this.children.length; g++) {
						var h = this.children[g];
						if (h.attribute("x").hasValue()) break;
						f += h.measureText(a)
					}
					d.x -= "end" == this.textAnchor ? f : f / 2
				}
				this.x = d.x + e, d.attribute("y").hasValue() ? d.y = d.attribute("y").toPixels("y") : (this.attribute("dy").hasValue() && (this.y += this.attribute("dy").toPixels("y")), d.attribute("dy").hasValue() && (this.y += d.attribute("dy").toPixels("y")), d.y = this.y), this.y = d.y, d.render(a);
				for (var c = 0; c < d.children.length; c++) this.renderChild(a, d, c)
			}
		}, b.Element.text.prototype = new b.Element.RenderedElementBase, b.Element.TextElementBase = function (a) {
			this.base = b.Element.RenderedElementBase, this.base(a), this.getGlyph = function (a, b, c) {
				var d = b[c],
					e = null;
				if (a.isArabic) {
					var f = "isolated";
					(0 == c || " " == b[c - 1]) && c < b.length - 2 && " " != b[c + 1] && (f = "terminal"), c > 0 && " " != b[c - 1] && c < b.length - 2 && " " != b[c + 1] && (f = "medial"), c > 0 && " " != b[c - 1] && (c == b.length - 1 || " " == b[c + 1]) && (f = "initial"), "undefined" != typeof a.glyphs[d] && (e = a.glyphs[d][f], null == e && "glyph" == a.glyphs[d].type && (e = a.glyphs[d]))
				} else e = a.glyphs[d];
				return null == e && (e = a.missingGlyph), e
			}, this.renderChildren = function (a) {
				var c = this.parent.style("font-family").getDefinition();
				if (null == c) "" != a.fillStyle && a.fillText(b.compressSpaces(this.getText()), this.x, this.y), "" != a.strokeStyle && a.strokeText(b.compressSpaces(this.getText()), this.x, this.y);
				else {
					var d = this.parent.style("font-size").numValueOrDefault(b.Font.Parse(b.ctx.font).fontSize),
						e = this.parent.style("font-style").valueOrDefault(b.Font.Parse(b.ctx.font).fontStyle),
						f = this.getText();
					c.isRTL && (f = f.split("").reverse().join(""));
					for (var g = b.ToNumberArray(this.parent.attribute("dx").value), h = 0; h < f.length; h++) {
						var i = this.getGlyph(c, f, h),
							j = d / c.fontFace.unitsPerEm;
						a.translate(this.x, this.y), a.scale(j, -j);
						var k = a.lineWidth;
						a.lineWidth = a.lineWidth * c.fontFace.unitsPerEm / d, "italic" == e && a.transform(1, 0, .4, 1, 0, 0), i.render(a), "italic" == e && a.transform(1, 0, -.4, 1, 0, 0), a.lineWidth = k, a.scale(1 / j, -1 / j), a.translate(-this.x, -this.y), this.x += d * (i.horizAdvX || c.horizAdvX) / c.fontFace.unitsPerEm, "undefined" == typeof g[h] || isNaN(g[h]) || (this.x += g[h])
					}
				}
			}, this.getText = function () {}, this.measureText = function (a) {
				var c = this.parent.style("font-family").getDefinition();
				if (null != c) {
					var d = this.parent.style("font-size").numValueOrDefault(b.Font.Parse(b.ctx.font).fontSize),
						e = 0,
						f = this.getText();
					c.isRTL && (f = f.split("").reverse().join(""));
					for (var g = b.ToNumberArray(this.parent.attribute("dx").value), h = 0; h < f.length; h++) {
						var i = this.getGlyph(c, f, h);
						e += (i.horizAdvX || c.horizAdvX) * d / c.fontFace.unitsPerEm, "undefined" == typeof g[h] || isNaN(g[h]) || (e += g[h])
					}
					return e
				}
				var j = b.compressSpaces(this.getText());
				if (!a.measureText) return 10 * j.length;
				a.save(), this.setContext(a);
				var k = a.measureText(j).width;
				return a.restore(), k
			}
		}, b.Element.TextElementBase.prototype = new b.Element.RenderedElementBase, b.Element.tspan = function (a) {
			this.captureTextNodes = !0, this.base = b.Element.TextElementBase, this.base(a), this.text = a.nodeValue || a.text || "", this.getText = function () {
				return this.text
			}
		}, b.Element.tspan.prototype = new b.Element.TextElementBase, b.Element.tref = function (a) {
			this.base = b.Element.TextElementBase, this.base(a), this.getText = function () {
				var a = this.attribute("xlink:href").getDefinition();
				if (null != a) return a.children[0].getText()
			}
		}, b.Element.tref.prototype = new b.Element.TextElementBase, b.Element.a = function (a) {
			this.base = b.Element.TextElementBase, this.base(a), this.hasText = !0;
			for (var c = 0; c < a.childNodes.length; c++) 3 != a.childNodes[c].nodeType && (this.hasText = !1);
			this.text = this.hasText ? a.childNodes[0].nodeValue : "", this.getText = function () {
				return this.text
			}, this.baseRenderChildren = this.renderChildren, this.renderChildren = function (a) {
				if (this.hasText) {
					this.baseRenderChildren(a);
					var c = new b.Property("fontSize", b.Font.Parse(b.ctx.font).fontSize);
					b.Mouse.checkBoundingBox(this, new b.BoundingBox(this.x, this.y - c.toPixels("y"), this.x + this.measureText(a), this.y))
				} else {
					var d = new b.Element.g;
					d.children = this.children, d.parent = this, d.render(a)
				}
			}, this.onclick = function () {
				window.open(this.attribute("xlink:href").value)
			}, this.onmousemove = function () {
				b.ctx.canvas.style.cursor = "pointer"
			}
		}, b.Element.a.prototype = new b.Element.TextElementBase, b.Element.image = function (a) {
			this.base = b.Element.RenderedElementBase, this.base(a);
			var c = this.attribute("xlink:href").value,
				d = c.match(/\.svg$/);
			if (b.Images.push(this), this.loaded = !1, d) this.img = b.ajax(c), this.loaded = !0;
			else {
				this.img = document.createElement("img");
				var e = this;
				this.img.onload = function () {
					e.loaded = !0
				}, this.img.onerror = function () {
					console && console.log('ERROR: image "' + c + '" not found'), e.loaded = !0
				}, this.img.src = c
			}
			this.renderChildren = function (a) {
				var c = this.attribute("x").toPixels("x"),
					e = this.attribute("y").toPixels("y"),
					f = this.attribute("width").toPixels("x"),
					g = this.attribute("height").toPixels("y");
				0 != f && 0 != g && (a.save(), d ? a.drawSvg(this.img, c, e, f, g) : (a.translate(c, e), b.AspectRatio(a, this.attribute("preserveAspectRatio").value, f, this.img.width, g, this.img.height, 0, 0), a.drawImage(this.img, 0, 0)), a.restore())
			}, this.getBoundingBox = function () {
				var a = this.attribute("x").toPixels("x"),
					c = this.attribute("y").toPixels("y"),
					d = this.attribute("width").toPixels("x"),
					e = this.attribute("height").toPixels("y");
				return new b.BoundingBox(a, c, a + d, c + e)
			}
		}, b.Element.image.prototype = new b.Element.RenderedElementBase, b.Element.g = function (a) {
			this.base = b.Element.RenderedElementBase, this.base(a), this.getBoundingBox = function () {
				for (var a = new b.BoundingBox, c = 0; c < this.children.length; c++) a.addBoundingBox(this.children[c].getBoundingBox());
				return a
			}
		}, b.Element.g.prototype = new b.Element.RenderedElementBase, b.Element.symbol = function (a) {
			this.base = b.Element.RenderedElementBase, this.base(a), this.baseSetContext = this.setContext, this.setContext = function (a) {
				if (this.baseSetContext(a), this.attribute("viewBox").hasValue()) {
					var c = b.ToNumberArray(this.attribute("viewBox").value),
						d = c[0],
						e = c[1];
					width = c[2], height = c[3], b.AspectRatio(a, this.attribute("preserveAspectRatio").value, this.attribute("width").toPixels("x"), width, this.attribute("height").toPixels("y"), height, d, e), b.ViewPort.SetCurrent(c[2], c[3])
				}
			}
		}, b.Element.symbol.prototype = new b.Element.RenderedElementBase, b.Element.style = function (a) {
			this.base = b.Element.ElementBase, this.base(a);
			for (var c = "", d = 0; d < a.childNodes.length; d++) c += a.childNodes[d].nodeValue;
			c = c.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ""), c = b.compressSpaces(c);
			for (var e = c.split("}"), d = 0; d < e.length; d++)
				if ("" != b.trim(e[d]))
					for (var f = e[d].split("{"), g = f[0].split(","), h = f[1].split(";"), i = 0; i < g.length; i++) {
						var j = b.trim(g[i]);
						if ("" != j) {
							for (var k = {}, l = 0; l < h.length; l++) {
								var m = h[l].indexOf(":"),
									n = h[l].substr(0, m),
									o = h[l].substr(m + 1, h[l].length - m);
								null != n && null != o && (k[b.trim(n)] = new b.Property(b.trim(n), b.trim(o)))
							}
							if (b.Styles[j] = k, "@font-face" == j)
								for (var p = k["font-family"].value.replace(/"/g, ""), q = k.src.value.split(","), r = 0; r < q.length; r++)
									if (q[r].indexOf('format("svg")') > 0)
										for (var s = q[r].indexOf("url"), t = q[r].indexOf(")", s), u = q[r].substr(s + 5, t - s - 6), v = b.parseXml(b.ajax(u)), w = v.getElementsByTagName("font"), x = 0; x < w.length; x++) {
											var y = b.CreateElement(w[x]);
											b.Definitions[p] = y
										}
						}
					}
		}, b.Element.style.prototype = new b.Element.ElementBase, b.Element.use = function (a) {
			this.base = b.Element.RenderedElementBase, this.base(a), this.baseSetContext = this.setContext, this.setContext = function (a) {
				this.baseSetContext(a), this.attribute("x").hasValue() && a.translate(this.attribute("x").toPixels("x"), 0), this.attribute("y").hasValue() && a.translate(0, this.attribute("y").toPixels("y"))
			}, this.getDefinition = function () {
				var a = this.attribute("xlink:href").getDefinition();
				return this.attribute("width").hasValue() && (a.attribute("width", !0).value = this.attribute("width").value), this.attribute("height").hasValue() && (a.attribute("height", !0).value = this.attribute("height").value), a
			}, this.path = function (a) {
				var b = this.getDefinition();
				null != b && b.path(a)
			}, this.renderChildren = function (a) {
				var b = this.getDefinition();
				if (null != b) {
					var c = b.parent;
					b.parent = null, b.render(a), b.parent = c
				}
			}
		}, b.Element.use.prototype = new b.Element.RenderedElementBase, b.Element.mask = function (a) {
			this.base = b.Element.ElementBase, this.base(a), this.apply = function (a, b) {
				var c = this.attribute("x").toPixels("x"),
					d = this.attribute("y").toPixels("y"),
					e = this.attribute("width").toPixels("x"),
					f = this.attribute("height").toPixels("y"),
					g = b.attribute("mask").value;
				b.attribute("mask").value = "";
				var h = document.createElement("canvas");
				h.width = c + e, h.height = d + f;
				var i = h.getContext("2d");
				this.renderChildren(i);
				var j = document.createElement("canvas");
				j.width = c + e, j.height = d + f;
				var k = j.getContext("2d");
				b.render(k), k.globalCompositeOperation = "destination-in", k.fillStyle = i.createPattern(h, "no-repeat"), k.fillRect(0, 0, c + e, d + f), a.fillStyle = k.createPattern(j, "no-repeat"), a.fillRect(0, 0, c + e, d + f), b.attribute("mask").value = g
			}, this.render = function (a) {}
		}, b.Element.mask.prototype = new b.Element.ElementBase, b.Element.clipPath = function (a) {
			this.base = b.Element.ElementBase, this.base(a), this.apply = function (a) {
				for (var b = 0; b < this.children.length; b++) this.children[b].path && (this.children[b].path(a), a.clip())
			}, this.render = function (a) {}
		}, b.Element.clipPath.prototype = new b.Element.ElementBase, b.Element.filter = function (a) {
			this.base = b.Element.ElementBase, this.base(a), this.apply = function (a, b) {
				var c = b.getBoundingBox(),
					d = this.attribute("x").toPixels("x"),
					e = this.attribute("y").toPixels("y");
				"image" != b.type && 0 != d && 0 != e || (d = c.x1, e = c.y1);
				var f = this.attribute("width").toPixels("x"),
					g = this.attribute("height").toPixels("y");
				"image" != b.type && 0 != f && 0 != g || (f = c.width(), g = c.height());
				var h = b.style("filter").value;
				b.style("filter").value = "";
				var i = "image" == b.type ? 0 : .2,
					j = i * f,
					k = i * g,
					l = document.createElement("canvas");
				l.width = f + 2 * j, l.height = g + 2 * k;
				var m = l.getContext("2d");
				m.translate(-d + j, -e + k), b.render(m);
				for (var n = 0; n < this.children.length; n++) this.children[n].apply(m, 0, 0, f + 2 * j, g + 2 * k);
				a.drawImage(l, 0, 0, f + 2 * j, g + 2 * k, d - j, e - k, f + 2 * j, g + 2 * k), b.style("filter", !0).value = h
			}, this.render = function (a) {}
		}, b.Element.filter.prototype = new b.Element.ElementBase, b.Element.feColorMatrix = function (a) {
			function c(a, b, c, d, e, f) {
				return a[c * d * 4 + 4 * b + f]
			}

			function d(a, b, c, d, e, f, g) {
				a[c * d * 4 + 4 * b + f] = g
			}
			this.base = b.Element.ElementBase, this.base(a), this.apply = function (a, b, e, f, g) {
				for (var h = a.getImageData(0, 0, f, g), e = 0; e < g; e++)
					for (var b = 0; b < f; b++) {
						var i = c(h.data, b, e, f, g, 0),
							j = c(h.data, b, e, f, g, 1),
							k = c(h.data, b, e, f, g, 2),
							l = (i + j + k) / 3;
						d(h.data, b, e, f, g, 0, l), d(h.data, b, e, f, g, 1, l), d(h.data, b, e, f, g, 2, l)
					}
				a.clearRect(0, 0, f, g), a.putImageData(h, 0, 0)
			}
		}, b.Element.filter.prototype = new b.Element.feColorMatrix, b.Element.feGaussianBlur = function (a) {
			function c(a) {
				a = Math.max(a, .01);
				var b = Math.ceil(4 * a) + 1;
				mask = [];
				for (var c = 0; c < b; c++) mask[c] = Math.exp(-.5 * (c / a) * (c / a));
				return mask
			}

			function d(a) {
				for (var b = 0, c = 1; c < a.length; c++) b += Math.abs(a[c]);
				b = 2 * b + Math.abs(a[0]);
				for (var c = 0; c < a.length; c++) a[c] /= b;
				return a
			}

			function e(a, b, c, d, e) {
				for (var h = 0; h < e; h++)
					for (var i = 0; i < d; i++)
						for (var j = f(a, i, h, d, e, 3) / 255, k = 0; k < 4; k++) {
							for (var l = c[0] * (0 == j ? 255 : f(a, i, h, d, e, k)) * (0 == j || 3 == k ? 1 : j), m = 1; m < c.length; m++) {
								var n = f(a, Math.max(i - m, 0), h, d, e, 3) / 255,
									o = f(a, Math.min(i + m, d - 1), h, d, e, 3) / 255;
								l += c[m] * ((0 == n ? 255 : f(a, Math.max(i - m, 0), h, d, e, k)) * (0 == n || 3 == k ? 1 : n) + (0 == o ? 255 : f(a, Math.min(i + m, d - 1), h, d, e, k)) * (0 == o || 3 == k ? 1 : o))
							}
							g(b, h, i, e, d, k, l)
						}
			}

			function f(a, b, c, d, e, f) {
				return a[c * d * 4 + 4 * b + f]
			}

			function g(a, b, c, d, e, f, g) {
				a[c * d * 4 + 4 * b + f] = g
			}

			function h(a, b, f, g) {
				var h = a.getImageData(0, 0, b, f),
					i = c(g);
				i = d(i), tmp = [], e(h.data, tmp, i, b, f), e(tmp, h.data, i, f, b), a.clearRect(0, 0, b, f), a.putImageData(h, 0, 0)
			}
			this.base = b.Element.ElementBase, this.base(a), this.apply = function (a, b, c, d, e) {
				h(a, d, e, this.attribute("stdDeviation").numValue())
			}
		}, b.Element.filter.prototype = new b.Element.feGaussianBlur, b.Element.title = function (a) {}, b.Element.title.prototype = new b.Element.ElementBase, b.Element.desc = function (a) {}, b.Element.desc.prototype = new b.Element.ElementBase, b.Element.MISSING = function (a) {
			console && console.log("ERROR: Element '" + a.nodeName + "' not yet implemented.")
		}, b.Element.MISSING.prototype = new b.Element.ElementBase, b.CreateElement = function (a) {
			var c = a.nodeName.replace(/^[^:]+:/, "");
			c = c.replace(/\-/g, "");
			var d = null;
			return d = "undefined" != typeof b.Element[c] ? new b.Element[c](a) : new b.Element.MISSING(a), d.type = a.nodeName, d
		}, b.load = function (a, c) {
			b.loadXml(a, b.ajax(c))
		}, b.loadXml = function (a, c) {
			b.loadXmlDoc(a, b.parseXml(c))
		}, b.loadXmlDoc = function (a, c) {
			b.init(a);
			var d = function (b) {
				for (var c = a.canvas; c;) b.x -= c.offsetLeft, b.y -= c.offsetTop, c = c.offsetParent;
				return window.scrollX && (b.x += window.scrollX), window.scrollY && (b.y += window.scrollY), b
			};
			1 != b.opts.ignoreMouse && (a.canvas.onclick = function (a) {
				var c = d(new b.Point(null != a ? a.clientX : event.clientX, null != a ? a.clientY : event.clientY));
				b.Mouse.onclick(c.x, c.y)
			}, a.canvas.onmousemove = function (a) {
				var c = d(new b.Point(null != a ? a.clientX : event.clientX, null != a ? a.clientY : event.clientY));
				b.Mouse.onmousemove(c.x, c.y)
			});
			var e = b.CreateElement(c.documentElement);
			e.root = !0;
			var f = !0,
				g = function () {
					b.ViewPort.Clear(), a.canvas.parentNode && b.ViewPort.SetCurrent(a.canvas.parentNode.clientWidth, a.canvas.parentNode.clientHeight), 1 != b.opts.ignoreDimensions && (e.style("width").hasValue() && (a.canvas.width = e.style("width").toPixels("x"), a.canvas.style.width = a.canvas.width + "px"), e.style("height").hasValue() && (a.canvas.height = e.style("height").toPixels("y"), a.canvas.style.height = a.canvas.height + "px"));
					var c = a.canvas.clientWidth || a.canvas.width,
						d = a.canvas.clientHeight || a.canvas.height;
					if (1 == b.opts.ignoreDimensions && e.style("width").hasValue() && e.style("height").hasValue() && (c = e.style("width").toPixels("x"), d = e.style("height").toPixels("y")), b.ViewPort.SetCurrent(c, d), null != b.opts.offsetX && (e.attribute("x", !0).value = b.opts.offsetX), null != b.opts.offsetY && (e.attribute("y", !0).value = b.opts.offsetY), null != b.opts.scaleWidth && null != b.opts.scaleHeight) {
						var g = 1,
							h = 1,
							i = b.ToNumberArray(e.attribute("viewBox").value);
						e.attribute("width").hasValue() ? g = e.attribute("width").toPixels("x") / b.opts.scaleWidth : isNaN(i[2]) || (g = i[2] / b.opts.scaleWidth), e.attribute("height").hasValue() ? h = e.attribute("height").toPixels("y") / b.opts.scaleHeight : isNaN(i[3]) || (h = i[3] / b.opts.scaleHeight), e.attribute("width", !0).value = b.opts.scaleWidth, e.attribute("height", !0).value = b.opts.scaleHeight, e.attribute("viewBox", !0).value = "0 0 " + c * g + " " + d * h, e.attribute("preserveAspectRatio", !0).value = "none"
					}
					1 != b.opts.ignoreClear && a.clearRect(0, 0, c, d), e.render(a), f && (f = !1, "function" == typeof b.opts.renderCallback && b.opts.renderCallback())
				},
				h = !0;
			b.ImagesLoaded() && (h = !1, g()), b.intervalID = setInterval(function () {
				var a = !1;
				if (h && b.ImagesLoaded() && (h = !1, a = !0), 1 != b.opts.ignoreMouse && (a |= b.Mouse.hasEvents()), 1 != b.opts.ignoreAnimation)
					for (var c = 0; c < b.Animations.length; c++) a |= b.Animations[c].update(1e3 / b.FRAMERATE);
				"function" == typeof b.opts.forceRedraw && 1 == b.opts.forceRedraw() && (a = !0), a && (g(), b.Mouse.runEvents())
			}, 1e3 / b.FRAMERATE)
		}, b.stop = function () {
			b.intervalID && clearInterval(b.intervalID)
		}, b.Mouse = new function () {
			this.events = [], this.hasEvents = function () {
				return 0 != this.events.length
			}, this.onclick = function (a, b) {
				this.events.push({
					type: "onclick",
					x: a,
					y: b,
					run: function (a) {
						a.onclick && a.onclick()
					}
				})
			}, this.onmousemove = function (a, b) {
				this.events.push({
					type: "onmousemove",
					x: a,
					y: b,
					run: function (a) {
						a.onmousemove && a.onmousemove()
					}
				})
			}, this.eventElements = [], this.checkPath = function (a, b) {
				for (var c = 0; c < this.events.length; c++) {
					var d = this.events[c];
					b.isPointInPath && b.isPointInPath(d.x, d.y) && (this.eventElements[c] = a)
				}
			}, this.checkBoundingBox = function (a, b) {
				for (var c = 0; c < this.events.length; c++) {
					var d = this.events[c];
					b.isPointInBox(d.x, d.y) && (this.eventElements[c] = a)
				}
			}, this.runEvents = function () {
				b.ctx.canvas.style.cursor = "";
				for (var a = 0; a < this.events.length; a++)
					for (var c = this.events[a], d = this.eventElements[a]; d;) c.run(d), d = d.parent;
				this.events = [], this.eventElements = []
			}
		}, b
	}
	this.canvg = function (a, c, d) {
		if (null != a || null != c || null != d) {
			d = d || {}, "string" == typeof a && (a = document.getElementById(a)), null != a.svg && a.svg.stop();
			var e = b();
			1 == a.childNodes.length && "OBJECT" == a.childNodes[0].nodeName || (a.svg = e), e.opts = d;
			var f = a.getContext("2d");
			"undefined" != typeof c.documentElement ? e.loadXmlDoc(f, c) : "<" == c.substr(0, 1) ? e.loadXml(f, c) : e.load(f, c)
		} else
			for (var g = document.getElementsByTagName("svg"), h = 0; h < g.length; h++) {
				var i = g[h],
					j = document.createElement("canvas");
				j.width = i.clientWidth, j.height = i.clientHeight, i.parentNode.insertBefore(j, i), i.parentNode.removeChild(i);
				var k = document.createElement("div");
				k.appendChild(i), canvg(j, k.innerHTML)
			}
	}
}(), window.CanvasRenderingContext2D && (CanvasRenderingContext2D.prototype.drawSvg = function (a, b, c, d, e) {
		canvg(this.canvas, a, {
			ignoreMouse: !0,
			ignoreAnimation: !0,
			ignoreDimensions: !0,
			ignoreClear: !0,
			offsetX: b,
			offsetY: c,
			scaleWidth: d,
			scaleHeight: e
		})
	}),
	function (a, b) {
		var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
		c = function (a) {
				return new c.prototype.init(a)
			}, "undefined" != typeof require && "undefined" != typeof exports && "undefined" != typeof module ? module.exports = c : a.Globalize = c, c.cultures = {}, c.prototype = {
				constructor: c,
				init: function (a) {
					return this.cultures = c.cultures, this.cultureSelector = a, this
				}
			}, c.prototype.init.prototype = c.prototype, c.cultures["default"] = {
				name: "en",
				englishName: "English",
				nativeName: "English",
				isRTL: !1,
				language: "en",
				numberFormat: {
					pattern: ["-n"],
					decimals: 2,
					",": ",",
					".": ".",
					groupSizes: [3],
					"+": "+",
					"-": "-",
					NaN: "NaN",
					negativeInfinity: "-Infinity",
					positiveInfinity: "Infinity",
					percent: {
						pattern: ["-n %", "n %"],
						decimals: 2,
						groupSizes: [3],
						",": ",",
						".": ".",
						symbol: "%"
					},
					currency: {
						pattern: ["($n)", "$n"],
						decimals: 2,
						groupSizes: [3],
						",": ",",
						".": ".",
						symbol: "$"
					}
				},
				calendars: {
					standard: {
						name: "Gregorian_USEnglish",
						"/": "/",
						":": ":",
						firstDay: 0,
						days: {
							names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
							namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
							namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
						},
						months: {
							names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
							namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
						},
						AM: ["AM", "am", "AM"],
						PM: ["PM", "pm", "PM"],
						eras: [{
							name: "A.D.",
							start: null,
							offset: 0
						}],
						twoDigitYearMax: 2029,
						patterns: {
							d: "M/d/yyyy",
							D: "dddd, MMMM dd, yyyy",
							t: "h:mm tt",
							T: "h:mm:ss tt",
							f: "dddd, MMMM dd, yyyy h:mm tt",
							F: "dddd, MMMM dd, yyyy h:mm:ss tt",
							M: "MMMM dd",
							Y: "yyyy MMMM",
							S: "yyyy'-'MM'-'dd'T'HH':'mm':'ss"
						}
					}
				},
				messages: {}
			}, c.cultures["default"].calendar = c.cultures["default"].calendars.standard, c.cultures.en = c.cultures["default"], c.cultureSelector = "en", d = /^0x[a-f0-9]+$/i, e = /^[+\-]?infinity$/i, f = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/, g = /^\s+|\s+$/g, h = function (a, b) {
				if (a.indexOf) return a.indexOf(b);
				for (var c = 0, d = a.length; c < d; c++)
					if (a[c] === b) return c;
				return -1
			}, i = function (a, b) {
				return a.substr(a.length - b.length) === b
			}, j = function () {
				var a, c, d, e, f, g, h = arguments[0] || {},
					i = 1,
					n = arguments.length,
					o = !1;
				for ("boolean" == typeof h && (o = h, h = arguments[1] || {}, i = 2), "object" == typeof h || l(h) || (h = {}); i < n; i++)
					if (null != (a = arguments[i]))
						for (c in a) d = h[c], e = a[c], h !== e && (o && e && (m(e) || (f = k(e))) ? (f ? (f = !1, g = d && k(d) ? d : []) : g = d && m(d) ? d : {}, h[c] = j(o, g, e)) : e !== b && (h[c] = e));
				return h
			}, k = Array.isArray || function (a) {
				return "[object Array]" === Object.prototype.toString.call(a)
			}, l = function (a) {
				return "[object Function]" === Object.prototype.toString.call(a)
			}, m = function (a) {
				return "[object Object]" === Object.prototype.toString.call(a)
			}, n = function (a, b) {
				return 0 === a.indexOf(b)
			}, o = function (a) {
				return (a + "").replace(g, "")
			}, p = function (a) {
				return isNaN(a) ? NaN : Math[a < 0 ? "ceil" : "floor"](a)
			}, q = function (a, b, c) {
				var d;
				for (d = a.length; d < b; d += 1) a = c ? "0" + a : a + "0";
				return a
			}, r = function (a, b) {
				for (var c = 0, d = !1, e = 0, f = a.length; e < f; e++) {
					var g = a.charAt(e);
					switch (g) {
						case "'":
							d ? b.push("'") : c++, d = !1;
							break;
						case "\\":
							d && b.push("\\"), d = !d;
							break;
						default:
							b.push(g), d = !1
					}
				}
				return c
			}, s = function (a, b) {
				b = b || "F";
				var c, d = a.patterns,
					e = b.length;
				if (1 === e) {
					if (c = d[b], !c) throw "Invalid date format string '" + b + "'.";
					b = c
				} else 2 === e && "%" === b.charAt(0) && (b = b.charAt(1));
				return b
			}, t = function (a, b, c) {
				function d(a, b) {
					var c, d = a + "";
					return b > 1 && d.length < b ? (c = u[b - 2] + d, c.substr(c.length - b, b)) : c = d
				}

				function e() {
					return o || p ? o : (o = y.test(b), p = !0, o)
				}

				function f(a, b) {
					if (q) return q[b];
					switch (b) {
						case 0:
							return a.getFullYear();
						case 1:
							return a.getMonth();
						case 2:
							return a.getDate();
						default:
							throw "Invalid part value " + b
					}
				}
				var g, h = c.calendar,
					i = h.convert;
				if (!b || !b.length || "i" === b) {
					if (c && c.name.length)
						if (i) g = t(a, h.patterns.F, c);
						else {
							var j = new Date(a.getTime()),
								k = w(a, h.eras);
							j.setFullYear(x(a, h, k)), g = j.toLocaleString()
						}
					else g = a.toString();
					return g
				}
				var l = h.eras,
					m = "s" === b;
				b = s(h, b), g = [];
				var n, o, p, q, u = ["0", "00", "000"],
					y = /([^d]|^)(d|dd)([^d]|$)/g,
					z = 0,
					A = v();
				for (!m && i && (q = i.fromGregorian(a));;) {
					var B = A.lastIndex,
						C = A.exec(b),
						D = b.slice(B, C ? C.index : b.length);
					if (z += r(D, g), !C) break;
					if (z % 2) g.push(C[0]);
					else {
						var E = C[0],
							F = E.length;
						switch (E) {
							case "ddd":
							case "dddd":
								var G = 3 === F ? h.days.namesAbbr : h.days.names;
								g.push(G[a.getDay()]);
								break;
							case "d":
							case "dd":
								o = !0, g.push(d(f(a, 2), F));
								break;
							case "MMM":
							case "MMMM":
								var H = f(a, 1);
								g.push(h.monthsGenitive && e() ? h.monthsGenitive[3 === F ? "namesAbbr" : "names"][H] : h.months[3 === F ? "namesAbbr" : "names"][H]);
								break;
							case "M":
							case "MM":
								g.push(d(f(a, 1) + 1, F));
								break;
							case "y":
							case "yy":
							case "yyyy":
								H = q ? q[0] : x(a, h, w(a, l), m), F < 4 && (H %= 100), g.push(d(H, F));
								break;
							case "h":
							case "hh":
								n = a.getHours() % 12, 0 === n && (n = 12), g.push(d(n, F));
								break;
							case "H":
							case "HH":
								g.push(d(a.getHours(), F));
								break;
							case "m":
							case "mm":
								g.push(d(a.getMinutes(), F));
								break;
							case "s":
							case "ss":
								g.push(d(a.getSeconds(), F));
								break;
							case "t":
							case "tt":
								H = a.getHours() < 12 ? h.AM ? h.AM[0] : " " : h.PM ? h.PM[0] : " ", g.push(1 === F ? H.charAt(0) : H);
								break;
							case "f":
							case "ff":
							case "fff":
								g.push(d(a.getMilliseconds(), 3).substr(0, F));
								break;
							case "z":
							case "zz":
								n = a.getTimezoneOffset() / 60, g.push((n <= 0 ? "+" : "-") + d(Math.floor(Math.abs(n)), F));
								break;
							case "zzz":
								n = a.getTimezoneOffset() / 60, g.push((n <= 0 ? "+" : "-") + d(Math.floor(Math.abs(n)), 2) + ":" + d(Math.abs(a.getTimezoneOffset() % 60), 2));
								break;
							case "g":
							case "gg":
								h.eras && g.push(h.eras[w(a, l)].name);
								break;
							case "/":
								g.push(h["/"]);
								break;
							default:
								throw "Invalid date format pattern '" + E + "'."
						}
					}
				}
				return g.join("")
			},
			function () {
				var a;
				a = function (a, b, c) {
					var d = c.groupSizes,
						e = d[0],
						f = 1,
						g = Math.pow(10, b),
						h = Math.round(a * g) / g;
					isFinite(h) || (h = a), a = h;
					var i = a + "",
						j = "",
						k = i.split(/e/i),
						l = k.length > 1 ? parseInt(k[1], 10) : 0;
					i = k[0], k = i.split("."), i = k[0], j = k.length > 1 ? k[1] : "";
					l > 0 ? (j = q(j, l, !1), i += j.slice(0, l), j = j.substr(l)) : l < 0 && (l = -l, i = q(i, l + 1, !0), j = i.slice(-l, i.length) + j, i = i.slice(0, -l)), j = b > 0 ? c["."] + (j.length > b ? j.slice(0, b) : q(j, b)) : "";
					for (var m = i.length - 1, n = c[","], o = ""; m >= 0;) {
						if (0 === e || e > m) return i.slice(0, m + 1) + (o.length ? n + o + j : j);
						o = i.slice(m - e + 1, m + 1) + (o.length ? n + o : ""), m -= e, f < d.length && (e = d[f], f++)
					}
					return i.slice(0, m + 1) + n + o + j
				}, u = function (b, c, d) {
					if (!isFinite(b)) return b === 1 / 0 ? d.numberFormat.positiveInfinity : b === -(1 / 0) ? d.numberFormat.negativeInfinity : d.numberFormat.NaN;
					if (!c || "i" === c) return d.name.length ? b.toLocaleString() : b.toString();
					c = c || "D";
					var e, f = d.numberFormat,
						g = Math.abs(b),
						h = -1;
					c.length > 1 && (h = parseInt(c.slice(1), 10));
					var i, j = c.charAt(0).toUpperCase();
					switch (j) {
						case "D":
							e = "n", g = p(g), h !== -1 && (g = q("" + g, h, !0)), b < 0 && (g = "-" + g);
							break;
						case "N":
							i = f;
						case "C":
							i = i || f.currency;
						case "P":
							i = i || f.percent, e = b < 0 ? i.pattern[0] : i.pattern[1] || "n", h === -1 && (h = i.decimals), g = a(g * ("P" === j ? 100 : 1), h, i);
							break;
						default:
							throw "Bad number format specifier: " + j
					}
					for (var k = /n|\$|-|%/g, l = "";;) {
						var m = k.lastIndex,
							n = k.exec(e);
						if (l += e.slice(m, n ? n.index : e.length), !n) break;
						switch (n[0]) {
							case "n":
								l += g;
								break;
							case "$":
								l += f.currency.symbol;
								break;
							case "-":
								/[1-9]/.test(g) && (l += f["-"]);
								break;
							case "%":
								l += f.percent.symbol
						}
					}
					return l
				}
			}(), v = function () {
				return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g
			}, w = function (a, b) {
				if (!b) return 0;
				for (var c, d = a.getTime(), e = 0, f = b.length; e < f; e++)
					if (c = b[e].start, null === c || d >= c) return e;
				return 0
			}, x = function (a, b, c, d) {
				var e = a.getFullYear();
				return !d && b.eras && (e -= b.eras[c].offset), e
			},
			function () {
				var a, b, c, d, e, f, g;
				a = function (a, b) {
					if (b < 100) {
						var c = new Date,
							d = w(c),
							e = x(c, a, d),
							f = a.twoDigitYearMax;
						f = "string" == typeof f ? (new Date).getFullYear() % 100 + parseInt(f, 10) : f, b += e - e % 100, b > f && (b -= 100)
					}
					return b
				}, b = function (a, b, c) {
					var d, e = a.days,
						i = a._upperDays;
					return i || (a._upperDays = i = [g(e.names), g(e.namesAbbr), g(e.namesShort)]), b = f(b), c ? (d = h(i[1], b), d === -1 && (d = h(i[2], b))) : d = h(i[0], b), d
				}, c = function (a, b, c) {
					var d = a.months,
						e = a.monthsGenitive || a.months,
						i = a._upperMonths,
						j = a._upperMonthsGen;
					i || (a._upperMonths = i = [g(d.names), g(d.namesAbbr)], a._upperMonthsGen = j = [g(e.names), g(e.namesAbbr)]), b = f(b);
					var k = h(c ? i[1] : i[0], b);
					return k < 0 && (k = h(c ? j[1] : j[0], b)), k
				}, d = function (a, b) {
					var c = a._parseRegExp;
					if (c) {
						var d = c[b];
						if (d) return d
					} else a._parseRegExp = c = {};
					for (var e, f = s(a, b).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), g = ["^"], h = [], i = 0, j = 0, k = v(); null !== (e = k.exec(f));) {
						var l = f.slice(i, e.index);
						if (i = k.lastIndex, j += r(l, g), j % 2) g.push(e[0]);
						else {
							var m, n = e[0],
								o = n.length;
							switch (n) {
								case "dddd":
								case "ddd":
								case "MMMM":
								case "MMM":
								case "gg":
								case "g":
									m = "(\\D+)";
									break;
								case "tt":
								case "t":
									m = "(\\D*)";
									break;
								case "yyyy":
								case "fff":
								case "ff":
								case "f":
									m = "(\\d{" + o + "})";
									break;
								case "dd":
								case "d":
								case "MM":
								case "M":
								case "yy":
								case "y":
								case "HH":
								case "H":
								case "hh":
								case "h":
								case "mm":
								case "m":
								case "ss":
								case "s":
									m = "(\\d\\d?)";
									break;
								case "zzz":
									m = "([+-]?\\d\\d?:\\d{2})";
									break;
								case "zz":
								case "z":
									m = "([+-]?\\d\\d?)";
									break;
								case "/":
									m = "(\\/)";
									break;
								default:
									throw "Invalid date format pattern '" + n + "'."
							}
							m && g.push(m), h.push(e[0])
						}
					}
					r(f.slice(i), g), g.push("$");
					var p = g.join("").replace(/\s+/g, "\\s+"),
						q = {
							regExp: p,
							groups: h
						};
					return c[b] = q
				}, e = function (a, b, c) {
					return a < b || a > c
				}, f = function (a) {
					return a.split("Â ").join(" ").toUpperCase()
				}, g = function (a) {
					for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = f(a[c]);
					return b
				}, y = function (f, g, h) {
					f = o(f);
					var i = h.calendar,
						j = d(i, g),
						k = new RegExp(j.regExp).exec(f);
					if (null === k) return null;
					for (var l, m = j.groups, p = null, q = null, r = null, s = null, t = null, u = 0, v = 0, w = 0, x = 0, y = null, z = !1, A = 0, B = m.length; A < B; A++) {
						var C = k[A + 1];
						if (C) {
							var D = m[A],
								E = D.length,
								F = parseInt(C, 10);
							switch (D) {
								case "dd":
								case "d":
									if (s = F, e(s, 1, 31)) return null;
									break;
								case "MMM":
								case "MMMM":
									if (r = c(i, C, 3 === E), e(r, 0, 11)) return null;
									break;
								case "M":
								case "MM":
									if (r = F - 1, e(r, 0, 11)) return null;
									break;
								case "y":
								case "yy":
								case "yyyy":
									if (q = E < 4 ? a(i, F) : F, e(q, 0, 9999)) return null;
									break;
								case "h":
								case "hh":
									if (u = F, 12 === u && (u = 0), e(u, 0, 11)) return null;
									break;
								case "H":
								case "HH":
									if (u = F, e(u, 0, 23)) return null;
									break;
								case "m":
								case "mm":
									if (v = F, e(v, 0, 59)) return null;
									break;
								case "s":
								case "ss":
									if (w = F, e(w, 0, 59)) return null;
									break;
								case "tt":
								case "t":
									if (z = i.PM && (C === i.PM[0] || C === i.PM[1] || C === i.PM[2]), !z && (!i.AM || C !== i.AM[0] && C !== i.AM[1] && C !== i.AM[2])) return null;
									break;
								case "f":
								case "ff":
								case "fff":
									if (x = F * Math.pow(10, 3 - E), e(x, 0, 999)) return null;
									break;
								case "ddd":
								case "dddd":
									if (t = b(i, C, 3 === E), e(t, 0, 6)) return null;
									break;
								case "zzz":
									var G = C.split(/:/);
									if (2 !== G.length) return null;
									if (l = parseInt(G[0], 10), e(l, -12, 13)) return null;
									var H = parseInt(G[1], 10);
									if (e(H, 0, 59)) return null;
									y = 60 * l + (n(C, "-") ? -H : H);
									break;
								case "z":
								case "zz":
									if (l = F, e(l, -12, 13)) return null;
									y = 60 * l;
									break;
								case "g":
								case "gg":
									var I = C;
									if (!I || !i.eras) return null;
									I = o(I.toLowerCase());
									for (var J = 0, K = i.eras.length; J < K; J++)
										if (I === i.eras[J].name.toLowerCase()) {
											p = J;
											break
										}
									if (null === p) return null
							}
						}
					}
					var L, M = new Date,
						N = i.convert;
					if (L = N ? N.fromGregorian(M)[0] : M.getFullYear(), null === q ? q = L : i.eras && (q += i.eras[p || 0].offset), null === r && (r = 0), null === s && (s = 1), N) {
						if (M = N.toGregorian(q, r, s), null === M) return null
					} else {
						if (M.setFullYear(q, r, s), M.getDate() !== s) return null;
						if (null !== t && M.getDay() !== t) return null
					}
					if (z && u < 12 && (u += 12), M.setHours(u, v, w, x), null !== y) {
						var O = M.getMinutes() - (y + M.getTimezoneOffset());
						M.setHours(M.getHours() + parseInt(O / 60, 10), O % 60)
					}
					return M
				}
			}(), z = function (a, b, c) {
				var d, e = b["-"],
					f = b["+"];
				switch (c) {
					case "n -":
						e = " " + e, f = " " + f;
					case "n-":
						i(a, e) ? d = ["-", a.substr(0, a.length - e.length)] : i(a, f) && (d = ["+", a.substr(0, a.length - f.length)]);
						break;
					case "- n":
						e += " ", f += " ";
					case "-n":
						n(a, e) ? d = ["-", a.substr(e.length)] : n(a, f) && (d = ["+", a.substr(f.length)]);
						break;
					case "(n)":
						n(a, "(") && i(a, ")") && (d = ["-", a.substr(1, a.length - 2)])
				}
				return d || ["", a]
			}, c.prototype.findClosestCulture = function (a) {
				return c.findClosestCulture.call(this, a)
			}, c.prototype.format = function (a, b, d) {
				return c.format.call(this, a, b, d)
			}, c.prototype.localize = function (a, b) {
				return c.localize.call(this, a, b)
			}, c.prototype.parseInt = function (a, b, d) {
				return c.parseInt.call(this, a, b, d)
			}, c.prototype.parseFloat = function (a, b, d) {
				return c.parseFloat.call(this, a, b, d)
			}, c.prototype.culture = function (a) {
				return c.culture.call(this, a)
			}, c.addCultureInfo = function (a, b, c) {
				var d = {},
					e = !1;
				"string" != typeof a ? (c = a, a = this.culture().name, d = this.cultures[a]) : "string" != typeof b ? (c = b, e = null == this.cultures[a], d = this.cultures[a] || this.cultures["default"]) : (e = !0, d = this.cultures[b]), this.cultures[a] = j(!0, {}, d, c), e && (this.cultures[a].calendar = this.cultures[a].calendars.standard)
			}, c.findClosestCulture = function (a) {
				var b;
				if (!a) return this.findClosestCulture(this.cultureSelector) || this.cultures["default"];
				if ("string" == typeof a && (a = a.split(",")), k(a)) {
					var c, d, e = this.cultures,
						f = a,
						g = f.length,
						h = [];
					for (d = 0; d < g; d++) {
						a = o(f[d]);
						var i, j = a.split(";");
						c = o(j[0]), 1 === j.length ? i = 1 : (a = o(j[1]), 0 === a.indexOf("q=") ? (a = a.substr(2), i = parseFloat(a), i = isNaN(i) ? 0 : i) : i = 1), h.push({
							lang: c,
							pri: i
						})
					}
					for (h.sort(function (a, b) {
							return a.pri < b.pri ? 1 : a.pri > b.pri ? -1 : 0
						}), d = 0; d < g; d++)
						if (c = h[d].lang, b = e[c]) return b;
					for (d = 0; d < g; d++)
						for (c = h[d].lang;;) {
							var l = c.lastIndexOf("-");
							if (l === -1) break;
							if (c = c.substr(0, l), b = e[c]) return b
						}
					for (d = 0; d < g; d++) {
						c = h[d].lang;
						for (var m in e) {
							var n = e[m];
							if (n.language == c) return n
						}
					}
				} else if ("object" == typeof a) return a;
				return b || null
			}, c.format = function (a, b, c) {
				var d = this.findClosestCulture(c);
				return a instanceof Date ? a = t(a, b, d) : "number" == typeof a && (a = u(a, b, d)), a
			}, c.localize = function (a, b) {
				return this.findClosestCulture(b).messages[a] || this.cultures["default"].messages[a]
			}, c.parseDate = function (a, b, c) {
				c = this.findClosestCulture(c);
				var d, e, f;
				if (b) {
					if ("string" == typeof b && (b = [b]), b.length)
						for (var g = 0, h = b.length; g < h; g++) {
							var i = b[g];
							if (i && (d = y(a, i, c))) break
						}
				} else {
					f = c.calendar.patterns;
					for (e in f)
						if (d = y(a, f[e], c)) break
				}
				return d || null
			}, c.parseInt = function (a, b, d) {
				return p(c.parseFloat(a, b, d))
			}, c.parseFloat = function (a, b, c) {
				"number" != typeof b && (c = b, b = 10);
				var g = this.findClosestCulture(c),
					h = NaN,
					i = g.numberFormat;
				if (a.indexOf(g.numberFormat.currency.symbol) > -1 && (a = a.replace(g.numberFormat.currency.symbol, ""), a = a.replace(g.numberFormat.currency["."], g.numberFormat["."])), a.indexOf(g.numberFormat.percent.symbol) > -1 && (a = a.replace(g.numberFormat.percent.symbol, "")), a = a.replace(/ /g, ""), e.test(a)) h = parseFloat(a);
				else if (!b && d.test(a)) h = parseInt(a, 16);
				else {
					var j = z(a, i, i.pattern[0]),
						k = j[0],
						l = j[1];
					"" === k && "(n)" !== i.pattern[0] && (j = z(a, i, "(n)"), k = j[0], l = j[1]), "" === k && "-n" !== i.pattern[0] && (j = z(a, i, "-n"), k = j[0], l = j[1]), k = k || "+";
					var m, n, o = l.indexOf("e");
					o < 0 && (o = l.indexOf("E")), o < 0 ? (n = l, m = null) : (n = l.substr(0, o), m = l.substr(o + 1));
					var p, q, r = i["."],
						s = n.indexOf(r);
					s < 0 ? (p = n, q = null) : (p = n.substr(0, s), q = n.substr(s + r.length));
					var t = i[","];
					p = p.split(t).join("");
					var u = t.replace(/\u00A0/g, " ");
					t !== u && (p = p.split(u).join(""));
					var v = k + p;
					if (null !== q && (v += "." + q), null !== m) {
						var w = z(m, i, "-n");
						v += "e" + (w[0] || "+") + w[1]
					}
					f.test(v) && (h = parseFloat(v))
				}
				return h
			}, c.culture = function (a) {
				return "undefined" != typeof a && (this.cultureSelector = a), this.findClosestCulture(a) || this.cultures["default"]
			}
	}(this),
	function (a, b, c) {
		function d(a) {
			var b, c = "";
			a = Math.abs(a);
			do b = a % 26, c = String.fromCharCode(b + 97) + c, a = (a - b) / 26; while (a > 0);
			return c
		}

		function e() {
			return D + d(Q++)
		}

		function f() {
			return R++
		}

		function g() {
			var a = [8, 9, "a", "b"],
				b = function () {
					return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
				};
			return b() + b() + "-" + b() + "-4" + b().substr(0, 3) + "-" + a[Math.floor(4 * Math.random())] + b().substr(0, 3) + "-" + b() + b() + b()
		}

		function h(a, b) {
			return typeof Globalize === H && typeof Globalize.format === H ? Globalize.parseDate(a, b) : new Date(a)
		}

		function i(a) {
			var b;
			return b = _.defined(a) && typeof Globalize === H && typeof Globalize.parseFloat === H ? Globalize.parseFloat(a) : Number(a), isNaN(b) ? null : b
		}

		function j(a) {
			if (!_.defined(a) || "" === a) return "";
			var b = /\{([\.\d\w\:\-\/\' \[\]]+)\}/g,
				c = arguments,
				d = c && c.length > 1 && typeof c[1] === F,
				e = typeof Globalize === H && typeof Globalize.format === H;
			return a.replace(b, function (a, b) {
				var f, g, h = b.indexOf(":");
				if (h > 0) {
					var i = b;
					b = i.substring(0, h), g = i.substring(h + 1)
				}
				return f = d ? /^\d+$/.test(b) ? c[parseInt(b, 10) + 1] : r(c[1], b) : c[parseInt(b, 10) + 1], g && e && (f = Globalize.format(f, g)), f
			})
		}

		function k(a) {
			if (_.func(a)) {
				var b = [].slice.call(arguments);
				return b.shift(), a.apply(this, b)
			}
			return j.apply(this, arguments)
		}

		function l() {
			return typeof Globalize === H && Globalize.cultures && Globalize.cultures[Globalize.cultureSelector] && Globalize.cultures[Globalize.cultureSelector].calendar ? Globalize.cultures[Globalize.cultureSelector].calendar : {
				days: {
					names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
				},
				firstDay: 0,
				months: {
					names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
					namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
				}
			}
		}

		function m() {
			return typeof Globalize === H && Globalize.cultures && Globalize.cultures[Globalize.cultureSelector] && Globalize.cultures[Globalize.cultureSelector].numberFormat ? Globalize.cultures[Globalize.cultureSelector].numberFormat.currency : {
				pattern: ["($n)", "$n"],
				decimals: 2,
				groupSizes: [3],
				",": ",",
				".": ".",
				symbol: "$"
			}
		}

		function n(a, d) {
			if (d = d !== c ? d : x.dieOnError) throw new Error(a);
			b.console && (b.console.error ? console.error(a) : console.log(a))
		}

		function o(a) {
			var b = Object.prototype.toString.call(a);
			return null === a ? "null" : a === c ? "undefined" : b.substr(8, b.length - 9).toLowerCase()
		}

		function p(b) {
			var d, e, f, g, h, i = Array.apply(null, arguments),
				j = _.array(b) && b.length && !z(b, function (a) {
					return !_.func(a)
				}).length,
				k = i[1],
				l = function (a, b) {
					return a instanceof b
				};
			if (!j) return y.apply(a, i);
			for (_.object(k) || _.array(k) || (k = {}), e = 2; e < i.length; e++)
				if (d = i[e])
					for (f in d) d.hasOwnProperty(f) && (h = d[f], g = k[f], h && z(b, A(l, null, h)).length ? k[f] = h : _.object(h) || _.array(h) ? (_.object(g) || (g = k[f] = _.array(h) ? [] : {}), k[f] = p(b, g, h)) : _.date(h) ? k[f] = new Date(h.getTime()) : h !== c && (k[f] = h));
			return k
		}

		function q(a) {
			var b, c = [];
			for (b in a) a.hasOwnProperty(b) && c.push(b);
			return c
		}

		function r(a, b) {
			var c;
			if (!_.string(b)) throw new Error("shield.get: parameter 'path' must be a string.");
			if (b = t(b), c = T[b]) return c(a);
			try {
				c = new Function("a", "try{return a" + b + "}catch(e){return arguments[1];}")
			} catch (d) {
				throw new Error("shield.get: invalid 'path' parameter")
			}
			return T[b] = c, c(a)
		}

		function s(a, b, c) {
			var d;
			if (!_.string(b)) throw new Error("shield.set: parameter 'path' must be a string");
			if (b = t(b), d = U[b]) return d(a, c);
			try {
				d = new Function("obj,val", "obj" + b + "=val;")
			} catch (e) {
				throw new Error("shield.set: invalid 'path' parameter")
			}
			return U[b] = d, d(a, c), a
		}

		function t(a) {
			var b, c, d, e, f, g = a.split(".");
			for (c = 0, d = g.length; c < d; c++) e = g[c], b = e.indexOf("["), e && (b < 0 ? (f = e.indexOf("'") < 0 ? "'" : '"', e = g[c] = "[" + f + e + f + "]") : b > 0 && (e = g[c] = "." + e));
			return g.join("")
		}

		function u(b, c) {
			var d, e, f = [],
				g = a(b).length,
				h = c ? E + "-" + c : E;
			for (e = 0; e < g; e++) d = a(a(b)[e]).data(h), d && f.push(d);
			return f
		}

		function v(b, d) {
			x.ui[b] = d, a.fn[D + b] = function (e) {
				var f, g = this;
				return typeof e === G ? (f = [].slice.call(arguments, 1), this.each(function () {
					var d, h, i = a(this).data(E);
					if (!i) throw new Error(k("shield: cannot call method '{0}' on uninitialized {1}.", e, b));
					if (d = i[e], typeof d !== H) throw new Error(k("shield: cannot find method '{0}' of {1}", e, b));
					if (h = d.apply(i, f), h !== c) return g = h, !1
				}), g) : this.each(function () {
					var c = new d(this, e);
					a(this).data(E, c), a(this).data(E + "-" + b, c)
				})
			}
		}

		function w(a) {
			a ? C.onselectstart == w.handler && (C.onselectstart = w.onselectstart, C.ondragstart = w.ondragstart) : C.onselectstart != w.handler && (w.onselectstart = C.onselectstart, w.ondragstart = C.ondragstart, C.onselectstart = C.ondragstart = w.handler)
		}
		var x = b.shield = b.shield || {},
			y = a.extend,
			z = a.grep,
			A = a.proxy,
			B = navigator.userAgent,
			C = document,
			D = "shield",
			E = "shieldWidget",
			F = "object",
			G = "string",
			H = "function",
			I = "array",
			J = "number",
			K = "date",
			L = "boolean",
			M = "null",
			N = "undefined",
			O = "sui-vc-top",
			P = function () {},
			Q = 100,
			R = 1e3,
			S = {},
			T = {},
			U = {},
			V = function () {},
			W = {
				SVG_NS: "http://www.w3.org/2000/svg",
				XHTML_NS: "http://www.w3.org/1999/xhtml",
				KeyCode: {
					BACK: 8,
					TAB: 9,
					ENTER: 13,
					CTRL: 17,
					ESC: 27,
					SPACE: 32,
					PAGEUP: 33,
					PAGEDOWN: 34,
					END: 35,
					HOME: 36,
					LEFT: 37,
					UP: 38,
					RIGHT: 39,
					DOWN: 40,
					DEL: 46
				}
			};
		V.extend = function (a) {
			var b, c, d, e, f = this,
				g = a && a.init ? a.init : function () {
					f.apply(this, arguments)
				},
				h = function () {};
			h.prototype = f.prototype, b = g.fn = g.prototype = new h;
			for (c in a) a.hasOwnProperty(c) && (d = a[c], e = o(d), d && typeof d === F ? b[c] = y(!0, e === I ? [] : {}, f.prototype[c], d) : b[c] = d);
			return b.constructor = g, g.extend = f.extend, g
		}, Date.prototype.toISOString || ! function () {
			function a(a) {
				var b = String(a);
				return 1 === b.length && (b = "0" + b), b
			}
			Date.prototype.toISOString = function () {
				return this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
			}
		}();
		var X = V.extend({
				init: function (a) {
					var b, c = this,
						d = (a || {}).events;
					c.events = {}, a = a || {};
					for (b in d) typeof d[b] === H && c.on(b, d[b])
				},
				on: function (a, b, c) {
					var d, e, f, g, h, i = this,
						j = i.events,
						k = aa.array(a),
						l = _.func(b);
					if (_.object(a)) {
						k = [];
						for (h in a) a.hasOwnProperty(h) && k.push(h);
						l = !1, b = a
					}
					for (f = 0, g = k.length; f < g; f++) a = k[f], d = i._eventType(a), e = l ? b : b[a], _.func(e) && (c && (e = i._one(a, e)), (j[d] || (j[d] = [])).push({
						name: a,
						handler: e
					}));
					return i
				},
				_one: function (a, b) {
					var c = this,
						d = function () {
							c.off(a, d), b.apply(this, arguments)
						};
					return d
				},
				_eventType: function (a) {
					var b = (a += "").indexOf(".");
					return b > -1 ? a.substring(0, b) : a
				},
				_eventNameMatch: function (b, c) {
					var d, e, f, g, h = this,
						i = h._eventType(b),
						j = h._eventType(c);
					if (b += "", c += "", (i === j || !j) && (d = b.split("."), d.shift(), d = z(d, function (a) {
							return _.string(a) && a.length > 0
						}), e = c.split("."), j && e.shift(), e = z(e, function (a) {
							return _.string(a) && a.length > 0
						}), d && e)) {
						for (f = 0, g = 0; g < e.length; g++) a.inArray(e[g], d) > -1 && f++;
						return f >= e.length
					}
					return !1
				},
				one: function (a, b) {
					this.on(a, b, !0)
				},
				off: function (a, b) {
					var d, e, f, g, h, i, j = this,
						k = j.events,
						l = aa.array(a),
						m = _.func(b);
					if (_.object(a)) {
						l = [];
						for (i in a) a.hasOwnProperty(i) && l.push(i);
						m = !1, b = a
					}
					if (_.string(a) && 0 === a.indexOf(".")) {
						for (d in k)
							if (k.hasOwnProperty(d)) {
								for (e = k[d] || [], f = m ? b : b || c, h = e.length - 1; h >= 0; h--) !j._eventNameMatch(e[h].name, a) || _.defined(f) && e[h].handler !== f || e.splice(h, 1);
								e.length || delete k[d]
							}
					} else
						for (g = 0; g < l.length; g++) {
							for (a = l[g], d = j._eventType(a), e = k[d] || [], f = m ? b : (b || {})[a], h = e.length - 1; h >= 0; h--) !j._eventNameMatch(e[h].name, a) || _.defined(f) && e[h].handler !== f || e.splice(h, 1);
							e.length || delete k[d]
						}
					return j
				},
				trigger: function (a, b) {
					var c, d, e = this,
						f = e._eventType(a),
						g = (e.events[f] || []).slice();
					for (c = 0, d = g.length; c < d; c++) g[c].handler.apply(e, [].slice.call(arguments, 1));
					return b
				},
				destroy: function () {
					this.events = {}
				}
			}),
			Y = V.extend({
				init: function (a) {
					var b = !1,
						c = !1;
					y(this, {
						timeStamp: (new Date).getTime(),
						isDefaultPrevented: function () {
							return b
						},
						isPropagationStopped: function () {
							return c
						},
						preventDefault: function () {
							b = !0
						},
						stopPropagation: function () {
							c = !0
						}
					}, a)
				}
			}),
			Z = X.extend({
				init: function (b, c) {
					var d = this,
						e = d.constructor;
					c = c || {}, d.element = a(b), d.initialOptions = c, d.options = y(!0, {}, e.defaults, (e.themes || {})[c.theme], c), d._iid = f(), X.fn.init.call(d, c)
				},
				getInstanceId: function () {
					return this._iid
				},
				refresh: function (a) {
					this.refreshWithElement(this.element, a)
				},
				refreshWithElement: function (a, b) {
					var c = this,
						d = p([V], c.options, b);
					c.destroy(), c.init(a, d)
				},
				hide: function () {
					a(this.element).hide()
				},
				show: function () {
					a(this.element).show()
				},
				isVisible: function () {
					return a(this.element).is(":visible")
				},
				visible: function () {
					var a = this,
						b = [].slice.call(arguments);
					return b.length > 0 ? void(b[0] ? a.show() : a.hide()) : a.isVisible()
				},
				focus: function () {
					a(this.element).focus()
				},
				trigger: function (b, c, d) {
					var e, f = this;
					return c = _.event(c) ? {
						domEvent: c
					} : c, !c || !c.domEvent || c.domEvent instanceof a.Event || (c.domEvent = a.Event(c.domEvent)), e = new Y(y({
						type: b,
						target: f
					}, c)), X.fn.trigger.call(f, b, e), typeof d !== H || e.isDefaultPrevented() || d.call(f, e), e
				}
			}),
			$ = X.extend({
				options: {
					total: 0,
					pageBuffer: 2,
					createContainer: P,
					getItems: P,
					eventNS: ".shieldVirtualized",
					skipRender: !1
				},
				init: function (b, c) {
					var d = this;
					c = d.options = y({}, d.options, c), d.element = a(b), X.fn.init.call(d, c), c.skipRender || d.render()
				},
				_elements: function () {
					var b, c, d = this,
						e = d.element,
						f = d.options;
					b = d.wrapper = e.off(f.eventNS).empty().css({
						overflow: "auto",
						position: "relative"
					}).on("scroll" + f.eventNS, A(d.scroll, d)).append('<div class="sui-virtualized"/>').find(".sui-virtualized").css({
						position: "relative",
						overflow: "visible"
					}), c = d.container = a(f.createContainer(b)), b.children().css({
						position: "absolute",
						top: 0
					}), d._positionedContainer = b.children().first()
				},
				_dimensions: function () {
					var a = this,
						b = a.options,
						c = b.total,
						d = b.itemHeight,
						e = Math.min(c * d, x.support.maxElementHeight),
						f = a.element.height(),
						g = Math.ceil(f / d),
						h = g * d,
						i = e - f;
					return {
						total: c,
						itemHeight: d,
						totalHeight: e,
						viewportHeight: f,
						itemsPerPage: g,
						pageHeight: h,
						totalScrollableHeight: i
					}
				},
				render: function () {
					var a, b = this,
						c = b.element,
						d = b.options;
					b._elements(), b.prevScroll = 0, a = b.dimensions = b._dimensions(), c.find(".sui-virtualized").height(a.totalHeight), b._renderItems(0, Math.min(d.total, (d.pageBuffer + 1) * a.itemsPerPage))
				},
				_renderItems: function (a, b, c) {
					var d = this;
					d.options.getItems(a, b, function (a, b) {
						var e, f = a.length;
						for (b = !_.defined(b) || !!b, b && d.container.empty(), e = 0; e < f; e++) d.container.append(a[e]);
						c && c()
					})
				},
				scroll: function () {
					var a, b, c, d = this,
						e = d.options,
						f = e.pageBuffer,
						g = d.dimensions,
						h = d.element.scrollTop(),
						i = d.prevScroll,
						j = h - i,
						k = h / g.totalScrollableHeight,
						l = d._positionedContainer,
						m = l.data(O) || 0,
						n = h - k * (g.pageHeight - g.viewportHeight),
						o = j > 0 && n - m > (f / 4 + 1) * g.pageHeight,
						p = j < 0 && n - m <= f / 4 * g.pageHeight;
					(p || o) && (b = Math.min(g.total, Math.floor(k * g.total - k * g.itemsPerPage)), a = Math.max(0, b - f / 2 * g.itemsPerPage), c = Math.min(g.total, a + (f + 1) * g.itemsPerPage), n = Math.max(0, n - (b - a) * g.itemHeight), d._renderItems(a, c, function () {
						l.css("top", n), l.data(O, n)
					})), d.prevScroll = h
				},
				scrollTop: function (a) {
					var b = this,
						c = b.element;
					return _.defined(a) ? void c.scrollTop(a) : c.scrollTop()
				},
				destroy: function () {
					var a = this,
						b = a.options;
					a.element.off(b.eventNS), a.element = null, b.createContainer = P, b.getItems = P, X.fn.destroy.call(a)
				}
			});
		a.fn.swidget = function (a) {
			var b = u(this, a);
			return b.length ? b.length > 1 ? b : b[0] : null
		}, a.fn.swidgets = function (a) {
			return u(this, a)
		};
		var _ = {
				string: function (a) {
					return o(a) === G
				},
				number: function (a) {
					return o(a) === J
				},
				integer: function (a) {
					return o(a) === J && /^[\+\-]?\d+$/.test(a + "")
				},
				"float": function (a) {
					return o(a) === J && /^[\+\-]?\d+\.\d+$/.test(a + "")
				},
				func: function (a) {
					return o(a) === H
				},
				object: function (a) {
					return o(a) === F
				},
				array: function (a) {
					return o(a) === I
				},
				date: function (a) {
					return o(a) === K
				},
				"boolean": function (a) {
					return o(a) === L
				},
				"null": function (a) {
					return o(a) === M
				},
				undefined: function (a) {
					return o(a) === N
				},
				defined: function (a) {
					return a !== c && null !== a
				},
				event: function (a) {
					return typeof b.Event == H && a instanceof b.Event || a && a.altKey !== c
				}
			},
			aa = {
				"int": function (a, b) {
					return parseInt(a, b || 10)
				},
				"float": function (a) {
					return parseFloat(a)
				},
				number: function (a) {
					return i(a + "")
				},
				array: function (a) {
					return a instanceof Array ? a : a !== c ? [a] : []
				},
				string: function (a) {
					return a + ""
				},
				key: function (b) {
					var c, d, e, f, g = o(b);
					switch (g) {
						case M:
						case N:
							return g;
						case F:
							return c = q(b).sort(), d = [], a.each(c, function (a, c) {
								d.push(c + ":" + aa.key(b[c]))
							}), "{" + d.join(",") + "}";
						case I:
							for (d = "[", e = 0, f = b.length; e < f; e++) d += aa.key(b[e]), e < f - 1 && (d += ",");
							return d += "]";
						case K:
							return b.toISOString();
						default:
							return b + ""
					}
				}
			};
		! function () {
			S.stableSort = function () {
				var a = "abcdefghijklmnopqrstuvwxyz";
				return "xyzvwtursopqmnklhijfgdeabc" == a.split("").sort(function (b, c) {
					return ~~(a.indexOf(c) / 2.3) - ~~(a.indexOf(b) / 2.3)
				}).join("")
			}(), S.scrollbar = function () {
				var a, b = C.createElement("div");
				return b.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both", b.innerHTML = "&nbsp;", C.body.appendChild(b), a = b.offsetWidth - b.scrollWidth, C.body.removeChild(b), a
			}, S.isRtl = function (b) {
				return a(b).closest(".sui-rtl").length > 0
			}, S.transitions = function () {
				var a, b = (C.body || C.documentElement).style,
					c = "Transition",
					d = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
				if (_.string(b[c.toLowerCase()])) return !0;
				for (a = 0; a < d.length; a++)
					if (_.string(b[d[a] + c])) return !0;
				return !1
			}(), S.hasScrollbarY = function (b) {
				var c = a(b).get(0);
				return c.scrollHeight > c.clientHeight
			}, S.hasScrollbarX = function (b) {
				var c = a(b).get(0);
				return c.scrollWidth > c.clientWidth
			}
		}(),
		function () {
			x.rAF = function (a) {
				return (b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function (a) {
					return this.setTimeout(a, 1e3 / 60)
				}).call(b, a)
			}, x.cAF = function (a) {
				return (b.cancelAnimationFrame || b.clearTimeout)(a)
			}
		}(),
		function () {
			var a = /MSIE/i.test(B),
				b = /Trident/i.test(B),
				c = /Firefox/i.test(B),
				d = /Opera/i.test(B),
				e = /Safari/i.test(B),
				f = /Chrome/i.test(B),
				g = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(B);
			S.browser = {
				ie: a || b,
				firefox: c,
				opera: d,
				safari: !f && e,
				chrome: f,
				mobile: g,
				version: a ? parseInt(B.substr(B.indexOf("MSIE ") + 5), 10) : b ? parseInt(B.substr(B.indexOf("rv:") + 3), 10) : c ? parseInt(B.substr(B.indexOf("Firefox/") + 8), 10) : d ? parseInt(B.substr(B.indexOf("Version/") + 8), 10) : f ? parseInt(B.substr(B.indexOf("Chrome/") + 7), 10) : e ? parseInt(B.substr(B.indexOf("Version/") + 8), 10) : 0
			}
		}(), a(function () {
			for (var b, c = 1e6, d = 1e9, e = a('<div style="display:none;"/>').appendTo(C.body), f = c;;) {
				if (b = f + c, e.css("height", b), b > d || e.height() !== b) break;
				f = b
			}
			e.remove(), S.maxElementHeight = f
		}), w.handler = function () {
			return !1
		}, y(x, {
			Class: V,
			Dispatcher: X,
			Event: Y,
			Constants: W,
			format: k,
			formatString: j,
			parseDate: h,
			getCalendarInfo: l,
			getCurrencyInfo: m,
			error: n,
			dieOnError: !0,
			iid: f,
			strid: e,
			guid: g,
			support: S,
			extend: p,
			selection: w,
			type: o,
			is: _,
			to: aa,
			keys: q,
			get: r,
			set: s,
			ui: y({}, x.ui || {}, {
				Widget: Z,
				VirtualizedContainer: $,
				plugin: v
			})
		})
	}(jQuery, this),
	function (a, b, c, d) {
		function e(a, b) {
			var c, d, e = [];
			if (a.map) return a.map(b);
			for (c = 0, d = a.length; c < d; c++) e[c] = b(a[c], c, a);
			return e
		}

		function f(a, b, c, e) {
			var f = B(a, b);
			return f === d ? c && (f = u.def(c, e, !0)) : f = u.convert(f, c), f
		}
		var g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = b.Class,
			w = b.Dispatcher,
			x = Math.min,
			y = Math.max,
			z = b.is,
			A = b.to,
			B = b.get,
			C = b.set,
			D = (b.support, b.type),
			E = function () {},
			F = a.extend,
			G = a.proxy,
			H = a.each,
			I = a.grep,
			J = a.inArray,
			K = a.Deferred,
			L = "function",
			M = "array",
			N = "object",
			O = "string",
			P = "change",
			Q = "error",
			R = "start",
			S = "complete",
			T = "save",
			U = "afterset",
			V = "insert",
			W = "remove";
		g = v.extend({
			init: function (a) {
				this.data = a
			},
			read: function (a, b, c, d) {
				return b(this.data, !1, d)
			},
			modify: function (a, b, c, d) {
				b(d)
			}
		}), h = v.extend({
			init: function (a, b) {
				this.options = a, this.cache = b
			},
			read: function (b, c, e, f) {
				var g, h = this.options,
					i = h.read,
					j = this.cache;
				return z.func(i) ? void i(b, c, e, f) : (i = z.string(i) ? {
					url: i
				} : F(!0, {}, i), z.func(i.data) && (b = i.data(b, f)), g = j.get(b), void(g !== d ? c(g, !0, f) : (i.data = b, i.error = e, i.success = function (a) {
					j.set(b, a), c(a, !1, f)
				}, a.ajax(i))))
			},
			modify: function (b, c, d, f) {
				var g, h, i, j, k, l = this.options,
					m = l.modify || {},
					n = ["create", "update", "remove"],
					o = ["added", "edited", "removed"],
					p = [],
					q = function (a) {
						return a.data
					};
				if (z.func(m)) return void m(b, c, d, f);
				for (k = 0; k < n.length; k++) i = n[k], j = o[k], h = m[i], b[j].length ? (z.string(h) && (h = {
					url: h,
					type: "POST"
				}), z.func(h) ? (g = p[k] = new K, h(b[j], G(g.resolve, g), G(g.reject, g), f)) : z.object(h) ? (h = F(!0, {}, h), z.func(h.data) ? h.data = h.data(b[j], f) : (h.data = {}, h.data[j] = e(b[j], q)), g = p[k] = a.ajax(h)) : (g = p[k] = new K, g.resolve())) : (g = p[k] = new K, g.resolve());
				a.when.apply(a, p).then(c, d)
			}
		}), i = v.extend({
			init: function () {
				this.values = {}
			},
			get: function (a) {
				return this.values[A.key(a)]
			},
			set: function (a, b) {
				return this.values[A.key(a)] = b, b
			},
			remove: function (a) {
				var b = A.key(a),
					c = this.values[b];
				return delete this.values[b], c
			},
			clear: function () {
				this.values = []
			}
		}), i.noop = {
			get: E,
			set: E
		}, k = v.extend({
			init: function (a, b) {
				z.object(a) ? a = A.array(a) : z.string(a) && (a = [{
					path: a,
					desc: !!b
				}]), this._expr = a
			},
			build: function () {
				var a = this._expr,
					b = k.cache;
				return z.func(a) ? function (a) {
					return function (b, c) {
						var d = a(b.item, c.item);
						return 0 !== d ? d : b.index - c.index
					}
				}(a) : z.array(a) ? b.get(a) || b.set(a, function (a) {
					return function (b, c) {
						var d, e, f, g, h, i, j, k;
						for (g = 0, h = a.length; g < h; g++)
							if (i = b.item, j = c.item, d = a[g] || {}, e = d.path, f = d.desc ? -1 : 1, z.string(e) ? (i = B(i, e), j = B(j, e)) : z.func(e) && (i = e(i), j = e(j)), z.date(i) && (i = i.getTime()), z.date(j) && (j = j.getTime()), i !== j && (null != i || null != j)) {
								if (null == i) return -1 * f;
								if (null == j) return 1 * f;
								if (z.number(i) && z.number(j) || (i = i.toString(), j = j.toString()), i.localeCompare) {
									if (k = i.localeCompare(j), 0 === k) continue;
									return k * f
								}
								if (i > j) return 1 * f;
								if (i < j) return -1 * f
							}
						return b.index - c.index
					}
				}([].concat(a))) : void 0
			}
		}), k.cache = new i, l = v.extend({
			init: function (a) {
				this._expr = a || []
			},
			build: function () {
				var a = this,
					b = l.cache,
					c = a._expr,
					d = a._func || (a._func = b.get(c));
				return d || (d = a._buildRecursive(c, !0), d && b.set(c, d)), d
			},
			_single: function (a) {
				var b;
				if (a) {
					if (z.func(a.filter)) return a.filter;
					if (b = l.filters[l.filterAliases[a.filter]]) return function (a, b, c, d) {
						return function (e) {
							return b(B(e, a), c, d)
						}
					}(a.path, b, a.value, a.sensitive)
				}
			},
			_multiple: function (a, b) {
				return function (c) {
					var d, e = !0,
						f = a.length;
					for (d = 0; d < f; d++)
						if (e = a[d](c), b) {
							if (!e) break
						} else if (e) break;
					return e
				}
			},
			_buildRecursive: function (a, b) {
				var c, d, e = this,
					f = [];
				if (z.array(a)) {
					for (c = 0, d = a.length; c < d; c++) f.push(e._buildRecursive(a[c]));
					return f.length > 1 ? e._multiple(f, b) : f[0]
				}
				return a.and || a.or ? e._buildRecursive(a.and || a.or, !!a.and) : e._single(a)
			}
		}), l.cache = new i, l.normalize = {
			equatable: function (a, b, c) {
				return z.date(a) ? {
					a: a.getTime(),
					b: new Date(b).getTime()
				} : l.normalize.string(a, b, c)
			},
			string: function (a, b, c) {
				return {
					a: c ? a + "" : (a + "").toLowerCase(),
					b: c ? b + "" : (b + "").toLowerCase()
				}
			},
			scalar: function (a, b) {
				return z.date(a) ? {
					a: a.getTime(),
					b: new Date(b).getTime()
				} : isNaN(parseFloat(a)) ? {
					a: a,
					b: b
				} : {
					a: parseFloat(a),
					b: parseFloat(b)
				}
			}
		}, l.filters = {
			eq: function (a, b, c) {
				var d = l.normalize.equatable(a, b, c);
				return d.a === d.b
			},
			neq: function (a, b, c) {
				var d = l.normalize.equatable(a, b, c);
				return d.a !== d.b
			},
			con: function (a, b, c) {
				var d = l.normalize.string(a, b, c);
				return d.a.indexOf(d.b) > -1
			},
			notcon: function (a, b, c) {
				var d = l.normalize.string(a, b, c);
				return d.a.indexOf(d.b) < 0
			},
			starts: function (a, b, c) {
				var d = l.normalize.string(a, b, c);
				return 0 === d.a.indexOf(d.b)
			},
			ends: function (a, b, c) {
				var d = l.normalize.string(a, b, c);
				return d.a.indexOf(d.b) === d.a.length - d.b.length
			},
			gt: function (a, b) {
				var c = l.normalize.scalar(a, b);
				return c.a > c.b
			},
			lt: function (a, b) {
				var c = l.normalize.scalar(a, b);
				return c.a < c.b
			},
			gte: function (a, b) {
				var c = l.normalize.scalar(a, b);
				return c.a >= c.b
			},
			lte: function (a, b) {
				var c = l.normalize.scalar(a, b);
				return c.a <= c.b
			},
			isnull: function (a) {
				return null == a
			},
			notnull: function (a) {
				return null != a
			}
		}, l.filterAliases = {
			eq: "eq",
			equal: "eq",
			equals: "eq",
			"==": "eq",
			neq: "neq",
			ne: "neq",
			doesnotequal: "neq",
			notequal: "neq",
			notequals: "neq",
			"!=": "neq",
			con: "con",
			contains: "con",
			notcon: "notcon",
			doesnotcontain: "notcon",
			notcontains: "notcon",
			starts: "starts",
			startswith: "starts",
			ends: "ends",
			endswith: "ends",
			gt: "gt",
			greaterthan: "gt",
			">": "gt",
			lt: "lt",
			lessthan: "lt",
			"<": "lt",
			gte: "gte",
			ge: "gte",
			greaterthanorequal: "gte",
			">=": "gte",
			lte: "lte",
			le: "lte",
			lessthanorequal: "lte",
			"<=": "lte",
			isnull: "isnull",
			"null": "isnull",
			notnull: "notnull",
			isnotnull: "notnull"
		}, m = v.extend({
			init: function () {},
			build: function (a) {
				var b = this,
					c = m.cache,
					d = c.get(a);
				return d || (d = b._build(a), d && c.set(a, d)), d
			},
			_build: function (a) {
				if (!a) return null;
				var b = a.field,
					c = a.aggregate,
					g = a.type || Number,
					h = function (a) {
						return a === d ? u.def(g) : u.convert(a, g)
					};
				return z.func(c) ? c : "count" == c ? function (a) {
					return a.length
				} : "sum" == c ? function (a) {
					var c, d, e = 0,
						i = a.length;
					for (c = 0; c < i; c++) d = f(a[c], b, g), e += g == Date && z.date(d) ? d.getTime() : d;
					return h(e)
				} : "average" == c ? function (a) {
					var c, d, e = 0,
						i = a.length;
					for (c = 0; c < i; c++) d = f(a[c], b, g), e += g == Date && z.date(d) ? d.getTime() : d;
					return h(e / i)
				} : "min" == c ? function (a) {
					return h(x.apply(null, e(a, function (a) {
						return f(a, b, g)
					})))
				} : "max" == c ? function (a) {
					return h(y.apply(null, e(a, function (a) {
						return f(a, b, g)
					})))
				} : d
			}
		}), m.cache = new i, j = v.extend({
			init: function (a, b, c, d, f) {
				var g = this;
				g.data = a, g.total = null != b ? b : a ? a.length : 0, g.aggregates = c, g.groups = d, g.indices = z.array(f) ? f.slice(0) : e(a || [], function (a, b) {
					return b
				})
			},
			filter: function (a) {
				var b, c, d, e = this,
					f = new l(a).build(),
					g = e.data,
					h = [],
					i = [];
				if (f) {
					for (b = 0, c = g.length; b < c; b++) d = g[b], f(d) && (h.push(d), i.push(e.indices[b]));
					e.indices = i
				} else h = g.slice(0);
				return new j(h, h.length, e.aggregates, e.groups, e.indices)
			},
			aggregate: function (a) {
				var b, c, d, e, f = this,
					g = new m,
					h = f.data;
				for (z.array(a) || (a = [a]), f.aggregates = [], b = 0; b < a.length; b++) c = a[b], d = g.build(c), d && (e = d(h, c)), f.aggregates.push(F({}, c, {
					value: e
				}));
				return new j(h.slice(0), f.total, f.aggregates, f.groups, f.indices)
			},
			aggregateGroups: function (a) {
				var b = this,
					c = b.data.slice(0),
					d = new j(b._getInnerMostItems(c), null, null, null, null).aggregate(a);
				return new j(c, b.total, d.aggregates, b.groups, b.indices)
			},
			_getInnerMostItems: function (a) {
				var b = [];
				return H(this._getInnerMostGroups(a), function (a, c) {
					b = b.concat(c.items)
				}), b
			},
			_getInnerMostGroups: function (a) {
				var b = this,
					c = [];
				return H(a || [], function (a, d) {
					c = c.concat(b._hasInnerGroups(d) ? b._getInnerMostGroups(d.items) : d)
				}), c
			},
			_hasInnerGroups: function (a) {
				return !!(a && a.items && a.items.length > 0) && (a.items[0].field && z.array(a.items[0].items))
			},
			group: function (a) {
				var b, c = this,
					d = c.data.slice(0);
				return z.array(a) || (a = [a]), a.length > 0 && (b = c._groupData(a, d, c.indices), d = b[0], c.indices = b[1]), new j(d, c.total, c.aggregates, c.groups, c.indices)
			},
			_groupData: function (a, b, c) {
				var d, e, f, g, h, i = this,
					l = [],
					m = [],
					n = a.slice(0),
					o = n.shift(),
					p = o.field,
					q = o.aggregate,
					r = o.order,
					s = {};
				if (H(b, function (a, b) {
						e = B(b, p), f = s[e], z.defined(f) ? l[f].items.push({
							item: b,
							index: c[a]
						}) : (s[e] = l.length, l.push(F({}, o, {
							value: e,
							items: [{
								item: b,
								index: c[a]
							}]
						})))
					}), r && (d = new k("value", "desc" == r).build())) {
					for (g = 0; g < l.length; g++) l[g] = {
						item: l[g],
						index: g
					};
					for (l.sort(d), g = 0; g < l.length; g++) l[g] = l[g].item
				}
				for (g = 0; g < l.length; g++)
					for (h = 0; h < l[g].items.length; h++) m.push(l[g].items[h].index), l[g].items[h] = l[g].items[h].item;
				if (q && H(l, function (a, b) {
						l[a].aggregate = new j(b.items).aggregate(q).aggregates
					}), n && n.length > 0) {
					var t = 0,
						u = [];
					for (g = 0; g < l.length; g++) {
						var v = l[g],
							w = m.slice(t, t + (v.items ? v.items.length : 0)),
							x = i._groupData(n, v.items, w);
						l[g].items = x[0], u = u.concat(x[1]), t += v.items ? v.items.length : 0
					}
					m = u
				}
				return [l, m]
			},
			sort: function (a, b) {
				var c, d = this,
					e = new k(a, b).build(),
					f = d.data.slice(0),
					g = [],
					h = f ? f.length : 0,
					i = d.indices;
				if (e) {
					for (c = 0; c < h; c++) g.push({
						index: i[c],
						item: f[c]
					});
					for (g.sort(e), c = 0; c < h; c++) f[c] = g[c].item, d.indices[c] = g[c].index
				}
				return new j(f, d.total, d.aggregates, d.groups, d.indices)
			},
			sortGroups: function (a, b) {
				var c, d = this,
					e = d.data.slice(0),
					f = [],
					g = 0;
				return c = function (e) {
					if (d._hasInnerGroups(e)) H(e.items, function (a, b) {
						c(b)
					});
					else {
						var h = new j(e.items, null, null, null, d.indices.slice(g, g + (e.items ? e.items.length : 0))).sort(a, b);
						e.items = h.data, f = f.concat(h.indices), g += e.items ? e.items.length : 0
					}
				}, H(e, function (a, b) {
					c(b)
				}), new j(e, d.total, d.aggregates, d.groups, f)
			},
			_sliceGroups: function (a, b, c, d) {
				var e, f = this,
					g = 0,
					h = [],
					i = [],
					j = z.defined(d);
				return 0 !== c || j ? (e = function (a) {
					if (f._hasInnerGroups(a)) {
						var h = [],
							k = 0;
						return H(a.items, function (a, b) {
							var c = e(b);
							c > 0 && (h.push(b), k += c)
						}), a.items = h, k
					}
					var l, m, n = g,
						o = a.items.length,
						p = n + o - 1;
					return j ? d - 1 >= p ? c <= p && (l = y(0, c - n), m = o) : d - 1 >= n && c <= p && (l = y(0, c - n), m = x(o, d - n)) : c <= n ? (l = 0, m = o) : c >= n && c <= p && (l = y(0, c - n), m = o), z.defined(l) && z.defined(m) && m > l ? (a.items = a.items.slice(l, m), i = i.concat(b.slice(n + l, n + m))) : a.items = [], g += o, a.items.length
				}, H(a, function (a, b) {
					var c = e(b);
					c > 0 && h.push(b)
				}), [h, i]) : [a.slice(0), b.slice(0)]
			},
			skip: function (a) {
				var b = this;
				return new j(b.data.slice(a), b.total, b.aggregates, b.groups, b.indices.slice(a))
			},
			skipGroups: function (a) {
				var b = this,
					c = b._sliceGroups(b.data, b.indices, a);
				return new j(c[0], b.total, b.aggregates, b.groups, c[1])
			},
			take: function (a) {
				var b = this;
				return new j(b.data.slice(0, a), b.total, b.aggregates, b.groups, b.indices.slice(0, a))
			},
			takeGroups: function (a) {
				var b = this,
					c = b._sliceGroups(b.data, b.indices, 0, a);
				return new j(c[0], b.total, b.aggregates, b.groups, c[1])
			}
		}), j.create = function (a, b, c, d, e) {
			b = b || {};
			var f = new j(a, c, d, e),
				g = b.remoteOperations || [],
				h = g.join(" "),
				i = h.indexOf("group") > -1;
			return b.group || i ? (b.group ? (b.filter && (f = f.filter(b.filter)), f = f.group(b.group)) : f.data = f.groups, b.aggregate && (f = f.aggregateGroups(b.aggregate)), b.sort && (f = f.sortGroups(b.sort)), b.skip && (f = f.skipGroups(b.skip)), b.take && (f = f.takeGroups(b.take))) : (b.filter && (f = f.filter(b.filter)), b.aggregate && (f = f.aggregate(b.aggregate)), b.sort && (f = f.sort(b.sort)), b.skip && (f = f.skip(b.skip)), b.take && (f = f.take(b.take))), f
		}, n = w.extend({
			init: function (a) {
				var b = this,
					c = b.options = z.array(a) ? {
						data: a
					} : a || {},
					d = c.schema || {},
					e = n.schemas[d.type || "json"];
				b.data = null, b.filter = c.filter, b.sort = c.sort, b.skip = c.skip, b.take = c.take, b.group = c.group, b.aggregate = c.aggregate, b.schema = new e(d), b.remote = c.remote, b.cache = new i, b._recursive = !!c.recursive, w.fn.init.call(b, c)
			},
			isRecursive: function () {
				return this._recursive
			},
			trigger: b.ui.Widget.fn.trigger,
			_client: function () {
				var a = this,
					b = a.remote;
				return z.object(b) ? new h(b, b.cache ? a.cache : i.noop) : new g(a.options.data)
			},
			_params: function () {
				var a, b = this,
					c = ["filter", "aggregate", "group", "sort", "skip", "take"],
					d = b.remote,
					e = b._remoteOperations().join(" "),
					f = {
						local: {},
						remote: {}
					};
				return H(c, function (c, g) {
					a = b[g], null != a && (d && e.indexOf(g) > -1 ? f.remote[g] = a : f.local[g] = a)
				}), f
			},
			_remoteOperations: function () {
				var a = this.remote;
				return a && a.read ? a.read.operations || a.operations || [] : []
			},
			_success: function (a, b, c, d, e) {
				var f = this,
					g = f.schema,
					h = g.process(c);
				f.data = h.data, f._pTotal = h.total, f._pAggregates = h.aggregates, f._pGroups = h.groups, f._createView(h.data, b), f.trigger(S), f.trigger(P, {
					fromCache: !!d,
					extra: e
				}), a.resolve(f.view, !!d)
			},
			_createView: function (a, b) {
				var c = this,
					d = j.create(a, F({}, b || c._params().local, {
						remoteOperations: c._remoteOperations()
					}), c._pTotal, c._pAggregates, c._pGroups);
				c.view = d.data, c.total = d.total, c._indices = d.indices, c.aggregates = d.aggregates
			},
			_error: function (a, b, c, d, e) {
				var f = this;
				a.reject(d), b && f.trigger(S), f.trigger(Q, {
					errorType: "transport",
					error: d,
					operation: c,
					extra: e
				})
			},
			read: function (a) {
				var b = this,
					c = new K,
					d = b._params(),
					e = b.trigger(R, {
						params: d,
						extra: a
					});
				return e.isDefaultPrevented() ? c.resolve() : (b.cancel(), b._client().read(d.remote, G(b._success, b, c, d.local), G(b._error, b, c, !0, "read"), a)), c.promise()
			},
			_ensureTracker: function () {
				var a = this,
					b = a.tracker,
					c = a.data;
				if (!b) {
					if (!c || !z.array(c)) throw new Error("shield.DataSource: cannot modify when no data array is available.");
					b = a.tracker = new t({
						data: c,
						model: a.schema.model,
						events: {
							change: function (b) {
								a._createView(a.data), b && b.afterset || a.trigger(P)
							},
							error: function (b) {
								a.trigger(Q, {
									errorType: "tracker",
									path: b ? b.path : "undefined path",
									value: b ? b.value : "undefined value",
									error: b ? b.reason : "undefined error",
									model: b ? b.target : "undefined target model"
								})
							}
						}
					}), a.data = b.data
				}
			},
			getDataIndex: function (a) {
				return this._indices[a]
			},
			add: function (a) {
				return this._ensureTracker(), this.tracker.add(a)
			},
			insert: function (a, b) {
				return this._ensureTracker(), this.tracker.insert(a, b)
			},
			remove: function (a) {
				return this._ensureTracker(), this.tracker.remove(a)
			},
			removeAt: function (a) {
				return this._ensureTracker(), this.tracker.removeAt(a)
			},
			edit: function (a) {
				return this._ensureTracker(), this.tracker.edit(a)
			},
			insertView: function (a, b) {
				return this.insert(this._indices[a], b)
			},
			removeAtView: function (a) {
				return this.removeAt(this._indices[a])
			},
			editView: function (a) {
				return this.edit(this._indices[a])
			},
			save: function (a, b) {
				var c, d, e, f, g = this,
					h = g.tracker,
					i = h ? h.changes : {
						added: [],
						edited: [],
						removed: []
					},
					j = h && g.trigger(T, {
						changes: i
					}),
					k = new K;
				if (a = !z.defined(a) || !!a, j && !j.isDefaultPrevented()) {
					for (c = g.data = h.original, d = h.data, c.length = 0, e = 0; e < d.length; e++) c[e] = d[e];
					g.options.data && !z.func(g.options.data) && k.done(G(g._syncLocalData, g)), g._client().modify(i, G(k.resolve, k), G(g._error, g, k, !1, "save"), b), h.destroy(), h = g.tracker = null
				} else k.resolve(i);
				return a && (f = function () {
					g._createView(g.data), g.trigger(P, {
						extra: b
					})
				}, k.then(f, f)), k.promise()
			},
			_syncLocalData: function () {
				var a, b = this,
					c = b.schema,
					d = (c.options.fields, b.data),
					e = [],
					f = z.array(c.getReverseDataFirstItem(b.options.data));
				for (a = 0; a < d.length; a++) e[a] = f ? [] : {}, c.reverseFields(d[a], e[a]);
				c.reverseData(e, b.options.data)
			},
			cancel: function () {
				var a = this,
					b = a.tracker,
					c = b && (b.changes.added.length || b.changes.edited.length || b.changes.removed.length);
				b && (a.data = b.original, b.destroy(), b = a.tracker = null, c && (a._createView(a.data), a.trigger(P)))
			},
			destroy: function () {
				var a, b = this,
					c = ["options", "data", "total", "aggregates", "filter", "sort", "aggregate", "group", "skip", "take", "schema", "remote", "view", "cache"];
				for (b.cancel(), b.cache && b.cache.clear(), a = 0; a < c.length; a++) delete b[c[a]];
				w.fn.destroy.call(b)
			}
		}), n.create = function (a, b) {
			return a instanceof n ? a : new n(z.array(a) ? F({
				data: a
			}, b) : F({}, a, b))
		}, p = v.extend({
			init: function (a) {
				this.options = a
			},
			parse: function (b) {
				var c = this.options.parse;
				if (z.func(c)) return c(b);
				if (z.string(b)) try {
					b = a.parseJSON(b)
				} catch (d) {}
				return b
			},
			data: function (a) {
				var b = this.options.data;
				return z.func(b) ? b(a) : z.string(b) ? B(a, b) : a
			},
			aggregates: function (a) {
				var b = this.options.aggregates;
				return z.func(b) ? b(a) : z.string(b) ? B(a, b) : d
			},
			groups: function (a) {
				var b = this.options.groups;
				return z.func(b) ? b(a) : z.string(b) ? B(a, b) : d
			},
			reverseData: function (a, b) {
				var c, d = this.options.data;
				if (z.func(d)) d(a, b);
				else if (z.string(d)) C(b, d, a);
				else if (z.array(b))
					for (b.length = 0, c = 0; c < a.length; c++) b[c] = a[c]
			},
			getReverseDataFirstItem: function (a) {
				var b = this.data(a);
				return z.array(b) && b.length > 0 ? b[0] : d
			},
			total: function (a, b) {
				var c = this.options.total;
				return a = a || [], b = b || [], z.func(c) ? c(a) : z.string(c) ? B(a, c) : b.length
			},
			fields: function (a) {
				var b = this,
					c = b.options.fields,
					d = b.model = u.define(c);
				return c ? e(a, function (a) {
					return p.mapFields(a, d.fn.fields)
				}) : a
			},
			reverseFields: function () {
				var a, b, c, d = this,
					e = d.options.fields,
					f = [].slice.call(arguments),
					g = f[0],
					h = f.length <= 1,
					i = h ? g : f[1];
				if (z.defined(e))
					for (c in e) e.hasOwnProperty(c) && (a = e[c], b = g[c], z.string(a.path) ? C(i, a.path, b) : z.func(a.path) ? a.path(g, b) : i[c] = b, h && delete i[c]);
				else if (!h && z.object(g))
					for (c in g) g.hasOwnProperty(c) && (i[c] = g[c])
			},
			process: function (a) {
				var b = this,
					c = b.parse(a),
					d = b.aggregates(a),
					e = b.groups(a),
					f = b.fields(b.data(c));
				return {
					data: f,
					aggregates: d,
					groups: e,
					total: b.total(c, f)
				}
			}
		}), p.mapFields = function (a, b) {
			var c, e, f, g = {};
			a = a || {};
			for (c in b) b.hasOwnProperty(c) && (e = b[c], z.string(e.path) ? (f = B(a, e.path), f === d && (f = B(a, c))) : f = z.func(e.path) ? e.path(a) : a[c], f === d ? e.type && (f = u.def(e.type, e.def, e.nullable)) : f = u.convert(f, e.type), g[c] = f);
			return g
		}, q = p.extend({
			parse: function (b) {
				var c = this,
					d = c.options;
				if (z.func(d.parse)) b = d.parse(b);
				else if (z.string(b)) try {
					b = a.parseXML(b)
				} catch (e) {}
				return b && 9 === b.nodeType && (b = c._json(c._root(b))), b
			},
			_root: function (a) {
				var b, c, d = a.childNodes;
				for (b = 0, c = d.length; b < c; b++)
					if (1 === d[b].nodeType) return d[b];
				return null
			},
			_json: function (a) {
				var b, c, d, e, f = {},
					g = {},
					h = "";
				for (d = 0, e = a.attributes.length; d < e; d++) b = a.attributes[d], f["_" + b.nodeName] = b.nodeValue;
				for (d = 0, e = a.childNodes.length; d < e; d++) switch (b = a.childNodes[d], c = b.nodeName, b.nodeType) {
					case 1:
						g[c] ? (z.array(f[c]) || (f[c] = [f[c]]), f[c].push(this._json(b))) : (f[c] = this._json(b), g[c] = !0);
						break;
					case 3:
						h += b.nodeValue;
						break;
					case 4:
						f._cdata = b.nodeValue
				}
				return h = h.replace(/^\s+(.*)\s+$/gim, "$1"), h && (f._text = h), f
			}
		}), r = p.extend({
			parse: function (b) {
				var c, d = this.options,
					e = d.parse,
					f = a(b),
					g = [],
					h = [];
				if (z.func(e)) return e(b);
				if (d.result) return d.result;
				if (!f[0] || "table" !== f[0].tagName.toLowerCase()) return b;
				f.eq(0).find("thead th").each(function () {
					h.push(a(this).text())
				}).end().find("tbody tr").each(function () {
					c = {}, a(this).children().each(function (b) {
						c[h[b]] = a(this).text()
					}), g.push(c)
				});
				return d.result = g, g
			}
		}), s = p.extend({
			parse: function (b) {
				var c = this.options,
					d = c.parse,
					e = a(b),
					f = [];
				return z.func(d) ? d(b) : c.result ? c.result : e[0] && "select" === e[0].tagName.toLowerCase() ? (e.find("option").each(function (b) {
					var c = a(this);
					f.push({
						value: c.attr("value"),
						text: c.text(),
						selected: c.is(":selected")
					})
				}), c.result = f, f) : b
			}
		}), n.schemas = {
			json: p,
			xml: q,
			table: r,
			select: s
		}, t = w.extend({
			init: function (a) {
				var b = this;
				b.original = a.data, b.data = Array.apply(null, a.data), b.model = a.model, b.changes = {
					added: [],
					edited: [],
					removed: []
				}, w.fn.init.call(this, a)
			},
			_model: function (a) {
				var b = this,
					c = new b.model(a);
				return c.on(P, G(b.trigger, b, P)), c.on(Q, G(b.trigger, b, Q)), c.on(U, G(b.trigger, b, P, {
					afterset: !0
				})), c
			},
			add: function (a) {
				return this.insert(this.data.length, a)
			},
			insert: function (a, b) {
				var c, d = this,
					e = d.data,
					f = d.changes;
				if (a < 0 || a > e.length) throw new Error("shield.DataSource: invalid item index: " + a);
				return c = d._model(b), f.added.push(c), e.splice(a, 0, c.data), d.trigger(P, {
					operation: V,
					index: a,
					model: c
				}), c
			},
			edit: function (a) {
				var b, c = this,
					d = c.data,
					e = c.changes;
				if (isNaN(a) || a < 0 || a >= d.length) throw new Error("shield.DataSource: invalid item index: " + a);
				return (b = I(e.added.concat(e.edited), function (b) {
					return b.data === d[a]
				})[0]) ? b : (b = c._model(d[a]), e.edited.push(b), d[a] = b.data, b)
			},
			remove: function (a) {
				var b = this,
					c = b.changes,
					d = I(c.added.concat(c.edited), function (b) {
						return b === a
					})[0],
					e = -1;
				if (a instanceof u ? d && (e = J(d.data, b.data)) : e = J(a, b.data), e > -1) return b.removeAt(e)
			},
			removeAt: function (a) {
				var b = this,
					c = b.data,
					d = b.changes,
					e = I(d.added.concat(d.edited), function (b) {
						return b.data === c[a]
					})[0];
				if (a < 0 || a > c.length) throw new Error("shield.DataSource: invalid item index: " + a);
				return e ? e.destroy() : e = new b.model(c[a]), d.removed.push(e), c.splice(a, 1), b.trigger(P, {
					operation: W,
					index: a,
					model: e
				}), e
			},
			destroy: function () {
				var a, b = this,
					c = b.changes,
					d = c.added.concat(c.edited).concat(c.removed);
				for (a = 0; a < d.length; a++) d[a].destroy();
				c.added.length = c.edited.length = c.removed.length = 0, b.data = b.original = null, w.fn.destroy.call(b)
			}
		}), u = w.extend({
			init: function (a, b) {
				var c = this;
				w.fn.init.call(c, b), c.fields = F(!0, {}, c.constructor.prototype.fields), c.data = F(!0, {}, a)
			},
			trigger: b.ui.Widget.fn.trigger,
			get: function (a) {
				return B(this.data, a)
			},
			set: function (a, b) {
				var c = this;
				b = c.validate(a, b), b !== d && (C(c.data, a, b), c.trigger(U))
			},
			validate: function (a, b) {
				var c, e, f = this,
					g = B(f.fields, a);
				if (!g) return b;
				if (D(g.validator) === L) c = g.validator;
				else if (D(g.type.validate) === L) c = g.type.validate;
				else {
					var h = g.type.toString().split("(")[0].split(" ")[1].toLowerCase();
					c = u.validators[h]
				}
				if (c) {
					if (e = c(b), e === d) return void f.trigger(Q, {
						errorType: "validation",
						path: a,
						value: b,
						error: "validation error"
					});
					b = e
				}
				return null === b && g.nullable === !1 ? void f.trigger(Q, {
					errorType: "validation",
					path: a,
					value: b,
					error: "null value not allowed"
				}) : b
			}
		}), u.define = function (a) {
			return u.extend({
				fields: u.normalize(F(!0, {}, a))
			})
		}, u.normalize = function (a) {
			var b, c, d;
			a = a || {};
			for (b in a) a.hasOwnProperty(b) && (c = a[b], d = D(c), d === L ? a[b] = {
				type: c
			} : d === M ? a[b] = {
				type: c
			} : d === O && (a[b] = {
				path: c
			}));
			return a
		}, u.def = function (a, b, c) {
			var e;
			return b !== d ? D(b) === L ? b() : b : c ? null : a === String ? "" : a === Number ? 0 : a === Date ? new Date : a !== Boolean && (a === Array ? [] : a === Object ? {} : (e = D(a), e === M ? [] : e === N ? {} : e === L ? a() : null))
		}, u.convert = function (a, b) {
			var c;
			return null == a ? a : b === String ? a.toString() : b === Number ? (c = parseFloat(a), isNaN(c) ? a : c) : b === Date ? (c = new Date(a), isNaN(c.getTime()) ? a : c) : b === Boolean ? z.string(a) ? !/^(false|0)$/i.test(a) : !!a : a
		}, u.validators = {
			string: function (a) {
				return null == a ? null : a.toString()
			},
			number: function (a) {
				return null === a ? null : isNaN(+a) ? d : +a
			},
			date: function (a) {
				return null === a ? null : a instanceof Date ? a : (a = new Date(a), isNaN(a.getTime()) ? d : a)
			},
			"boolean": function (a) {
				return null === a ? null : null == a ? d : !!a
			},
			array: function (a) {
				return null === a ? null : D(a) === M ? a : d
			},
			object: function (a) {
				return null === a ? null : D(a) === N ? a : d
			}
		}, o = n.extend({
			init: function (a) {
				F(a, {
					recursive: !0
				}), n.fn.init.call(this, a)
			}
		}), F(b, {
			map: e,
			DataSource: n,
			RecursiveDataSource: o,
			DataQuery: j,
			Model: u
		})
	}(jQuery, shield, this),
	function (a, b, c, d) {
		function e() {
			if (M(m)) return m;
			var b, c, d = a('<div style="width:50px;position:absolute;overflow:hidden;height:50px;display:block;"><div style="width:auto;height:100px;"></div></div>'),
				e = d.children()[0];
			return a(C.body).append(d), b = e.offsetWidth, d.css(ra, ya), c = e.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), m = b - c
		}

		function f(a) {
			var b = a.isWindow || a.isDocument ? "" : a.element.css(wa),
				c = a.isWindow || a.isDocument ? "" : a.element.css(xa),
				d = b === ya || b === sa && a.width < a.element[0].scrollWidth,
				f = c === ya || c === sa && a.height < a.element[0].scrollHeight;
			return {
				width: f ? e() : 0,
				height: d ? e() : 0
			}
		}

		function g(b) {
			var d = a(b || c),
				e = L(d[0]),
				f = !!d[0] && 9 === d[0].nodeType;
			return {
				element: d,
				isWindow: e,
				isDocument: f,
				offset: e ? {
					left: 0,
					top: 0
				} : d.offset() || {
					left: 0,
					top: 0
				},
				scrollLeft: d.scrollLeft(),
				scrollTop: d.scrollTop(),
				width: e || f ? d.width() : d.outerWidth(),
				height: e || f ? d.height() : d.outerHeight()
			}
		}

		function h(a, b, c) {
			return [T(a[0]) * (Z.test(a[0]) ? b / 100 : 1), T(a[1]) * (Z.test(a[1]) ? c / 100 : 1)]
		}

		function i(a, b) {
			var c = a.css(b);
			return c ? S(c) || 0 : 0
		}

		function j(a) {
			var b = a[0];
			return 9 === b.nodeType ? {
				width: a.width(),
				height: a.height(),
				offset: {
					top: 0,
					left: 0
				}
			} : L(b) ? {
				width: a.width(),
				height: a.height(),
				offset: {
					top: a.scrollTop(),
					left: a.scrollLeft()
				}
			} : b.preventDefault ? {
				width: 0,
				height: 0,
				offset: {
					top: b.pageY,
					left: b.pageX
				}
			} : {
				width: a.outerWidth(),
				height: a.outerHeight(),
				offset: a.offset()
			}
		}

		function k(b, c) {
			var d = 0,
				e = M(c) ? a(c).find(b) : a(b);
			return e.each(function (b) {
				d = F(d, i(a(this), "z-index"))
			}), d
		}

		function l(a) {
			return a.pageX || a.pageY ? {
				x: a.pageX,
				y: a.pageY
			} : {
				x: a.clientX + C.body.scrollLeft - C.body.clientLeft,
				y: a.clientY + C.body.scrollTop - C.body.clientTop
			}
		}
		var m, n, o, p, q, r, s, t, u, v, w, x, y, z = b.ui.Widget,
			A = (b.Class, b.Constants.KeyCode),
			B = b.error,
			C = document,
			D = Math.abs,
			E = Math.min,
			F = Math.max,
			G = Math.round,
			H = Math.floor,
			I = a.extend,
			J = a.proxy,
			K = a.each,
			L = a.isWindow,
			M = b.is.defined,
			N = b.is.func,
			O = b.is.number,
			P = b.is.object,
			Q = (b.is["null"], b.is.string),
			R = b.is.array,
			S = b.to["int"],
			T = b.to.number,
			U = b.to.string,
			V = /left|center|right/,
			W = /top|center|bottom/,
			X = /[\+\-]\d+(\.[\d]+)?%?/,
			Y = /^\w+/,
			Z = /%$/,
			$ = "mousedown",
			_ = "mouseup",
			aa = "mousemove",
			ba = "keydown",
			ca = "start",
			da = "stop",
			ea = "resize",
			fa = "resized",
			ga = "drag",
			ha = "drop",
			ia = "cancel",
			ja = "disabled",
			ka = "px",
			la = "left",
			ma = "right",
			na = "top",
			oa = "bottom",
			pa = "middle",
			qa = "center",
			ra = "overflow",
			sa = "auto",
			ta = "position",
			ua = "absolute",
			va = "relative",
			wa = "overflow-x",
			xa = "overflow-y",
			ya = "scroll",
			za = "horizontal",
			Aa = "vertical",
			Ba = "my",
			Ca = "at",
			Da = "marginLeft",
			Ea = "marginRight",
			Fa = "marginTop",
			Ga = "marginBottom",
			Ha = "flip",
			Ia = "pointer",
			Ja = "fit",
			Ka = "intersect",
			La = "sui-resizable",
			Ma = La + "-" + ja,
			Na = "sui-draggable",
			Oa = Na + "-" + ja,
			Pa = Na + "-dragging",
			Qa = "sui-unselectable",
			Ra = "sui-droppable",
			Sa = Ra + "-" + ja,
			Ta = Ra + "-over",
			Ua = 0;
		p = {}, p.GetWithinInfo = g, p.GetMaxZIndex = k, p.GetCoordinates = l, b.ui.Util = p, n = function () {
			return Ua++, o ? o : (this.init(), void(o = this))
		}, n.prototype = {
			_pos: null,
			init: function () {
				var b = this;
				a(C).on(aa + ".suiMouseTracker", J(b._onMouseMove, b))
			},
			_onMouseMove: function (a) {
				this._pos = this.getPosFromEvent(a)
			},
			getPosFromEvent: function (a) {
				return l(a)
			},
			getPosition: function (a) {
				var b = this;
				return null === b._pos && M(a) && (b._pos = b.getPosFromEvent(a)), b._pos
			},
			isInWindow: function (b) {
				var d = this,
					e = d.getPosition(b),
					f = e.x,
					g = e.y,
					h = a(c).scrollTop(),
					i = a(c).scrollLeft();
				return f >= i && f <= i + a(c).width() && g >= h && g <= h + a(c).height()
			},
			destroy: function () {
				--Ua > 0 || (a(C).off(aa + ".suiMouseTracker"), o = null)
			}
		}, b.MouseTracker = n, q = {}, q.Set = function (b, c, d) {
			if (!b || !c || !d) throw "Invalid arguments passed to Position.Set";
			var e, k, l, m, n, o, p = {
					my: d.source,
					at: d.target,
					collision: d.overflow,
					inside: d.inside
				},
				q = a(c),
				s = g(p.inside),
				t = f(s),
				u = (p.collision || Ha).split(" "),
				v = {};
			o = j(q), q[0].preventDefault && (p.at = "left top"), k = o.width, l = o.height, m = o.offset, n = I({}, m), K([Ba, Ca], function () {
				var a, b, c = this,
					d = (p[c] || "").split(" ");
				1 === d.length && (d = V.test(d[0]) ? d.concat([qa]) : W.test(d[0]) ? [qa].concat(d) : [qa, qa]), d[0] = V.test(d[0]) ? d[0] : qa, d[1] = W.test(d[1]) ? d[1] : qa, a = X.exec(d[0]), b = X.exec(d[1]), v[c] = [a ? a[0] : 0, b ? b[0] : 0], p[c] = [Y.exec(d[0])[0], Y.exec(d[1])[0]]
			}), 1 === u.length && (u[1] = u[0]), p.at[0] === ma ? n.left += k : p.at[0] === qa && (n.left += k / 2), p.at[1] === oa ? n.top += l : p.at[1] === qa && (n.top += l / 2), e = h(v.at, k, l), n.left += e[0], n.top += e[1];
			var w, x, y = a(b),
				z = y.outerWidth(),
				A = y.outerHeight(),
				B = i(y, Da),
				C = i(y, Fa),
				E = z + B + i(y, Ea) + t.width,
				H = A + C + i(y, Ga) + t.height,
				J = I({}, n),
				L = h(v.my, y.outerWidth(), y.outerHeight());
			p.my[0] === ma ? J.left -= z : p.my[0] === qa && (J.left -= z / 2), p.my[1] === oa ? J.top -= A : p.my[1] === qa && (J.top -= A / 2), J.left += L[0], J.top += L[1], J.left = G(J.left), J.top = G(J.top), w = {
				marginLeft: B,
				marginTop: C
			}, K([la, na], function (a, b) {
				r[u[a]] && r[u[a]][b](J, {
					targetWidth: k,
					targetHeight: l,
					elemWidth: z,
					elemHeight: A,
					collisionPosition: w,
					collisionWidth: E,
					collisionHeight: H,
					offset: [e[0] + L[0], e[1] + L[1]],
					my: p.my,
					at: p.at,
					within: s,
					elem: y
				})
			}), N(d.callback) && (x = function () {
				var a = m.left - J.left,
					b = a + k - z,
					c = m.top - J.top,
					e = c + l - A,
					f = {
						target: {
							element: q,
							left: m.left,
							top: m.top,
							width: k,
							height: l
						},
						element: {
							element: y,
							left: J.left,
							top: J.top,
							width: z,
							height: A
						},
						horizontal: b < 0 ? la : a > 0 ? ma : qa,
						vertical: e < 0 ? na : c > 0 ? oa : pa
					};
				k <= z && D(a + b) <= k && (f.horizontal = qa), l <= A && D(c + e) <= l && (f.vertical = pa), F(D(a), D(b)) > F(D(c), D(e)) ? f.important = za : f.important = Aa, d.callback(f)
			}), y.offset(J), x && x()
		}, r = {
			fit: {
				left: function (a, b) {
					var c, d = b.within,
						e = d.isWindow ? d.scrollLeft : d.offset.left,
						f = d.width,
						g = a.left - b.collisionPosition.marginLeft,
						h = e - g,
						i = g + b.collisionWidth - f - e;
					b.collisionWidth > f ? h > 0 && i <= 0 ? (c = a.left + h + b.collisionWidth - f - e, a.left += h - c) : i > 0 && h <= 0 ? a.left = e : h > i ? a.left = e + f - b.collisionWidth : a.left = e : h > 0 ? a.left += h : i > 0 ? a.left -= i : a.left = F(a.left - g, a.left)
				},
				top: function (a, b) {
					var c, d = b.within,
						e = d.isWindow ? d.scrollTop : d.offset.top,
						f = b.within.height,
						g = a.top - b.collisionPosition.marginTop,
						h = e - g,
						i = g + b.collisionHeight - f - e;
					b.collisionHeight > f ? h > 0 && i <= 0 ? (c = a.top + h + b.collisionHeight - f - e, a.top += h - c) : i > 0 && h <= 0 ? a.top = e : h > i ? a.top = e + f - b.collisionHeight : a.top = e : h > 0 ? a.top += h : i > 0 ? a.top -= i : a.top = F(a.top - g, a.top)
				}
			},
			flip: {
				left: function (a, b) {
					var c, d, e = b.within,
						f = e.offset.left + e.scrollLeft,
						g = e.width,
						h = e.isWindow ? e.scrollLeft : e.offset.left,
						i = a.left - b.collisionPosition.marginLeft,
						j = i - h,
						k = i + b.collisionWidth - g - h,
						l = b.my[0] === la ? -b.elemWidth : b.my[0] === ma ? b.elemWidth : 0,
						m = b.at[0] === la ? b.targetWidth : b.at[0] === ma ? -b.targetWidth : 0,
						n = -2 * b.offset[0];
					j < 0 ? (c = a.left + l + m + n + b.collisionWidth - g - f, (c < 0 || c < D(j)) && (a.left += l + m + n)) : k > 0 && (d = a.left - b.collisionPosition.marginLeft + l + m + n - h, (d > 0 || D(d) < k) && (a.left += l + m + n))
				},
				top: function (a, b) {
					var c, d, e = b.within,
						f = e.offset.top + e.scrollTop,
						g = e.height,
						h = e.isWindow ? e.scrollTop : e.offset.top,
						i = a.top - b.collisionPosition.marginTop,
						j = i - h,
						k = i + b.collisionHeight - g - h,
						l = b.my[1] === na,
						m = l ? -b.elemHeight : b.my[1] === oa ? b.elemHeight : 0,
						n = b.at[1] === na ? b.targetHeight : b.at[1] === oa ? -b.targetHeight : 0,
						o = -2 * b.offset[1];
					j < 0 ? (d = a.top + m + n + o + b.collisionHeight - g - f, a.top + m + n + o > j && (d < 0 || d < D(j)) && (a.top += m + n + o)) : k > 0 && (c = a.top - b.collisionPosition.marginTop + m + n + o - h, a.top + m + n + o > k && (c > 0 || D(c) < k) && (a.top += m + n + o))
				}
			},
			flipfit: {
				left: function () {
					r.flip.left.apply(this, arguments), r.fit.left.apply(this, arguments)
				},
				top: function () {
					r.flip.top.apply(this, arguments), r.fit.top.apply(this, arguments)
				}
			}
		}, b.ui.Position = q, y = {
			enabled: !0,
			cls: d,
			iframeFix: !1,
			resizeCls: d,
			delta: 1,
			handles: ["e", "w", "n", "s", "se", "sw", "ne", "nw"],
			handleWidth: 8,
			handleZIndex: 105,
			minHeight: 16,
			minWidth: 16,
			maxHeight: d,
			maxWidth: d,
			events: {}
		}, x = z.extend({
			init: function () {
				z.fn.init.apply(this, arguments), M(this.initialOptions.handles) && (this.options.handles = this.initialOptions.handles);
				var b = this,
					c = a(b.element),
					d = b.options,
					e = d.cls;
				b._eventNS = ".shieldResizable" + b.getInstanceId(), b.mouseTracker = new n, c.addClass(La + (e ? " " + e : "")), b._initHandles(), b.enabled(d.enabled)
			},
			_initHandles: function () {
				var b, c, d, e = this,
					f = a(e.element),
					g = (f.width(), f.height()),
					h = e.options,
					i = h.handles,
					j = h.handleWidth,
					k = j + ka,
					l = j + 2 + ka,
					m = "-" + (j - 2) + ka,
					n = h.handleZIndex;
				for (e.handles = [], d = 0; d < i.length; d++) {
					switch (b = U(i[d]).toLowerCase(), c = {}, b) {
						case "e":
							c = {
								width: k,
								height: g + ka,
								top: 0,
								right: m
							};
							break;
						case "w":
							c = {
								width: k,
								height: g + ka,
								top: 0,
								left: m
							};
							break;
						case "n":
							c = {
								width: "100%",
								height: k,
								top: m
							};
							break;
						case "s":
							c = {
								width: "100%",
								height: k,
								bottom: m
							};
							break;
						case "se":
							c = {
								width: l,
								height: l,
								bottom: m,
								right: m
							};
							break;
						case "sw":
							c = {
								width: l,
								height: l,
								bottom: m,
								left: m
							};
							break;
						case "ne":
							c = {
								width: l,
								height: l,
								top: m,
								right: m
							};
							break;
						case "nw":
							c = {
								width: l,
								height: l,
								top: m,
								left: m
							}
					}
					c.zIndex = n, e.handles[d] = {
						type: b
					}, e.handles[d][$] = J(e._handleMouseDown, e, d), e.handles[d].element = a('<div class="sui-resizable-handle sui-resizable-dir-' + b + '"></div>').appendTo(f).css(c).on($, e.handles[d][$])
				}
				a(C).on(_ + e._eventNS, J(e._handleMouseUp, e)).on(aa + e._eventNS, J(e._handleMouseMove, e))
			},
			_destroyHandles: function () {
				var b, c = this,
					d = c.handles;
				for (a(C).off(c._eventNS), b = 0; b < d.length; b++) a(c.handles[b].element).off($, c.handles[b][$]).remove();
				c.handles = []
			},
			_fixIframes: function () {
				var b, c = this,
					d = c.options.iframeFix;
				d && (b = d === !0 ? "iframe" : d, c._fixedFrames = a(C.body).find(b).map(function () {
					var b = a(this);
					return a("<div/>").css(ta, ua).appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
				}))
			},
			_unfixIframes: function () {
				var b = this;
				b._fixedFrames && (a(b._fixedFrames).remove(), delete b._fixedFrames)
			},
			_handleMouseDown: function (b, c) {
				var d = this;
				d._enabled && !d.resizing && (d.resizing = !0, d.resizingHandle = b, d.oldPos = d.mouseTracker.getPosition(c), d.startSent = !1, a(d.element).addClass(Qa), d._fixIframes())
			},
			_handleMouseMove: function (b) {
				var c, d, e, f, g, h, j, k, l, m, n, o, p, q, r = this,
					s = a(r.element),
					t = r.options,
					u = t.delta,
					v = t.minWidth,
					w = t.maxWidth,
					x = t.minHeight,
					y = t.maxHeight,
					z = t.resizeCls,
					A = r.resizingHandle,
					B = r.handles,
					C = r.mouseTracker,
					E = r.oldPos;
				if (C.isInWindow(b) && r.resizing && M(A) && (e = C.getPosition(b), f = e.x - E.x, g = e.y - E.y, c = B[A], d = c.type, D(f) >= u || D(g) >= u)) {
					switch (/^(se|sw|ne|nw)$/i.test(d) || (/^(e|w)$/i.test(d) ? g = 0 : f = 0), D(f) < u && (f = 0), D(g) < u && (g = 0), h = f, j = g, k = 0, l = 0, d) {
						case "w":
							h = -f, k = -h;
							break;
						case "n":
							j = -g, l = -j;
							break;
						case "nw":
							h = -f, j = -g, k = -h, l = -j;
							break;
						case "sw":
							h = -f, k = -h;
							break;
						case "ne":
							j = -g, l = -j
					}
					if (o = s.width(), p = s.height(), m = i(s, na), n = i(s, la), h > 0 ? (M(w) && o + h > w && (h = w - o, 0 !== k && (k = -h)), n + k < 0 && (h -= n - k, k = -h)) : h < 0 && M(v) && o + h < v && (h = v - o, 0 !== k && (k = -h)), j > 0 ? (M(y) && p + j > y && (j = y - p, 0 !== l && (l = -j)), m + l < 0 && (j -= m - l, l = -j)) : j < 0 && M(x) && p + j < x && (j = x - p, 0 !== l && (l = -j)), 0 !== h || 0 !== j) {
						r.startSent || (r.startSent = !0, r.trigger(ca), z && s.addClass(z));
						var F = r.trigger(ea, {
							deltaX: h,
							deltaY: j
						});
						if (!F.isDefaultPrevented()) {
							if (s.width(o + h).height(p + j), 0 === k && 0 === l || s.css({
									top: m + l + ka,
									left: n + k + ka
								}), r.oldPos.x = r.oldPos.x + f, r.oldPos.y = r.oldPos.y + g, 0 !== g)
								for (q = 0; q < B.length; q++) c = B[q], /^(e|w)$/i.test(c.type) && a(c.element).height(p + j);
							r.trigger(fa)
						}
					}
				}
			},
			_handleMouseUp: function (b) {
				var c = this,
					e = !!c.startSent,
					f = c.options.resizeCls;
				c._unfixIframes(), c.resizing && (c.resizing = !1, c.resizingHandle = d, c.oldPos = d, c.startSent = !1, e && c.trigger(da), a(c.element).removeClass(Qa + (f ? " " + f : "")))
			},
			resize: function (b, c) {
				var d = this,
					e = d.options;
				b = F(E(b, e.maxWidth), e.minWidth), c = F(E(c, e.maxHeight), e.minHeight), a(d.element).width(b).height(c)
			},
			enabled: function () {
				var b, c = this,
					d = a(c.element),
					e = [].slice.call(arguments);
				return e.length > 0 ? (b = !!e[0], b ? d.removeClass(Ma) : d.addClass(Ma), c._enabled = b, void 0) : c._enabled
			},
			destroy: function () {
				var b = this,
					c = b.options.cls;
				b.mouseTracker.destroy(), b.mouseTracker = null, a(b.element).removeClass(La + (c ? " " + c : "")), b._destroyHandles(), z.fn.destroy.call(b)
			}
		}), x.defaults = y, b.ui.plugin("Resizable", x), s = {
			droppables: {
				"default": []
			},
			Register: function (a) {
				var b = a.options.scope;
				s.droppables[b] = s.droppables[b] || [], s.droppables[b].push(a)
			},
			UnRegister: function (a) {
				var b, c = a.options.scope,
					d = s.droppables[c];
				for (b = 0; b < d.length; b++) d[b] === a && d.splice(b, 1)
			},
			PrepareOffsets: function (b, c) {
				var d, e, f, g = s.droppables[b.options.scope] || [],
					h = a(b.helper || b.element);
				for (f = 0; f < g.length; f++) d = g[f].enabled(), e = g[f].visible(), g[f].ddIsEnabled = d, g[f].ddIsVisible = e, !d || !e || b && !g[f].accepts(b.element) || b && b.element.get(0) === g[f].element.get(0) || (g[f].ddOffset = g[f].element.offset(), g[f].proportions({
					width: g[f].element[0].offsetWidth,
					height: g[f].element[0].offsetHeight
				}));
				b.proportions({
					width: h[0].offsetWidth,
					height: h[0].offsetHeight
				})
			},
			DragStart: function (a, b) {
				s.PrepareOffsets(a, b)
			},
			Drag: function (a, b) {
				var c, d, e = s.droppables[a.options.scope] || [],
					f = e.length;
				for (d = 0; d < f; d++) !e[d].ddIsEnabled || !e[d].ddIsVisible || a && !e[d].accepts(a.element) || a && a.element.get(0) === e[d].element.get(0) || (c = s.Intersects(a, e[d], b), c ? e[d].ddIsOver || (e[d].ddIsOver = !0, e[d].over(a, b)) : e[d].ddIsOver && (e[d].ddIsOver = !1, e[d].out(a, b)))
			},
			Drop: function (a, b) {
				var c, d, e, f, g, h = s.droppables[a.options.scope] || [],
					i = h.length;
				for (d = 0; d < i; d++) !h[d].ddIsEnabled || !h[d].ddIsVisible || a && !h[d].accepts(a.element) || a && a.element.get(0) === h[d].element.get(0) || (h[d].stop(), c = s.Intersects(a, h[d], b), h[d].ddIsOver = !1, c && (g = h[d].drop(a, b), g.isDefaultPrevented() && (e = !0), g.skipAnimation && (f = !0)));
				return {
					cancelled: e,
					skipAnimation: f
				}
			},
			Intersects: function (b, c, d) {
				var e, f, g, h, i, j, k, l, m, o = c.options.tolerance,
					p = P(o) ? o.x : o,
					q = P(o) ? o.y : o,
					r = c.proportions(),
					t = c.ddOffset,
					u = r.width,
					v = r.height,
					w = t.left,
					x = t.top;
				if (p == Ia) {
					var y = new n;
					m = y.getPosition(d), y.destroy(), e = w <= m.x && w + u >= m.x
				} else g = b.proportions(), h = g.width, i = g.height, j = a(b.helper || b.element).offset(), k = j.left, l = j.top, e = p == Ja ? s._linesOverlap(k, k + h, w, w + u, h) : p == Ka ? s._linesOverlap(k, k + h, w, w + u, h / 2) : s._linesOverlap(k, k + h, w, w + u, 0);
				if (!e) return !1;
				if (q == Ia) {
					if (!m) {
						var z = new n;
						m = z.getPosition(d), z.destroy()
					}
					f = x <= m.y && x + v >= m.y
				} else g || (g = b.proportions(), h = g.width, i = g.height, j = a(b.helper || b.element).offset(), k = j.left, l = j.top), f = q == Ja ? s._linesOverlap(l, l + i, x, x + v, i) : q == Ka ? s._linesOverlap(l, l + i, x, x + v, i / 2) : s._linesOverlap(l, l + i, x, x + v, 0);
				return e && f
			},
			_linesOverlap: function (a, b, c, d, e) {
				return M(e) || (e = 0), a < c && b < d ? b - c > e : !(a > c && b > d) || d - a > e
			}
		}, b.ui.DDManager = s, u = {
			enabled: !0,
			iframeFix: !1,
			cls: d,
			dragCls: d,
			scope: "default",
			handle: d,
			direction: d,
			min: d,
			max: d,
			step: d,
			allowedPositions: d,
			stack: !0,
			helper: d,
			appendTo: "parent",
			animation: {
				enabled: !0,
				revertDuration: 200
			},
			events: {}
		}, t = z.extend({
			init: function () {
				z.fn.init.apply(this, arguments);
				var b, c = this,
					d = a(c.element),
					e = c.options,
					f = e.cls;
				c._destroyed && (c._destroyed = !1), c._eventNS = ".shieldDraggable" + c.getInstanceId(), c.mouseTracker = new n, d.addClass(Na + (f ? " " + f : "")), b = d.css(ta), b !== va && b !== ua && (c._origPosStyle = b, d.css(ta, va)), c.enabled(e.enabled), c.startSent = !1
			},
			proportions: function () {
				var a = this;
				return arguments.length > 0 ? void(a._proportions = arguments[0]) : a._proportions ? a._proportions : a._proportions = {
					width: a.element[0].offsetWidth,
					height: a.element[0].offsetHeight
				}
			},
			_fixIframes: function () {
				var b, c = this,
					d = c.options.iframeFix;
				d && (b = d === !0 ? "iframe" : d, c._fixedFrames = a(C.body).find(b).map(function () {
					var b = a(this);
					return a("<div/>").css(ta, ua).appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
				}))
			},
			_unfixIframes: function () {
				var b = this;
				b._fixedFrames && (a(b._fixedFrames).remove(), delete b._fixedFrames)
			},
			_handleMouseDown: function (b) {
				var c = this,
					d = c._eventNS;
				!c._enabled || c._destroyed || c._dragging || (a(C.body).addClass(Qa), c._dragging = !0, c.startSent = !1, c.helper = c._isCustomHelper = null, c.stepPosition = c.mousePos = c.mouseTracker.getPosition(b), a(C).on(aa + d, J(c._handleMouseMove, c)).on(_ + d, J(c._handleMouseUp, c)).on(ba + d, J(c._handleKeyDown, c)), c._fixIframes())
			},
			_initHelper: function (b) {
				var c, d = this,
					e = d.element,
					f = d.options,
					g = f.helper,
					h = f.appendTo,
					j = f.cls,
					k = f.dragCls;
				d._helperInitialized || (g && "original" !== g ? (c = N(g) ? g.call(d, {
					position: d.oriPosition,
					event: b
				}) : "clone" == g ? e.clone() : a(g), c.parents("body").length || ("parent" === h ? e.after(c) : h && "body" !== h ? c.appendTo(a(h)) : c.appendTo(C.body)), /(fixed|absolute)/i.test(c.css(ta)) || c.css(ta, ua), q.Set(c, e, {
					source: "left top",
					target: "left top",
					overflow: "none"
				}), d._isCustomHelper = !0) : (c = e, d._isCustomHelper = !1), d.helper = c, c.addClass(Qa + " " + Na + (j ? " " + j : "") + " " + Pa + (k ? " " + k : "")), d.oriPosition = {
					left: i(c, la),
					top: i(c, na)
				}, d._helperInitialized = !0)
			},
			_handleMouseMove: function (b) {
				var c, e, f, g, h, j, k, l, m, n, o, p, q = this,
					r = q.options,
					t = r.step,
					u = r.direction,
					v = r.allowedPositions,
					w = v !== d && v.length > 0,
					x = r.min,
					y = r.max,
					z = q.mouseTracker,
					A = z.getPosition(b);
				if (z.isInWindow(b) && q._dragging) {
					if (q._initHelper(b), n = a(q.helper), o = n.width(), p = n.height(), g = i(n, na), h = i(n, la), w) {
						var B, C, G, I, J, K, L = d,
							Q = d,
							R = d,
							S = d;
						for (B = A.x - q.stepPosition.x, C = A.y - q.stepPosition.y, G = h + B, I = g + C, J = 0; J < v.length; J++) K = v[J], K.x !== d && (R === d || R > D(G - K.x)) && (R = D(G - K.x), L = J), K.y !== d && (S === d || S > D(I - K.y)) && (S = D(I - K.y), Q = J);
						j = h, k = g, L !== d && (j = v[L].x, q.stepPosition.x += v[L].x - h), Q !== d && (k = v[Q].y, q.stepPosition.y += v[Q].y - g)
					} else {
						if (l = u == Aa ? 0 : A.x - q.mousePos.x, m = u == za ? 0 : A.y - q.mousePos.y, M(t)) {
							if (c = N(t) ? t.call(this, {
									deltaX: l,
									deltaY: m,
									element: n,
									domEvent: b,
									helperLeft: i(n, la),
									helperTop: i(n, na),
									mouse: A
								}) : t, O(c) ? e = f = c : P(c) && (e = c.x, f = c.y), M(e) && D(l) < e && M(f) && D(m) < f) return;
							M(e) && e > 1 && l % e !== 0 && (l = (l >= 0 ? 1 : -1) * H(D(l) / e) * e), M(f) && f > 1 && m % f !== 0 && (m = (m >= 0 ? 1 : -1) * H(D(m) / f) * f)
						}
						j = h + l, k = F(0, g + m)
					}
					u == za && (x !== d && (j = F(x, j), j === x && (l = 0)), y !== d && (j = E(y - o, j), j === y - o && (l = 0))), u == Aa && (x && (k = F(x, k), k === x && (m = 0)), y && (k = E(y - p, k), k === y - p && (m = 0))), n.css({
						left: j,
						top: k
					}), q.mousePos = A, q.startSent || (q.startSent = !0, q.trigger(ca, {
						element: n,
						domEvent: b
					}), q._adjustZIndex(), s.DragStart(q, b)), q.trigger(ga, {
						deltaX: l,
						deltaY: m,
						element: n,
						domEvent: b
					}), s.Drag(q, b)
				}
			},
			_handleMouseUp: function (b) {
				var c, d, e, f, g = this,
					h = g.element,
					j = g.helper,
					k = g.options.animation;
				g._unfixIframes(), a(C.body).removeClass(Qa), g._dragging && (g.startSent ? (d = s.Drop(g, b), e = d.cancelled, f = d.skipAnimation, c = g.trigger(da, {
					left: i(j, la),
					top: i(j, na),
					element: j,
					domEvent: b,
					cancelled: e,
					skipAnimation: f
				}), f = c.skipAnimation, e = c.cancelled, e === !0 || c.isDefaultPrevented() ? a(j).animate({
					left: g.oriPosition.left,
					top: g.oriPosition.top
				}, !f && k && k.enabled ? k.revertDuration : 0, J(g._endDrag, g)) : (g._isCustomHelper && (q.Set(h, j, {
					source: "left top",
					target: "left top",
					overflow: "none"
				}), g._adjustZIndex(h)), g._endDrag())) : g._endDrag())
			},
			_adjustZIndex: function (b) {
				var c = this,
					d = c.options.stack;
				d !== !1 && (M(b) || (b = c.helper), a(b).css("z-index", k(d === !0 ? "." + Na : d) + 1))
			},
			_handleKeyDown: function (a) {
				var b = this,
					c = a.keyCode;
				switch (c) {
					case A.ESC:
						b._dragging && (b.helper.css({
							left: b.oriPosition.left + ka,
							top: b.oriPosition.top + ka
						}), b.trigger(ia), b._unfixIframes(), b._endDrag())
				}
			},
			_endDrag: function () {
				var b = this,
					c = b.options.dragCls;
				b._dragging = !1, b._isCustomHelper ? a(b.helper).remove() : a(b.helper).removeClass(Qa + " " + Pa + (c ? " " + c : "")), a(C).off(b._eventNS), b.mousePos = b.oriPosition = b.helper = b._isCustomHelper = b._helperInitialized = null
			},
			enabled: function () {
				var b, c = this,
					d = a(c.element),
					e = c.options,
					f = e.handle ? a(e.handle) : d,
					g = [].slice.call(arguments);
				return g.length > 0 ? (b = !!g[0], b ? (d.removeClass(Oa), c._mouseDownProxy || (c._mouseDownProxy = J(c._handleMouseDown, c), f.on($, c._mouseDownProxy))) : (d.addClass(Oa), c._mouseDownProxy && (f.off($, c._mouseDownProxy), c._mouseDownProxy = null)), c._enabled = b, void 0) : c._enabled
			},
			destroy: function () {
				var b = this,
					c = b.options.cls;
				b.enabled(!1), b.mouseTracker && (b.mouseTracker.destroy(), b.mouseTracker = null), a(b.element).removeClass(Na + " " + Oa + (c ? " " + c : "")), b._origPosStyle && (a(b.element).css(ta, b._origPosStyle), b._origPosStyle = null), b._destroyed = !0, z.fn.destroy.call(b)
			}
		}), t.defaults = u, b.ui.plugin("Draggable", t), w = {
			enabled: !0,
			accepts: "*",
			cls: d,
			hoverCls: d,
			tolerance: "intersect",
			scope: "default",
			events: {}
		}, v = z.extend({
			init: function () {
				z.fn.init.apply(this, arguments);
				var b = this,
					c = a(b.element),
					d = b.options,
					e = d.dieOnError,
					f = d.accepts,
					g = d.cls;
				return Q(f) || R(f) || f instanceof a || N(f) ? (b._eventNS = ".shieldDroppable" + b.getInstanceId(), c.addClass(Ra + (g ? " " + g : "")), s.Register(b), void b.enabled(d.enabled)) : void B("shieldDroppable: The accepts option must be a string, array, function or jQuery object.", e)
			},
			accepts: function (b) {
				var c = this.options.accepts;
				return N(c) ? c.call(this, b) : a(b).is(c)
			},
			proportions: function () {
				var a = this;
				return arguments.length > 0 ? void(a._proportions = arguments[0]) : a._proportions ? a._proportions : a._proportions = {
					width: a.element[0].offsetWidth,
					height: a.element[0].offsetHeight
				}
			},
			over: function (b, c) {
				var d = this,
					e = d.options.hoverCls,
					f = d.trigger("over", {
						draggable: b.element,
						droppable: this.element,
						domEvent: c
					});
				f.isDefaultPrevented() || a(d.element).addClass(Ta + (e ? " " + e : ""))
			},
			out: function (b, c) {
				var d = this,
					e = d.options.hoverCls;
				d.trigger("out", {
					draggable: b.element,
					droppable: this.element,
					domEvent: c
				}), a(d.element).removeClass(Ta + (e ? " " + e : ""))
			},
			stop: function () {
				var b = this.options.hoverCls;
				a(this.element).removeClass(Ta + (b ? " " + b : ""))
			},
			drop: function (a, b) {
				return this.trigger(ha, {
					draggable: a.element,
					droppable: this.element,
					cancelled: b.cancelled,
					skipAnimation: b.skipAnimation,
					domEvent: b
				})
			},
			enabled: function () {
				var b, c = this,
					d = [].slice.call(arguments);
				return d.length > 0 ? (b = !!d[0], b ? a(c.element).removeClass(Sa) : a(c.element).addClass(Sa), c._enabled = b, void 0) : c._enabled
			},
			destroy: function () {
				var b = this,
					c = b.options.cls;
				s.UnRegister(b), a(b.element).removeClass(Ra + Sa + Qa + (c ? " " + c : "")), b._enabled = b._proportions = d, z.fn.destroy.call(b)
			}
		}), v.defaults = w, b.ui.plugin("Droppable", v)
	}(jQuery, shield, this),
	function (a, b, c, d) {
		var e, f, g, h, i, j, k, l = b.exp = b.exp || {},
			m = b.Class,
			n = (b.DataSource, b.support.browser),
			o = b.iid,
			p = document,
			q = a.extend,
			r = a.map,
			s = a.each,
			t = b.is,
			u = t.string,
			v = t.array,
			w = t.number,
			x = t["boolean"],
			y = t.date,
			z = t.defined,
			A = t["null"],
			B = t.func,
			C = t.object,
			D = b.to["int"],
			E = b.to.key,
			F = b.error,
			G = b.keys,
			H = (b.get, b.Constants.XHTML_NS),
			I = "application/octet-stream",
			J = "download",
			K = "Untitled",
			L = function () {},
			M = "author",
			N = "creator",
			O = "l",
			P = "p",
			Q = "mm",
			R = "in",
			S = "pt",
			T = "cm",
			U = "px",
			V = "pc",
			W = "em",
			X = "ex",
			Y = "RG",
			Z = "helvetica",
			$ = "times",
			_ = "sans-serif",
			aa = "arial",
			ba = "verdana",
			ca = "fixed",
			da = "monospace",
			ea = "serif",
			fa = "terminal",
			ga = "cursive",
			ha = "fantasy",
			ia = "courier",
			ja = "normal",
			ka = "bold",
			la = "italic",
			ma = "bolditalic",
			na = "center",
			oa = "both",
			pa = "S",
			qa = "F",
			ra = "FD",
			sa = "DF",
			ta = "B",
			ua = "f*",
			va = "B*",
			wa = 19.049976 / 25.4,
			xa = function (b) {
				return a("<div/>").text(b).html().replace('"', "&quot;").replace(/(?:[\x00-\x08]|[\x0B-\x0C]|[\x0E-\x1F])/g, "")
			},
			ya = function (b) {
				return a("<div/>").html(b).text()
			},
			za = function (a) {
				y(a) || (u(a) && (a = a.replace(/\s+/g, "")), a = new Date(a));
				var b = 25569 + a.getTime() / 864e5;
				return b.toString()
			},
			Aa = function (a) {
				return z(a) ? y(a) ? a : new Date(u(a) ? a.replace(/\s+/g, "") : a) : new Date
			},
			Ba = function (a) {
				return Aa(a).toISOString().replace(/\.\d+/, "")
			},
			Ca = function (a) {
				return z(a) && u(a) && a.length > 0 ? a.charAt(0).toUpperCase() + a.substr(1) : a
			},
			Da = function (a) {
				return a ? 1 : 0
			},
			Ea = function (a) {
				return ("FF" + a).replace("#", "").toUpperCase()
			},
			Fa = function (a) {
				for (var b, c = D(a), d = ""; c > 0;) b = (c - 1) % 26, d = String.fromCharCode(65 + b) + d, c = D((c - b) / 26);
				return d
			},
			Ga = function (a, b) {
				return Fa(b) + a
			},
			Ha = function (a, b) {
				return '<?xml version="1.0"' + (a ? ' encoding="UTF-8"' : "") + (b ? ' standalone="yes"' : "") + "?>\n"
			},
			Ia = function () {
				return Ha(1, 1)
			},
			Ja = function (a) {
				return a
			},
			Ka = function (a, b) {
				return b = z(b) ? b : 7, Ja(((a - 5) / 7 * 100 + .5) / 100)
			},
			La = function (a, b) {
				return b = z(b) ? b : 7, Ja((a * b + 5) / b * 256 / 256)
			},
			Ma = function (a, b) {
				if (a && b) {
					var c = a.indexOf(b);
					return c >= 0 && c === a.length - b.length
				}
				return !1
			};
		! function (a) {
			var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
			z(a.btoa) || (a.btoa = function (a) {
				var c, d, e, f, g, h, i, j, k = 0,
					l = 0,
					m = "",
					n = [];
				if (!a) return a;
				do c = a.charCodeAt(k++), d = a.charCodeAt(k++), e = a.charCodeAt(k++), j = c << 16 | d << 8 | e, f = j >> 18 & 63, g = j >> 12 & 63, h = j >> 6 & 63, i = 63 & j, n[l++] = b.charAt(f) + b.charAt(g) + b.charAt(h) + b.charAt(i); while (k < a.length);
				m = n.join("");
				var o = a.length % 3;
				return (o ? m.slice(0, o - 3) : m) + "===".slice(o || 3)
			}), z(a.atob) || (a.atob = function (a) {
				var c, d, e, f, g, h, i, j, k = 0,
					l = 0,
					m = "",
					n = [];
				if (!a) return a;
				a += "";
				do f = b.indexOf(a.charAt(k++)), g = b.indexOf(a.charAt(k++)), h = b.indexOf(a.charAt(k++)), i = b.indexOf(a.charAt(k++)), j = f << 18 | g << 12 | h << 6 | i, c = j >> 16 & 255, d = j >> 8 & 255, e = 255 & j, 64 == h ? n[l++] = String.fromCharCode(c) : 64 == i ? n[l++] = String.fromCharCode(c, d) : n[l++] = String.fromCharCode(c, d, e); while (k < a.length);
				return m = n.join("")
			})
		}(c),
		function () {
			if (c.URL = c.URL || c.webkitURL, c.Blob && c.URL) try {
				new c.Blob;
				return void(l.Blob = c.Blob)
			} catch (a) {}
			var b = c.BlobBuilder || c.WebKitBlobBuilder || c.MozBlobBuilder || function () {
				var a = function (a) {
						return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]
					},
					b = function () {
						this.data = []
					},
					d = function (a, b, c) {
						var d = this;
						d.data = a, d.size = a.length, d.type = b, d.encoding = c
					},
					e = b.prototype,
					f = d.prototype,
					g = c.FileReaderSync,
					h = function (a) {
						var b = this;
						b.code = b[b.name = a]
					},
					i = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),
					j = i.length,
					k = c.URL || c.webkitURL || c,
					l = k.createObjectURL,
					m = k.revokeObjectURL,
					n = k,
					o = c.btoa,
					q = c.atob,
					r = c.ArrayBuffer,
					s = c.Uint8Array,
					t = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
				for (d.fake = f.fake = !0; j--;) h.prototype[i[j]] = j + 1;
				return k.createObjectURL || (n = c.URL = function (a) {
					var b, c = p.createElementNS(H, "a");
					return c.href = a, "origin" in c || ("data:" === c.protocol.toLowerCase() ? c.origin = null : (b = a.match(t), c.origin = b && b[1])), c
				}), n.createObjectURL = function (a) {
					var b, c = a.type;
					return A(c) && (c = I), a instanceof d ? (b = "data:" + c, "base64" === a.encoding ? b + ";base64," + a.data : "URI" === a.encoding ? b + "," + decodeURIComponent(a.data) : o ? b + ";base64," + o(a.data) : b + "," + encodeURIComponent(a.data)) : l ? l.call(k, a) : void 0
				}, n.revokeObjectURL = function (a) {
					"data:" !== a.substring(0, 5) && m && m.call(k, a)
				}, e.append = function (b) {
					var e = this.data;
					if (z(s) && (b instanceof r || b instanceof s)) {
						var f, i = "",
							j = new s(b),
							k = j.length;
						for (f = 0; f < k; f++) i += String.fromCharCode(j[f]);
						e.push(i)
					} else if ("Blob" === a(b) || "File" === a(b)) {
						if (!g) throw new h("NOT_READABLE_ERR");
						var l = new g;
						e.push(l.readAsBinaryString(b))
					} else b instanceof d ? "base64" === b.encoding && q ? e.push(q(b.data)) : "URI" === b.encoding ? e.push(decodeURIComponent(b.data)) : "raw" === b.encoding && e.push(b.data) : (b += "", e.push(c.unescape(encodeURIComponent(b))))
				}, e.getBlob = function (a) {
					return arguments.length || (a = null), new d(this.data.join(""), a, "raw")
				}, e.toString = function () {
					return "[object BlobBuilder]"
				}, f.slice = function (a, b, c) {
					var e = this,
						f = arguments.length;
					return f < 3 && (c = null), new d(e.data.slice(a, f > 1 ? b : e.data.length), c, e.encoding)
				}, f.toString = function () {
					return "[object Blob]"
				}, f.close = function () {
					this.size = 0, delete this.data
				}, b
			}();
			l.Blob = function (a, d) {
				var e, f, g, h = d ? d.type || "" : "",
					i = new b,
					j = c.Uint8Array;
				if (a)
					for (e = 0, f = a.length; e < f; e++) z(j) && j && a[e] instanceof j ? i.append(a[e].buffer) : i.append(a[e]);
				return g = i.getBlob(h), !g.slice && g.webkitSlice && (g.slice = g.webkitSlice), g
			};
			var d = Object.getPrototypeOf || function (a) {
				return a.__proto__
			};
			l.Blob.prototype = d(new l.Blob)
		}(),
		function () {
			var b = c.saveAs || function () {
				if (n.ie && n.version < 10) return d;
				var a = function () {
						return c.URL || c.webkitURL || c
					},
					b = p.createElementNS(H, "a"),
					e = J in b,
					f = function (a) {
						var b = new MouseEvent("click");
						a.dispatchEvent(b)
					},
					g = c.webkitRequestFileSystem,
					h = c.requestFileSystem || g || c.mozRequestFileSystem,
					i = function (a) {
						(c.setImmediate || c.setTimeout)(function () {
							throw a
						}, 0)
					},
					j = I,
					k = 0,
					l = 500,
					m = function (b) {
						var d = function () {
							u(b) ? a().revokeObjectURL(b) : b.remove()
						};
						c.chrome ? d() : setTimeout(d, l)
					},
					o = function (a, b, c) {
						var d, e;
						for (b = [].concat(b), d = b.length; d--;)
							if (e = a["on" + b[d]], B(e)) try {
								e.call(a, c || a)
							} catch (f) {
								i(f)
							}
					},
					q = function (a) {
						return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\ufeff", a], {
							type: a.type
						}) : a
					},
					r = function (d, i, l) {
						l || (d = q(d));
						var n, p, r, s = this,
							t = d.type,
							u = !1,
							v = function () {
								o(s, "writestart progress write writeend".split(" "))
							},
							w = function () {
								var b;
								!u && n || (n = a().createObjectURL(d)), p ? p.location.href = n : (b = c.open(n, "_blank"), z(b) || "undefined" == typeof safari || (c.location.href = n)), s.readyState = s.DONE, v(), m(n)
							},
							x = function (a) {
								return function () {
									if (s.readyState !== s.DONE) return a.apply(this, arguments)
								}
							},
							y = {
								create: !0,
								exclusive: !1
							};
						return s.readyState = s.INIT, i || (i = K), e ? (n = a().createObjectURL(d), b.href = n, b.download = i, void setTimeout(function () {
							f(b), v(), m(n), s.readyState = s.DONE
						})) : (c.chrome && t && t !== j && (r = d.slice || d.webkitSlice, d = r.call(d, 0, d.size, j), u = !0), g && i !== J && (i += "." + J), (t === j || g) && (p = c), h ? (k += d.size, void h(c.TEMPORARY, k, x(function (a) {
							a.root.getDirectory("saved", y, x(function (a) {
								var b = function () {
									a.getFile(i, y, x(function (a) {
										a.createWriter(x(function (b) {
											b.onwriteend = function (b) {
												p.location.href = a.toURL(), s.readyState = s.DONE, o(s, "writeend", b), m(a)
											}, b.onerror = function () {
												var a = b.error;
												a.code !== a.ABORT_ERR && w()
											}, "writestart progress write abort".split(" ").forEach(function (a) {
												b["on" + a] = s["on" + a]
											}), b.write(d), s.abort = function () {
												b.abort(), s.readyState = s.DONE
											}, s.readyState = s.WRITING
										}), w)
									}), w)
								};
								a.getFile(i, {
									create: !1
								}, x(function (a) {
									a.remove(), b()
								}), x(function (a) {
									a.code === a.NOT_FOUND_ERR ? b() : w()
								}))
							}), w)
						}), w)) : void w())
					},
					s = r.prototype,
					t = function (a, b, c) {
						return new r(a, b, c)
					};
				return z(navigator) && navigator.msSaveOrOpenBlob ? function (a, b, c) {
					return c || (a = q(a)), navigator.msSaveOrOpenBlob(a, b || K)
				} : (s.abort = function () {
					var a = this;
					a.readyState = a.DONE, o(a, "abort")
				}, s.readyState = s.INIT = 0, s.WRITING = 1, s.DONE = 2, s.error = s.onwritestart = s.onprogress = s.onwrite = s.onabort = s.onerror = s.onwriteend = null, t)
			}();
			l.saveAs = function (d) {
				var f = d.content,
					g = d.contentType,
					h = d.name,
					i = d.noAutoBom,
					j = d.proxy,
					k = "suidlifrm" + o();
				z(b) && !d.forceProxy ? b(new l.Blob([f], {
					type: g
				}), h, i) : j ? (a(e).remove(), e = a('<div style="display:none;"><iframe name="' + k + '"></iframe></div>').appendTo(p.body), a('<form action="' + j + '" target="' + k + '" method="POST"><input type="hidden" name="fileName" value="' + h + '"/><input type="hidden" name="contentType" value="' + g + '"/><input type="hidden" name="base64content" value="' + c.btoa(f) + '"/></form>').appendTo(e).submit()) : F("shield.export.saveAs: No proxy url set for older browser support", d.dieOnError)
			}, l.saveAsNative = z(b)
		}(), f = m.extend({
			init: function (a) {
				this.options = q(!0, {}, a)
			},
			getExt: null,
			getContentType: null,
			getContent: null,
			saveAs: function (a) {
				var b = this,
					c = a.fileName,
					d = !z(a.forceExt) || !!a.forceExt,
					e = b.getExt(),
					f = !l.saveAsNative || a.forceProxy ? {
						type: "string"
					} : {},
					g = b.getContent(f);
				return z(g) ? (c || (c = K), c += "", !Ma(c, e) && d && (c += e), void l.saveAs({
					content: g,
					contentType: b.getContentType(),
					name: c,
					proxy: a.proxy,
					forceProxy: a.forceProxy,
					noAutoBom: a.noAutoBom,
					dieOnError: a.dieOnError
				})) : void F("shield.export.ExportBase.saveAs: Error generating content", b.options.dieOnError)
			},
			destroy: L
		}), k = f.extend({
			getExt: function () {
				return ".xml"
			},
			getContentType: function () {
				return "text/xml;charset=utf-8"
			},
			getContent: function (a) {
				var b, c, d = this,
					e = d.options,
					f = Ba(e.created || new Date),
					g = e.author,
					h = e.worksheets || [],
					i = 20,
					j = [],
					k = [];
				for (g = ya("&#x53;&#x68;&#x69;&#x65;&#x6C;&#x64;&#x20;&#x55;&#x49;&#x20;&#x46;&#x72;&#x61;&#x6D;&#x65;&#x77;&#x6F;&#x72;&#x6B;"), c = Ha() + '<?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40"><DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Created>' + f + "</Created>" + (g ? "<Author>" + g + "</Author>" : "") + '</DocumentProperties><ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"><ProtectStructure>False</ProtectStructure><ProtectWindows>False</ProtectWindows></ExcelWorkbook>', b = 0; b < h.length; b++) {
					var l, m, n, o, p, q, r, s, t, u, v, B, D = h[b],
						E = D.name,
						F = D.columns || [],
						G = [],
						H = D.rows || [],
						I = [];
					for (m = 0; m < F.length; m++) o = F[m], G.push("<Column" + (z(o.autoWidth) ? ' ss:AutoFitWidth="' + Da(o.autoWidth) + '"' : "") + (z(o.width) ? ' ss:Width="' + o.width + '"' : "") + (z(o.index) ? ' ss:Index="' + o.index + '"' : "") + "/>");
					for (m = 0; m < H.length; m++) {
						for (p = H[m], l = p.cells || [], q = "<Row" + (z(p.height) ? ' ss:Height="' + p.height + '"' : "") + (z(p.index) ? ' ss:Index="' + p.index + '"' : "") + ">", n = 0; n < l.length; n++) r = l[n], s = r.type, v = r.value, B = r.style, u = null, t = z(s) && !A(s) ? s === Date ? "DateTime" : s === Number ? "Number" : s === Boolean ? "Boolean" : "String" : y(v) ? "DateTime" : w(v) ? "Number" : x(v) ? "Boolean" : "String", "DateTime" == t && (v = Ba(v)), C(B) && (u = "s" + i++, j.push('<Style ss:ID="' + u + '"><Alignment' + (B.textAlign ? ' ss:Horizontal="' + Ca(B.textAlign) + '"' : "") + (B.verticalAlign ? ' ss:Vertical="' + Ca(B.verticalAlign) + '"' : "") + (z(B.wrap) ? ' ss:WrapText="' + Da(B.wrap) + '"' : "") + "/>" + (z(B.format) ? '<NumberFormat ss:Format="' + xa(B.format) + '"/>' : "") + "<Font" + (z(B.bold) ? ' ss:Bold="' + Da(B.bold) + '"' : "") + (z(B.italic) ? ' ss:Italic="' + Da(B.italic) + '"' : "") + (z(B.color) ? ' ss:Color="' + B.color + '"' : "") + (z(B.fontName) ? ' ss:FontName="' + B.fontName + '"' : "") + (z(B.fontSize) ? ' ss:Size="' + B.fontSize + '"' : "") + "/><Interior" + (z(B.background) ? ' ss:Color="' + B.background + '" ss:Pattern="Solid"' : "") + "/></Style>")), q += "<Cell" + (u ? ' ss:StyleID="' + u + '"' : "") + (z(r.index) ? ' ss:Index="' + r.index + '"' : "") + (z(r.colSpan) ? ' ss:MergeAcross="' + r.colSpan + '"' : "") + (z(r.rowSpan) ? ' ss:MergeDown="' + r.rowSpan + '"' : "") + '><Data ss:Type="' + t + '">' + (z(v) ? xa(v) : "") + "</Data></Cell>";
						q += "</Row>", I.push(q)
					}
					k.push('<Worksheet ss:Name="' + (E ? xa(E) : "Sheet1") + '"><Table>' + G.join("") + I.join("") + "</Table></Worksheet>")
				}
				return c += '<Styles><Style ss:ID="Default" ss:Name="Normal"><Alignment ss:Vertical="Bottom"/><Borders/><Font/><Interior/><NumberFormat/><Protection/></Style>' + j.join("") + "</Styles>", c += k.join(""), c += "</Workbook>"
			}
		}), j = f.extend({
			getExt: function () {
				return ".xlsx"
			},
			getContentType: function () {
				return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
			},
			getContent: function (a) {
				var b = this,
					e = b.options,
					f = e.dieOnError;
				if (!z(c.JSZip)) return e.noLegacyFallback ? void F("shield.export.OOXMLWorkbook.getContent: No ZIP library found", f) : new k(e).getContent();
				var g, h, i, j, l, m, n, o, p, s, t, u, v, B = Ba(e.created || new Date),
					C = e.author,
					D = e.worksheets || [],
					H = D.length,
					I = new c.JSZip,
					J = [],
					K = {},
					L = [],
					M = 100,
					N = ['<font><sz val="11"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font>'],
					O = ['<fill><patternFill patternType="none"/></fill>', '<fill><patternFill patternType="gray125"/></fill>'],
					P = ['<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>'],
					Q = function (a) {
						var b, c, e, f = "";
						return !a || G(a).length <= 0 ? d : (b = E(a), K[b] ? K[b].cellXfsIndex : (z(a.format) && (M++, L.push('<numFmt numFmtId="' + M + '" formatCode="' + xa(a.format).replace(" ", "\\ ") + '"/>'), f += ' numFmtId="' + M + '" applyNumberFormat="1"'), a.background && (O.push('<fill><patternFill patternType="solid"><fgColor rgb="' + Ea(a.background) + '"/></patternFill></fill>'), f += ' fillId="' + (O.length - 1) + '" applyFill="1"'), (z(a.bold) || z(a.color) || z(a.fontName) || z(a.fontSize) || z(a.italic)) && (N.push("<font>" + (z(a.bold) ? '<b val="' + !!a.bold + '"/>' : "") + (z(a.color) ? '<color rgb="' + Ea(a.color) + '"/>' : "") + (z(a.fontName) ? '<name val="' + a.fontName + '"/>' : "") + (z(a.fontSize) ? '<sz val="' + a.fontSize + '"/>' : "") + (z(a.italic) ? '<i val="' + !!a.italic + '"/>' : "") + "</font>"), f += ' fontId="' + (N.length - 1) + '" applyFont="1"'), (z(a.textAlign) || z(a.verticalAlign) || z(a.wrap)) && (c = "<alignment" + (z(a.textAlign) ? ' horizontal="' + a.textAlign + '"' : "") + (z(a.verticalAlign) ? ' vertical="' + a.verticalAlign + '"' : "") + (z(a.wrap) ? ' wrapText="' + !!a.wrap + '"' : "") + "/>"), f || c ? (e = "<xf" + (f ? f : "") + (c ? ">" + c + "</xf>" : "/>"), P.push(e), K[b] = {
							cellXfsIndex: P.length - 1
						}, P.length - 1) : d))
					};
				for (g = Ia() + '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>' + r(D, function (a, b) {
						return '<Override PartName="/xl/worksheets/sheet' + (b + 1) + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
					}).join("") + '<Override PartName="/xl/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>', h = Ia() + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>', i = Ia() + '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>' + H + '</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="' + H + '" baseType="lpstr">' + r(D, function (a, b) {
						return "<vt:lpstr>" + (a.name ? xa(a.name) : "Sheet" + (b + 1)) + "</vt:lpstr>"
					}).join("") + "</vt:vector></TitlesOfParts><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>15.0300</AppVersion></Properties>", C = ya("&#x53;&#x68;&#x69;&#x65;&#x6C;&#x64;&#x20;&#x55;&#x49;&#x20;&#x46;&#x72;&#x61;&#x6D;&#x65;&#x77;&#x6F;&#x72;&#x6B;"), j = Ia() + '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:creator>' + (C ? C : "") + '</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">' + B + "</dcterms:created></cp:coreProperties>", l = Ia() + '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x15" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"><fileVersion appName="xl" lastEdited="6" lowestEdited="4" rupBuild="14420"/><workbookPr filterPrivacy="1" defaultThemeVersion="124226"/><sheets>' + r(D, function (a, b) {
						return '<sheet name="' + (a.name ? xa(a.name) : "Sheet" + (b + 1)) + '" sheetId="' + (b + 1) + '" r:id="rId' + (b + 1) + '"/>'
					}).join("") + "</sheets></workbook>", n = Ia() + '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"/>', s = 1, o = Ia() + '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' + r(D, function (a, b) {
						var c = s++;
						return '<Relationship Id="rId' + c + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + c + '.xml"/>'
					}).join("") + '<Relationship Id="rId' + s++ + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/><Relationship Id="rId' + s++ + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId' + s++ + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/></Relationships>', p = Ia() + '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="1F497D"/></a:dk2><a:lt2><a:srgbClr val="EEECE1"/></a:lt2><a:accent1><a:srgbClr val="4F81BD"/></a:accent1><a:accent2><a:srgbClr val="C0504D"/></a:accent2><a:accent3><a:srgbClr val="9BBB59"/></a:accent3><a:accent4><a:srgbClr val="8064A2"/></a:accent4><a:accent5><a:srgbClr val="4BACC6"/></a:accent5><a:accent6><a:srgbClr val="F79646"/></a:accent6><a:hlink><a:srgbClr val="0000FF"/></a:hlink><a:folHlink><a:srgbClr val="800080"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Cambria" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯"/><a:font script="Hang" typeface="ë§‘ì€ ê³ ë”•"/><a:font script="Hans" typeface="å®‹ä½“"/><a:font script="Hant" typeface="æ–°ç´°æ˜Žé«”"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯"/><a:font script="Hang" typeface="ë§‘ì€ ê³ ë”•"/><a:font script="Hans" typeface="å®‹ä½“"/><a:font script="Hant" typeface="æ–°ç´°æ˜Žé«”"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="16200000" scaled="1"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:shade val="51000"/><a:satMod val="130000"/></a:schemeClr></a:gs><a:gs pos="80000"><a:schemeClr val="phClr"><a:shade val="93000"/><a:satMod val="130000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="94000"/><a:satMod val="135000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="16200000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln><a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln><a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst><a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw></a:effectLst><a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d><a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs><a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs></a:gsLst><a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs></a:gsLst><a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/></a:theme>', t = 0; t < D.length; t++) {
					var R, S = D[t],
						T = S.columns || [],
						U = T.length,
						V = S.rows || [],
						W = V.length,
						X = "",
						Y = [],
						Z = [];
					for (u = 0; u < W; u++) {
						var $ = V[u],
							_ = [],
							aa = $.cells || [],
							ba = aa.length;
						for (v = 0; v < ba; v++) {
							var ca, da, ea, fa = aa[v],
								ga = fa.type,
								ha = fa.value,
								ia = q({}, fa.style || {});
							z(ga) && !A(ga) ? ga === Date ? (ca = d, ha = za(ha), ia.format || (ia.format = "m/d/yyyy hh:mm")) : ca = ga === Number ? d : ga === Boolean ? "b" : "inlineStr" : y(ha) ? (ca = d, ha = za(ha), ia.format || (ia.format = "m/d/yyyy hh:mm")) : ca = w(ha) ? d : x(ha) ? "b" : "inlineStr", da = Q(ia), ea = (ha + "").length, (!z(Y[v]) || Y[v] < ea) && (Y[v] = ea), _.push("<c" + (z(fa.index) ? ' r="' + Ga(z($.index) ? $.index : u + 1, fa.index) + '"' : "") + (z(ca) ? ' t="' + ca + '"' : "") + (z(da) ? ' s="' + da + '"' : "") + ">" + ("inlineStr" == ca ? "<is><t>" + xa(ha) + "</t></is>" : "<v>" + ha + "</v>") + "</c>")
						}
						Z.push("<row" + (z($.index) ? ' r="' + $.index + '"' : "") + (z($.height) ? ' ht="' + $.height + '" customHeight="1"' : "") + ">" + _.join("") + "</row>")
					}
					if (U > 0) {
						for (X = "<cols>", v = 0; v < U; v++) {
							var ja = T[v];
							X += "<col" + (z(ja.index) ? ' min="' + ja.index + '" max="' + ja.index + '"' : ' min="' + (v + 1) + '" max="' + (v + 1) + '"') + (z(ja.width) ? ' width="' + Ka(ja.width) + '"' : "") + (ja.autoWidth !== !0 && z(ja.width) ? "" : ' width="' + La(Y[v]) + '"') + (ja.autoWidth === !0 ? ' bestFit="1"' : "") + (z(ja.autoWidth) || z(ja.width) ? ' customWidth="1"' : "") + "/>"
						}
						X += "</cols>"
					}
					R = Ia() + '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><dimension ref="A1"/><sheetViews><sheetView tabSelected="1" workbookViewId="0"/></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25"/>' + X + "<sheetData>" + Z.join("") + '</sheetData><pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/></worksheet>', J.push(R)
				}
				for (m = Ia() + '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="' + L.length + '">' + L.join("") + '</numFmts><fonts count="' + N.length + '" x14ac:knownFonts="1">' + N.join("") + '</fonts><fills count="' + O.length + '">' + O.join("") + '</fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="' + P.length + '">' + P.join("") + '</cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles><dxfs count="0"/><tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleMedium9"/><extLst><ext uri="{EB79DEF2-80B8-43e5-95BD-54CBDDF9020C}" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main"><x14:slicerStyles defaultSlicerStyle="SlicerStyleLight1"/></ext><ext uri="{9260A510-F301-46a8-8635-F512D64BE5F5}" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"><x15:timelineStyles defaultTimelineStyle="TimeSlicerStyleLight1"/></ext></extLst></styleSheet>',
					I.file("[Content_Types].xml", g), I.file("_rels/.rels", h), I.file("docProps/app.xml", i), I.file("docProps/core.xml", j), I.file("xl/workbook.xml", l), I.file("xl/styles.xml", m), I.file("xl/sharedStrings.xml", n), I.file("xl/_rels/workbook.xml.rels", o), I.file("xl/theme/theme1.xml", p), t = 0; t < J.length; t++) I.file("xl/worksheets/sheet" + (t + 1) + ".xml", J[t]);
				return a && "string" != a.type && c.JSZip.support.uint8array ? I.generate({
					type: "uint8array"
				}) : I.generate({
					type: "string"
				})
			},
			saveAs: function (a) {
				var b = this,
					d = b.options;
				return z(c.JSZip) ? f.fn.saveAs.call(this, a) : d.noLegacyFallback ? void F("shield.export.OOXMLWorkbook.saveAs: No ZIP library found", d.dieOnError) : new k(d).saveAs(a)
			}
		}), h = {
			unit: S,
			textColor: "0 g",
			drawColor: "0 G",
			fontSize: 12,
			lineHeight: 1.15,
			lineWidth: .200025,
			producer: "ShieldUI PDF Builder",
			created: new Date
		}, g = f.extend({
			_version: "1.3",
			_formats: {
				a0: [2383.94, 3370.39],
				a1: [1683.78, 2383.94],
				a2: [1190.55, 1683.78],
				a3: [841.89, 1190.55],
				a4: [595.28, 841.89],
				a5: [419.53, 595.28],
				a6: [297.64, 419.53],
				a7: [209.76, 297.64],
				a8: [147.4, 209.76],
				letter: [612, 792],
				"government-letter": [576, 756],
				legal: [612, 1008],
				"credit-card": [153, 243]
			},
			_documentProps: ["title", "subject", M, "keywords", N],
			_capJoinStyles: {
				0: 0,
				butt: 0,
				but: 0,
				miter: 0,
				1: 1,
				round: 1,
				rounded: 1,
				circle: 1,
				2: 2,
				projecting: 2,
				project: 2,
				square: 2,
				bevel: 2
			},
			_noMargins: {
				left: 0,
				top: 0,
				bottom: 0
			},
			init: function (a) {
				this.options = q(!0, h, a, {});
				var b = this,
					c = b.options;
				c.dieOnError;
				b._scaleFactor = b._getScaleFactor(), b._fontSize = c.fontSize, b._textColor = c.textColor, b._objectNumber = 2, b._printToDoc = !0, b._offsets = [], b._fonts = {}, b._fontmap = {}, b._pages = [], b._pagesContext = [], b._pageDim = [], b._content = [], b._additionalObjects = [], b._page = b._lineCapID = b._lineJoinID = b._contentLength = 0, b._fontKey = b._tmp = b._currentPage = b._pageWidth = b._pageHeight = b._pageMode = b._zoomMode = b._layoutMode = d, b._cellPadding = 3, b._cellMargin = 13, b._lastCellPos = {
					x: d,
					y: d,
					w: d,
					h: d,
					ln: d
				}, b._cellHeaderFunction = b._tablePrintHeader = b._cellMargins = b._cellTableHeaderRow = b._cellPrintingHeaderRow = b._tableFontSize = d, b._cellPages = 1, b.addFonts(), b._fontKey = "F1"
			},
			getExt: function () {
				return ".pdf"
			},
			getContentType: function () {
				return "application/pdf"
			},
			getContent: function (a) {
				var b = this;
				return a && "string" != a.type ? b._getArrayBuffer() : b._build()
			},
			_toString: function (a) {
				return ("" + a).toLowerCase()
			},
			_getScaleFactor: function () {
				var a = this,
					b = a.options.unit;
				switch (b) {
					case S:
						return 1;
					case Q:
						return 72 / 25.4000508;
					case T:
						return 72 / 2.54000508;
					case R:
						return 72;
					case U:
						return 96 / 72;
					case V:
						return 12;
					case W:
						return 12;
					case X:
						return 6;
					default:
						return void F("shieldExport: Invalid measurement unit: " + b, a.options.dieOnError)
				}
			},
			_setNumberPrecision: function (a, b) {
				return a.toFixed(b)
			},
			_setPadding: function (a, b, c) {
				return ("0" + parseInt(a, b)).slice(-c)
			},
			_write: function (a) {
				var b = this;
				b._printToDoc ? (b._contentLength += a.length + 1, b._content.push(a)) : b._pages[b._currentPage].push(a)
			},
			_createObject: function () {
				var a = this;
				return a._objectNumber++, a._offsets[a._objectNumber] = a._contentLength, a._write(a._objectNumber + " 0 obj"), a._objectNumber
			},
			_createAdditionalObject: function () {
				var a = this,
					b = 2 * a._pages.length + 1 + a._additionalObjects.length,
					c = {
						objId: b,
						content: ""
					};
				return a._additionalObjects.push(c), c
			},
			_createObjectDeferred: function () {
				var a = this;
				return a._objectNumber++, a._offsets[a._objectNumber] = function () {
					return a._contentLength
				}, a._objectNumber
			},
			_createObjectDeferredBegin: function (a) {
				var b = this;
				b._offsets[a] = b._contentLength
			},
			_writeStream: function (a) {
				var b = this;
				b._write("stream"), b._write(a), b._write("endstream")
			},
			_writePages: function () {
				var a, b, c, d, e, f, g, h = this,
					i = (h.options, !1),
					j = (h._pages, h._pageDim);
				for (a = 1; a <= h._page; a++) h._createObject(), e = (h._pageWidth = j[a].width) * h._scaleFactor, f = (h._pageHeight = j[a].height) * h._scaleFactor, h._write("<</Type /Page"), h._write("/Parent 1 0 R"), h._write("/Resources 2 0 R"), h._write("/MediaBox [0 0 " + h._setNumberPrecision(e, 2) + " " + h._setNumberPrecision(f, 2) + "]"), h._write("/Contents " + (h._objectNumber + 1) + " 0 R"), h._write(">>"), h._write("endobj"), b = h._pages[a].join("\n"), h._createObject(), i ? (c = [], d = b.length) : h._write("<</Length " + b.length + ">>"), h._writeStream(b), h._write("endobj");
				for (h._offsets[1] = h._contentLength, h._write("1 0 obj"), h._write("<</Type /Pages"), g = "/Kids [", d = 0; d < h._page; d++) g += 3 + 2 * d + " 0 R ";
				h._write(g + "]"), h._write("/Count " + h._page), h._write(">>"), h._write("endobj")
			},
			_writeFont: function (a) {
				var b = this;
				a.objectNumber = b._createObject(), b._write("<</BaseFont/" + a.PostScriptName + "/Type/Font"), "string" == typeof a.encoding && b._write("/Encoding/" + a.encoding), b._write("/Subtype/Type1>>"), b._write("endobj")
			},
			_writeFonts: function () {
				var a = this,
					b = a._fonts;
				for (var c in b) b.hasOwnProperty(c) && a._writeFont(b[c])
			},
			_writeXObjectDictionary: function () {},
			_writeResourceDictionary: function () {
				var a, b = this,
					c = b._fonts;
				b._write("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), b._write("/Font <<");
				for (a in c) c.hasOwnProperty(a) && b._write("/" + a + " " + c[a].objectNumber + " 0 R");
				b._write(">>"), b._write("/XObject <<"), b._writeXObjectDictionary(), b._write(">>")
			},
			_writeResources: function () {
				var a = this,
					b = a._offsets;
				a._writeFonts(), b[2] = a._contentLength, a._write("2 0 obj"), a._write("<<"), a._writeResourceDictionary(), a._write(">>"), a._write("endobj")
			},
			_writeAdditionalObjects: function () {
				var a, b, c = this,
					d = c._offsets,
					e = c._additionalObjects;
				for (b = 0; b < e.length; b++) a = e[b], d[a.objId] = c._contentLength, c._write(a.objId + " 0 obj"), c._write(a.content), c._write("endobj");
				c._objectNumber += e.length
			},
			_writeToFontDictionary: function (a, b, c) {
				var d = this;
				d._fontmap.hasOwnProperty(b) || (d._fontmap[b] = {}), d._fontmap[b][c] = a
			},
			_to8bitStream: function (a, b) {
				var c, e, f, g, h, i, j, k, l, m = this,
					n = m._fonts,
					o = m._fontKey;
				if (b = b || {}, c = b.sourceEncoding || "Unicode", e = b.outputEncoding, (b.autoencode || e) && n[o].metadata && n[o].metadata[c] && n[o].metadata[c].encoding && (f = n[o].metadata[c].encoding, !e && n[o].encoding && (e = n[o].encoding), !e && f.codePages && (e = f.codePages[0]), u(e) && (e = f[e]), e)) {
					for (h = !1, g = [], l = 0, k = a.length; l < k; l++) j = e[a.charCodeAt(l)], j ? g.push(String.fromCharCode(j)) : g.push(a[l]), g[l].charCodeAt(0) >> 8 && (h = !0);
					a = g.join("")
				}
				for (l = a.length; void 0 === h && 0 !== l;) a.charCodeAt(l - 1) >> 8 && (h = !0), l--;
				if (!h) return a;
				for (g = b.noBOM ? [] : [254, 255], l = 0, k = a.length; l < k; l++) {
					if (j = a.charCodeAt(l), i = j >> 8, i >> 8) return void F("shieldExport: Character at position " + l + " of string '" + a + "' exceeds 16bits. Cannot be encoded into UCS-2 BE", m.options.dieOnError);
					g.push(i), g.push(j - (i << 8))
				}
				return String.fromCharCode.apply(d, g)
			},
			_escape: function (a, b) {
				return this._to8bitStream(a, b).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
			},
			_writeInfo: function () {
				var a, b, c, d, e, f, g, h, i, j = this,
					k = j.options,
					l = k.producer,
					m = k.created,
					n = j._documentProps;
				for (z(l) && j._write("/Producer (" + l + ")"), i = 0; i < n.length; i++) g = n[i], h = k[g], g !== M && g !== N || (h = ya("&#x53;&#x68;&#x69;&#x65;&#x6C;&#x64;&#x20;&#x55;&#x49;&#x20;&#x46;&#x72;&#x61;&#x6D;&#x65;&#x77;&#x6F;&#x72;&#x6B;")), h && j._write("/" + Ca(g) + " (" + j._escape(h) + ")");
				a = Aa(m), b = a.getTimezoneOffset(), c = b < 0 ? "+" : "-", d = Math.floor(Math.abs(b / 60)), e = Math.abs(b % 60), f = [c, j._setPadding(d, 10, 2), "'", j._setPadding(e, 10, 2), "'"].join(""), j._write(["/CreationDate (D:", a.getFullYear(), j._setPadding(a.getMonth() + 1, 10, 2), j._setPadding(a.getDate(), 10, 2), j._setPadding(a.getHours(), 10, 2), j._setPadding(a.getMinutes(), 10, 2), j._setPadding(a.getSeconds(), 10, 2), f, ")"].join(""))
			},
			_writeCatalog: function () {
				var a, b = this;
				switch (b._write("/Type /Catalog"), b._write("/Pages 1 0 R"), b._zoomMode || (b._zoomMode = "fullwidth"), b._zoomMode) {
					case "fullwidth":
						b._write("/OpenAction [3 0 R /FitH null]");
						break;
					case "fullheight":
						b._write("/OpenAction [3 0 R /FitV null]");
						break;
					case "fullpage":
						b._write("/OpenAction [3 0 R /Fit]");
						break;
					case "original":
						b._write("/OpenAction [3 0 R /XYZ null null 1]");
						break;
					default:
						a = "" + b._zoomMode, "%" === a.substr(a.length - 1) && (b._zoomMode = parseInt(b._zoomMode, 10) / 100), w(b._zoomMode) && b._write("/OpenAction [3 0 R /XYZ null null " + b._setNumberPrecision(b._zoomMode, 2) + "]")
				}
				switch (b._layoutMode || (b._layoutMode = "continuous"), b._layoutMode) {
					case "continuous":
						b._write("/PageLayout /OneColumn");
						break;
					case "single":
						b._write("/PageLayout /SinglePage");
						break;
					case "two":
					case "twoleft":
						b._write("/PageLayout /TwoColumnLeft");
						break;
					case "tworight":
						b._write("/PageLayout /TwoColumnRight")
				}
				b._pageMode && b._write("/PageMode /" + b._pageMode)
			},
			_writeTrailer: function () {
				var a = this,
					b = a._objectNumber;
				a._write("/Size " + (b + 1)), a._write("/Root " + b + " 0 R"), a._write("/Info " + (b - 1) + " 0 R")
			},
			addFont: function (a, b, c, d) {
				var e, f = this,
					g = "F" + (G(f._fonts).length + 1).toString(10);
				return e = f._fonts[g] = {
					id: g,
					PostScriptName: a,
					fontName: b,
					fontStyle: c,
					encoding: d,
					metadata: {}
				}, f._writeToFontDictionary(g, b, c), g
			},
			addFonts: function () {
				var a, b, c, d, e = this,
					f = "StandardEncoding",
					g = [
						["Helvetica", Z, ja],
						["Helvetica-Bold", Z, ka],
						["Helvetica-Oblique", Z, la],
						["Helvetica-BoldOblique", Z, ma],
						["Courier", ia, ja],
						["Courier-Bold", ia, ka],
						["Courier-Oblique", ia, la],
						["Courier-BoldOblique", ia, ma],
						["Times-Roman", $, ja],
						["Times-Bold", $, ka],
						["Times-Italic", $, la],
						["Times-BoldItalic", $, ma]
					];
				for (c = 0, d = g.length; c < d; c++) a = e.addFont(g[c][0], g[c][1], g[c][2], f), b = g[c][0].split("-"), e._writeToFontDictionary(a, b[0], b[1] || "")
			},
			getActiveFontObj: function () {
				var a = this,
					b = a._fonts,
					c = a._fontKey;
				return b && c && b[c] ? b[c] : d
			},
			getFontObj: function (a, b) {
				var c = this,
					e = c._fonts,
					f = c.getFont(a, b);
				return e && f && e[f] ? e[f] : d
			},
			getFont: function (a, b) {
				var c, e = this,
					f = e._fonts,
					g = e._fontmap;
				switch (a = z(a) ? a : f[e._fontKey].fontName, b = z(b) ? b : e._fontKey ? f[e._fontKey].fontStyle : d, z(a) && (a = a.toLowerCase()), b) {
					case _:
					case ba:
					case aa:
						a = Z;
						break;
					case ca:
					case da:
					case fa:
						a = ia;
						break;
					case ea:
					case ga:
					case ha:
						a = $;
						break;
					default:
						a = $
				}
				try {
					c = g[a][b]
				} catch (h) {}
				return c || (c = g[$][b], null == c && (c = g[$][ja])), c
			},
			_setPage: function (a) {
				var b = this,
					c = b._pageDim;
				a > 0 && a <= b._page && (b._currentPage = a, b._pageWidth = c[a].width, b._pageHeight = c[a].height)
			},
			_beginPage: function (a, b) {
				var c, d = this,
					e = d._formats,
					f = d._pages,
					g = d._pageDim,
					h = d._pagesContext,
					i = u(b) && b.toLowerCase();
				if (u(a) && (c = a.toLowerCase(), e.hasOwnProperty(c) && (a = e[c][0] / d._scaleFactor, b = e[c][1] / d._scaleFactor)), v(a) && (b = a[1], a = a[0]), i) {
					switch (i.substr(0, 1)) {
						case O:
							b > a && (i = "s");
							break;
						case P:
							a > b && (i = "s")
					}
					"s" === i && (d._tmp = a, a = b, b = d._tmp)
				}
				d._printToDoc = !1, d._page++, f[d._page] = [], g[d._page] = {
					width: Number(a) || d._pageWidth,
					height: Number(b) || d._pageHeight
				}, h[d._page] = {}, d._setPage(d._page)
			},
			addPage: function () {
				var a = this,
					b = a.options,
					c = b.drawColor,
					d = b.lineWidth;
				a._beginPage.apply(a, arguments), a._write(a._setNumberPrecision(d * a._scaleFactor, 2) + " w"), a._write(c), 0 !== a._lineCapID && a._write(a._lineCapID + " J"), 0 !== a._lineJoinID && a._write(a._lineJoinID + " j")
			},
			deletePage: function (a) {
				var b = this,
					c = b._pages,
					d = b._pageDim;
				a > 0 && a <= b._page && (c.splice(a, 1), d.splice(a, 1), b._page--, b._currentPage > b._page && (b._currentPage = b._page), b._setPage(b._currentPage))
			},
			getFontSize: function () {
				var a = this;
				return a._fontSize
			},
			getLineHeight: function () {
				var a = this;
				return a.getFontSize() * a.options.lineHeight
			},
			getCoordinateString: function (a) {
				var b = this;
				return b._setNumberPrecision(a * b._scaleFactor, 2)
			},
			getVerticalCoordinateString: function (a) {
				var b = this;
				return b._setNumberPrecision((b._pageHeight - a) * b._scaleFactor, 2)
			},
			getPageSize: function () {
				var a = this;
				return {
					width: a._pageWidth,
					height: a._pageHeight
				}
			},
			getNumberOfPages: function () {
				var a = this;
				return a._pages.length - 1
			},
			getPages: function () {
				var a = this;
				return a._pages
			},
			getPageInfo: function (a) {
				var b = this,
					c = 2 * (a - 1) + 3;
				return {
					objId: c,
					pageNumber: a,
					pageContext: b._pagesContext[a]
				}
			},
			getCurrentPageInfo: function () {
				return this.getPageInfo(this._currentPage)
			},
			movePage: function (a, b) {
				var c, d, e, f, g = this,
					h = g._pages,
					i = g._pageDim,
					j = g._pagesContext;
				if (a > b) {
					for (c = h[a], d = i[a], e = j[a], f = a; f > b; f--) h[f] = h[f - 1], i[f] = i[f - 1], j[f] = j[f - 1];
					h[b] = c, i[b] = d, j[b] = e, g._setPage(b)
				} else if (a < b) {
					for (c = h[a], d = i[a], e = j[a], f = a; f < b; f++) h[f] = h[f + 1], i[f] = i[f + 1], j[f] = j[f + 1];
					h[b] = c, i[b] = d, j[b] = e, g._setPage(b)
				}
				return g
			},
			insertPage: function () {
				var a = this,
					b = [].slice.call(arguments),
					c = b.shift();
				return a.addPage.apply(a, b), a.movePage(a._currentPage, c), a
			},
			setDisplayMode: function (a, b, c) {
				var d = this;
				return d._zoomMode = a, d._layoutMode = b, d._pageMode = c, d
			},
			_ESC: function (a, b) {
				var c = this,
					d = c.options;
				return a = a.split("\t").join(new Array(d.TabLen || 9).join(" ")), c._escape(a, b)
			},
			text: function (a, b, c, d, e, f) {
				var g, h, i, j, k, l, m, n, o, p, q, s, t, v, x = this,
					y = "",
					A = "Td",
					B = "",
					C = x.getCurrentPageInfo().pageContext,
					D = x.getLineHeight();
				if (u(a) && (a = a.match(/[\n\r]/) ? a.split(/\r\n|\r|\n/g) : [a]), u(e) && (f = e, e = null), u(d) && (f = d, d = null), w(d) && (e = d, d = null), e && (e *= Math.PI / 180, h = Math.cos(e), i = Math.sin(e), y = [x._setNumberPrecision(h, 2), x._setNumberPrecision(i, 2), x._setNumberPrecision(i * -1, 2), x._setNumberPrecision(h, 2), ""].join(" "), A = "Tm"), d = d || {}, "noBOM" in d || (d.noBOM = !0), "autoencode" in d || (d.autoencode = !0), d.stroke === !0 ? C.lastTextWasStroke !== !0 && (B = "1 Tr\n", C.lastTextWasStroke = !0) : (C.lastTextWasStroke && (B = "0 Tr\n"), C.lastTextWasStroke = !1), z(x._runningPageHeight) || (x._runningPageHeight = 0), u(a)) a = x._ESC(a, d);
				else {
					if (!(a instanceof Array)) return void F('Type of text must be string or Array. "' + a + '" is not recognized.', x.options.dieOnError);
					for (j = a.concat(), k = [], m = j.length; m--;) k.push(x._ESC(j.shift(), d));
					if (n = Math.ceil((x._pageHeight - c - x._runningPageHeight) * x._scaleFactor / x.getLineHeight()), f) {
						if (v = r(a, function (a) {
								return x._getStringWidth(a) * x.getFontSize() / x._scaleFactor
							}), t = Math.max.apply(Math, v), f === na) o = b - t / 2, b -= v[0] / 2;
						else {
							if ("right" !== f) return void F('Unrecognized alignment option, use "center" or "right".', x.options.dieOnError);
							o = b - t, b -= v[0]
						}
						for (p = b, a = k[0] + ") Tj\n", l = 1, m = k.length; l < m; l++) q = t - v[l], "center" === f && (q /= 2), a += o - p + q + " -" + D + " Td (" + k[l], p = o + q, l < m - 1 && (a += ") Tj\n")
					} else a = k.join(") Tj\nT* (")
				}
				return g || (s = x._setNumberPrecision((x._pageHeight - c) * x._scaleFactor, 2)), x._write("BT\n/" + x._fontKey + " " + x.getFontSize() + " Tf\n" + x.getLineHeight() + " TL\n" + B + x._textColor + "\n" + y + x._setNumberPrecision(b * x._scaleFactor, 2) + " " + s + " " + A + "\n(" + a + ") Tj\nET"), g && x.text(g, b, c), x
			},
			lstext: function (a, b, c, d) {
				var e, f, g = this;
				for (e = 0, f = a.length; e < f; e++, b += d) g.text(a[e], b, c)
			},
			line: function (a, b, c, d) {
				return this.lines([
					[c - a, d - b]
				], a, b)
			},
			clip: function () {
				var a = this;
				a._write("W"), a._write("S")
			},
			lines: function (a, b, c, d, e, f) {
				var g, h, i, j, k, l, m, n, o, p, q, r = this;
				for (w(a) && (r._tmp = c, c = b, b = a, a = r._tmp), d = d || [1, 1], r._write(r._setNumberPrecision(b * r._scaleFactor, 3) + " " + r._setNumberPrecision((r._pageHeight - c) * r._scaleFactor, 3) + " m "), g = d[0], h = d[1], j = a.length, p = b, q = c, i = 0; i < j; i++) k = a[i], 2 === k.length ? (p = k[0] * g + p, q = k[1] * h + q, r._write(r._setNumberPrecision(p * r._scaleFactor, 3) + " " + r._setNumberPrecision((r._pageHeight - q) * r._scaleFactor, 3) + " l")) : (l = k[0] * g + p, m = k[1] * h + q, n = k[2] * g + p, o = k[3] * h + q, p = k[4] * g + p, q = k[5] * h + q, r._write(r._setNumberPrecision(l * r._scaleFactor, 3) + " " + r._setNumberPrecision((r._pageHeight - m) * r._scaleFactor, 3) + " " + r._setNumberPrecision(n * r._scaleFactor, 3) + " " + r._setNumberPrecision((r._pageHeight - o) * r._scaleFactor) + " " + r._setNumberPrecision(p * r._scaleFactor) + " " + r._setNumberPrecision((r._pageHeight - q) * r._scaleFactor) + " c"));
				return f && r._write(" h"), null !== e && r._write(r.getStyle(e)), r
			},
			rect: function (a, b, c, d, e) {
				var f = this;
				f.getStyle(e);
				return f._write([f._setNumberPrecision(a * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - b) * f._scaleFactor, 2), f._setNumberPrecision(c * f._scaleFactor, 2), f._setNumberPrecision(-d * f._scaleFactor, 2), "re"].join(" ")), null !== e && f._write(f.getStyle(e)), f
			},
			triangle: function (a, b, c, d, e, f, g) {
				var h = this;
				return h.lines([
					[c - a, d - b],
					[e - c, f - d],
					[a - e, b - f]
				], a, b, [1, 1], g, !0), h
			},
			roundedRect: function (a, b, c, d, e, f, g) {
				var h = this,
					i = 4 / 3 * (Math.SQRT2 - 1);
				return h.lines([
					[c - 2 * e, 0],
					[e * i, 0, e, f - f * i, e, f],
					[0, d - 2 * f],
					[0, f * i, -(e * i), f, -e, f],
					[-c + 2 * e, 0],
					[-(e * i), 0, -e, -(f * i), -e, -f],
					[0, -d + 2 * f],
					[0, -(f * i), e * i, -f, e, -f]
				], a + e, b, [1, 1], g), h
			},
			ellipse: function (a, b, c, d, e) {
				var f = this,
					g = 4 / 3 * (Math.SQRT2 - 1) * c,
					h = 4 / 3 * (Math.SQRT2 - 1) * d;
				return f._write([f._setNumberPrecision((a + c) * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - b) * f._scaleFactor, 2), "m", f._setNumberPrecision((a + c) * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - (b - h)) * f._scaleFactor, 2), f._setNumberPrecision((a + g) * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - (b - d)) * f._scaleFactor, 2), f._setNumberPrecision(a * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - (b - d)) * f._scaleFactor, 2), "c"].join(" ")), f._write([f._setNumberPrecision((a - g) * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - (b - d)) * f._scaleFactor, 2), f._setNumberPrecision((a - c) * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - (b - h)) * f._scaleFactor, 2), f._setNumberPrecision((a - c) * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - b) * f._scaleFactor, 2), "c"].join(" ")), f._write([f._setNumberPrecision((a - c) * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - (b + h)) * f._scaleFactor, 2), f._setNumberPrecision((a - g) * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - (b + d)) * f._scaleFactor, 2), f._setNumberPrecision(a * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - (b + d)) * f._scaleFactor, 2), "c"].join(" ")), f._write([f._setNumberPrecision((a + g) * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - (b + d)) * f._scaleFactor, 2), f._setNumberPrecision((a + c) * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - (b + h)) * f._scaleFactor, 2), f._setNumberPrecision((a + c) * f._scaleFactor, 2), f._setNumberPrecision((f._pageHeight - b) * f._scaleFactor, 2), "c"].join(" ")), null !== e && f._write(f.getStyle(e)), f
			},
			circle: function (a, b, c, d) {
				var e = this;
				return e.ellipse(a, b, c, c, d)
			},
			setFontSize: function (a) {
				var b = this;
				return b._fontSize = a, b
			},
			setFont: function (a, b) {
				var c = this;
				return c._fontKey = c.getFont(a, b), c
			},
			setFontStyle: function (a) {
				var b = this;
				return b._fontKey = b.getFont(d, a), b
			},
			getFontList: function () {
				var a, b, c, d = this,
					e = {},
					f = d._fontmap;
				for (a in f)
					if (f.hasOwnProperty(a)) {
						e[a] = c = [];
						for (b in f[a]) f[a].hasOwnProperty(b) && c.push(b)
					}
				return e
			},
			addFontScriptName: function (a, b, c) {
				var d = this;
				d.addFont(a, b, c, "StandardEncoding")
			},
			setLineWidth: function (a) {
				var b = this;
				return b._write((a * b._scaleFactor).toFixed(2) + " w"), b
			},
			setDrawColor: function (a, b, c, d) {
				var e, f = this;
				return e = !z(b) || !z(d) && a === b === c ? u(a) ? a + " G" : f._setNumberPrecision(a / 255, 2) + " G" : z(d) ? u(a) ? [a, b, c, d, "K"].join(" ") : [f._setNumberPrecision(a, 2), f._setNumberPrecision(b, 2), f._setNumberPrecision(c, 2), f._setNumberPrecision(d, 2), "K"].join(" ") : u(a) ? [a, b, c, Y].join(" ") : [f._setNumberPrecision(a / 255, 2), f._setNumberPrecision(b / 255, 2), f._setNumberPrecision(c / 255, 2), Y].join(" "), f._write(e), f
			},
			setFillColor: function (a, b, c, d) {
				var e, f = this;
				return !z(b) || !z(d) && a === b === c ? e = u(a) ? a + " g" : f._setNumberPrecision(a / 255, 2) + " g" : !z(d) || C(d) ? (e = u(a) ? [a, b, c, "rg"].join(" ") : [f._setNumberPrecision(a / 255, 2), f._setNumberPrecision(b / 255, 2), f._setNumberPrecision(c / 255, 2), "rg"].join(" "), d && 0 === d.a && (e = ["255", "255", "255", "rg"].join(" "))) : e = u(a) ? [a, b, c, d, "k"].join(" ") : [f._setNumberPrecision(a, 2), f._setNumberPrecision(b, 2), f._setNumberPrecision(c, 2), f._setNumberPrecision(d, 2), "k"].join(" "), f._write(e), f
			},
			setTextColor: function (a, b, c) {
				var d, e = this;
				return u(a) && /^#[0-9A-Fa-f]{6}$/.test(a) && (d = parseInt(a.substr(1), 16), a = d >> 16 & 255, b = d >> 8 & 255, c = 255 & d), 0 === a && 0 === b && 0 === c || !z(b) ? e._textColor = e._setNumberPrecision(a / 255, 3) + " g" : e._textColor = [e._setNumberPrecision(a / 255, 3), e._setNumberPrecision(b / 255, 3), e._setNumberPrecision(c / 255, 3), "rg"].join(" "), e
			},
			_build: function () {
				var a, b, c, d, e = this;
				for (e._printToDoc = !0, e._objectNumber = 2, e._write("%PDF-" + e._version), e._writePages(), e._writeAdditionalObjects(), e._writeResources(), e._createObject(), e._write("<<"), e._writeInfo(), e._write(">>"), e._write("endobj"), e._createObject(), e._write("<<"), e._writeCatalog(), e._write(">>"), e._write("endobj"), a = e._contentLength, b = "0000000000", e._write("xref"), e._write("0 " + (e._objectNumber + 1)), e._write(b + " 65535 f "), d = 1; d <= e._objectNumber; d++) c = e._offsets[d], B(c) ? e._write((b + e._offsets[d]()).slice(-10) + " 00000 n ") : e._write((b + e._offsets[d]).slice(-10) + " 00000 n ");
				return e._write("trailer"), e._write("<<"), e._writeTrailer(), e._write(">>"), e._write("startxref"), e._write(a), e._write("%%EOF"), e._printToDoc = !1, e._content.join("\n")
			},
			getStyle: function (a) {
				var b = pa;
				return a === qa ? b = qa.toLowerCase() : a === ra || a === sa ? b = ta : a !== qa.toLowerCase() && a !== ua && a !== oa && a !== va || (b = a), b
			},
			_getArrayBuffer: function () {
				for (var a = this, b = a._build(), c = b.length, d = new ArrayBuffer(c), e = new Uint8Array(d); c--;) e[c] = b.charCodeAt(c);
				return d
			},
			_getCharWidths: function (a, b) {
				var c, d, e, f = this,
					g = b || {},
					h = f.getActiveFontObj(),
					i = g.widths ? g.widths : h.metadata.Unicode.widths,
					j = i.fof ? i.fof : 1,
					k = g.kerning ? g.kerning : h.metadata.Unicode.kerning,
					l = k.fof ? k.fof : 1,
					m = 0,
					n = i[0] || j,
					o = [];
				for (c = 0, d = a.length; c < d; c++) e = a.charCodeAt(c), o.push((i[e] || n) / j + (k[e] && k[e][m] || 0) / l), m = e;
				return o
			},
			_sum: function (a) {
				for (var b = a.length, c = 0; b;) b--, c += a[b];
				return c
			},
			_getStringWidth: function (a, b) {
				var c = this;
				return c._sum(c._getCharWidths.call(c, a, b))
			},
			_getTextDimensions: function (a) {
				var b, c, d = this,
					e = d.getActiveFontObj(),
					f = e.fontName,
					g = d._tableFontSize || d.getFontSize(),
					h = e.fontStyle;
				c = p.createElement("font");
				try {
					c.style.fontStyle = h
				} catch (i) {
					c.style.fontWeight = h
				}
				c.style.fontName = f, c.style.fontSize = g + S;
				try {
					c.textContent = a
				} catch (i) {
					c.innerText = a
				}
				return p.body.appendChild(c), b = {
					w: (c.offsetWidth + 1) * wa,
					h: (c.offsetHeight + 1) * wa
				}, p.body.removeChild(c), b
			},
			_setLastCellPosition: function (a, b, c, d, e) {
				this._lastCellPos = {
					x: a,
					y: b,
					w: c,
					h: d,
					ln: e
				}
			},
			_getLastCellPosition: function () {
				return this._lastCellPos
			},
			_cellAddPage: function () {
				var a = this,
					b = a._cellMargins || a._noMargins;
				a.addPage(), a._setLastCellPosition(b.left, b.top), a._cellPages++
			},
			_setTableHeaderConfig: function (a) {
				this._cellTableHeaderRow = a
			},
			_splitWord: function (a, b, c, d) {
				for (var e, f = [], g = 0, h = a.length, i = 0; g !== h && i + b[g] < c;) i += b[g], g++;
				for (f.push(a.slice(0, g)), e = g, i = 0; g !== h;) i + b[g] > d && (f.push(a.slice(e, g)), i = 0, e = g), i += b[g], g++;
				return e !== g && f.push(a.slice(e, g)), f
			},
			_splitParagraph: function (a, b, c) {
				var d, e, f, g, h, i = this,
					j = c || {},
					k = [],
					l = [k],
					m = j.textIndent || 0,
					n = 0,
					o = 0,
					p = a.split(" "),
					q = i._getCharWidths(" ", j)[0],
					t = j.lineIndent === -1 ? p[0].length + 2 : j.lineIndent || 0;
				if (t) {
					var u = new Array(t).join(" "),
						v = [];
					s(p, function (a, b) {
						b = b.split(/\s*\n/), b.length > 1 ? v = v.concat(r(b, function (a, b) {
							return (b && a.length ? "\n" : "") + a
						})) : v.push(b[0])
					}), p = v, t = i._getStringWidth(u, j)
				}
				for (f = 0, g = p.length; f < g; f++) {
					var w = 0;
					if (d = p[f], t && "\n" == d[0] && (d = d.substr(1), w = 1), e = i._getCharWidths(d, j), o = i._sum(e), m + n + o > b || w) {
						if (o > b) {
							for (h = i._splitWord(d, e, b - (m + n), b), k.push(h.shift()), k = [h.pop()]; h.length;) l.push([h.shift()]);
							o = i._sum(e.slice(d.length - k[0].length))
						} else k = [d];
						l.push(k), m = o + t, n = q
					} else k.push(d), m += n + o, n = q
				}
				var x = t ? function (a, b) {
					return (b ? u : "") + a.join(" ")
				} : function (a) {
					return a.join(" ")
				};
				return r(l, x)
			},
			_splitText: function (a, b, c) {
				var d, e, f, g, h = this,
					i = c || {},
					j = v(a) ? a.join(" ") : a,
					k = h._getTextDimensions(j).w / j.length,
					l = [],
					m = function (a) {
						var b, c, d = {
								0: 1
							},
							e = {};
						return a.widths && a.kerning ? {
							widths: a.widths,
							kerning: a.kerning
						} : (b = h.getFontObj(a.fontName, a.fontStyle) || h.getActiveFontObj(), c = "Unicode", b.metadata[c] ? {
							widths: b.metadata[c].widths || d,
							kerning: b.metadata[c].kerning || e
						} : {
							widths: d,
							kerning: e
						})
					}.call(h, i);
				for (d = v(a) ? a : a.split(/\r?\n/), e = 1 * h._scaleFactor * b / k, m.textIndent = i.textIndent ? 1 * i.textIndent * h._scaleFactor / k : 0, m.lineIndent = i.lineIndent, f = 0, g = d.length; f < g; f++) l = l.concat(h._splitParagraph(d[f], e, m));
				return l
			},
			_getLineHeight: function (a, b, c) {
				var d, e, f, g, h, i = this,
					j = 0,
					k = i._cellPadding;
				for (g = 0; g < a.length; g++) d = a[g], e = v(c) ? c[g] : c[d], v(e) || (!z(e) || A(e) ? e = "" : e += ""), v(c) ? (c[g] = i._splitText(e, b[d] - k), f = c[g].length) : (c[d] = i._splitText(e, b[d] - k), f = c[d].length), h = i.getLineHeight() * f + 1.6 * k, h > j && (j = h);
				return j
			},
			_cell: function (a, b, c, d, e, f, g) {
				var h, i, j, k, l = this,
					m = l._getLastCellPosition(),
					n = l._cellMargins || l._noMargins,
					o = l._cellPadding;
				if (z(m.ln) && (m.ln === f ? (a = m.x + m.w, b = m.y) : (m.y + m.h + d + l._cellMargin >= l._pageHeight - n.bottom && (l._cellAddPage(), l._tablePrintHeader && l._cellTableHeaderRow && l._renderHeader(f, !0)), h = l._getLastCellPosition(), b = h.y + (h.h || 0))), z(e[0]))
					if (l._cellPrintingHeaderRow ? l.rect(a, b, c, d, ra) : l.rect(a, b, c, d), "right" === g)
						for (v(e) || (e = [e]), k = 0; k < e.length; k++) i = e[k], j = l._getStringWidth(i) * l.getFontSize(), l.text(i, a + c - j - o, b + l.getLineHeight() * (k + 1));
					else l.text(e, a + o, b + l.getLineHeight());
				return l._setLastCellPosition(a, b, c, d, f), l
			},
			_renderHeader: function (a, b) {
				var c, d, e, f, g, h = this,
					i = [];
				if (!h._cellTableHeaderRow) return void F("shieldExport: No table header configuration", h.options.dieOnError);
				for (h._cellPrintingHeaderRow = !0, z(h._cellHeaderFunction) && (g = h._cellHeaderFunction.call(h, h._cellPages), h._setLastCellPosition(g[0], g[1], g[2], g[3], -1)), h.setFontStyle(ka), e = 0, f = h._cellTableHeaderRow.length; e < f; e++) h.setFillColor(236, 237, 238), c = h._cellTableHeaderRow[e], b && (c[1] = h._cellMargins && h._cellMargins.top || 0, i.push(c)), d = [].concat(c), h._cell.apply(h, d.concat(a));
				i.length > 0 && h._setTableHeaderConfig(i), h.setFontStyle(ja), h._cellPrintingHeaderRow = !1
			},
			table: function (a, b, c, e, f) {
				var g, h, i, j, k, l, m, n, o, p, q, s, t, w = this,
					x = w._cellPadding,
					y = [],
					B = [],
					C = {},
					E = [],
					H = function (a) {
						return a[g]
					},
					I = !0,
					J = w.getFontSize(),
					K = w._noMargins;
				if (!c) return void F("shieldExport: No data specified for PDF table", w.options.dieOnError);
				if (t = c.slice(0), f && (f.printHeader === !1 && (I = !1), f.fontSize && (J = f.fontSize), f.margins && (K = f.margins)), w._lastCellPos = {
						x: d,
						y: d,
						w: d,
						h: d,
						ln: d
					}, w._cellPages = 1, w._tablePrintHeader = I, w._cellMargins = K, w.setFontSize(J), w._tableFontSize = J, !z(e) || A(e)) y = G(t[0]);
				else if (e[0] && !u(e[0]))
					for (i = 0, j = e.length; i < j; i++) g = e[i], y.push(g.field), B.push(g.title), C[g.field] = z(g.width) ? D(g.width) * w._getScaleFactor() : d;
				else y = e;
				for (i = 0, j = y.length; i < j; i++)
					if (g = y[i], !z(C[g])) {
						for (n = [], n.push(w._getTextDimensions(B[i] || g).w + 2 * x), m = r(t, H), o = 0, k = m.length; o < k; o++) l = m[o], n.push(w._getTextDimensions(l).w + 2 * x);
						C[g] = Math.max.apply(Math, n)
					}
				if (I) {
					for (s = w._getLineHeight(y, C, B.length ? B : y), i = 0, j = y.length; i < j; i++) g = y[i], h = B.length ? B[i] : g, v(h) || (h += ""), E.push([a, b, C[g], s, h]);
					w._setTableHeaderConfig(E), w._renderHeader(1, !1)
				}
				for (i = 0, j = t.length; i < j; i++)
					for (p = t[i], s = w._getLineHeight(y, C, p), o = 0, q = y.length; o < q; o++) g = y[o], w._cell(a, b, C[g], s, p[g], i + 2, e[o].align);
				return w
			}
		}), i = f.extend({
			getExt: function () {
				return ".csv"
			},
			getContentType: function () {
				return "text/csv;charset=utf-8"
			},
			getContent: function (a) {
				var b, c, d, e = this,
					f = e.options,
					g = f.delimiter || ",",
					h = f.header,
					i = f.records || [],
					j = i.length,
					k = "",
					l = /\"/g,
					m = function (a) {
						return (a + "").replace(l, '""')
					};
				if (f.printHeader && h) {
					for (b = 0; b < h.length; b++) k += (b > 0 ? g : "") + '"' + m(h[b]) + '"';
					k += "\n"
				}
				for (b = 0; b < j; b++) {
					for (c = 0, d = i[b].length; c < d; c++) k += (c > 0 ? g : "") + '"' + m(i[b][c]) + '"';
					k += "\n"
				}
				return k
			}
		}), q(l, {
			PDFDocument: g,
			CSVDocument: i,
			OOXMLWorkbook: j,
			ExcelXMLSpreadsheet: k
		})
	}(jQuery, shield, this);
shield.version = '1.7.40';
! function (a, b, c, d) {
	function e(a) {
		return Aa.log(a) / Aa.LN10
	}

	function f(a) {
		return Aa.pow(10, a)
	}

	function g(a, b) {
		for (var c = a.length; c--;)
			if (a[c] === b) {
				a.splice(c, 1);
				break
			}
	}

	function h(a, b, c) {
		var d, e, f = "setAttribute";
		if (kb(b)) qb(c) ? a[f](b, c) : a && a.getAttribute && (e = a.getAttribute(b));
		else if (qb(b) && lb(b))
			for (d in b) b.hasOwnProperty(d) && a[f](d, b[d]);
		return e
	}

	function i() {
		var a, b, c = arguments,
			d = c.length;
		for (a = 0; a < d; a++)
			if (b = c[a], "undefined" != typeof b && null !== b) return b
	}

	function j(a, b) {
		Xa && b && b.opacity !== d && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")"), gb(a.style, b)
	}

	function k(a, b, c, d, e) {
		var f = za.createElement(a);
		return b && gb(f, b), e && j(f, {
			padding: 0,
			border: Ab,
			margin: 0
		}), c && j(f, c), d && d.appendChild(f), f
	}

	function l(a, b) {
		var c = function () {};
		return c.prototype = new a, gb(c.prototype, b), c
	}

	function m(a, b, c) {
		var d = a[b];
		a[b] = function () {
			var a = Array.prototype.slice.call(arguments);
			return a.unshift(d), c.apply(this, a)
		}
	}

	function n(a, b, c, d) {
		var e, f;
		for (c = i(c, 1), e = a / c, b || (b = [1, 2, 2.5, 5, 10], d && d.decimalTicks === !1 && (1 === c ? b = [1, 2, 5, 10] : c <= .1 && (b = [1 / c]))), f = 0; f < b.length && (a = b[f], !(e <= (b[f] + (b[f + 1] || b[f])) / 2)); f++);
		return a *= c
	}

	function o(a, b) {
		var c, d, e = b || [
				[Hb, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
				[Ib, [1, 2, 5, 10, 15, 30]],
				[Jb, [1, 2, 5, 10, 15, 30]],
				[Kb, [1, 2, 3, 4, 6, 8, 12]],
				[Lb, [1, 2]],
				[Mb, [1, 2]],
				[Nb, [1, 2, 3, 4, 6]],
				[Ob, null]
			],
			f = e[e.length - 1],
			g = ka[f[0]],
			h = f[1];
		for (d = 0; d < e.length; d++)
			if (f = e[d], g = ka[f[0]], h = f[1], e[d + 1]) {
				var i = (g * h[h.length - 1] + ka[e[d + 1][0]]) / 2;
				if (a <= i) break
			}
		return g === ka[Ob] && a < 5 * g && (h = [1, 2, 5]), c = n(a / g, h), {
			unitRange: g,
			count: c,
			unitName: f[0]
		}
	}

	function p(a, b, c, d) {
		var e, f, g = [],
			h = {},
			j = ha.allowUTCFormatting,
			k = new Date(b),
			l = a.unitRange,
			m = a.count;
		l >= ka[Ib] && (k.setMilliseconds(0), k.setSeconds(l >= ka[Jb] ? 0 : m * Ca(k.getSeconds() / m))), l >= ka[Jb] && k[sa](l >= ka[Kb] ? 0 : m * Ca(k[ma]() / m)), l >= ka[Kb] && k[ta](l >= ka[Lb] ? 0 : m * Ca(k[na]() / m)), l >= ka[Lb] && k[ua](l >= ka[Nb] ? 1 : m * Ca(k[pa]() / m)), l >= ka[Nb] && (k[va](l >= ka[Ob] ? 0 : m * Ca(k[qa]() / m)), f = k[ra]()), l >= ka[Ob] && (f -= f % m, k[wa](f)), l === ka[Mb] && k[ua](k[pa]() - k[oa]() + i(d, 1)), e = 1, f = k[ra]();
		for (var n = k.getTime(), o = k[qa](), p = k[pa](), q = j ? 0 : (864e5 + 60 * k.getTimezoneOffset() * 1e3) % 864e5; n < c;) g.push(n), l === ka[Ob] ? n = la(f + e * m, 0) : l === ka[Nb] ? n = la(f, o + e * m) : j || l !== ka[Lb] && l !== ka[Mb] ? (n += l * m, l <= ka[Kb] && n % ka[Lb] === q && (h[n] = Lb)) : n = la(f, o, p + e * m * (l === ka[Lb] ? 1 : 7)), e++;
		return g.push(n), g.info = gb(a, {
			higherRanks: h,
			totalRange: l * m
		}), g
	}

	function q() {
		this.color = 0, this.symbol = 0
	}

	function r(a, b) {
		var c, d, e = a.length;
		for (d = 0; d < e; d++) a[d]._ssIndex = d;
		for (a.sort(function (a, d) {
				return c = b(a, d), 0 === c ? a._ssIndex - d._ssIndex : c
			}), d = 0; d < e; d++) delete a[d]._ssIndex
	}

	function s(a) {
		for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]);
		return c
	}

	function t(a) {
		for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]);
		return c
	}

	function u(a, b) {
		for (var c in a) a.hasOwnProperty(c) && (a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c])
	}

	function v(a) {
		ga || (ga = k(tb)), a && ga.appendChild(a), ga.innerHTML = ""
	}

	function w(a) {
		return parseFloat(a.toPrecision(14))
	}

	function x(a, b) {
		ia = i(a, Qb[b.guid].applyAnimation)
	}

	function y() {
		var a = ha.allowUTCFormatting,
			b = a ? "getUTC" : "get",
			c = a ? "setUTC" : "set";
		la = a ? Date.UTC : function (a, b, c, d, e, f) {
			return new Date(a, b, i(c, 1), i(d, 0), i(e, 0), i(f, 0)).getTime()
		}, ma = b + "Minutes", na = b + "Hours", oa = b + "Day", pa = b + "Date", qa = b + "Month", ra = b + "FullYear", sa = c + "Minutes", ta = c + "Hours", ua = c + "Date", va = c + "Month", wa = c + "FullYear"
	}

	function z() {}

	function A(a, b, c) {
		var d = this;
		d.axis = a, d.pos = b, d.type = c || "", d.isNew = !0, c || d._label()
	}

	function B(a, b) {
		var c = this;
		return c.axis = a, b && (c.options = b, c.id = b.id), c
	}

	function C(a, b, c, d, e, f) {
		var g = this,
			h = Qb[a.chart.guid].isInverted;
		g.axis = a, g.isNegative = c, g.options = b, g.x = d, g.stackIndex = e, g.percent = "percent" === f, g.alignOptions = {
			align: b.align || (h ? c ? "left" : "right" : "center"),
			verticalAlign: b.verticalAlign || (h ? "middle" : c ? "bottom" : "top"),
			y: i(b.y, h ? 4 : c ? 14 : -6),
			x: i(b.x, h ? c ? -6 : 6 : 0)
		}, g.textAlignINTERNAL = b.textAlignINTERNAL || (h ? c ? "right" : "left" : "center")
	}

	function D() {
		var a, c, e = this.axis,
			f = this.value,
			g = e.categoricalValues,
			h = this.dateTimeLabelFormat,
			i = null,
			j = i && i.length,
			k = e.isLog ? f : e.ticksRepeat;
		if (g) c = f;
		else if (h) c = b.format("{0:" + h + "}", new Date(f));
		else if (j && k >= 1e3)
			for (; j-- && c === d;) a = Aa.pow(1e3, j + 1), k >= a && null !== i[j] && (c = b.format("{0:n}", f / a) + i[j]);
		return c === d && (c = f >= 1e3 ? b.format("{0:d}", f) : b.format(ob(f) ? "{0:n}" : "{0:d}", f)), c
	}

	function E() {
		var a, b = this,
			c = b.chart,
			e = b.stacks,
			f = [],
			g = [];
		b.hasVisibleSeries = !1, b.dataMin = b.dataMax = null, Sb(b.dataSeries, function (h) {
			if (h.visible || c.options.scaleAxesForHiddenSeries) {
				var j, k, l, m, n, o, p, q, r, u, v, x = h.options,
					y = x.baseValue,
					z = [],
					A = 0;
				if (b.hasVisibleSeries = !0, b.isLog && y <= 0 && (y = x.baseValue = null), b.isXAxis) p = h.xData, p.length && (b.dataMin = Fa(i(b.dataMin, p[0]), s(p)), b.dataMax = Ea(i(b.dataMax, p[0]), t(p)));
				else {
					var B, D, E, F, G = h.cropped,
						H = M.call(h.axisX),
						I = !!h.modifyValue;
					for (j = x.stackMode, b.usePercentage = "percent" === j, j && (n = x.stackIndex, m = h.seriesType + i(n, ""), o = "-" + m, h.stackKey = m, k = f[m] || [], f[m] = k, l = g[o] || [], g[o] = l), b.usePercentage && (b.dataMin = 0, b.dataMax = 99), p = h.processedXData, q = h.processedYData, v = q.length, a = 0; a < v; a++)
						if (r = p[a], u = q[a], j && (B = u < y, D = B ? l : k, E = B ? o : m, u = D[r] = qb(D[r]) ? w(D[r] + u) : u, e[E] || (e[E] = {}), e[E][r] || (e[E][r] = new C(b, b.options.stackTextSettings, B, r, n, j)), e[E][r]._total(u)), null !== u && u !== d && (I && (u = h.modifyValue(u)), G || (p[a + 1] || r) >= H.min && (p[a - 1] || r) <= H.max))
							if (F = u.length)
								for (; F--;) null !== u[F] && (z[A++] = u[F]);
							else z[A++] = u;
					!b.usePercentage && z.length && (b.dataMin = Fa(i(b.dataMin, z[0]), s(z)), b.dataMax = Ea(i(b.dataMax, z[0]), t(z))), qb(y) && (b.dataMin >= y ? (b.dataMin = y, b.ignoreMinPadding = !0) : b.dataMax < y && (b.dataMax = y, b.ignoreMaxPadding = !0))
				}
			}
		})
	}

	function F(a, b, c) {
		var d, e, f = w(Ca(b / a) * a),
			g = w(Da(c / a) * a),
			h = [];
		for (d = f; d <= g && (h.push(d), d = w(d + a), d !== e);) e = d;
		return h
	}

	function G(a, b, c, d) {
		var g = this,
			h = g.options,
			j = g.len,
			k = [];
		if (d || (g._minorAutoInterval = null), a >= .5) a = Ba(a), k = F.call(g, a, b, c);
		else if (a >= .08) {
			var l, m, o, p, q, r, s, t = Ca(b);
			for (l = a > .3 ? [1, 2, 4] : a > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9], m = t; m < c + 1 && !s; m++)
				for (p = l.length, o = 0; o < p && !s; o++) q = e(f(m) * l[o]), q > b && k.push(r), r > c && (s = !0), r = q
		} else {
			var u = f(b),
				v = f(c),
				w = h[d ? "minorTicksRepeat" : "ticksRepeat"],
				x = "auto" === w ? null : w,
				y = h.tickPixelIntervalINTERNAL / (d ? 5 : 1),
				z = d ? j / g.tickPositions.length : j;
			a = i(x, g._minorAutoInterval, (v - u) * y / (z || 1)), a = n(a, null, Aa.pow(10, Ca(Aa.log(a) / Aa.LN10))), k = Vb(F.call(g, a, u, v), e), d || (g._minorAutoInterval = a / 5)
		}
		return d || (g.ticksRepeat = a), k
	}

	function H() {
		var a, b, c, d = this,
			e = d.tickPositions,
			f = d.minorTicksRepeat,
			g = [];
		if (d.isLog)
			for (c = e.length, b = 1; b < c; b++) g = g.concat(G.call(d, f, e[b - 1], e[b], !0));
		else
			for (a = d.min + (e[0] - d.min) % f; a <= d.max; a += f) g.push(a);
		return g
	}

	function I(a, b, c, d, e, f) {
		var g = this;
		return a > 0 ? g.translate(g.dataMin + a, b, c, d, e, f) - g.translate(g.dataMin, b, c, d, e, f) : a < 0 ? g.translate(g.dataMax + a, b, c, d, e, f) - g.translate(g.dataMax, b, c, d, e, f) : 0
	}

	function J() {
		var a, b, c, e, f, g, h, j, k = this,
			l = k.options,
			m = k.min,
			n = k.max,
			o = k.dataMax - k.dataMin >= k.zoomMin;
		if (k.isXAxis && k.zoomMin === d && !k.isLog && (qb(l.min) || qb(l.max) ? k.zoomMin = null : (Sb(k.dataSeries, function (a) {
				for (f = a.xData, g = a.xIncrement ? 1 : f.length - 1, c = g; c > 0; c--) e = f[c] - f[c - 1], (b === d || e < b) && (b = e)
			}), k.zoomMin = Fa(5 * b, k.dataMax - k.dataMin))), n - m < k.zoomMin) {
			var p = k.zoomMin;
			a = (p - n + m) / 2, h = [m - a, i(l.min, m - a)], o && (h[2] = k.dataMin), m = t(h), j = [m + p, i(l.max, m + p)], o && (j[2] = k.dataMax), n = s(j), n - m < p && (h[0] = n - p, h[1] = i(l.min, n - p), m = t(h))
		}
		k.min = m, k.max = n
	}

	function K() {
		var a = this,
			b = Qb[a.chart.guid],
			c = b.maxTicks,
			d = a.tickPositions,
			e = a.xOrY;
		c || (c = {
			x: 0,
			y: 0
		}), !a.isLinked && !a.isDatetimeAxis && d.length > c[e] && a.options.matchTicks !== !1 && (c[e] = d.length), b.maxTicks = c
	}

	function L(a, b, c, d, e) {
		var f = this,
			g = f.chart;
		c = i(c, !0), e = gb(e, {
			min: a,
			max: b
		}), f.userMin = a, f.userMax = b, f.isDirtyExtremes = !0, c && g.redraw(d)
	}

	function M() {
		var a = this,
			b = a.isLog;
		return {
			min: b ? w(f(a.min)) : a.min,
			max: b ? w(f(a.max)) : a.max,
			dataMin: a.dataMin,
			dataMax: a.dataMax,
			userMin: a.userMin,
			userMax: a.userMax
		}
	}

	function N(a) {
		var b = this,
			c = b.isLog,
			d = c ? f(b.min) : b.min,
			e = c ? f(b.max) : b.max;
		return d > a || null === a ? a = d : e < a && (a = e), b.translate(a, 0, 1, 0, 1)
	}

	function O(a) {
		var b = new B(this, a).render();
		return this.plotLinesAndBands.push(b), b
	}

	function P() {
		this.init.apply(this, arguments)
	}

	function Q(a, b) {
		var c, d, e = Qb[this.chart.guid],
			f = e.isInverted,
			g = 0,
			h = 0;
		return a = rb(a), c = a[0].tooltipPos, c || (Sb(a, function (a) {
			d = a.dataSeries.axisY, g += a.plotX, h += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!f && d ? d.top - e.plotTop : 0)
		}), g /= a.length, h /= a.length, c = [f ? e.plotWidth - h : g, this.chartBound && !f && a.length > 1 && b ? b.chartY - e.plotTop : f ? e.plotHeight - g : h]), Vb(c, Ba)
	}

	function R() {
		Sb(this.axisMarkers, function (a) {
			a && a.hide()
		})
	}

	function S(b, c) {
		var d = this;
		d.chart = b, d.options = c, d.axisMarkers = [], d.isHidden = !0, (/msie 7/i.test(Va) || /msie 8/i.test(Va)) && a("html").addClass("ie7"), d.labelElement = a('<div class="shield-tooltip" style="pointer-events: none"></div>').appendTo(b.element), (Xa || Wa) && a(d.labelElement).bind(Ma, function (a) {
			Qb[b.guid].container.onmousemove(a)
		}), d.chartBound = c.chartBound
	}

	function T(a, b) {
		var c = this,
			d = cb ? "" : b.zoomMode;
		c.zoomX = /x/.test(d), c.zoomY = /y/.test(d), c.options = b, c.chart = a, c.init(a, b.tooltipSettings)
	}

	function U(a, b) {
		var c = this,
			d = c.options,
			e = a.legendItem,
			f = a.legendLine,
			g = a.legendSymbol,
			h = a.checkMark,
			i = c.disabledStyle.color,
			j = b ? d.legendItemSettings.elementStyle.color : i,
			k = b ? a.color : i,
			l = (a.options && a.options.pointMark, {
				stroke: k,
				fill: k,
				"stroke-width": 0
			});
		e && e.css({
			fill: j
		}), f && f.attr({
			stroke: k
		}), g && g.attr(l), h && (b ? h.attr({
			stroke: d.checkMarkSettings.color
		}).css({
			visibility: ub
		}) : h.css({
			visibility: vb
		}))
	}

	function V(a) {
		var b = this,
			c = b.options,
			d = c.legendMarkerDistance,
			e = !c.rtlLayout,
			f = a._legendItemPos,
			g = f[0],
			h = f[1];
		a.legendGroup && a.legendGroup.translate(e ? g : b.legendWidth - g - 2 * d - 4, h)
	}

	function W(a) {
		a.legendItem && a.legendItem.destroy(), a.legendLine && a.legendLine.destroy(), a.legendSymbol && a.legendSymbol.destroy(), a.legendGroup && a.legendGroup.destroy()
	}

	function X(a) {
		var b, c, d, e, f = this,
			g = f.chart,
			h = Qb[g.guid],
			i = h.renderer,
			j = f.options,
			k = j.legendItemSettings,
			l = j.checkMarkSettings,
			m = l.mouseOverColor,
			n = "horizontal" === j.renderDirection,
			o = j.symbolWidthINTERNAL,
			p = j.legendMarkerDistance,
			q = f.elementStyle,
			r = f.disabledStyle,
			s = f.padding,
			t = !j.rtlLayout,
			u = j.width,
			v = k.bottomSpacing || 0,
			w = f.topSpacing,
			x = f.initialItemX,
			y = a.legendItem,
			z = a.dataSeries || a;
		z.options;
		y || (a.legendGroup = i.g().attr({
			zIndex: 1
		}).add(f.scrollGroup), z.drawLegendSymbol(f, a), a.legendItem = y = i.text(a.collectionAlias, t ? o + p : -p, f.baseline, j.htmlOutput).css(Wb(a.visible ? q : r)).attr({
			align: t ? "left" : "right",
			zIndex: 2
		}).add(a.legendGroup), e = a.checkMark, a.legendGroup.on(Ma, function (b) {
			var c = g.trigger("legendSeriesMouseOver", {
				item: a
			});
			c.isDefaultPrevented() || (k.proxyHoverEvents && a._mouseOver(b), a.setState(Fb), y.css(k.mouseOverStyle), e && m && e.attr({
				stroke: m
			}))
		}).on(Na, function (b) {
			var c = g.trigger("legendSeriesMouseOut", {
				item: a
			});
			c.isDefaultPrevented() || (k.proxyHoverEvents && a._mouseOut(b), y.css(a.visible ? q : r), e && e.attr({
				stroke: l.color
			}), a.setState())
		}).on(Ta, function (b) {
			var c = g.trigger("legendSeriesClick", {
				item: a
			});
			c.isDefaultPrevented() || a.toggle()
		}), U.call(f, a, a.visible)), c = y.getBBox(), d = a.legendelementWidth = k.elementWidth || o + p + c.width + s, f.itemHeight = b = c.height, n && f.itemX - x + d > (u || h.chartWidth - 2 * s - x) && (f.itemX = x, f.itemY += w + f.lastLineHeight + v, f.lastLineHeight = 0), f.maxelementWidth = Ea(f.maxelementWidth, d), f.lastItemY = w + f.itemY + v, f.lastLineHeight = Ea(b, f.lastLineHeight), a._legendItemPos = [f.itemX, f.itemY], n ? f.itemX += d : (f.itemY += w + b + v, f.lastLineHeight = b), f.offsetWidth = u || Ea(n ? f.itemX - x : d, f.offsetWidth)
	}

	function Y(a) {
		var b, c = this,
			d = c.chart,
			e = Qb[d.guid],
			f = (e.renderer, c.options),
			g = f.y,
			h = "top" === f.verticalAlign,
			i = e.spacingBox.height + (h ? -g : g) - this.padding,
			j = c.clipRect;
		return "horizontal" === f.renderDirection && (i /= 2), a > i && (c.clipHeight = b = i, j.attr({
			height: b
		}), a = i), a
	}

	function Z(a) {
		this.init(a)
	}

	function $(a, b, c, d) {
		var e = Qb[a.guid],
			f = d ? c : b,
			g = d ? b : c;
		return f >= 0 && f <= e.plotWidth && g >= 0 && g <= e.plotHeight
	}

	function _() {
		for (var a, b = this, c = ["graphic", "tracker", "dataLabel", "group", "connector", "shadowGroup"], d = 6; d--;) a = c[d], b[a] && (b[a] = b[a].destroy())
	}

	function aa(a, b) {
		var c, d = this,
			e = d.dataSeries,
			f = e.chart,
			g = e.data,
			h = g.length;
		for (x(b, f), a = i(a, !0), c = 0; c < h; c++)
			if (g[c] === d) {
				g.splice(c, 1), e.options.data.splice(c, 1), e.xData.splice(c, 1), e.yData.splice(c, 1);
				break
			}
		d.destroy(), e.isDirty = !0, e.isDirtyData = !0, a && f.redraw()
	}

	function ba(a, b, c) {
		var d, e = this,
			f = e.dataSeries,
			g = f.chart,
			h = Qb[g.guid],
			j = e.slicedTranslation;
		x(c, g), b = i(b, !0), a = e.sliced = qb(a) ? a : !e.sliced, d = {
			translateX: a ? j[0] : h.plotLeft,
			translateY: a ? j[1] : h.plotTop
		}, e.group.animate(d), e.shadowGroup && e.shadowGroup.animate(d)
	}

	function ca(a, b, c) {
		this.init.call(this, a, b, c)
	}

	function da(a, b, c) {
		var d = this,
			e = Qb[b.guid];
		a.call(d, b, c), e.enablePolarLayout && (d.closeSegment = function (a) {
			var b = d.axisX.center;
			a.push("L", b[0], b[1])
		}, d.closedStacks = !0)
	}

	function ea(a, b) {
		var c, e = this,
			f = Qb[e.chart.guid],
			g = e.options.applyAnimation,
			h = e.group,
			i = e.markerGroup,
			j = e.axisX.center,
			k = f.plotLeft,
			l = f.plotTop;
		f.enablePolarLayout ? f.renderer.isSVG && !Xa && (g === !0 && (g = {}), b ? (h.attrSetters.scaleX = h.attrSetters.scaleY = function (a, b) {
			var c = this;
			return c[b] = a, c.scaleX !== d && c.scaleY !== d && c.element.setAttribute("transform", "translate(" + c.translateX + "," + c.translateY + ") scale(" + c.scaleX + "," + c.scaleY + ")"), !1
		}, c = {
			translateX: j[0] + k,
			translateY: j[1] + l,
			scaleX: 0,
			scaleY: 0
		}, h.attr(c), i && (i.attrSetters = h.attrSetters, i.attr(c))) : (c = {
			translateX: k,
			translateY: l,
			scaleX: 1,
			scaleY: 1
		}, h.animate(c, g), i && i.animate(c, g), e.animate = null)) : a.call(e, b)
	}
	var fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa = b.ui.Widget,
		ya = b.Constants,
		za = document,
		Aa = Math,
		Ba = Aa.round,
		Ca = Aa.floor,
		Da = Aa.ceil,
		Ea = Aa.max,
		Fa = Aa.min,
		Ga = Aa.abs,
		Ha = Aa.cos,
		Ia = Aa.sin,
		Ja = Aa.PI,
		Ka = 2 * Ja / 360,
		La = "function",
		Ma = "mouseover",
		Na = "mouseout",
		Oa = "mousemove",
		Pa = "mouseenter",
		Qa = "mouseleave",
		Ra = "touchstart",
		Sa = "resize",
		Ta = "click",
		Ua = "point",
		Va = navigator.userAgent,
		Wa = c.opera,
		Xa = /msie/i.test(Va) && !Wa,
		Ya = 8 === za.documentMode,
		Za = /AppleWebKit/.test(Va),
		$a = /Firefox/.test(Va),
		_a = ya.SVG_NS,
		ab = !!za.createElementNS && !!za.createElementNS(_a, "svg").createSVGRect,
		bb = !!za.createElement("canvas").getContext,
		cb = !ab && !Xa && bb,
		db = za.documentElement.ontouchstart !== d,
		eb = {},
		fb = function () {},
		gb = a.extend,
		hb = a.inArray,
		ib = b.error,
		jb = b.to["int"],
		kb = b.is.string,
		lb = b.is.object,
		mb = b.is.array,
		nb = b.is.number,
		ob = (b.is.integer, b.is["float"]),
		pb = b.is["null"],
		qb = b.is.defined,
		rb = b.to.array,
		sb = "shield-",
		tb = "div",
		ub = "visible",
		vb = "hidden",
		wb = "relative",
		xb = "px",
		yb = "L",
		zb = "M",
		Ab = "none",
		Bb = "absolute",
		Cb = "pointer",
		Db = "rgba(192,192,192," + (ab ? 1e-4 : .002) + ")",
		Eb = "",
		Fb = "pointHoveredState",
		Gb = "pointSelectedState",
		Hb = "MILLISECOND",
		Ib = "SECOND",
		Jb = "MINUTE",
		Kb = "HOUR",
		Lb = "DAY",
		Mb = "WEEK",
		Nb = "MONTH",
		Ob = "YEAR",
		Pb = "stroke-width",
		Qb = {},
		Rb = {};
	q.prototype = {
			wrapColor: function (a) {
				this.color >= a && (this.color = 0)
			},
			wrapSymbol: function (a) {
				this.symbol >= a && (this.symbol = 0)
			}
		}, ka = {
			MILLISECOND: 1,
			SECOND: 1e3,
			MINUTE: 6e4,
			HOUR: 36e5,
			DAY: 864e5,
			WEEK: 6048e5,
			MONTH: 2592e6,
			YEAR: 31556952e3
		}, ja = {
			init: function (a, b, c) {
				b = b || "";
				var d, e, f, g, h, i = a.shift,
					j = b.indexOf("C") > -1,
					k = j ? 7 : 3,
					l = b.split(" "),
					m = [].concat(c),
					n = function (a) {
						for (f = a.length; f--;) a[f] === zb && a.splice(f + 1, 0, a[f + 1], a[f + 2], a[f + 1], a[f + 2])
					};
				if (j && (n(l), n(m)), a.isArea && (g = l.splice(l.length - 6, 6), h = m.splice(m.length - 6, 6)), i <= m.length / k)
					for (; i--;) m = [].concat(m).splice(0, k).concat(m);
				if (a.shift = 0, l.length)
					for (d = m.length; l.length < d;) e = [].concat(l).splice(l.length - k, k), j && (e[k - 6] = e[k - 2], e[k - 5] = e[k - 1]), l = l.concat(e);
				return g && (l = l.concat(g), m = m.concat(h)), [l, m]
			},
			step: function (a, b, c, d) {
				var e, f = [],
					g = a.length;
				if (1 === c) f = d;
				else if (g === b.length && c < 1)
					for (; g--;) e = parseFloat(a[g]), f[g] = isNaN(e) ? a[g] : c * parseFloat(b[g] - e) + e;
				else f = b;
				return f
			}
		},
		function () {
			var b, c = a.fx,
				e = c.step,
				f = a.Tween,
				g = f && f.propHooks;
			a.extend(a.easing, {
				easeOutQuad: function (a, b, c, d, e) {
					return -d * (b /= e) * (b - 2) + c
				}
			}), a.each(["cur", "_default", "width", "height"], function (a, b) {
				var h, i, j = e;
				"cur" === b ? j = c.prototype : "_default" === b && f && (j = g[b], b = "set"), h = j[b], h && (j[b] = function (c) {
					return c = a ? c : this, i = c.elem, i.attr ? i.attr(c.prop, "cur" === b ? d : c.now) : h.apply(this, arguments)
				})
			}), b = function (a) {
				var b, c = a.elem;
				a.started || (b = ja.init(c, c.d, c.toD), a.start = b[0], a.end = b[1], a.started = !0), c.attr("d", ja.step(a.start, a.end, a.pos, c.toD))
			}, f ? g.d = {
				set: b
			} : e.d = b
		}();
	var Sb = (a.getScript, Array.prototype.forEach ? function (a, b) {
			return Array.prototype.forEach.call(a, b)
		} : function (a, b) {
			for (var c = 0, d = a.length; c < d; c++)
				if (b.call(a[c], a[c], c, a) === !1) return c
		}),
		Tb = a.grep,
		Ub = function (b) {
			return a(b).offset()
		},
		Vb = a.map,
		Wb = function () {
			return a.extend.apply(a, [].concat.apply([!0, null], arguments))
		},
		Xb = function (b, c, d) {
			a(b).bind(c, d)
		},
		Yb = function (b, c, d) {
			var e = za.removeEventListener ? "removeEventListener" : "detachEvent";
			za[e] && !b[e] && (b[e] = function () {}), a(b).unbind(c, d)
		},
		Zb = function (b, c, d, e) {
			var f, g = a.Event(c),
				h = "detached" + c;
			!Xa && d && (delete d.layerX, delete d.layerY), gb(g, d), b[c] && (b[h] = b[c], b[c] = null), a.each(["preventDefault", "stopPropagation"], function (a, b) {
				var c = g[b];
				g[b] = function () {
					try {
						c.call(g)
					} catch (a) {
						"preventDefault" === b && (f = !0)
					}
				}
			}), a(b).trigger(g), b[h] && (b[c] = b[h], b[h] = null), !e || g.isDefaultPrevented() || f || e(g)
		},
		$b = function (a, c, d, e) {
			var f;
			a instanceof b.ui.Widget ? a.trigger(c, d, e) : a instanceof b.Dispatcher ? (f = a.trigger(c, d), typeof e !== La || f.isDefaultPrevented() || e.call(a, f)) : Zb(a, c, d, e)
		},
		_b = function (b, c, d) {
			var e = a(b);
			c.d && (b.toD = c.d, c.d = 1), e.stop(), e.animate(c, d)
		},
		ac = function (b) {
			a(b).stop()
		},
		bc = {
			enabled: !0,
			align: "center",
			x: 0,
			y: 15,
			style: {
				color: "#7E7E7E",
				fontSize: "11px",
				lineHeight: "14px"
			}
		};
	ha = {
		seriesPalette: ["#1E98E4", "#FFC500", "#FF2A00", "#CACACA", "#7F7F7F", "#00FF9C", "#6D31FF", "#00B2A1", "#B9FF85", "#FF8000"],
		allowUTCFormatting: !0,
		primaryHeader: {
			text: "",
			align: "center",
			fontFamily: "Segoe UI, Tahoma, Verdana, sans-serif",
			y: -15,
			style: {
				color: "#4B4B4B",
				fontSize: "16px",
				top: 10
			}
		},
		secondaryHeader: {
			text: "",
			align: "center",
			fontFamily: "Segoe UI, Tahoma, Verdana, sans-serif",
			y: 5,
			style: {
				color: "#606060"
			}
		},
		loadingTextStyle: {
			fontWeight: "bold",
			position: wb,
			top: "1em"
		},
		symbols: ["circle"],
		chartAreaBorderColor: "#000000",
		chartAreaBorderWidth: 0,
		borderColor: "#A0A0A0",
		borderRadius: 0,
		borderWidth: 0,
		seriesType: "bar",
		scaleAxesForHiddenSeries: !1,
		chartAreaPaddingTop: 40,
		chartAreaPaddingRight: 10,
		chartAreaPaddingBottom: 20,
		chartAreaPaddingLeft: 10,
		style: {
			fontFamily: "Segoe UI, Tahoma, Verdana, sans-serif",
			fontSize: "12px"
		},
		backgroundColor: "#FFFFFF",
		axisX: {
			plotStripWidth: 0,
			drawWidth: 1,
			ticksWidth: 1,
			ticksHeight: 6,
			drawColor: "#636363",
			ticksColor: "#636363",
			lastTickTextVisible: !0,
			axisTickText: {
				style: {
					color: "#636363",
					fontSize: "11px",
					fontFamily: "Segoe UI, Tahoma, Verdana, sans-serif"
				},
				y: 17
			},
			title: {
				style: {
					color: "#636363",
					fontWeight: "normal",
					fontSize: "11px",
					fontFamily: "Segoe UI, Tahoma, Verdana, sans-serif"
				}
			}
		},
		axisY: {
			plotStripWidth: 1,
			drawWidth: 0,
			tickWidth: 1,
			tickColor: "#7E7E7E",
			drawColor: "#636363",
			plotStripDashStyle: "Solid",
			axisTickText: {
				style: {
					color: "#636363",
					fontSize: "11px",
					fontFamily: "Segoe UI, Tahoma, Verdana, sans-serif"
				}
			},
			title: {
				style: {
					color: "#636363",
					fontSize: "11px",
					fontFamily: "Segoe UI, Tahoma, Verdana, sans-serif"
				}
			}
		},
		seriesSettings: {
			bar: {
				borderWidth: 0
			},
			line: {
				enablePointSelection: !1,
				allowMultiPointSelection: !0,
				applyAnimation: {
					duration: 1200
				},
				events: {},
				drawWidth: 3,
				shadow: !1,
				pointMark: {
					enabled: !0,
					drawWidth: 2,
					drawRadius: 3,
					drawColor: null,
					innerColor: null,
					activeSettings: {
						pointHoveredState: {
							enabled: !0,
							innerColor: "#FFFFFF",
							drawWidth: 2,
							drawRadius: 4
						},
						pointSelectedState: {
							color: "#7AF4F4",
							shadow: !1,
							drawWidth: 2
						}
					}
				},
				point: {
					events: {}
				},
				dataPointText: Wb(bc, {
					enabled: !1,
					format: "{point.y}",
					verticalAlign: "bottom",
					y: 0
				}),
				pointsLimit: 300,
				pointRange: 0,
				addToLegend: !0,
				activeSettings: {
					pointHoveredState: {
						drawWidth: 3,
						pointMark: {}
					},
					pointSelectedState: {
						pointMark: {}
					}
				},
				completeSeriesTrace: !0
			},
			polarline: {
				applyAnimation: {
					duration: 500
				}
			},
			polararea: {
				applyAnimation: {
					duration: 500
				}
			},
			polarbar: {
				applyAnimation: {
					duration: 500
				}
			},
			polarspline: {
				applyAnimation: {
					duration: 500
				}
			},
			polarsplinearea: {
				applyAnimation: {
					duration: 500
				}
			},
			polarscatter: {
				applyAnimation: {
					duration: 500
				}
			}
		},
		chartLegend: {
			enabled: !0,
			align: "center",
			renderDirection: "horizontal",
			borderWidth: 0,
			borderColor: "#909090",
			borderRadius: 0,
			shadow: !1,
			legendItemSettings: {
				disabledStyle: {
					color: "#CCC"
				},
				mouseOverStyle: {
					color: "#000"
				},
				elementStyle: {
					cursor: Cb,
					color: "#3E576F",
					fontSize: "12px"
				}
			},
			checkMarkSettings: {
				enabled: !1,
				shape: "check",
				width: 1,
				color: "#3E576F",
				mouseOverColor: d,
				coordinates: {
					x: d,
					y: d,
					width: d,
					height: d
				}
			},
			symbolWidthINTERNAL: 12,
			drawRadius: 4,
			legendMarkerDistance: 5,
			verticalAlign: "bottom",
			x: 0,
			y: 10
		},
		tooltipSettings: {
			enabled: !0,
			customHeaderText: "{point.pointName}",
			customPointText: "<span>{point.dataSeries.collectionAlias}</span>: {point.y}",
			format: null,
			position: null,
			chartBound: !1,
			axisMarkers: {
				enabled: !1,
				mode: "xy",
				color: "#999999",
				width: 1,
				zIndex: 3
			},
			showDistance: db ? 25 : 10
		}
	};
	var cc = ha.seriesSettings,
		dc = cc.line;
	y();
	var ec = function (a) {
		function b(a) {
			f = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(a), f ? g = [jb(f[1]), jb(f[2]), jb(f[3]), parseFloat(f[4], 10)] : (f = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a), f && (g = [jb(f[1], 16), jb(f[2], 16), jb(f[3], 16), 1]))
		}

		function c(b) {
			var c;
			return c = g && !isNaN(g[0]) ? "rgb" === b ? "rgb(" + g[0] + "," + g[1] + "," + g[2] + ")" : "a" === b ? g[3] : "rgba(" + g.join(",") + ")" : a
		}

		function d(a) {
			if (nb(a) && 0 !== a) {
				var b;
				for (b = 0; b < 3; b++) g[b] += jb(255 * a), g[b] < 0 && (g[b] = 0), g[b] > 255 && (g[b] = 255)
			}
			return this
		}

		function e(a) {
			return g[3] = a, this
		}
		var f, g = [];
		return b(a), {
			get: c,
			brighten: d,
			setOpacity: e
		}
	};
	z.prototype = {
		init: function (a, b) {
			var c = this;
			c.element = "span" === b ? k(b) : za.createElementNS(_a, b), c.renderer = a, c.attrSetters = {}
		},
		animate: function (a, b, c) {
			var d = i(b, ia, !0);
			ac(this), d ? (d = Wb(d), c && (d.complete = c), _b(this, a, d)) : (this.attr(a), c && c())
		},
		attr: function (a, b) {
			var c, e, f, g, i, j, k, l, m, n = this,
				o = n.element,
				p = o.nodeName.toLowerCase(),
				q = n.renderer,
				r = n.attrSetters,
				s = n.shadows,
				t = n;
			if (kb(a) && qb(b) && (c = a, a = {}, a[c] = b), kb(a)) c = a, "circle" === p ? c = {
				x: "cx",
				y: "cy"
			}[c] || c : "strokeWidth" === c && (c = "stroke-width"), t = h(o, c) || n[c] || 0, "d" !== c && "visibility" !== c && (t = parseFloat(t));
			else
				for (c in a)
					if (a.hasOwnProperty(c) && (j = !1, e = a[c], f = r[c] && r[c].call(n, e, c), f !== !1)) {
						if (f !== d && (e = f), "d" === c) e && e.join && (e = e.join(" ")), /(NaN| {2}|^$)/.test(e) && (e = "M 0 0");
						else if ("x" === c && "text" === p) {
							for (g = 0; g < o.childNodes.length; g++) i = o.childNodes[g], h(i, "x") === h(o, "x") && h(i, "x", e);
							n.textAngle && h(o, "transform", "rotate(" + n.textAngle + " " + e + " " + jb(a.y || h(o, "y")) + ")")
						} else if ("fill" === c) e = q.color(e, o, c);
						else if ("circle" !== p || "x" !== c && "y" !== c)
							if ("rect" === p && "r" === c) h(o, {
								rx: e,
								ry: e
							}), j = !0;
							else if ("translateX" === c || "translateY" === c || "textAngle" === c || "verticalAlign" === c) m = !0, j = !0;
						else if ("stroke" === c) e = q.color(e, o, c);
						else if ("dashstyle" === c) {
							if (c = "stroke-dasharray", e = e && e.toLowerCase(), "solid" === e) e = Ab;
							else if (e) {
								for (e = e.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), g = e.length; g--;) e[g] = jb(e[g]) * a["stroke-width"];
								e = e.join(",")
							}
						} else "isTracker" === c ? n[c] = e : "width" === c ? e = jb(e) : "align" === c ? (c = "text-anchor", e = {
							left: "start",
							center: "middle",
							right: "end"
						}[e]) : "title" === c && (k = o.getElementsByTagName("title")[0], k || (k = za.createElementNS(_a, "title"), o.appendChild(k)), k.textContent = e);
						else c = {
							x: "cx",
							y: "cy"
						}[c] || c;
						if ("strokeWidth" === c && (c = "stroke-width"), Za && "stroke-width" === c && 0 === e && (e = 1e-6), n.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) && (l || (n.symbolAttr(a), l = !0), j = !0), s && /^(width|height|visibility|x|y|d|transform)$/.test(c))
							for (g = s.length; g--;) h(s[g], c, "height" === c ? Ea(e - (s[g].cutHeight || 0), 0) : e);
						("width" === c || "height" === c) && "rect" === p && e < 0 && (e = 0), n[c] = e, m && n.updateTransform(), "text" === c ? (e !== n.textStr && delete n.bBox, n.textStr = e, n.added && q.buildText(n)) : j || h(o, c, e)
					} return t
		},
		symbolAttr: function (a) {
			var b = this;
			Sb(["x", "y", "r", "start", "end", "width", "height", "innerR", "anchorX", "anchorY"], function (c) {
				b[c] = i(a[c], b[c])
			}), b.attr({
				d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
			})
		},
		clip: function (a) {
			return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : Ab)
		},
		crisp: function (a, b, c, d, e) {
			var f, g, h = this,
				i = {},
				j = {};
			a = a || h.strokeWidth || h.attr && h.attr("stroke-width") || 0, g = Ba(a) % 2 / 2, j.x = Ca(b || h.x || 0) + g, j.y = Ca(c || h.y || 0) + g, j.width = Ca((d || h.width || 0) - 2 * g), j.height = Ca((e || h.height || 0) - 2 * g), j.strokeWidth = a;
			for (f in j) j.hasOwnProperty(f) && h[f] !== j[f] && (i[f] = j[f], lb(h) && (h[f] = j[f]));
			return i
		},
		css: function (a) {
			var b, c = this,
				d = c.element,
				e = a && a.width && "text" === d.nodeName.toLowerCase(),
				f = "",
				g = function (a, b) {
					return "-" + b.toLowerCase()
				};
			if (a && a.color && (a.fill = a.color), a = gb(c.styles, a), c.styles = a, cb && e && delete a.width, Xa && !ab) e && delete a.width, j(c.element, a);
			else {
				for (b in a) a.hasOwnProperty(b) && (f += b.replace(/([A-Z])/g, g) + ":" + a[b] + ";");
				c.attr({
					style: f
				})
			}
			return e && c.added && c.renderer.buildText(c), c
		},
		on: function (a, b) {
			var c = b;
			return this.element["on" + a] = c, this
		},
		setRadialReference: function (a) {
			return this.element.radialReference = a, this
		},
		translate: function (a, b) {
			return this.attr({
				translateX: a,
				translateY: b
			})
		},
		invert: function () {
			var a = this;
			return a.isInverted = !0, a.updateTransform(), a
		},
		htmlCss: function (a) {
			var b = this,
				c = b.element,
				d = a && "SPAN" === c.tagName && a.width;
			return d && (delete a.width, b.textWidth = d, b.updateTransform()), b.styles = gb(b.styles, a), j(b.element, a), b
		},
		htmlGetBBox: function () {
			var a = this,
				b = a.element,
				c = a.bBox;
			return c || ("text" === b.nodeName && (b.style.position = Bb), c = a.bBox = {
				x: b.offsetLeft,
				y: b.offsetTop,
				width: b.offsetWidth,
				height: b.offsetHeight
			}), c
		},
		htmlUpdateTransform: function () {
			if (!this.added) return void(this.alignOnAdd = !0);
			var a = this,
				b = a.renderer,
				c = a.element,
				d = a.translateX || 0,
				e = a.translateY || 0,
				f = a.x || 0,
				g = a.y || 0,
				h = a.textAlignINTERNAL || "left",
				k = {
					left: 0,
					center: .5,
					right: 1
				}[h],
				l = h && "left" !== h,
				m = a.shadows;
			if ((d || e) && (j(c, {
					marginLeft: d,
					marginTop: e
				}), m && Sb(m, function (a) {
					j(a, {
						marginLeft: d + 1,
						marginTop: e + 1
					})
				})), a.isInverted && Sb(c.childNodes, function (a) {
					b.invertChild(a, c)
				}), "SPAN" === c.tagName) {
				var n, o, p, q, r, s = a.textAngle,
					t = 0,
					u = 1,
					v = 0,
					w = jb(a.textWidth),
					x = a.xCorr || 0,
					y = a.yCorr || 0,
					z = [s, h, c.innerHTML, a.textWidth].join(","),
					A = {};
				z !== a.cTT && (qb(s) && (b.isSVG ? (r = Xa ? "-ms-transform" : Za ? "-webkit-transform" : $a ? "MozTransform" : Wa ? "-o-transform" : "", A[r] = A.transform = "rotate(" + s + "deg)") : (t = s * Ka, u = Ha(t), v = Ia(t), A.filter = s ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", u, ", M12=", -v, ", M21=", v, ", M22=", u, ", sizingMethod='auto expand')"].join("") : Ab), j(c, A)), n = i(a.elemWidth, c.offsetWidth), o = i(a.elemHeight, c.offsetHeight), n > w && /[ \-]/.test(c.innerText) && (j(c, {
					width: w + xb,
					display: "block",
					whiteSpace: "normal"
				}), n = w), p = b.fontMetrics(c.style.fontSize).b, x = u < 0 && -n, y = v < 0 && -o, q = u * v < 0, x += v * p * (q ? 1 - k : k), y -= u * p * (s ? q ? k : 1 - k : 1), l && (x -= n * k * (u < 0 ? -1 : 1), s && (y -= o * k * (v < 0 ? -1 : 1)), j(c, {
					textAlignINTERNAL: h
				})), a.xCorr = x, a.yCorr = y), j(c, {
					left: f + x + xb,
					top: g + y + xb
				}), a.cTT = z
			}
		},
		updateTransform: function () {
			var a = this,
				b = a.translateX || 0,
				c = a.translateY || 0,
				d = a.isInverted,
				e = a.textAngle,
				f = [];
			d && (b += a.attr("width"), c += a.attr("height")), (b || c) && f.push("translate(" + b + "," + c + ")"), d ? f.push("rotate(90) scale(-1,1)") : e && f.push("rotate(" + e + " " + (a.x || 0) + " " + (a.y || 0) + ")"), f.length && h(a.element, "transform", f.join(" "))
		},
		toFront: function () {
			var a = this.element;
			return a.parentNode.appendChild(a), this
		},
		align: function (a, b, c) {
			var d = this;
			a ? (d.alignOptions = a, d.alignByTranslate = b, c || d.renderer.alignedObjects.push(d)) : (a = d.alignOptions, b = d.alignByTranslate), c = i(c, d.renderer);
			var e = a.align,
				f = a.verticalAlign,
				g = (c.x || 0) + (a.x || 0),
				h = (c.y || 0) + (a.y || 0),
				j = {};
			return "right" !== e && "center" !== e || (g += (c.width - (a.width || 0)) / {
				right: 1,
				center: 2
			}[e]), j[b ? "translateX" : "x"] = Ba(g), "bottom" !== f && "middle" !== f || (h += (c.height - (a.height || 0)) / ({
				bottom: 1,
				middle: 2
			}[f] || 1)), j[b ? "translateY" : "y"] = Ba(h), d[d.placed ? "animate" : "attr"](j), d.placed = !0, d.alignAttr = j, d
		},
		getBBox: function () {
			var a, b, c = this,
				d = c.bBox,
				e = c.renderer,
				f = c.textAngle,
				g = c.element,
				h = c.styles,
				i = f * Ka;
			if (!d) {
				if (g.namespaceURI === _a || e.forExport) {
					try {
						d = g.getBBox ? gb({}, g.getBBox()) : {
							width: g.offsetWidth,
							height: g.offsetHeight
						}
					} catch (j) {}(!d || d.width < 0) && (d = {
						width: 0,
						height: 0
					})
				} else d = c.htmlGetBBox();
				e.isSVG && (a = d.width, b = d.height, f && (d.width = Ga(b * Ia(i)) + Ga(a * Ha(i)), d.height = Ga(b * Ha(i)) + Ga(a * Ia(i)))), Xa && h && "11px" === h.fontSize && 22.700000762939453 === b && (d.height = 14), c.bBox = d
			}
			return d
		},
		show: function () {
			return this.attr({
				visibility: ub
			})
		},
		hide: function () {
			return this.attr({
				visibility: vb
			})
		},
		add: function (a) {
			var b, c, d, e, f = this.renderer,
				g = a || f,
				i = g.element || f.box,
				j = i.childNodes,
				k = this.element,
				l = h(k, "zIndex");
			if (a && (this.parentGroup = a), this.parentInverted = a && a.isInverted, void 0 !== this.textStr && f.buildText(this), l && (g.handleZ = !0, l = jb(l)), g.handleZ)
				for (d = 0; d < j.length; d++)
					if (b = j[d], c = h(b, "zIndex"), b !== k && (jb(c) > l || !qb(l) && qb(c))) {
						i.insertBefore(k, b), e = !0;
						break
					}
			return e || i.appendChild(k), this.added = !0, $b(this, "add"), this
		},
		safeRemoveChild: function (a) {
			var b = a.parentNode;
			b && b.removeChild(a)
		},
		destroy: function () {
			if (!this._destroyed) {
				var a, b, c = this,
					d = c.element || {},
					e = c.shadows;
				if (d.onclick = d.onmouseout = d.onmouseover = d.onmousemove = null, ac(c), c.clipPath && (c.clipPath = c.clipPath.destroy()), c.stops) {
					for (b = 0; b < c.stops.length; b++) c.stops[b] = c.stops[b].destroy();
					c.stops = null
				}
				c.safeRemoveChild(d), e && Sb(e, function (a) {
					c.safeRemoveChild(a)
				}), c.renderer._destroyed || g(c.renderer.alignedObjects, c);
				for (a in c) c.hasOwnProperty(a) && delete c[a];
				return c._destroyed = !0, null
			}
		},
		empty: function () {
			for (var a = this.element, b = a.childNodes, c = b.length; c--;) a.removeChild(b[c])
		},
		shadow: function (a, b, c) {
			var d, e, f, g, j, k, l = [],
				m = this.element;
			if (a) {
				for (g = i(a.width, 3), j = (a.opacity || .15) / g, k = this.parentInverted ? "(-1,-1)" : "(" + i(a.offsetX, 1) + ", " + i(a.offsetY, 1) + ")", d = 1; d <= g; d++) e = m.cloneNode(0), f = 2 * g + 1 - 2 * d, h(e, {
					isShadow: "true",
					stroke: a.color || "black",
					"stroke-opacity": j * d,
					"stroke-width": f,
					transform: "translate" + k,
					fill: Ab
				}), c && (h(e, "height", Ea(h(e, "height") - f, 0)), e.cutHeight = f), b ? b.element.appendChild(e) : m.parentNode.insertBefore(e, m), l.push(e);
				this.shadows = l
			}
			return this
		}
	};
	var fc = function () {
		this.init.apply(this, arguments)
	};
	fc.prototype = {
		Element: z,
		init: function (a, b, d, e) {
			var f, g = this,
				h = location;
			if (f = g.createElement("svg").attr({
					xmlns: _a,
					version: "1.1"
				}), a.appendChild(f.element), g.isSVG = !0, g.box = f.element, g.boxWrapper = f, g.alignedObjects = [], g.url = ($a || Za) && za.getElementsByTagName("base").length ? h.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", g.defs = this.createElement("defs").add(), g.forExport = e, g.gradients = {}, g.setSize(b, d, !1), $a && a.getBoundingClientRect) {
				var i, k;
				g.subPixelFix = i = function () {
					j(a, {
						left: 0,
						top: 0
					}), k = a.getBoundingClientRect(), j(a, {
						left: Da(k.left) - k.left + xb,
						top: Da(k.top) - k.top + xb
					})
				}, i(), Xb(c, Sa, i)
			}
		},
		isHidden: function () {
			return !this.boxWrapper.getBBox().width
		},
		destroy: function () {
			if (!this._destroyed) {
				var a = this,
					b = a.defs;
				return a.box = null, a.boxWrapper = a.boxWrapper.destroy(), u(a.gradients || {}), a.gradients = null, b && (a.defs = b.destroy()), a.subPixelFix && Yb(c, Sa, a.subPixelFix), a.alignedObjects = null, a._destroyed = !0, null
			}
		},
		createElement: function (a) {
			var b = new this.Element;
			return b.init(this, a), b
		},
		draw: function () {},
		buildText: function (a) {
			function b(b) {
				return t[b] = e.getBBox ? e.getBBox().height : a.renderer.fontMetrics(e.style.fontSize).h, Ba(t[b] - (t[b - 1] || 0))
			}
			for (var d, e = a.element, f = i(a.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), g = e.childNodes, k = /style="([^"]+)"/, l = /href="([^"]+)"/, m = /id="([^"]+)"/, n = h(e, "x"), o = a.styles, p = o && o.width && jb(o.width), q = o && o.lineHeight, r = "getComputedStyle", s = g.length, t = []; s--;) e.removeChild(g[s]);
			p && !a.added && this.box.appendChild(e), "" === f[f.length - 1] && f.pop(), Sb(f, function (f, g) {
				var i, o, s = 0;
				f = f.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"), i = f.split("|||"), Sb(i, function (f) {
					if ("" !== f || 1 === i.length) {
						var t, u = {},
							v = za.createElementNS(_a, "tspan");
						if (k.test(f) && (t = f.match(k)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), h(v, "style", t)), l.test(f) && (h(v, "onclick", 'location.href="' + f.match(l)[1] + '"'), j(v, {
								cursor: Cb
							})), m.test(f) && h(v, "id", f.match(m)[1]), f = (f.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"), v.appendChild(za.createTextNode(f)), s ? u.dx = 3 : u.x = n, s || (g && (!ab && a.renderer.forExport && j(v, {
								display: "block"
							}), o = c[r] && jb(c[r](d, null).getPropertyValue("line-height")), o && !isNaN(o) || (o = q || d.offsetHeight || b(g) || 18), h(v, "dy", o)), d = v), h(v, u), e.appendChild(v), s++, p)
							for (var w, x, y = f.replace(/([^\^])-/g, "$1- ").split(" "), z = []; y.length || z.length;) delete a.bBox, x = a.getBBox().width, w = x > p, w && 1 !== y.length ? (v.removeChild(v.firstChild), z.unshift(y.pop())) : (y = z,
								z = [], y.length && (v = za.createElementNS(_a, "tspan"), h(v, {
									dy: q || 16,
									x: n
								}), t && h(v, "style", t), e.appendChild(v), x > p && (p = x))), y.length && v.appendChild(za.createTextNode(y.join(" ").replace(/- /g, "-")))
					}
				})
			})
		},
		crispLine: function (a, b) {
			return a[1] === a[4] && (a[1] = a[4] = Ba(a[1]) - b % 2 / 2), a[2] === a[5] && (a[2] = a[5] = Ba(a[2]) + b % 2 / 2), a
		},
		path: function (a) {
			var b = {
				fill: Ab
			};
			return mb(a) ? b.d = a : lb(a) && gb(b, a), this.createElement("path").attr(b)
		},
		circle: function (a, b, c) {
			var d = lb(a) ? a : {
				x: a,
				y: b,
				r: c
			};
			return this.createElement("circle").attr(d)
		},
		arc: function (a, b, c, d, e, f) {
			return lb(a) && (b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x), this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
				innerR: d || 0,
				start: e || 0,
				end: f || 0
			})
		},
		rect: function (a, b, c, d, e, f) {
			e = lb(a) ? a.r : e;
			var g = this.createElement("rect").attr({
				rx: e,
				ry: e,
				fill: Ab
			});
			return g.attr(lb(a) ? a : g.crisp(f, a, b, Ea(c, 0), Ea(d, 0)))
		},
		setSize: function (a, b, c) {
			var d = this,
				e = d.alignedObjects,
				f = e.length;
			for (d.width = a, d.height = b, d.boxWrapper[i(c, !0) ? "animate" : "attr"]({
					width: a,
					height: b
				}); f--;) e[f].align()
		},
		g: function (a) {
			var b = this.createElement("g");
			return qb(a) ? b.attr({
				"class": sb + a
			}) : b
		},
		image: function (a, b, c, d, e) {
			var f, g = {
				preserveAspectRatio: Ab
			};
			return arguments.length > 1 && gb(g, {
				x: b,
				y: c,
				width: d,
				height: e
			}), f = this.createElement("image").attr(g), f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("sui-svg-href", a), f
		},
		symbol: function (a, b, c, d, e, f) {
			var g, h, i, j, l = this.symbols[a],
				m = l && l(Ba(b), Ba(c), d, e, f),
				n = /^url\((.*?)\)$/;
			return m ? (g = this.path(m), gb(g, {
				symbolName: a,
				x: b,
				y: c,
				width: d,
				height: e
			}), f && gb(g, f)) : n.test(a) && (j = function (a, b) {
				a.attr({
					width: b[0],
					height: b[1]
				}), a.alignByTranslate || a.translate(-Ba(b[0] / 2), -Ba(b[1] / 2))
			}, h = a.match(n)[1], i = eb[h], g = this.image(h).attr({
				x: b,
				y: c
			}), i ? j(g, i) : (g.attr({
				width: 0,
				height: 0
			}), k("img", {
				onload: function () {
					var a = this;
					j(g, eb[h] = [a.width, a.height])
				},
				src: h
			}))), g
		},
		symbols: {
			circle: function (a, b, c, d) {
				var e = .166 * c;
				return [zb, a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
			},
			x: function (a, b, c, d) {
				return [zb, a, b, yb, a + c, b + d, zb, a + c, b, yb, a, b + d]
			},
			v: function (a, b, c, d) {
				return [zb, a + 1, b + 1, yb, a + c / 2, b + d - 1, yb, a + c - 1, b + 1]
			},
			check: function (a, b, c, d) {
				return [zb, a + 2, b + d / 2 - 1, yb, a + c / 2, b + d - 1, yb, a + c - 1, b + 1]
			},
			square: function (a, b, c, d) {
				return [zb, a, b, yb, a + c, b, a + c, b + d, a, b + d, "Z"]
			},
			triangle: function (a, b, c, d) {
				return [zb, a + c / 2, b, yb, a + c, b + d, a, b + d, "Z"]
			},
			"triangle-down": function (a, b, c, d) {
				return [zb, a, b, yb, a + c, b, a + c / 2, b + d, "Z"]
			},
			diamond: function (a, b, c, d) {
				return [zb, a + c / 2, b, yb, a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
			},
			arc: function (a, b, c, d, e) {
				var f = e.start,
					g = e.r || c || d,
					h = e.end - 1e-6,
					i = e.innerR,
					j = e.open,
					k = Ha(f),
					l = Ia(f),
					m = Ha(h),
					n = Ia(h),
					o = e.end - f < Ja ? 0 : 1;
				return [zb, a + g * k, b + g * l, "A", g, g, 0, o, 1, a + g * m, b + g * n, j ? zb : yb, a + i * m, b + i * n, "A", i, i, 0, o, 0, a + i * k, b + i * l, j ? "" : "Z"]
			}
		},
		clipRect: function (a, c, d, e) {
			var f, g = b.strid(),
				h = this.createElement("clipPath").attr({
					id: g
				}).add(this.defs);
			return f = this.rect(a, c, d, e, 0).add(h), f.id = g, f.clipPath = h, f
		},
		color: function (a, c, d) {
			var e, f, g = this,
				i = /^rgba/;
			if (a && a.linearGradient ? f = "linearGradient" : a && a.radialGradient && (f = "radialGradient"), f) {
				var j, k, l, m = a[f],
					n = g.gradients,
					o = c.radialReference;
				return m.id && n[m.id] || (mb(m) && (a[f] = m = {
					x1: m[0],
					y1: m[1],
					x2: m[2],
					y2: m[3],
					gradientUnits: "userSpaceOnUse"
				}), "radialGradient" === f && o && !qb(m.gradientUnits) && gb(m, {
					cx: o[0] - o[2] / 2 + m.cx * o[2],
					cy: o[1] - o[2] / 2 + m.cy * o[2],
					r: m.r * o[2],
					gradientUnits: "userSpaceOnUse"
				}), m.id = b.strid(), n[m.id] = j = g.createElement(f).attr(m).add(g.defs), j.stops = [], Sb(a.stops, function (a) {
					var b;
					i.test(a[1]) ? (e = new ec(a[1]), k = e.get("rgb"), l = e.get("a")) : (k = a[1], l = 1), b = g.createElement("stop").attr({
						offset: a[0],
						"stop-color": k,
						"stop-opacity": l
					}).add(j), j.stops.push(b)
				})), "url(" + g.url + "#" + m.id + ")"
			}
			return i.test(a) ? (e = new ec(a), h(c, d + "-opacity", e.get("a")), e.get("rgb")) : (c.removeAttribute(d + "-opacity"), a)
		},
		text: function (a, b, c, d) {
			var e, f = this,
				g = ha.style,
				h = cb || !ab && f.forExport;
			return d && !f.forExport ? f.html(a, b, c) : (b = Ba(i(b, 0)), c = Ba(i(c, 0)), e = f.createElement("text").attr({
				x: b,
				y: c,
				text: a
			}).css({
				fontFamily: g.fontFamily,
				fontSize: g.fontSize
			}), h && e.css({
				position: Bb
			}), e.x = b, e.y = c, e)
		},
		html: function (a, b, c) {
			var d = ha.style,
				e = this.createElement("span"),
				f = e.attrSetters,
				g = e.element,
				i = e.renderer;
			return f.text = function (a) {
				return a !== g.innerHTML && delete this.bBox, g.innerHTML = a, !1
			}, f.x = f.y = f.align = function (a, b) {
				return "align" === b && (b = "textAlignINTERNAL"), e[b] = a, e.htmlUpdateTransform(), !1
			}, e.attr({
				text: a,
				x: Ba(b),
				y: Ba(c)
			}).css({
				position: Bb,
				whiteSpace: "nowrap",
				fontFamily: d.fontFamily,
				fontSize: d.fontSize
			}), e.css = e.htmlCss, i.isSVG && (e.add = function (a) {
				var b, c, d = i.box.parentNode,
					f = [];
				if (a) {
					if (b = a.div, !b) {
						for (c = a; c;) f.push(c), c = c.parentGroup;
						Sb(f.reverse(), function (a) {
							var c;
							b = a.div = a.div || k(tb, {
								className: h(a.element, "class")
							}, {
								position: Bb,
								left: (a.translateX || 0) + xb,
								top: (a.translateY || 0) + xb
							}, b || d), c = b.style, gb(a.attrSetters, {
								translateX: function (a) {
									c.left = a + xb
								},
								translateY: function (a) {
									c.top = a + xb
								},
								visibility: function (a, b) {
									c[b] = a
								}
							})
						})
					}
				} else b = d;
				return b.appendChild(g), e.added = !0, e.alignOnAdd && e.htmlUpdateTransform(), e
			}), e
		},
		fontMetrics: function (a) {
			a = jb(a || 11);
			var b = a < 24 ? a + 4 : Ba(1.2 * a),
				c = Ba(.8 * b);
			return {
				h: b,
				b: c
			}
		},
		label: function (a, b, c, e, f, g, h, i, j) {
			function k() {
				var a, b = x.element.style;
				p = (void 0 === q || void 0 === r || w.styles.textAlignINTERNAL) && x.getBBox(), w.width = (q || p.width || 0) + 2 * A, w.height = (r || p.height || 0) + 2 * A, u = A + v.fontMetrics(b && b.fontSize).b, o || (a = i ? -u : 0, w.box = o = e ? v.symbol(e, -y * A, a, w.width, w.height) : v.rect(-y * A, a, w.width, w.height, 0, C[Pb]), o.add(w)), o.attr(Wb({
					width: w.width,
					height: w.height
				}, C)), C = null
			}

			function l() {
				var a, b = w.styles,
					c = b && b.textAlignINTERNAL,
					d = A * (1 - y);
				a = i ? 0 : u, !qb(q) || "center" !== c && "right" !== c || (d += {
					center: .5,
					right: 1
				}[c] * (q - p.width)), d === x.x && a === x.y || x.attr({
					x: d,
					y: a
				}), x.x = d, x.y = a
			}

			function m(a, b) {
				o ? o.attr(a, b) : C[a] = b
			}

			function n() {
				x.add(w), w.attr({
					text: a,
					x: b,
					y: c
				}), qb(f) && w.attr({
					anchorX: f,
					anchorY: g
				})
			}
			var o, p, q, r, s, t, u, v = this,
				w = v.g(j),
				x = v.text("", 0, 0, h).attr({
					zIndex: 1
				}),
				y = 0,
				A = 3,
				B = 0,
				C = {},
				D = w.attrSetters;
			Xb(w, "add", n), D.width = function (a) {
				return q = a, !1
			}, D.height = function (a) {
				return r = a, !1
			}, D.padding = function (a) {
				return qb(a) && a !== A && (A = a, l()), !1
			}, D.align = function (a) {
				return y = {
					left: 0,
					center: .5,
					right: 1
				}[a], !1
			}, D.text = function (a, b) {
				return x.attr(b, a), k(), l(), !1
			}, D[Pb] = function (a, b) {
				return B = a % 2 / 2, m(b, a), !1
			}, D.stroke = D.fill = D.r = function (a, b) {
				return m(b, a), !1
			}, D.anchorX = function (a, b) {
				return f = a, m(b, a + B - s), !1
			}, D.anchorY = function (a, b) {
				return g = a, m(b, a - t), !1
			}, D.x = function (a) {
				return w.x = a, a -= y * ((q || p.width) + A), s = Ba(a), w.attr("translateX", s), !1
			}, D.y = function (a) {
				return t = w.y = Ba(a), w.attr("translateY", a), !1
			};
			var E = w.css;
			return gb(w, {
				css: function (a) {
					if (a) {
						var b = {};
						a = Wb({}, a), Sb(["fontSize", "fontWeight", "fontFamily", "color", "lineHeight", "width"], function (c) {
							a[c] !== d && (b[c] = a[c], delete a[c])
						}), x.css(b)
					}
					return E.call(w, a)
				},
				getBBox: function () {
					return o.getBBox()
				},
				shadow: function (a) {
					return o.shadow(a), w
				},
				destroy: function () {
					w._destroyed || (Yb(w, "add", n), Yb(w.element, Pa), Yb(w.element, Qa), x && (x = x.destroy()), o && (o = o.destroy()), z.prototype.destroy.call(w))
				}
			})
		}
	}, fa = fc;
	var gc;
	if (!ab && !cb) {
		var hc = {
			init: function (a, b) {
				var c = this,
					d = ["<", b, ' filled="f" stroked="f"'],
					e = ["position: ", Bb, ";"];
				"shape" !== b && b !== tb || e.push("left:0;top:0;width:1px;height:1px;"), Ya && e.push("visibility: ", b === tb ? vb : ub), d.push(' style="', e.join(""), '"/>'), b && (d = b === tb || "span" === b || "img" === b ? d.join("") : a.prepVML(d), c.element = k(d)), c.renderer = a, c.attrSetters = {}
			},
			add: function (a) {
				var b = this,
					c = b.renderer,
					d = b.element,
					e = c.box,
					f = a && a.isInverted,
					g = a ? a.element || a : e;
				return f && c.invertChild(d, g), g.appendChild(d), b.added = !0, b.alignOnAdd && !b.deferUpdateTransform && b.updateTransform(), $b(b, "add"), b
			},
			updateTransform: z.prototype.htmlUpdateTransform,
			attr: function (a, b) {
				var c, e, f, g, i, j, l = this,
					m = l.element || {},
					n = m.style,
					o = m.nodeName,
					p = l.renderer,
					q = l.symbolName,
					r = l.shadows,
					s = l.attrSetters,
					t = l;
				if (kb(a) && qb(b) && (c = a, a = {}, a[c] = b), kb(a)) c = a, t = "strokeWidth" === c || "stroke-width" === c ? l.strokeweight : l[c];
				else
					for (c in a)
						if (a.hasOwnProperty(c) && (e = a[c], j = !1, g = s[c] && s[c].call(l, e, c), g !== !1 && null !== e)) {
							if (g !== d && (e = g), q && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(c)) i || (l.symbolAttr(a), i = !0), j = !0;
							else if ("d" === c) {
								e = e || [], l.d = e.join(" "), f = e.length;
								for (var u = []; f--;) nb(e[f]) ? u[f] = Ba(10 * e[f]) - 5 : "Z" === e[f] ? u[f] = "x" : u[f] = e[f];
								if (e = u.join(" ") || "x", m.path = e, r)
									for (f = r.length; f--;) r[f].path = r[f].cutOff ? this.cutOffPath(e, r[f].cutOff) : e;
								j = !0
							} else if ("visibility" === c) {
								if (r)
									for (f = r.length; f--;) r[f].style[c] = e;
								"DIV" === o && (e = e === vb ? "-999em" : 0, c = "top"), n[c] = e, j = !0
							} else if ("zIndex" === c) e && (n[c] = e), j = !0;
							else if ("width" === c || "height" === c) e = Ea(0, e), this[c] = e, l.updateClipping ? (l[c] = e, l.updateClipping()) : n[c] = e, j = !0;
							else if ("x" === c || "y" === c) l[c] = e, n[{
								x: "left",
								y: "top"
							}[c]] = e;
							else if ("class" === c) m.className = e;
							else if ("stroke" === c) e = p.color(e, m, c), c = "strokecolor";
							else if ("stroke-width" === c || "strokeWidth" === c) m.stroked = !!e, c = "strokeweight", l[c] = e, nb(e) && (e += xb);
							else if ("dashstyle" === c) {
								var v = m.getElementsByTagName("stroke")[0] || k(p.prepVML(["<stroke/>"]), null, null, m);
								v[c] = e || "solid", l.dashstyle = e, j = !0
							} else "fill" === c ? "SPAN" === o ? n.color = e : (m.filled = e !== Ab, e = p.color(e, m, c, l), c = "fillcolor") : "shape" === o && "textAngle" === c ? (l[c] = e, m.style.left = -Ba(Ia(e * Ka) + 1) + xb, m.style.top = Ba(Ha(e * Ka)) + xb) : "translateX" === c || "translateY" === c || "textAngle" === c ? (l[c] = e, l.updateTransform(), j = !0) : "text" === c && (this.bBox = null, m.innerHTML = e, j = !0);
							j || (Ya ? m[c] = e : h(m, c, e))
						} return t
			},
			clip: function (a) {
				var b, c, d = this,
					e = d.element;
				e.parentNode;
				return a ? (b = a.members, b.push(d), d.destroyClip = function () {
					g(b, d)
				}, c = a.getCSS(d)) : (d.destroyClip && d.destroyClip(), c = {
					clip: Ya ? "inherit" : "rect(auto)"
				}), d.css(c)
			},
			css: z.prototype.htmlCss,
			safeRemoveChild: function (a) {
				a.parentNode && v(a)
			},
			destroy: function () {
				var a = this;
				if (!a._destroyed) return a.destroyClip && a.destroyClip(), z.prototype.destroy.apply(a)
			},
			empty: function () {
				for (var a, b = this.element, c = b.childNodes, d = c.length; d--;) a = c[d], a.parentNode.removeChild(a)
			},
			on: function (a, b) {
				return this.element["on" + a] = function () {
					var a = c.event;
					a.target = a.srcElement, b(a)
				}, this
			},
			cutOffPath: function (a, b) {
				var c;
				return a = a.split(/[ ,]/), c = a.length, 9 !== c && 11 !== c || (a[c - 4] = a[c - 2] = jb(a[c - 2]) - 10 * b), a.join(" ")
			},
			shadow: function (a, b, c) {
				var d, e, f, g, h, j, l, m = this,
					n = [],
					o = m.element,
					p = m.renderer,
					q = o.style,
					r = o.path;
				if (r && "string" != typeof r.value && (r = "x"), h = r, a) {
					for (j = i(a.width, 3), l = (a.opacity || .15) / j, d = 1; d <= 3; d++) g = 2 * j + 1 - 2 * d, c && (h = m.cutOffPath(r.value, g + .5)), f = ['<shape isShadow="true" strokeweight="', g, '" filled="false" path="', h, '" coordsize="10 10" style="', o.style.cssText, '" />'], e = k(p.prepVML(f), null, {
						left: jb(q.left) + i(a.offsetX, 1),
						top: jb(q.top) + i(a.offsetY, 1)
					}), c && (e.cutOff = g + 1), f = ['<stroke color="', a.color || "black", '" opacity="', l * d, '"/>'], k(p.prepVML(f), null, null, e), b ? b.element.appendChild(e) : o.parentNode.insertBefore(e, o), n.push(e);
					m.shadows = n
				}
				return m
			}
		};
		hc = l(z, hc);
		var ic = {
			Element: hc,
			isIE8: Va.indexOf("MSIE 8.0") > -1,
			init: function (a, b, c) {
				var d, e, f = this;
				f.alignedObjects = [], d = f.createElement(tb), e = d.element, e.style.position = wb, a.appendChild(d.element), f.box = e, f.boxWrapper = d, f.setSize(b, c, !1), za.namespaces.scv || (za.namespaces.add("scv", "urn:schemas-microsoft-com:vml"), za.createStyleSheet().cssText = "scv\\:fill, scv\\:path, scv\\:shape, scv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ")
			},
			isHidden: function () {
				return !this.box.offsetWidth
			},
			clipRect: function (a, b, c, d) {
				var e = this.createElement(),
					f = lb(a);
				return gb(e, {
					members: [],
					left: f ? a.x : a,
					top: f ? a.y : b,
					width: f ? a.width : c,
					height: f ? a.height : d,
					getCSS: function (a) {
						var b = a.isInverted,
							c = this,
							d = c.top,
							e = c.left,
							f = e + c.width,
							g = d + c.height,
							h = {
								clip: "rect(" + Ba(b ? e : d) + "px," + Ba(b ? g : f) + "px," + Ba(b ? f : g) + "px," + Ba(b ? d : e) + "px)"
							};
						return !b && Ya && "IMG" !== a.element.nodeName && gb(h, {
							width: f + xb,
							height: g + xb
						}), h
					},
					updateClipping: function () {
						Sb(e.members, function (a) {
							a.css(e.getCSS(a))
						})
					}
				})
			},
			color: function (a, b, c, d) {
				var e, f, g, h = this,
					i = /^rgba/,
					j = Ab;
				if (a && a.linearGradient ? g = "gradient" : a && a.radialGradient && (g = "pattern"), g) {
					var l, m, n, o, p, q, r, s, t, u, v, w, x = a.linearGradient || a.radialGradient,
						y = "",
						z = a.stops,
						A = function () {
							f = ['<fill colors="' + ha.seriesPalette.join(",") + '" opacity="', s, '" o:opacity2="', r, '" type="', g, '" ', y, 'focus="100%" method="any" />'], k(h.prepVML(f), null, null, b)
						};
					if (v = z[0], w = z[z.length - 1], v[0] > 0 && z.unshift([0, v[1]]), w[0] < 1 && z.push([1, w[1]]), Sb(z, function (a, b) {
							i.test(a[1]) ? (e = new ec(a[1]), l = e.get("rgb"), m = e.get("a")) : (l = a[1], m = 1), ha.seriesPalette.push(100 * a[0] + "% " + l), b ? (s = m, t = l) : (r = m, u = l)
						}), "fill" === c)
						if ("gradient" === g) n = x.x1 || x[0] || 0, o = x.y1 || x[1] || 0, p = x.x2 || x[2] || 0, q = x.y2 || x[3] || 0, y = 'angle="' + (90 - 180 * Aa.atan((q - o) / (p - n)) / Ja) + '"', A();
						else {
							var B, C = x.r,
								D = 2 * C,
								E = 2 * C,
								F = x.cx,
								G = x.cy,
								H = b.radialReference,
								I = function () {
									H && (B = d.getBBox(), F += (H[0] - B.x) / B.width - .5, G += (H[1] - B.y) / B.height - .5, D *= H[2] / B.width, E *= H[2] / B.height), y = 'size="' + D + "," + E + '" origin="0.5,0.5" position="' + F + "," + G + '" color2="' + u + '" ', A()
								};
							d.added ? I() : Xb(d, "add", I), j = t
						}
					else j = l
				} else if (i.test(a) && "IMG" !== b.tagName) e = new ec(a), f = ["<", c, ' opacity="', e.get("a"), '"/>'], k(this.prepVML(f), null, null, b), j = e.get("rgb");
				else {
					var J = b.getElementsByTagName(c);
					J.length && (J[0].opacity = 1), j = a
				}
				return j
			},
			prepVML: function (a) {
				var b = "display:inline-block;behavior:url(#default#VML);",
					c = this.isIE8;
				return a = a.join(""), c ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="' + b + '" />') : a.replace('style="', 'style="' + b)) : a = a.replace("<", "<scv:"), a
			},
			text: fc.prototype.html,
			path: function (a) {
				var b = {
					coordsize: "10 10"
				};
				return mb(a) ? b.d = a : lb(a) && gb(b, a), this.createElement("shape").attr(b)
			},
			circle: function (a, b, c) {
				return this.symbol("circle").attr({
					x: a - c,
					y: b - c,
					width: 2 * c,
					height: 2 * c
				})
			},
			g: function (a) {
				var b, c;
				return a && (c = {
					className: sb + a,
					"class": sb + a
				}), b = this.createElement(tb).attr(c)
			},
			image: function (a, b, c, d, e) {
				var f = this.createElement("img").attr({
					src: a
				});
				return arguments.length > 1 && f.attr({
					x: b,
					y: c,
					width: d,
					height: e
				}), f
			},
			rect: function (a, b, c, d, e, f) {
				lb(a) && (b = a.y, c = a.width, d = a.height, f = a.strokeWidth, a = a.x);
				var g = this.symbol("rect");
				return g.r = e, g.attr(g.crisp(f, a, b, Ea(c, 0), Ea(d, 0)))
			},
			invertChild: function (a, b) {
				var c = b.style;
				j(a, {
					flip: "x",
					left: jb(c.width) - 1,
					top: jb(c.height) - 1,
					rotation: -90
				})
			},
			symbols: {
				arc: function (a, b, c, d, e) {
					var f, g = e.start,
						h = e.end,
						i = e.r || c || d,
						j = Ha(g),
						k = Ia(g),
						l = Ha(h),
						m = Ia(h),
						n = e.innerR,
						o = .08 / i,
						p = n && .1 / n || 0;
					return h - g === 0 ? ["x"] : (2 * Ja - h + g < o ? l = -o : h - g < p && (l = Ha(g + p)), f = ["wa", a - i, b - i, a + i, b + i, a + i * j, b + i * k, a + i * l, b + i * m], e.open && !n && f.push("e", zb, a, b), f.push("at", a - n, b - n, a + n, b + n, a + n * l, b + n * m, a + n * j, b + n * k, "x", "e"), f)
				},
				circle: function (a, b, c, d) {
					return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
				},
				rect: function (a, b, c, d, e) {
					var f, g, h = a + c,
						i = b + d;
					return qb(e) && e.r ? (g = Fa(e.r, c, d), f = [zb, a + g, b, yb, h - g, b, "wa", h - 2 * g, b, h, b + 2 * g, h - g, b, h, b + g, yb, h, i - g, "wa", h - 2 * g, i - 2 * g, h, i, h, i - g, h - g, i, yb, a + g, i, "wa", a, i - 2 * g, a + 2 * g, i, a + g, i, a, i - g, yb, a, b + g, "wa", a, b, a + 2 * g, b + 2 * g, a, b + g, a + g, b, "x", "e"]) : f = fc.prototype.symbols.square.apply(0, arguments), f
				}
			}
		};
		gc = function () {
			this.init.apply(this, arguments)
		}, gc.prototype = Wb(fc.prototype, ic), fa = gc
	}
	var jc;
	cb && (jc = function () {
		_a = "http://www.w3.org/1999/xhtml"
	}, jc.prototype.symbols = {}, jc.prototype = l(fc.prototype, {
		create: function (a, b, c, d) {
			this.setContainer(b, c, d), this.configure(a)
		},
		setContainer: function (a, b, c) {
			var e, f = a.style,
				g = a.parentNode,
				h = f.left,
				i = f.top,
				j = a.offsetWidth,
				l = a.offsetHeight,
				m = {
					visibility: vb,
					position: Bb
				};
			this.init.apply(this, [a, b, c]), e = k("canvas", {
				width: j,
				height: l
			}, {
				position: wb,
				left: h,
				top: i
			}, a), this.canvas = e, this.ttLine = k(tb, null, m, g), this.ttDiv = k(tb, null, m, g), this.ttTimer = d;
			var n = k(tb, {
				width: j,
				height: l
			}, {
				visibility: vb,
				left: h,
				top: i
			}, g);
			this.hiddenSvg = n, n.appendChild(this.box)
		},
		configure: function (a) {
			var b = this,
				c = a.options.tooltipSettings,
				e = Qb[a.guid],
				f = c.borderWidth,
				g = b.ttDiv,
				h = c.style,
				i = b.ttLine,
				k = parseInt(h.padding, 10);
			h = Wb(h, {
				padding: k + xb,
				"background-color": c.backgroundColor,
				"border-style": "solid",
				"border-width": f + xb,
				"border-drawRadius": c.borderRadius + xb
			}), c.shadow && (h = Wb(h, {
				"box-shadow": "1px 1px 3px gray",
				"-webkit-box-shadow": "1px 1px 3px gray"
			})), j(g, h), j(i, {
				"border-left": "1px solid darkgray"
			}), Xb(a, "tooltipRefresh", function (a) {
				var c, f = e.container,
					h = f.offsetLeft,
					k = f.offsetTop;
				g.innerHTML = a.text, c = e.tooltipSettings.getPosition(g.offsetWidth, g.offsetHeight, {
					plotX: a.x,
					plotY: a.y
				}), j(g, {
					visibility: ub,
					left: c.x + xb,
					top: c.y + xb,
					"border-color": a.borderColor
				}), j(i, {
					visibility: ub,
					left: h + a.x + xb,
					top: k + e.plotTop + xb,
					height: e.plotHeight + xb
				}), b.ttTimer !== d && clearTimeout(b.ttTimer), b.ttTimer = setTimeout(function () {
					j(g, {
						visibility: vb
					}), j(i, {
						visibility: vb
					})
				}, 3e3)
			})
		},
		destroy: function () {
			var a = this;
			if (!a._destroyed) return v(a.canvas), a.ttTimer !== d && clearTimeout(a.ttTimer), v(a.ttLine), v(a.ttDiv), v(a.hiddenSvg), fc.prototype.destroy.apply(a)
		},
		color: function (a, b, c) {
			return a && a.linearGradient && (a = a.stops[a.stops.length - 1][1]), fc.prototype.color.call(this, a, b, c)
		},
		draw: function () {
			var a = this;
			c.canvg(a.canvas, a.hiddenSvg.innerHTML)
		}
	})), fa = gc || jc || fc, A.prototype = {
		_label: function () {
			var a, c, d, e, g = this,
				h = g.axis,
				i = h.options,
				j = h.chart,
				k = Qb[j.guid],
				l = h.horiz,
				m = h.categoricalValues,
				n = g.pos,
				o = i.axisTickText,
				p = h.tickPositions,
				q = m && l && m.length && !o.step && !o.staggerLinesINTERNAL && !o.textAngle && k.plotWidth / p.length || !l && k.plotWidth / 2,
				r = n === p[0],
				s = n === p[p.length - 1],
				t = m && qb(m[n]) ? m[n] : n,
				u = g.label,
				v = p.info;
			m && !qb(m[n]) && t == n && k.enablePolarLayout || (h.isDatetimeAxis && v && (e = i.axisDateFormat[v.higherRanks[n] || v.unitName]), g.isFirst = r, g.isLast = s, a = o.format ? kb(o.format) ? b.format(o.format, {
				text: h.isDatetimeAxis ? new Date(t) : t,
				axis: h,
				chart: j
			}) : o.format.call(null, t, h, j) : D.call({
				axis: h,
				chart: j,
				isFirst: r,
				isLast: s,
				dateTimeLabelFormat: e,
				value: h.isLog ? w(f(t)) : t
			}), c = q && {
				width: Ea(1, Ba(q - 2 * (o.padding || 10))) + xb
			}, c = gb(c, o.style), o && "x" == h.xOrY && !h.inverseOrder && ("left" == o.align ? o.align = "right" : "right" == o.align && (o.align = "left")), qb(u) ? u && u.attr({
				text: a
			}).css(c) : (d = {
				align: o.align
			}, nb(o.textAngle) && (d.textAngle = o.textAngle), g.label = qb(a) && o.enabled ? k.renderer.text(a, 0, 0, o.htmlOutput).attr(d).css(c).add(h.labelGroup) : null))
		},
		_labelSize: function () {
			var a = this.label,
				b = this.axis;
			return a ? (this.labelBBox = a.getBBox())[b.horiz ? "height" : "width"] : 0
		},
		_labelDim: function () {
			var a = this.labelBBox,
				b = this.axis,
				c = b.options,
				d = c.axisTickText,
				e = a.width,
				f = e * {
					left: 0,
					center: .5,
					right: 1
				}[d.align] - d.x;
			return [-f, e - f]
		},
		_overflow: function (a, b) {
			var c = this,
				d = !0,
				e = c.axis,
				f = c.isFirst,
				g = c.isLast,
				h = b.x,
				i = e.inverseOrder,
				j = e.tickPositions;
			if (f || g) {
				var k = c._labelDim(),
					l = k[0],
					m = k[1],
					n = Qb[e.chart.guid].plotLeft,
					o = n + e.len,
					p = e.ticks[j[a + (f ? 1 : -1)]],
					q = p && p.label.xy && p.label.xy.x + p._labelDim()[f ? 0 : 1];
				f && !i || g && i ? h + l < n && (h = n - l, p && h + m > q && (d = !1)) : h + m > o && (h = o - m, p && h + l < q && (d = !1)), b.x = h
			}
			return d
		},
		_position: function (a, b, c, d) {
			var e = this.axis,
				f = Qb[e.chart.guid],
				g = d && f.oldChartHeight || f.chartHeight;
			return {
				x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.swapLocation ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
				y: a ? g - e.bottom + e.offset - (e.swapLocation ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
			}
		},
		_labelPos: function (a, b, c, d, e, f, g, h) {
			var i = this.axis,
				j = i.transA,
				k = i.inverseOrder,
				l = i.staggerLinesINTERNAL;
			return a = a + e.x - (f && d ? f * j * (k ? -1 : 1) : 0), b = b + e.y - (f && !d ? f * j * (k ? 1 : -1) : 0), qb(e.y) || (b += .9 * jb(c.styles.lineHeight) - c.getBBox().height / 2), l && (b += g / (h || 1) % l * 16), {
				x: a,
				y: b
			}
		},
		_markPath: function (a, b, c, d, e, f) {
			return f.crispLine([zb, a, b, yb, a + (e ? 0 : -c), b + (e ? c : 0)], d)
		},
		render: function (a, b) {
			var c, e, f, g = this,
				h = g.axis,
				j = h.options,
				k = Qb[h.chart.guid].renderer,
				l = h.horiz,
				m = g.type,
				n = g.label,
				o = g.pos,
				p = j.axisTickText,
				q = g.gridLine,
				r = m ? m + "Plot" : "plot",
				s = m ? m + "Ticks" : "ticks",
				t = j[r + "StripWidth"],
				u = j[r + "StripColor"],
				v = j[r + "StripDashStyle"],
				w = j[s + "Height"],
				x = j[s + "Width"] || 0,
				y = j[s + "Color"],
				z = j[s + "Placement"],
				A = g.mark,
				B = p.step,
				C = !0,
				D = h.tickmarkOffset,
				E = g._position(l, o, D, b),
				F = E.x,
				G = E.y,
				H = h.staggerLinesINTERNAL;
			h.isXAxis && null != j.axisTickText.y && h.inverseOrder && (j.axisTickText.y = null), t && (c = h._linePath(o + D, t, b), q === d && (f = {
				stroke: u,
				"stroke-width": t
			}, v && (f.dashstyle = v), m || (f.zIndex = 1), g.gridLine = q = t ? k.path(c).attr(f).add(h.gridGroup) : null), !b && q && c && q[g.isNew ? "attr" : "animate"]({
				d: c
			})), x && w && ("inside" === z && (w = -w), h.swapLocation && (w = -w), "through" === z && g.axis.isXAxis && (g.axis.inverseOrder ? F += w : G = G - w + 1, w += w), e = g._markPath(F, G, w, x, l, k), A ? A.animate({
				d: e
			}) : g.mark = k.path(e).attr({
				stroke: y,
				"stroke-width": x
			}).add(h.axisGroup)), !n || isNaN(F) || isNaN(G) || (n.xy = E = g._labelPos(F, G, n, l, p, D, a, B), g.isFirst && !i(j.firstTickTextVisible, 1) || g.isLast && !i(j.lastTickTextVisible, 1) ? C = !1 : !H && l && p.repositionClippedText && !g._overflow(a, E) && (C = !1), B && a % B && (C = !1), C ? (n[g.isNew ? "attr" : "animate"](E), n.show(), g.isNew = !1) : n.hide())
		},
		destroy: function () {
			var a = this;
			a._destroyed || (u(a, a.axis), a._destroyed = !0)
		}
	}, B.prototype = {
		render: function () {
			var a, b, c, d, f, g, h, j = this,
				k = j.axis,
				l = k.horiz,
				m = (k.pointRange || 0) / 2,
				n = j.options,
				o = n.label,
				p = j.label,
				q = n.drawWidth,
				r = n.start,
				u = n.end,
				v = qb(r) && qb(u),
				w = n.seriesDashStyle,
				x = j.svgElem,
				y = [],
				z = n.drawColor,
				A = n.zIndex,
				B = n.events,
				C = Qb[k.chart.guid].renderer;
			if (k.isLog && (r = e(r), u = e(u)), q) y = k._linePath(r, q), h = {
				stroke: z,
				"stroke-width": q
			}, w && (h.dashstyle = w);
			else {
				if (!v) return;
				r = Ea(r, k.min - m), u = Fa(u, k.max + m), y = k._bandPath(r, u, n), h = {
					fill: z
				}, n.borderWidth && (h.stroke = n.borderColor, h["stroke-width"] = n.borderWidth)
			}
			if (qb(A) && (h.zIndex = A), x) y ? x.animate({
				d: y
			}, null, x.onGetPath) : (x.hide(), x.onGetPath = function () {
				x.show()
			});
			else if (y && y.length && (j.svgElem = x = C.path(y).attr(h).add(), B)) {
				a = function (a) {
					x.on(a, function (b) {
						B[a].apply(j, [b])
					})
				};
				for (b in B) B.hasOwnProperty(b) && a(b)
			}
			return o && qb(o.text) && y && y.length && k.width > 0 && k.height > 0 ? (o = Wb({
				align: l && v && "center",
				x: l ? !v && 4 : 10,
				verticalAlign: !l && v && "middle",
				y: l ? v ? 16 : 10 : v ? 6 : -4,
				textAngle: l && !v && 90
			}, o), p || (j.label = p = C.text(o.text, 0, 0).attr({
				align: o.textAlignINTERNAL || o.align,
				textAngle: o.textAngle,
				zIndex: A
			}).css(o.style).add()), c = [y[1], y[4], i(y[6], y[1])], d = [y[2], y[5], i(y[7], y[2])], f = s(c), g = s(d), p.align(o, !1, {
				x: f,
				y: g,
				width: t(c) - f,
				height: t(d) - g
			}), p.show()) : p && p.hide(), j
		},
		destroy: function () {
			if (!this._destroyed) {
				var a = this,
					b = a.axis;
				g(b.plotLinesAndBands, a), u(a, this.axis), a._destroyed = !0
			}
		}
	}, C.prototype = {
		destroy: function () {
			this._destroyed || (u(this, this.axis), this._destroyed = !0)
		},
		_total: function (a) {
			this.total = a, this.cum = a
		},
		render: function (a) {
			var b = this,
				c = b.options.labelFormatFunction.call(b);
			b.label ? b.label.attr({
				text: c,
				visibility: vb
			}) : b.label = Qb[b.axis.chart.guid].renderer.text(c, 0, 0).css(b.options.style).attr({
				align: b.textAlignINTERNAL,
				textAngle: b.options.textAngle,
				visibility: vb
			}).add(a)
		},
		_offset: function (a, b) {
			var c, d = this,
				e = d.axis,
				f = e.chart,
				g = Qb[f.guid],
				h = g.isInverted,
				i = d.isNegative,
				j = e.translate(d.percent ? 100 : d.total, 0, 0, 0, 1),
				k = e.translate(0),
				l = Ga(j - k),
				m = g.axisX[0].translate(d.x) + a,
				n = g.plotHeight,
				o = {
					x: h ? i ? j : j - l : m,
					y: h ? n - m - b : i ? n - j - l : n - j,
					width: h ? l : b,
					height: h ? b : l
				},
				p = d.label;
			p && (p.align(d.alignOptions, null, o), c = p.alignAttr, p.attr({
				visibility: d.options.hideInvisible === !1 || $(f, c.x, c.y) ? ab ? "inherit" : ub : vb
			}))
		}
	};
	var kc = {
		defaults: {
			axisDateFormat: {
				MILLISECOND: "HH:mm:ss.fff",
				SECOND: "HH:mm:ss",
				MINUTE: "HH:mm",
				HOUR: "HH",
				DAY: "d MMM",
				WEEK: "d MMM",
				MONTH: "MMM yyyy",
				YEAR: "yyyy"
			},
			fixedEnd: !1,
			plotStripColor: "#C0C0C0",
			axisTickText: bc,
			drawColor: "#7E7E7E",
			drawWidth: 1,
			minPaddingINTERNAL: 1e-4,
			maxPaddingINTERNAL: 1e-4,
			endOffset: .01,
			zoomMin: null,
			minorPlotStripColor: "#E0E0E0",
			minorPlotStripWidth: 1,
			minorTicksColor: "#A0A0A0",
			minorTicksHeight: 12,
			minorTicksPlacementINTERNAL: "outside",
			startOfWeekINTERNAL: 1,
			tickOnBeginning: !1,
			tickColor: "#C0D0E0",
			tickLength: 5,
			tickmarkPlacementlINTERNAL: "between",
			tickPixelIntervalINTERNAL: 100,
			tickPosition: "outside",
			tickWidth: 1,
			title: {
				align: "middle",
				margin: 12,
				style: {
					color: "#404040",
					fontWeight: "normal",
					fontFamily: "Segoe UI, Tahoma, Verdana, sans-serif"
				}
			},
			axisType: "linear"
		},
		y: {
			fixedEnd: !0,
			plotStripWidth: 1,
			tickPixelIntervalINTERNAL: 80,
			lastTickTextVisible: !0,
			axisTickText: {
				align: "right",
				x: -8,
				y: 3
			},
			drawWidth: 0,
			endOffset: .05,
			startOffset: .05,
			tickOnBeginning: !0,
			tickWidth: 0,
			title: {
				textAngle: 270,
				text: null
			},
			stackTextSettings: {
				enabled: !1,
				labelFormatFunction: function () {
					return this.total
				},
				style: bc.style
			}
		},
		left: {
			axisTickText: {
				align: "right",
				x: -8,
				y: null
			},
			title: {
				textAngle: 270
			}
		},
		right: {
			axisTickText: {
				align: "left",
				x: 8,
				y: null
			},
			title: {
				textAngle: 90
			}
		},
		bottom: {
			axisTickText: {
				align: "center",
				x: 0,
				y: 14
			},
			title: {
				textAngle: 0
			}
		},
		top: {
			axisTickText: {
				align: "center",
				x: 0,
				y: -5
			},
			title: {
				textAngle: 0
			}
		}
	};
	P.prototype = {
		init: function (a, b) {
			var c = b.isX,
				g = this,
				h = Qb[a.guid];
			g.horiz = h.isInverted ? !c : c, g.isXAxis = c, g.xOrY = c ? "x" : "y", g.swapLocation = b.swapLocation, g.side = g.horiz ? g.swapLocation ? 0 : 2 : g.swapLocation ? 1 : 3, g.setOptions(b, a);
			var i = this.options,
				j = i.axisType,
				k = "datetime" === j;
			g.staggerLinesINTERNAL = g.horiz && i.axisTickText.staggerLinesINTERNAL, g.userOptions = b, g.minPixelPadding = 0, g.chart = a, g.inverseOrder = i.inverseOrder, g.categoricalValues = i.categoricalValues, g.isLog = "logarithmic" === j, g.isLinked = qb(i.linkedToINTERNAL), g.isDatetimeAxis = k, g.tickmarkOffset = i.categoricalValues && "between" === i.tickmarkPlacementlINTERNAL ? .5 : 0, g.ticks = {}, g.minorTicks = {}, g.plotLinesAndBands = [], g.alternateBands = {}, g.len = 0, g.zoomMin = g.customZoomMin = i.zoomMin, g.range = i.range, g.offset = i.offset || 0, g.stacks = {}, g.max = null, g.min = null;
			var l, m = g.options.events;
			h.axes.push(g), h[c ? "axisX" : "axisY"].push(g), g.dataSeries = [], h.isInverted && c && g.inverseOrder === d && (g.inverseOrder = !0);
			for (l in m) m.hasOwnProperty(l) && Xb(g, l, m[l]);
			g.isLog && (g.val2lin = e, g.lin2val = f)
		},
		setOptions: function (a, b) {
			this.options = Wb(kc.defaults, this.isXAxis ? {} : kc.y, [kc.top, kc.right, kc.bottom, kc.left][this.side], Wb(ha[this.isXAxis ? "axisX" : "axisY"], a))
		},
		translate: function (a, b, c, d, e, f) {
			var g, h = this,
				i = h.len,
				j = 1,
				k = 0,
				l = d ? h.oldTransA : h.transA,
				m = d ? h.oldMin : h.min,
				n = h.options.ordinal || h.isLog && e;
			return l || (l = h.transA), c && (j *= -1, k = i), h.inverseOrder && (j *= -1, k -= j * i), b ? (h.inverseOrder && (a = i - a), g = a / l + m, n && (g = h.lin2val(g))) : (n && (a = h.val2lin(a)), g = j * (a - m) * l + k + j * h.minPixelPadding + (f ? l * h.pointRange / 2 : 0)), g
		},
		_linePath: function (a, b, c) {
			var d, e, f, g, h, i = this,
				j = Qb[i.chart.guid],
				k = i.left,
				l = i.top,
				m = i.translate(a, null, null, c),
				n = c && j.oldChartHeight || j.chartHeight,
				o = c && j.oldChartWidth || j.chartWidth,
				p = i.transB;
			return d = f = Ba(m + p), e = g = Ba(n - m - p), isNaN(m) ? h = !0 : i.horiz ? (e = l, g = n - i.bottom, (d < k || d > k + i.width) && (h = !0)) : (d = k, f = o - i.right, (e < l || e > l + i.height) && (h = !0)), h ? null : j.renderer.crispLine([zb, d, e, yb, f, g], b || 0)
		},
		_bandPath: function (a, b) {
			var c = this._linePath(b),
				d = this._linePath(a);
			return d && c ? d.push(c[4], c[5], c[1], c[2]) : d = null, d
		},
		_arrange: function () {
			var a, b = this,
				c = b.max - b.min,
				d = 0,
				e = 0,
				f = 0,
				g = b.linkedParent,
				h = b.transA;
			b.isXAxis && (g ? (e = g.minPointOffset, f = g.pointRangePadding) : Sb(b.dataSeries, function (b) {
				var c = b.pointRange,
					g = b.options.positioningMethod,
					h = b.closestPointRange;
				d = Ea(d, c), e = Ea(e, g ? 0 : c / 2), f = Ea(f, "on" === g ? 0 : c), !b.noSharedTooltip && qb(h) && (a = qb(a) ? Fa(a, h) : h)
			}), b.minPointOffset = e, b.pointRangePadding = f, b.pointRange = d, b.closestPointRange = a), b.oldTransA = h, b.translationSlope = b.transA = h = b.len / (c + f || 1), b.transB = b.horiz ? b.left : b.bottom, b.minPixelPadding = h * e
		},
		_ticks: function (a) {
			var b, c, f, g, h = this,
				j = Qb[h.chart.guid],
				k = h.options,
				l = h.isLog,
				m = h.isDatetimeAxis,
				q = h.isXAxis,
				r = h.isLinked,
				s = h.options.tickPositionerlINTERNAL,
				t = k.endOffset,
				u = k.startOffset,
				v = k.ticksRepeat,
				x = k.minTickInterval,
				y = k.tickPixelIntervalINTERNAL,
				z = h.categoricalValues;
			if (r) {
				if (h.linkedParent = j[q ? "axisX" : "axisY"][k.linkedToINTERNAL], f = M.call(h.linkedParent), h.min = i(f.min, f.dataMin), h.max = i(f.max, f.dataMax), k.type !== h.linkedParent.options.axisType) return void ib("Axis and parent axis have different type", 1)
			} else h.min = i(h.userMin, k.min, h.dataMin), h.max = i(h.userMax, k.max, h.dataMax);
			if (l) {
				if (!a && Fa(h.min, i(h.dataMin, h.min)) <= 0) return void ib("Negative values not supported for this axis type", 1);
				h.min = w(e(h.min)), h.max = w(e(h.max))
			}
			if (h.range && (h.userMin = h.min = Ea(h.min, h.max - h.range), h.userMax = h.max, a && (h.range = null)), J.call(h), z || h.usePercentage || r || !qb(h.min) || !qb(h.max) || (c = h.max - h.min || 1, qb(k.min) || qb(h.userMin) || !u || !(h.dataMin < 0) && h.ignoreMinPadding || (h.min -= c * u), qb(k.max) || qb(h.userMax) || !t || !(h.dataMax > 0) && h.ignoreMaxPadding || (h.max += c * t)), h.min === h.max || h.min === d || h.max === d ? h.ticksRepeat = 1 : r && !v && y === h.linkedParent.options.tickPixelIntervalINTERNAL ? h.ticksRepeat = h.linkedParent.ticksRepeat : h.ticksRepeat = i(v, z ? 1 : (h.max - h.min) * y / (h.len || 1)), q && !a && Sb(h.dataSeries, function (a) {
					a.processData(h.min !== h.oldMin || h.max !== h.oldMax)
				}), h._arrange(a), h._preTicks && h._preTicks(), !v && h.ticksRepeat < x && (h.ticksRepeat = x), m || l || (b = Aa.pow(10, Ca(Aa.log(h.ticksRepeat) / Aa.LN10)), v || (h.ticksRepeat = n(h.ticksRepeat, null, b, k))), h.minorTicksRepeat = "auto" === k.minorTicksRepeat && h.ticksRepeat ? h.ticksRepeat / 5 : k.minorTicksRepeat, h.tickPositions = g = k.tickPositions || s && s.apply(h, [h.min, h.max]), g || (g = m ? p(o(h.ticksRepeat, k.units), h.min, h.max, k.startOfWeekINTERNAL, h.ordinalPositions, h.closestPointRange, !0) : l ? G.call(h, h.ticksRepeat, h.min, h.max) : F.call(h, h.ticksRepeat, h.min, h.max), h.tickPositions = g), !r) {
				var A = g[0],
					B = g[g.length - 1],
					C = h.minPointOffset || 0;
				k.tickOnBeginning ? h.min = A : h.min - C > A && g.shift(), k.fixedEnd ? h.max = B : h.max + C < B && g.pop()
			}
		},
		_updateTicks: function () {
			var a = this,
				b = a.xOrY,
				c = a.tickPositions,
				d = Qb[a.chart.guid].maxTicks;
			if (d && d[b] && !a.isDatetimeAxis && !a.categoricalValues && !a.isLinked && a.options.matchTicks !== !1) {
				var e, f = a.tickAmount,
					g = c.length;
				if (a.tickAmount = e = d[b], g < e) {
					for (; c.length < e;) c.push(w(c[c.length - 1] + a.ticksRepeat));
					a.transA *= (g - 1) / (e - 1), a.max = c[c.length - 1]
				}
				qb(f) && e !== f && (a.isDirty = !0)
			}
		},
		_scale: function () {
			var a, b, c, d, e = this,
				f = e.stacks;
			if (e.oldMin = e.min, e.oldMax = e.max, e.oldAxisLength = e.len, e._dimensions(), d = e.len !== e.oldAxisLength, Sb(e.dataSeries, function (a) {
					(a.isDirtyData || a.isDirty || a.axisX.isDirty) && (c = !0)
				}), (d || c || e.isLinked || e.userMin !== e.oldUserMin || e.userMax !== e.oldUserMax) && (E.call(e), e._ticks(), e.oldUserMin = e.userMin, e.oldUserMax = e.userMax, e.isDirty || (e.isDirty = d || e.min !== e.oldMin || e.max !== e.oldMax)), !e.isXAxis)
				for (a in f)
					if (f.hasOwnProperty(a))
						for (b in f[a]) f[a].hasOwnProperty(b) && (f[a][b].cum = f[a][b].total);
			K.call(e)
		},
		_zoom: function (a, b) {
			return L.call(this, a, b, !1, d, {
				trigger: "zoom"
			}), !0
		},
		_dimensions: function () {
			var a = this,
				b = Qb[a.chart.guid],
				c = a.options,
				d = c.offsetLeft || 0,
				e = c.offsetRight || 0;
			a.left = i(c.left, b.plotLeft + d), a.top = i(c.top, b.plotTop), a.width = i(c.width, b.plotWidth - d + e), a.height = i(c.height, b.plotHeight), a.bottom = b.chartHeight - a.height - a.top, a.right = b.chartWidth - a.width - a.left, a.len = Ea(a.horiz ? a.width : a.height, 0)
		},
		_offset: function () {
			var a, b, c, d, e = this,
				f = Qb[e.chart.guid],
				g = f.renderer,
				h = e.options,
				j = e.tickPositions,
				k = e.ticks,
				l = e.horiz,
				m = e.side,
				n = 0,
				o = 0,
				p = h.title,
				q = h.axisTickText,
				r = 0,
				s = f.axisOffset,
				t = [-1, 1, 1, -1][m];
			if (e.hasData = a = e.hasVisibleSeries || qb(e.min) && qb(e.max) && !!j, e.showAxis = b = a || i(h.showEmpty, !0), e.axisGroup || (e.gridGroup = g.g().attr({
					zIndex: h.gridZIndex || 1
				}).add(), e.axisGroup = g.g().attr({
					zIndex: h.zIndex || 2
				}).add(), e.labelGroup = g.g().attr({
					zIndex: q.zIndex || 7
				}).add()), a || e.isLinked) Sb(j, function (a) {
				k[a] ? k[a]._label() : k[a] = new A(e, a)
			}), Sb(j, function (a) {
				0 !== m && 2 !== m && {
					1: "left",
					3: "right"
				}[m] !== q.align || (r = Ea(k[a]._labelSize(), r))
			}), e.staggerLinesINTERNAL && (r += 16 * (e.staggerLinesINTERNAL - 1));
			else
				for (d in k) k.hasOwnProperty(d) && (k[d].destroy(), delete k[d]);
			p && p.text && (e.axisTitle || (e.axisTitle = g.text(p.text, 0, 0, p.htmlOutput).attr({
				zIndex: 7,
				textAngle: p.textAngle || 0,
				align: p.textAlignINTERNAL || {
					low: "left",
					middle: "center",
					high: "right"
				}[p.align]
			}).css(p.style).add(e.axisGroup), e.axisTitle.isNew = !0), b && (n = e.axisTitle.getBBox()[l ? "height" : "width"], o = i(p.margin, l ? 5 : 10), c = p.offset), e.axisTitle[b ? "show" : "hide"]()), e.offset = t * i(h.offset, s[m]), e.axisTitleMargin = i(c, r + o + (2 !== m && r && t * h.axisTickText[l ? "y" : "x"])), s[m] = Ea(s[m], e.axisTitleMargin + n + t * e.offset)
		},
		_path: function (a) {
			var b = this,
				c = Qb[b.chart.guid],
				d = b.swapLocation,
				e = b.offset,
				f = b.horiz,
				g = b.left + (d ? b.width : 0) + e,
				h = c.chartHeight - b.bottom - (d ? b.height : 0) + e;
			return this.lineTop = h, c.renderer.crispLine([zb, f ? b.left : g, f ? h : b.top, yb, f ? c.chartWidth - b.right : g, f ? h : c.chartHeight - b.bottom], a)
		},
		_titlePos: function () {
			var a = this.horiz,
				b = this.left,
				c = this.top,
				d = this.len,
				e = this.options.title,
				f = a ? b : c,
				g = this.swapLocation,
				h = this.offset,
				i = jb(e.style.fontSize || 12),
				j = {
					low: f + (a ? 0 : d),
					middle: f + d / 2,
					high: f + (a ? d : 0)
				}[e.align],
				k = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? i : 0);
			return {
				x: a ? j : k + (g ? this.width : 0) + h + (e.x || 0),
				y: a ? k - (g ? this.height : 0) + h : j + (e.y || 0)
			}
		},
		render: function () {
			var a, b, c, e = this,
				g = e.chart,
				h = Qb[g.guid],
				i = h.renderer,
				j = e.options,
				k = e.isLog,
				l = e.isLinked,
				m = e.tickPositions,
				n = e.axisTitle,
				o = e.stacks,
				p = e.ticks,
				q = e.minorTicks,
				r = e.alternateBands,
				s = j.stackTextSettings,
				t = j.colorStripe,
				u = e.tickmarkOffset,
				v = j.drawWidth,
				w = h.hasRendered,
				x = w && qb(e.oldMin) && !isNaN(e.oldMin),
				y = e.hasData,
				z = e.showAxis;
			if ((y || l) && (e.minorTicksRepeat && !e.categoricalValues && Sb(H.call(e), function (a) {
					q[a] || (q[a] = new A(e, a, "minor")), x && q[a].isNew && q[a].render(null, !0), q[a].isActive = !0, q[a].render()
				}), Sb(m.slice(1).concat([m[0]]), function (a, b) {
					b = b === m.length - 1 ? 0 : b + 1, (!l || a >= e.min && a <= e.max) && (p[a] || (p[a] = new A(e, a)), x && p[a].isNew && p[a].render(b, !0), p[a].isActive = !0, p[a].render(b))
				}), t && Sb(m, function (a, g) {
					g % 2 === 0 && a < e.max && (r[a] || (r[a] = new B(e)), b = a + u, c = m[g + 1] !== d ? m[g + 1] + u : e.max, r[a].options = {
						from: k ? f(b) : b,
						to: k ? f(c) : c,
						color: t
					}, r[a].render(), r[a].isActive = !0)
				}), e._addedPlotLB || (Sb((j.plotLines || []).concat(j.plotBands || []), function (a) {
					O.call(e, a)
				}), e._addedPlotLB = !0)), Sb([p, q, r], function (a) {
					var b;
					for (b in a) a.hasOwnProperty(b) && (a[b].isActive ? a[b].isActive = !1 : (a[b].destroy(), delete a[b]))
				}), v && (a = e._path(v), e.axisLine ? e.axisLine.animate({
					d: a
				}) : e.axisLine = i.path(a).attr({
					stroke: j.drawColor,
					"stroke-width": v,
					zIndex: 7
				}).add(e.axisGroup), e.axisLine[z ? "show" : "hide"]()), n && z && (n[n.isNew ? "attr" : "animate"](e._titlePos()), n.isNew = !1), s && s.enabled) {
				var C, D, E, F = e.stackTotalGroup;
				F || (e.stackTotalGroup = F = i.g().attr({
					visibility: ub,
					zIndex: 6
				}).add()), F.translate(h.plotLeft, h.plotTop);
				for (C in o)
					if (o.hasOwnProperty(C)) {
						D = o[C];
						for (E in D) D.hasOwnProperty(E) && D[E].render(F)
					}
			}
			e.isDirty = !1
		},
		_title: function (a, b) {
			var c = this,
				d = c.chart,
				e = c.options,
				f = c.axisTitle;
			e.title = Wb(e.title, a), c.axisTitle = f && f.destroy(), c.isDirty = !0, i(b, !0) && d.redraw()
		},
		redraw: function () {
			var a = this,
				b = Qb[a.chart.guid].tracker;
			b._reset && b._reset(!0), a.render(), Sb(a.plotLinesAndBands, function (a) {
				a.render()
			}), Sb(a.dataSeries, function (a) {
				a.isDirty = !0
			})
		},
		_points: function (a, b) {
			var c = this;
			c.categoricalValues = c.userOptions.categoricalValues = a, Sb(c.dataSeries, function (a) {
				a.translate(), a.setTooltipPoints(!0)
			}), c.isDirty = !0, i(b, !0) && c.chart.redraw()
		},
		destroy: function () {
			if (!this._destroyed) {
				var a, b, c, d = this,
					e = d.stacks;
				Yb(d);
				for (a in e) e.hasOwnProperty(a) && (u(e[a]), e[a] = null);
				Sb([d.ticks, d.minorTicks, d.alternateBands, d.plotLinesAndBands], function (a) {
					u(a)
				});
				for (b in d) d.hasOwnProperty(b) && (c = d[b], (c instanceof z || hc && c instanceof hc) && (d[b] = c.destroy()));
				d._destroyed = !0
			}
		}
	}, S.prototype = {
		destroy: function () {
			this._destroyed || (Sb(this.axisMarkers, function (a) {
				a && a.destroy()
			}), this._destroyed = !0)
		},
		move: function (a, b, c, d) {
			this.labelElement.css({
				top: b,
				left: a
			})
		},
		hide: function () {
			var a = this,
				b = Qb[a.chart.guid];
			if (!a.isHidden) {
				var c = b.hoverPoints;
				a.labelElement.hide(), c && Sb(c, function (a) {
					a.setState()
				}), b.hoverPoints = null, a.isHidden = !0
			}
		},
		getPosition: function (a, b, c) {
			var d, e = this,
				f = Qb[b.guid],
				g = f.plotLeft,
				h = f.plotTop,
				j = f.plotWidth,
				k = f.plotHeight,
				l = i(this.options.distance, 12),
				m = Q.call(e, a, c),
				n = m[0],
				o = m[1],
				p = e.labelElement.width(),
				q = e.labelElement.height(),
				r = n + g + (f.isInverted ? l : -p - l),
				s = o - q + h + 15;
			return r < 7 && (r = g + Ea(n, 0) + l), r + p > g + j && (r -= r + p - (g + j), s = o - q + h - l, d = !0), s < h + 5 && (s = h + 5, d && o >= s && o <= s + q && (s = o + h + l)), s + q > h + k && (s = Ea(h, h + k - q - l)), {
				x: r,
				y: s
			}
		},
		refresh: function (a, c) {
			var d, e, f, g, h, j, k, l, m = this,
				n = m.chart,
				o = m.labelElement,
				p = m.options,
				q = function (a, c) {
					var d = this,
						e = [];
					a = rb(a);
					var f, g, h, i = "",
						j = a[0].dataSeries.axisX,
						k = "f";
					if (j && "datetime" === j.options.axisType && nb(a[0].pointName)) {
						for (f in ka)
							if (ka.hasOwnProperty(f) && ka[f] >= j.closestPointRange) {
								k = j.options.axisDateFormat[f];
								break
							}
						i = b.format("{0:" + k + "}", new Date(a[0].pointName))
					} else g = a[0].dataSeries.tooltipSettings && a[0].dataSeries.tooltipSettings.customHeaderText || d.options.customHeaderText, i = kb(g) ? b.format(g, {
						point: a[0],
						chart: c
					}) : g.call(null, a, c);
					return e += '<div class="shield-tooltip-header">' + i + "</div>", h = a[0].dataSeries.tooltipSettings && a[0].dataSeries.tooltipSettings.customPointText || d.options.customPointText, "rangebar" === a[0].dataSeries.seriesType && "<span>{point.dataSeries.collectionAlias}</span>: {point.y}" != d.options.customPointText && (h = d.options.customPointText), Sb(a, function (a) {
						Ec = a.dataSeries, e += '<div class="shield-tooltip-value">' + (kb(h) ? b.format(h, {
							point: a,
							chart: c
						}) : h.call(null, a, c)) + "</div>"
					}), e
				},
				r = Qb[n.guid],
				s = r.hoverPoints,
				t = p.axisMarkers,
				u = m.chartBound;
			if (p.format && (q = kb(p.format) ? function (a, c) {
					return b.format(p.format, {
						point: a,
						chart: c
					})
				} : p.format), g = Q.call(m, a, c), d = g[0], e = g[1], !u || a.dataSeries && a.dataSeries.noSharedTooltip ? k = a.dataSeries.color : (r.hoverPoints = a, s && Sb(s, function (a) {
					a.setState()
				}), Sb(a, function (a) {
					a.setState(Fb)
				})), h = q.call(m, a, n), mb(a) && (a = a[0]), l = a.dataSeries, f = u || !l.isCartesian || l.tooltipOutsidePlot || $(n, d, e), h !== !1 && f ? (m.isHidden && o.show(), o.html(h), j = (p.position || m.getPosition).call(m, a, n, c), m.move(Ba(j.x), Ba(j.y), d + r.plotLeft, e + r.plotTop), m.isHidden = !1) : this.hide(), t && t.enabled) {
				var v, w, x = /x/i.test(t.mode),
					y = /y/i.test(t.mode),
					z = {
						"stroke-width": jb(t.width),
						stroke: t.color,
						zIndex: jb(t.zIndex)
					};
				x && (w = a.dataSeries.axisX, w && (v = w._linePath(a.x, 1), m.axisMarkers[0] ? m.axisMarkers[0].attr({
					d: v,
					visibility: ub
				}) : m.axisMarkers[0] = r.renderer.path(v).attr(z).add())), y && (w = a.dataSeries.axisY, w && (v = w._linePath(i(a.stackY, a.y), 1), m.axisMarkers[1] ? m.axisMarkers[1].attr({
					d: v,
					visibility: ub
				}) : m.axisMarkers[1] = r.renderer.path(v).attr(z).add()))
			}
		}
	}, T.prototype = {
		_normalize: function (a) {
			var b, e, f, g;
			return a = a || c.event, a.target || (a.target = a.srcElement), g = a.touches ? a.touches.item(0) : a, this.chartPosition = b = Ub(Qb[this.chart.guid].container), g.pageX === d ? (e = a.x, f = a.y) : (e = g.pageX - b.left, f = g.pageY - b.top), gb(a, {
				chartX: Ba(e),
				chartY: Ba(f)
			})
		},
		_coord: function (a) {
			var b = {
					axisX: [],
					axisY: []
				},
				c = Qb[this.chart.guid];
			return Sb(c.axes, function (d) {
				var e = d.isXAxis,
					f = c.isInverted ? !e : e;
				b[e ? "axisX" : "axisY"].push({
					axis: d,
					value: d.translate((f ? a.chartX - c.plotLeft : d.top + d.len - a.chartY) - d.minPixelPadding, !0)
				})
			}), b
		},
		_index: function (a) {
			var b = Qb[this.chart.guid];
			return b.isInverted ? b.plotHeight + b.plotTop - a.chartY : a.chartX - b.plotLeft
		},
		_move: function (a) {
			var b, c, d, e, f = this,
				g = f.chart,
				h = Qb[g.guid],
				i = h.dataSeries,
				j = h.tooltip,
				k = h.hoverPoint,
				l = h.hoverSeries,
				m = h.chartWidth,
				n = f._index(a);
			if (j && f.options.tooltipSettings.chartBound && (!l || !l.noSharedTooltip)) {
				for (c = [], d = i.length, e = 0; e < d; e++) i[e].visible && i[e].options.mouseInteractions !== !1 && !i[e].noSharedTooltip && i[e].tooltipPoints.length && (b = i[e].tooltipPoints[n], b._dist = Ga(n - b[i[e].axisX.tooltipPosName || "plotX"]), m = Fa(m, b._dist), c.push(b));
				for (d = c.length; d--;) c[d]._dist > m && c.splice(d, 1);
				c.length && c[0].plotX !== f.hoverX && (j.refresh(c, a), f.hoverX = c[0].plotX)
			}
			h.cachedHoverSeries && h.cachedHoverSeries.tracker && (b = h.cachedHoverSeries.tooltipPoints[n], b && b !== k && b._mouseOver(a))
		},
		_reset: function (a) {
			var b = this,
				c = b.chart,
				e = Qb[c.guid],
				f = e.hoverSeries,
				g = e.hoverPoint,
				h = e.tooltip,
				i = h && h.chartBound ? e.hoverPoints : g;
			a = a && h && i, a && rb(i)[0].plotX === d && (a = !1), a ? h.refresh(i) : (g && g._mouseOut(), f && f._mouseOut(), h && (h.hide(), R.call(h)), b.hoverX = null)
		},
		_events: function () {
			function a() {
				e && (j(g, {
					cursor: "auto"
				}), f.cancelClick = b, f.mouseIsDown = b = !1), f.container.style.cursor = "default", Yb(za, db ? "touchend" : "mouseup", a)
			}
			var b, c = !0,
				d = this,
				e = d.chart,
				f = Qb[e.guid],
				g = f.container;
			d.hideTooltipOnMouseMove = function (a) {
				d.chartPosition && f.hoverSeries && f.hoverSeries.isCartesian && !$(e, a.pageX - d.chartPosition.left - f.plotLeft, a.pageY - d.chartPosition.top - f.plotTop) && d._reset()
			}, d.hideTooltipOnMouseLeave = function (a) {
				d.chartPosition && !$(e, a.pageX - d.chartPosition.left - f.plotLeft, a.pageY - d.chartPosition.top - f.plotTop) && (d._reset(), d.chartPosition = null)
			}, g.onmousedown = function (b) {
				b = d._normalize(b), !db && b.preventDefault && b.preventDefault(), f.mouseIsDown = !0, f.cancelClick = !1, f.mouseDownX = d.mouseDownX = b.chartX, d.mouseDownY = b.chartY, f.isZoomed && (f.container.style.cursor = "move"), Xb(za, db ? "touchend" : "mouseup", a)
			};
			var i = function (a) {
				if (!(a && a.touches && a.touches.length > 1)) {
					a = d._normalize(a), db || (a.returnValue = !1);
					var g = a.chartX,
						i = a.chartY,
						j = !$(e, g - f.plotLeft, i - f.plotTop);
					if (db && a.type === Ra && (h(a.target, "isTracker") ? f.runTrackerClick || a.preventDefault() : e.events.click || j || a.preventDefault()), j && (g < f.plotLeft ? g = f.plotLeft : g > f.plotLeft + f.plotWidth && (g = f.plotLeft + f.plotWidth), i < f.plotTop ? i = f.plotTop : i > f.plotTop + f.plotHeight && (i = f.plotTop + f.plotHeight)), f.mouseIsDown && a.type !== Ra && (b = Aa.sqrt(Aa.pow(d.mouseDownX - g, 2) + Aa.pow(d.mouseDownY - i, 2)), b > 10)) {
						$(e, d.mouseDownX - f.plotLeft, d.mouseDownY - f.plotTop);
						f.isZoomed && (e._viewport(d.mouseDownX - g, i - d.mouseDownY), d.mouseDownX = g, d.mouseDownY = i)
					}
					return j || d._move(a), c = j, j || !f.hasCartesianSeries
				}
			};
			g.onmousemove = i, Xb(g, Qa, d.hideTooltipOnMouseLeave), Xb(za, Oa, d.hideTooltipOnMouseMove), g.ontouchstart = function (a) {
				(d.zoomX || d.zoomY) && g.onmousedown(a), i(a)
			}, g.ontouchmove = i, g.ontouchend = function () {
				b && d._reset()
			}, g.onclick = function (a) {
				var b, c, g = f.hoverPoint;
				a = d._normalize(a), a.cancelBubble = !0, f.cancelClick || (g && (h(a.target, "isTracker") || h(a.target.parentNode, "isTracker")) ? (b = g.plotX, c = g.plotY, gb(g, {
					pageX: d.chartPosition.left + f.plotLeft + (f.isInverted ? f.plotWidth - c : b),
					pageY: d.chartPosition.top + f.plotTop + (f.isInverted ? f.plotHeight - b : c)
				}), g.trigger("seriesClick", a)) : (gb(a, d._coord(a)), $(e, a.chartX - f.plotLeft, a.chartY - f.plotTop) && e.trigger(Ta, a)))
			}, Xb(g, "mousewheel", function (a, b, c, g) {
				a = d._normalize(a), gb(a, d._coord(a)), b = b > 0 ? 1 : -1;
				var h, i = {
						axisX: [],
						axisY: []
					},
					j = 0;
				if (Sb(f.axes, function (c) {
						var d = c.isXAxis;
						if (f.tracker[d ? "zoomX" : "zoomY"]) {
							var e, g, k = f.isInverted ? !d : d,
								l = c.dataMax / 5;
							if (b > 0) {
								var m = c.translate((k ? a.chartX - f.plotLeft : c.top + c.len - a.chartY) - c.minPixelPadding, !0),
									n = c.max - c.min - l;
								m - n / 2 < c.dataMin ? (e = c.dataMin, g = c.dataMin + n) : m + n / 2 > c.dataMax ? (e = c.dataMax - n, g = c.dataMax) : (e = m - n / 2, g = m + n / 2), e < c.dataMin && (e = c.dataMin, g = c.dataMin + n)
							} else e = Ea(c.dataMin, c.min - l / 2), g = Fa(c.dataMax, c.max + l / 2), e <= c.dataMin && g >= c.dataMax && j++;
							if (e > g) return void i[d ? "axisX" : "axisY"].push({
								axis: c,
								min: e,
								max: g
							});
							isNaN(e) || isNaN(g) || (i[d ? "axisX" : "axisY"].push({
								axis: c,
								min: Fa(e, g),
								max: Ea(e, g)
							}), h = !0)
						}
					}), h) {
					var k = {
						axisX: [],
						axisY: []
					};
					return k.axisX = i.axisX, k.axisY = i.axisY, i.axisX[0] && i.axisX[0].min >= i.axisX[0].max && (k.axisX = [], i.axisX[0].min = Fa(i.axisX[0].min, i.axisX[0].max), i.axisX[0].max = Ea(i.axisX[0].min, i.axisX[0].max)), i.axisY[0] && i.axisY[0].min >= i.axisY[0].max && (k.axisY = [], i.axisY[0].min = Fa(i.axisY[0].min, i.axisY[0].max), i.axisY[0].max = Ea(i.axisY[0].min, i.axisY[0].max)), $b(e, "zoom", i, function (a) {
						e._zoom(k)
					}), j == f.axes.length ? f.isZoomed = !1 : f.isZoomed = !0, a.stopPropagation(), a.returnValue = !1, !1
				}
			})
		},
		destroy: function () {
			if (!this._destroyed) {
				var a = this,
					b = a.chart,
					c = Qb[b.guid],
					d = c.container;
				c.trackerGroup && (c.trackerGroup = c.trackerGroup.destroy()), Yb(d, Qa, a.hideTooltipOnMouseLeave), Yb(za, Oa, a.hideTooltipOnMouseMove), d.onclick = d.onmousedown = d.onmousemove = d.ontouchstart = d.ontouchend = d.ontouchmove = null, a._destroyed = !0
			}
		},
		init: function (a, b) {
			var c = Qb[a.guid];
			c.trackerGroup || (c.trackerGroup = c.renderer.g().attr({
				zIndex: 9
			}).add()), b.enabled && (c.tooltip = new S(a, b)), this._events()
		}
	}, Z.prototype = {
		init: function (a) {
			var b = this,
				c = b.options = a.options.chartLegend;
			if (c.enabled) {
				var d = c.legendItemSettings.elementStyle,
					e = i(c.padding, 8),
					f = c.legendItemSettings.topSpacing || 0;
				b.baseline = jb(d.fontSize) + 3 + f, b.elementStyle = d, b.disabledStyle = Wb(d, c.legendItemSettings.disabledStyle), b.topSpacing = f, b.padding = e, b.initialItemX = e, b.initialItemY = e - 5, b.maxelementWidth = 0, b.chart = a, b.itemHeight = 0, b.lastLineHeight = 0, b.render()
			}
		},
		destroy: function () {
			if (!this._destroyed) {
				var a = this,
					b = a.group,
					c = a.box;
				c && (a.box = c.destroy()), b && (a.group = b.destroy()), a._destroyed = !0
			}
		},
		render: function () {
			var a, b, c, d, e = this,
				f = e.chart,
				g = Qb[f.guid],
				h = g.renderer,
				i = e.group,
				j = e.box,
				k = e.options,
				l = e.padding,
				m = k.borderWidth,
				n = k.backgroundColor;
			e.itemX = e.initialItemX, e.itemY = e.initialItemY, e.offsetWidth = 0, e.lastItemY = 0, i || (e.group = i = h.g().attr({
				zIndex: 7
			}).add(), e.contentGroup = h.g().attr({
				zIndex: 1
			}).add(i), e.scrollGroup = h.g().add(e.contentGroup), e.clipRect = h.clipRect(0, 0, 9999, g.chartHeight), e.contentGroup.clip(e.clipRect)), a = [], Sb(g.dataSeries, function (b) {
				var c = b.options;
				c.addToLegend && (a = a.concat(b.legendItems || (c.legendType === Ua ? b.data : b)))
			}), r(a, function (a, b) {
				return (a.options && a.options.orderIndex || 0) - (b.options && b.options.orderIndex || 0)
			}), k.inverseOrder && a.reverse(), e.allItems = a, e.display = b = !!a.length, Sb(a, function (a) {
				X.call(e, a)
			}), c = k.width || e.offsetWidth, d = e.lastItemY + e.lastLineHeight, d = Y.call(e, d), (m || n) && (c += l, d += l, j ? c > 0 && d > 0 && (j[j.isNew ? "attr" : "animate"](j.crisp(null, null, null, c, d)), j.isNew = !1) : (e.box = j = h.rect(0, 0, c, d, k.borderRadius, m || 0).attr({
				stroke: k.borderColor,
				"stroke-width": m || 0,
				fill: n || Ab
			}).add(i).shadow(k.shadow), j.isNew = !0), j[b ? "show" : "hide"]()), e.legendWidth = c, e.legendHeight = d, Sb(a, function (a) {
				V.call(e, a)
			}), b && i.align(gb({
				width: c,
				height: d
			}, k), !0, g.spacingBox)
		}
	};
	var lc = xa.extend({
			init: function (a, c) {
				var d = this,
					e = d.guid = b.guid(),
					f = Qb[e] = {},
					g = c.dataSeries;
				c.dataSeries = null, xa.fn.init.apply(d, arguments), d.options.dataSeries = d.initialOptions.dataSeries = g, f.cachedHoverSeries = null;
				var h = d.options,
					j = h.margin,
					k = mb(j) ? j : [j, j, j, j];
				f.optionsMarginTop = i(h.chartMarginTop, k[0]), f.optionsMarginRight = i(h.chartMarginRight, k[1]), f.optionsMarginBottom = i(h.chartMarginBottom, k[2]), f.optionsMarginLeft = i(h.chartMarginLeft, k[3]), f.isResizing = 0, f.axes = [], f.dataSeries = [], f.hasCartesianSeries = !1, f.axisX = [], f.axisY = [], f.applyAnimation = !cb && i(h.applyAnimation, !0), f.pointCount = 0, f.counters = new q, mc._initRender.call(d)
			},
			_series: function (a) {
				var c = this,
					d = c.options,
					e = a.seriesType || d.seriesType;
				if (!Rb[e]) return void ib(b.format("Invalid series type '{0}'", e), 1);
				var f = new Rb[e];
				return f.init(c, a), f
			},
			redraw: function (a) {
				var b, c, d = this,
					e = Qb[d.guid],
					f = e.axes,
					g = e.dataSeries,
					h = e.tracker,
					i = e.chartLegend,
					j = e.isDirtyLegend,
					k = e.isDirtyBox,
					l = g.length,
					m = l,
					n = e.renderer,
					o = n.isHidden(),
					p = [];
				for (x(a, d), o && mc._shiftRendering.call(d); m--;)
					if (c = g[m], c.isDirty && c.options.stackMode) {
						b = !0;
						break
					}
				if (b)
					for (m = l; m--;) c = g[m], c.options.stackMode && (c.isDirty = !0);
				Sb(g, function (a) {
					a.isDirty && a.options.legendType === Ua && (j = !0)
				}), j && i.options.enabled && (i.render(), e.isDirtyLegend = !1), e.hasCartesianSeries && (e.isResizing || (e.maxTicks = null, Sb(f, function (a) {
					a._scale()
				})), mc._updateTicks.call(d), d._spacing(), Sb(f, function (a) {
					a.isDirtyExtremes && (a.isDirtyExtremes = !1), (a.isDirty || k || b) && (a.redraw(), k = !0)
				})), k && mc._renderBox.call(d), Sb(g, function (a) {
					a.isDirty && a.visible && (!a.isCartesian || a.axisX) && a.redraw()
				}), h && h._reset && h._reset(!0), n.draw(), o && mc._shiftRendering.call(d, !0), Sb(p, function (a) {
					a.call()
				})
			},
			_axes: function () {
				var a, b, c = this,
					d = this.options,
					e = d.axisX || {},
					f = d.axisY || {};
				e = rb(e), Sb(e, function (a, b) {
					a.index = b, a.isX = !0
				}), f = rb(f), Sb(f, function (a, b) {
					a.index = b
				}), a = e.concat(f), Sb(a, function (a) {
					b = new P(c, a)
				}), mc._updateTicks.call(c)
			},
			_zoom: function (a) {
				var b, c = this,
					d = Qb[c.guid];
				a && !a.resetSelection && (Sb(a.axisX.concat(a.axisY), function (a) {
					var c = a.axis;
					d.tracker[c.isXAxis ? "zoomX" : "zoomY"] && (b = c._zoom(a.min, a.max))
				}), b && c.redraw(i(c.options.applyAnimation, d.pointCount < 100)))
			},
			_viewport: function (a, b) {
				var c = this,
					d = Qb[c.guid],
					e = !1;
				Sb(d.axes, function (c) {
					var f = c.isXAxis,
						g = d.isInverted ? !f : f,
						h = I.call(c, g ? a : b, !0);
					if (0 !== h) {
						var i = c.min + h,
							j = c.max + h;
						i > c.dataMin && j < c.dataMax && (L.call(c, i, j, !1), e = !0)
					}
				}), e && c.redraw(!1)
			},
			_size: function () {
				var a = this,
					b = Qb[a.guid],
					c = a.options,
					d = b.renderToClone || a.element;
				b.containerWidth = d.width(), b.containerHeight = d.height(), b.chartWidth = c.width || b.containerWidth || 600, b.chartHeight = c.height || (b.containerHeight > 19 ? b.containerHeight : 400)
			},
			_wrapper: function () {
				var c, d, e, f = this,
					g = Qb[f.guid],
					h = f.options,
					i = f.element,
					j = b.strid();
				i.empty(), i.width() || mc._shiftRendering.call(f), f._size(), d = g.chartWidth, e = g.chartHeight, g.container = c = a("<div />").attr("id", j).addClass(sb + "container" + (h.className ? " " + h.className : "")).css(gb({
					position: wb,
					overflow: vb,
					width: d + xb,
					height: e + xb,
					textAlignINTERNAL: "left",
					lineHeight: "normal",
					zIndex: 0
				}, h.style)).appendTo(g.renderToClone || i)[0], g.renderer = h.forExport ? new fc(c, d, e, (!0)) : new fa(c, d, e), cb && g.renderer.create(f, c, d, e)
			},
			_spacing: function () {
				var a, b, c = this,
					d = Qb[c.guid],
					e = c.options,
					f = e.chartAreaPaddingTop,
					g = e.chartAreaPaddingRight,
					h = e.chartAreaPaddingBottom,
					j = e.chartAreaPaddingLeft,
					k = d.chartLegend,
					l = d.optionsMarginTop,
					m = d.optionsMarginLeft,
					n = d.optionsMarginRight,
					o = d.optionsMarginBottom,
					p = d.chartTitleOptions,
					q = d.chartSubtitleOptions,
					r = c.options.chartLegend,
					s = i(r.chartDistance, 10),
					t = r.x,
					u = r.y,
					v = r.align,
					w = r.verticalAlign;
				mc._marginValues.call(c), a = d.axisOffset, !d.title && !d.subtitle || qb(d.optionsMarginTop) || (b = Ea(d.title && !p.ignoreChartLayout && !p.verticalAlign && p.y || 0, d.subtitle && !q.ignoreChartLayout && !q.verticalAlign && q.y || 0), b && (d.plotTop = Ea(d.plotTop, b + 15 + f))), k.display && !r.ignoreChartLayout && ("right" === v ? qb(n) || (d.chartMarginRight = Ea(d.chartMarginRight, k.legendWidth - t + s + g)) : "left" === v ? qb(m) || (d.plotLeft = Ea(d.plotLeft, k.legendWidth + t + s + j)) : "top" === w ? qb(l) || (d.plotTop = Ea(d.plotTop, k.legendHeight + u + s + f)) : "bottom" === w && (qb(o) || (d.chartMarginBottom = Ea(d.chartMarginBottom, k.legendHeight - u + s + h)))), d.extraBottomMargin && (d.chartMarginBottom += d.extraBottomMargin), d.extraTopMargin && (d.plotTop += d.extraTopMargin), d.hasCartesianSeries && Sb(d.axes, function (a) {
					a._offset()
				}), qb(m) || (d.plotLeft += a[3]), qb(l) || (d.plotTop += a[0]), qb(o) || (d.chartMarginBottom += a[2]), qb(n) || (d.chartMarginRight += a[1]), mc._saveSize.call(c)
			},
			_layout: function () {
				var a, b, c, d = this,
					e = Qb[d.guid],
					f = d.options,
					g = d.options.dataSeries;
				Sb(["isInverted", "angular", "enablePolarLayout"], function (d) {
					for (a = Rb[f.seriesType], c = e[d] || f[d] || a && a.prototype[d], b = g && g.length; !c && b--;) a = Rb[g[b].seriesType], a && a.prototype[d] && (c = !0);
					e[d] = c
				})
			},
			_render: function () {
				var c, d, e = this,
					f = Qb[e.guid],
					g = f.axes,
					h = f.renderer,
					i = e.options,
					j = i.axisTickText;
				if (d = {
						text: "&#68;&#101;&#109;&#111;&#32;&#86;&#101;&#114;&#115;&#105;&#111;&#110;",
						isr: 0
					}, mc.setTitle.call(e), f.chartLegend = new Z(e), Sb(g, function (a) {
						a._scale()
					}), e._spacing(), Sb(g, function (a) {
						if (a.radial) return e._spacing(), !1
					}), f.maxTicks = null, Sb(g, function (a) {
						a._ticks(!0), K.call(a)
					}), d.style = {
						cursor: Cb,
						color: "#999999",
						fontSize: "16px"
					}, mc._updateTicks.call(e), e._spacing(), mc._renderBox.call(e), f.hasCartesianSeries && Sb(g, function (a) {
						a.render()
					}), d.dest = "&#104;&#116;&#116;&#112;&#58;&#47;&#47;&#119;&#119;&#119;&#46;&#115;&#104;&#105;&#101;&#108;&#100;&#117;&#105;&#46;&#99;&#111;&#109;", f.seriesGroup || (f.seriesGroup = h.g().attr({
						zIndex: 3
					}).add()), Sb(f.dataSeries, function (a) {
						a.translate(), a.setTooltipPoints(), a.render()
					}), j && j.items && Sb(j.items, function (a) {
						var b = gb(j.style, a.style),
							c = jb(b.left) + f.plotLeft,
							d = jb(b.top) + f.plotTop + 12;
						delete b.left, delete b.top, h.text(a.html, c, d).attr({
							zIndex: 2
						}).css(b).add()
					}), d && !f.dsisf) {
					var k, l, m, n = function (b) {
							return a("<div/>").html(b).text()
						},
						o = b.guid();
					if (ab) {
						var p = h.createElement("filter").attr({
								id: o,
								height: "120%"
							}),
							q = (h.createElement("feGaussianBlur").attr({
								"in": "SourceAlpha",
								stdDeviation: 3
							}).add(p), h.createElement("feComponentTransfer"));
						h.createElement("feFuncA").attr({
							type: "linear",
							slope: "0.2"
						}).add(q), q.add(p);
						var r = h.createElement("feMerge");
						h.createElement("feMergeNode").add(r), h.createElement("feMergeNode").attr({
							"in": "SourceGraphic"
						}).add(r), r.add(p), p.add(h.defs)
					}
					for (c = n(d.dest), !d.isr && f.chartWidth <= 400 && (d.text = n("&#68;&#101;&#109;&#111;")), d.text = n(d.text), k = [{
							align: "left",
							verticalAlign: "top",
							x: f.plotLeft + 5,
							y: f.plotTop + 20
						}, {
							align: "right",
							verticalAlign: "top",
							x: -1 * (f.chartWidth - (f.plotLeft + f.plotWidth) + 5),
							y: f.plotTop + 20
						}, {
							align: "left",
							verticalAlign: "top",
							x: f.plotLeft + 5,
							y: f.plotTop + f.plotHeight - 5
						}, {
							align: "right",
							verticalAlign: "top",
							x: -1 * (f.chartWidth - (f.plotLeft + f.plotWidth) + 5) + (d.isr ? 5 : 0),
							y: f.plotTop + f.plotHeight - 5
						}], m = function () {
							c && (location.href = c)
						}, l = 0; l < k.length; l++) d.isr && 3 != l || (d.isr && f.chartWidth <= 400 && (d.style.fontSize = "13px"), h.text(d.text, 0, 0).on(Ta, m).attr({
						align: k[l].align,
						zIndex: 8,
						filter: void 0
					}).css(d.style).add().align(k[l]));
					f.dsisf = !0
				}
				f.hasRendered = !0
			},
			destroy: function () {
				var a, b, c, d = this,
					e = Qb[d.guid],
					f = e.axes,
					g = e.dataSeries,
					h = e.container,
					i = h && h.parentNode;
				for ($b(d, "destroy"), Yb(d), a = f.length; a--;) f[a] = f[a].destroy();
				for (a = g.length; a--;) g[a] = g[a].destroy();
				for (b in e) e.hasOwnProperty(b) && (c = e[b], c && typeof c.destroy === La && c.destroy());
				h && (h.innerHTML = "", Yb(h), i && v(h));
				for (a in e) e.hasOwnProperty(a) && delete e[a];
				delete Qb[d.guid]
			}
		}),
		mc = {
			_updateTicks: function () {
				var a = this,
					b = Qb[a.guid];
				a.options.matchTicks !== !1 && Sb(b.axes, function (a) {
					a._updateTicks()
				}), b.maxTicks = null
			},
			_shiftRendering: function (a) {
				var b = this,
					c = Qb[b.guid],
					d = b.element,
					e = c.renderToClone;
				c.container;
				a ? e && (e.remove(), delete c.renderToClone) : e = c.renderToClone = d.clone().css({
					position: Bb,
					top: "-9999px",
					display: "block"
				}).appendTo(za.body)
			},
			_renderBox: function () {
				var a, b, c = this,
					d = Qb[c.guid],
					e = c.options,
					f = d.renderer,
					g = d.chartWidth,
					h = d.chartHeight,
					i = d.chartBackground,
					j = d.plotBackground,
					k = d.plotBorder,
					l = d.plotBGImage,
					m = e.borderWidth || 0,
					n = e.backgroundColor,
					o = e.chartAreaBackgroundColor,
					p = e.chartAreaBackgroundImage,
					q = e.chartAreaBorderWidth || 0,
					r = d.plotLeft,
					s = d.plotTop,
					t = d.plotWidth,
					u = d.plotHeight,
					v = d.chartAreaBox,
					w = d.clipRect,
					x = d.clipBox;
				a = m + (e.shadow ? 8 : 0), (m || n) && (i ? i.animate(i.crisp(null, null, null, g - a, h - a)) : (b = {
					fill: n || Ab
				}, m && (b.stroke = e.borderColor, b["stroke-width"] = m), d.chartBackground = f.rect(a / 2, a / 2, g - a, h - a, e.borderRadius, m).attr(b).add().shadow(e.shadow))), o && (j ? j.animate(v) : d.plotBackground = f.rect(r, s, t, u, 0).attr({
					fill: o
				}).add().shadow(e.chartAreaShadow)), p && (l ? l.animate(v) : d.plotBGImage = f.image(p, r, s, t, u).add()), w ? w.animate({
					width: x.width,
					height: x.height
				}) : d.clipRect = f.clipRect(x), q && (k ? k.animate(k.crisp(null, r, s, t, u)) : d.plotBorder = f.rect(r, s, t, u, 0, q).attr({
					stroke: e.chartAreaBorderColor,
					"stroke-width": q,
					zIndex: 1
				}).add()), d.isDirtyBox = !1
			},
			_initRender: function () {
				var a, b = this,
					d = Qb[b.guid],
					e = b.options,
					f = d.callback,
					g = b.element,
					h = "onreadystatechange",
					i = "complete";
				return (!ab && c == c.top && za.readyState !== i || cb && !c.canvg) && !cb ? void za.attachEvent(h, b._onDocReady = function () {
					za.readyState === i && (za.detachEvent(h, b._onDocReady), mc._initRender.call(b), b._onDocReady = null)
				}) : (b._wrapper(), g.addClass("shield-chart"), $b(b, "init"), mc._marginValues.call(b), mc._saveSize.call(b), b._layout(), b._axes(), Sb(e.dataSeries || [], function (a) {
					b._series(a)
				}), d.tracker = new T(b, e), b._render(), d.renderer.draw(), f && f.apply(b, [b]), Sb(nc, function (a) {
					a.apply(b, [b])
				}), mc._shiftRendering.call(b, !0), e.enableAutoFit !== !1 && (b._eafFunc = function (f) {
					var h = e.width || g.width(),
						i = e.height || g.height(),
						j = f ? f.target : c;
					h && i && (j === c || j === za) && (h === d.containerWidth && i === d.containerHeight || (clearTimeout(a), d.reflowTimeout = a = setTimeout(function () {
						d.container && mc._resize.call(b, h, i, !1)
					}, 100)), d.containerWidth = h, d.containerHeight = i)
				}, Xb(c, Sa, b._eafFunc), Xb(b, "destroy", function () {
					Yb(c, Sa, b._eafFunc), b._eafFunc = null
				})), void b.trigger("load"))
			},
			_selected: function () {
				var a = [];
				return Sb(Qb[this.guid].dataSeries, function (b) {
					a = a.concat(Tb(b.points, function (a) {
						return a.selected
					}))
				}), a
			},
			_marginValues: function () {
				var a = this,
					b = Qb[a.guid],
					c = a.options,
					d = c.chartAreaPaddingTop,
					e = c.chartAreaPaddingRight,
					f = c.chartAreaPaddingBottom,
					g = c.chartAreaPaddingLeft;
				b.plotTop = i(b.optionsMarginTop, d), b.chartMarginRight = i(b.optionsMarginRight, e), b.chartMarginBottom = i(b.optionsMarginBottom, f), b.plotLeft = i(b.optionsMarginLeft, g), b.axisOffset = [0, 0, 0, 0]
			},
			_resize: function (a, b, c) {
				var d, e, f, g, h = this,
					i = Qb[h.guid],
					k = i.title,
					l = i.subtitle;
				i.isResizing += 1, g = function () {
					h && $b(h, "endResize", null, function () {
						i.isResizing -= 1
					})
				}, x(c, h), i.oldChartHeight = i.chartHeight, i.oldChartWidth = i.chartWidth, qb(a) && (i.chartWidth = d = Ba(a)), qb(b) && (i.chartHeight = e = Ba(b)), j(i.container, {
					width: d + xb,
					height: e + xb
				}), i.renderer.setSize(d, e, c), i.plotWidth = d - i.plotLeft - i.chartMarginRight, i.plotHeight = e - i.plotTop - i.chartMarginBottom, i.maxTicks = null, Sb(i.axes, function (a) {
					a.isDirty = !0, a._scale()
				}), Sb(i.dataSeries, function (a) {
					a.isDirty = !0
				}), i.isDirtyLegend = !0, i.isDirtyBox = !0, h._spacing(), f = i.spacingBox, k && k.align(null, null, f), l && l.align(null, null, f), h.redraw(c), i.oldChartHeight = null, $b(h, Sa), ia === !1 ? g() : setTimeout(g, ia && ia.duration || 500)
			},
			_saveSize: function () {
				var a, b, c, d, e, f = this,
					g = Qb[f.guid],
					h = g.isInverted,
					i = g.chartWidth,
					j = g.chartHeight,
					k = f.options,
					l = k.chartAreaPaddingTop,
					m = k.chartAreaPaddingRight,
					n = k.chartAreaPaddingBottom,
					o = k.chartAreaPaddingLeft;
				g.plotLeft = a = Ba(g.plotLeft), g.plotTop = b = Ba(g.plotTop), g.plotWidth = c = Ba(i - a - g.chartMarginRight), g.plotHeight = d = Ba(j - b - g.chartMarginBottom), g.plotSizeX = h ? d : c, g.plotSizeY = h ? c : d, g.chartAreaBorderWidth = e = k.chartAreaBorderWidth || 0, g.spacingBox = {
					x: o,
					y: l,
					width: i - o - m,
					height: j - l - n
				}, g.chartAreaBox = {
					x: a,
					y: b,
					width: c,
					height: d
				}, g.clipBox = {
					x: e / 2,
					y: e / 2,
					width: g.plotSizeX - e,
					height: g.plotSizeY - e
				}, Sb(g.axes, function (a) {
					a._dimensions(), a._arrange()
				})
			},
			setTitle: function (a, b) {
				var c, d, e = this,
					f = Qb[e.guid],
					g = e.options;
				f.chartTitleOptions = c = Wb(g.primaryHeader, a), f.chartSubtitleOptions = d = Wb(g.secondaryHeader, b), Sb([
					["title", a, c],
					["subtitle", b, d]
				], function (a) {
					var b = a[0],
						c = f[b],
						d = a[1],
						e = a[2];
					c && d && (f[b] = c = c.destroy()), e && e.text && !c && (f[b] = f.renderer.text(e.text, 0, 0, e.htmlOutput).attr({
						align: e.align,
						zIndex: e.zIndex || 4
					}).css(e.style).add().align(e, !1, f.spacingBox))
				})
			}
		},
		nc = [];
	lc.defaults = ha, lc.themes = {
			"default": {}
		}, b.ui.plugin("Chart", lc),
		function () {
			function c(a) {
				return {
					id: a.id,
					name: a.pointName,
					x: a.x,
					y: a.y
				}
			}

			function d(a) {
				return {
					seriesType: a.seriesType,
					collectionAlias: a.collectionAlias,
					color: a.color,
					axisX: a.axisX ? e(a.axisX) : null,
					axisY: a.axisY ? e(a.axisY) : null,
					id: a.options.id,
					points: Vb(a.points, function (a) {
						return c(a)
					})
				}
			}

			function e(a) {
				return {
					type: a.xOrY,
					values: a.categoricalValues,
					min: a.min,
					max: a.max
				}
			}

			function f(g) {
				if (lb(g) || mb(g)) {
					var h = lb(g) ? {} : [];
					for (var i in g)
						if (Object.prototype.hasOwnProperty.call(g, i)) {
							var j = g[i];
							j && j instanceof oc ? h[i] = c(j) : j && (j instanceof pc || "dataSeries" === i) ? h[i] = d(j) : j && j instanceof P ? h[i] = e(j) : j && b.is.event(j) ? h[i] = a.Event(j) : j && (j instanceof a.Event || "domEvent" === i) ? h[i] = j : "target" == i || "srcElement" == i ? h[i] = j : h[i] = f(j)
						}
					return h
				}
				return g
			}
			var g = lc.prototype.trigger;
			lc.prototype.trigger = function (a, b, c) {
				var d = this,
					e = f(b),
					h = g.call(d, a, e);
				return typeof c !== La || h.isDefaultPrevented() || c.call(d, b), h
			}
		}();
	var oc = function () {};
	oc.prototype = {
		init: function (a, b, c) {
			var d, e = this,
				f = a.chart,
				g = Qb[f.guid],
				h = g.counters;
			return e.dataSeries = a, e.setOptions(b, c), e.pointAttr = {}, a.options.separateColors && (d = f.options.seriesPalette, e.color = e.color || d[h.color++], h.wrapColor(d.length)), g.pointCount++, e
		},
		setOptions: function (a, b) {
			var c = this,
				e = c.dataSeries,
				f = typeof a;
			c.config = a, "number" === f || null === a ? c.y = a : "number" == typeof a[0] ? (c.x = a[0], c.y = a[1]) : "object" === f && "number" != typeof a.length ? (gb(c, a), c.options = a, a.dataPointText && (e._hasPointLabels = !0), a.pointMark && (e._hasPointMarkers = !0)) : "string" == typeof a[0] && (c.collectionAlias = a[0], c.y = a[1]), c.x === d && (c.x = b === d ? e.autoIncrement() : b)
		},
		destroy: function () {
			if (!this._destroyed) {
				var a, b = this,
					c = b.dataSeries,
					d = Qb[c.chart.guid],
					e = d.hoverPoints;
				d.pointCount--, e && (b.setState(), g(e, b), e.length || (d.hoverPoints = null)), b === d.hoverPoint && b._mouseOut(), (b.graphic || b.dataLabel) && (Yb(b), _.call(b)), b.legendItem && W.call(d.chartLegend, b);
				for (a in b) b.hasOwnProperty(a) && (b[a] = null);
				b._destroyed = !0
			}
		},
		_selected: function (a, b) {
			var c = this,
				d = c.dataSeries,
				e = d.chart;
			a = i(a, !c.selected), c.trigger(a ? "pointSelect" : "pointDeselect", {
				accumulate: b
			}, function () {
				c._destroyed || (c.selected = a, c.setState(a ? Gb : Eb), b || Sb(mc._selected.call(e), function (a) {
					a.selected && a !== c && (a.selected = !1, a.setState(Eb), a.trigger("pointDeselect"))
				}))
			})
		},
		_mouseOver: function (a) {
			var b = this,
				c = b.dataSeries,
				d = Qb[c.chart.guid],
				e = d.tooltip,
				f = d.hoverPoint;
			f && f !== b && f._mouseOut(a), b.trigger("seriesMouseOver", a), !e || e.chartBound && !c.noSharedTooltip || e.refresh(b), b.setState(Fb), d.hoverPoint = b
		},
		_mouseOut: function (a) {
			var b = Qb[this.dataSeries.chart.guid],
				c = b.hoverPoints;
			c && hb(this, c) !== -1 || (this.trigger("seriesMouseOut", a), this.setState(), b.hoverPoint = null)
		},
		trigger: function (a, b, c) {
			var d = this,
				e = d.dataSeries,
				f = e.options;
			"seriesClick" === a && f.enablePointSelection && (c = function (a) {
				d._selected(null, f.allowMultiPointSelection !== !1 && (b.ctrlKey || b.metaKey || b.shiftKey))
			}), $b(d, a, {
				domEvent: b,
				dataSeries: e
			}, function () {
				e.chart.trigger(a, {
					domEvent: b,
					point: d,
					dataSeries: e
				}, c)
			})
		},
		setState: function (a) {
			var b, c = this,
				d = c.plotX,
				e = c.plotY,
				f = c.dataSeries,
				g = f.options.activeSettings,
				h = cc[f.seriesType].pointMark && f.options.pointMark,
				i = h && !h.enabled,
				j = h && h.activeSettings[a],
				k = j && j.enabled === !1,
				l = f.stateMarkerGraphic,
				m = f.chart,
				n = Qb[m.guid],
				o = c.pointAttr;
			a = a || Eb, a === c.state || c.selected && a !== Gb || g[a] && g[a].enabled === !1 || a && (k || i && !j.enabled) || (c.graphic ? (b = h && c.graphic.symbolName && o[a].r, c.graphic.attr(Wb(o[a], b ? {
				x: d - b,
				y: e - b,
				width: 2 * b,
				height: 2 * b
			} : {}))) : (a && j && (b = j.drawRadius, l ? l.attr({
				x: d - b,
				y: e - b
			}) : f.stateMarkerGraphic = l = n.renderer.symbol(f.symbol, d - b, e - b, 2 * b, 2 * b).attr(o[a]).add(f.markerGroup)), l && l[a && $(m, d, e) ? "show" : "hide"]()), c.state = a)
		}
	};
	var pc = function () {};
	pc.prototype = {
		isCartesian: !0,
		seriesType: "line",
		pointClass: oc,
		sorted: !0,
		pointAttrToOptions: {
			stroke: "drawColor",
			"stroke-width": "drawWidth",
			fill: "innerColor",
			r: "drawRadius"
		},
		init: function (a, b) {
			var c, d, e = this,
				f = Qb[a.guid];
			e.chart = a, e.options = b = e.setOptions(b), e.bindAxes(), gb(e, {
				collectionAlias: b.collectionAlias,
				state: Eb,
				pointAttr: {},
				visible: b.visible !== !1,
				selected: b.selected === !0
			}), cb && (b.applyAnimation = !1), d = b.events;
			for (c in d) d.hasOwnProperty(c) && Xb(e, c, d[c]);
			(d && d.click || b.point && b.point.events && b.point.events.click || b.enablePointSelection) && (f.runTrackerClick = !0), e.getColor(), e.getSymbol(), e.setItemSource(b.data, !1), e.isCartesian && (f.hasCartesianSeries = !0), f.dataSeries.push(e), r(f.dataSeries, function (a, b) {
				return (a.options.index || 0) - (b.options.index || 0)
			}), Sb(f.dataSeries, function (a, b) {
				a.index = b, a.collectionAlias = a.collectionAlias || "Series " + (b + 1)
			})
		},
		bindAxes: function () {
			var a, b = this,
				c = b.options,
				e = Qb[b.chart.guid];
			b.isCartesian && Sb(["axisX", "axisY"], function (f) {
				Sb(e[f], function (e) {
					a = e.options, (c[f] === a.index || c[f] === d && 0 === a.index) && (e.dataSeries.push(b), b[f] = e, e.isDirty = !0)
				})
			})
		},
		autoIncrement: function () {
			var a = this,
				b = a.options,
				c = a.xIncrement;
			return c = i(c, b.dataStart, 0), a.dataStep = i(a.dataStep, b.dataStep, 1), a.xIncrement = c + a.dataStep, c
		},
		getSegments: function () {
			var a, b = this,
				c = -1,
				d = [],
				e = b.points,
				f = e.length,
				g = b.options.drawNullValues;
			if (f)
				if (/bar/.test(b.seriesType) && g)
					for (a = 0; a < f; a++) d.push(e[a]);
				else if (g) {
				for (a = f; a--;) null === e[a].y && e.splice(a, 1);
				e.length && (d = [e])
			} else
				for (a = 0; a < f; a++) null === e[a].y ? (a > c + 1 && d.push(e.slice(c + 1, a)), c = a) : a === f - 1 && d.push(e.slice(c + 1, a + 1));
			b.segments = d
		},
		setOptions: function (a) {
			var b, c = this.chart,
				d = c.options,
				e = d.seriesSettings,
				f = e[this.seriesType],
				g = a.data;
			return a.data = null, b = Wb(f, e.dataSeries, a), b.data = a.data = g, this.tooltipSettings = Wb(d.tooltipSettings, b.tooltipSettings, c.initialOptions.tooltipSettings), null === f.pointMark && delete b.pointMark, b
		},
		getColor: function () {
			var a = this,
				b = a.options,
				c = a.chart.options.seriesPalette,
				d = Qb[a.chart.guid].counters;
			a.color = b.color || !b.separateColors && c[d.color++] || "gray", d.wrapColor(c.length)
		},
		getSymbol: function () {
			var a = this,
				b = a.options.pointMark,
				c = a.chart,
				d = c.options.symbols,
				e = Qb[c.guid].counters;
			a.symbol = b.symbol || d[e.symbol++], /^url/.test(a.symbol) && (b.drawRadius = 0), e.wrapSymbol(d.length)
		},
		drawLegendSymbol: function (a, b) {
			var c = this.options,
				d = (c.pointMark, a.options),
				e = d.legendItemSettings,
				f = d.checkMarkSettings,
				g = f.coordinates,
				h = 5,
				j = d.symbolWidthINTERNAL,
				k = Qb[this.chart.guid].renderer,
				l = b.legendGroup,
				m = a.baseline;
			b.legendSymbol = k.symbol("square", j / 2 - h, m - 4 - h, 2 * h, 2 * h).add(l), f && f.enabled && (b.checkMark = k.symbol(f.shape, j / 2 - h + i(g.x, 0), m - 4 - h + i(g.y, 0), qb(g.width) ? g.width : 2 * h, qb(g.height) ? g.height : 2 * h).add(l).attr({
				"stroke-width": f.width
			})), e && e.elementStyle && e.elementStyle.cursor && (b.legendSymbol.css({
				cursor: e.elementStyle.cursor
			}), b.checkMark && b.checkMark.css({
				cursor: e.elementStyle.cursor
			}))
		},
		addPointINTERNAL: function (a, b, c, d) {
			var e, f = this,
				g = f.data,
				h = f.graph,
				j = f.area,
				k = f.chart,
				l = f.xData,
				m = f.yData,
				n = h && h.shift || 0,
				o = f.options.data,
				p = f.pointClass.prototype;
			x(d, k), h && c && (h.shift = n + 1), j && (c && (j.shift = n + 1), j.isArea = !0), b = i(b, !0), e = {
				dataSeries: f
			}, p.setOptions.apply(e, [a]), l.push(e.x), m.push(p.toArray ? p.toArray.call(e) : e.y), o.push(a), c && (g[0] && g[0].remove ? aa.call(g[0], !1) : (g.shift(), l.shift(), m.shift(), o.shift())), f.getAttribs(), f.isDirty = !0, f.isDirtyData = !0, b && k.redraw()
		},
		setItemSource: function (a, b) {
			var c, d = this,
				e = d.points,
				f = d.options,
				g = d.initialColor,
				h = d.chart,
				j = Qb[h.guid],
				k = null,
				l = d.axisX,
				m = d.pointClass.prototype;
			d.xIncrement = null, d.pointRange = l && l.categoricalValues ? 1 : f.pointRange, qb(g) && (j.counters.color = g);
			var n, o = [],
				p = [],
				q = a ? a.length : [],
				r = 1e4,
				s = d.pointArrayMap,
				t = s && s.length;
			if (q > r) {
				for (c = 0; null === k && c < q;) k = a[c], c++;
				if (nb(k)) {
					var u = i(f.dataStart, 0),
						v = i(f.dataStep, 1);
					for (c = 0; c < q; c++) o[c] = u, p[c] = a[c], u += v;
					d.xIncrement = u
				} else if (mb(k))
					if (t)
						for (c = 0; c < q; c++) n = a[c],
							o[c] = n[0], p[c] = ba.call(n, 1, t + 1);
					else
						for (c = 0; c < q; c++) n = a[c], o[c] = n[0], p[c] = n[1]
			} else
				for (c = 0; c < q; c++) n = {
					dataSeries: d
				}, m.setOptions.apply(n, [a[c]]), o[c] = n.x, p[c] = m.toArray ? m.toArray.call(n) : n.y;
			if (kb(p[0])) return void ib("Data cannot be a string", 1);
			for (d.data = [], d.options.data = a, d.xData = o, d.yData = p, c = e && e.length || 0; c--;) e[c] && e[c].destroy && e[c].destroy();
			l && (l.zoomMin = l.customZoomMin), d.isDirty = d.isDirtyData = j.isDirtyBox = !0, i(b, !0) && h.redraw(!1)
		},
		removeSeries: function (a, b) {
			var c = this,
				d = c.chart,
				e = Qb[d.guid];
			a = i(a, !0), c.isRemoving || (c.isRemoving = !0, c.destroy(), e.isDirtyLegend = e.isDirtyBox = !0, a && d.redraw(b)), c.isRemoving = !1
		},
		processData: function (a) {
			var b, c, e, f, g = this,
				h = g.xData,
				i = g.yData,
				j = h.length,
				k = 0,
				l = j,
				m = g.axisX,
				n = g.options,
				o = n.pointsLimit,
				p = g.isCartesian;
			if (p && !g.isDirty && !m.isDirty && !g.axisY.isDirty && !a) return !1;
			if (p && g.sorted && (!o || j > o || g.forceCrop)) {
				var q = M.call(m),
					r = q.min,
					s = q.max;
				if (h[j - 1] < r || h[0] > s) h = [], i = [];
				else if (h[0] < r || h[j - 1] > s) {
					for (f = 0; f < j; f++)
						if (h[f] >= r) {
							k = Ea(0, f - 1);
							break
						}
					for (; f < j; f++)
						if (h[f] > s) {
							l = f + 1;
							break
						}
					h = h.slice(k, l), i = i.slice(k, l), b = !0
				}
			}
			for (f = h.length - 1; f > 0; f--) c = h[f] - h[f - 1], c > 0 && (e === d || c < e) && (e = c);
			g.cropped = b, g.cropStart = k, g.processedXData = h, g.processedYData = i, null === n.pointRange && (g.pointRange = e || 1), g.closestPointRange = e
		},
		generatePoints: function () {
			var a, b, c, e, f = this,
				g = f.options,
				h = g.data,
				i = f.data,
				j = f.processedXData,
				k = f.processedYData,
				l = f.pointClass,
				m = j.length,
				n = f.cropStart || 0,
				o = f.hasGroupedData,
				p = [];
			if (!i && !o) {
				var q = [];
				q.length = h.length, i = f.data = q
			}
			for (e = 0; e < m; e++) b = n + e, o ? p[e] = (new l).init(f, [j[e]].concat(rb(k[e]))) : (i[b] ? c = i[b] : h[b] !== d && (i[b] = c = (new l).init(f, h[b], j[e])), p[e] = c);
			if (i && (m !== (a = i.length) || o))
				for (e = 0; e < a; e++) e !== n || o || (e += m), i[e] && (_.call(i[e]), i[e].plotX = d);
			f.data = i, f.points = p
		},
		translate: function () {
			this.processedXData || this.processData(), this.generatePoints();
			for (var a, b = this, c = b.chart, e = Qb[c.guid], f = b.options, g = f.stackMode, h = b.axisX, j = h.categoricalValues, k = b.axisY, l = b.points, m = l.length, n = !!b.modifyValue, o = k.dataSeries, p = o.length, q = "between" === f.positioningMethod, r = f.drawNullValues, s = /bar/i.test(b.seriesType); p--;)
				if (o[p].visible) {
					o[p] === b && (a = !0);
					break
				}
			for (p = 0; p < m; p++) {
				var t, u, v = l[p],
					w = v.x,
					x = pb(v.y) && s && r ? 0 : v.y,
					y = v.low,
					z = k.stacks[(x < f.baseValue ? "-" : "") + b.stackKey];
				v.plotX = h.translate(w, 0, 0, 0, 1, q), g && b.visible && z && z[w] && (t = z[w], u = t.total, t.cum = y = t.cum - x, x = y + x, a && (y = i(f.baseValue, k.min)), k.isLog && y <= 0 && (y = null), "percent" === g && (y = u ? 100 * y / u : 0, x = u ? 100 * x / u : 0), v.percentage = u ? 100 * v.y / u : 0, v.total = v.stackTotal = u, v.stackY = x), v.yBottom = qb(y) ? k.translate(y, 0, 1, 0, 1) : null, n && (x = b.modifyValue(x, v)), v.plotY = "number" == typeof x ? Ba(10 * k.translate(x, 0, 1, 0, 1)) / 10 : d, v.clientX = e.isInverted ? e.plotHeight - v.plotX : v.plotX, v.pointName === d && (j && j[p] !== d ? v.pointName = j[p] : v.pointName = v.x)
			}
			b.getSegments()
		},
		setTooltipPoints: function (a) {
			var b, c, d, e, f, g = this,
				h = [],
				i = g.axisX,
				j = i ? i.tooltipLen || i.len : Qb[g.chart.guid].plotSizeX,
				k = i && i.tooltipPosName || "plotX",
				l = [];
			if (g.options.mouseInteractions !== !1) {
				for (a && (g.tooltipPoints = null), Sb(g.segments || g.points, function (a) {
						h = h.concat(a)
					}), i && i.inverseOrder && (h = h.reverse()), b = h.length, f = 0; f < b; f++)
					for (e = h[f], c = h[f - 1] ? d + 1 : 0, d = h[f + 1] ? Ea(0, Ca((e[k] + (h[f + 1] ? h[f + 1][k] : j)) / 2)) : j; c >= 0 && c <= d;) l[c++] = e;
				g.tooltipPoints = l
			}
		},
		_mouseOver: function (a) {
			var b = this,
				c = Qb[b.chart.guid],
				d = c.hoverSeries;
			d && d !== b && d._mouseOut(a), b.setState(Fb), c.cachedHoverSeries = b, c.hoverSeries = b
		},
		_mouseOut: function (a) {
			var b = this,
				c = b.options,
				d = Qb[b.chart.guid],
				e = d.tooltip,
				f = d.hoverPoint;
			f && f._mouseOut(a), !e || c.completeSeriesTrace || e.chartBound || e.hide(), b.setState(), d.hoverSeries = null
		},
		animate: function (a) {
			var b, c, d, e = this,
				f = Qb[e.chart.guid],
				g = f.renderer,
				h = e.options.applyAnimation,
				i = f.clipBox,
				j = f.isInverted;
			h && !lb(h) && (h = cc[e.seriesType].applyAnimation), d = "_sharedClip" + h.duration + h.easing, a ? (b = f[d], c = f[d + "m"], b || (f[d] = b = g.clipRect(gb(i, {
				width: 0
			})), f[d + "m"] = c = g.clipRect(-99, j ? -f.plotLeft : -f.plotTop, 99, j ? f.chartWidth : f.chartHeight)), e.group.clip(b), e.markerGroup.clip(c), e.sharedClipKey = d) : (b = f[d], b && (b.animate({
				width: f.plotSizeX
			}, h), f[d + "m"].animate({
				width: f.plotSizeX + 99
			}, h)), e.animate = null, e.animationTimeout = setTimeout(function () {
				e.afterAnimate()
			}, h.duration))
		},
		afterAnimate: function () {
			var a = this,
				b = Qb[a.chart.guid],
				c = a.sharedClipKey,
				d = a.group;
			d && a.options.clip !== !1 && (d.clip(b.clipRect), a.markerGroup.clip()), setTimeout(function () {
				c && b[c] && (b[c] = b[c].destroy(), b[c + "m"] = b[c + "m"].destroy())
			}, 100)
		},
		drawPoints: function () {
			var a, b, c, e, f, g, h, j, k, l, m, n, o = this,
				p = o.points,
				q = o.chart,
				r = Qb[q.guid],
				s = o.options,
				t = s.pointMark,
				u = o.markerGroup;
			if (t.enabled || o._hasPointMarkers)
				for (e = p.length; e--;) f = p[e], b = f.plotX, c = f.plotY, k = f.graphic, l = f.pointMark || {}, m = t.enabled && l.enabled === d || l.enabled, n = $(q, b, c, r.isInverted), m && c !== d && !isNaN(c) ? (a = f.pointAttr[f.selected ? Gb : Eb], g = a.r, h = i(l.symbol, o.symbol), j = 0 === h.indexOf("url"), k ? k.attr({
					visibility: n ? ab ? "inherit" : ub : vb
				}).animate(gb({
					x: b - g,
					y: c - g
				}, k.symbolName ? {
					width: 2 * g,
					height: 2 * g
				} : {})) : n && (g > 0 || j) && (f.graphic = k = r.renderer.symbol(h, b - g, c - g, 2 * g, 2 * g).attr(a).add(u))) : k && (f.graphic = k.destroy())
		},
		convertAttribs: function (a, b, c, d) {
			var e, f, g = this.pointAttrToOptions,
				h = {};
			a = a || {}, b = b || {}, c = c || {}, d = d || {};
			for (e in g) g.hasOwnProperty(e) && (f = g[e], h[e] = i(a[f], b[e], c[e], d[e]));
			return h
		},
		getAttribs: function () {
			var a, b, c, d, e, f, g = this,
				h = cc[g.seriesType].pointMark ? g.options.pointMark : g.options,
				i = h.activeSettings,
				j = i[Fb],
				k = g.color,
				l = {
					stroke: k,
					fill: k
				},
				m = g.points || [],
				n = [],
				o = g.pointAttrToOptions;
			for (g.options.pointMark ? (j.drawRadius = j.drawRadius || h.drawRadius + 2, j.drawWidth = j.drawWidth || h.drawWidth + 1) : j.color = j.color || new ec(j.color || k).brighten(j.brightness).get(), n[Eb] = g.convertAttribs(h, l), Sb([Fb, Gb], function (a) {
					n[a] = g.convertAttribs(i[a], n[Eb])
				}), g.pointAttr = n, b = m.length; b--;) {
				if (c = m[b], h = c.options && c.options.pointMark || c.options, h && h.enabled === !1 && (h.drawRadius = 0), e = g.options.separateColors, c.options)
					for (f in o) o.hasOwnProperty(f) && qb(h[o[f]]) && (e = !0);
				e ? (h = h || {}, d = [], i = h.activeSettings || {}, a = i[Fb] = i[Fb] || {}, g.options.pointMark || (a.color = new ec(a.color || c.color).brighten(a.brightness || j.brightness).get()), d[Eb] = g.convertAttribs(gb({
					color: c.color
				}, h), n[Eb]), d[Fb] = g.convertAttribs(i[Fb], n[Fb], d[Eb]), d[Gb] = g.convertAttribs(i[Gb], n[Gb], d[Eb])) : d = gb(!0, {}, n), c.pointAttr = d
			}
		},
		destroy: function () {
			if (!this._destroyed) {
				var a, b, c, d, e, f, h = this,
					i = Qb[h.chart.guid],
					j = h.data || [];
				if (!h._destroyed) {
					for ($b(h, "destroy"), Yb(h), Sb(["axisX", "axisY"], function (a) {
							d = h[a], d && (g(d.dataSeries, h), d.isDirty = !0)
						}), h.legendItem && W.call(i.chartLegend, h), a = j.length; a--;) b = j[a], b && b.destroy && b.destroy();
					h.points = null, clearTimeout(h.animationTimeout);
					for (e in h) h.hasOwnProperty(e) && (f = h[e], (f instanceof z || hc && f instanceof hc) && (h[e] = f.destroy()));
					i.hoverSeries === h && (i.hoverSeries = null), g(i.dataSeries, h);
					for (c in h) h.hasOwnProperty(c) && delete h[c];
					h._destroyed = !0
				}
			}
		},
		drawDataLabels: function () {
			var a, c, e, f, g = this,
				h = g.options,
				j = h.dataPointText,
				k = g.points;
			(j.enabled || g._hasPointLabels) && (g.dlProcessOptions && g.dlProcessOptions(j), f = g.plotGroup("dataLabelsGroup", "data-axisTickText", g.visible ? ub : vb, 6), c = j, Sb(k, function (h) {
				var k, l, m, n, o = h.dataLabel,
					p = !0;
				if (a = h.options && h.options.dataPointText, k = c.enabled || a && a.enabled, o && !k) h.dataLabel = o.destroy();
				else if (k) {
					if (n = j.textAngle, j = Wb(c, a), e = kb(j.format) ? b.format(j.format, {
							point: h,
							chart: h.dataSeries.chart
						}) : j.format.call(null, h, h.dataSeries.chart), j.style.color = i(j.color, j.style.color, g.color, "black"), o) o.attr({
						text: e
					}), p = !1;
					else if (qb(e)) {
						l = {
							fill: j.backgroundColor,
							stroke: j.borderColor,
							"stroke-width": j.borderWidth,
							r: j.borderRadius || 0,
							textAngle: n,
							padding: j.padding,
							zIndex: 1
						};
						for (m in l) l.hasOwnProperty(m) && l[m] === d && delete l[m];
						o = h.dataLabel = Qb[g.chart.guid].renderer[n ? "text" : "label"](e, 0, -999, null, null, null, j.htmlOutput).attr(l).css(j.style).add(f).shadow(j.shadow)
					}
					o && g.alignDataLabel(h, o, j, null, p)
				}
			}))
		},
		alignDataLabel: function (a, b, c, d, e) {
			var f, g = this.chart,
				h = Qb[g.guid],
				j = h.isInverted,
				k = i(a.plotX, -999),
				l = i(a.plotY, -999),
				m = b.getBBox();
			d = gb({
				x: j ? h.plotWidth - l : k,
				y: Ba(j ? h.plotHeight - k : l),
				width: 0,
				height: 0
			}, d), gb(c, {
				width: m.width,
				height: m.height
			}), c.textAngle ? (f = {
				align: c.align,
				x: d.x + c.x + d.width / 2,
				y: d.y + c.y + d.height / 2
			}, b[e ? "attr" : "animate"](f)) : (b.align(c, null, d), f = b.alignAttr), b.attr({
				visibility: c.hideInvisible === !1 || $(g, f.x, f.y) || $(g, k, l, j) ? ab ? "inherit" : ub : vb
			})
		},
		getSegmentPath: function (a) {
			var b = this,
				c = [];
			return Sb(a, function (d, e) {
				if (b.getPointSpline) c.push.apply(c, b.getPointSpline(a, d, e));
				else {
					if (c.push(e ? yb : zb), e && b.options.step) {
						var f = a[e - 1];
						c.push(d.plotX, f.plotY)
					}
					c.push(d.plotX, d.plotY)
				}
			}), c
		},
		getGraphPath: function () {
			var a, b = this,
				c = [],
				d = [];
			return Sb(b.segments, function (e) {
				a = b.getSegmentPath(e), e.length > 1 ? c = c.concat(a) : d.push(e[0])
			}), b.singlePoints = d, b.graphPath = c, c
		},
		drawGraph: function () {
			var a, b = this,
				c = b.options,
				d = b.graph,
				e = b.group,
				f = c.drawColor || b.color,
				g = c.drawWidth,
				h = c.seriesDashStyle,
				i = b.getGraphPath();
			d ? (ac(d), d.animate({
				d: i
			})) : g && (a = {
				stroke: f,
				"stroke-width": g,
				zIndex: 1
			}, h && (a.dashstyle = h), b.graph = Qb[b.chart.guid].renderer.path(i).attr(a).add(e).shadow(c.shadow))
		},
		invertGroups: function () {
			function a() {
				var a = {
					width: b.axisY.len,
					height: b.axisX.len
				};
				Sb(["group", "trackerGroup", "markerGroup"], function (c) {
					b[c] && b[c].attr(a).invert()
				})
			}
			var b = this,
				c = b.chart;
			Xb(c, Sa, a), Xb(b, "destroy", function () {
				Yb(c, Sa, a)
			}), a(), b.invertGroups = a
		},
		plotGroup: function (a, b, c, d, e) {
			var f = this,
				g = f[a],
				h = Qb[f.chart.guid],
				i = f.axisX,
				j = f.axisY;
			return g || (f[a] = g = h.renderer.g().attr({
				visibility: c,
				zIndex: d || .1
			}).add(e)), g.translate(i ? i.left : h.plotLeft, j ? j.top : h.plotTop), g
		},
		render: function () {
			var a, b = this,
				c = Qb[b.chart.guid],
				d = b.options,
				e = d.applyAnimation,
				f = e && !!b.animate,
				g = b.visible ? ub : vb,
				h = d.zIndex,
				i = b.hasRendered,
				j = c.seriesGroup;
			a = b.plotGroup("group", "dataSeries", g, h, j), b.markerGroup = b.plotGroup("markerGroup", "markers", g, h, j), f && b.animate(!0), b.getAttribs(), a.isInverted = c.isInverted, b.drawGraph && b.drawGraph(), b.drawPoints(), b.drawDataLabels(), b.options.mouseInteractions !== !1 && b.drawTracker(), c.isInverted && b.invertGroups(), d.clip === !1 || b.sharedClipKey || i || (a.clip(c.clipRect), this.trackerGroup && this.trackerGroup.clip(c.clipRect)), f ? b.animate() : i || b.afterAnimate(), b.isDirty = b.isDirtyData = !1, b.hasRendered = !0
		},
		redraw: function () {
			var a = this,
				b = Qb[a.chart.guid],
				c = (a.isDirtyData, a.group);
			c && (b.isInverted && c.attr({
				width: b.plotWidth,
				height: b.plotHeight
			}), c.animate({
				translateX: a.axisX.left,
				translateY: a.axisY.top
			})), a.translate(), a.setTooltipPoints(!0), a.render()
		},
		setState: function (a) {
			var b = this,
				c = b.options,
				d = b.graph,
				e = c.activeSettings,
				f = c.drawWidth;
			if (a = a || Eb, b.state !== a) {
				if (b.state = a, e[a] && e[a].enabled === !1) return;
				a && (f = e[a].drawWidth || f + 1), d && !d.dashstyle && d.attr({
					"stroke-width": f
				}, a ? 0 : 500)
			}
		},
		toggle: function (a, b) {
			var c, e, f, g = this,
				h = g.chart,
				i = Qb[h.guid],
				j = g.legendItem,
				k = g.group,
				l = g.tracker,
				m = g.dataLabelsGroup,
				n = g.markerGroup,
				o = g.points,
				p = h.options.scaleAxesForHiddenSeries,
				q = g.visible;
			if (g.visible = a = a === d ? !q : a, c = a ? "show" : "hide", k && k[c](), n && n[c](), l) l[c]();
			else if (o)
				for (e = o.length; e--;) f = o[e], f.tracker && f.tracker[c]();
			m && m[c](), j && U.call(i.chartLegend, g, a), g.isDirty = !0, g.options.stackMode && Sb(i.dataSeries, function (a) {
				a.options.stackMode && a.visible && (a.isDirty = !0)
			}), p || (i.isDirtyBox = !0), b !== !1 && h.redraw(), h.trigger("seriesVisibilityChange", {
				dataSeries: g
			})
		},
		showDataSeries: function () {
			this.toggle(!0)
		},
		hideDataSeries: function () {
			this.toggle(!1)
		},
		drawTracker: function () {
			var a, b, c = this,
				d = c.options,
				e = d.areaInteractivity,
				f = [].concat(e ? c.areaPath : c.graphPath),
				g = f.length,
				h = c.chart,
				i = Qb[c.chart.guid],
				j = i.renderer,
				k = h.options.tooltipSettings.showDistance,
				l = c.tracker,
				m = d.cursor,
				n = m && {
					cursor: m
				},
				o = c.singlePoints,
				p = c.isCartesian && c.plotGroup("trackerGroup", null, ub, d.zIndex || 1, i.trackerGroup);
			if (g && !e)
				for (b = g + 1; b--;) f[b] === zb && f.splice(b + 1, 0, f[b + 1] - k, f[b + 2], yb), (b && f[b] === zb || b === g) && f.splice(b, 0, yb, f[b - 2] + k, f[b - 1]);
			for (b = 0; b < o.length; b++) a = o[b], f.push(zb, a.plotX - k, a.plotY, yb, a.plotX + k, a.plotY);
			l ? l.attr({
				d: f
			}) : c.tracker = j.path(f).attr({
				isTracker: !0,
				"stroke-linejoin": "bevel",
				visibility: c.visible ? ub : vb,
				stroke: Db,
				fill: e ? Db : Ab,
				"stroke-width": d.drawWidth + (e ? 0 : 2 * k)
			}).on(Ra, function (a) {
				i.hoverSeries !== c && (c._fromTOUCHSTART = 1, c._mouseOver(a))
			}).on(Ma, function (a) {
				if (i.hoverSeries !== c) {
					if (1 === c._fromTOUCHSTART) return void delete c._fromTOUCHSTART;
					c._mouseOver(a)
				}
			}).on(Na, function (a) {
				d.completeSeriesTrace || c._mouseOut(a)
			}).css(n).add(p)
		}
	};
	var qc = l(pc);
	Rb.line = qc;
	var rc = l(qc, {
		seriesType: "stepline"
	});
	Rb.stepline = rc, cc.stepline = Wb(cc.line, {
		step: "left"
	}), cc.area = Wb(dc, {
		baseValue: 0,
		drawWidth: 2,
		pointMark: {
			enabled: !1
		}
	});
	var sc = l(pc, {
		seriesType: "area",
		getSegmentPath: function (a) {
			var b, c = this,
				d = pc.prototype.getSegmentPath.call(c, a),
				e = [].concat(d),
				f = c.options,
				g = d.length;
			if (3 === g && e.push(yb, d[1], d[2]), f.stackMode && !c.closedStacks)
				for (b = a.length - 1; b >= 0; b--) b < a.length - 1 && f.step && e.push(a[b + 1].plotX, a[b].yBottom), e.push(a[b].plotX, a[b].yBottom);
			else c.closeSegment(e, a);
			return c.areaPath = c.areaPath.concat(e), d
		},
		closeSegment: function (a, b) {
			var c = N.call(this.axisY, this.options.baseValue);
			a.push(yb, b[b.length - 1].plotX, c, yb, b[0].plotX, c)
		},
		drawGraph: function () {
			var a = this;
			a.areaPath = [], pc.prototype.drawGraph.apply(a);
			var b = a.areaPath,
				c = a.options,
				d = a.area;
			d ? d.animate({
				d: b
			}) : a.area = Qb[a.chart.guid].renderer.path(b).attr({
				fill: i(c.innerColor, new ec(a.color).setOpacity(c.fillOpacity || .75).get()),
				zIndex: 0
			}).add(a.group)
		}
	});
	Rb.area = sc;
	var tc = l(sc, {
		seriesType: "steparea"
	});
	Rb.steparea = tc, cc.steparea = Wb(cc.area, {
		step: "left"
	}), cc.spline = Wb(dc);
	var uc = l(pc, {
		seriesType: "spline",
		getPointSpline: function (a, b, c) {
			var d, e, f, g, h, i = 1.5,
				j = i + 1,
				k = b.plotX,
				l = b.plotY,
				m = a[c - 1],
				n = a[c + 1];
			if (m && n) {
				var o, p = m.plotX,
					q = m.plotY,
					r = n.plotX,
					s = n.plotY;
				d = (i * k + p) / j, e = (i * l + q) / j, f = (i * k + r) / j, g = (i * l + s) / j, o = (g - e) * (f - k) / (f - d) + l - g, e += o, g += o, e > q && e > l ? (e = Ea(q, l), g = 2 * l - e) : e < q && e < l && (e = Fa(q, l), g = 2 * l - e), g > s && g > l ? (g = Ea(s, l), e = 2 * l - g) : g < s && g < l && (g = Fa(s, l), e = 2 * l - g), b.rightContX = f, b.rightContY = g
			}
			return c ? (h = ["C", m.rightContX || m.plotX, m.rightContY || m.plotY, d || k, e || l, k, l], m.rightContX = m.rightContY = null) : h = [zb, k, l], h
		}
	});
	Rb.spline = uc, cc.splinearea = Wb(cc.area);
	var vc = sc.prototype,
		wc = l(uc, {
			seriesType: "splinearea",
			closedStacks: !0,
			getSegmentPath: vc.getSegmentPath,
			closeSegment: vc.closeSegment,
			drawGraph: vc.drawGraph
		});
	Rb.splinearea = wc, cc.bar = Wb(dc, {
		borderColor: "#FFFFFF",
		borderWidth: 0,
		borderRadius: 0,
		groupPadding: .15,
		pointMark: null,
		barOffset: .1,
		minPointLength: 0,
		pointsLimit: 50,
		pointRange: null,
		activeSettings: {
			pointHoveredState: {
				brightness: .1,
				shadow: !1
			},
			pointSelectedState: {
				color: "#7AF4F4",
				shadow: !1
			}
		},
		dataPointText: {
			align: null,
			verticalAlign: null,
			y: null
		},
		baseValue: 0
	});
	var xc = l(pc, {
		seriesType: "bar",
		tooltipOutsidePlot: !0,
		pointAttrToOptions: {
			stroke: "borderColor",
			"stroke-width": "borderWidth",
			fill: "color",
			r: "borderRadius"
		},
		isInverted: !1,
		init: function () {
			pc.prototype.init.apply(this, arguments);
			var a = this,
				b = Qb[a.chart.guid];
			b.hasRendered && Sb(b.dataSeries, function (b) {
				b.seriesType === a.seriesType && (b.isDirty = !0)
			})
		},
		translate: function () {
			var a, b, c = this,
				e = Qb[c.chart.guid],
				f = c.enablePolarLayout,
				g = c.options,
				h = g.stackMode,
				j = g.borderWidth,
				k = 0,
				l = c.axisX,
				m = l.inverseOrder,
				n = {};
			pc.prototype.translate.apply(c), g.divideSeries === !1 ? k = 1 : Sb(e.dataSeries, function (e) {
				var f = e.options;
				e.seriesType === c.seriesType && e.visible && c.options.group === f.group && (f.stackMode ? (a = e.stackKey, n[a] === d && (n[a] = k++), b = n[a]) : f.divideSeries !== !1 && (b = k++), e.columnIndex = b)
			});
			var o = c.points,
				p = Ga(l.transA) * (l.ordinalSlope || g.pointRange || l.closestPointRange || 1),
				q = p * g.groupPadding,
				r = p - 2 * q,
				s = r / k,
				t = g.dataPointWidth,
				u = qb(t) ? (s - t) / 2 : s * g.barOffset,
				v = f ? u : jb(u),
				w = i(t, s - 2 * v),
				x = f ? w : jb(w),
				y = Da(Ea(x, 1 + 2 * j)),
				z = (m ? k - c.columnIndex : c.columnIndex) || 0,
				A = v + (q + z * s - p / 2) * (m ? -1 : 1),
				B = f ? A : jb(A),
				C = g.baseValue,
				D = c.translatedThreshold = N.call(c.axisY, C),
				E = i(g.minPointLength, 5);
			Sb(o, function (a) {
				var b, d = a.plotY,
					f = i(a.yBottom, D),
					g = a.plotX + B,
					k = Da(Fa(d, f)),
					l = Da(Ea(d, f) - k),
					m = c.axisY.stacks[(a.y < 0 ? "-" : "") + c.stackKey];
				h && c.visible && m && m[a.x] && m[a.x]._offset(B, y), Ga(l) < E && E && (l = E, k = Ga(k - D) > E ? f - E : D - (d <= D ? E : 0)), a.barX = g, a.dataPointWidth = x, a.shapeType = "rect", a.shapeArgs = b = e.renderer.Element.prototype.crisp.call(0, j, g, k, y, l), j % 2 && (b.y -= 1, b.height += 1), a.trackerArgs = Ga(l) < 3 && Wb(a.shapeArgs, {
					height: 6,
					y: k - 3
				})
			})
		},
		getSymbol: fb,
		drawGraph: fb,
		drawPoints: function () {
			var a, b = this,
				c = b.options,
				e = Qb[b.chart.guid].renderer;
			Sb(b.points, function (f) {
				var g = f.plotY,
					h = f.graphic;
				g === d || isNaN(g) || null === f.y ? h && (f.graphic = h.destroy()) : (a = f.shapeArgs, h ? (ac(h), h.animate(Wb(a))) : f.graphic = h = e[f.shapeType](a).attr(f.pointAttr[f.selected ? Gb : Eb]).add(b.group).shadow(c.shadow, null, c.stackMode && !c.borderRadius))
			})
		},
		drawTracker: function () {
			var a, b, c, e, f, g = this,
				i = Qb[g.chart.guid],
				j = i.renderer,
				k = +new Date,
				l = g.options,
				m = l.cursor,
				n = m && {
					cursor: m
				},
				o = g.isCartesian && g.plotGroup("trackerGroup", null, ub, l.zIndex || 1, i.trackerGroup);
			Sb(g.points, function (m) {
				b = m.tracker, a = m.trackerArgs || m.shapeArgs, e = m.plotY, f = !g.isCartesian || e !== d && !isNaN(e), delete a.strokeWidth, null !== m.y && f && (b ? b.attr(a) : m.tracker = j[m.shapeType](a).attr({
					isTracker: k,
					fill: Db,
					visibility: g.visible ? ub : vb
				}).on(Ra, function (a) {
					m._fromTOUCHSTART = 1, c = a.relatedTarget || a.fromElement, i.hoverSeries !== g && h(c, "isTracker") !== k && g._mouseOver(a), m._mouseOver(a)
				}).on(Ma, function (a) {
					return 1 === m._fromTOUCHSTART ? void delete m._fromTOUCHSTART : (c = a.relatedTarget || a.fromElement, i.hoverSeries !== g && h(c, "isTracker") !== k && g._mouseOver(a), void m._mouseOver(a))
				}).on(Na, function (a) {
					l.completeSeriesTrace || (c = a.relatedTarget || a.toElement, h(c, "isTracker") !== k && g._mouseOut(a))
				}).css(n).add(m.group || o))
			})
		},
		alignDataLabel: function (a, b, c, d, e) {
			var f = this,
				g = Qb[f.chart.guid],
				h = g.isInverted,
				j = a.below || a.plotY > (f.translatedThreshold || g.plotSizeY),
				k = f.options.stackMode || c.inside;
			a.shapeArgs && (d = Wb(a.shapeArgs), h && (d = {
				x: g.plotWidth - d.y - d.height,
				y: g.plotHeight - d.x - d.width,
				width: d.height,
				height: d.width
			}), k || (h ? (d.x += j ? 0 : d.width, d.width = 0) : (d.y += j ? d.height : 0, d.height = 0))), c.align = i(c.align, !h || k ? "center" : j ? "right" : "left"), c.verticalAlign = i(c.verticalAlign, h || k ? "middle" : j ? "top" : "bottom"), pc.prototype.alignDataLabel.call(f, a, b, c, d, e)
		},
		animate: function (a) {
			var b = this,
				c = b.points,
				d = b.options;
			a || (Sb(c, function (a) {
				var c = a.graphic,
					e = a.shapeArgs,
					f = b.axisY,
					g = d.baseValue;
				c && (c.attr({
					height: 0,
					y: qb(g) ? N.call(f, g) : f.translate(M.call(f).min, 0, 1, 0, 1)
				}), c.animate({
					height: e.height,
					y: e.y
				}, d.applyAnimation))
			}), b.animate = null)
		},
		remove: function () {
			var a = this,
				b = Qb[a.chart.guid];
			b.hasRendered && Sb(b.dataSeries, function (b) {
				b.seriesType === a.seriesType && (b.isDirty = !0)
			}), pc.prototype.remove.apply(a, arguments)
		}
	});
	Rb.bar = xc, cc.scatter = Wb(dc, {
		drawWidth: 0,
		activeSettings: {
			pointHoveredState: {
				drawWidth: 0
			}
		},
		tooltipSettings: {
			customHeaderText: "{point.pointName}",
			customPointText: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b>"
		}
	});
	var yc = l(pc, {
		seriesType: "scatter",
		sorted: !1,
		translate: function () {
			var a = this;
			pc.prototype.translate.apply(a), Sb(a.points, function (b) {
				b.shapeType = "circle", b.shapeArgs = {
					x: b.plotX,
					y: b.plotY,
					r: a.chart.options.tooltipSettings.showDistance
				}
			})
		},
		drawTracker: function () {
			for (var a, b = this, c = b.options.cursor, e = c && {
					cursor: c
				}, f = b.points, g = f.length; g--;) a = f[g].graphic, a && (a.element._i = g);
			b._hasTracking ? b._hasTracking = !0 : b.markerGroup.attr({
				isTracker: !0
			}).on(Ra, function (a) {
				b._fromTOUCHSTART = 1, b._mouseOver(a), a.target._i !== d && f[a.target._i]._mouseOver(a)
			}).on(Ma, function (a) {
				return 1 === b._fromTOUCHSTART ? void delete b._fromTOUCHSTART : (b._mouseOver(a), void(a.target._i !== d && f[a.target._i]._mouseOver(a)))
			}).on(Na, function (a) {
				b.options.completeSeriesTrace || b._mouseOut(a)
			}).css(e)
		}
	});
	Rb.scatter = yc, cc.bubble = Wb(cc.scatter, {
		pointMark: {
			drawWidth: 1,
			activeSettings: {
				pointHoveredState: {
					innerColor: null
				},
				pointSelectedState: {
					innerColor: null
				}
			}
		},
		tooltipSettings: {
			customHeaderText: "{point.pointName}",
			customPointText: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>size: <b>{point.size}</b>"
		}
	});
	var zc = l(yc, {
		seriesType: "bubble",
		translate: function () {
			var a, b, c, e, f, g = this,
				h = g.chart,
				i = Qb[h.guid],
				j = 10,
				k = Ea(10, jb(Fa(i.plotHeight, i.plotWidth) / 5)),
				l = k - j;
			yc.prototype.translate.apply(g), Sb(g.points, function (c) {
				c._rad = e = Aa.sqrt(c.size / Ja), (a === d || a > e) && (a = e), (b === d || b < e) && (b = e)
			}), c = b - a, a < j && (f = a, a = b = d, Sb(g.points, function (c) {
				c._rad = e = c._rad * j / f, (a === d || a > e) && (a = e), (b === d || b < e) && (b = e)
			}), c = b - a), c >= l && Sb(g.points, function (b) {
				b._rad = j + (b._rad - a) * l / c
			})
		},
		drawPoints: function () {
			var a = this;
			Sb(a.points, function (a) {
				Sb([Eb, Fb, Gb], function (b) {
					gb(a.pointAttr[b], {
						r: a._rad,
						fill: new ec(a.pointAttr[b].fill).setOpacity(b == Eb ? .75 : 1).get()
					})
				})
			}), pc.prototype.drawPoints.apply(a)
		}
	});
	Rb.bubble = zc, cc.pie = Wb(dc, {
		borderColor: "#FFFFFF",
		borderWidth: 0,
		center: ["50%", "50%"],
		separateColors: !0,
		dataPointText: {
			distance: 30,
			enabled: !0,
			format: function (a, b) {
				return b && b.options && b.options.axisX && b.options.axisX.categoricalValues && b.options.axisX.categoricalValues[a.x] !== d ? b.options.axisX.categoricalValues[a.x] : a.y
			}
		},
		legendType: Ua,
		pointMark: null,
		size: "75%",
		addToLegend: !1,
		slicedOffset: 10,
		activeSettings: {
			pointHoveredState: {
				brightness: .1,
				shadow: !1
			}
		},
		tooltipSettings: {
			customHeaderText: "{point.dataSeries.collectionAlias}",
			customPointText: function (a, b) {
				var c;
				return c = b && b.options && b.options.axisX && b.options.axisX.categoricalValues && b.options.axisX.categoricalValues[a.x] !== d ? b.options.axisX.categoricalValues[a.x] : a.pointName ? a.pointName : a.collectionAlias ? a.collectionAlias : a.dataSeries.collectionAlias, "<span>" + c + "</span>: " + a.y
			}
		}
	});
	var Ac = l(oc, {
			init: function () {
				oc.prototype.init.apply(this, arguments);
				var a, b = this;
				return gb(b, {
					visible: b.visible !== !1,
					collectionAlias: i(b.collectionAlias, "Sector")
				}), qb(b.selected) ? b.selected = b.sliced = !!b.selected : qb(b.sliced) && (b.selected = b.sliced = !!b.sliced), a = function () {
					ba.call(b)
				}, Xb(b, "pointSelect", a), Xb(b, "pointDeselect", a), b
			},
			toggle: function (a) {
				var b, c = this,
					e = c.dataSeries,
					f = e.chart,
					g = Qb[e.chart.guid],
					h = c.tracker,
					i = c.dataLabel,
					j = c.connector,
					k = c.shadowGroup;
				c.visible = a = a === d ? !c.visible : a, b = a ? "show" : "hide", c.group[b](), h && h[b](), i && i[b](), j && j[b](), k && k[b](), c.legendItem && U.call(g.chartLegend, c, a), !e.isDirty && e.options.ignoreHiddenPoint && (e.isDirty = !0, f.redraw())
			}
		}),
		Bc = {
			seriesType: "pie",
			isCartesian: !1,
			pointClass: Ac,
			pointAttrToOptions: {
				stroke: "borderColor",
				"stroke-width": "borderWidth",
				fill: "color"
			},
			getColor: function () {
				this.initialColor = Qb[this.chart.guid].counters.color
			},
			animate: function () {
				var a = this,
					b = a.points;
				Sb(b, function (b) {
					var c = b.graphic,
						d = b.shapeArgs,
						e = -Ja / 2;
					c && (c.attr({
						r: 0,
						start: e,
						end: e
					}), c.animate({
						r: d.r,
						start: d.start,
						end: d.end
					}, a.options.applyAnimation))
				}), a.animate = null
			},
			setItemSource: function (a, b) {
				var c = this;
				pc.prototype.setItemSource.call(c, a, !1), c.processData(), c.generatePoints(), i(b, !0) && c.chart.redraw()
			},
			getCenter: function () {
				var a, b = this.options,
					c = Qb[this.chart.guid],
					d = c.plotWidth,
					e = c.plotHeight,
					f = b.center.concat([b.size, b.innerSize || 0]),
					g = Fa(d, e);
				return Vb(f, function (b, c) {
					return a = /%$/.test(b), a ? [d, e, g, g][c] * jb(b) / 100 : b
				})
			},
			translate: function () {
				this.generatePoints();
				var a, b, c, d, e, f, g, h, i, j = 0,
					k = this,
					l = -.25,
					m = 1e3,
					n = k.options,
					o = n.slicedOffset,
					p = o + n.borderWidth,
					q = Qb[k.chart.guid],
					r = k.points,
					s = 2 * Ja,
					t = n.dataPointText.distance,
					u = n.ignoreHiddenPoint,
					v = r.length;
				for (k.center = a = k.getCenter(), k.getX = function (b, c) {
						return d = Aa.asin((b - a[1]) / (a[2] / 2 + t)), a[0] + (c ? -1 : 1) * (Ha(d) * (a[2] / 2 + t))
					}, h = 0; h < v; h++) i = r[h], j += u && !i.visible ? 0 : i.y;
				for (h = 0; h < v; h++) i = r[h], e = j ? i.y / j : 0, b = Ba(l * s * m) / m, u && !i.visible || (l += e), c = Ba(l * s * m) / m, i.shapeType = "arc", i.shapeArgs = {
					x: a[0],
					y: a[1],
					r: a[2] / 2,
					innerR: a[3] / 2,
					start: b,
					end: c
				}, d = (c + b) / 2, i.slicedTranslation = Vb([Ha(d) * o + q.plotLeft, Ia(d) * o + q.plotTop], Ba), f = Ha(d) * a[2] / 2, g = Ia(d) * a[2] / 2, i.tooltipPos = [a[0] + .7 * f, a[1] + .7 * g], i.labelPos = [a[0] + f + Ha(d) * t, a[1] + g + Ia(d) * t, a[0] + f + Ha(d) * p, a[1] + g + Ia(d) * p, a[0] + f, a[1] + g, t < 0 ? "center" : d < s / 4 ? "left" : "right", d], i.percentage = 100 * e, i.total = j;
				k.setTooltipPoints()
			},
			render: function () {
				var a = this;
				a.getAttribs(), a.drawPoints(), a.options.mouseInteractions !== !1 && a.drawTracker(), a.drawDataLabels(), a.options.applyAnimation && a.animate && a.animate(), a.isDirty = !1
			},
			drawPoints: function () {
				var a, b, c, d, e, f = this,
					g = Qb[f.chart.guid],
					h = g.renderer,
					i = f.options.shadow;
				Sb(f.points, function (j) {
					b = j.graphic, e = j.shapeArgs, c = j.group, d = j.shadowGroup, i && !d && (d = j.shadowGroup = h.g().attr({
						zIndex: 4
					}).add()), c || (c = j.group = h.g().attr({
						zIndex: 5
					}).add()), a = j.sliced ? j.slicedTranslation : [g.plotLeft, g.plotTop], c.translate(a[0], a[1]), d && d.translate(a[0], a[1]), b ? b.animate(e) : j.graphic = b = h.arc(e).setRadialReference(f.center).attr(gb(j.pointAttr[Eb], {
						"stroke-linejoin": "round"
					})).add(j.group).shadow(i, d), j.visible === !1 && j.toggle(!1)
				})
			},
			drawDataLabels: function () {
				var a, b, c, d, e, f, g, h, j, k, l, m, n = this,
					o = n.data,
					p = Qb[n.chart.guid],
					q = n.options.dataPointText,
					r = i(q.connectorPadding, 10),
					s = i(q.connectorWidth, 1),
					t = q.distance,
					u = n.center,
					v = u[2] / 2,
					w = u[1],
					x = t > 0,
					y = [
						[],
						[]
					],
					z = 2;
				if (q.enabled || n._hasPointLabels)
					for (pc.prototype.drawDataLabels.apply(n), Sb(o, function (a) {
							a.dataLabel && y[a.labelPos[7] < Ja / 2 ? 0 : 1].push(a)
						}), y[1].reverse(), l = function (a, b) {
							return b.y - a.y
						}, f = y[0][0] && y[0][0].dataLabel && (y[0][0].dataLabel.getBBox().height || 21); z--;) {
						var A, B, C, D = [],
							E = [],
							F = y[z],
							G = F.length;
						if (t > 0) {
							for (B = w - v - t; B <= w + v + t; B += f) D.push(B);
							if (A = D.length, G > A) {
								for (k = [].concat(F), k.sort(l), m = G; m--;) k[m].rank = m;
								for (m = G; m--;) F[m].rank >= A && F.splice(m, 1);
								G = F.length
							}
							for (m = 0; m < G; m++) {
								a = F[m], e = a.labelPos;
								var H, I, J = 9999;
								for (I = 0; I < A; I++) H = Ga(D[I] - e[1]), H < J && (J = H, C = I);
								if (C < m && null !== D[m]) C = m;
								else if (A < G - m + C && null !== D[m])
									for (C = A - G + m; null === D[C];) C++;
								else
									for (; null === D[C];) C++;
								E.push({
									i: C,
									y: D[C]
								}), D[C] = null
							}
							E.sort(l)
						}
						for (m = 0; m < G; m++) {
							var K, L;
							if (a = F[m], e = a.labelPos, d = a.dataLabel, j = a.visible === !1 ? vb : ub, L = e[1], t > 0 ? (K = E.pop(), C = K.i, h = K.y, (L > h && null !== D[C + 1] || L < h && null !== D[C - 1]) && (h = L)) : h = L, g = q.justify ? u[0] + (z ? -1 : 1) * (v + t) : n.getX(0 === C || C === D.length - 1 ? L : h, z), d.attr({
									visibility: j,
									align: e[6]
								})[d.moved ? "animate" : "attr"]({
									x: g + q.x + ({
										left: r,
										right: -r
									}[e[6]] || 0),
									y: h + q.y - 10
								}), d.moved = !0, x && s) {
								b = a.connector;
								var M = g + ("left" === e[6] ? 8 : -8),
									N = h;
								c = [zb, M, N, yb, M + ("left" === e[6] ? -10 : 10), N, yb, e[4], e[5]], b ? (b.animate({
									d: c
								}), b.attr("visibility", j)) : a.connector = b = p.renderer.path(c).attr({
									"stroke-width": s,
									stroke: q.connectorColor || a.color || "#606060",
									visibility: j,
									zIndex: 3
								}).translate(p.plotLeft, p.plotTop).add()
							}
						}
					}
			},
			alignDataLabel: fb,
			drawTracker: xc.prototype.drawTracker,
			getSymbol: fb
		};
	Bc = l(pc, Bc), Rb.pie = Bc, cc.donut = Wb(cc.pie, {
		innerSize: "45%"
	});
	var Cc = l(Bc, {
		seriesType: "donut"
	});
	Rb.donut = Cc;
	var Dc = {
		_init: function () {
			var b = this;
			b.container = a("<div class='shield-lightbox' />"), b.mask = a("<div class='shield-lightbox-mask' />").appendTo(b.container), b.imageBox = a("<div class='shield-lightbox-imagebox' />").appendTo(b.container), b.image = a("<img />").appendTo(b.imageBox), b.caption = a("<p>Right-click and save image to disk. Left-click to dismiss.</p>").appendTo(b.imageBox), b.window = a(c), b.document = a(za), b.body = a(za.body)
		},
		show: function (b) {
			function c() {
				e.visible && (e.container.appendTo(e.body), e.window.on(Sa + e.ns, d), e.window.on("keydown" + e.ns, function (a) {
					27 === a.keyCode && e.hide()
				}), e.container.on(Ta + e.ns, a.proxy(e.hide, e)), setTimeout(d, 1e3 / 60))
			}

			function d() {
				e.mask.css({
					height: e.document.innerHeight()
				}), e.image.css({
					maxWidth: e.mask.width() - (e.image.outerWidth() - e.image.width()) - 2 * e.margin,
					maxHeightINTERNAL: e.mask.height() - (e.image.outerHeight() - e.image.height()) - 2 * e.margin
				}), e.imageBox.css({
					left: (e.document.innerWidth() - e.imageBox.outerWidth()) / 2,
					top: (e.window.innerHeight() - e.imageBox.outerHeight()) / 2 + e.document.scrollTop()
				}), e.caption.css({
					left: (e.imageBox.width() - e.caption.outerWidth()) / 2 + "px"
				})
			}
			var e = this;
			e.visible || (e.visible = !0, e.container || e._init(), e.image.attr("src") === b ? c() : e.image.on("load" + e.ns, c).attr("src", b).attr("alt", "Right-click and save image to disk"))
		},
		hide: function () {
			var a = this;
			a.container.detach(), a.window.off(a.ns), a.visible = !1
		},
		ns: ".shield",
		visible: !1,
		container: null,
		mask: null,
		imageBox: null,
		image: null,
		caption: null,
		window: null,
		document: null,
		body: null,
		margin: 40
	};
	lc.defaults.exportOptions = {
		image: !0,
		print: !0,
		exportTooltip: "Export the chart to an image",
		printTooltip: "Print the chart"
	}, gb(lc.prototype, {
		exportToImage: function () {
			if (bb) {
				var b = this,
					c = a(Qb[b.guid].container),
					d = c.html(),
					e = a("<canvas />").attr("width", c.width()).attr("height", c.height())[0];
				if (typeof canvg !== La) throw "Export requires canvg: https://code.google.com/p/canvg/";
				d = d.replace(/(xmlns="[^\"]*")(.*?)\1/, "$1$2"), d = d.replace(/<(filter)\b[^>]*>.*?<\/\1>/gim, ""), d = d.replace(/\bfilter\b=(["']).*?\1/gim, ""), canvg(e, d), Dc.show(e.toDataURL())
			}
		},
		print: function () {
			var b = this,
				c = a("<iframe />").css({
					position: "absolute",
					left: "-10000px",
					top: "-10000px"
				}).appendTo(za.body)[0],
				d = c.contentWindow.document;
			d.open("text/html", "replace"), d.write(Qb[b.guid].container.innerHTML), d.close(), c.contentWindow.print(), setTimeout(function () {
				za.body.removeChild(c), c = null
			}, 100)
		}
	}), nc.push(function (b) {
		var c, d = b.options.exportOptions,
			e = [];
		d !== !1 && ((d.image && bb || d.print) && (c = a('<div class="shield-buttons" />').appendTo(b.element)), d.image && bb && e.push(a('<button class="shield-chart-button" type="button" title="' + d.exportTooltip + '"><div class="sui-sprite shield-export-button-img" /></button>').on("click.shield", a.proxy(b.exportToImage, b)).appendTo(c)), d.print && e.push(a('<button class="shield-chart-button" type="button" title="' + d.printTooltip + '"><div class="sui-sprite shield-print-button-img" /></button>').on("click.shield", a.proxy(b.print, b)).appendTo(c)), a(b).bind("destroy", function (b) {
			a(e).each(function (a, b) {
				b.off(".shield").remove()
			})
		}))
	});
	var Ec = pc,
		Fc = Rb.bar.prototype;
	gb(ca.prototype, {
		init: function (a, b, c) {
			var d, e = this,
				f = e.defaults;
			e.chart = b, Qb[b.guid].angular && (f.background = {}), e.options = a = Wb(f, a), d = a.background, d && Sb([].concat(rb(d)).reverse(), function (a) {
				var b = a.backgroundColor;
				a = Wb(e.defaultBackgroundOptions, a), b && (a.backgroundColor = b), a.color = a.backgroundColor, c.options.plotBands.unshift(a)
			})
		},
		defaults: {
			center: ["50%", "50%"],
			size: "85%",
			startAngle: 0
		},
		defaultBackgroundOptions: {
			shape: "circle",
			borderWidth: 1,
			borderColor: "silver",
			backgroundColor: {
				linearGradient: {
					x1: 0,
					y1: 0,
					x2: 0,
					y2: 1
				},
				stops: [
					[0, "#FFF"],
					[1, "#DDD"]
				]
			},
			from: Number.MIN_VALUE,
			innerRadius: 0,
			to: Number.MAX_VALUE,
			outerRadius: "105%"
		}
	});
	var Gc = P.prototype,
		Hc = A.prototype,
		Ic = {
			_offset: fb,
			redraw: function () {
				this.isDirty = !1
			},
			render: function () {
				this.isDirty = !1
			},
			_scale: fb,
			_points: fb,
			_title: fb
		},
		Jc = {
			radialGauge: {
				axisTickText: {
					align: "center",
					x: 0,
					y: null
				},
				minorPlotStripWidth: 0,
				minorTicksRepeat: "auto",
				minorTicksHeight: 10,
				minorTicksPlacementINTERNAL: "inside",
				minorTickWidth: 1,
				plotBands: [],
				tickLength: 10,
				tickPosition: "inside",
				tickWidth: 2,
				title: {
					textAngle: 0
				},
				zIndex: 2
			},
			radialX: {
				plotStripWidth: 1,
				axisTickText: {
					align: null,
					distance: 15,
					x: 0,
					y: null
				},
				endOffset: 0,
				startOffset: 0,
				plotBands: [],
				lastTickTextVisible: !1,
				tickLength: 0
			},
			radialY: {
				gridLineInterpolationINTERNAL: "circle",
				axisTickText: {
					align: "right",
					x: -3,
					y: -2
				},
				plotBands: [],
				lastTickTextVisible: !1,
				title: {
					x: 4,
					text: null,
					textAngle: 90
				}
			}
		},
		Kc = {
			radial: !0,
			setOptions: function (a, b) {
				this.options = Wb(kc.defaults, a, this.defaultRadialOptions, this.isXAxis ? b.initialOptions.axisX : b.initialOptions.axisY)
			},
			_offset: function () {
				var a = this;
				Gc._offset.call(a), Qb[a.chart.guid].axisOffset[a.side] = 0, a.center = a.pane.center = Rb.pie.prototype.getCenter.call(a.pane)
			},
			_path: function (a, b) {
				var c = this,
					d = c.center;
				return b = i(b, d[2] / 2 - c.offset), Qb[c.chart.guid].renderer.symbols.arc(c.left + d[0], c.top + d[1], b, b, {
					start: c.startAngleRad,
					end: c.endAngleRad,
					open: !0,
					innerR: 0
				})
			},
			_arrange: function () {
				var a = this;
				Gc._arrange.call(a), a.center && (a.isCircular ? a.transA = (a.endAngleRad - a.startAngleRad) / (a.max - a.min || 1) : a.transA = a.center[2] / 2 / (a.max - a.min || 1), a.isXAxis && (a.minPixelPadding = a.transA * a.minPointOffset + (a.inverseOrder ? (a.endAngleRad - a.startAngleRad) / 4 : 0)))
			},
			_preTicks: function () {
				var a = this;
				a.autoConnect && (a.max += a.categoricalValues && 1 || a.pointRange || a.closestPointRange)
			},
			_dimensions: function () {
				var a = this;
				Gc._dimensions.call(a), a.center && (a.len = a.width = a.height = a.isCircular ? a.center[2] * (a.endAngleRad - a.startAngleRad) / 2 : a.center[2] / 2)
			},
			_position: function (a, b) {
				var c = this;
				return c.isCircular || (b = c.translate(a), a = c.min), c.postTranslate(c.translate(a), i(b, c.center[2] / 2) - c.offset)
			},
			postTranslate: function (a, b) {
				var c = this,
					d = Qb[c.chart.guid],
					e = c.center;
				return a = c.startAngleRad + a, {
					x: d.plotLeft + e[0] + Ha(a) * b,
					y: d.plotTop + e[1] + Ia(a) * b
				}
			},
			_bandPath: function (a, b, c) {
				var d, e, f, g, h = this,
					j = h.center,
					k = h.startAngleRad,
					l = j[2] / 2,
					m = [i(c.outerRadius, "100%"), c.innerRadius, i(c.thickness, 10)],
					n = /%$/,
					o = h.isCircular;
				return "polygon" === h.options.gridLineInterpolationINTERNAL ? g = h._linePath(a).concat(h._linePath(b, !0)) : (o || (m[0] = h.translate(a), m[1] = h.translate(b)), m = Vb(m, function (a) {
					return n.test(a) && (a = jb(a, 10) * l / 100), a
				}), "circle" !== c.shape && o ? (d = k + h.translate(a), e = k + h.translate(b)) : (d = -Ja / 2, e = 1.5 * Ja, f = !0), g = Qb[h.chart.guid].renderer.symbols.arc(h.left + j[0], h.top + j[1], m[0], m[0], {
					start: d,
					end: e,
					innerR: i(m[1], m[0] - m[2]),
					open: f
				})), g
			},
			_linePath: function (a, b) {
				var c, d, e, f, g = this,
					h = g.center,
					i = Qb[g.chart.guid],
					j = g._position(a);
				return g.isCircular ? f = ["M", h[0] + i.plotLeft, h[1] + i.plotTop, "L", j.x, j.y] : "circle" === g.options.gridLineInterpolationINTERNAL ? (a = g.translate(a), a && (f = g._path(0, a))) : (c = i.axisX[0], f = [], a = g.translate(a), e = c.tickPositions, c.autoConnect && (e = e.concat([e[0]])), b && (e = [].concat(e).reverse()), Sb(e, function (b, e) {
					d = c._position(b, a), f.push(e ? "L" : "M", d.x, d.y)
				})), f
			},
			_titlePos: function () {
				var a = this,
					b = a.center,
					c = Qb[a.chart.guid],
					d = a.options.title;
				return {
					x: c.plotLeft + b[0] + (d.x || 0),
					y: c.plotTop + b[1] - {
						high: .5,
						middle: .25,
						low: 0
					}[d.align] * b[2] + (d.y || 0)
				}
			}
		};
	Rb.polarline = l(Rb.line, {
		seriesType: "polarline",
		enablePolarLayout: !0
	}), cc.polarline = Wb(cc.line, cc.polarline), Rb.polararea = l(Rb.area, {
		seriesType: "polararea",
		enablePolarLayout: !0
	}), cc.polararea = Wb(cc.area, cc.polararea), Rb.polarbar = l(Rb.bar, {
		seriesType: "polarbar",
		enablePolarLayout: !0
	}), cc.polarbar = Wb(cc.bar, cc.polarbar, {
		pointRange: 0
	}), Rb.polarspline = l(Rb.spline, {
		seriesType: "polarspline",
		enablePolarLayout: !0
	}), cc.polarspline = Wb(cc.spline, cc.polarspline), Rb.polarsplinearea = l(Rb.splinearea, {
		seriesType: "polarsplinearea",
		enablePolarLayout: !0
	}), cc.polarsplinearea = Wb(cc.splinearea, cc.polarsplinearea), Rb.polarscatter = l(Rb.scatter, {
		seriesType: "polarscatter",
		enablePolarLayout: !0
	}), cc.polarscatter = Wb(cc.scatter, cc.polarscatter), m(Gc, "init", function (a, b, c) {
		var e, f, g, h, j, k, l = this,
			m = Qb[b.guid],
			n = m.angular,
			o = m.enablePolarLayout,
			p = c.isX,
			q = n && p,
			r = b.options,
			s = c.pane || 0;
		n ? (gb(l, q ? Ic : Kc), e = !p, e && (l.defaultRadialOptions = Jc.radialGauge)) : o && (gb(l, Kc), e = p, l.defaultRadialOptions = p ? Jc.radialX : Wb(kc.y, Jc.radialY)), a.call(l, b, c), q || !n && !o || (h = l.options, m.panes || (m.panes = []), l.pane = m.panes[s] = j = new ca(rb(r.pane)[s], b, l), k = j.options, m.inverted = !1, r.zoomType = null, l.startAngleRad = f = (k.startAngle - 90) * Ja / 180, l.endAngleRad = g = (i(k.endAngle, k.startAngle + 360) - 90) * Ja / 180, l.offset = h.offset || 0, l.isCircular = e, e && c.max === d && g - f === 2 * Ja && (l.autoConnect = !0))
	}), m(Hc, "_position", function (a, b, c, d, e) {
		var f = this.axis;
		return f._position ? f._position(c) : a.call(this, b, c, d, e)
	}), m(Hc, "_labelPos", function (a, b, c, d, e, f, g, h, j) {
		var k, l = this.axis,
			m = f.y,
			n = f.align,
			o = (l.translate(this.pos) + l.startAngleRad + Ja / 2) / Ja * 180;
		return l.radial ? (k = l._position(this.pos, l.center[2] / 2 + i(f.distance, -25)), "auto" === f.textAngle ? d.attr({
			textAngle: o
		}) : null === m && (m = .9 * jb(d.styles.lineHeight) - d.getBBox().height / 2), null === n && (n = l.isCircular ? o > 20 && o < 160 ? "left" : o > 200 && o < 340 ? "right" : "center" : "center", d.attr({
			align: n
		})), k.x += f.x, k.y += m) : k = a.call(this, b, c, d, e, f, g, h, j), k
	}), m(Hc, "_markPath", function (a, b, c, d, e, f, g) {
		var h, i, j = this.axis;
		return j.radial ? (h = j._position(this.pos, j.center[2] / 2 + d), i = ["M", b, c, "L", h.x, h.y]) : i = a.call(this, b, c, d, e, f, g), i
	}), cc.rangearea = Wb(cc.area, {
		drawWidth: 1,
		pointMark: null,
		baseValue: null,
		tooltipSettings: {
			customPointText: '<span style="color:{point.dataSeries.color}">{point.dataSeries.collectionAlias}</span>: <b>{point.low}</b> - <b>{point.high}</b><br/>'
		},
		areaInteractivity: !0,
		dataPointText: {
			verticalAlign: null,
			xLow: 0,
			xHigh: 0,
			yLow: 0,
			yHigh: 0
		},
		shadow: !1
	});
	var Lc = l(oc, {
		setOptions: function (a, b) {
			var c = this,
				e = c.dataSeries,
				f = e.pointArrayMap,
				g = 0,
				h = 0,
				i = f.length;
			if ("object" == typeof a && "number" != typeof a.length) gb(c, a), c.options = a;
			else if (a.length)
				for (a.length > i && ("string" == typeof a[0] ? c.collectionAlias = a[0] : "number" == typeof a[0] && (c.x = a[0]), g++); h < i;) c[f[h++]] = a[g++];
			return c.y = c[e.pointValKey], c.x === d && e && (c.x = b === d ? e.autoIncrement() : b), c
		},
		toArray: function () {
			return [this.low, this.high]
		}
	});
	Rb.rangearea = l(Rb.area, {
		seriesType: "rangearea",
		pointArrayMap: ["low", "high"],
		pointClass: Lc,
		pointValKey: "low",
		translate: function () {
			var a = this,
				b = a.axisY;
			Rb.area.prototype.translate.apply(a), Sb(a.points, function (a) {
				null !== a.y && (a.plotLow = a.plotY, a.plotHigh = b.translate(a.high, 0, 1, 0, 1))
			})
		},
		getSegmentPath: function (a) {
			for (var b, c, d, e, f = this, g = [], h = a.length, i = pc.prototype.getSegmentPath, j = f.options, k = j.step; h--;) b = a[h], g.push({
				plotX: b.plotX,
				plotY: b.plotHigh
			});
			return d = i.call(f, a), k && (k === !0 && (k = "left"), j.step = {
				left: "right",
				center: "center",
				right: "left"
			}[k]), e = i.call(f, g), j.step = k, c = [].concat(d, e), e[0] = "L", f.areaPath = f.areaPath.concat(d, e), c
		},
		drawDataLabels: function () {
			var a, b, c = this,
				d = c.data,
				e = d.length,
				f = [],
				g = pc.prototype,
				h = c.options.dataPointText,
				i = Qb[c.chart.guid].inverted;
			if (h.enabled || c._hasPointLabels) {
				for (a = e; a--;) b = d[a], b.y = b.high, b.plotY = b.plotHigh, f[a] = b.dataLabel, b.dataLabel = b.dataLabelUpper, b.below = !1, i ? (h.align = "left", h.x = h.xHigh) : h.y = h.yHigh;
				for (g.drawDataLabels.apply(c, arguments), a = e; a--;) b = d[a], b.dataLabelUpper = b.dataLabel, b.dataLabel = f[a], b.y = b.low, b.plotY = b.plotLow, b.below = !0, i ? (h.align = "right", h.x = h.xLow) : h.y = h.yLow;
				g.drawDataLabels.apply(c, arguments)
			}
		},
		alignDataLabel: Rb.bar.prototype.alignDataLabel,
		getSymbol: Rb.bar.prototype.getSymbol,
		drawPoints: fb
	}), cc.rangesplinearea = Wb(cc.rangearea), Rb.rangesplinearea = l(Rb.rangearea, {
		seriesType: "rangesplinearea",
		getPointSpline: Rb.spline.prototype.getPointSpline
	}), cc.rangebar = Wb(cc.bar, cc.rangearea, {
		drawWidth: 1,
		pointRange: null
	}), Rb.rangebar = l(Rb.rangearea, {
		seriesType: "rangebar",
		translate: function () {
			var a, b = this,
				c = b.axisY;
			Fc.translate.apply(b), Sb(b.points, function (b) {
				var d = b.shapeArgs;
				b.plotHigh = a = c.translate(b.high, 0, 1, 0, 1), b.plotLow = b.plotY, d.y = a, d.height = b.plotY - a, b.trackerArgs = d
			})
		},
		drawGraph: fb,
		pointAttrToOptions: Fc.pointAttrToOptions,
		drawPoints: Fc.drawPoints,
		drawTracker: Fc.drawTracker,
		animate: Fc.animate
	});
	var Mc = pc.prototype,
		Nc = T.prototype;
	Mc.toXY = function (a) {
		var b, c = this,
			d = Qb[c.chart.guid],
			e = a.plotX,
			f = a.plotY;
		a.rectPlotX = e, a.rectPlotY = f, a.deg = e / Ja * 180, b = c.axisX.postTranslate(a.plotX, c.axisY.len - f), a.plotX = a.polarPlotX = b.x - d.plotLeft, a.plotY = a.polarPlotY = b.y - d.plotTop
	}, m(Rb.area.prototype, "init", da), m(Rb.splinearea.prototype, "init", da), m(Rb.spline.prototype, "getPointSpline", function (a, b, c, d) {
		var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w = 1.5,
			x = w + 1;
		return Qb[this.chart.guid].enablePolarLayout ? (f = c.plotX, g = c.plotY, h = b[d - 1], i = b[d + 1], this.connectEnds && (h || (h = b[b.length - 2]), i || (i = b[1])), h && i && (j = h.plotX, k = h.plotY, l = i.plotX, m = i.plotY, n = (w * f + j) / x, o = (w * g + k) / x, p = (w * f + l) / x, q = (w * g + m) / x, r = Aa.sqrt(Aa.pow(n - f, 2) + Aa.pow(o - g, 2)), s = Aa.sqrt(Aa.pow(p - f, 2) + Aa.pow(q - g, 2)), t = Aa.atan2(o - g, n - f), u = Aa.atan2(q - g, p - f), v = Ja / 2 + (t + u) / 2, Ga(t - v) > Ja / 2 && (v -= Ja), n = f + Ha(v) * r, o = g + Ia(v) * r, p = f + Ha(Ja + v) * s, q = g + Ia(Ja + v) * s, c.rightContX = p, c.rightContY = q), d ? (e = ["C", h.rightContX || h.plotX, h.rightContY || h.plotY, n || f, o || g, f, g], h.rightContX = h.rightContY = null) : e = ["M", f, g]) : e = a.call(this, b, c, d), e
	}), m(Mc, "translate", function (a) {
		var b = this;
		if (a.call(b), Qb[b.chart.guid].enablePolarLayout && !b.preventPostTranslate)
			for (var c = b.points, d = c.length; d--;) b.toXY(c[d])
	}), m(Mc, "getSegmentPath", function (a, b) {
		var c = this,
			d = c.points;
		return Qb[c.chart.guid].enablePolarLayout && c.options.connectEnds !== !1 && b[b.length - 1] === d[d.length - 1] && null !== d[0].y && (c.connectEnds = !0, b = [].concat(b, [d[0]])), a.call(c, b)
	}), m(Mc, "animate", ea), m(Fc, "animate", ea), m(Mc, "setTooltipPoints", function (a, b) {
		var c = this;
		return Qb[c.chart.guid].enablePolarLayout && gb(c.axisX, {
			tooltipLen: 360,
			tooltipPosName: "deg"
		}), a.call(c, b)
	}), m(Fc, "translate", function (a) {
		var b, c, d, e, f = this,
			g = f.axisX,
			h = f.axisY.len,
			j = g.center,
			k = g.startAngleRad,
			l = Qb[f.chart.guid].renderer;
		if (f.preventPostTranslate = !0, a.call(f), g.radial)
			for (c = f.points, e = c.length; e--;) d = c[e], b = d.barX + k, d.shapeType = "path", d.shapeArgs = {
				d: l.symbols.arc(j[0], j[1], h - d.plotY, null, {
					start: b,
					end: b + d.dataPointWidth,
					innerR: h - i(d.yBottom, h)
				})
			}, f.toXY(d)
	}), m(Fc, "alignDataLabel", function (a, b, c, d, e, f) {
		var g = this;
		if (Qb[g.chart.guid].enablePolarLayout) {
			var h, i, j = b.rectPlotX / Ja * 180;
			null === d.align && (h = j > 20 && j < 160 ? "left" : j > 200 && j < 340 ? "right" : "center", d.align = h), null === d.verticalAlign && (i = j < 45 || j > 315 ? "bottom" : j > 135 && j < 225 ? "top" : "middle", d.verticalAlign = i), Mc.alignDataLabel.call(g, b, c, d, e, f)
		} else a.call(g, b, c, d, e, f)
	}), m(Nc, "_index", function (a, b) {
		var c, d, e, f, g = this,
			h = Qb[g.chart.guid];
		return h.enablePolarLayout ? (d = h.axisX[0].center, e = b.chartX - d[0] - h.plotLeft, f = b.chartY - d[1] - h.plotTop, c = 180 - Ba(Aa.atan2(e, f) / Ja * 180)) : c = a.call(g, b), c
	}), m(Nc, "_coord", function (a, b) {
		var c = Qb[this.chart.guid],
			d = {
				axisX: [],
				axisY: []
			};
		return c.enablePolarLayout ? Sb(c.axes, function (a) {
			var e = a.isXAxis,
				f = a.center,
				g = b.chartX - f[0] - c.plotLeft,
				h = b.chartY - f[1] - c.plotTop;
			d[e ? "axisX" : "axisY"].push({
				axis: a,
				value: a.translate(e ? Ja - Aa.atan2(g, h) : Aa.sqrt(Aa.pow(g, 2) + Aa.pow(h, 2)), !0)
			})
		}) : d = a.call(this, b), d
	})
}(jQuery, shield, this),
function (a) {
	a.ui.Chart.themes.bootstrap = {
		seriesPalette: ["#428BCA", "#F0AD4E", "#5CB85C", "#D9534F", "#5BC0DE", "#474949", "#84B3DC", "#DDC01A", "#878989", "#DFF0D8"],
		primaryHeader: {
			style: {
				color: "#333333"
			}
		},
		secondaryHeader: {
			style: {
				color: "#333333"
			}
		},
		backgroundColor: "",
		borderWidth: 0,
		chartAreaBackgroundColor: "",
		chartAreaShadow: !1,
		chartAreaBorderWidth: 0,
		seriesSettings: {
			scatter: {
				activeSettings: {
					pointHoveredState: {
						drawWidth: 4
					}
				},
				pointMark: {
					enabled: !0,
					drawWidth: 2,
					drawRadius: 2.5,
					drawColor: null,
					innerColor: null,
					activeSettings: {
						pointHoveredState: {
							innerColor: "#FFFFFF"
						}
					}
				}
			},
			area: {
				drawWidth: 2,
				pointMark: {
					enabled: !1,
					drawWidth: 2,
					drawRadius: 2.5,
					drawColor: null,
					innerColor: "#FFFFFF",
					activeSettings: {
						pointHoveredState: {
							innerColor: null
						}
					}
				}
			},
			splinearea: {
				drawWidth: 2,
				pointMark: {
					enabled: !1,
					drawWidth: 2,
					drawRadius: 2.5,
					drawColor: null,
					innerColor: "#FFFFFF",
					activeSettings: {
						pointHoveredState: {
							innerColor: null
						}
					}
				}
			},
			line: {
				drawWidth: 3,
				shadow: !1,
				mouseInteractions: !0,
				pointMark: {
					enabled: !0,
					drawWidth: 2,
					drawRadius: 2.5,
					drawColor: null,
					innerColor: "#FFFFFF",
					activeSettings: {
						pointHoveredState: {
							innerColor: null
						}
					}
				}
			},
			spline: {
				drawWidth: 3,
				shadow: !1,
				activeSettings: {
					pointHoveredState: {
						drawWidth: 4
					}
				},
				pointMark: {
					enabled: !0,
					drawWidth: 2,
					drawRadius: 2.5,
					drawColor: null,
					innerColor: "#FFFFFF",
					activeSettings: {
						pointHoveredState: {
							innerColor: null
						}
					}
				}
			},
			pie: {
				dataPointText: {
					style: {
						color: "#333333"
					}
				}
			},
			donut: {
				dataPointText: {
					style: {
						color: "#333333"
					}
				}
			}
		},
		axisX: {
			drawWidth: 1,
			drawColor: "#888888",
			ticksColor: "#888888",
			axisTickText: {
				style: {
					color: "#333333"
				},
				y: 17
			},
			title: {
				style: {
					color: "#333333"
				}
			}
		},
		axisY: {
			drawColor: "#888888",
			ticksColor: "#888888",
			plotStripColor: "#888888",
			axisTickText: {
				style: {
					color: "#333333"
				}
			},
			title: {
				style: {
					color: "#333333"
				}
			}
		},
		chartLegend: {
			legendItemSettings: {
				elementStyle: {
					color: "#333333"
				},
				mouseOverStyle: {
					color: "#000"
				},
				disabledStyle: {
					color: "#aaaaaa"
				}
			}
		}
	}
}(shield),
function (a) {
	a.ui.Chart.themes.dark = {
		seriesPalette: ["#1E97E3", "#FF8000", "#00FF9C", "#FF2A00", "#FFC500", "#C9C9C9", "#FC2150", "#0077C6", "#99c900", "#cc6e38"],
		primaryHeader: {
			style: {
				color: "#FFFFFF"
			}
		},
		secondaryHeader: {
			style: {
				color: "#F2F2F2"
			}
		},
		backgroundColor: "#2D2D2D",
		borderWidth: 0,
		chartAreaBackgroundColor: "#2D2D2D",
		chartAreaShadow: !1,
		chartAreaBorderWidth: 0,
		seriesSettings: {
			scatter: {
				activeSettings: {
					pointHoveredState: {
						drawWidth: 4
					}
				},
				pointMark: {
					enabled: !0,
					drawWidth: 2,
					drawRadius: 2.5,
					drawColor: null,
					innerColor: "#2D2D2D",
					activeSettings: {
						pointHoveredState: {
							innerColor: null
						}
					}
				}
			},
			area: {
				drawWidth: 2,
				pointMark: {
					enabled: !1,
					drawWidth: 2,
					drawRadius: 2.5,
					drawColor: null,
					innerColor: "#2D2D2D",
					activeSettings: {
						pointHoveredState: {
							enabled: !1,
							drawRadius: 4
						}
					}
				}
			},
			splinearea: {
				drawWidth: 2,
				pointMark: {
					enabled: !1,
					drawWidth: 2,
					drawRadius: 2.5,
					drawColor: null,
					innerColor: "#2D2D2D",
					activeSettings: {
						pointHoveredState: {
							innerColor: null
						}
					}
				}
			},
			line: {
				drawWidth: 3,
				shadow: !1,
				mouseInteractions: !0,
				pointMark: {
					enabled: !0,
					drawWidth: 2,
					drawRadius: 2.5,
					drawColor: null,
					innerColor: "#2D2D2D",
					activeSettings: {
						pointHoveredState: {
							innerColor: null
						}
					}
				}
			},
			spline: {
				drawWidth: 3,
				shadow: !1,
				activeSettings: {
					pointHoveredState: {
						drawWidth: 4
					}
				},
				pointMark: {
					enabled: !0,
					drawWidth: 2,
					drawRadius: 2.5,
					drawColor: null,
					innerColor: "#2D2D2D",
					activeSettings: {
						pointHoveredState: {
							innerColor: null
						}
					}
				}
			},
			pie: {
				dataPointText: {
					style: {
						color: "#7E7E7E"
					}
				}
			},
			donut: {
				dataPointText: {
					style: {
						color: "#7E7E7E"
					}
				}
			}
		},
		axisX: {
			drawColor: "#7E7E7E",
			ticksColor: "#7E7E7E",
			axisTickText: {
				style: {
					color: "#7E7E7E"
				},
				y: 17
			},
			title: {
				style: {
					color: "#7E7E7E"
				}
			}
		},
		axisY: {
			drawColor: "#7E7E7E",
			ticksColor: "#7E7E7E",
			plotStripColor: "#7E7E7E",
			plotStripDashStyle: "LongDash",
			axisTickText: {
				style: {
					color: "#7E7E7E"
				}
			},
			title: {
				style: {
					color: "#7E7E7E"
				}
			}
		},
		chartLegend: {
			legendItemSettings: {
				elementStyle: {
					color: "#A5A5A5"
				},
				mouseOverStyle: {
					color: "#FFFFFF"
				},
				disabledStyle: {
					color: "#7E7E7E"
				}
			}
		}
	}
}(shield);
! function (a, b, c, d) {
	var e = b.ui.Widget,
		f = b.Constants,
		g = b.Class,
		h = document,
		i = f.SVG_NS,
		j = !!h.createElementNS && !!h.createElementNS(i, "svg").createSVGRect,
		k = a.map,
		l = b.to["int"],
		m = b.error,
		n = "CODABAR",
		o = "CODE-11",
		p = "CODE-39",
		q = "CODE-93",
		r = "CODE-128",
		s = "CODE-128-A",
		t = "CODE-128-B",
		u = "CODE-128-C",
		v = "CODE-25-STANDARD",
		w = "CODE-25-INTERLEAVED",
		x = "EAN-8",
		y = "EAN-13",
		z = "UPC-A",
		A = "UPC-E",
		B = "MSI-10",
		C = "MSI-10-10",
		D = "MSI-11",
		E = "MSI-11-10",
		F = "POSTNET",
		G = {
			types: [],
			addType: function (a) {
				this.types[a.prototype.type] = a
			},
			byType: function (a) {
				return this.types[a] ? new this.types[a] : null
			}
		},
		H = g.extend({
			type: null,
			validateRegExp: null,
			validate: function (a) {
				return !this.validateRegExp || new RegExp(this.validateRegExp).test(a)
			},
			encode: null,
			checksum: null
		}),
		I = H.extend({
			type: o,
			validateRegExp: "^[\\d\\-]+$",
			encode: function (a, b) {
				b && (a += this.checksum(a)), a = "*" + a + "*";
				var c, d = "",
					e = {
						0: "101011",
						1: "1101011",
						2: "1001011",
						3: "1100101",
						4: "1011011",
						5: "1101101",
						6: "1001101",
						7: "1010011",
						8: "1101001",
						9: "110101",
						"-": "101101",
						"*": "1011001"
					};
				for (c = 0; c < a.length; c++) d.length > 0 && (d += "0"), d += e[a.charAt(c)];
				return [d]
			},
			checksum: function (a) {
				var b = this._checksum(a, 10, 11);
				return a.length > 10 && (b += this._checksum(a + b, 9, 11) + ""), b
			},
			_checksum: function (a, b, c) {
				var d, e = 0,
					f = 1;
				for (d = a.length - 1; d >= 0; d--) e += f * ("-" == a.charAt(d) ? 10 : l(a.charAt(d))), f = f >= b ? 1 : f + 1;
				return e % c + ""
			}
		});
	G.addType(I);
	var J = H.extend({
		type: y,
		validateRegExp: "^[\\d]{12}$",
		encodingTable: {
			0: {
				lo: "0001101",
				le: "0100111",
				r: "1110010"
			},
			1: {
				lo: "0011001",
				le: "0110011",
				r: "1100110"
			},
			2: {
				lo: "0010011",
				le: "0011011",
				r: "1101100"
			},
			3: {
				lo: "0111101",
				le: "0100001",
				r: "1000010"
			},
			4: {
				lo: "0100011",
				le: "0011101",
				r: "1011100"
			},
			5: {
				lo: "0110001",
				le: "0111001",
				r: "1001110"
			},
			6: {
				lo: "0101111",
				le: "0000101",
				r: "1010000"
			},
			7: {
				lo: "0111011",
				le: "0010001",
				r: "1000100"
			},
			8: {
				lo: "0110111",
				le: "0001001",
				r: "1001000"
			},
			9: {
				lo: "0001011",
				le: "0010111",
				r: "1110100"
			}
		},
		parityTable: {
			0: ["lo", "lo", "lo", "lo", "lo", "lo"],
			1: ["lo", "lo", "le", "lo", "le", "le"],
			2: ["lo", "lo", "le", "le", "lo", "le"],
			3: ["lo", "lo", "le", "le", "le", "lo"],
			4: ["lo", "le", "lo", "lo", "le", "le"],
			5: ["lo", "le", "le", "lo", "lo", "le"],
			6: ["lo", "le", "le", "le", "lo", "lo"],
			7: ["lo", "le", "lo", "le", "lo", "le"],
			8: ["lo", "le", "lo", "le", "le", "lo"],
			9: ["lo", "le", "le", "lo", "le", "lo"]
		},
		encode: function (a, b) {
			b && (a += this.checksum(a));
			var c, d = a.substring(0, 1),
				e = a.substring(1, 7),
				f = a.substring(7),
				g = "",
				h = [],
				i = 0,
				j = this.encodingTable,
				k = this.parityTable;
			for (g += "101", h.push(0, 1, 2), c = 0; c < e.length; c++) g += j[e.charAt(c)][k[d][c]];
			for (g += "01010", i = g.length, h.push(i - 5, i - 4, i - 3, i - 2, i - 1), c = 0; c < f.length; c++) g += j[f.charAt(c)].r;
			return g += "101", i = g.length, h.push(i - 3, i - 2, i - 1), [g, h]
		},
		checksum: function (a) {
			var b, c = 0,
				d = 1;
			for (b = a.length - 1; b >= 0; b--) c += l(a.charAt(b)) * (d++ % 2 ? 3 : 1);
			return 10 - c % 10 + ""
		}
	});
	G.addType(J);
	var K = J.extend({
		type: x,
		validateRegExp: "^[\\d]{7}$",
		encode: function (a, b) {
			b && (a += this.checksum(a));
			var c, d = a.substring(0, 4),
				e = a.substring(4),
				f = "",
				g = [],
				h = 0,
				i = this.encodingTable;
			this.parityTable;
			for (f += "101", g.push(0, 1, 2), c = 0; c < d.length; c++) f += i[d.charAt(c)].lo;
			for (f += "01010", h = f.length, g.push(h - 5, h - 4, h - 3, h - 2, h - 1), c = 0; c < e.length; c++) f += i[e.charAt(c)].r;
			return f += "101", h = f.length, g.push(h - 3, h - 2, h - 1), [f, g]
		}
	});
	G.addType(K);
	var L = J.extend({
		type: z,
		validateRegExp: "^\\d{11}$",
		encode: function (a, b) {
			var c = J.prototype.encode.call(this, "0" + a, b),
				d = c[0].length;
			return c[1].push(3, 4, 5, 6, 7, 8, 9, d - 4, d - 5, d - 6, d - 7, d - 8, d - 9, d - 10), c
		},
		checksum: function (a) {
			return 11 == a.length && (a = "0" + a), J.prototype.checksum.call(this, a)
		}
	});
	G.addType(L);
	var M = L.extend({
		type: A,
		validateRegExp: "^[0|1]\\d{6}$",
		_upce2upca: function (a) {
			var b = a.substring(a.length - 1);
			return "0" == b || "1" == b || "2" == b ? a.substring(0, 2) + a.charAt(5) + "0000" + a.substring(2, 5) : "3" == b ? a.substring(0, 3) + "00000" + a.substring(4, 6) : "4" == b ? a.substring(0, 4) + "00000" + a.charAt(4) : a.substring(0, 5) + "0000" + b
		},
		encode: function (a, b) {
			var c, d = this.checksum(a),
				e = "",
				f = a.charAt(0),
				g = a.substring(1),
				h = [
					["EEEOOO", "OOOEEE"],
					["EEOEOO", "OOEOEE"],
					["EEOOEO", "OOEEOE"],
					["EEOOOE", "OOEEEO"],
					["EOEEOO", "OEOOEE"],
					["EOOEEO", "OEEOOE"],
					["EOOOEE", "OEEEOO"],
					["EOEOEO", "OEOEOE"],
					["EOEOOE", "OEOEEO"],
					["EOOEOE", "OEEOEO"]
				],
				i = h[l(d)][l(f)];
			for (c = 0; c < g.length; c++) e += this.encodingTable[g.charAt(c)]["O" == i.charAt(c) ? "lo" : "le"];
			return ["101" + e + "010101", [0, 1, 2, 45, 46, 47, 48, 49, 50]]
		},
		checksum: function (a) {
			var b = a.charAt(0),
				c = a.substring(1);
			return L.prototype.checksum.call(this, b + this._upce2upca(c))
		}
	});
	G.addType(M);
	var N = H.extend({
		type: p,
		validateRegExp: "^[0-9A-Z\\-\\. \\$\\/\\+\\%\\*]+$",
		encode: function (a, b) {
			b && (a += this.checksum(a)), a = "*" + a + "*";
			var c, d = "",
				e = {
					0: "101001101101",
					1: "110100101011",
					2: "101100101011",
					3: "110110010101",
					4: "101001101011",
					5: "110100110101",
					6: "101100110101",
					7: "101001011011",
					8: "110100101101",
					9: "101100101101",
					A: "110101001011",
					B: "101101001011",
					C: "110110100101",
					D: "101011001011",
					E: "110101100101",
					F: "101101100101",
					G: "101010011011",
					H: "110101001101",
					I: "101101001101",
					J: "101011001101",
					K: "110101010011",
					L: "101101010011",
					M: "110110101001",
					N: "101011010011",
					O: "110101101001",
					P: "101101101001",
					Q: "101010110011",
					R: "110101011001",
					S: "101101011001",
					T: "101011011001",
					U: "110010101011",
					V: "100110101011",
					W: "110011010101",
					X: "100101101011",
					Y: "110010110101",
					Z: "100110110101",
					"-": "100101011011",
					".": "110010101101",
					" ": "100110101101",
					$: "100100100101",
					"/": "100100101001",
					"+": "100101001001",
					"%": "101001001001",
					"*": "100101101101"
				};
			for (c = 0; c < a.length; c++) c > 0 && (d += "0"), d += e[a.charAt(c)];
			return [d]
		},
		checksum: function (a) {
			var b, c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%*",
				d = 0;
			for (b = 0; b < a.length; b++) d += c.indexOf(a.charAt(b));
			return c.charAt(d % 43)
		}
	});
	G.addType(N);
	var O = H.extend({
		type: q,
		validateRegExp: "^[0-9A-Z\\-\\. \\$\\/\\+\\%\\*]+$",
		encode: function (a, b) {
			b && (a += this.checksum(a)), a = "*" + a + "*";
			var c, d = "",
				e = {
					0: "100010100",
					1: "101001000",
					2: "101000100",
					3: "101000010",
					4: "100101000",
					5: "100100100",
					6: "100100010",
					7: "101010000",
					8: "100010010",
					9: "100001010",
					A: "110101000",
					B: "110100100",
					C: "110100010",
					D: "110010100",
					E: "110010010",
					F: "110001010",
					G: "101101000",
					H: "101100100",
					I: "101100010",
					J: "100110100",
					K: "100011010",
					L: "101011000",
					M: "101001100",
					N: "101000110",
					O: "100101100",
					P: "100010110",
					Q: "110110100",
					R: "110110010",
					S: "110101100",
					T: "110100110",
					U: "110010110",
					V: "110011010",
					W: "101101100",
					X: "101100110",
					Y: "100110110",
					Z: "100111010",
					"-": "100101110",
					".": "111010100",
					" ": "111010010",
					$: "111001010",
					"/": "101101110",
					"+": "101110110",
					"%": "110101110",
					"@": "100100110",
					"#": "111011010",
					"&": "111010110",
					"~": "100110010",
					"*": "101011110"
				};
			for (c = 0; c < a.length; c++) d += e[a.charAt(c)];
			return d += "1", [d]
		},
		checksum: function (a) {
			var b = a.length;
			return a += this._checksum(a, 20, 47), a += this._checksum(a, 15, 47), a.substring(b, b + 2)
		},
		_checksum: function (a, b, c) {
			var d, e, f = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%@#&~*",
				g = 0,
				h = 1;
			for (e = a.length - 1; e >= 0; e--) d = f.indexOf(a.charAt(e)), g += d * h++, h > b && (h = 1);
			return f.charAt(g % c)
		}
	});
	G.addType(O);
	var P = H.extend({
		type: F,
		validate: function (a) {
			return /^\d+$/.test(a) && (5 == a.length || 9 == a.length || 11 == a.length)
		},
		encode: function (a, b) {
			b && (a += this.checksum(a));
			var c, d = "",
				e = ["11000", "00011", "00101", "00110", "01001", "01010", "01100", "10001", "10010", "10100"];
			for (c = 0; c < a.length; c++) d += e[a.charAt(c)];
			return ["1" + d + "1"]
		},
		checksum: function (a) {
			var b, c = 0;
			for (b = 0; b < a.length; b++) c += l(a.charAt(b));
			return 10 - c % 10 + ""
		}
	});
	G.addType(P);
	var Q = H.extend({
			validateRegExp: "^\\d+$",
			encode: function (a, b) {
				b && (a += this.checksum(a));
				var c, d = "",
					e = ["100100100100", "100100100110", "100100110100", "100100110110", "100110100100", "100110100110", "100110110100", "100110110110", "110100100100", "110100100110"];
				for (c = 0; c < a.length; c++) d += e[a.charAt(c)];
				return ["110" + d + "1001"]
			},
			_mod10Checksum: function (a) {
				var b, c = 0,
					d = 0;
				for (b = a.length - 1; b >= 0; b--) {
					var e = l(a.charAt(b)) * (d % 2 ? 1 : 2);
					e > 9 ? (e += "", c += l(e.charAt(0)) + l(e.charAt(1))) : c += e, d++
				}
				return 9 * c % 10 + ""
			},
			_mod11Checksum: function (a) {
				var b, c = 0,
					d = 2;
				for (b = a.length - 1; b >= 0; b--) c += l(a.charAt(b)) * d, d = d >= 7 ? 2 : d + 1;
				return 11 - c % 11 + ""
			}
		}),
		R = Q.extend({
			type: B,
			checksum: function (a) {
				return this._mod10Checksum(a)
			}
		});
	G.addType(R);
	var S = Q.extend({
		type: C,
		checksum: function (a) {
			var b = this._mod10Checksum(a);
			return b + this._mod10Checksum(a + b)
		}
	});
	G.addType(S);
	var T = Q.extend({
		type: D,
		checksum: function (a) {
			return this._mod11Checksum(a)
		}
	});
	G.addType(T);
	var U = Q.extend({
		type: E,
		checksum: function (a) {
			var b = this._mod11Checksum(a);
			return b + this._mod10Checksum(a + b)
		}
	});
	G.addType(U);
	var V = H.extend({
		type: n,
		validateRegExp: "^[A|B|C|D][\\d\\-\\$\\:\\/\\.\\+]+[A|B|C|D]$",
		encode: function (a, b) {
			var c, d = "",
				e = {
					0: "101010011",
					1: "101011001",
					2: "101001011",
					3: "110010101",
					4: "101101001",
					5: "110101001",
					6: "100101011",
					7: "100101101",
					8: "100110101",
					9: "110100101",
					"-": "101001101",
					$: "101100101",
					":": "1101011011",
					"/": "1101101011",
					".": "1101101101",
					"+": "101100110011",
					A: "1011001001",
					B: "1010010011",
					C: "1001001011",
					D: "1010011001"
				};
			for (c = 0; c < a.length; c++) c > 0 && (d += "0"), d += e[a.charAt(c)];
			return [d]
		},
		checksum: function (a) {
			return ""
		}
	});
	G.addType(V);
	var W = H.extend({
		type: r,
		encodingTable: [{
			A: " ",
			B: " ",
			C: "00",
			E: "11011001100"
		}, {
			A: "!",
			B: "!",
			C: "01",
			E: "11001101100"
		}, {
			A: '"',
			B: '"',
			C: "02",
			E: "11001100110"
		}, {
			A: "#",
			B: "#",
			C: "03",
			E: "10010011000"
		}, {
			A: "$",
			B: "$",
			C: "04",
			E: "10010001100"
		}, {
			A: "%",
			B: "%",
			C: "05",
			E: "10001001100"
		}, {
			A: "&",
			B: "&",
			C: "06",
			E: "10011001000"
		}, {
			A: "'",
			B: "'",
			C: "07",
			E: "10011000100"
		}, {
			A: "(",
			B: "(",
			C: "08",
			E: "10001100100"
		}, {
			A: ")",
			B: ")",
			C: "09",
			E: "11001001000"
		}, {
			A: "*",
			B: "*",
			C: "10",
			E: "11001000100"
		}, {
			A: "+",
			B: "+",
			C: "11",
			E: "11000100100"
		}, {
			A: ",",
			B: ",",
			C: "12",
			E: "10110011100"
		}, {
			A: "-",
			B: "-",
			C: "13",
			E: "10011011100"
		}, {
			A: ".",
			B: ".",
			C: "14",
			E: "10011001110"
		}, {
			A: "/",
			B: "/",
			C: "15",
			E: "10111001100"
		}, {
			A: "0",
			B: "0",
			C: "16",
			E: "10011101100"
		}, {
			A: "1",
			B: "1",
			C: "17",
			E: "10011100110"
		}, {
			A: "2",
			B: "2",
			C: "18",
			E: "11001110010"
		}, {
			A: "3",
			B: "3",
			C: "19",
			E: "11001011100"
		}, {
			A: "4",
			B: "4",
			C: "20",
			E: "11001001110"
		}, {
			A: "5",
			B: "5",
			C: "21",
			E: "11011100100"
		}, {
			A: "6",
			B: "6",
			C: "22",
			E: "11001110100"
		}, {
			A: "7",
			B: "7",
			C: "23",
			E: "11101101110"
		}, {
			A: "8",
			B: "8",
			C: "24",
			E: "11101001100"
		}, {
			A: "9",
			B: "9",
			C: "25",
			E: "11100101100"
		}, {
			A: ":",
			B: ":",
			C: "26",
			E: "11100100110"
		}, {
			A: ";",
			B: ";",
			C: "27",
			E: "11101100100"
		}, {
			A: "<",
			B: "<",
			C: "28",
			E: "11100110100"
		}, {
			A: "=",
			B: "=",
			C: "29",
			E: "11100110010"
		}, {
			A: ">",
			B: ">",
			C: "30",
			E: "11011011000"
		}, {
			A: "?",
			B: "?",
			C: "31",
			E: "11011000110"
		}, {
			A: "@",
			B: "@",
			C: "32",
			E: "11000110110"
		}, {
			A: "A",
			B: "A",
			C: "33",
			E: "10100011000"
		}, {
			A: "B",
			B: "B",
			C: "34",
			E: "10001011000"
		}, {
			A: "C",
			B: "C",
			C: "35",
			E: "10001000110"
		}, {
			A: "D",
			B: "D",
			C: "36",
			E: "10110001000"
		}, {
			A: "E",
			B: "E",
			C: "37",
			E: "10001101000"
		}, {
			A: "F",
			B: "F",
			C: "38",
			E: "10001100010"
		}, {
			A: "G",
			B: "G",
			C: "39",
			E: "11010001000"
		}, {
			A: "H",
			B: "H",
			C: "40",
			E: "11000101000"
		}, {
			A: "I",
			B: "I",
			C: "41",
			E: "11000100010"
		}, {
			A: "J",
			B: "J",
			C: "42",
			E: "10110111000"
		}, {
			A: "K",
			B: "K",
			C: "43",
			E: "10110001110"
		}, {
			A: "L",
			B: "L",
			C: "44",
			E: "10001101110"
		}, {
			A: "M",
			B: "M",
			C: "45",
			E: "10111011000"
		}, {
			A: "N",
			B: "N",
			C: "46",
			E: "10111000110"
		}, {
			A: "O",
			B: "O",
			C: "47",
			E: "10001110110"
		}, {
			A: "P",
			B: "P",
			C: "48",
			E: "11101110110"
		}, {
			A: "Q",
			B: "Q",
			C: "49",
			E: "11010001110"
		}, {
			A: "R",
			B: "R",
			C: "50",
			E: "11000101110"
		}, {
			A: "S",
			B: "S",
			C: "51",
			E: "11011101000"
		}, {
			A: "T",
			B: "T",
			C: "52",
			E: "11011100010"
		}, {
			A: "U",
			B: "U",
			C: "53",
			E: "11011101110"
		}, {
			A: "V",
			B: "V",
			C: "54",
			E: "11101011000"
		}, {
			A: "W",
			B: "W",
			C: "55",
			E: "11101000110"
		}, {
			A: "X",
			B: "X",
			C: "56",
			E: "11100010110"
		}, {
			A: "Y",
			B: "Y",
			C: "57",
			E: "11101101000"
		}, {
			A: "Z",
			B: "Z",
			C: "58",
			E: "11101100010"
		}, {
			A: "[",
			B: "[",
			C: "59",
			E: "11100011010"
		}, {
			A: "\\",
			B: "\\",
			C: "60",
			E: "11101111010"
		}, {
			A: "]",
			B: "]",
			C: "61",
			E: "11001000010"
		}, {
			A: "^",
			B: "^",
			C: "62",
			E: "11110001010"
		}, {
			A: "_",
			B: "_",
			C: "63",
			E: "10100110000"
		}, {
			A: "NUL",
			B: "`",
			C: "64",
			E: "10100001100"
		}, {
			A: "SOH",
			B: "a",
			C: "65",
			E: "10010110000"
		}, {
			A: "STX",
			B: "b",
			C: "66",
			E: "10010000110"
		}, {
			A: "ETX",
			B: "c",
			C: "67",
			E: "10000101100"
		}, {
			A: "EOT",
			B: "d",
			C: "68",
			E: "10000100110"
		}, {
			A: "ENQ",
			B: "e",
			C: "69",
			E: "10110010000"
		}, {
			A: "ACK",
			B: "f",
			C: "70",
			E: "10110000100"
		}, {
			A: "BEL",
			B: "g",
			C: "71",
			E: "10011010000"
		}, {
			A: "BS",
			B: "h",
			C: "72",
			E: "10011000010"
		}, {
			A: "HT",
			B: "i",
			C: "73",
			E: "10000110100"
		}, {
			A: "LF",
			B: "j",
			C: "74",
			E: "10000110010"
		}, {
			A: "VT",
			B: "k",
			C: "75",
			E: "11000010010"
		}, {
			A: "FF",
			B: "l",
			C: "76",
			E: "11001010000"
		}, {
			A: "CR",
			B: "m",
			C: "77",
			E: "11110111010"
		}, {
			A: "SO",
			B: "n",
			C: "78",
			E: "11000010100"
		}, {
			A: "SI",
			B: "o",
			C: "79",
			E: "10001111010"
		}, {
			A: "DLE",
			B: "p",
			C: "80",
			E: "10100111100"
		}, {
			A: "DC1",
			B: "q",
			C: "81",
			E: "10010111100"
		}, {
			A: "DC2",
			B: "r",
			C: "82",
			E: "10010011110"
		}, {
			A: "DC3",
			B: "s",
			C: "83",
			E: "10111100100"
		}, {
			A: "DC4",
			B: "t",
			C: "84",
			E: "10011110100"
		}, {
			A: "NAK",
			B: "u",
			C: "85",
			E: "10011110010"
		}, {
			A: "SYN",
			B: "v",
			C: "86",
			E: "11110100100"
		}, {
			A: "ETB",
			B: "w",
			C: "87",
			E: "11110010100"
		}, {
			A: "CAN",
			B: "x",
			C: "88",
			E: "11110010010"
		}, {
			A: "EM",
			B: "y",
			C: "89",
			E: "11011011110"
		}, {
			A: "SUB",
			B: "z",
			C: "90",
			E: "11011110110"
		}, {
			A: "ESC",
			B: "{",
			C: "91",
			E: "11110110110"
		}, {
			A: "FS",
			B: "|",
			C: "92",
			E: "10101111000"
		}, {
			A: "GS",
			B: "}",
			C: "93",
			E: "10100011110"
		}, {
			A: "RS",
			B: "~",
			C: "94",
			E: "10001011110"
		}, {
			A: "US",
			B: "DEL",
			C: "95",
			E: "10111101000"
		}, {
			A: "FNC3",
			B: "FNC3",
			C: "96",
			E: "10111100010"
		}, {
			A: "FNC2",
			B: "FNC2",
			C: "97",
			E: "11110101000"
		}, {
			A: "SHIFT",
			B: "SHIFT",
			C: "98",
			E: "11110100010"
		}, {
			A: "CodeC",
			B: "CodeC",
			C: "99",
			E: "10111011110"
		}, {
			A: "CodeB",
			B: "FNC4",
			C: "CodeB",
			E: "10111101110"
		}, {
			A: "FNC4",
			B: "CodeA",
			C: "CodeA",
			E: "11101011110"
		}, {
			A: "FNC1",
			B: "FNC1",
			C: "FNC1",
			E: "11110101110"
		}, {
			A: "StartA",
			B: "StartA",
			C: "StartA",
			E: "11010000100"
		}, {
			A: "StartB",
			B: "StartB",
			C: "StartB",
			E: "11010010000"
		}, {
			A: "StartC",
			B: "StartC",
			C: "StartC",
			E: "11010011100"
		}, {
			A: "Stop",
			B: "Stop",
			C: "Stop",
			E: "11000111010"
		}],
		validate: function (a) {
			for (var b = 0; b < a.length; b++)
				if (!this._getEncInfo(a.charAt(b))) return !1;
			return !0
		},
		_encode: function (a, b) {
			b = b || !1;
			var c = this,
				d = [],
				e = c._findPrefix(a),
				f = e[0][0],
				g = e[1],
				h = e[2],
				i = b ? "Start" + f : "Code" + f;
			return d = d.concat(c._encodeCodeset(g, i, f)), h && h.length > 0 && (d = d.concat(c._encode(h, !1))), d && d.length > 0 && (d[0] = d[0].replace("Code", "Start")), d
		},
		_findPrefix: function (a) {
			var b, c, d, e = this,
				f = "",
				g = "";
			for (c = 0; c < a.length; c++)
				if (d = a.charAt(c), 0 !== c) {
					if (b = g, e._getEncInfo(d, "A") || (g = g.replace("A", "")), e._getEncInfo(d, "B") || (g = g.replace("B", "")), e._getEncInfo(d, "C") || (g = g.replace("C", "")), g.length <= 0) return [b.split(""), f, a.substring(c)];
					f += d
				} else e._getEncInfo(d, "A") && (g += "A"), e._getEncInfo(d, "B") && (g += "B"), e._getEncInfo(d, "C") && (g += "C"), f += d;
			return [g.split(""), a, ""]
		},
		_encodeOptimized: function (a) {
			var b = this,
				c = b._encode(a, !0);
			return c = b._optimizeForC(c), c = b._optimizeShifts(c), c && c.length > 0 && (c[0] = c[0].replace("Code", "Start")), c
		},
		_optimizeForC: function (a) {
			var b, c = this._splitOptimizeForC(a),
				d = c[0],
				e = c[1],
				f = c[2],
				g = [];
			if (d && d.length > 0 && (g = g.concat(d)), e && e.length > 0)
				for (g.push(e[0]), b = 1; b < e.length; b += 2) g.push(e[b] + "" + e[b + 1]);
			return f && f.length > 0 && (g = g.concat(this._optimizeForC(f))), g
		},
		_splitOptimizeForC: function (a) {
			if (!a || a.length <= 0) return [
				[],
				[],
				[]
			];
			if (!/^(Code|Start)[A|B|C]$/.test(a[0])) return [a, [],
				[]
			];
			if (3 == a.length && /^\d$/.test(a[1]) && /^\d$/.test(a[2])) return [
				[],
				["CodeC", a[1], a[2]],
				[]
			];
			var b, c, d, e, f = [],
				g = [],
				h = [],
				i = -1,
				j = -1;
			for (b = 0; b < a.length; b++)
				if (/^(Code|Start)[A|B|C]$/.test(a[b]) && (c = a[b].substring(a[b].length - 1)), /^\d$/.test(a[b]) && i == -1 && (i = b, j = -1), i > -1 && !/^\d$/.test(a[b]) && (j = b - 1), i > -1 && b >= a.length - 1 && (j = b), i > -1 && j > -1) {
					if (e = j - i + 1, e >= 4) return f = 1 == i ? [] : a.slice(0, i), g = ["CodeC"], d = j + (e % 2 === 0 ? 1 : 0), g = g.concat(a.slice(i, d)), d < a.length && (h = ["Code" + c].concat(a.slice(d))), [f, g, h];
					i = j = -1
				}
			return [a, [],
				[]
			]
		},
		_optimizeShifts: function (a) {
			return a
		},
		_encodeCodeset: function (a, b, c) {
			var d = this;
			return "A" == c ? d._encodeA(a, b) : "B" == c ? d._encodeB(a, b) : "C" == c ? d._encodeC(a, b) : null
		},
		_encodeA: function (a, b) {
			return [b].concat(a.split(""))
		},
		_encodeB: function (a, b) {
			return [b].concat(a.split(""))
		},
		_encodeC: function (a, b) {
			var c, d = [b];
			for (c = 0; c < a.length; c += 2) d.push(a.charAt(c) + a.charAt(c + 1));
			return d
		},
		_getEncInfo: function (a, b) {
			b = b || null;
			var c, d, e = this.encodingTable;
			for (d = 0; d < e.length; d++)
				if (b) {
					if (e[d][b] == a) return c = e[d], c.pos = d, c;
					if ("100" == a || "101" == a || "102" == a) return c = e[l(a)], c.pos = d, c
				} else if (e[d].A == a || e[d].B == a || e[d].C == a) return c = e[d], c.pos = d, c;
			return null
		},
		encode: function (a, b) {
			var c, d = this,
				e = "",
				f = d.checksum(a),
				g = d._encodeOptimized(a),
				h = g[0].charAt(g[0].length - 1);
			for (c = 0; c < g.length; c++) e += d._getEncInfo(g[c], h).E, /^(Start|Code)[A|B|C]$/.test(g[c]) && (h = g[c].charAt(g[c].length - 1));
			return e += d._getEncInfo(f, "C").E + d.encodingTable[106].E + "11", [e]
		},
		checksum: function (a) {
			var b, c, d = this,
				e = d._encodeOptimized(a),
				f = d._getEncInfo(e[0]).pos;
			for (c = 1; c < e.length; c++) f += d._getEncInfo(e[c]).pos * c;
			return b = f % 103, b > 10 ? b + "" : "0" + b
		}
	});
	G.addType(W);
	var X = W.extend({
		type: s,
		validate: function (a) {
			for (var b = 0; b < a.length; b++)
				if (!this._getEncInfo(a.charAt(b), "A")) return !1;
			return !0
		},
		_encodeOptimized: function (a) {
			return this._encodeA(a, "StartA")
		}
	});
	G.addType(X);
	var Y = W.extend({
		type: t,
		validate: function (a) {
			for (var b = 0; b < a.length; b++)
				if (!this._getEncInfo(a.charAt(b), "B")) return !1;
			return !0
		},
		_encodeOptimized: function (a) {
			return this._encodeB(a, "StartB")
		}
	});
	G.addType(Y);
	var Z = W.extend({
		type: u,
		validate: function (a) {
			return /^\d+$/.test(a) && a.length % 2 === 0
		},
		_encodeOptimized: function (a) {
			return this._encodeC(a, "StartC")
		}
	});
	G.addType(Z);
	var $ = H.extend({
		type: v,
		validateRegExp: "^[\\d\\-]+$",
		encode: function (a, b) {
			b && (a += this.checksum(a)), a = "[" + a + "]";
			var c, d = "",
				e = {
					0: "10101110111010",
					1: "11101010101110",
					2: "10111010101110",
					3: "11101110101010",
					4: "10101110101110",
					5: "11101011101010",
					6: "10111011101010",
					7: "10101011101110",
					8: "11101010111010",
					9: "10111010111010",
					"[": "11011010",
					"]": "1101011"
				};
			for (c = 0; c < a.length; c++) d += e[a.charAt(c)];
			return [d]
		},
		checksum: function (a) {
			return this._checksum(a, 3, 1, 10)
		},
		_checksum: function (a, b, c, d) {
			var e, f, g = "0123456789",
				h = 0,
				i = b;
			for (e = a.length - 1; e >= 0; e--) f = g.indexOf(a.charAt(e)), h += f * i, i = i == b ? c : b;
			return h %= d, 0 !== h && (h = d - h), g.charAt(h)
		}
	});
	G.addType($);
	var _ = $.extend({
		type: w,
		encode: function (a, b) {
			b && (a += this.checksum(a)), a.length % 2 !== 0 && (a = "0" + a), a = "[" + a + "]";
			var c, d, e = "",
				f = {
					"00": "10101100110010",
					"01": "10010110110100",
					"02": "10100110110100",
					"03": "10010011011010",
					"04": "10101100110100",
					"05": "10010110011010",
					"06": "10100110011010",
					"07": "10101101100100",
					"08": "10010110110010",
					"09": "10100110110010",
					10: "11010100100110",
					11: "11001010101100",
					12: "11010010101100",
					13: "11001001010110",
					14: "11010100101100",
					15: "11001010010110",
					16: "11010010010110",
					17: "11010101001100",
					18: "11001010100110",
					19: "11010010100110",
					20: "10110100100110",
					21: "10011010101100",
					22: "10110010101100",
					23: "10011001010110",
					24: "10110100101100",
					25: "10011010010110",
					26: "10110010010110",
					27: "10110101001100",
					28: "10011010100110",
					29: "10110010100110",
					30: "11011010010010",
					31: "11001101010100",
					32: "11011001010100",
					33: "11001100101010",
					34: "11011010010100",
					35: "11001101001010",
					36: "11011001001010",
					37: "11011010100100",
					38: "11001101010010",
					39: "11011001010010",
					40: "10101100100110",
					41: "10010110101100",
					42: "10100110101100",
					43: "10010011010110",
					44: "10101100101100",
					45: "10010110010110",
					46: "10100110010110",
					47: "10101101001100",
					48: "10010110100110",
					49: "10100110100110",
					50: "11010110010010",
					51: "11001011010100",
					52: "11010011010100",
					53: "11001001101010",
					54: "11010110010100",
					55: "11001011001010",
					56: "11010011001010",
					57: "11010110100100",
					58: "11001011010010",
					59: "11010011010010",
					60: "10110110010010",
					61: "10011011010100",
					62: "10110011010100",
					63: "10011001101010",
					64: "10110110010100",
					65: "10011011001010",
					66: "10110011001010",
					67: "10110110100100",
					68: "10011011010010",
					69: "10110011010010",
					70: "10101001100110",
					71: "10010101101100",
					72: "10100101101100",
					73: "10010010110110",
					74: "10101001101100",
					75: "10010100110110",
					76: "10100100110110",
					77: "10101011001100",
					78: "10010101100110",
					79: "10100101100110",
					80: "11010100110010",
					81: "11001010110100",
					82: "11010010110100",
					83: "11001001011010",
					84: "11010100110100",
					85: "11001010011010",
					86: "11010010011010",
					87: "11010101100100",
					88: "11001010110010",
					89: "11010010110010",
					90: "10110100110010",
					91: "10011010110100",
					92: "10110010110100",
					93: "10011001011010",
					94: "10110100110100",
					95: "10011010011010",
					96: "10110010011010",
					97: "10110101100100",
					98: "10011010110010",
					99: "10110010110010",
					"[": "1010",
					"]": "1101"
				};
			for (c = 0; c < a.length; c += d) d = isNaN(a.charAt(c)) ? 1 : 2, e += f[a.substr(c, d)];
			return [e]
		}
	});
	G.addType(_);
	for (var aa = {
			types: [],
			addType: function (a) {
				this.types[a.prototype.type] = a
			},
			byType: function (a, b) {
				return this.types[a] ? new this.types[a](b) : null
			}
		}, ba = g.extend({
			type: null,
			init: function (a) {
				var b = this,
					c = a.style;
				b.options = a, b.width = a.width - c.paddingLeft - c.paddingRight, b.height = a.height - c.paddingTop - c.paddingBottom, j || h.namespaces.scvbarcode || h.namespaces.add("scvbarcode", "urn:schemas-microsoft-com:vml", "#default#VML")
			},
			all: function (c, d) {
				var e = this,
					f = e.options,
					g = f.style,
					h = f.text,
					k = h.style,
					l = "",
					m = function (b) {
						return a("<div/>").html(b).text()
					},
					n = "",
					o = m(e.width > 100 ? "&#68;&#101;&#109;&#111;&#32;&#86;&#101;&#114;&#115;&#105;&#111;&#110;" : "&#68;&#101;&#109;&#111;"),
					p = m("&#104;&#116;&#116;&#112;&#58;&#47;&#47;&#119;&#119;&#119;&#46;&#115;&#104;&#105;&#101;&#108;&#100;&#117;&#105;&#46;&#99;&#111;&#109;");
				b.guid();
				return g.paddingLeft && (l += "margin-left:" + g.paddingLeft + "px;"), g.paddingTop && (l += "margin-top:" + g.paddingTop + "px;"), g.paddingBottom && (l += "margin-bottom:" + g.paddingBottom + "px;"), g.paddingRight && (l += "margin-right:" + g.paddingRight + "px;"), n += j ? '<text x="' + e.width + '" y="' + (e.height - k.paddingBottom) + '" fill="#999999" text-anchor="end" font-size="12" style="cursor:pointer; z-index:150; font-size:12px;" onClick="javascript: location.href = \'' + p + "';\">" + o + "</text>" : '<div style="position:absolute; width:' + (e.width + 2) + "px; text-align:right; color:#999999; cursor:pointer; z-index:150; top:" + (f.height - 12 - k.paddingBottom) + 'px; font-size:12px;"><a href="' + p + '" style="color:#999999; text-decoration:none; background-color:#fdfdfd; font-size:12px;">' + o + "</a></div>", j ? '<svg xmlns="' + i + '" version="1.1" width="' + e.width + '" height="' + e.height + '" shape-rendering="crispEdges"' + (l ? ' style="' + l + '" ' : "") + ">" + c + d + n + "</svg>" : '<scvbarcode:group style="position:relative; width:' + e.width + "px; height:" + e.height + "px; " + l + '" coordsize="' + e.width + "," + e.height + '">' + c + d + n + "</scvbarcode:group>"
			},
			barcode: function (a) {
				for (var b, c, d = this, e = d.options, f = e.style, g = d.options.text, h = g.style, i = a[0], m = a[1] || [], n = g.enabled ? h.fontSize + h.paddingTop + h.paddingBottom : 0, o = d.width / i.length, p = d.height - n - (m.length > 0 ? 5 : 0), q = p + 5, r = [], s = 0; s < i.length; s++) {
					var t = i.charAt(s);
					if ("1" == t) {
						for (var u = s * o, v = p, w = 0; w < m.length; w++)
							if (m[w] == s) {
								v = q;
								break
							}
						var x = {
							x1: u,
							y1: 0,
							x2: u,
							y2: v,
							w: o
						};
						1 == l(b) && (c = r.pop(), x = {
							x1: c.x1,
							y1: c.y1,
							x2: c.x2,
							y2: c.y2,
							w: c.w + o
						}), r.push(x)
					}
					b = t
				}
				return k(r, function (a) {
					return j ? '<line x1="' + (a.x1 + a.w / 2) + '" y1="' + a.y1 + '" x2="' + (a.x2 + a.w / 2) + '" y2="' + a.y2 + '" style="stroke:' + f.color + "; stroke-width:" + a.w + '" />' : '<scvbarcode:line from="' + (a.x1 + a.w / 2) + "," + a.y1 + '" to="' + (a.x2 + a.w / 2) + "," + a.y2 + '" strokecolor="' + f.color + '" strokeweight="' + a.w + 'px;" stroke="true" />'
				}).join("")
			},
			text: function (a) {
				var b = this,
					c = b.options.text,
					d = c.style,
					e = c.enabled ? d.fontSize + d.paddingTop + d.paddingBottom : 0;
				return c.enabled ? j ? '<text x="' + b.width / 2 + '" y="' + (b.height - d.paddingBottom) + '" fill="' + d.color + '" text-anchor="middle" font-size="' + d.fontSize + '" font-family="' + d.fontFamily + ';">' + a + "</text>" : '<div style="position:absolute; width:' + b.width + "px; text-align:center; color:" + d.color + "; top:" + (b.options.height - e - d.paddingBottom) + "px; font-size:" + d.fontSize + "px; font-family:" + d.fontFamily + ';">' + a + "</div>" : ""
			}
		}), ca = [n, o, p, q, r, s, t, u, x, y, z, A, B, C, D, E, v, w], da = 0; da < ca.length; da++) aa.addType(ba.extend({
		type: ca[da]
	}));
	var ea = ba.extend({
		type: "POSTNET",
		barcode: function (a) {
			for (var b = this, c = b.options, d = c.style, e = b.options.text, f = e.style, g = a[0], h = e.enabled ? f.fontSize + f.paddingTop + f.paddingBottom : 0, i = b.width / (2 * g.length - 1), l = b.height - h, m = [], n = 0; n < g.length; n++) {
				var o = n * i * 2,
					p = "1" == g.charAt(n) ? 0 : l / 2;
				m.push({
					x1: o,
					y1: p,
					x2: o,
					y2: l,
					w: i
				})
			}
			return k(m, function (a) {
				return j ? '<line x1="' + (a.x1 + a.w / 2) + '" y1="' + a.y1 + '" x2="' + (a.x2 + a.w / 2) + '" y2="' + a.y2 + '" style="stroke:' + d.color + "; stroke-width:" + a.w + '" />' : '<scvbarcode:line from="' + (a.x1 + a.w / 2) + "," + a.y1 + '" to="' + (a.x2 + a.w / 2) + "," + a.y2 + '" strokecolor="' + d.color + '" strokeweight="' + a.w + 'px;" stroke="true" />'
			}).join("")
		}
	});
	aa.addType(ea);
	var fa = {
			value: null,
			type: null,
			checksum: !0,
			width: 300,
			height: 100,
			style: {
				background: null,
				borderColor: null,
				borderStyle: null,
				borderWidth: 0,
				color: "#000000",
				paddingTop: 5,
				paddingLeft: 5,
				paddingRight: 5,
				paddingBottom: 5
			},
			text: {
				enabled: !1,
				checksum: !1,
				style: {
					color: "#000000",
					fontFamily: "Segoe UI, Tahoma, Verdana, sans-serif",
					fontSize: 13,
					paddingTop: 2,
					paddingBottom: 0
				}
			}
		},
		ga = e.extend({
			init: function () {
				e.fn.init.apply(this, arguments);
				var b, c, d, f = this,
					g = f.options,
					h = g.style,
					i = g.type,
					j = g.dieOnError,
					k = g.value + "",
					l = G.byType(i),
					n = a(f.element),
					o = "";
				return l ? l.validate(k) ? (b = aa.byType(i, g)) ? (n.css({
					background: h.background,
					borderColor: h.borderColor,
					borderStyle: h.borderStyle,
					borderWidth: h.borderWidth,
					width: g.width,
					height: g.height
				}), c = l.encode(k, g.checksum), d = b.barcode(c), g.text.enabled && (o = b.text(k + (g.text.checksum ? l.checksum(k) : ""))), void n.html(b.all(d, o))) : void m("Invalid barcode type (2)", j) : void m("Invalid barcode value: " + k, j) : void m("Invalid barcode type: " + i, j)
			},
			destroy: function () {
				this.element.empty(), e.fn.destroy.call(this)
			}
		});
	ga.defaults = fa, b.ui.plugin("Barcode", ga)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e = b.ui.Widget,
		f = b.Constants,
		g = b.Class,
		h = document,
		i = f.SVG_NS,
		j = !!h.createElementNS && !!h.createElementNS(i, "svg").createSVGRect,
		k = a.map,
		l = b.to["int"],
		m = b.error,
		n = function (a) {
			return l(a, 10).toString(2)
		},
		o = function (a) {
			return l(a, 2)
		},
		p = function (a, b) {
			for (a += ""; a.length < b;) a = "0" + a;
			return a
		},
		q = function (a, b) {
			for (a += ""; a.length < b;) a += "0";
			return a
		},
		r = "byte",
		s = "numeric",
		t = "alphanumeric",
		u = {
			modes: [],
			addMode: function (a) {
				this.modes[a.prototype.mode] = a
			},
			byMode: function (a) {
				return this.modes[a] ? new this.modes[a] : null
			}
		},
		v = g.extend({
			mode: null,
			codeMode: null,
			validateRegex: null,
			_verErrLenTable: {
				"1L": 152,
				"1M": 128,
				"1Q": 104,
				"1H": 72,
				"2L": 272,
				"2M": 224,
				"2Q": 176,
				"2H": 128,
				"3L": 440,
				"3M": 352,
				"3Q": 272,
				"3H": 208,
				"4L": 640,
				"4M": 512,
				"4Q": 384,
				"4H": 288,
				"5L": 864,
				"5M": 688,
				"5Q": 496,
				"5H": 368,
				"6L": 1088,
				"6M": 864,
				"6Q": 608,
				"6H": 480,
				"7L": 1248,
				"7M": 992,
				"7Q": 704,
				"7H": 528,
				"8L": 1552,
				"8M": 1232,
				"8Q": 880,
				"8H": 688,
				"9L": 1856,
				"9M": 1456,
				"9Q": 1056,
				"9H": 800,
				"10L": 2192,
				"10M": 1728,
				"10Q": 1232,
				"10H": 976,
				"11L": 2592,
				"11M": 2032,
				"11Q": 1440,
				"11H": 1120,
				"12L": 2960,
				"12M": 2320,
				"12Q": 1648,
				"12H": 1264,
				"13L": 3424,
				"13M": 2672,
				"13Q": 1952,
				"13H": 1440,
				"14L": 3688,
				"14M": 2920,
				"14Q": 2088,
				"14H": 1576,
				"15L": 4184,
				"15M": 3320,
				"15Q": 2360,
				"15H": 1784,
				"16L": 4712,
				"16M": 3624,
				"16Q": 2600,
				"16H": 2024,
				"17L": 5176,
				"17M": 4056,
				"17Q": 2936,
				"17H": 2264,
				"18L": 5768,
				"18M": 4504,
				"18Q": 3176,
				"18H": 2504,
				"19L": 6360,
				"19M": 5016,
				"19Q": 3560,
				"19H": 2728,
				"20L": 6888,
				"20M": 5352,
				"20Q": 3880,
				"20H": 3080,
				"21L": 7456,
				"21M": 5712,
				"21Q": 4096,
				"21H": 3248,
				"22L": 8048,
				"22M": 6256,
				"22Q": 4544,
				"22H": 3536,
				"23L": 8752,
				"23M": 6880,
				"23Q": 4912,
				"23H": 3712,
				"24L": 9392,
				"24M": 7312,
				"24Q": 5312,
				"24H": 4112,
				"25L": 10208,
				"25M": 8e3,
				"25Q": 5744,
				"25H": 4304,
				"26L": 10960,
				"26M": 8496,
				"26Q": 6032,
				"26H": 4768,
				"27L": 11744,
				"27M": 9024,
				"27Q": 6464,
				"27H": 5024,
				"28L": 12248,
				"28M": 9544,
				"28Q": 6968,
				"28H": 5288,
				"29L": 13048,
				"29M": 10136,
				"29Q": 7288,
				"29H": 5608,
				"30L": 13880,
				"30M": 10984,
				"30Q": 7880,
				"30H": 5960,
				"31L": 14744,
				"31M": 11640,
				"31Q": 8264,
				"31H": 6344,
				"32L": 15640,
				"32M": 12328,
				"32Q": 8920,
				"32H": 6760,
				"33L": 16568,
				"33M": 13048,
				"33Q": 9368,
				"33H": 7208,
				"34L": 17528,
				"34M": 13800,
				"34Q": 9848,
				"34H": 7688,
				"35L": 18448,
				"35M": 14496,
				"35Q": 10288,
				"35H": 7888,
				"36L": 19472,
				"36M": 15312,
				"36Q": 10832,
				"36H": 8432,
				"37L": 20528,
				"37M": 15936,
				"37Q": 11408,
				"37H": 8768,
				"38L": 21616,
				"38M": 16816,
				"38Q": 12016,
				"38H": 9136,
				"39L": 22496,
				"39M": 17728,
				"39Q": 12656,
				"39H": 9776,
				"40L": 23648,
				"40M": 18672,
				"40Q": 13328,
				"40H": 10208
			},
			_errorCorrectionToMask: {
				L: "01",
				M: "00",
				Q: "11",
				H: "10"
			},
			_formatInformation: {
				"00000": "101010000010010",
				"00001": "101000100100101",
				"00010": "101111001111100",
				"00011": "101101101001011",
				"00100": "100010111111001",
				"00101": "100000011001110",
				"00110": "100111110010111",
				"00111": "100101010100000",
				"01000": "111011111000100",
				"01001": "111001011110011",
				"01010": "111110110101010",
				"01011": "111100010011101",
				"01100": "110011000101111",
				"01101": "110001100011000",
				"01110": "110110001000001",
				"01111": "110100101110110",
				10000: "001011010001001",
				10001: "001001110111110",
				10010: "001110011100111",
				10011: "001100111010000",
				10100: "000011101100010",
				10101: "000001001010101",
				10110: "000110100001100",
				10111: "000100000111011",
				11000: "011010101011111",
				11001: "011000001101000",
				11010: "011111100110001",
				11011: "011101000000110",
				11100: "010010010110100",
				11101: "010000110000011",
				11110: "010111011011010",
				11111: "010101111101101"
			},
			validate: function (a) {
				return !this.validateRegex || new RegExp(this.validateRegex).test(a)
			},
			encode: function (a, b) {
				var c, d, e, f, g = this,
					h = g._getVersion(a, b),
					i = 4,
					j = 21 + 4 * (h - 1),
					k = j + 2 * i,
					l = h + b,
					m = g._getFormatData(a, b),
					n = g.encodeValue(a),
					o = g._getDataLength(a, b),
					p = o - (m.length + n.length) > 4 ? 4 : o - (m.length + n.length);
				return n = q(n, n.length + p), c = g._getBinaryValues(m + n), n = c.join(""), n = g._padEncodedToLength(n, o), c = g._getBinaryValues(n), e = g._getIntegerValues(c), n = g._getEC(l, d, e), f = g._getBinaryMatrix(n, h, j, k, b)
			},
			encodeValue: null,
			_getBinaryMatrix: function (a, b, c, d, e) {
				var f, g, h, i, j, k, l, m, n = this,
					o = ["000", "001", "010", "011", "100", "101", "110", "111"],
					p = [],
					q = [],
					r = [],
					s = n._getPositionAdjustmentsTable();
				for (j = 0; j < d; j++)
					for (q[j] = [], k = 0; k < d; k++) q[j][k] = 0;
				for (j = 0; j < c; j++) r.push(new Array(c));
				if (n._fullFinderPattern(q, 4, 4), n._fillFinderPatternFilledValues(r, 0, 0), n._fullFinderPattern(q, 4, d - 11), n._fillFinderPatternFilledValues(r, 0, c - 8), n._fullFinderPattern(q, d - 11, 4), n._fillFinderPatternFilledValues(r, c - 8, 0), n._fillTimingPattern(q, r, c), q[d - 12][12] = 1, r[d - 16][8] = 1, b > 1)
					for (j = 0; j < s[b].length; j++)
						for (k = 0; k < s[b].length; k++) l = s[b][j] + 4, m = s[b][k] + 4, 10 == l && 10 == m || 10 == l && m == d - 11 || l == d - 11 && 10 == m || (q[l - 2][m - 2] = 1, r[l - 6][m - 6] = 1, q[l - 2][m - 1] = 1, r[l - 6][m - 5] = 1, q[l - 2][m] = 1, r[l - 6][m - 4] = 1, q[l - 2][m + 1] = 1, r[l - 6][m - 3] = 1, q[l - 2][m + 2] = 1, r[l - 6][m - 2] = 1, q[l - 1][m - 2] = 1, r[l - 5][m - 6] = 1, q[l - 1][m - 1] = 0, r[l - 5][m - 5] = 1, q[l - 1][m] = 0, r[l - 5][m - 4] = 1, q[l - 1][m + 1] = 0, r[l - 5][m - 3] = 1, q[l - 1][m + 2] = 1, r[l - 5][m - 2] = 1, q[l][m - 2] = 1, r[l - 4][m - 6] = 1, q[l][m - 1] = 0, r[l - 4][m - 5] = 1, q[l][m] = 1, r[l - 4][m - 4] = 1, q[l][m + 1] = 0, r[l - 4][m - 3] = 1, q[l][m + 2] = 1, r[l - 4][m - 2] = 1, q[l + 1][m - 2] = 1, r[l - 3][m - 6] = 1, q[l + 1][m - 1] = 0, r[l - 3][m - 5] = 1, q[l + 1][m] = 0, r[l - 3][m - 4] = 1, q[l + 1][m + 1] = 0, r[l - 3][m - 3] = 1, q[l + 1][m + 2] = 1, r[l - 3][m - 2] = 1, q[l + 2][m - 2] = 1, r[l - 2][m - 6] = 1, q[l + 2][m - 1] = 1, r[l - 2][m - 5] = 1, q[l + 2][m] = 1, r[l - 2][m - 4] = 1, q[l + 2][m + 1] = 1, r[l - 2][m - 3] = 1, q[l + 2][m + 2] = 1, r[l - 2][m - 2] = 1);
				for (b >= 7 && n._fillHigherVersionData(q, r, b, c, d), i = 0; i < 8; i++) {
					for (f = 0, h = [], j = 0; j < q.length; j++) h.push(q[j].slice(0));
					n._fillFormatData(q, r, c, d, o[i], e), n._fillMatrix(r, h, o[i], c, a), f += n._calcPenalty1(h, c), f += n._calcPenalty2(h, c), f += n._calcPenalty3(h, c), f += n._calcPenalty4(h, c), p.push(f)
				}
				return g = n._getSmallestPenaltyIndex(p), n._fillFormatData(q, r, c, d, o[g], e), n._fillMatrix(r, q, o[g], c, a), q
			},
			_fillHigherVersionData: function (a, b, c, d, e) {
				var f = this,
					g = {
						7: [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
						8: [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
						9: [1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0],
						10: [1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
						11: [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0],
						12: [0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
						13: [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0],
						14: [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
						15: [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0],
						16: [0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0],
						17: [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
						18: [1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
						19: [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0],
						20: [0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
						21: [1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
						22: [1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0],
						23: [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
						24: [0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0],
						25: [1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0],
						26: [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0],
						27: [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0],
						28: [0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
						29: [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0],
						30: [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0],
						31: [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0],
						32: [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
						33: [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1],
						34: [0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
						35: [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1],
						36: [1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1],
						37: [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
						38: [0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
						39: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1],
						40: [1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1]
					},
					h = g[c];
				f._fillUpperVersionInformation(a, b, h, d, e), f._fillLowerVersionInformation(a, b, h, d, e)
			},
			_fillUpperVersionInformation: function (a, b, c, d, e) {
				var f, g = e - 15,
					h = d - 11,
					i = 0;
				for (f = 4; f < 10; f++) a[f][g] = c[i], b[f - 4][h] = 1, i++, a[f][g + 1] = c[i], b[f - 4][h + 1] = 1, i++, a[f][g + 2] = c[i], b[f - 4][h + 2] = 1, i++
			},
			_fillLowerVersionInformation: function (a, b, c, d, e) {
				var f, g = e - 13,
					h = d - 9,
					i = 0;
				for (f = 4; f < 10; f++) a[g][f] = c[i], b[h][f - 4] = 1, i++, a[g - 1][f] = c[i], b[h - 1][f - 4] = 1, i++, a[g - 2][f] = c[i], b[h - 2][f - 4] = 1, i++
			},
			_getSmallestPenaltyIndex: function (a) {
				var b, c = a[0],
					d = 0;
				for (b = 0; b < a.length; b++) a[b] < c && (d = b);
				return d
			},
			_calcPenalty1: function (a, b) {
				var c, d, e, f, g = 0;
				for (d = 0; d < b; d++)
					for (f = 1, e = 1; e < b; e++) c = a[d + 4][e + 4], c === a[d + 4][e + 3] ? (f++, 5 == f ? g += 3 : f > 5 && g++) : f = 1;
				for (e = 0; e < b; e++)
					for (f = 1, d = 1; d < b; d++) c = a[d + 4][e + 4], c === a[d + 3][e + 4] ? (f++, 5 === f ? g += 3 : f > 5 && g++) : f = 1;
				return g
			},
			_calcPenalty2: function (a, b) {
				var c, d, e, f = 0;
				for (d = 0; d < b - 1; d++)
					for (e = 0; e < b - 1; e++) c = a[d + 4][e + 4], c == a[d + 4][e + 5] && c == a[d + 5][e + 4] && c == a[d + 5][e + 5] && (f += 3);
				return f
			},
			_calcPenalty3: function (a, b) {
				var c, d, e = 0;
				for (c = 0; c < b; c++)
					for (d = 0; d <= b - 7; d++) a[c + 4][d + 4] && !a[c + 4][d + 5] && a[c + 4][d + 6] && a[c + 4][d + 7] && a[c + 4][d + 8] && !a[c + 4][d + 9] && a[c + 4][d + 10] && (e += 40);
				for (d = 0; d < b; d++)
					for (c = 0; c <= b - 7; c++) a[c + 4][d + 4] && !a[c + 5][d + 4] && a[c + 6][d + 4] && a[c + 7][d + 4] && a[c + 8][d + 4] && !a[c + 9][d + 4] && a[c + 10][d + 4] && (e += 40);
				return e
			},
			_calcPenalty4: function (a, b) {
				var c, d, e = 0,
					f = 0,
					g = 0;
				for (c = 0; c < b; c++)
					for (d = 0; d < b; d++) a[c + 4][d + 4] ? f++ : g++;
				return e = l(2 * (f / (f + g) * 100 - 50))
			},
			_fillFormatData: function (a, b, c, d, e, f) {
				var g = this,
					h = g._errorCorrectionToMask[f] + e,
					i = g._formatInformation[h],
					j = d - 5,
					k = d - 5;
				a[12][4] = l(i.charAt(0)), a[12][5] = l(i.charAt(1)), a[12][6] = l(i.charAt(2)), a[12][7] = l(i.charAt(3)), a[12][8] = l(i.charAt(4)), a[12][9] = l(i.charAt(5)), a[12][11] = l(i.charAt(6)), a[12][12] = l(i.charAt(7)), a[11][12] = l(i.charAt(8)), a[9][12] = l(i.charAt(9)), a[8][12] = l(i.charAt(10)), a[7][12] = l(i.charAt(11)), a[6][12] = l(i.charAt(12)), a[5][12] = l(i.charAt(13)), a[4][12] = l(i.charAt(14)), a[j][12] = l(i.charAt(0)), a[j - 1][12] = l(i.charAt(1)), a[j - 2][12] = l(i.charAt(2)), a[j - 3][12] = l(i.charAt(3)), a[j - 4][12] = l(i.charAt(4)), a[j - 5][12] = l(i.charAt(5)), a[j - 6][12] = l(i.charAt(6)), a[12][k - 7] = l(i.charAt(7)), a[12][k - 6] = l(i.charAt(8)), a[12][k - 5] = l(i.charAt(9)), a[12][k - 4] = l(i.charAt(10)), a[12][k - 3] = l(i.charAt(11)), a[12][k - 2] = l(i.charAt(12)), a[12][k - 1] = l(i.charAt(13)), a[12][k] = l(i.charAt(14)), b[8][0] = 1, b[8][1] = 1, b[8][2] = 1, b[8][3] = 1, b[8][4] = 1, b[8][5] = 1, b[8][7] = 1, b[8][8] = 1, b[7][8] = 1, b[5][8] = 1, b[4][8] = 1, b[3][8] = 1, b[2][8] = 1, b[1][8] = 1, b[0][8] = 1, b[c - 1][8] = 1, b[c - 2][8] = 1, b[c - 3][8] = 1, b[c - 4][8] = 1, b[c - 5][8] = 1, b[c - 6][8] = 1, b[c - 7][8] = 1, b[8][c - 8] = 1, b[8][c - 7] = 1, b[8][c - 6] = 1, b[8][c - 5] = 1, b[8][c - 4] = 1, b[8][c - 3] = 1, b[8][c - 2] = 1, b[8][c - 1] = 1
			},
			_fillMatrix: function (a, b, c, d, e) {
				var f, g, h = this,
					i = 0,
					j = !0;
				for (f = d - 1; f >= 0; f -= 2)
					if (6 == f && f--, j) {
						for (g = d - 1; g >= 0; g--) a[g][f] || (h._fillModule(g, f, i, b, c, e), i++), f - 1 >= 0 && !a[g][f - 1] && (h._fillModule(g, f - 1, i, b, c, e), i++);
						j = !j
					} else {
						for (g = 0; g < d; g++) a[g][f] || (h._fillModule(g, f, i, b, c, e), i++), f - 1 >= 0 && !a[g][f - 1] && (h._fillModule(g, f - 1, i, b, c, e), i++);
						j = !j
					}
			},
			_fillModule: function (a, b, c, d, e, f) {
				var g = this;
				c < f.length ? g._fillCharacter(a, b, f.charAt(c), d, e) : g._fillCharacter(a, b, "0", d, e)
			},
			_fillCharacter: function (a, b, c, d, e) {
				var f, g;
				switch (e) {
					case "000":
						f = (a + b) % 2 === 0;
						break;
					case "001":
						f = a % 2 === 0;
						break;
					case "010":
						f = b % 3 === 0;
						break;
					case "011":
						f = (a + b) % 3 === 0;
						break;
					case "100":
						f = (a / 2 + b / 3) % 2 === 0;
						break;
					case "101":
						f = a * b % 2 + a * b % 3 === 0;
						break;
					case "110":
						f = (a * b % 2 + a * b % 3) % 2 === 0;
						break;
					case "111":
						f = ((a + b) % 2 + a * b % 3) % 2 === 0;
						break;
					default:
						f = (a + b) % 2 === 0
				}
				g = f ? "0" == c ? 1 : 0 : "0" == c ? 0 : 1, d[a + 4][b + 4] = g
			},
			_fillTimingPattern: function (a, b, c) {
				for (var d = 10, e = 12, f = !0; e < c - 4;) f && (a[d][e] = 1), b[d - 4][e - 4] = 1, f = !f, e++;
				for (e = 10, d = 12, f = !0; d < c - 4;) f && (a[d][e] = 1), b[d - 4][e - 4] = 1, f = !f, d++
			},
			_fullFinderPattern: function (a, b, c) {
				var d;
				for (d = 0; d < 7; d++) a[b + d][c] = 1, a[b][c + d] = 1, a[b + d][c + 6] = 1, a[b + 6][c + d] = 1;
				for (b += 2, c += 2, d = 0; d < 3; d++) a[b + d][c] = 1, a[b + d][c + 1] = 1, a[b + d][c + 2] = 1
			},
			_fillFinderPatternFilledValues: function (a, b, c) {
				var d, e, f, g;
				for (0 === b && 0 === c ? d = e = 8 : 0 === b && c > 0 ? (d = 8, e = c + 8) : (d = b + 8, e = 8), f = b; f < d; f++)
					for (g = c; g < e; g++) a[f][g] = 1
			},
			_getEC: function (a, b, c) {
				for (var d, e, f = this, g = f._getCodewordsLengthTable(), h = g[a], i = 0, j = [], k = [], l = [], m = [], o = [], q = [], r = [], s = [], t = h.firstBlockCount, u = h.secondBlockCount, v = [], w = []; t > 0; t--) {
					for (v = [], d = 0; d < h.firstDataCodeWords; d++) v[v.length] = c[i], i++;
					j[j.length] = v, o[o.length] = f._getErrorCorrectionForBlock(v, h)
				}
				for (; u > 0; u--) {
					for (w = [], e = 0; e < h.secondBlockCodeWords; e++) w[w.length] = c[i], i++;
					k[k.length] = w, q[q.length] = f._getErrorCorrectionForBlock(w, h)
				}
				var x, y = h.firstDataCodeWords * h.firstBlockCount + h.secondBlockCodeWords * h.secondBlockCount,
					z = h.codewordsPerBlock * h.firstBlockCount + h.codewordsPerBlock * h.secondBlockCount,
					A = 0,
					B = j.length + k.length;
				for (x = 0; x < B; x++) 0 === A ? j.length > 0 ? (l[l.length] = j[0], j.splice(0, 1)) : (l[l.length] = k[0], A++, k.splice(0, 1)) : 1 === A && k.length > 0 && (l[l.length] = k[0], k.splice(0, 1));
				for (A = 0, B = o.length + q.length, x = 0; x < B; x++) 0 === A ? o.length > 0 ? (m[m.length] = o[0], o.splice(0, 1)) : (m[m.length] = q[0], A++, q.splice(0, 1)) : 1 === A && q.length > 0 && (m[m.length] = q[0], q.splice(0, 1));
				var C, D = l.length,
					E = m.length,
					F = "";
				for (A = 0, C = 0; C < y; C++) A === D && (A = 0), l[A].length > 0 ? (r[r.length] = l[A][0], l[A].splice(0, 1), A++) : (A++, C--);
				for (A = 0, C = 0; C < z; C++) A === E && (A = 0), m[A].length > 0 ? (s[s.length] = m[A][0], m[A].splice(0, 1), A++) : (A++, C--);
				for (C = 0; C < r.length; C++) F += p(n(r[C]), 8);
				for (C = 0; C < s.length; C++) F += p(n(s[C]), 8);
				return F
			},
			_getErrorCorrectionForBlock: function (a, b) {
				var c, d, e, f, g = b.codewordsPerBlock,
					h = [],
					i = [],
					j = 0,
					k = {
						7: [87, 229, 146, 149, 238, 102, 21],
						10: [251, 67, 46, 61, 118, 70, 64, 94, 32, 45],
						13: [74, 152, 176, 100, 86, 100, 106, 104, 130, 218, 206, 140, 78],
						15: [8, 183, 61, 91, 202, 37, 51, 58, 58, 237, 140, 124, 5, 99, 105],
						16: [120, 104, 107, 109, 102, 161, 76, 3, 91, 191, 147, 169, 182, 194, 225, 120],
						17: [43, 139, 206, 78, 43, 239, 123, 206, 214, 147, 24, 99, 150, 39, 243, 163, 136],
						18: [215, 234, 158, 94, 184, 97, 118, 170, 79, 187, 152, 148, 252, 179, 5, 98, 96, 153],
						20: [17, 60, 79, 50, 61, 163, 26, 187, 202, 180, 221, 225, 83, 239, 156, 164, 212, 212, 188, 190],
						22: [210, 171, 247, 242, 93, 230, 14, 109, 221, 53, 200, 74, 8, 172, 98, 80, 219, 134, 160, 105, 165, 231],
						24: [229, 121, 135, 48, 211, 117, 251, 126, 159, 180, 169, 152, 192, 226, 228, 218, 111, 0, 117, 232, 87, 96, 227, 21],
						26: [173, 125, 158, 2, 103, 182, 118, 17, 145, 201, 111, 28, 165, 53, 161, 21, 245, 142, 13, 102, 48, 227, 153, 145, 218, 70],
						28: [168, 223, 200, 104, 224, 234, 108, 180, 110, 190, 195, 147, 205, 27, 232, 201, 21, 43, 245, 87, 42, 195, 212, 119, 242, 37, 9, 123],
						30: [41, 173, 145, 152, 216, 31, 179, 182, 50, 48, 110, 86, 239, 96, 222, 125, 42, 173, 226, 193, 224, 130, 156, 37, 251, 216, 238, 40, 192, 180]
					},
					l = [1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 1],
					m = [-1, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175];
				for (c = 0; c < a.length + g; c++) i[j++] = c < a.length ? a[c] : 0;
				for (c = 0; c < a.length; c++)
					if (e = i[0], i.splice(0, 1), 0 !== e) {
						for (h = k[g].slice(0), e = m[e], d = 0; d < h.length; d++) f = e + h[d], f > 255 && (f %= 255), h[d] = f;
						for (d = 0; d < h.length; d++) h[d] = l[h[d]];
						for (d = 0; d < h.length; d++) i[d] = i[d] ^ h[d]
					}
				return i
			},
			_getIntegerValues: function (a) {
				return k(a, function (a) {
					return o(a)
				})
			},
			_getBinaryValues: function (a) {
				var b, c = [];
				for (b = 0; b < a.length; b += 8) b + 8 <= a.length ? c.push(a.substr(b, 8)) : c.push(q(a.substring(b), 8));
				return c
			},
			_padEncodedToLength: function (a, b) {
				if (a.length >= b) return a.substr(0, b);
				for (var c = a, d = "11101100", e = "00010001", f = !0; c.length < b;) c += f ? d : e, f = !f;
				return c
			},
			_getVersion: function (a, b) {
				var c, d = a.length;
				for (c = 1; c < 39 && !(this._verErrLenTable[c + "" + b] / 8 >= d); c++);
				return c + 1
			},
			_getDataLength: function (a, b) {
				var c = this;
				return c._verErrLenTable[c._getVersion(a, b) + "" + b]
			},
			_getFormatData: function (a, b) {
				return this.codeMode + p(n(a.length), this._getFormatLengthTotal(a, b))
			},
			_getFormatLengthTotal: function (a, b) {
				var c = this,
					d = c.mode,
					e = c._getVersion(a, b);
				return e >= 1 && e <= 9 ? d == s ? 10 : d == t ? 9 : 8 : e >= 10 && e <= 26 ? d == s ? 12 : d == t ? 11 : d == r ? 16 : 10 : d == s ? 14 : d == t ? 13 : d == r ? 16 : 12
			},
			_getCodewordsLengthTable: function () {
				var a = this;
				if (a._clt) return a._clt;
				var b, c, d = [7, 1, 19, 0, 0, 10, 1, 16, 0, 0, 13, 1, 13, 0, 0, 17, 1, 9, 0, 0, 10, 1, 34, 0, 0, 16, 1, 28, 0, 0, 22, 1, 22, 0, 0, 28, 1, 16, 0, 0, 15, 1, 55, 0, 0, 26, 1, 44, 0, 0, 18, 2, 17, 0, 0, 22, 2, 13, 0, 0, 20, 1, 80, 0, 0, 18, 2, 32, 0, 0, 26, 2, 24, 0, 0, 16, 4, 9, 0, 0, 26, 1, 108, 0, 0, 24, 2, 43, 0, 0, 18, 2, 15, 2, 16, 22, 2, 11, 2, 12, 18, 2, 68, 0, 0, 16, 4, 27, 0, 0, 24, 4, 19, 0, 0, 28, 4, 15, 0, 0, 20, 2, 78, 0, 0, 18, 4, 31, 0, 0, 18, 2, 14, 4, 15, 26, 4, 13, 1, 14, 24, 2, 97, 0, 0, 22, 2, 38, 2, 39, 22, 4, 18, 2, 19, 26, 4, 14, 2, 15, 30, 2, 116, 0, 0, 22, 3, 36, 2, 37, 20, 4, 16, 4, 17, 24, 4, 12, 4, 13, 18, 2, 68, 2, 69, 26, 4, 43, 1, 44, 24, 6, 19, 2, 20, 28, 6, 15, 2, 16, 20, 4, 81, 0, 0, 30, 1, 50, 4, 51, 28, 4, 22, 4, 23, 24, 3, 12, 8, 13, 24, 2, 92, 2, 93, 22, 6, 36, 2, 37, 26, 4, 20, 6, 21, 28, 7, 14, 4, 15, 26, 4, 107, 0, 0, 22, 8, 37, 1, 38, 24, 8, 20, 4, 21, 22, 12, 11, 4, 12, 30, 3, 115, 1, 116, 24, 4, 40, 5, 41, 20, 11, 16, 5, 17, 24, 11, 12, 5, 13, 22, 5, 87, 1, 88, 24, 5, 41, 5, 42, 30, 5, 24, 7, 25, 24, 11, 12, 7, 13, 24, 5, 98, 1, 99, 28, 7, 45, 3, 46, 24, 15, 19, 2, 20, 30, 3, 15, 13, 16, 28, 1, 107, 5, 108, 28, 10, 46, 1, 47, 28, 1, 22, 15, 23, 28, 2, 14, 17, 15, 30, 5, 120, 1, 121, 26, 9, 43, 4, 44, 28, 17, 22, 1, 23, 28, 2, 14, 19, 15, 28, 3, 113, 4, 114, 26, 3, 44, 11, 45, 26, 17, 21, 4, 22, 26, 9, 13, 16, 14, 28, 3, 107, 5, 108, 26, 3, 41, 13, 42, 30, 15, 24, 5, 25, 28, 15, 15, 10, 16, 28, 4, 116, 4, 117, 26, 17, 42, 0, 0, 28, 17, 22, 6, 23, 30, 19, 16, 6, 17, 28, 2, 111, 7, 112, 28, 17, 46, 0, 0, 30, 7, 24, 16, 25, 24, 34, 13, 0, 0, 30, 4, 121, 5, 122, 28, 4, 47, 14, 48, 30, 11, 24, 14, 25, 30, 16, 15, 14, 16, 30, 6, 117, 4, 118, 28, 6, 45, 14, 46, 30, 11, 24, 16, 25, 30, 30, 16, 2, 17, 26, 8, 106, 4, 107, 28, 8, 47, 13, 48, 30, 7, 24, 22, 25, 30, 22, 15, 13, 16, 28, 10, 114, 2, 115, 28, 19, 46, 4, 47, 28, 28, 22, 6, 23, 30, 33, 16, 4, 17, 30, 8, 122, 4, 123, 28, 22, 45, 3, 46, 30, 8, 23, 26, 24, 30, 12, 15, 28, 16, 30, 3, 117, 10, 118, 28, 3, 45, 23, 46, 30, 4, 24, 31, 25, 30, 11, 15, 31, 16, 30, 7, 116, 7, 117, 28, 21, 45, 7, 46, 30, 1, 23, 37, 24, 30, 19, 15, 26, 16, 30, 5, 115, 10, 116, 28, 19, 47, 10, 48, 30, 15, 24, 25, 25, 30, 23, 15, 25, 16, 30, 13, 115, 3, 116, 28, 2, 46, 29, 47, 30, 42, 24, 1, 25, 30, 23, 15, 28, 16, 30, 17, 115, 0, 0, 28, 10, 46, 23, 47, 30, 10, 24, 35, 25, 30, 19, 15, 35, 16, 30, 17, 115, 1, 116, 28, 14, 46, 21, 47, 30, 29, 24, 19, 25, 30, 11, 15, 46, 16, 30, 13, 115, 6, 116, 28, 14, 46, 23, 47, 30, 44, 24, 7, 25, 30, 59, 16, 1, 17, 30, 12, 121, 7, 122, 28, 12, 47, 26, 48, 30, 39, 24, 14, 25, 30, 22, 15, 41, 16, 30, 6, 121, 14, 122, 28, 6, 47, 34, 48, 30, 46, 24, 10, 25, 30, 2, 15, 64, 16, 30, 17, 122, 4, 123, 28, 29, 46, 14, 47, 30, 49, 24, 10, 25, 30, 24, 15, 46, 16, 30, 4, 122, 18, 123, 28, 13, 46, 32, 47, 30, 48, 24, 14, 25, 30, 42, 15, 32, 16, 30, 20, 117, 4, 118, 28, 40, 47, 7, 48, 30, 43, 24, 22, 25, 30, 10, 15, 67, 16, 30, 19, 118, 6, 119, 28, 18, 47, 31, 48, 30, 34, 24, 34, 25, 30, 20, 15, 61, 16],
					e = ["L", "M", "Q", "H"],
					f = 0;
				for (a._clt = {}, b = 1; b <= 40; b++)
					for (c = 0; c < e.length; c++) a._clt[b + "" + e[c]] = {
						codewordsPerBlock: d[f],
						firstBlockCount: d[f + 1],
						firstDataCodeWords: d[f + 2],
						secondBlockCount: d[f + 3],
						secondBlockCodeWords: d[f + 4]
					}, f += 5;
				return a._clt
			},
			_getPositionAdjustmentsTable: function () {
				var a = [],
					b = 2;
				return a[b++] = [6, 18], a[b++] = [6, 22], a[b++] = [6, 26], a[b++] = [6, 30], a[b++] = [6, 34], a[b++] = [6, 22, 38], a[b++] = [6, 24, 42], a[b++] = [6, 26, 46], a[b++] = [6, 28, 50], a[b++] = [6, 30, 54], a[b++] = [6, 32, 58], a[b++] = [6, 34, 62], a[b++] = [6, 26, 46, 66], a[b++] = [6, 26, 48, 70], a[b++] = [6, 26, 50, 74], a[b++] = [6, 30, 54, 78], a[b++] = [6, 30, 56, 82], a[b++] = [6, 30, 58, 86], a[b++] = [6, 34, 62, 90], a[b++] = [6, 28, 50, 72, 94], a[b++] = [6, 26, 50, 74, 98], a[b++] = [6, 30, 54, 78, 102], a[b++] = [6, 28, 54, 80, 106], a[b++] = [6, 32, 58, 84, 110], a[b++] = [6, 30, 58, 86, 114], a[b++] = [6, 34, 62, 90, 118], a[b++] = [6, 26, 50, 74, 98, 122], a[b++] = [6, 30, 54, 78, 102, 126], a[b++] = [6, 26, 52, 78, 104, 130], a[b++] = [6, 30, 56, 82, 108, 134], a[b++] = [6, 34, 60, 86, 112, 138], a[b++] = [6, 30, 58, 86, 114, 142], a[b++] = [6, 34, 62, 90, 118, 146], a[b++] = [6, 30, 54, 78, 102, 126, 150], a[b++] = [6, 24, 50, 76, 102, 128, 154], a[b++] = [6, 28, 54, 80, 106, 132, 158], a[b++] = [6, 32, 58, 84, 110, 136, 162], a[b++] = [6, 26, 54, 82, 110, 138, 166], a[b++] = [6, 30, 58, 86, 114, 142, 170], a
			}
		}),
		w = v.extend({
			mode: s,
			codeMode: "0001",
			validateRegex: "^\\d+$",
			encodeValue: function (a) {
				for (var b = []; a.length > 0;) a.length > 2 ? (b.push(p(n(l(a.substr(0, 3))), 10)), a = a.substr(3)) : 2 === a.length ? (b.push(p(n(l(a)), 7)), a = "") : (b.push(p(n(l(a)), 4)), a = "");
				return 0 === b.length && b.push(p(n(0), 4)), b.join("")
			}
		});
	u.addMode(w);
	var x = v.extend({
		mode: r,
		codeMode: "0100",
		validateRegex: "^[0-9A-Za-z'\\\r\\\n\\ \\!\\\"\\#\\$\\%\\&\\(\\)\\*\\+\\,\\-\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\Â¥\\]\\^\\_\\`\\{\\|\\}\\Â¯\\ï½¡\\ï½¢\\ï½£\\ï½¤\\ï½¥\\ï½¦\\ï½§\\ï½¨\\ï½©\\ï½ª\\ï½«\\ï½¬\\ï½­\\ï½®\\ï½¯\\ï½°\\ï½±\\ï½²\\ï½³\\ï½´\\ï½µ\\ï½¶\\ï½·\\ï½¸\\ï½¹\\ï½º\\ï½»\\ï½¼\\ï½½\\ï½¾\\ï½¿\\ï¾€\\ï¾\\ï¾‚\\ï¾ƒ\\ï¾„\\ï¾…\\ï¾†\\ï¾‡\\ï¾ˆ\\ï¾‰\\ï¾Š\\ï¾‹\\ï¾Œ\\ï¾\\ï¾Ž\\ï¾\\ï¾\\ï¾‘\\ï¾’\\ï¾“\\ï¾”\\ï¾•\\ï¾–\\ï¾—\\ï¾˜\\ï¾™\\ï¾š\\ï¾›\\ï¾œ\\ï¾\\ï¾ž\\ï¾Ÿ]+$",
		encodingTable: {
			"\r": "13",
			"\n": "10",
			" ": "32",
			"!": "33",
			'"': "34",
			"#": "35",
			$: "36",
			"%": "37",
			"&": "38",
			"'": "39",
			"(": "40",
			")": "41",
			"*": "42",
			"+": "43",
			",": "44",
			"-": "45",
			".": "46",
			"/": "47",
			0: "48",
			1: "49",
			2: "50",
			3: "51",
			4: "52",
			5: "53",
			6: "54",
			7: "55",
			8: "56",
			9: "57",
			":": "58",
			";": "59",
			"<": "60",
			"=": "61",
			">": "62",
			"?": "63",
			"@": "64",
			A: "65",
			B: "66",
			C: "67",
			D: "68",
			E: "69",
			F: "70",
			G: "71",
			H: "72",
			I: "73",
			J: "74",
			K: "75",
			L: "76",
			M: "77",
			N: "78",
			O: "79",
			P: "80",
			Q: "81",
			R: "82",
			S: "83",
			T: "84",
			U: "85",
			V: "86",
			W: "87",
			X: "88",
			Y: "89",
			Z: "90",
			"[": "91",
			"Â¥": "92",
			"]": "93",
			"^": "94",
			_: "95",
			"`": "96",
			a: "97",
			b: "98",
			c: "99",
			d: "100",
			e: "101",
			f: "102",
			g: "103",
			h: "104",
			i: "105",
			j: "106",
			k: "107",
			l: "108",
			m: "109",
			n: "110",
			o: "111",
			p: "112",
			q: "113",
			r: "114",
			s: "115",
			t: "116",
			u: "117",
			v: "118",
			w: "119",
			x: "120",
			y: "121",
			z: "122",
			"{": "123",
			"|": "124",
			"}": "125",
			"Â¯": "126",
			"ï½¡": "161",
			"ï½¢": "162",
			"ï½£": "163",
			"ï½¤": "164",
			"ï½¥": "165",
			"ï½¦": "166",
			"ï½§": "167",
			"ï½¨": "168",
			"ï½©": "169",
			"ï½ª": "170",
			"ï½«": "171",
			"ï½¬": "172",
			"ï½­": "173",
			"ï½®": "174",
			"ï½¯": "175",
			"ï½°": "176",
			"ï½±": "177",
			"ï½²": "178",
			"ï½³": "179",
			"ï½´": "180",
			"ï½µ": "181",
			"ï½¶": "182",
			"ï½·": "183",
			"ï½¸": "184",
			"ï½¹": "185",
			"ï½º": "186",
			"ï½»": "187",
			"ï½¼": "188",
			"ï½½": "189",
			"ï½¾": "190",
			"ï½¿": "191",
			"ï¾€": "192",
			"ï¾": "193",
			"ï¾‚": "194",
			"ï¾ƒ": "195",
			"ï¾„": "196",
			"ï¾…": "197",
			"ï¾†": "198",
			"ï¾‡": "199",
			"ï¾ˆ": "200",
			"ï¾‰": "201",
			"ï¾Š": "202",
			"ï¾‹": "203",
			"ï¾Œ": "204",
			"ï¾": "205",
			"ï¾Ž": "206",
			"ï¾": "207",
			"ï¾": "208",
			"ï¾‘": "209",
			"ï¾’": "210",
			"ï¾“": "211",
			"ï¾”": "212",
			"ï¾•": "213",
			"ï¾–": "214",
			"ï¾—": "215",
			"ï¾˜": "216",
			"ï¾™": "217",
			"ï¾š": "218",
			"ï¾›": "219",
			"ï¾œ": "220",
			"ï¾": "221",
			"ï¾ž": "222",
			"ï¾Ÿ": "223"
		},
		encodeValue: function (a) {
			var b, c = this,
				d = [];
			for (b = 0; b < a.length; b++) d.push(p(n(l(c.encodingTable[a.charAt(b)])), 8));
			return d.join("")
		}
	});
	u.addMode(x);
	var y = v.extend({
		mode: t,
		codeMode: "0010",
		validateRegex: "^[0-9A-Z \\$\\%\\*\\+\\-\\.\\/\\:]+$",
		encodingTable: {
			0: "0",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			A: "10",
			B: "11",
			C: "12",
			D: "13",
			E: "14",
			F: "15",
			G: "16",
			H: "17",
			I: "18",
			J: "19",
			K: "20",
			L: "21",
			M: "22",
			N: "23",
			O: "24",
			P: "25",
			Q: "26",
			R: "27",
			S: "28",
			T: "29",
			U: "30",
			V: "31",
			W: "32",
			X: "33",
			Y: "34",
			Z: "35",
			" ": "36",
			$: "37",
			"%": "38",
			"*": "39",
			"+": "40",
			"-": "41",
			".": "42",
			"/": "43",
			":": "44"
		},
		encodeValue: function (a) {
			var b, c, d, e, f, g = this,
				h = a.length % 2 !== 0,
				i = [],
				j = [],
				k = [],
				m = 0;
			for (c = 0; c < a.length; c++) b = a.charAt(c), i[c] = g.encodingTable[b];
			for (c = 0; c < i.length; c += 2) d = i[c], c + 1 <= i.length - 1 ? (e = i[c + 1], j[m] = l(45 * d) + l(e)) : j[m] = d, m++;
			for (c = 0; c < j.length; c++) f = n(j[c]), h && c === j.length - 1 ? (f = p(f, 6), k[c] = f) : (f = p(f, 11), k[c] = f);
			return k.join("")
		}
	});
	u.addMode(y);
	var z = g.extend({
			init: function (a) {
				var b = this,
					c = a.style;
				b.options = a, b.size = a.size - 2 * c.padding, j || h.namespaces.sqrv || (h.namespaces.add("sqrv", "urn:schemas-microsoft-com:vml", "#default#VML"), h.createStyleSheet().cssText = "sqrv\\:fill, sqrv\\:path, sqrv\\:shape, sqrv\\:stroke{ behavior:url(#default#VML); display: inline-block; } ")
			},
			all: function (c) {
				var d, e, f = this,
					g = f.size,
					h = f.options,
					m = h.style,
					n = g / c.length,
					o = "",
					p = [],
					q = function (b) {
						return a("<div/>").html(b).text()
					},
					r = "",
					s = g > 200 ? 12 : 10,
					t = q(g > 100 ? "&#68;&#101;&#109;&#111;&#32;&#86;&#101;&#114;&#115;&#105;&#111;&#110;" : "&#68;&#101;&#109;&#111;"),
					u = q("&#104;&#116;&#116;&#112;&#58;&#47;&#47;&#119;&#119;&#119;&#46;&#115;&#104;&#105;&#101;&#108;&#100;&#117;&#105;&#46;&#99;&#111;&#109;");
				b.guid();
				for (m.padding && (o += "margin:" + m.padding + "px;"), d = 0; d < c.length; d++)
					for (e = 0; e < c[d].length; e++) c[d][e] && p.push({
						x: e * n,
						y: d * n
					});
				if (r += j ? '<text x="' + g + '" y="' + g + '" fill="#999999" text-anchor="end" font-size="' + s + '" style="cursor:pointer; z-index:0;" onClick="javascript: location.href = \'' + u + "'; margin:0; padding:0;\">" + t + "</text>" : '<div style="position:absolute; display:block; width:' + g + "px; text-align:right; color:#999999; cursor:pointer; z-index:0; top:" + (g - s - 2) + "px; left:0px; font-size:" + s + 'px;"><a href="' + u + '" style="color:#999999; text-decoration:none;">' + t + "</a></div>", j) return '<svg xmlns="' + i + '" version="1.1" width="' + g + '" height="' + g + '" shape-rendering="crispEdges"' + (o ? ' style="' + o + '" ' : "") + ">" + r + '<path d="' + k(p, function (a) {
					return "M" + a.x + " " + a.y + " L" + (a.x + n) + " " + a.y + " L" + (a.x + n) + " " + (a.y + n) + " L" + a.x + " " + (a.y + n) + " z"
				}).join(" ") + '" fill="' + m.color + '" stroke="' + m.color + '" stroke-width="0" /></svg>';
				var v = 1e4 / g,
					w = l(n * v),
					x = k(p, function (a) {
						var b = l(a.x * v),
							c = l(a.y * v);
						return "m" + b + "," + c + " l" + (b + w) + "," + c + "," + (b + w) + "," + (c + w) + "," + b + "," + (c + w)
					}).join(" ") + " e";
				return '<sqrv:shape style="z-index:200; position:absolute; width:' + g + "px; height:" + g + "px; display:block; " + o + '" coordsize="10000,10000" path="' + x + '" filled="t" fillcolor="' + m.color + '" stroked="f" strokecolor="' + m.color + '" strokeweight="0">' + r + "</sqrv:shape>"
			}
		}),
		A = {
			value: "",
			mode: "byte",
			errorLevel: "L",
			size: 300,
			style: {
				background: null,
				borderColor: null,
				borderStyle: null,
				borderWidth: 0,
				color: "#000000",
				padding: 5
			}
		},
		B = e.extend({
			init: function (b, c) {
				e.fn.init.apply(this, arguments);
				var d, f = this,
					g = f.options,
					h = g.style,
					i = g.value,
					j = (g.mode + "").toLowerCase(),
					k = g.errorLevel,
					l = g.dieOnError,
					n = u.byMode(j),
					o = new z(g);
				return a(f.element).css({
					background: h.background,
					borderColor: h.borderColor,
					borderStyle: h.borderStyle,
					borderWidth: h.borderWidth,
					width: g.size,
					height: g.size
				}), n ? n.validate(i) ? "L" != k && "M" != k && "Q" != k && "H" != k ? void m("Invalid errorLevel: " + k, l) : (d = n.encode(i, k), void a(f.element).html(o.all(d))) : void m("Invalid qrcode value: " + i, l) : void m("Invalid qrcode mode: " + j, l)
			},
			destroy: function () {
				this.element.empty(), e.fn.destroy.call(this)
			}
		});
	B.defaults = A, b.ui.plugin("QRcode", B)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g, h, i, j, k, l, m = b.ui.Widget,
		n = (b.Class, b.DataSource),
		o = b.ui.Position,
		p = b.Constants.KeyCode,
		q = b.strid,
		r = document,
		s = Math.abs,
		t = Math.min,
		u = Math.max,
		v = a.proxy,
		w = a.each,
		x = a.map,
		y = b.to,
		z = y["int"],
		A = b.format,
		B = b.error,
		C = b.is,
		D = C.defined,
		E = C.string,
		F = C.object,
		G = C.func,
		H = C["null"],
		I = C.number,
		J = b.is["boolean"],
		K = "id",
		L = "role",
		M = "true",
		N = "false",
		O = "aria-valuenow",
		P = "aria-controls",
		Q = "aria-expanded",
		R = "aria-disabled",
		S = "aria-describedby",
		T = "aria-selected",
		U = "single",
		V = "keydown",
		W = "mouseenter",
		X = "mouseleave",
		Y = "click",
		Z = "focus",
		$ = "blur",
		_ = "change",
		aa = "title",
		ba = "center",
		ca = "middle",
		da = "left",
		ea = "right",
		fa = "up",
		ga = "down",
		ha = "top",
		ia = "bottom",
		ja = "horizontal",
		ka = "vertical",
		la = "collapse",
		ma = "expand",
		na = "resize",
		oa = "tabindex",
		pa = "disabled",
		qa = "suiaccitemindex",
		ra = "suiaccitemdata",
		sa = "suiaccitemloaded",
		ta = "suiaccelparent",
		ua = "suiaccelprev",
		va = {
			top: ia,
			bottom: ha,
			left: ea,
			right: da,
			center: ba
		},
		wa = "sui-tooltip-title",
		xa = "sui-tooltip-sto",
		ya = "sui-tooltip-hto",
		za = "sui-tooltip-target-hover";
	e = {
		cls: d,
		enabled: !0,
		visible: d,
		width: d,
		height: d,
		delay: 100,
		filter: d,
		content: function (b) {
			return a(b).data(wa)
		},
		position: ha,
		trigger: W,
		autoHide: !0,
		callout: !0,
		events: {}
	}, f = m.extend({
		init: function () {
			m.fn.init.apply(this, arguments);
			var b, c, d, e, f, g = this,
				h = g.options,
				i = h.content,
				j = h.position,
				k = h.cls,
				l = h.filter,
				n = h.trigger,
				o = h.autoHide,
				p = h.visible,
				s = h.width,
				t = h.height,
				u = h.callout,
				w = a(g.element),
				x = q();
			return !F(i) || i.remote && i.remote.url ? (g._eventNS = ".shieldTooltip" + g.getInstanceId(), g._currentTarget = null, g._tooltip = b = a('<div id="' + x + '"/>').appendTo(r.body), b.addClass("sui-tooltip" + (k ? " " + k : "")), f = {
				position: "absolute"
			}, D(s) && (f.width = s), D(t) && (f.height = t), b.css(f), g._content = a('<div class="sui-tooltip-content"></div>').appendTo(b), o || b.addClass("sui-tooltip-with-button").append('<div class="sui-tooltip-button">&times;</div>').click(v(g._hide, g, !0)), F(j) ? g._pos = j : (d = va[j] ? va[j] : ia, e = va[j] ? j : ha, u && j != ba && (e += e == da || e == ha ? "-5" : "+5"), g._pos = {
				source: d,
				target: e,
				overflow: "flipfit"
			}), u && (g._pos.callback = v(g._posSet, g)), g._targets = c = l ? w.find(l) : w, g._showEvent = n, g._hideEvent = null, o && (n == W || n == Y ? g._hideEvent = X : n == Z && (g._hideEvent = $)), c.each(function (b) {
				var c = a(this);
				c.on(W + g._eventNS, v(g._targetMouseEnter, g, c)).on(X + g._eventNS, v(g._targetMouseLeave, g, c)).on(g._showEvent + g._eventNS, v(g._onShow, g, c, !0)), g._hideEvent && c.on(g._hideEvent + g._eventNS, v(g._onHide, g, c, !0)), c.attr(S, x)
			}), g._destroyed = !1, b.attr(L, "tooltip"), g.enabled(!!h.enabled), void(D(p) && g.visible(p))) : void B("shieldTooltip: Invalid content options", h.dieOnError)
		},
		_targetMouseEnter: function (a) {
			a.addClass(za), a.attr(aa) && a.data(wa, a.attr(aa)).removeAttr(aa)
		},
		_targetMouseLeave: function (a) {
			a.removeClass(za), a.data(wa) && a.attr(aa, a.data(wa))
		},
		_onShow: function (b, c) {
			var d = this;
			if (d._enabled) {
				var e = (d._tooltip, setTimeout(v(d._show, d, b, c), d.options.delay));
				b.one(X, function () {
					var b = a(this),
						c = b.data(xa);
					c && clearTimeout(c)
				}).data(xa, e)
			}
		},
		_onHide: function (b, c) {
			var d = this,
				e = d._tooltip,
				f = setTimeout(v(d._hide, d, c), 50);
			e.one(W, function () {
				var b = a(this),
					c = b.data(ya);
				c && (clearTimeout(c), b.data(ya, null))
			}).one(X, function () {
				setTimeout(function () {
					b.hasClass(za) || d._hide(d, c)
				}, 50)
			}).data(ya, f)
		},
		_show: function (a, b) {
			var c, d, e, f = this,
				g = f.options,
				h = g.content,
				i = g.height,
				j = f._tooltip,
				k = f._content;
			f._destroyed || f._currentTarget != a && (b && (e = f.trigger("show", {
				target: a
			}), e.isDefaultPrevented()) || (E(h) ? c = h : F(h) ? h.remote.iframe ? c = '<iframe class="sui-tooltip-iframe" src="' + h.remote.url + '" style="border:none; border-width:0px; width:100%; height:' + (i ? i + "px" : "100%") + ';"></iframe>' : (d = !0, c = " ") : G(h) && (c = h(a)), c && (j.show(), f._currentTarget = a, d ? k.load(h.remote.url) : k.html(c), f._visible = !0, o.Set(j, a, f._pos))))
		},
		_hide: function (b) {
			var c, d = this;
			d._currentTarget && (b && (c = d.trigger("hide"), c.isDefaultPrevented()) || (a(d._tooltip).hide().find(".sui-tooltip-callout-container").remove(), d._currentTarget = null, d._visible = !1))
		},
		_posSet: function (d) {
			var e, f, g, h, i, j, k, l, m = this,
				n = m.options,
				p = m._tooltip,
				q = d.horizontal,
				r = d.vertical,
				t = (d.important, d.element),
				u = d.target,
				v = t.width,
				w = t.height,
				x = 6;
			if (n.callout) {
				if (q == ba && r == ca) return;
				if (q == ba || r == ca) f = q == ba ? r : q, h = va[f], g = {
					source: h,
					target: f + (h == ia || h == ea ? "+1" : "-1")
				};
				else if (i = b.ui.Util.GetWithinInfo(c), q == da && t.left - i.scrollLeft > 3 && (f = da, g = {
						source: ea,
						target: da + "+1"
					}), q == ea && i.scrollLeft + i.width - t.left - t.width > 3 && (f = ea, g = {
						source: da,
						target: ea + "-1"
					}), f && (j = t.top + w / 2, k = u.top + u.height - (u.top + u.height - i.scrollTop) / 2, l = j - k, s(l) > w / 2 - x && (l = l > 0 ? w / 2 - x : x - w / 2), 0 !== l && (g.target += " " + ba + (l > 0 ? "-" + l : "+" + l))), f || (r == ha && t.top - i.scrollTop > 3 && (f = ha, g = {
						source: ia,
						target: ha + "+1"
					}), r == ia && i.scrollTop + i.height - t.top - t.height > 3 && (f = ia, g = {
						source: ha,
						target: ia + "-1"
					}), f && (j = t.left + v / 2, k = u.left + u.width - (u.left + u.width - i.scrollLeft) / 2, l = j - k, s(l) > v / 2 - x && (l = l > 0 ? v / 2 - x : x - v / 2), 0 !== l && (g.target = ba + (l > 0 ? "-" + l : "+" + l) + " " + g.target))), !f) return;
				e = a('<div class="sui-tooltip-callout-container"><div class="sui-tooltip-callout sui-tooltip-callout-' + f + '"></div>').appendTo(p), o.Set(e, p, g)
			}
		},
		visible: function () {
			var a, b = this,
				c = [].slice.call(arguments);
			if (!b._destroyed) return c.length > 0 ? (a = !!c[0], a ? b._show(c[1]) : b._hide(), b._visible = a, void 0) : b._visible
		},
		enabled: function () {
			var a, b = this,
				c = [].slice.call(arguments);
			return c.length > 0 ? (a = !!c[0], a || b.visible(!1), b._enabled = a, void 0) : b._enabled
		},
		destroy: function () {
			var b = this,
				c = b._targets;
			b._destroyed = !0, c && (c.each(function (c) {
				var d = a(this);
				d.off(b._eventNS)
			}), b._targets = null), a(b._tooltip).remove(), m.fn.destroy.call(b)
		}
	}), f.defaults = e, b.ui.plugin("Tooltip", f), g = {
		cls: d,
		barSize: 5,
		orientation: ja,
		panes: d,
		events: {}
	}, h = m.extend({
		init: function () {
			m.fn.init.apply(this, arguments);
			var b, e = this,
				f = e.options,
				g = f.cls,
				h = (f.orientation == ja, a(e.element));
			h.addClass("sui-splitter-container" + (g ? " " + g : "")), "absolute" !== h.css("position") && "relative" !== h.css("position") && h.css({
				position: "relative"
			}), h.css("width") === d && h.css({
				width: "100%"
			}), e._height = h.css("height") ? h.css("height") : h.parent().innerHeight(), h.css({
				height: e._height
			}), e._children = b = h.children(), e._offset = 0, e._barSize = f.barSize, e._bars = [], e._dragBars = [], e._navigators = [], b.each(function (c) {
				e._addPane(b, a(this), c)
			}), a(c).on(na + ".shieldSplitter" + e.getInstanceId(), v(e._adjust, e)), e._adjust(), e._adjustDraggables(), e._manageCollapsedPanes()
		},
		_adjust: function () {
			var b = this,
				c = b.element,
				d = b._children.last(),
				e = b.options.orientation == ja,
				f = (e ? c.innerWidth() : c.innerHeight()) - b._offset + "px";
			c.children(".sui-splitter-pane-horizontal, .sui-splitter-dragbar-horizontal, .sui-splitter-bar-horizontal").each(function () {
				a(this).outerHeight(a(this).parent().innerHeight())
			}), e ? d.outerWidth(f) : d.outerHeight(f)
		},
		_adjustHeights: function (b, c) {
			var d = this,
				e = d.options.orientation == ja;
			e ? (b.children(".sui-splitter-collapsible-vertical-up, .sui-splitter-collapsible-vertical-down").each(function () {
				var b = a(this);
				b.css({
					top: b.prev().innerWidth() / 2
				})
			}), c.children(".sui-splitter-collapsible-vertical-up, .sui-splitter-collapsible-vertical-down").each(function () {
				var b = a(this);
				b.css({
					top: b.prev().innerWidth() / 2
				})
			})) : (b.children(".sui-splitter-pane-horizontal, .sui-splitter-dragbar, .sui-splitter-bar").each(function () {
				a(this).outerHeight(a(this).parent().innerHeight())
			}), c.children(".sui-splitter-pane-horizontal, .sui-splitter-dragbar, .sui-splitter-bar").each(function () {
				a(this).outerHeight(a(this).parent().innerHeight())
			}), b.children(".sui-splitter-collapsible-horizontal-left, .sui-splitter-collapsible-horizontal-right").each(function () {
				var b = a(this);
				b.css({
					top: b.prev().innerHeight() / 2
				})
			}), c.children(".sui-splitter-collapsible-horizontal-left, .sui-splitter-collapsible-horizontal-right").each(function () {
				var b = a(this);
				b.css({
					top: b.prev().innerHeight() / 2
				})
			}))
		},
		_adjustDraggables: function () {
			var b, c, e, f, g, h, i, j, k, l, m, n, o, p = this,
				q = p.options.orientation == ja;
			for (c = 0; c < p._dragBars.length; c++) p._dragBars[c] && (e = p._dragBars[c], f = a(p._children[c]), g = a(p._children[c + 1]), h = e.initialOptions, i = q ? f.position().left : f.position().top, l = p._getPaneMin(c), l !== d && (i += l), m = p._getPaneMax(c + 1), m !== d && (b = q ? g.position().left : g.position().top, k = q ? g.innerWidth() : g.innerHeight(), i = u(i, b - (m - k))), j = q ? g.position().left + g.innerWidth() : g.position().top + g.innerHeight(), n = p._getPaneMax(c), n !== d && (b = q ? f.position().left : f.position().top, j = t(j, b + n)), o = p._getPaneMin(c + 1), o !== d && (b = q ? g.position().left : g.position().top, j = t(j, b + o)), h.min = i, h.max = j, e.refresh(h))
		},
		_createCollapseNavigator: function (b, c) {
			var e, f, g, h, i, j = this,
				k = a(j.element),
				l = j.options,
				m = l.orientation,
				n = l.panes,
				o = m == ja;
			h = n && c < n.length && n[c].collapsible, i = n && c < n.length - 1 && n[c + 1].collapsible, (h || i) && (e = o ? h ? da : ea : h ? fa : ga, f = a('<div class="sui-splitter-collapsible sui-splitter-collapsible-' + m + "-" + e + '"/>'), f.insertAfter(b), g = {
				left: o ? b.position().left + 1 : b.position().left + k.innerWidth() / 2,
				top: o ? b.position().top + b.innerHeight() / 2 : b.position().top + 1
			}, f.css(g), f.on(Y, function () {
				var e = a(j._children[c]),
					f = a(j._children[c + 1]),
					g = j._dragBars[c] ? a(j._dragBars[c].element) : d,
					h = j._navigators[c],
					i = h.navigator,
					k = h.direction,
					l = h.collapsed,
					n = h.delta;
				switch (g && l && g.show(), k) {
					case da:
						l ? e.show() : (n = 0 === c ? e.outerWidth() : e.innerWidth(), e.hide()), f.css({
							left: f.position().left + (l ? n : -n)
						}), b.css({
							left: b.position().left + (l ? n : -n)
						}), g && g.css({
							left: g.position().left + (l ? n : -n)
						}), i.css({
							left: i.position().left + (l ? n : -n)
						}), f.outerWidth(f.outerWidth() + (l ? -n : n)), i.removeClass("sui-splitter-collapsible-" + m + "-" + (l ? ea : da)), i.addClass("sui-splitter-collapsible-" + m + "-" + (l ? da : ea)), h.collapsed = !l, h.delta = h.collapsed ? n : 0;
						break;
					case ea:
						l ? f.show() : (n = f.innerWidth(), f.hide()), b.css({
							left: b.position().left + (l ? -n : n)
						}), g && g.css({
							left: g.position().left + (l ? -n : n)
						}), i.css({
							left: i.position().left + (l ? -n : n)
						}), e.outerWidth(e.outerWidth() + (l ? -n : n)), i.removeClass("sui-splitter-collapsible-" + m + "-" + (l ? da : ea)), i.addClass("sui-splitter-collapsible-" + m + "-" + (l ? ea : da)), h.collapsed = !l, h.delta = h.collapsed ? n : 0;
						break;
					case fa:
						l ? e.show() : (n = 0 === c ? e.outerHeight() : e.innerHeight(), e.hide()), f.css({
							top: f.position().top + (l ? n : -n)
						}), b.css({
							top: b.position().top + (l ? n : -n)
						}), g && g.css({
							top: g.position().top + (l ? n : -n)
						}), i.css({
							top: i.position().top + (l ? n : -n)
						}), f.outerHeight(f.outerHeight() + (l ? -n : n)), i.removeClass("sui-splitter-collapsible-" + m + "-" + (l ? ga : fa)), i.addClass("sui-splitter-collapsible-" + m + "-" + (l ? fa : ga)), h.collapsed = !l, h.delta = h.collapsed ? n : 0;
						break;
					case ga:
						l ? f.show() : (n = f.innerHeight(), f.hide()), b.css({
							top: b.position().top + (l ? -n : n)
						}), g && g.css({
							top: g.position().top + (l ? -n : n)
						}), i.css({
							top: i.position().top + (l ? -n : n)
						}), e.outerHeight(e.outerHeight() + (l ? -n : n)), i.removeClass("sui-splitter-collapsible-" + m + "-" + (l ? fa : ga)), i.addClass("sui-splitter-collapsible-" + m + "-" + (l ? ga : fa)), h.collapsed = !l, h.delta = h.collapsed ? n : 0
				}
				g && h.collapsed && g.hide(), h.collapsed ? j.trigger(la, {
					paneIndex: c
				}) : j.trigger(ma, {
					paneIndex: c
				}), j._adjustHeights(e, f)
			}), j._navigators[c] = {
				navigator: f,
				delta: 0,
				direction: e,
				collapsed: !1,
				index: h ? c : c + 1
			})
		},
		_manageCollapsedPanes: function () {
			var a, b, c, d, e = this,
				f = e.options.panes;
			if (e._navigators)
				for (d = 0; d < e._navigators.length; d++) a = e._navigators[d], b = a.index, c = a.navigator, f && b < f.length && f[b].collapsed && c.trigger(Y)
		},
		_getPaneSize: function (b) {
			var c, d, e = this,
				f = e.options,
				g = f.panes,
				h = f.orientation == ja,
				i = a(e.element);
			return g && b < g.length && (g[b].size || g[b].min) && (d = g[b].size || g[b].min), d ? e._getSize(d, "Invalid pane size") + "px" : (c = h ? i.innerWidth() : i.innerHeight(), (c - (e._children.length - 1) * e._barSize) / e._children.length)
		},
		_getPaneMin: function (a) {
			var b, c = this,
				e = c.options.panes;
			return e && a < e.length && e[a].min && (b = e[a].min), b ? c._getSize(b, "Invalid min pane size!") : d
		},
		_getPaneMax: function (a) {
			var b, c = this,
				e = c.options.panes;
			return e && a < e.length && e[a].max && (b = e[a].max), b ? c._getSize(b, "Invalid max pane size!") : d
		},
		_getSize: function (b, c) {
			var d, e, f = this,
				g = f.options,
				h = g.orientation == ja,
				i = a(f.element);
			if (d = h ? i.innerWidth() : i.innerHeight(), E(b) && "%" == b.charAt(b.length - 1)) {
				if (e = parseInt(b.substring(0, b.length - 1), 10), e >= 100) throw c;
				b = (d - (f._children.length - 1) * f._barSize) * e / 100
			} else b = parseInt(b, 10);
			return b
		},
		_addPane: function (c, e, f) {
			var g, h, i, j, k, l, m, n, o, p = this,
				r = p.options,
				s = r.orientation,
				t = s == ja,
				u = r.panes,
				v = u && f < u.length && u[f].resizable === !1,
				w = u && f < u.length && u[f].scrollable === !0;
			a(p.element);
			if (e.attr(K) || e.attr(K, q()), e.addClass("sui-splitter-pane sui-splitter-pane-" + s), w && e.css({
					overflow: "auto"
				}), g = p._getPaneSize(f), h = p._getPaneMin(f), h !== d && g < h) throw "Size less that min pane size!";
			if (i = p._getPaneMax(f), i !== d && g > i) throw "Size bigger that max pane size!";
			j = {
				left: (t ? p._offset : 0) + "px",
				top: (t ? 0 : p._offset) + "px"
			}, t ? (j.width = g, j.height = p._height) : j.height = g, e.css(j), f != c.length - 1 && (p._offset += t ? e.outerWidth() : e.outerHeight(), k = a("<div>&nbsp;</div>").addClass("sui-unselectable sui-splitter-bar sui-splitter-bar-" + s), l = {
				left: s == ja ? p._offset : 0,
				top: s == ka ? p._offset : 0
			}, t ? (l.width = p._barSize, l.height = p._height) : l.height = p._barSize, k.css(l), k.insertAfter(e), v || (m = a("<div>&nbsp;</div>").addClass("sui-unselectable sui-splitter-dragbar sui-splitter-dragbar-" + s).css(l).insertAfter(k), m.attr(L, "separator").attr(P, e.attr(K)).attr(O, z(s == ja ? e.width() : e.height())), n = {
				iframeFix: !0,
				direction: t ? ja : ka,
				stack: !1,
				events: {
					start: function (b) {
						var d = e,
							g = a(c[f + 1]);
						d.addClass("sui-unselectable"), g.addClass("sui-unselectable")
					},
					stop: function (b) {
						var g, h = e,
							i = a(c[f + 1]),
							j = p._bars[f],
							k = p._navigators[f],
							l = k ? k.navigator : d;
						h.removeClass("sui-unselectable"), i.removeClass("sui-unselectable"), s == ja ? (g = b.left - j.position().left, h.width(h.width() + g), i.css({
							left: b.left + j.outerWidth()
						}), i.width(i.width() - g), m.attr(O, z(h.width())), l && l.css({
							left: l.position().left + g
						})) : (g = b.top - j.position().top, h.height(h.height() + g), i.css({
							top: b.top + j.outerHeight()
						}), i.height(i.height() - g), m.attr(O, z(h.height())), l && l.css({
							top: l.position().top + g
						})), j.css({
							left: b.left,
							top: b.top
						}), p._adjustHeights(h, i), p._adjustDraggables(), p.trigger(na, {
							paneIndex: f
						})
					}
				}
			}, o = new b.ui.Draggable(m, n), p._dragBars[f] = o), p._bars.push(k), p._createCollapseNavigator(k, f), p._offset += p._barSize)
		},
		destroy: function () {
			var b, d = this,
				e = d.element;
			for (e.removeClass("sui-splitter-container"), a(c).off(na + ".shieldSplitter" + d.getInstanceId()), b = 0; b < d._children.length; b++) {
				var f = d._navigators[b];
				if (f) {
					var g = f.navigator;
					g.off(Y)
				}
			}
			d._children = d._bars = d._dragBars = d._navigators = null, d._offset = d._height = d._barSize = 0, m.fn.destroy.call(d)
		}
	}), h.defaults = g, b.ui.plugin("Splitter", h), i = {
		cls: d,
		enabled: !0,
		animation: {
			enabled: !0,
			duration: 200
		},
		mode: U,
		expanded: d,
		dataSource: d,
		titleTemplate: "{title}",
		contentTemplate: "{content}",
		width: d,
		height: d,
		maxHeight: d,
		events: {}
	}, j = m.extend({
		init: function () {
			m.fn.init.apply(this, arguments);
			var b, c, d, e, f = this,
				g = f.options,
				h = g.cls,
				i = g.dieOnError,
				j = g.dataSource,
				k = (g.expanded, a(f.element));
			if (f._original = b = a(f.element), f._tagname = d = b.prop("tagName").toLowerCase(), b.wrap("<span/>"), b.hide(), f.element = k = a('<ul class="sui-accordion' + (h ? " " + h : "") + '"/>').on(Z, function () {
					f.trigger(Z)
				}).on($, function () {
					f.trigger($)
				}), b.after(k), c = b.attr(oa), k.attr(oa, D(c) ? c : "0"), D(g.width) && k.css("width", g.width), D(g.height) && k.css("height", g.height), D(g.maxHeight) && k.css("max-height", g.maxHeight), j) f.dataSource = n.create(j);
			else {
				if ("ul" !== d) return f.destroy(), void B("shieldAccordion: No dataSource or underlying UL element found.", i);
				e = function (b) {
					var c = [];
					return a(b).children("li").each(function (b, d) {
						var f = {
							title: a(this).children("h1, h2, h3, h4, h5, h6").first().html(),
							content: a(this).children("div, p").first()
						};
						a(this).children("ul").length > 0 && (f.items = e(a(this).children("ul")[0])), c.push(f)
					}), c
				}, f.dataSource = n.create({
					data: b,
					schema: {
						parse: e
					}
				}), f.options.contentTemplate = function (a, b, c) {
					f._moveElement(a.content, c)
				}, f._fromUL = !0
			}
			f.dataSource.on(_ + ".shieldAccordion" + f.getInstanceId(), v(f._dsChange, f)), f.dataSource.read()
		},
		refresh: function (a) {
			this.refreshWithElement(this._original, a)
		},
		_dsChange: function () {
			var a = this,
				b = a.options;
			a._render(), a._dsLoadedOnce || (a._dsLoadedOnce = !0, D(b.expanded) ? a.expanded(b.expanded) : a.dataSource.view && a.dataSource.view.length > 0 && a.expanded(0), a.enabled(b.enabled))
		},
		_moveElement: function (b, c) {
			a(b).data(ta, a(b).parent()).data(ua, a(b).prev()).addClass("sui-accordion-elm").appendTo(c)
		},
		_restoreElement: function (b) {
			var c = a(b).data(ua),
				d = a(b).data(ta);
			a(c).length > 0 ? a(b).insertAfter(c) : a(b).prependTo(d), a(b).removeData(ta).removeData(ua).removeClass("sui-accordion-elm")
		},
		_restoreAll: function () {
			var b = this;
			a(b.element).find(".sui-accordion-elm").each(function () {
				b._restoreElement(a(this))
			})
		},
		_render: function () {
			var b = this,
				c = b.options,
				d = b.dataSource.view,
				e = a(b.element),
				f = d.length;
			e.empty(), d && w(d, function (d, g) {
				var h, i, j, k, l = q(),
					m = a('<li class="sui-accordion-item ' + (d + 1 >= f ? "sui-accordion-item-last " : "") + 'sui-accordion-item-collapsed"/>').data(qa, d).data(ra, g).appendTo(e);
				i = a('<div class="sui-accordion-item-title"/>').click(function (c) {
					b._enabled && b._itemClick(a(m))
				}).appendTo(m), h = A.call(b, c.titleTemplate, g, d, i), D(h) && !H(h) && i.html(h), j = a('<div class="sui-accordion-item-body"/>').appendTo(m).hide(), i.attr(L, "button").attr(P, l).attr(Q, N), j.attr(K, l), k = a('<div class="sui-accordion-item-body-content"/>').appendTo(j), C.array(g.items) && g.items.length > 0 && a("<div/>").appendTo(j).shieldAccordion({
					cls: "sui-accordion-item-body-items " + (c.cls ? " " + c.cls : ""),
					enabled: c.enabled,
					animation: c.animation,
					mode: c.mode,
					dataSource: {
						data: g.items
					},
					titleTemplate: c.titleTemplate,
					contentTemplate: c.contentTemplate,
					events: c.events
				})
			})
		},
		_itemClick: function (a) {
			var b = this,
				c = b.options,
				d = a.hasClass("sui-accordion-item-collapsed");
			c.mode == U ? d && (b._collapse(a.siblings(".sui-accordion-item").not(".sui-accordion-item-collapsed").first(), !1, !0), b._expand(a, !1, !1)) : d ? b._expand(a, !1, !1) : b._collapse(a, !1, !1)
		},
		_expand: function (b, c, d) {
			var e, f, g, h, i = this,
				j = i.options,
				k = j.animation.enabled && !c,
				l = j.animation.duration,
				m = a(b).children(".sui-accordion-item-body").first(),
				n = b.data(qa),
				o = b.data(ra);
			!d && (h = i.trigger("expand", {
				item: o,
				index: n,
				element: b
			}), h.isDefaultPrevented()) || (1 !== b.data(sa) && (b.data(sa, 1), g = b.children(".sui-accordion-item-body").first().children(".sui-accordion-item-body-content").first(), e = A.call(i, j.contentTemplate, o, n, g), D(e) && !H(e) && g.html(e)), b.removeClass("sui-accordion-item-collapsed").addClass("sui-accordion-item-expanded"), f = a(b).children(".sui-accordion-item-title").first(), f.attr(Q, M), j.mode == U && f.attr(R, M), k ? m.slideDown(l) : m.show())
		},
		_collapse: function (b, c, d) {
			var e, f = this,
				g = f.options,
				h = g.animation.enabled && !c,
				i = g.animation.duration,
				j = a(b).children(".sui-accordion-item-body").first(),
				k = b.data(qa),
				l = b.data(ra);
			!d && (e = f.trigger("collapse", {
				item: l,
				index: k,
				element: b
			}), e.isDefaultPrevented()) || (b.removeClass("sui-accordion-item-expanded").addClass("sui-accordion-item-collapsed"), a(b).children(".sui-accordion-item-title").first().attr(Q, N).removeAttr(R), h ? j.slideUp(i) : j.hide())
		},
		expanded: function () {
			var b, c, d, e, f = this,
				g = a(f.element),
				h = (f._original, [].slice.call(arguments));
			return h.length > 0 ? (b = y.array(h[0]), c = !D(h[1]) || !!h[1], d = !D(h[2]) || !!h[2], e = g.children(), x(b, function (b) {
				b >= 0 && (c ? f._expand(a(e[b]), d, !0) : f._collapse(a(e[b]), d, !0))
			}), void 0) : x(g.children(".sui-accordion-item").not(".sui-accordion-item-collapsed"), function (a) {
				return a.data(qa)
			})
		},
		enabled: function () {
			var b, c = this,
				d = a(c.element),
				e = c._original,
				f = [].slice.call(arguments);
			return f.length > 0 ? (b = !!f[0], b ? (d.removeAttr(pa).removeClass("sui-accordion-disabled"), e.removeAttr(pa)) : (d.attr(pa, pa).addClass("sui-accordion-disabled"), e.attr(pa, pa)), c._enabled = b, void 0) : c._enabled
		},
		destroy: function () {
			var b = this;
			b.dataSource && b.dataSource.off(".shieldAccordion" + b.getInstanceId()), b._restoreAll(), a(b.element).remove(), b._original && b._original.unwrap().show(), b._original = b._dsLoadedOnce = b._fromUL = b._currItemEl = d, m.fn.destroy.call(b)
		}
	}), j.defaults = i, b.ui.plugin("Accordion", j), k = {
		cls: d,
		active: d,
		collapsible: !1,
		animation: {
			enabled: !0,
			activateDuration: 160,
			deactivateDuration: 60
		},
		titleTemplate: "{title}",
		titleClsTemplate: "{titleCls}",
		itemClsTemplate: "{itemCls}",
		hrefTemplate: "{href}",
		contentTemplate: "{content}",
		disabledTemplate: "{disabled}",
		iconUrlTemplate: "{iconUrl}",
		iconClsTemplate: "{iconCls}",
		position: ha,
		dataSource: d,
		readDataSource: !0,
		trigger: Y,
		events: {}
	}, l = m.extend({
		init: function () {
			m.fn.init.apply(this, arguments);
			var b, d = this,
				e = a(d.element),
				f = a(e).children("ul, ol").first(),
				g = d.options,
				h = g.position,
				i = g.dieOnError,
				j = g.dataSource,
				k = g.cls;
			if (b = d._eventNS = ".shieldTabs" + d.getInstanceId(), f.length <= 0 ? (f = null, d._noTabList = !0) : d._noTabList = !1, d._tabList = f, e.addClass("sui-tabs sui-tabs-" + h + (k ? " " + k : "")), e.on(V + b, v(d._keydown, d)), j) d.dataSource = n.create(j);
			else {
				if (!f) return d.destroy(), void B("shieldTabs: No dataSource or tabs UL element found.", i);
				d.dataSource = n.create({
					data: f,
					schema: {
						parse: function (b) {
							var c = [];
							return a(b).children("li").each(function () {
								var b = a(this),
									d = {
										title: b.html(),
										titleCls: b.attr("data-title-class"),
										itemCls: b.attr("data-item-class"),
										href: b.attr("data-href"),
										disabled: b.attr("data-disabled") ? !!b.attr("data-disabled") : D(b.attr(pa)) && null !== b.attr(pa),
										iconUrl: b.attr("data-icon-url"),
										iconCls: b.attr("data-icon-cls")
									};
								c.push(d)
							}), c
						}
					}
				})
			}
			a(c).on(na + b, v(d._adjustTabListHeight, d)), a(e).children("div").hide(), d.dataSource.on(_ + b, v(d._dsChange, d)), e.attr(L, "tablist"), h != da && h != ea || e.attr("aria-orientation", ka), j && !g.readDataSource || d.dataSource.read()
		},
		_dsChange: function () {
			this._render()
		},
		_getItemIcon: function (b) {
			var c, e = this.options,
				f = A(e.iconUrlTemplate, b);
			return f && "undefined" !== f ? a('<span class="sui-tabs-tab-icon"/>').append('<img src="' + f + '"/>') : (c = A(e.iconClsTemplate, b), c && "undefined" !== c ? a('<span class="sui-tabs-tab-icon"/>').addClass(c) : d)
		},
		_render: function () {
			var b, c, e, f, g, h = this,
				i = a(h.element),
				j = h.options,
				k = j.active,
				l = h._tabList,
				m = h.dataSource.view || [],
				n = m.length,
				o = [];
			if (h._initialized && (a(l).remove(), a(i).children("div").remove(), h._tabList = l = h._divs = b = d), !l)
				for (h._tabList = l = a("<ul/>").prependTo(i), c = 0; c < n; c++) g = m[c], l.append(a("<li/>").append(h._getItemIcon(g), '<span class="sui-tabs-tab-text">' + A(j.titleTemplate, g) + "</span>"));
			if (j.position == ia && l.appendTo(i), l.addClass("sui-tabs-tablist" + (j.collapsible ? " sui-tabs-tablist-collapsible" : "")), l.children("li").each(function () {
					a(this).attr(K) || a(this).attr(K, q()), a(this).attr(L, "tab")
				}), h._initialized || D(i.attr(oa)) || i.attr(oa, "0"), h._tabListHeight = l.outerHeight(), a(i).children("div").length <= 0)
				for (c = 0; c < n; c++) a(i).append('<div class="sui-tabs-cust"/>');
			for (h._divs = b = a(i).children("div"), a(b).addClass("sui-tabs-item"), a(b).hide(), c = 0; c < n; c++) {
				g = m[c], e = l.children("li:eq(" + c + ")"), f = a(b[c]);
				var p = A(j.titleClsTemplate, g),
					r = A(j.itemClsTemplate, g),
					s = A(j.disabledTemplate, g);
				p && "undefined" !== p && e.addClass(p), r && "undefined" !== r && f.addClass(r), (J(s) && s || "true" === s || "1" === s || 1 === s) && o.push(c), e.on(j.trigger + h._eventNS, v(h._select, h, c, e, f)), f.attr(L, "tabpanel").attr(S, e.attr(K)), f.attr(K) || f.attr(K, q()), e.attr(P, f.attr(K))
			}
			if (h._initialized = !0, k !== !1 && (k = I(k) ? k : 0, k = u(0, t(k, b.length - 1)), h._selectedIndex = k, h._activate(k, !0, !1)), o.length > 0)
				for (c = 0; c < o.length; c++) h.enabled(o[c], !1)
		},
		_select: function (b, c, d) {
			var e, f, g, h = this,
				i = h.options,
				j = i.collapsible,
				k = h.dataSource.view || [];
			h.enabled(b) && (b !== h._selectedIndex || j) && (c = c || a(h._tabList).children("li:eq(" + b + ")"), d = d || a(h._divs[b]), e = a(c).hasClass("sui-tabs-tab-active"), f = !(e && j && i.trigger !== W), g = h.trigger("select", {
				tab: c,
				content: d,
				active: e,
				activate: f,
				index: b,
				item: k[b]
			}), g.isDefaultPrevented() || (h._selectedIndex = b, h._activate(b, f, !0, c, d)))
		},
		_activate: function (b, c, e, f, g) {
			var h, i, j, k, l, m, n = this,
				o = n.options,
				p = o.animation,
				q = p.enabled,
				r = n.dataSource.view || [];
			n.enabled(b) && (c || b === n._activeIndex) && (f = f || a(n._tabList).children("li:eq(" + b + ")"), g = g || a(n._divs[b]), h = r[b], a(n._divs).stop(!0, !0), a(n._tabList).children("li").removeClass("sui-tabs-tab-active").attr(T, N), l = function () {
				m = function () {
					e && (i = n.trigger("activate", {
						tab: f,
						content: g,
						active: c,
						index: b,
						item: h
					})), n._adjustTabListHeight()
				}, c ? (n._activeIndex = b, a(f).addClass("sui-tabs-tab-active").attr(T, M), j = A(o.hrefTemplate, h), j && "undefined" !== j ? a(g).load(j, d, function (a, d, e) {
					n.trigger("load", {
						responseText: a,
						textStatus: d,
						jqXHR: e,
						tab: f,
						content: g,
						active: c,
						index: b,
						item: h
					}), n._adjustTabListHeight()
				}) : (k = A(o.contentTemplate, h), k && "undefined" !== k && a(g).html(k)), a(g).fadeIn(q ? p.activateDuration : 0, m)) : (n._activeIndex = d, m())
			}, D(n._activeIndex) ? a(n._divs).each(function (b) {
				b !== n._activeIndex ? a(this).hide() : a(this).fadeOut(q ? p.deactivateDuration : 0, l)
			}) : l())
		},
		_adjustTabListHeight: function () {
			var b, c, d, e = this,
				f = e.options.position;
			(f == da || f == ea && e._divs && e._divs[e._activeIndex]) && (b = a(e._tabList), c = a(e._divs[e._activeIndex]).innerHeight(), b.css("min-height", c), d = a(b.children("li").last()), e._tabListHeight >= c ? d.addClass("sui-tabs-tab-last-bottom") : d.removeClass("sui-tabs-tab-last-bottom"))
		},
		_keydown: function (b) {
			var c, d = this;
			if (a(d.element)[0] === a(b.target)[0]) {
				switch (b.keyCode) {
					case p.UP:
					case p.LEFT:
						d._selectPrevNext(b, !0), c = !0;
						break;
					case p.DOWN:
					case p.RIGHT:
						d._selectPrevNext(b, !1), c = !0;
						break;
					case p.SPACE:
						d.options.collapsible && d._toggleCurrent(b), c = !0
				}
				c && b.preventDefault()
			}
		},
		_toggleCurrent: function (a) {
			var b = this,
				c = b._selectedIndex;
			D(c) && b._activate(c, c !== b._activeIndex, !0)
		},
		_selectPrevNext: function (a, b) {
			var c = this,
				d = c._selectedIndex,
				e = D(d) ? b ? c._getPrevSelectableIndex() : c._getNextSelectableIndex() : c._getFirstSelectableIndex();
			D(e) && e !== d && c._select(e)
		},
		_getFirstSelectableIndex: function () {
			var b, c = this;
			return a(c._tabList).children("li").each(function (a) {
				if (c.enabled(a)) return b = a, !1
			}), b
		},
		_getNextSelectableIndex: function () {
			var b, c = this,
				e = c._selectedIndex,
				f = a(c._tabList).children("li"),
				g = f.length;
			if (e < g - 1)
				for (b = e + 1; b < g; b++)
					if (c.enabled(b)) return b;
			if (e > 0)
				for (b = 0; b < e; b++)
					if (c.enabled(b)) return b;
			return d
		},
		_getPrevSelectableIndex: function () {
			var b, c = this,
				e = c._selectedIndex,
				f = a(c._tabList).children("li"),
				g = f.length;
			if (e > 0)
				for (b = e - 1; b >= 0; b--)
					if (c.enabled(b)) return b;
			if (e < g - 1)
				for (b = g - 1; b > e; b--)
					if (c.enabled(b)) return b;
			return d
		},
		enabled: function () {
			var b, c = this,
				d = [].slice.call(arguments),
				e = d[0];
			if (b = a(c._tabList).children("li:eq(" + e + ")"), b.length > 0) {
				if (!(d.length > 1)) return !a(b).hasClass("sui-tabs-tab-disabled");
				d[1] ? a(b).removeClass("sui-tabs-tab-disabled") : a(b).addClass("sui-tabs-tab-disabled")
			}
		},
		enabledIndices: function () {
			var b = this,
				c = [];
			return a(b._tabList).children("li").each(function (b, d) {
				a(this).hasClass("sui-tabs-tab-disabled") || c.push(b)
			}), c
		},
		active: function () {
			var a = this,
				b = [].slice.call(arguments);
			return b.length > 0 ? void a._activate(b[0], b[1], !1) : a._activeIndex
		},
		content: function (b) {
			return a(this._divs)[b]
		},
		destroy: function () {
			var b = this,
				e = a(b.element),
				f = b.options,
				g = f.cls,
				h = b._tabList,
				i = b._eventNS;
			b.dataSource && b.dataSource.off(_ + i), a(c).off(i), a(e).removeClass("sui-tabs sui-tabs-" + f.position + (g ? " " + g : "")), a(e).children("div").removeClass("sui-tabs-item"), a(e).children(".sui-tabs-cust").remove(), b._divs = null, a(h).children("li").removeClass("sui-unselectable").off(i), a(h).removeClass("sui-tabs-tablist"), b._noTabList && a(h).remove(), b._tabList = b._noTabList = b._activeIndex = b._selectedIndex = b._initialized = b._tabListHeight = d, m.fn.destroy.call(b)
		}
	}), l.defaults = k, b.ui.plugin("Tabs", l)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g = b.ui.Widget,
		h = document,
		i = Math.ceil,
		j = navigator.userAgent,
		k = c.opera,
		l = /msie/i.test(j) && !k,
		m = l && 7 === h.documentMode;
	a.extend;
	e = {
		show: !1,
		showImage: !0,
		text: null,
		template: null,
		useSmallImage: !1
	}, f = g.extend({
		init: function (a, b) {
			var c = this;
			g.fn.init.apply(c, arguments), c.refresh(), c.options.show ? c.show() : c.hide()
		},
		destroy: function () {
			var b = this;
			a(b.mainElement).remove(), b.options.showImage && (a(b.loadingImage).remove(), b.loadingImage = null), b.loadingText && (a(b.loadingText).remove(), b.loadingText = null), a(b.backgroundElement).remove(), b.mainElement = b.backgroundElement = null, g.fn.destroy.call(b)
		},
		_render: function () {
			var b, c = this,
				d = c.options,
				e = d.template;
			if (c.mainElement = b = a("<div/>").appendTo(h.body), b.addClass("sui-loading-panel"), m && b.addClass("sui-loading-panel-ie7"), e) {
				e = a(e.replace(/^\s+/, "").replace(/\s+$/, "")), e.appendTo(h.body);
				var f = i((c.element.height() - e.height()) / 2),
					g = i((c.element.width() - e.width()) / 2);
				e.css({
					"z-index": "inherit",
					position: "relative",
					dispaly: "block",
					top: f + "px",
					left: g + "px"
				}).appendTo(b), c.template = e
			} else {
				if (d.showImage) {
					var j = a("<span/>").appendTo(b);
					c.loadingImage = j, d.useSmallImage ? j.addClass("sui-loading-image-small") : j.addClass("sui-loading-image")
				}
				d.text && c._generateTextElement()
			}
			var k = a("<span/>").appendTo(b);
			c.backgroundElement = k, k.addClass("sui-loading-back"), c._setPosition()
		},
		_generateTextElement: function () {
			var b = this,
				c = a("<span/>").appendTo(b.mainElement);
			c.get(0).innerHTML = b.options.text, c.addClass("sui-loading-text"), b.loadingText = c
		},
		refresh: function () {
			var a = this,
				b = (a.options, !a.mainElement || "none" == a.mainElement.css("display"));
			a.destroy(), a._render(), b ? a.hide() : a.show()
		},
		_setPosition: function () {
			var a = this,
				c = (a.options, a.element),
				d = c.offset(),
				e = b.ui.Util.GetMaxZIndex("div") + 1;
			a.mainElement.css({
				left: i(d.left) + "px",
				top: i(d.top) + "px",
				"z-index": e
			}), m && (a.loadingText && a.loadingText.css({
				"z-index": e + 1
			}), a.loadingImage && a.loadingImage.css({
				"z-index": e + 1
			}), a.template && a.template.css("z-index", e + 1))
		},
		_setElementsPosition: function () {
			var a = this,
				b = a.element.height(),
				c = a.loadingImage,
				d = a.loadingText,
				e = c ? c.height() : 0,
				f = d ? d.height() : 0,
				g = i((b - e - f) / 2);
			c && a.loadingImage.css("top", g + "px"), d && a.loadingText.css("top", g + "px")
		},
		show: function () {
			var a = this,
				b = a.options,
				c = a.element;
			a.mainElement.width(c.get(0).offsetWidth), a.mainElement.height(c.get(0).offsetHeight), a._setPosition(), a.mainElement.css("display", ""), b.template || a._setElementsPosition()
		},
		hide: function () {
			this.mainElement.css("display", "none")
		},
		setText: function (a) {
			this.options.text = a, this.refresh()
		}
	}), f.defaults = e, b.ui.plugin("LoadingPanel", f)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e = b.ui.Widget,
		f = (b.Class, b.Constants),
		g = document,
		h = f.SVG_NS,
		i = !!g.createElementNS && !!g.createElementNS(h, "svg").createSVGRect,
		j = (a.map, a.each, a.proxy),
		k = b.to["int"],
		l = (b.is.func, b.error, Math.min),
		m = Math.max,
		n = "disabled",
		o = "px",
		p = "float",
		q = "left",
		r = "right",
		s = "horizontal",
		t = "vertical",
		u = "circular",
		v = function (a, b, c, d) {
			var e = (d - 90) * Math.PI / 180;
			return {
				x: a + c * Math.cos(e),
				y: b + c * Math.sin(e)
			}
		},
		w = function (a, b, c, d, e) {
			var f = v(a, b, c, e),
				g = v(a, b, c, d),
				h = e - d <= 180 ? "0" : "1";
			return ["M", f.x, f.y, "A", c, c, 0, h, 0, g.x, g.y].join(" ")
		},
		x = {
			cls: d,
			enabled: !0,
			min: 0,
			max: 100,
			value: 0,
			layout: s,
			layoutOptions: {
				circular: {
					width: 30,
					color: "#197BB5",
					colorDisabled: "#C4C4C4",
					borderColor: "#C4C4C4",
					borderWidth: 1,
					backgroundColor: "#FFFFFF"
				}
			},
			reversed: !1,
			text: {
				enabled: !1,
				template: "{0}"
			},
			events: {}
		},
		y = e.extend({
			init: function () {
				e.fn.init.apply(this, arguments);
				var b, d = this,
					f = a(d.element),
					h = d.options,
					k = h.layout,
					l = h.cls;
				d._eventNS = ".shieldProgressbar" + d.getInstanceId(), f.addClass("sui-progressbar"), k === t ? f.addClass("sui-progressbar-vertical") : k === u && f.addClass("sui-progressbar-circular"), k !== u && (d.inner = a("<div/>").addClass("sui-progressbar-value").appendTo(f)), l && f.addClass(l), k === s ? (b = d.inner.css(p) || q, b = h.reversed ? b === q ? r : q : b === r ? r : q, d.inner.css(p, b)) : k == u && (i || g.namespaces.scvprogressbar || g.namespaces.add("scvprogressbar", "urn:schemas-microsoft-com:vml", "#default#VML")), a(c).on("resize" + d._eventNS, j(d._winResize, d)), d._value = h.value, d._render(), d.enabled(h.enabled)
			},
			_winResize: function () {
				this._render()
			},
			_render: function () {
				var c, d, e, f = this,
					g = f.options,
					j = g.layout,
					l = g.reversed,
					m = g.min,
					n = g.max,
					p = f._value,
					q = g.text,
					r = a(f.element),
					v = r.width(),
					x = r.height(),
					y = f.inner,
					z = n - m,
					A = k(100 * (p - m) / z);
				if (j === t) c = k(A * x / 100), y.css({
					width: "100%",
					height: c + o,
					"margin-top": (l ? "0" : x - c) + o
				});
				else if (j === s) y.css({
					width: A + "%",
					height: x + o
				});
				else {
					if (j !== u) return;
					var B = "",
						C = g.layoutOptions[j],
						D = C.width,
						E = C.borderWidth,
						F = f._enabled ? C.color : C.colorDisabled,
						G = C.borderColor,
						H = C.backgroundColor,
						I = v / 2,
						J = x / 2,
						K = (v > x ? J : I) - D / 2 - 1,
						L = 2 * K,
						M = k(360 * (p - m) / z),
						N = l ? 360 - M : 0,
						O = N + M,
						P = D - 2 * E;
					i ? (B = '<svg xmlns="' + h + '" version="1.1" width="' + v + '" height="' + x + '">', E > 0 && (B += '<circle cx="' + I + '" cy="' + J + '" r="' + K + '" stroke="' + G + '" stroke-width="' + D + '" fill="none" />'), p >= n ? B += '<circle cx="' + I + '" cy="' + J + '" r="' + K + '" stroke="' + F + '" stroke-width="' + P + '" fill="none" />' : (B += '<circle cx="' + I + '" cy="' + J + '" r="' + K + '" stroke="' + H + '" stroke-width="' + P + '" fill="none" />', B += '<path d="' + w(I, J, K, N, O) + '" stroke="' + F + '" stroke-width="' + P + '" fill="none" />'), B += "</svg>") : (B += '<scvprogressbar:group style="width:' + v + "px; height:" + x + 'px;" coordsize="' + v + "," + x + '">', E > 0 && (B += '<scvprogressbar:oval style="width:' + L + "px; height:" + L + "px; position:relative; top:" + J + "px; left:" + I + 'px;" strokeweight="' + D + 'px" strokecolor="' + G + '" fill="false"><scvprogressbar:fill opacity="0%" color="transparent" /></scvprogressbar:oval>'), p >= n ? B += '<scvprogressbar:oval style="width:' + L + "px; height:" + L + "px; position:relative; top:" + J + "px; left:" + I + 'px;" strokeweight="' + P + 'px" strokecolor="' + F + '" fill="false"><scvprogressbar:fill opacity="0%" color="transparent" /></scvprogressbar:oval>' : (B += '<scvprogressbar:oval style="width:' + L + "px; height:" + L + "px; position:relative; top:" + J + "px; left:" + I + 'px;" strokeweight="' + P + 'px" strokecolor="' + H + '" fill="false"><scvprogressbar:fill opacity="0%" color="transparent" /></scvprogressbar:oval>', B += '<scvprogressbar:arc style="width:' + L + "px; height:" + L + "px; position:relative; top:" + J + "px; left:" + I + 'px;" fill="false" strokeweight="' + P + 'px" strokecolor="' + F + '" startangle="' + N + '" endangle="' + O + '"><scvprogressbar:fill opacity="0%" color="transparent" /></scvprogressbar:arc>'), B += "</scvprogressbar:group>"), r.html(B)
				}
				q.enabled && (r.find(".sui-progressbar-text").remove(), f.text = a('<div class="sui-progressbar-text" />').appendTo(r).html(b.format.call(f, q.template, f._value)), d = f.text.width(), e = f.text.height(), f.text.css({
					top: (x - e) / 2 + o,
					left: (v - d) / 2 + o
				}))
			},
			value: function () {
				var a, b = this,
					c = b.options,
					d = [].slice.call(arguments);
				if (!(d.length > 0)) return b._value;
				if (b._enabled) {
					a = m(l(d[0], c.max), c.min);
					var e = b.trigger("change", {
						value: a
					});
					e.isDefaultPrevented() || (b._value = a, b._render(), a >= c.max && b.trigger("complete"))
				}
			},
			enabled: function () {
				var b, c = this,
					d = a(c.element),
					e = [].slice.call(arguments);
				return e.length > 0 ? (b = !!e[0], b ? d.removeAttr(n).removeClass("sui-progressbar-disabled") : d.attr(n, n).addClass("sui-progressbar-disabled"), c._enabled = b, c.options.layout == u && c._render(), void 0) : c._enabled
			},
			destroy: function () {
				var b = this,
					d = b.options.cls;
				a(c).off(b._eventNS), a(b.element).removeClass("sui-progressbar sui-progressbar-disabled sui-progressbar-vertical sui-progressbar-circular" + (d ? " " + d : "")).empty(), e.fn.destroy.call(b)
			}
		});
	y.defaults = x, b.ui.plugin("ProgressBar", y)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g, h, i, j, k = b.ui.Widget,
		l = (b.Class, b.DataSource),
		m = b.ui.Position,
		n = b.Constants.KeyCode,
		o = b.strid,
		p = document,
		q = a.proxy,
		r = a.each,
		s = a.grep,
		t = a.extend,
		u = b.error,
		v = b.format,
		w = b.is.defined,
		x = b.is["boolean"],
		y = b.is.integer,
		z = b.is.func,
		A = "id",
		B = "role",
		C = "true",
		D = "false",
		E = "aria-expanded",
		F = "aria-activedescendant",
		G = "horizontal",
		H = "vertical",
		I = "click",
		J = "focus",
		K = "blur",
		L = "change",
		M = "keydown",
		N = "tabindex",
		O = "disabled",
		P = "sui-menu-item-level",
		Q = "sui-menu-item-expanded",
		R = "sui-menu-item-disabled",
		S = "sui-menu-item-selected",
		T = "sui-menu-item-index",
		U = "sui-menu-item-hover",
		V = "sui-menu-item-data-item",
		W = "sui-menu-item-parent",
		X = "sui-menu-item-cc",
		Y = "sui-menu-item-cc-parent";
	e = {
		cls: d,
		width: d,
		height: d,
		dataSource: d,
		readDataSource: !0,
		orientation: G,
		delay: 100,
		animation: {
			enabled: !0,
			openDelay: 100,
			closeDelay: 50
		},
		contentTemplate: "{content}",
		overflow: "flipfit",
		events: {}
	}, f = k.extend({
		init: function () {
			k.fn.init.apply(this, arguments);
			var c, d, e, f, g, h = this,
				i = a(h.element),
				j = h.options,
				m = j.dieOnError,
				n = j.dataSource,
				o = j.cls,
				p = j.renderToINTERNAL,
				r = j.wrapOriginalINTERNAL,
				s = !w(r) || r;
			if (h._original = c = a(h.element), h._tagname = e = c.prop("tagName").toLowerCase(), h._isContext = j.isContextINTERNAL, g = h._eventNS = ".shieldMenu" + h.getInstanceId(), s ? (h.wrapper = c.wrap("<div/>").parent(), h._isWrapped = !0) : h._isWrapped = !1, c.hide(), h.element = i = a('<ul class="sui-menu sui-menu-top sui-menu-' + j.orientation + (o ? " " + o : "") + '"/>').on(J + g, q(h._focus, h)).on(K + g, q(h._blur, h)).on(M + g, q(h._keydown, h)), a(p).length > 0 ? a(p).append(i) : c.after(i), w(j.width) && i.css("width", j.width), w(j.minWidth) && i.css("minWidth", j.minWidth), w(j.height) && i.css("height", j.height), d = c.attr(N), i.attr(N, w(d) ? d : "0"), h._isRtl = b.support.isRtl(i), n) h.dataSource = l.create(n);
			else {
				if ("ul" !== e) return h.destroy(), void u("shieldMenu: No dataSource or underlying UL element found.", m);
				f = function (b) {
					var c = [];
					return a(b).children("li").each(function () {
						var b = a(this),
							d = b.children("ul").length > 0,
							e = {
								cls: b.attr("data-class"),
								content: d ? b.children().not("ul").first().html() : b.html(),
								href: b.attr("data-href") ? b.attr("data-href") : b.children().not("ul").first().attr("href"),
								disabled: b.attr("data-disabled") ? b.attr("data-disabled") : w(b.attr(O)) && null !== b.attr(O),
								separator: "separator" === b.attr("data-role"),
								iconUrl: b.attr("data-icon-url"),
								iconCls: b.attr("data-icon-cls")
							};
						d && (e.items = f(b.children("ul")[0])), c.push(e)
					}), c
				}, h.dataSource = l.create({
					data: c,
					schema: {
						parse: f
					}
				})
			}
			h.dataSource.on(L + g, q(h._dsChange, h)), i.attr(B, h._isContext ? "menu" : "menubar").attr("aria-orientation", j.orientation), j.readDataSource && h.dataSource.read()
		},
		refresh: function (a) {
			this.refreshWithElement(this._original, a)
		},
		_isFocused: function () {
			return a(this.element).hasClass("sui-menu-focus")
		},
		_focus: function (b) {
			var c = this;
			c._blurTimeout && (clearTimeout(c._blurTimeout), c._blurTimeout = null), c._isFocused() || (a(c.element).addClass("sui-menu-focus"), a(c.element).focus(), c.trigger(J))
		},
		_blur: function (b) {
			var c = this;
			c._isFocused() && (c._blurTimeout && clearTimeout(c._blurTimeout), c._blurTimeout = setTimeout(function () {
				a(c.element).removeClass("sui-menu-focus"), c._collapseAll(), c._deselectAll(), c.trigger(K)
			}, 100))
		},
		_dsChange: function () {
			var a = this;
			a._renderItems(a.dataSource.view, a.element, 0, null)
		},
		_getItemIcon: function (b) {
			var c = a('<span class="sui-menu-item-icon"/>');
			return b.iconUrl ? c.append('<img src="' + b.iconUrl + '"/>') : b.iconCls && c.addClass(b.iconCls), c
		},
		_renderItems: function (c, d, e, f) {
			var g, h, i, j, k, l, m, n, r, t, u, w, x = this,
				y = x.options,
				z = (c || []).length,
				D = s(c || [], function (a) {
					return a.iconUrl || a.iconCls
				}).length > 0;
			for (g = 0; g < z; g++) h = c[g], i = !!h.disabled, k = h.href, l = h.separator, t = !l && h.items && h.items.length > 0, r = h.iconUrl || h.iconCls, j = l ? "&nbsp;" : v.call(x, y.contentTemplate, h), n = a('<a class="sui-menu-item-link" ' + (k ? 'href="' + k + '"' : "") + ' tabindex="-1"/>').append('<span class="sui-menu-item-text' + (t ? " sui-menu-item-text-hc" : "") + '">' + j + "</span>"), m = a('<li class="sui-menu-item sui-unselectable' + (i ? " sui-menu-item-disabled" : "") + (l ? " sui-menu-item-separator" : "") + (h.cls ? " " + h.cls : "") + '"/>').on("selectstart", function () {
				return !1
			}).appendTo(d).data(V, h).data(W, f).data(P, e).data(R, i).data(T, g).attr(B, l ? "separator" : "menuitem").attr(A, o()).append(n), l ? m.attr("aria-orientation", e > 0 || y.orientation === H ? G : H) : i && m.attr("aria-disabled", C), n.click(q(x._itemClicked, x, m)).on(J, q(x.focus, x)), !l && D && (e > 0 || r || y.orientation === H) && n.prepend(x._getItemIcon(h)), t && (n.append('<span class="sui-menu-item-children-caret"/>'), u = a('<div class="sui-menu-submenu"/>').hide().data(Y, m).appendTo(m), u.css("z-index", b.ui.Util.GetMaxZIndex(".sui-menu, .sui-menu-submenu", p.body) + 1), w = a('<ul class="sui-menu sui-menu-vertical"/>').attr(B, "menu").appendTo(u), x._renderItems(h.items, w, e + 1, m), m.data(X, u).attr("aria-haspopup", "true").hover(q(x._itemMouseEnter, x, m, !0), q(x._itemMouseLeave, x, m, !0)))
		},
		_itemMouseEnter: function (a, b) {
			var c = this;
			a.addClass(U), setTimeout(function () {
				a.hasClass(U) && c._itemExpand(a, b)
			}, c.options.delay)
		},
		_itemMouseLeave: function (a, b) {
			var c = this;
			a.removeClass(U), c._itemCollapse(a, !0, b)
		},
		_itemExpand: function (a, b, c) {
			var d, e = this,
				f = e.options,
				g = f.animation,
				h = a.data(P),
				i = a.data(X),
				j = 0 === h && f.orientation === G,
				k = a.data(V),
				l = a.data(W);
			e._isExpandable(a) && e._canHaveFocus(a) && i && (i.stop(!0, !0), l && !e._isExpanded(l) && e._itemExpand(l, !1, !0, !0), b && (d = e.trigger("expand", {
				element: a,
				item: k
			})), j && i.css("min-width", a.outerWidth()), i.show(), m.Set(i, a, {
				source: "left top",
				target: j ? "left bottom" : "right top",
				overflow: f.overflow
			}), !c && g && g.enabled ? i.hide().slideDown(g.openDelay, function () {
				a.data(Q, !0).attr(E, C)
			}) : a.data(Q, !0).attr(E, C))
		},
		_itemCollapse: function (b, c, d, e) {
			var f, g = this,
				h = g.options.animation,
				i = b.data(X),
				j = b.data(V),
				k = b.data(W);
			i && (i.stop(!0, !0), d && (f = g.trigger("collapse", {
				element: b,
				item: j
			})), c = !w(c) || !!c, a(i).find("ul").first().children().each(function () {
				var b = a(this);
				g._isExpanded(b) && g._itemCollapse(b, c, !1, !0)
			}), !e && h && h.enabled ? i.slideUp(h.closeDelay, function () {
				b.data(Q, !1).attr(E, D), c && k && !k.hasClass(U) && g._itemCollapse(k, !0, !1, !0)
			}) : (i.hide(), b.data(Q, !1).attr(E, D), c && c && k && !k.hasClass(U) && g._itemCollapse(k, !0, !1, !0)))
		},
		_collapseAll: function () {
			var b = this;
			a(b.element).children("li").each(function () {
				var c = a(this);
				b._isExpanded(c) && b._itemCollapse(c, !1, !1, !0)
			})
		},
		_isExpandable: function (a) {
			return !!a.data(X)
		},
		_isExpanded: function (a) {
			return a.data(Q) === !0
		},
		_hasExpanded: function (b) {
			var c = this,
				d = b.data(X);
			return b.data(Q) === !0 && s(a(d).find("ul").first().children(), function (b) {
				return c._isExpanded(a(b)) || c._hasExpanded(a(b))
			}).length > 0
		},
		_canHaveFocus: function (a) {
			return !a.data(R) && !a.data(V).separator
		},
		_keydown: function (a) {
			var b, c = this,
				d = !0;
			switch (a.keyCode) {
				case n.UP:
					c._move("up", a);
					break;
				case n.DOWN:
					c._move("down", a);
					break;
				case n.LEFT:
					c._move("left", a);
					break;
				case n.RIGHT:
					c._move("right", a);
					break;
				case n.SPACE:
				case n.ENTER:
					b = c._getSelected(), w(b) && (c._isExpanded(b) || c._itemExpand(b, !0), c._itemClicked(b));
					break;
				default:
					d = !1
			}
			d && a.preventDefault()
		},
		_getFirstSelectableItem: function (b) {
			var c, d = this;
			return a(b).children("li").each(function () {
				var b = a(this);
				if (d._canHaveFocus(b)) return c = b, !1
			}), c
		},
		_getNextSelectableItem: function (b) {
			var c, d, e = this,
				f = b.parent(),
				g = b.index(),
				h = f.children("li"),
				i = h.length;
			if (g < i - 1)
				for (d = g + 1; d < i; d++)
					if (c = a(h[d]), e._canHaveFocus(c)) return c;
			if (g > 0)
				for (d = 0; d < g; d++)
					if (c = a(h[d]), e._canHaveFocus(c)) return c;
			return b
		},
		_getPrevSelectableItem: function (b) {
			var c, d, e = this,
				f = b.parent(),
				g = b.index(),
				h = f.children("li"),
				i = h.length;
			if (g > 0)
				for (d = g - 1; d >= 0; d--)
					if (c = a(h[d]), e._canHaveFocus(c)) return c;
			if (g < i - 1)
				for (d = i - 1; d > g; d--)
					if (c = a(h[d]), e._canHaveFocus(c)) return c;
			return b
		},
		_move: function (a, b) {
			var c, e, f, g, h = this,
				i = h._getSelected();
			h._isRtl;
			if (w(i))
				if (c = i.parent().hasClass("sui-menu-vertical") ? H : G, e = i.data(W), f = e ? e.parent().hasClass("sui-menu-vertical") ? H : G : d, c === G) {
					if ("up" === a) return void h._itemCollapse(i, !1, !0);
					if ("down" === a) {
						if (!h._isExpandable(i)) return;
						h._itemExpand(i, !0), g = h._getFirstSelectableItem(i.find(".sui-menu-submenu > .sui-menu").first())
					} else if ("left" === a) {
						if (g = h._getPrevSelectableItem(i), g === i) return
					} else {
						if ("right" !== a) return;
						if (g = h._getNextSelectableItem(i), g === i) return
					}
				} else if ("up" === a) {
				if (0 === i.index()) {
					if (e && f === G) g = e, h._itemCollapse(g, !1, !0);
					else if (g = h._getPrevSelectableItem(i), g === i) return
				} else if (g = h._getPrevSelectableItem(i), g === i) return
			} else if ("down" === a) {
				if (g = h._getNextSelectableItem(i), g === i) return
			} else if ("left" === a) {
				if (!e || f !== H) return;
				g = e, h._itemCollapse(g, !1, !0)
			} else {
				if ("right" !== a) return;
				if (!h._isExpandable(i)) return;
				h._itemExpand(i, !0), g = h._getFirstSelectableItem(i.find(".sui-menu-submenu > .sui-menu").first())
			} else g = h._getFirstSelectableItem(h.element);
			w(g) && (h._setSelected(g, !0), h.trigger("select", {
				element: g,
				item: g.data(V)
			}))
		},
		_deselectAll: function () {
			var b = this,
				c = b.element;
			a(c).find("." + S).each(function () {
				a(this).removeClass(S)
			}), c.removeAttr(F)
		},
		_setSelected: function (b, c) {
			var d = this,
				e = d.element;
			d._canHaveFocus(b) && (c ? (d._deselectAll(), a(b).addClass(S), e.attr(F, b.attr(A))) : (a(b).removeClass(S), e.removeAttr(F)))
		},
		_getSelected: function () {
			var b = this,
				c = a(b.element).find("." + S).first();
			return a(c).length > 0 ? c : d
		},
		_isSelected: function (b) {
			return a(b).hasClass(S)
		},
		_itemClicked: function (a, b) {
			var c, d, e = this,
				f = a.data(V);
			b && b.isPropagationStopped() || (e._focus(), e._canHaveFocus(a) && (d = {
				item: f
			}, e._isContext && (d.element = j), c = e.trigger(I, d), b && (b.stopPropagation(), c.isDefaultPrevented() && b.preventDefault())))
		},
		_getItemByIndex: function () {
			var b, c, e = this,
				f = [].slice.call(arguments),
				g = d;
			if (f.length > 0)
				for (c = 0; c < f.length; c++) {
					if (b = f[c], !y(b)) return d;
					if (g = 0 === c ? a(e.element).children("li:eq(" + b + ")") : a(a(g).data(X)).children("ul").first().children("li:eq(" + b + ")"), a(g).length <= 0) return d
				}
			return g
		},
		_getItemIndex: function (a) {
			var b = [];
			do b.unshift(a.data(T)), a = a.data(W); while (a);
			return b
		},
		enabled: function () {
			var b, c = this,
				e = [].slice.call(arguments),
				f = x(e[0]) ? e.shift() : d;
			if (b = c._getItemByIndex.apply(this, e), w(b)) {
				if (!w(f)) return !b.data(R);
				b.data(R, !f), a(b)[f ? "removeClass" : "addClass"]("sui-menu-item-disabled")
			}
		},
		expanded: function () {
			var a, b = this,
				c = [].slice.call(arguments),
				e = x(c[0]) ? c.shift() : d;
			if (a = b._getItemByIndex.apply(this, c), w(a)) {
				if (!w(e)) return b._isExpanded(a);
				e ? (b._collapseAll(), b._itemExpand(a, !1)) : b._itemCollapse(a, !1, !1)
			}
			w(e) && e === !1 && 0 === c.length && b._collapseAll()
		},
		selected: function () {
			var a, b = this,
				c = [].slice.call(arguments),
				e = x(c[0]) ? c.shift() : d;
			if (a = b._getItemByIndex.apply(this, c), w(a)) {
				if (!w(e)) return b._isSelected(a);
				b._setSelected(a, e)
			}
			w(e) && e === !1 && 0 === c.length && b._deselectAll()
		},
		selectedIndex: function () {
			var a = this,
				b = a._getSelected();
			if (w(b)) return a._getItemIndex(b)
		},
		selectedData: function () {
			var b = this,
				c = b._getSelected();
			if (w(c)) return a(c).data(V)
		},
		selectedItem: function () {
			return this._getSelected()
		},
		destroy: function () {
			var b = this,
				c = b._eventNS;
			b.dataSource && b.dataSource.off(L + c), b._blurTimeout && (clearTimeout(b._blurTimeout), b._blurTimeout = null), a(b.element).off(c).remove(), b._isWrapped && b._original.unwrap(), b._original.show(), b._original = null, k.fn.destroy.call(b)
		}
	}), f.defaults = e, b.ui.plugin("Menu", f), g = t({}, e, {
		orientation: H,
		target: d,
		filter: d,
		focusOnOpen: !0,
		minWidth: d
	}), h = k.extend({
		init: function () {
			k.fn.init.apply(this, arguments);
			var c, d, e = this,
				g = a(e.element),
				h = e.options,
				i = h.events,
				j = {};
			c = e._eventNS = ".shieldContextMenu" + e.getInstanceId(), e.menuElement = d = a('<div class="sui-context-menu"/>').hide().appendTo(p.body), h.minWidth && e.menuElement.css("min-width", h.minWidth), r(["focus", "blur", "expand", "collapse", "click", "select"], function (a, b) {
				var c = i[b];
				z(c) && (j[b] = q(c, e))
			}), e._menu = new f(g, t({}, h, {
				renderToINTERNAL: d,
				wrapOriginalINTERNAL: !1,
				isContextINTERNAL: !0,
				events: j
			})), e._mouseTracker = new b.MouseTracker, a(h.target).on("contextmenu" + c, h.filter, function (b) {
				return b.preventDefault(), e._open(e._mouseTracker.getPosition(b), a(b.currentTarget), !0, !1), !1
			}), a(p).on("mousedown" + c, function (b) {
				a(b.target).closest(".sui-context-menu").length <= 0 && e._closeOpen(!0)
			})
		},
		_open: function (a, c, d, e) {
			var f, g = this,
				h = g.menuElement,
				k = g.options,
				l = k.animation,
				n = k.focusOnOpen;
			g._closeOpen(!1), d && (f = g.trigger("open", {
				element: c
			}), f.isDefaultPrevented()) || (h.stop(!0, !0), h.show(), m.Set(h, new b.Event({
				pageX: a.x,
				pageY: a.y
			}), {
				source: "left top",
				target: "left top",
				overflow: k.overflow
			}), l && l.enabled ? h.hide().slideDown(l.openDelay, function () {
				i = g, j = c, g._visible = !0, n && g.focus()
			}) : (i = g, j = c, g._visible = !0, n && g.focus()))
		},
		_close: function (a) {
			var b, c = this,
				d = c.menuElement,
				e = c.options.animation;
			a && (b = c.trigger("close"), b.isDefaultPrevented()) || (i = j = null, d.stop(!0, !0), e && e.enabled ? d.slideUp(e.closeDelay, function () {
				c._visible = !1
			}) : (d.hide(), c._visible = !1))
		},
		_closeOpen: function (a) {
			i && i.closeINTERNAL(!0)
		},
		closeINTERNAL: function (a) {
			this._close(a)
		},
		focus: function () {
			a(this.menuElement).find(".sui-menu").first().focus()
		},
		visible: function () {
			var a, b, c = this,
				d = [].slice.call(arguments);
			return d.length > 0 ? (a = !!d[0], b = d[1] ? d[1] : c._mouseTracker.getPosition(), a ? c._open(b, d[2], !1, !1) : c._close(!1), c._visible = a, void 0) : c._visible
		},
		enabled: function () {
			return this._menu.enabled.apply(this._menu, arguments)
		},
		expanded: function () {
			return this._menu.expanded.apply(this._menu, arguments)
		},
		selected: function () {
			return this._menu.selected.apply(this._menu, arguments)
		},
		selectedIndex: function () {
			return this._menu.selectedIndex.apply(this._menu, arguments)
		},
		selectedData: function () {
			return this._menu.selectedData.apply(this._menu, arguments)
		},
		selectedItem: function () {
			return this._menu.selectedItem.apply(this._menu, arguments)
		},
		destroy: function () {
			var b = this,
				c = b._eventNS;
			a(p).off(c), a(b.options.target).off(c), b._mouseTracker && (b._mouseTracker.destroy(), b._mouseTracker = null), b._close(), b._menu && (b._menu.destroy(), b._menu = null), a(b.menuElement).remove(), k.fn.destroy.call(b)
		}
	}), h.defaults = g, b.ui.plugin("ContextMenu", h)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g = b.ui.Widget,
		h = (a.extend, b.is),
		i = h.undefined,
		j = "change";
	e = {
		min: 0,
		max: 5,
		step: 1,
		symbolWidth: 16,
		symbolHeight: 16,
		enabled: !0,
		markPreset: !1,
		value: 0,
		events: {}
	}, f = g.extend({
		init: function (a, b) {
			var c = this;
			g.fn.init.apply(c, arguments), c._enabled = c.options.enabled, c._renderRating(a, b, !1)
		},
		_setSelection: function (a) {
			var b = this;
			if (b._enabled) return b._value = a, b._markPreset && (b._markPreset = !1), b._range.find(".sui-rating-hover").hide(), b._range.find(".sui-rating-selected").width(a * b._symbolWidth - b._min * b._symbolWidth).show(), b.trigger(j), !0
		},
		_calcRawScore: function (b, c) {
			var d = this,
				e = c.changedTouches ? c.changedTouches[0].pageX : c.pageX,
				f = e - a(b).offset().left;
			return d._ltr || (f = d._range.width() - f), f > d._range.width() && (f = d._range.width()), f < 0 && (f = 0), Math.ceil(f / d._symbolWidth * (1 / d._step))
		},
		_setHover: function (a) {
			var b, c, d = this;
			d._enabled && (b = a * d._symbolWidth * d._step, c = d._range.find(".sui-rating-hover"), c.width() != b && (d._range.find(".sui-rating-selected").hide(), c.width(b).show()))
		},
		_touchHandler: function (a) {
			var b = a.originalEvent.changedTouches,
				d = b[0],
				e = "";
			switch (a.type) {
				case "touchmove":
					e = "mousemove";
					break;
				case "touchend":
					e = "mouseup";
					break;
				default:
					return
			}
			var f = document.createEvent("MouseEvent");
			f.initMouseEvent(e, !0, !0, c, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), d.target.dispatchEvent(f), a.preventDefault()
		},
		_renderRating: function (a, b, c) {
			var d = this,
				f = 1;
			if (d._item = d.element, d._item.hasClass("sui-rating") || d._item.addClass("sui-rating"), d._ltr = !d.element.parent().hasClass("sui-rtl"), c) {
				var g = null;
				i(d._value) ? (g = isNaN(b.value) ? e.value : b.value, d._value = g) : g = d._value, d._enabled && (d._wired = !1)
			}
			if (!d._initialized) {
				d._min = isNaN(b.min) ? e.min : b.min, d._max = isNaN(b.max) ? e.max : b.max, d._step = isNaN(b.step) ? e.step : b.step, d._symbolWidth = isNaN(b.symbolWidth) ? e.symbolWidth : b.symbolWidth, d._symbolHeight = isNaN(b.symbolHeight) ? e.symbolHeight : b.symbolHeight, d._value = isNaN(b.value) ? e.value : b.value, d._markPreset = isNaN(b.markPreset) ? e.markPreset : b.markPreset, a = "DIV" == d._item[0].nodeName ? "div" : "span", f++;
				var h = '<{{element}} id="shieldRating-range-{{index}}" class="sui-rating-range" tabindex="0"><{{element}} class="sui-rating-selected" style="height:' + d._symbolHeight + 'px"></{{element}}><{{element}} class="sui-rating-hover" style="height:' + d._symbolHeight + 'px"></{{element}}></{{element}}>',
					j = h.replace(/{{index}}/gi, f).replace(/{{element}}/gi, a);
				this.element.append(j), d._initialized = !0
			}
			d._item.find(".sui-rating-selected, .sui-rating-hover").height(d._symbolHeight), d._range = d._item.find(".sui-rating-range"), d._range.width(d._symbolWidth * (d._max - d._min)).height(d._symbolHeight);
			var k = "sui-rating-preset" + (d._ltr ? "" : "-rtl");
			if (d._markPreset ? d._item.find(".sui-rating-selected").addClass(k) : d._item.find(".sui-rating-selected").removeClass(k), null != d._value) {
				var l = (d._value - d._min) * d._symbolWidth;
				d._item.find(".sui-rating-selected").width(l)
			}
			d._wired || (d._enabled && (c || (d._range.on("touchmove touchend", d._touchHandler), d._range.mousemove(function (a) {
				var b = d._calcRawScore(this, a);
				d._setHover(b)
			}), d._range.mouseleave(function (a) {
				d._range.find(".sui-rating-hover").hide().width(0), d._item.trigger("hover", [null]).trigger("over", [null]), d._range.find(".sui-rating-selected").show()
			}), d._range.mouseup(function (a) {
				var b = d._calcRawScore(this, a),
					c = b * d._step + d._min;
				d._setSelection(c), d._range.blur()
			}), d._range.keyup(function (a) {
				38 != a.which && a.which != (d._ltr ? 39 : 37) || d._setSelection(Math.min(d._value + d._step, d._max)), 40 != a.which && a.which != (d._ltr ? 37 : 39) || d._setSelection(Math.max(d._value - d._step, d._min))
			}))), d._wired = !0)
		},
		value: function () {
			var a = this,
				b = a.options,
				c = [].slice.call(arguments);
			if (!(c.length > 0)) return i(a._value) ? i(b.value) ? a._value : b.value : a._value;
			var d = c[0];
			d < a._min || d > a._max || (a.options.value = d, a._value = d, a._renderRating(a, b, !0))
		},
		enabled: function () {
			var a = this,
				b = a.options,
				c = a.element,
				d = [].slice.call(arguments);
			return d.length > 0 ? (a._enabled = d[0], a._renderRating(a, b, !0), a._enabled ? c.removeClass("sui-rating-disabled") : c.addClass("sui-rating-disabled"), void 0) : a._enabled
		},
		destroy: function () {
			var b = this;
			a(b.element).removeClass("sui-rating-hover sui-rating-selected sui-rating-disabled sui-rating-preset-rtl sui-rating-preset sui-rating").empty(), b._range.off("touchmove touchend", b._touchHandler), b._markPreset = b._enabled = b._min = b._max = b._value = b._ltr = b._item = b._symbolWidth = b._symbolHeight = b._step = b._wired = b._initialized = b._range = null, g.fn.destroy.call(b)
		}
	}), f.defaults = e, b.ui.plugin("Rating", f)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e = b.ui.Widget,
		f = (b.Class, b.DataSource),
		g = document,
		h = b.is,
		i = (b.get, b.format),
		j = b.to["int"],
		k = (Math.abs, a.each, a.proxy),
		l = (a.extend, a.map, c.opera),
		m = navigator.userAgent,
		n = /msie/i.test(m) && !l,
		o = n && 7 === g.documentMode,
		p = "width",
		q = "sui-selected",
		r = "sui-disabled",
		s = "click",
		t = "px",
		u = {
			currentPage: 1,
			totalItems: null,
			pageSize: 10,
			pageLinksCount: 5,
			directionLinks: !0,
			boundaryLinks: !0,
			imageLinks: !1,
			messages: {
				pageLabelTemplate: "{0}",
				infoBarTemplate: "{0} - {1} of {2} items",
				previousText: "&lsaquo;",
				nextText: "&rsaquo;",
				firstText: "&laquo;",
				lastText: "&raquo;",
				firstTooltip: "Go to the first page",
				previousTooltip: "Go to the previous page",
				nextTooltip: "Go to the next page",
				lastTooltip: "Go to the last page"
			}
		},
		v = e.extend({
			init: function (a, b) {
				e.fn.init.apply(this, arguments);
				var c, d = this,
					g = d.options;
				d.currentPage = g.currentPage, d._createWrappers(), d._createPagerElements(), n && d.element.on("selectstart", d._selectStart = function () {
					return !1
				}), d.element.on(s, "a", d._click = k(d._clickHandler, d)), g.dataSource ? (c = d.dataSource = f.create(g.dataSource), c.on("change.shieldPager" + d.getInstanceId(), k(d._dataChange, d)), d._updateDataSource()) : d.refresh(!0)
			},
			destroy: function () {
				var a = this;
				a.dataSource && a.dataSource.off("change.shieldPager" + a.getInstanceId()), a.pagination = null, a.infoBox = null, a.element.off("selectstart", a._selectStart), a._selectStart = null, a.element.off(s, "a", a._click), a._click = null, a.startLinkIndex = null, a.endLinkIndex = null, a.element.remove(), e.fn.destroy.call(a)
			},
			_clickHandler: function (b) {
				var c = a(b.currentTarget),
					d = this;
				d.options;
				if (b.preventDefault(), !c.parent().hasClass(r)) {
					var e = j(c.attr("data-page"));
					d.currentPage = e, d.refresh()
				}
			},
			_createWrappers: function () {
				var b = this,
					c = b.element;
				c.addClass("sui-pager sui-pager-core");
				var d = a("<ul/>").appendTo(c);
				o ? d.addClass("sui-pagination sui-pagination-ie7") : d.addClass("sui-pagination");
				var e = a("<div/>").appendTo(c);
				n && !o ? e.addClass("sui-pager-info-box-ie") : e.addClass("sui-pager-info-box"), b.pagination = d, b.infoBox = e
			},
			_updateInfoBox: function () {
				var b = this,
					c = b.options,
					d = c.messages,
					e = c.pageSize * (b.currentPage - 1) + 1,
					f = e - 1 + c.pageSize,
					g = Math.ceil(c.totalItems / c.pageSize);
				f > c.totalItems && (f = c.totalItems), 0 === c.totalItems && (e = 0);
				var h = i.call(b, d.infoBarTemplate, e, f, c.totalItems, b.currentPage, g);
				a(b.infoBox).empty().html(h)
			},
			_createPagerElements: function () {
				var b = this,
					c = b.options,
					d = c.messages,
					e = b.currentPage,
					f = b.pagination,
					g = Math.ceil(c.totalItems / c.pageSize),
					h = Math.min(c.pageLinksCount, g),
					k = "",
					l = "",
					m = "",
					n = "",
					s = "",
					u = j((e - 1) / c.pageLinksCount),
					v = u * c.pageLinksCount + 1;
				1 == e && (m = " " + r), e != g && c.totalItems || (n = " " + r), c.imageLinks && (d.previousText = "&nbsp;", d.nextText = "&nbsp;", d.firstText = "&nbsp;", d.lastText = "&nbsp;", l = "sui-navigation-links ");
				var w = Math.min(v + h, g + 1);
				b.startLinkIndex = v, b.endLinkIndex = w - 1, u > 0 && (k += "<li class='sui-pager-element'><a data-page='" + (b.startLinkIndex - 1) + "'>...</a></li>");
				for (var x = v; x < w; x++) {
					var y = i.call(b, d.pageLabelTemplate, x);
					x == e && (s = " " + q), k += "<li class='sui-pager-element'><a data-page='" + x + "' class='sui-pager-number" + s + "'>" + y + "</a></li>", s = ""
				}
				b.endLinkIndex < g && (k += "<li class='sui-pager-element'><a data-page='" + (b.endLinkIndex + 1) + "'>...</a></li>"), c.directionLinks && (k = "<li class='sui-pager-element" + m + "'><a title='" + d.previousTooltip + "' data-page='" + (e - 1) + "' class='" + l + "sui-prev'>" + d.previousText + "</a></li>" + k, k = k + "<li class='sui-pager-element" + n + "'><a title='" + d.nextTooltip + "' data-page='" + (e + 1) + "' class='" + l + "sui-next'>" + d.nextText + "</a></li>"), c.boundaryLinks && (k = "<li class='sui-pager-element" + m + "'><a title='" + d.firstTooltip + "' data-page='1' class='" + l + "'>" + d.firstText + "</a></li>" + k, k = k + "<li class='sui-pager-element" + n + "'><a title='" + d.lastTooltip + "' data-page='" + g + "' class='" + l + "'>" + d.lastText + "</a></li>"), f.html(k);
				var z = f.find("a");
				if (z.length > 0 && (a(z[0]).addClass("sui-first"), a(z[z.length - 1]).addClass("sui-last")), o) {
					var A = f.find("li");
					if (A.length > 0) {
						var B = 0;
						for (x = 0; x < A.length; x++) {
							var C = A[x].clientWidth;
							B += C, a(A[x]).css(p, C + t)
						}
						f.css(p, B + t)
					}
				}
			},
			_dataChange: function () {
				var a = this,
					b = a.options,
					c = a.dataSource,
					d = c.take,
					e = Math.ceil(c.skip / d) + 1;
				a.currentPage = e, b.pageSize = d, b.totalItems = c.total, a.refresh(!0)
			},
			refresh: function (a) {
				var b = this;
				b.pagination.empty(), b._createPagerElements(), b._updateInfoBox(), a || (b._updateDataSource(), b.trigger("change", {
					currentPage: b.currentPage,
					pageSize: b.options.pageSize
				}))
			},
			_updateDataSource: function () {
				var a = this,
					b = a.dataSource,
					c = a.options;
				b && (b.skip = (a.currentPage - 1) * c.pageSize, b.take = c.pageSize, b.read())
			},
			page: function (a) {
				var b = this;
				if (!a) return b.currentPage;
				var c = j(a);
				b._isValidPage(c) && (b.currentPage = c, b.refresh())
			},
			first: function () {
				this.currentPage = 1, this.refresh()
			},
			last: function () {
				var a = this,
					b = a.options,
					c = Math.ceil(b.totalItems / b.pageSize);
				a.currentPage = c, a.refresh()
			},
			hasNext: function () {
				var a = this,
					b = a.options,
					c = Math.ceil(b.totalItems / b.pageSize);
				return a.currentPage < c
			},
			hasPrev: function () {
				return this.currentPage > 1
			},
			next: function () {
				var a = this,
					b = a.options,
					c = Math.ceil(b.totalItems / b.pageSize);
				a.currentPage != c && (a.currentPage = a.currentPage + 1, a.refresh())
			},
			prev: function () {
				var a = this;
				a.options;
				1 != a.currentPage && (a.currentPage = a.currentPage - 1, a.refresh())
			},
			pageSize: function (a) {
				var b = this,
					c = b.options;
				if (!a) return c.pageSize;
				var d = j(a);
				b._isValidPageSize(d) && (b.currentPage = 1, c.pageSize = d, b.refresh())
			},
			_isValidPage: function (a) {
				var c = this.options,
					d = Math.ceil(c.totalItems / c.pageSize);
				return h.integer(a) ? !(a > d || a < 1) || (b.error("Invalid page number. The page number must be greater than 0 and less than " + d + ".", c.dieOnError), !1) : (b.error("Invalid page number. The page number must integer.", c.dieOnError), !1)
			},
			_isValidPageSize: function (a) {
				var c = this.options;
				return h.integer(a) ? !(a < 1) || (b.error("Invalid page number. The page number must be greater than 0 (zero).", c.dieOnError), !1) : (b.error("Invalid page size number. The page size number must be integer.", c.dieOnError), !1)
			}
		});
	v.defaults = u, b.ui.plugin("Pager", v), b.ui.Pager = v
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C = b.ui.Widget,
		D = (b.Class, b.DataSource),
		E = b.ui.Position,
		F = b.Constants.KeyCode,
		G = b.error,
		H = b.is.func,
		I = b.is.array,
		J = b.is.defined,
		K = (b.is.number, b.to.array),
		L = b.to["int"],
		M = b.to.number,
		N = b.support.browser,
		O = b.format,
		P = b.strid,
		Q = document,
		R = Math.min,
		S = Math.max,
		T = Math.pow,
		U = a.extend,
		V = (a.map, a.each),
		W = a.proxy,
		X = a.inArray,
		Y = "id",
		Z = "role",
		$ = "true",
		_ = "false",
		aa = "listbox",
		ba = "textbox",
		ca = "button",
		da = "switch",
		ea = "aria",
		fa = ea + "-selected",
		ga = ea + "-autocomplete",
		ha = ea + "-activedescendant",
		ia = ea + "-multiline",
		ja = ea + "-valuenow",
		ka = ea + "-valuemin",
		la = ea + "-valuemax",
		ma = ea + "-valuetext",
		na = ea + "-disabled",
		oa = ea + "-haspopup",
		pa = ea + "-checked",
		qa = ea + "-label",
		ra = ea + "-labelledby",
		sa = ea + "-controls",
		ta = ea + "-expanded",
		ua = "alt",
		va = "title",
		wa = "disabled",
		xa = "checked",
		ya = "selected",
		za = "itemclick",
		Aa = "tabindex",
		Ba = "mousedown",
		Ca = "mouseup",
		Da = "mouseout",
		Ea = "click",
		Fa = "keydown",
		Ga = "keypress",
		Ha = "keyup",
		Ia = "cut",
		Ja = "paste",
		Ka = "dragstart",
		La = "dragenter",
		Ma = "dragover",
		Na = "drop",
		Oa = "change",
		Pa = "focus",
		Qa = "blur",
		Ra = "resize",
		Sa = "select",
		Ta = "input",
		Ua = "value",
		Va = "placeholder",
		Wa = "selectstart",
		Xa = "unselectable",
		Ya = "on",
		Za = "width",
		$a = "height",
		_a = "suilbitemdata",
		ab = "suilbitemindex",
		bb = "suilbitemvalue",
		cb = "suilbitemtext",
		db = "uts",
		eb = "uti",
		fb = "utta",
		gb = "uto",
		hb = function (b) {
			var c = a(b).prop("tagName").toLowerCase();
			return c == Sa ? db : c == Ta ? eb : "textarea" == c ? fb : gb
		},
		ib = function (b) {
			return a("<div/>").text(b).html()
		},
		jb = function (b) {
			var c, d = a(b);
			d.focus(), d.get(0).setSelectionRange ? (c = 2 * d.val().length, d.get(0).setSelectionRange(c, c)) : d.val(d.val())
		},
		kb = function (a) {
			a += "";
			var b = a.lastIndexOf(".");
			return b > -1 ? a.length - b - 1 : 0
		},
		lb = function (a, b) {
			if (a && !H(a))
				if (I(a))
					for (var c = 0; c < a.length; c++) lb(a[c], b);
				else if (a.or || a.and)
				for (var d in a) a.hasOwnProperty(d) && lb(a[d], b);
			else a.value = b
		};
	e = {
		enabled: !0,
		cls: d,
		dataSource: d,
		readDataSource: !0,
		valueTemplate: d,
		textTemplate: d,
		multiple: d,
		selected: d,
		values: d,
		width: d,
		height: d,
		maxHeight: d,
		events: {}
	}, f = C.extend({
		init: function () {
			C.fn.init.apply(this, arguments);
			var b, c, d, e, f = this,
				g = f.options,
				h = g.dieOnError,
				i = g.dataSource,
				j = g.selected,
				k = g.values,
				l = g.renderToINTERNAL,
				m = g.wrapOriginalINTERNAL,
				n = g.tabindexINTERNAL,
				o = g.filterINTERNAL,
				p = J(o) ? {
					filter: o
				} : {},
				q = !J(m) || m;
			if (f._original = b = a(f.element), f._utype = e = hb(b), e == eb && g.multiple) return f.destroy(), void G("shieldListBox: Cannot initialize a multi-selection ListBox from an input element.", h);
			if (f._eventNS = ".shieldListBox" + f.getInstanceId(), J(k) || J(j) || e != db && e != eb || (k = b.val()), q ? (f.wrapper = b.wrap("<span/>").parent(), f._isWrapped = !0) : f._isWrapped = !1, b.hide(), f.element = d = a('<ul id="' + P() + '"/>').on(Pa + f._eventNS, W(f._focus, f)).on(Qa + f._eventNS, W(f._blur, f)), J(g.width) && d.css(Za, g.width), J(g.height) && d.css($a, g.height), J(g.maxHeight) && d.css("max-height", g.maxHeight), a(l).length > 0 ? a(l).append(d) : b.after(d), i) f.dataSource = D.create(i, p), g.valueTemplate || (g.valueTemplate = "{0}"), g.textTemplate || (g.textTemplate = "{0}");
			else {
				if (e != db) return f.destroy(), void G("shieldListBox: No dataSource or underlying SELECT element found.", h);
				f.dataSource = D.create(U({}, {
					data: b,
					schema: {
						type: Sa
					}
				}, p)), g.valueTemplate || (g.valueTemplate = "{value}"), g.textTemplate || (g.textTemplate = "{text}"), J(g.multiple) || (g.multiple = b.not("[multiple]").length <= 0)
			}
			d.addClass("sui-listbox"), g.cls && d.addClass(g.cls), c = J(n) ? n : b.attr(Aa), d.attr(Aa, J(c) ? c : "0"), d.on(Fa + f._eventNS, W(f._keydown, f)), f.dataSource.on(Oa + f._eventNS, W(f._dsChange, f)), J(k) ? f._initValues = k : J(j) && (f._initSelected = j), d.attr(Z, aa), g.multiple && d.attr("aria-multiselectable", $), g.readDataSource && f.dataSource.read(), f.enabled(g.enabled)
		},
		refresh: function (a) {
			this.refreshWithElement(this._original, a)
		},
		_focus: function (a) {
			var b = this;
			b._oldSelection = b.selected(), b.trigger(Pa)
		},
		_blur: function (b) {
			var c = this,
				d = c._oldSelection,
				e = c.selected();
			0 === a(d).not(e).length && 0 === a(e).not(d).length || c.trigger(Oa), c._oldSelection = e, c.trigger(Qa)
		},
		_dsChange: function (a) {
			var b = this;
			b._render(), b._dsLoadedOnce || (b._dsLoadedOnce = !0, J(b._initValues) ? b.values(b._initValues) : J(b._initSelected) && b.selected(b._initSelected))
		},
		_render: function () {
			var b = this,
				c = b.options,
				e = b.dataSource.view,
				f = a(b.element),
				g = b._utype,
				h = b._original,
				i = f.attr(Y) + "_opt";
			g == eb ? b._original.val() : d;
			f.empty(), g == db ? h.empty() : g == eb && h.removeAttr(Ua), e && V(e, function (d, e) {
				var j = O.call(b, c.valueTemplate, e),
					k = O.call(b, c.textTemplate, e),
					l = a('<li id="' + i + d + '" role="option">' + k + "</li>").addClass("sui-listbox-item sui-unselectable").click(function (c) {
						b._enabled && (b._setActive(a(this)), b._toggleActive(c)), b.trigger(za, {
							index: d,
							item: e
						})
					}).on(Wa, function () {
						return !1
					}).data(_a, e).data(ab, d).data(bb, j).data(cb, k);
				c.multiple && l.attr(fa, _), f.append(l), g == db && h.append(a("<option/>").attr(Ua, j).text(k))
			})
		},
		_keydown: function (a) {
			var b = this,
				c = !0;
			switch (a.keyCode) {
				case F.UP:
					b._move("up", a);
					break;
				case F.DOWN:
					b._move("down", a);
					break;
				case F.HOME:
					b._move("first", a), c = !1;
					break;
				case F.END:
					b._move("last", a), c = !1;
					break;
				case F.SPACE:
				case F.ENTER:
					b._toggleActive(a);
					break;
				default:
					c = !1
			}
			c && a.preventDefault()
		},
		_move: function (b, c) {
			var d = this,
				e = a(d.element),
				f = e.find(".sui-listbox-item-active").first(),
				g = e.find(":first");
			d._enabled && ("up" == b ? f.prev().length > 0 ? g = f.prev() : f.length > 0 && (g = f) : "down" == b ? f.next().length > 0 ? g = f.next() : f.length > 0 && (g = f) : "first" == b ? g = e.find(".sui-listbox-item").first() : "last" == b && (g = e.find(".sui-listbox-item").last()), g.length <= 0 || (d.options.multiple ? (d._setActive(g), d._ensureInScrollableArea(g)) : d._select(g)))
		},
		_ensureInScrollableArea: function (b) {
			var c = this,
				d = a(c.element),
				e = d.height(),
				f = d.scrollTop(),
				g = b.outerHeight(),
				h = b.position().top,
				i = h + g;
			h < 0 ? d.scrollTop(f + h) : i > e && d.scrollTop(f + (i - e))
		},
		ensureActiveViewableINTERNAL: function () {
			var a = this,
				b = a._getActive();
			b.length > 0 && a._ensureInScrollableArea(b)
		},
		_getActive: function () {
			return a(this.element).find(".sui-listbox-item-active").first()
		},
		_setActive: function (b) {
			b.addClass("sui-listbox-item-active").siblings().removeClass("sui-listbox-item-active"), a(this.element).attr(ha, b.attr(Y))
		},
		_setSelected: function (a) {
			a.addClass("sui-listbox-item-selected").attr(fa, $)
		},
		_unsetSelected: function (a) {
			a.removeClass("sui-listbox-item-selected"), this.options.multiple ? a.attr(fa, _) : a.removeAttr(fa)
		},
		_toggleActive: function (a) {
			this._toggle(a, this._getActive())
		},
		_toggle: function (a, b) {
			var c = this;
			c._enabled && (!b || b.length <= 0 || (c.options.multiple && b.hasClass("sui-listbox-item-selected") ? c._deselect(b) : c._select(b)))
		},
		_select: function (a, b) {
			var c = this,
				d = c._original,
				e = c._utype,
				f = c.options.multiple;
			f || c.clearSelection(), c._setActive(a), c._ensureInScrollableArea(a), c._setSelected(a), e == db ? d.find("option:eq(" + a.data(ab) + ")").attr(ya, ya) : e == eb && d.attr(Ua, a.data(bb)), b || c.trigger(Sa, {
				index: a.data(ab),
				item: a.data(_a),
				value: a.data(bb),
				text: a.data(cb),
				selected: !0
			})
		},
		_deselect: function (a, b) {
			var c = this,
				d = c._original,
				e = c._utype;
			c._setActive(a), c._unsetSelected(a), e == db ? d.find("option:eq(" + a.data(ab) + ")").removeAttr(ya) : e == eb && d.removeAttr(Ua), b || c.trigger(Sa, {
				index: a.data(ab),
				item: a.data(_a),
				value: a.data(bb),
				text: a.data(cb),
				selected: !1
			})
		},
		enabled: function () {
			var b, c = this,
				d = a(c.element),
				e = c._original,
				f = [].slice.call(arguments);
			return f.length > 0 ? (b = !!f[0], b ? (d.removeAttr(wa).removeClass("sui-listbox-disabled"), e.removeAttr(wa)) : (d.attr(wa, wa).addClass("sui-listbox-disabled"), e.attr(wa, wa)), c._enabled = b, void 0) : c._enabled
		},
		selected: function () {
			var b, c, d = this,
				e = a(d.element),
				f = [].slice.call(arguments);
			if (!(f.length > 0)) {
				var g = [];
				return e.find(".sui-listbox-item-selected").each(function () {
					g.push(a(this).data(ab))
				}), g
			}
			b = K(f[0]), c = !J(f[1]) || !!f[1], e.find(".sui-listbox-item").each(function (e) {
				X(e, b) > -1 && (c ? d._select(a(this), !0) : d._deselect(a(this), !0))
			})
		},
		selectedItems: function () {
			var b = [];
			return a(this.element).find(".sui-listbox-item-selected").each(function () {
				b.push(a(this).data(_a))
			}), b
		},
		values: function () {
			var b, c = this,
				d = a(c.element),
				e = [].slice.call(arguments);
			if (!(e.length > 0)) {
				var f = [];
				return d.find(".sui-listbox-item-selected").each(function () {
					f.push(a(this).data(bb))
				}), f
			}
			b = K(e[0]), d.find(".sui-listbox-item").each(function () {
				if (X(a(this).data(bb), b) > -1) return c._select(a(this), !0), !!c.options.multiple
			})
		},
		texts: function () {
			var b = [];
			return a(this.element).find(".sui-listbox-item-selected").each(function () {
				b.push(a(this).data(cb))
			}), b
		},
		clearSelection: function () {
			var b = this,
				c = b._original,
				d = b.options.multiple,
				e = b._utype;
			e == db ? c.find("option").removeAttr(ya) : e == eb && c.removeAttr(Ua), a(b.element).find(".sui-listbox-item-selected").each(function () {
				a(this).removeClass("sui-listbox-item-selected sui-listbox-item-active"), d ? a(this).attr(fa, _) : a(this).removeAttr(fa)
			})
		},
		destroy: function () {
			var b = this,
				c = b._eventNS;
			b._dsLoadedOnce = !1, a(b.element).off(c).remove(), b.dataSource && b.dataSource.off(Oa + c), b._isWrapped && b._original.unwrap(), b._original.show(), C.fn.destroy.call(b)
		}
	}), f.defaults = e, b.ui.plugin("ListBox", f), i = {
		enabled: !0,
		cls: d,
		autoComplete: d,
		value: d,
		events: {}
	}, j = C.extend({
		init: function () {
			C.fn.init.apply(this, arguments);
			var b = this,
				c = b.options,
				d = c.autoComplete,
				e = c.cls,
				f = c.value,
				g = a(b.element);
			b._eventNS = ".shieldTextBox" + b.getInstanceId(), g.addClass("sui-input"), d && (b.autoComplete = new h(g, d)), e && g.addClass(e), g.on(Pa + b._eventNS, W(b._focus, b)).on(Qa + b._eventNS, W(b._blur, b)), g.attr(Z, ba), hb(g) == fb && g.attr(ia, $), b.enabled(c.enabled), J(f) && b.value(f)
		},
		focus: function () {
			a(this.element).focus(), jb(a(this.element))
		},
		_focus: function (a) {
			var b = this;
			b.oldValue = b._value(), b.interval = setInterval(W(b._detectChanges, b), 1), b.trigger(Pa)
		},
		_blur: function (a) {
			clearInterval(this.interval), this.trigger(Qa)
		},
		_detectChanges: function () {
			var a, b = this;
			b._enabled && b.oldValue !== b._value() && (a = b.trigger(Oa, {
				value: b._value(),
				old: b.oldValue
			}), a.isDefaultPrevented() ? b._value(b.oldValue) : b.oldValue = b._value())
		},
		_value: function () {
			return this.element.val.apply(this.element, arguments)
		},
		value: function () {
			return this._value.apply(this, arguments)
		},
		enabled: function () {
			var b, c = this,
				d = a(c.element),
				e = [].slice.call(arguments);
			return e.length > 0 ? (b = !!e[0], b ? d.removeAttr(wa).removeClass("sui-input-disabled") : d.attr(wa, wa).addClass("sui-input-disabled"), c._enabled = b, void 0) : c._enabled
		},
		destroy: function () {
			var a = this,
				b = a.autoComplete,
				c = a.options.cls;
			clearInterval(a.interval), a.element.off(a._eventNS).removeClass("sui-input" + (c ? " " + c : "")), b && b.destroy(), C.fn.destroy.call(a)
		}
	}), j.defaults = i, b.ui.plugin("TextBox", j), g = {
		dataSource: d,
		valueTemplate: "{0}",
		textTemplate: "{0}",
		open: !1,
		delay: 200,
		minLength: 2,
		dropDownWidth: d,
		appendListBoxTo: "body",
		animation: {
			enabled: !0,
			openDelay: 200,
			closeDelay: 100
		},
		events: {}
	}, h = C.extend({
		init: function () {
			C.fn.init.apply(this, arguments);
			var b = this,
				d = a(b.element),
				e = b.options,
				g = e.dataSource,
				h = e.dieOnError,
				i = e.appendListBoxTo;
			return b.pending = 0, b.oldValue = d.val(), g ? (g.filter || (g.filter = {
				and: [{
					path: "",
					filter: "contains",
					value: ""
				}]
			}), b._eventNS = ".shieldAutoComplete" + b.getInstanceId(), d.addClass("sui-input"), b.listElement = a("<span/>").appendTo(a(i)), b.listBox = new f(b.listElement, {
				cls: "sui-autocomplete",
				dataSource: g,
				readDataSource: !1,
				textTemplate: e.textTemplate,
				multiple: !1,
				width: e.dropDownWidth || d.innerWidth(),
				events: {
					select: function (a) {
						b._value(O.call(b, e.valueTemplate, a.item)), b.trigger(Sa, {
							item: a.item
						})
					},
					itemclick: function (a) {
						d.focus(), b._inputBlur(a, 0)
					},
					blur: function (a) {
						b._inputBlur(a, 0)
					}
				}
			}), b.listBox.element.hide(), b.dataSource = b.listBox.dataSource, d.on(Fa + b._eventNS, W(b._inputKeydown, b)).on(Qa + b._eventNS, W(b._inputBlur, b, 100)), d.attr(ga, "list").attr(sa, b.listBox.element.attr(Y)).attr(oa, b.listBox.element.attr(Z)), d.attr(Z, ba), hb(d) == fb && d.attr(ia, $), b.listBox.dataSource.on(Oa + b._eventNS, W(b._dsChange, b)), a(c).on(Ra + b._eventNS, W(b._position, b)), b._open = !1, void(e.open && b._searchTimeout())) : (b.destroy(), void G("shieldAutoComplete: No dataSource set", h))
		},
		_checkValueUpdated: function () {
			var a = this,
				b = a.element,
				c = b.val();
			a.oldValue !== c && (a.trigger(Oa, {
				value: a._value()
			}), a.oldValue = c)
		},
		_restoreOldValue: function () {
			this._value(this.oldValue)
		},
		_inputKeydown: function (a) {
			var b = this;
			switch (a.keyCode) {
				case F.TAB:
					break;
				case F.UP:
				case F.DOWN:
					b._inputUpDown(a);
					break;
				case F.ENTER:
					a.preventDefault(), b.cancelSearch = !0, b._hideItemList(), b._checkValueUpdated();
					break;
				case F.ESC:
					a.preventDefault(), b.cancelSearch = !0, b._hideItemList(), b._restoreOldValue();
					break;
				default:
					b._searchTimeout(a)
			}
		},
		_inputUpDown: function (b) {
			var c = this;
			c._open ? c._hasData() && a(c.listBox.element).trigger(b) : c._hasData() && c._showItemList()
		},
		_inputBlur: function (b, c) {
			var d = this;
			setTimeout(function () {
				a(d.listBox.element).is(":focus") || (d._hideItemList(), d._checkValueUpdated())
			}, c)
		},
		_searchTimeout: function (a) {
			var b = this;
			clearTimeout(b.searchTimeout), b.searchTimeout = setTimeout(function () {
				b.term !== b._value() && (b.trigger("search", {
					value: b._value()
				}), b._search())
			}, b.options.delay)
		},
		_search: function () {
			var b = this;
			return b.term = b._value(), b.term.length < b.options.minLength ? void b._hideItemList() : (b.cancelSearch = !1, b.pending++, a(b.element).addClass("sui-autocomplete-loading"), lb(b.listBox.dataSource.filter, b.term), void b.listBox.dataSource.read())
		},
		_dsChange: function () {
			var b = this;
			b.pending--, b.pending || a(b.element).removeClass("sui-autocomplete-loading"), !b.cancelSearch && b._hasData() ? b._showItemList() : b._hideItemList()
		},
		_hasData: function () {
			var a = this.listBox.dataSource.view;
			return a && a.length > 0
		},
		_position: function () {
			var b = this,
				c = a(b.element),
				d = a(b.listBox.element);
			d.width(b.options.dropDownWidth || c.innerWidth()), E.Set(d, c, {
				source: "left top",
				target: "left bottom",
				overflow: "none"
			})
		},
		_showItemList: function () {
			var b = this,
				c = b.listBox,
				d = a(c.element),
				e = b.options.animation;
			d.css({
				top: 0,
				left: 0
			}), d.show(), b._position(), !b._open && e && e.enabled ? d.hide().slideDown(e.openDelay, W(c.ensureActiveViewableINTERNAL, c)) : c.ensureActiveViewableINTERNAL(), b._open = !0
		},
		_hideItemList: function () {
			var b = this,
				c = a(b.listBox.element),
				d = b.options.animation;
			d && d.enabled ? c.slideUp(d.closeDelay) : c.hide(), b._open = !1
		},
		_value: function () {
			return this.element.val.apply(this.element, arguments)
		},
		hide: function () {
			a(this.listBox.element).hide()
		},
		show: function () {
			a(this.listBox.element).show()
		},
		isVisible: function () {
			return a(this.listBox.element).is(":visible")
		},
		destroy: function () {
			var b = this;
			b.dataSource = null, b.listBox && (b.listBox.dataSource.off(Oa + b._eventNS), b.listBox.destroy(), b.listBox = null), b.element.off(b._eventNS).removeClass("sui-input"), a(c).off(Ra + b._eventNS), b.listElement && b.listElement.remove(), C.fn.destroy.call(b)
		}
	}), h.defaults = g, b.ui.plugin("AutoComplete", h), k = {
		enabled: !0,
		cls: "",
		min: 0,
		max: 100,
		value: d,
		step: d,
		editable: !0,
		spinners: !0,
		valueTemplate: d,
		textTemplate: d,
		labels: {
			increase: "Increase value",
			decrease: "Decrease value"
		},
		events: {}
	}, l = C.extend({
		init: function () {
			C.fn.init.apply(this, arguments);
			var b, c, d, e, f, g, h, i, j = this,
				k = j.options,
				l = k.cls,
				m = k.value,
				n = k.step,
				o = k.editable,
				p = k.spinners,
				q = k.labels,
				r = q.increase,
				s = q.decrease,
				t = k.dieOnError;
			return j._original = b = a(j.element), hb(b) != eb ? void G("shieldNumericTextBox: Underlying element is not INPUT", t) : (J(n) ? k.step = n = M(n) : (h = kb(J(m) ? m : j._value()), h > 0 ? k.step = n = 1 / T(10, h) : k.step = n = 1), n ? (j._eventNS = ".shieldNumericTextBox" + j.getInstanceId(), j.element = d = b.wrap("<span/>").parent(), b.hide(), J(m) || (m = j._value()), o ? (e = a('<input type="text" class="sui-input" />'), c = b.attr(Va), J(c) && e.attr(Va, c)) : e = a('<span class="sui-input">&nbsp;</span>').attr(Aa, "0"), j.textElement = e, e.appendTo(d), e.on(Pa + j._eventNS, W(j._focus, j)).on(Qa + j._eventNS, W(j._blur, j)), p && (j._onSpinUpMDProxy = W(j._spinUpMD, j), j._onSpinDownMDProxy = W(j._spinDownMD, j), j._onSpinnerMUProxy = W(j._spinnerMU, j), j.spinUp = f = a('<span class="sui-spinner sui-spinner-up sui-unselectable"/>').html('<span class="sui-caret-up sui-unselectable" unselectable="on"/>').attr(Xa, Ya).attr(ua, r).attr(va, r).on(Ba + j._eventNS, j._onSpinUpMDProxy).on(Ca + j._eventNS, j._onSpinnerMUProxy).on(Da + j._eventNS, j._onSpinnerMUProxy).on(Wa + j._eventNS, function () {
				return !1
			}), j.spinDown = g = a('<span class="sui-spinner sui-spinner-down sui-unselectable"/>').html('<span class="sui-caret-down sui-unselectable" unselectable="on"/>').attr(Xa, Ya).attr(ua, s).attr(va, s).on(Ba + j._eventNS, j._onSpinDownMDProxy).on(Ca + j._eventNS, j._onSpinnerMUProxy).on(Da + j._eventNS, j._onSpinnerMUProxy).on(Wa + j._eventNS, function () {
				return !1
			}), d.append(a('<span class="sui-spinners"/>').append(f, g))), e.on(Fa + j._eventNS, W(j._keydown, j)), d.addClass("sui-numeric-textbox" + (p ? "" : " sui-numeric-textbox-nosp") + (l ? " " + l : "")), i = kb(n), J(k.textTemplate) || (k.textTemplate = "{0:n" + i + "}"), J(k.valueTemplate) || (k.valueTemplate = "{0:n" + i + "}"), d.attr(Z, "spinbutton").attr(ka, k.min).attr(la, k.max), j.enabled(k.enabled), J(m) && j.value(m), void(j._destroyed = !1)) : void G("shieldNumericTextBox: Invalid step", t))
		},
		refresh: function (a) {
			this.refreshWithElement(this._original, a)
		},
		_focus: function (b) {
			var c = this;
			c._hasFocus || (c._hasFocus = !0, a(c.element).addClass("sui-numeric-textbox-focus"), c.value(c.value()), c.trigger(Pa))
		},
		_blur: function (b) {
			var c = this,
				d = a(c.element),
				e = a(c.textElement);
			if (c.options.editable) {
				var f, g = c.value();
				c._updateIfDirty(), f = c.value(), f !== g && c.trigger(Oa, {
					value: f
				})
			}
			setTimeout(function () {
				if (!(d.is(":focus") || e.is(":focus") || c._destroyed)) {
					if (c._hasFocus = !1, d.removeClass("sui-numeric-textbox-focus"), c.options.editable) {
						var a, b = c.value();
						c.value(e.val()), a = c.value(), a !== b && c.trigger(Oa, {
							value: a
						})
					} else c.value(c.value());
					c.trigger(Qa)
				}
			}, 100)
		},
		_keydown: function (a) {
			var b = this,
				c = a.keyCode,
				d = b._enabled;
			switch (c) {
				case F.TAB:
				case F.LEFT:
				case F.RIGHT:
					break;
				case F.END:
					b._updateValue("max", !1), a.preventDefault();
					break;
				case F.HOME:
					b._updateValue("min", !1), a.preventDefault();
					break;
				case F.ESC:
					d && b.value(b.value()), a.preventDefault();
					break;
				case F.UP:
					b._updateValue("inc", !1), a.preventDefault();
					break;
				case F.DOWN:
					b._updateValue("dec", !1), a.preventDefault();
					break;
				default:
					b.options.editable && d && (c >= 48 && c <= 57 || c >= 96 && c <= 105 || 190 == c || 110 == c || 173 == c || 109 == c || 189 == c || c == F.DEL || c == F.BACK || c == F.ENTER || a.ctrlKey && (118 == c || 86 == c)) ? b._dirty = !0 : a.preventDefault()
			}
		},
		_spinUpMD: function (a) {
			var b = this;
			a.preventDefault(), b._updateValue("inc", !1), b._spinUpCancel = !1, setTimeout(function () {
				b._spinUpInt || b._spinUpCancel || (b._spinUpInt = setInterval(W(b._updateValue, b, "inc", !1), 20))
			}, 100)
		},
		_spinDownMD: function (a) {
			var b = this;
			a.preventDefault(), b._updateValue("dec", !1), b._spinDownCancel = !1, setTimeout(function () {
				b._spinDownInt || b._spinDownCancel || (b._spinDownInt = setInterval(W(b._updateValue, b, "dec", !1), 20))
			}, 100)
		},
		_spinnerMU: function (a) {
			var b = this;
			b._spinUpCancel = b._spinDownCancel = !0, clearInterval(b._spinUpInt), clearInterval(b._spinDownInt), b._spinUpInt = b._spinDownInt = null
		},
		_updateIfDirty: function () {
			var b = this,
				c = a(b.textElement);
			b._dirty && (b.value(c.val()), b._dirty = !1)
		},
		_updateValue: function (b, c, d) {
			var e, f = this,
				g = f.options,
				h = g.min,
				i = g.max,
				j = g.step,
				k = a(f.textElement),
				l = !1;
			f._enabled && (f._updateIfDirty(), e = f.value(), J(e) || (e = 0), c = !J(c) || !!c, d = !J(d) || !!d, "inc" == b ? e < i && (f.value(e + j), l = !0) : "dec" == b ? e > h && (f.value(e - j), l = !0) : "min" == b ? (f.value(h), l = !0) : "max" == b && (f.value(i), l = !0), d && (k.focus(), g.editable && jb(k)), l && !c && f.trigger(Oa, {
				value: f.value()
			}))
		},
		increment: function () {
			this._updateValue("inc", !0, !1)
		},
		decrement: function () {
			this._updateValue("dec", !0, !1)
		},
		value: function () {
			var b, c, d = this,
				e = d.options,
				f = [].slice.call(arguments),
				g = d.element,
				h = a(d.textElement);
			return f.length > 0 ? (J(f[0]) && null !== f[0] && "" !== f[0] ? (b = S(R(f[0], e.max), e.min), b = O.call(d, e.valueTemplate, b), b = M(b), c = O.call(d, e.textTemplate, b) + "") : (b = null, c = ""), e.editable ? d._hasFocus && d._enabled ? h.val(b) : h.val(c) : h.html(c), d._value(b), null !== b ? g.attr(ja, b) : g.removeAttr(ja), g.attr(ma, ib(c)), void 0) : M(d._value())
		},
		_value: function () {
			return this._original.attr.apply(this._original, [Ua].concat([].slice.call(arguments)))
		},
		enabled: function () {
			var b, c = this,
				d = a(c.element),
				e = [].slice.call(arguments);
			return e.length > 0 ? (b = !!e[0], b ? d.removeAttr(wa).removeClass("sui-numeric-textbox-disabled") : d.attr(wa, wa).addClass("sui-numeric-textbox-disabled"), c._enabled = b, void 0) : c._enabled
		},
		focus: function () {
			a(this.textElement).focus(), jb(a(this.textElement))
		},
		destroy: function () {
			var b = this;
			b._destroyed = !0, b.options.spinners && (a(b.spinUp).off(b._eventNS).remove(), a(b.spinDown).off(b._eventNS).remove(), b.spinUp = b.spinDown = null), a(b.textElement).off(b._eventNS).remove(), b.textElement = null, b._original.unwrap().show(), b._original = null, C.fn.destroy.call(b)
		}
	}), l.defaults = k, b.ui.plugin("NumericTextBox", l), m = {
		enabled: !0,
		mask: "00-00-0000",
		promptChar: "_",
		value: "",
		rules: {
			0: function (a) {
				return /^[0-9]$/.test(a)
			},
			9: function (a) {
				return /^[0-9 ]$/.test(a)
			},
			"#": function (a) {
				return /^[0-9 \+\-]$/.test(a)
			},
			L: function (a) {
				return /^[a-zA-Z]$/.test(a)
			},
			"?": function (a) {
				return /^[a-zA-Z ]$/.test(a)
			},
			"&": function (a) {
				return /^[\S]$/.test(a)
			},
			C: function (a) {
				return /^[.]$/.test(a)
			},
			A: function (a) {
				return /^[0-9a-zA-Z]$/.test(a)
			},
			a: function (a) {
				return /^[0-9a-zA-Z ]$/.test(a)
			}
		},
		cultureSpecific: [".", ",", "$"],
		separators: ["/", "-", " ", "(", ")"],
		cls: d,
		events: {}
	}, n = C.extend({
		init: function () {
			C.fn.init.apply(this, arguments);
			var b = this,
				c = b.options,
				d = c.dieOnError,
				e = c.value,
				f = a(b.element);
			return hb(f) != eb ? void G("shieldMaskedTextBox: Underlying element is not INPUT", d) : b._verifyMask() ? (b._eventNS = ".shieldMaskedTextBox" + b.getInstanceId(), f.addClass("sui-input"), c.cls && f.addClass(c.cls), J(e) && b.value(e), f.on(Pa + b._eventNS, W(b._focus, b)).on(Qa + b._eventNS, W(b._blur, b)).on(Fa + b._eventNS, W(b._keydown, b)).on(Ga + b._eventNS, W(b._keypress, b)).on(Ia + b._eventNS, W(b._cut, b)).on(Ja + b._eventNS, W(b._paste, b)).on(Ka + b._eventNS, W(b._dragstart, b)).on(La + b._eventNS, W(b._dragenter, b)).on(Ma + b._eventNS, W(b._dragover, b)).on(Na + b._eventNS, W(b._drop, b)), f.attr(Z, ba), void b.enabled(c.enabled)) : void G("shieldMaskedTextBox: Invalid mask", d)
		},
		_getMask: function () {
			var a, b, c = this,
				d = c.options.mask,
				e = "";
			for (b = 0; b < d.length; b++) a = d.charAt(b), e += c._isCultureSpecific(a) ? c._getCultureSpecific(a) : a;
			return e
		},
		_isCultureSpecific: function (a) {
			return X(a, this.options.cultureSpecific) !== -1
		},
		_getCultureSpecific: function (a) {
			var c = b.getCurrencyInfo();
			return "$" == a ? c.symbol : c[a]
		},
		_skipSymbol: function (a) {
			var b = this,
				c = b.options.separators;
			return X(a, c) !== -1 || b._isCultureSpecific(a)
		},
		_insertAt: function (a, b, c) {
			return a.substr(0, c) + b + a.substr(c)
		},
		_removeAt: function (a, b) {
			return a.substr(0, b) + a.substr(b + 1)
		},
		_caret: function (b, c) {
			var d, e = this,
				f = a(e.element);
			if (0 !== f.length && !f.is(":hidden")) return "number" == typeof b ? (c = "number" == typeof c ? c : b, f.each(function () {
				f.setSelectionRange ? f.setSelectionRange(b, c) : f.createTextRange && (d = f.createTextRange(), d.collapse(!0), d.moveEnd("character", c), d.moveStart("character", b), d.select())
			})) : (f[0].setSelectionRange ? (b = f[0].selectionStart, c = f[0].selectionEnd) : Q.selection && Q.selection.createRange && (d = Q.selection.createRange(), b = 0 - d.duplicate().moveStart("character", -1e5), c = b + d.text.length), {
				begin: b,
				end: c
			})
		},
		_caretTo: function (b) {
			var c = this,
				e = a(c.element);
			if (e.prop("selectionStart") !== d) e.prop("selectionStart", b), e.prop("selectionEnd", b);
			else if (Q.selection) {
				e.focus();
				var f = Q.selection.createRange();
				f.moveStart("character", -c.value().length), f.moveEnd("character", -c.value().length), f.moveStart("character", b), f.select()
			}
		},
		_isValid: function (a, b) {
			var c, d = this,
				e = d._getMask(),
				f = d.options.rules;
			return !(b >= e.length) && (c = e.charAt(b), H(f[c]) && f[c].call(d, a))
		},
		_removeRegion: function (a) {
			var b, c, d = this,
				e = d.options,
				f = d._getMask(),
				g = d._value(),
				h = d._caret(),
				i = e.promptChar,
				j = h.begin;
			if (j == h.end) a ? (b = f.charAt(--j), d._skipSymbol(b) || (j >= 0 ? (g = d._removeAt(g, j), g = d._insertAt(g, i, j), d._value(g)) : j = 0)) : j < g.length && (b = f.charAt(j), d._skipSymbol(b) ? j++ : (g = d._shiftLeft(g, j), d._value(g)));
			else {
				for (c = j; c < h.end; c++) d._skipSymbol(f.charAt(c)) || (g = d._removeAt(g, c), g = d._insertAt(g, i, c));
				for (; d._skipSymbol(f.charAt(j));) ++j;
				for (c = j; c < h.end; c++) d._skipSymbol(f.charAt(c)) || (g = d._shiftLeft(g, j));
				d._value(g)
			}
			d._caretTo(j)
		},
		_shiftLeft: function (a, b) {
			for (var c, d, e, f = this, g = f.options, h = f._getMask(), i = g.promptChar, j = b; j < a.length - 1;) {
				for (e = j + 1; f._skipSymbol(h.charAt(e));) e++;
				if (e > a.length - 1) break;
				c = a.charAt(e), a = f._removeAt(a, j), d = f._isValid(c, j), a = f._insertAt(a, d ? c : i, j), j = e
			}
			return a = f._removeAt(a, j), a = f._insertAt(a, i, j)
		},
		_shiftRightKey: function (a, b) {
			var c, d, e, f = this,
				g = f.options,
				h = f._getMask(),
				i = a.charAt(b),
				j = g.promptChar;
			if (i != j && b < a.length - 1) {
				for (var k = b + 1, l = a.charAt(k); l != j && k <= a.length;) l = a.charAt(++k);
				if (l == j)
					for (var m = k; m > b;) {
						if (!f._skipSymbol(h.charAt(m))) {
							for (d = m - 1, c = a.charAt(d); f._skipSymbol(h.charAt(d));) c = a.charAt(--d);
							a = f._removeAt(a, m), e = f._isValid(c, m), a = f._insertAt(a, e ? c : j, m)
						}
						m--
					}
			}
			return a
		},
		_shiftRightPaste: function (a, b) {
			var c, d, e, f, g = this,
				h = g.options,
				i = g._getMask(),
				j = h.promptChar,
				k = b;
			for (d = a.charAt(k); k < a.length - 1;) {
				for (e = k + 1; g._skipSymbol(i.charAt(e));) e++;
				if (e > a.length - 1) break;
				c = a.charAt(e), a = g._removeAt(a, e), f = g._isValid(d, e), a = g._insertAt(a, f ? d : j, e), d = c, k = e
			}
			return a
		},
		_commit: function (a) {
			for (var b, c = this, d = c._getMask(), e = c._caret(), f = e.begin; c._skipSymbol(d.charAt(f));) ++f;
			if (c._isValid(a, f)) {
				for (e.end > e.begin && c._removeRegion(!1), b = c._value(), b = c._shiftRightKey(b, f), b = c._removeAt(b, f), b = c._insertAt(b, a, f), c._value(b), f++; c._skipSymbol(d.charAt(f));) f++;
				c._caretTo(f)
			}
		},
		_verifyValue: function (a) {
			var b = this,
				c = b._getMask();
			if (a.length != c.length) return !1;
			for (var d = 0; d < c.length; d++)
				if (b._skipSymbol(c.charAt(d))) {
					if (c.charAt(d) !== a.charAt(d)) return !1
				} else if (!b._isValid(a.charAt(d), d)) return !1;
			return !0
		},
		_verifyMask: function () {
			for (var a, b = this, c = b._getMask(), d = b.options.rules, e = 0; e < c.length; e++)
				if (!b._skipSymbol(c.charAt(e)) && (a = c.charAt(e), !H(d[a]))) return !1;
			return !0
		},
		_applyMask: function () {
			for (var a = this, b = a.options, c = a._getMask(), d = b.promptChar, e = "", f = 0; f < c.length; f++) e += a._skipSymbol(c.charAt(f)) ? c.charAt(f) : d;
			a._value(e)
		},
		_isEmptyMask: function () {
			for (var a = this, b = a._value(), c = a.options, d = a._getMask(), e = c.promptChar, f = 0; f < d.length; f++)
				if (!a._skipSymbol(d.charAt(f)) && b.charAt(f) !== e) return !1;
			return !0
		},
		_clearMaskOnBlur: function () {
			this._isEmptyMask() && this._value("")
		},
		_focus: function (b) {
			var c, d = this;
			a(d.element).addClass("sui-input-focus"), c = d._value(), c && "" !== c || d._applyMask(), d.trigger(Pa)
		},
		_blur: function (a) {
			this._clearMaskOnBlur(), this.trigger(Qa)
		},
		_preventDrag: function (a) {
			if (a.type == Ka || a.type == La || a.type == Ma || a.type == Na) {
				var b = a.originalEvent.dataTransfer;
				return a.type == Ka ? b.effectAllowed = "none" : b.dropEffect = "none", a.stopPropagation && (a.preventDefault(), a.stopPropagation()), !1
			}
		},
		_triggerChange: function (a) {
			var b, c = this;
			a !== c._value() && (b = c.trigger(Oa, {
				value: c._value(),
				old: a
			}), b.isDefaultPrevented() && c._value(c.oldValue)), clearInterval(c.changeInterval), c.changeInterval = d
		},
		_dragstart: function (a) {
			return this._preventDrag(a)
		},
		_dragenter: function (a) {
			return this._preventDrag(a)
		},
		_dragover: function (a) {
			return this._preventDrag(a)
		},
		_drop: function (a) {
			return this._preventDrag(a)
		},
		_keydown: function (a) {
			var b = this,
				c = a.keyCode,
				e = b._enabled,
				f = b._value();
			switch (e || a.preventDefault(), c) {
				case F.BACK:
				case F.DEL:
					b._removeRegion(c == F.BACK), b.changeInterval === d && (b.changeInterval = setInterval(W(b._triggerChange, b, f), 20)), a.preventDefault();
					break;
				default:
					if (a.ctrlKey) switch (c) {
						case 118:
						case 86:
						case 122:
						case 90:
						case 121:
						case 89:
							118 == c || 86 == c ? b._paste(a) : 122 != c && 90 != c || (b._undo(), b.changeInterval === d && (b.changeInterval = setInterval(W(b._triggerChange, b, f), 20))), a.preventDefault()
					}
			}
		},
		_keypress: function (a) {
			var b, c = this,
				e = a.keyCode,
				f = a.which,
				g = (c._enabled, c._value());
			if (!a.ctrlKey) {
				switch (e) {
					case F.HOME:
					case F.END:
					case F.LEFT:
					case F.RIGHT:
					case F.TAB:
						if (!N.ie) return;
						break;
					default:
						b = String.fromCharCode(f), c._commit(b)
				}
				a.preventDefault(), c.changeInterval === d && g != c._value() && (c.changeInterval = setInterval(W(c._triggerChange, c, g), 20))
			}
		},
		_cut: function (a) {
			var b = this,
				c = b._caret();
			b.cutInterval === d && (b.cutInterval = setInterval(W(b._aftercut, b, c), 20))
		},
		_aftercut: function (a) {
			var b, c = this,
				e = c._getMask(),
				f = c.value(),
				g = f,
				h = c.options.promptChar,
				i = a.begin;
			for (b = i; b < a.end; b++) f = c._insertAt(f, c._skipSymbol(e.charAt(b)) ? e.charAt(b) : h, b);
			for (c._value(f), c._caretTo(i); c._skipSymbol(e.charAt(i));) ++i;
			for (var j = i; j < a.end; j++) c._skipSymbol(e.charAt(j)) || (f = c._shiftLeft(f, i));
			c._value(f), c._caretTo(i), clearInterval(c.cutInterval), c.cutInterval = d, c._triggerChange(g)
		},
		_paste: function (a) {
			var b, e, f, g, h = this,
				i = h._getMask(),
				j = h._value(),
				k = j,
				l = h._caret(),
				m = l.begin,
				n = h.options.promptChar,
				o = a.originalEvent || a;
			if (m == j.length) return void a.preventDefault();
			if (o.clipboardData ? b = o.clipboardData.getData("text/plain") : c.clipboardData && (b = c.clipboardData.getData("Text")), null == b) return void a.preventDefault();
			if (m == l.end) {
				for (; h._skipSymbol(i.charAt(m));) m++;
				for (g = b.length - 1; g >= 0; g--) j = h._shiftRightPaste(j, m), j = h._removeAt(j, m), e = h._isValid(b.charAt(g), m), j = h._insertAt(j, e ? b.charAt(g) : n, m);
				m += b.length
			} else {
				for (f = m; f < l.end; f++) h._skipSymbol(i.charAt(f)) || (j = h._removeAt(j, f), j = h._insertAt(j, n, f));
				for (g = 0; g < b.length; g++) {
					for (; h._skipSymbol(i.charAt(m));) m++;
					j = h._removeAt(j, m), e = h._isValid(b.charAt(g), m), j = h._insertAt(j, e ? b.charAt(g) : n, m), m++
				}
			}
			h._value(j), h._caretTo(m), a.preventDefault(), h.changeInterval === d && (h.changeInterval = setInterval(W(h._triggerChange, h, k), 20))
		},
		_undo: function () {
			var a = this;
			a._applyMask()
		},
		_value: function () {
			return this.element.val.apply(this.element, arguments)
		},
		value: function () {
			if (arguments.length > 0) {
				var a = [].slice.call(arguments);
				if (!this._verifyValue(a[0])) return !1
			}
			return this._value.apply(this, arguments)
		},
		enabled: function () {
			var b, c = this,
				d = a(c.element),
				e = [].slice.call(arguments);
			return e.length > 0 ? (b = !!e[0], b ? d.removeAttr(wa).removeClass("sui-input-disabled") : d.attr(wa, wa).addClass("sui-input-disabled"), c._enabled = b, void 0) : c._enabled
		},
		destroy: function () {
			var a = this,
				b = a.options.cls;
			a.element.off(a._eventNS).removeClass("sui-input" + (b ? " " + b : "")), C.fn.destroy.call(a)
		}
	}), n.defaults = m, b.ui.plugin("MaskedTextBox", n), o = {
		editable: !0,
		enabled: !0,
		open: !1,
		cls: d,
		dataSource: d,
		autoComplete: {
			enabled: !1,
			delay: 200,
			minLength: 0,
			filter: d
		},
		valueTemplate: d,
		textTemplate: d,
		inputTemplate: d,
		selected: d,
		value: d,
		width: d,
		height: d,
		dropDownWidth: d,
		dropDownHeight: 200,
		appendListBoxTo: "body",
		animation: {
			enabled: !0,
			openDelay: 200,
			closeDelay: 100
		},
		events: {}
	}, p = C.extend({
		init: function () {
			C.fn.init.apply(this, arguments);
			var b, d, e, g, h, i, j, k = this,
				l = k.options,
				m = l.editable,
				n = l.dieOnError,
				o = l.dataSource,
				p = l.autoComplete,
				q = l.selected,
				r = l.value,
				s = l.appendListBoxTo;
			return k._original = b = a(k.element), k._utype = hb(b), o || k._utype == db ? (k._eventNS = ".shieldComboBox" + k.getInstanceId(), k.pending = 0, k.element = g = b.wrap("<span/>").parent(), b.hide(), k._onDDHandler = W(k._onDD, k), m ? (h = a('<input type="text" class="sui-input"/>').focus(function () {
					a(this).parent().addClass("sui-combobox-focus")
				}).blur(function () {
					a(this).parent().removeClass("sui-combobox-focus"), k._blur()
				}).attr(Z, ba).attr(ia, _), e = b.attr(Va), J(e) && h.attr(Va, e)) : h = a('<span class="sui-input sui-unselectable">&nbsp;</span>').attr(Xa, Ya).on(Ea + k._eventNS, k._onDDHandler).on(Wa + k._eventNS, function () {
					return !1
				}), k.textElement = h, h.appendTo(g), k.ddElement = i = a('<span class="sui-caret-container sui-unselectable"/>').html('<span class="sui-caret sui-unselectable" unselectable="on"/>').attr(Xa, Ya).on(Ea + k._eventNS, k._onDDHandler).appendTo(g), g.addClass(m ? "sui-combobox" : "sui-dropdown"), l.cls && g.addClass(l.cls), d = b.attr(Aa), m ? h.attr(Aa, J(d) ? d : "0") : g.attr(Aa, J(d) ? d : "0"), J(l.width) && g.css(Za, l.width), J(l.height) && (g.css($a, l.height), h.css($a, l.height), i.css($a, l.height)), g.on(Fa + k._eventNS, W(k._keydown, k)).on(Ha + k._eventNS, W(k._keyup, k)), k._focusHandler = W(k._focus, k), m ? h.on(Pa + k._eventNS, k._focusHandler) : g.on(Pa + k._eventNS, k._focusHandler), g.on(Qa + k._eventNS, W(k._blur, k)), k.listElement = a("<span/>").appendTo(a(s)), p && (j = J(p.filter) ? p.filter : o && o.filter ? o.filter : k._utype == db ? {
					and: [{
						path: "text",
						filter: "contains",
						value: ""
					}]
				} : {
					and: [{
						path: "",
						filter: "contains",
						value: ""
					}]
				}), k.listBox = new f(b, {
					cls: "sui-autocomplete",
					dataSource: o,
					readDataSource: !1,
					valueTemplate: l.valueTemplate,
					textTemplate: l.textTemplate,
					multiple: !1,
					selected: J(q) && I(q) ? q[0] : q,
					values: r,
					width: l.dropDownWidth || g.innerWidth(),
					maxHeight: l.dropDownHeight,
					renderToINTERNAL: k.listElement,
					wrapOriginalINTERNAL: !1,
					tabindexINTERNAL: N.ie && N.version <= 8 ? 0 : -1,
					filterINTERNAL: j,
					events: {
						select: function (a) {
							k._onLBSelChanged(), k.trigger(Sa, {
								index: a.index,
								item: a.item,
								text: a.text,
								value: a.value
							})
						},
						itemclick: function (a) {
							m ? h.focus() : g.focus(), k._hideDD(), k.trigger(za, {
								index: a.index,
								item: a.item,
								text: a.text,
								value: a.value
							})
						},
						blur: function (a) {
							setTimeout(W(k._blur, k), 20)
						}
					}
				}), k.listBox.element.hide(), k.dataSource = k.listBox.dataSource, k.listBox.dataSource.on(Oa + k._eventNS, W(k._dsChange, k)),
				l.textTemplate = k.listBox.options.textTemplate, l.valueTemplate = k.listBox.options.valueTemplate, g.attr(Z, "combobox"), m && (h.attr(ga, "list"), h.attr(sa, k.listBox.element.attr(Y)), h.attr(oa, k.listBox.element.attr(Z))), k.listBox.dataSource.read(), a(c).on(Ra + k._eventNS, W(k._position, k)), k.enabled(l.enabled), k._open = !1, l.enabled && l.open && k._showDD(!0), void(k._destroyed = !1)) : (k.destroy(), void G((m ? "shieldComboBox" : "shieldDropDown") + ": No dataSource or underlying SELECT element found.", n))
		},
		refresh: function (a) {
			this.refreshWithElement(this._original, a)
		},
		focus: function () {
			var b = this;
			b.options.editable ? (a(b.textElement).focus(), jb(a(b.textElement))) : a(b.element).focus()
		},
		_focus: function (a) {
			var b = this;
			b._hasFocus || (b._hasFocus = !0, b._oldValue = b.value(), b.trigger(Pa))
		},
		_blur: function (b) {
			var c = this;
			setTimeout(function () {
				c._destroyed || null == c.listBox || a(c.listBox.element).is(":focus") || a(c.element).is(":focus") || a(c.textElement).is(":focus") || (c._hideDD(), c._oldValue !== c.value() && c.trigger(Oa), c.trigger(Qa), c._hasFocus = !1)
			}, 100)
		},
		_keydown: function (a) {
			var b = this;
			switch (a.keyCode) {
				case F.TAB:
					break;
				case F.UP:
				case F.DOWN:
					b._keydownUpDown(a), a.preventDefault();
					break;
				case F.ESC:
				case F.ENTER:
					a.preventDefault(), b.cancelSearch = !0, b._hideDD();
					break;
				default:
					b._keydownDefault(a)
			}
		},
		_keyup: function (b) {
			var c = this,
				d = b.keyCode;
			c.options.editable && c._utype == eb && d != F.UP && d != F.DOWN && d != F.ENTER && d != F.TAB && a(c._original).attr(Ua, a(c.textElement).val())
		},
		_keydownUpDown: function (b) {
			this._enabled && a(this.listBox.element).trigger(b)
		},
		_keydownDefault: function (a) {
			var b = this;
			b.listBox.clearSelection(), b._searchTimeout(a)
		},
		_searchTimeout: function (b) {
			var c = this,
				d = c.options.autoComplete;
			d && d.enabled && (clearTimeout(c.searchTimeout), c.searchTimeout = setTimeout(function () {
				c.term !== a(c.textElement).val() && c._search()
			}, d.delay))
		},
		_search: function () {
			var b = this;
			b.listBox.dataSource;
			return b.term = a(b.textElement).val(), b.term.length < b.options.autoComplete.minLength ? void b._hideDD() : (b.cancelSearch = !1, b.pending++, a(b.textElement).addClass("sui-autocomplete-loading"), lb(b.listBox.dataSource.filter, b.term), void b.listBox.dataSource.read())
		},
		_dsChange: function () {
			var b = this,
				c = b._original,
				d = b._utype,
				e = b.textElement.val();
			return b._dsLoaded ? (b.pending--, b.pending || a(b.textElement).removeClass("sui-autocomplete-loading"), !b.cancelSearch && b._hasData() ? b._showDD(!0) : b._hideDD(), d == db ? c.val(e) : d == eb && c.attr(Ua, e), void b.trigger(Sa, {
				index: -1,
				item: e
			})) : (b._dsLoaded = !0, !b.options.editable && b.listBox.selected().length <= 0 && b.listBox.selected(0), void b._onLBSelChanged())
		},
		_hasData: function () {
			var a = this.listBox.dataSource.view;
			return a && a.length > 0
		},
		_onLBSelChanged: function () {
			var a, b, c, d = this,
				e = d.options,
				f = e.editable,
				g = d.listBox,
				h = g.selectedItems();
			h && h.length > 0 ? (a = O.call(d, e.valueTemplate, h[0]), b = O.call(d, e.textTemplate, h[0]), c = J(e.inputTemplate) ? O.call(d, e.inputTemplate, h[0]) : b, f ? (d.textElement.val(c), d.textElement.attr(ha, g.element.attr(ha))) : d.textElement.html(c)) : f ? (d.textElement.val(""), d.textElement.removeAttr(ha)) : d.textElement.html("&nbsp;")
		},
		_onDD: function (a) {
			var b = this,
				c = b.textElement;
			b.options.editable ? (c.focus(), jb(c)) : b.element.focus(), b._open ? b._hideDD() : b._hasData() && b._showDD(!1)
		},
		_position: function () {
			var b = this,
				c = a(b.element),
				d = a(b.listBox.element);
			d.width(b.options.dropDownWidth || c.innerWidth()), E.Set(d, c, {
				source: "left top",
				target: "left bottom",
				overflow: "none"
			})
		},
		_showDD: function (b) {
			var c = this,
				d = c.listBox,
				e = a(d.element),
				f = c.options.animation;
			c._enabled && (e.css({
				top: 0,
				left: 0
			}), e.show(), c._position(), !b && f && f.enabled ? e.hide().slideDown(f.openDelay, W(d.ensureActiveViewableINTERNAL, d)) : d.ensureActiveViewableINTERNAL(), c._open = !0, a(c.element).attr(ta, $))
		},
		_hideDD: function () {
			var b = this,
				c = a(b.listBox.element),
				d = b.options.animation;
			d && d.enabled ? c.slideUp(d.closeDelay) : c.hide(), b._open = !1, a(b.element).attr(ta, _)
		},
		enabled: function () {
			var b, c = this,
				d = c.options.editable,
				e = a(c.element),
				f = c.textElement,
				g = c.ddElement,
				h = c._original,
				i = [].slice.call(arguments);
			return i.length > 0 ? (b = !!i[0], b ? (e.removeAttr(wa).removeClass(d ? "sui-combobox-disabled" : "sui-dropdown-disabled"), f.removeAttr(wa), g.removeAttr(wa), h.removeAttr(wa)) : (c._open && c._hideDD(), e.attr(wa, wa).addClass(d ? "sui-combobox-disabled" : "sui-dropdown-disabled"), f.attr(wa, wa), g.attr(wa, wa), h.attr(wa, wa)), c._enabled = b, void 0) : c._enabled
		},
		selected: function () {
			var a, b = this,
				c = b.listBox,
				d = [].slice.call(arguments);
			return d.length > 0 ? (a = d[0], c.clearSelection(), J(a) && (a = L(a), a > -1 ? c.selected(a) : b.options.editable || c.selected(0)), b._onLBSelChanged(), void 0) : (a = c.selected(), a && a.length > 0 ? a[0] : -1)
		},
		selectedItem: function () {
			var a = this,
				b = a.listBox.selectedItems();
			return b && b.length > 0 ? b[0] : null
		},
		value: function () {
			var b, c = this,
				d = c.listBox,
				e = [].slice.call(arguments);
			return e.length > 0 ? (d.clearSelection(), d.values(e[0]), c._onLBSelChanged(), void 0) : (b = d.values(), b && b.length > 0 ? b[0] : c.options.editable ? a(c.textElement).val() : null)
		},
		text: function () {
			var b = this,
				c = b.listBox.texts();
			return c && c.length > 0 ? c[0] : b.options.editable ? a(b.textElement).val() : null
		},
		destroy: function () {
			var b = this,
				d = a(b.element),
				e = a(b.textElement),
				f = a(b.ddElement);
			b._destroyed || (b._destroyed = !0, b._dsLoaded = !1, e.off(b._eventNS), f.off(b._eventNS), b._onDDHandler = null, a(c).off(Ra + b._eventNS), d.off(b._eventNS), b.dataSource = null, b.listBox && (b.listBox.dataSource.off(Oa + b._eventNS), b.listBox.destroy(), b.listBox = null), a(b.listElement).remove(), e.remove(), f.remove(), b._original.unwrap().show(), b._original = null, C.fn.destroy.call(b))
		}
	}), p.defaults = o, b.ui.plugin("ComboBox", p), q = U({}, o, {
		editable: !1,
		autoComplete: d
	}), r = p.extend({
		init: function (a, b) {
			b && (b.editable = !1, b.autoComplete = d), p.prototype.init.call(this, a, b)
		}
	}), r.defaults = q, b.ui.plugin("DropDown", r), s = {
		enabled: !0,
		cls: d,
		toggle: !1,
		checked: !1,
		events: {}
	}, t = C.extend({
		init: function () {
			C.fn.init.apply(this, arguments);
			var b = this,
				c = a(b.element),
				d = b.options,
				e = d.cls;
			b._eventNS = ".shieldButton" + b.getInstanceId(), c.addClass("sui-button"), e && c.addClass(e), c.on(Ea + b._eventNS, W(b._click, b)), c.attr(Z, ca), b.enabled(d.enabled), d.toggle && (b._checked = !!d.checked, b._checked ? c.addClass("sui-button-checked") : c.removeClass("sui-button-checked"), c.attr(ea + "-pressed", b._checked ? $ : _))
		},
		_click: function (b) {
			var c = this,
				d = a(c.element);
			c._enabled && (c.options.toggle && (c._checked = !c._checked, c._checked ? d.addClass("sui-button-checked") : d.removeClass("sui-button-checked"), d.attr(ea + "-pressed", c._checked ? $ : _)), c.trigger(Ea, b))
		},
		checked: function () {
			var b = this,
				c = a(b.element),
				d = [].slice.call(arguments);
			return d.length > 0 ? void(b.options.toggle && (b._checked = !!d[0], b._checked ? c.addClass("sui-button-checked") : c.removeClass("sui-button-checked"), c.attr(ea + "-pressed", b._checked ? $ : _))) : b._checked
		},
		enabled: function () {
			var b, c = this,
				d = a(c.element),
				e = [].slice.call(arguments);
			return e.length > 0 ? (b = !!e[0], b ? d.removeAttr(wa).removeClass("sui-button-disabled").removeAttr(na) : d.attr(wa, wa).addClass("sui-button-disabled").attr(na, $), c._enabled = b, void 0) : c._enabled
		},
		destroy: function () {
			var a = this,
				b = a.options.cls;
			a.element.off(Ea + a._eventNS).removeClass("sui-button sui-button-checked sui-button-disabled" + (b ? " " + b : "")), C.fn.destroy.call(a)
		}
	}), t.defaults = s, b.ui.plugin("Button", t), u = U({}, s, {
		menu: d,
		dataSource: d,
		events: {}
	}), v = t.extend({
		init: function () {
			if (t.fn.init.apply(this, arguments), b.ui.ContextMenu) {
				var c = this,
					d = a(c.element),
					e = c.options,
					f = e.menu,
					g = e.cls;
				c._handle = a('<button type="button"><span class="sui-caret-down"/></button>'), d.after(c._handle), c._handleButton = new t(c._handle, {
					cls: "sui-button-split-handle" + (g ? " " + g : ""),
					events: {
						click: function (b) {
							if (c.menu.visible()) c.menu.visible(!1);
							else {
								var e = a(d).offset();
								c.menu.visible(!0, {
									x: e.left,
									y: e.top + a(d).outerHeight()
								})
							}
						}
					}
				}), J(f) ? c._menuElement = a(f) : (c._menuElement = a("<ul/>"), c._customMenuElement = !0, c._handle.after(c._menuElement)), c._menuElement.attr(Y) || c._menuElement.attr(Y, P()), c.menu = new b.ui.ContextMenu(c._menuElement, {
					cls: "sui-button-split-menu",
					dataSource: e.dataSource,
					minWidth: d.outerWidth() + c._handle.outerWidth() - 2,
					events: {
						click: W(c.trigger, c, "menuClick")
					}
				}), a(c._handle).attr(oa, $).attr(sa, c._menuElement.attr(Y))
			}
		},
		enabled: function () {
			var a = this;
			return arguments && arguments.length > 0 ? (t.fn.enabled.apply(a, arguments), a._handleButton && a._handleButton.enabled.apply(a._handleButton, arguments), a.menu && !arguments[0] && a.menu.visible(!1), void 0) : t.fn.enabled.apply(a, arguments)
		},
		visible: function () {
			var a = this;
			return arguments && arguments.length > 0 ? (t.fn.visible.apply(a, arguments), a._handleButton && a._handleButton.visible.apply(a._handleButton, arguments), a.menu && !arguments[0] && a.menu.visible(!1), void 0) : t.fn.visible.apply(a, arguments)
		},
		destroy: function () {
			var b = this;
			b.menu && (b.menu.destroy(), b.menu = d), b._menuElement && (b._customMenuElement && (a(b._menuElement).remove(), b._customMenuElement = d), b._menuElement = d), b._handleButton && (b._handleButton.destroy(), b._handleButton = d), b._handle && (a(b._handle).remove(), b._handle = d), t.fn.destroy.call(b)
		}
	}), v.defaults = u, b.ui.plugin("SplitButton", v), w = {
		enabled: !0,
		enableThreeStates: !1,
		enableLabelClick: !0,
		checked: !1,
		label: "",
		events: {}
	}, x = C.extend({
		init: function () {
			var b, c, d, e, f, g = this;
			C.fn.init.apply(this, arguments), g._eventNS = ".shieldCheckBox" + g.getInstanceId(), b = g.options;
			var h = a(g.element).addClass("sui-checkbox-input");
			f = h.attr(Y), f || h.attr(Y, f = P()), d = h.attr(Aa), e = g.wrapper = h.wrap('<span class="sui-checkbox"/>').parent().attr(Aa, J(d) ? d : 0);
			var i = a('<span class="sui-checkbox-element sui-checkbox-unchecked"/>');
			if (i.appendTo(e), g.checkBoxElement = i, a('<span class="sui-checkmark"/>').appendTo(i), b.label ? (c = a('<label class="sui-checkbox-label"/>'), c.appendTo(e), c.attr("for", f), c.get(0).innerHTML = b.label, b.enableLabelClick && c.addClass("sui-checkbox-label-hover")) : (c = h.parent().parent(), c && !c.is("label") && (c = a('label[for="' + f + '"]')), c && b.enableLabelClick && c.addClass("sui-checkbox-label-hover")), e.attr(Z, "checkbox"), c) {
				var j = c.attr(Y);
				j || c.attr(Y, j = P()), e.attr(ra, j)
			}
			h.attr(xa) && (b.checked = !0), g.enabled(b.enabled), g.checked(b.checked), e.on(Ea + g._eventNS, W(g._click, g)).on(Fa + g._eventNS, W(g._keydown, g)), c && b.enableLabelClick && c.on(Ea + g._eventNS, W(g._click, g)).on(Fa + g._eventNS, W(g._keydown, g)), e.onselectstart = function () {
				return !1
			}, e.onmousedown = function () {
				return !1
			}
		},
		_click: function (b) {
			var c = this;
			a(c.element);
			c._enabled && (c._checked ? c.options.enableThreeStates ? c._checked = null : c._checked = !1 : c._checked === !1 ? c._checked = !0 : null === c._checked && (c._checked = !1), c.checked(c._checked), c.trigger(Ea, b), b.preventDefault(), b.stopPropagation())
		},
		_keydown: function (a) {
			a.keyCode == F.SPACE && this._click(a)
		},
		hide: function () {
			a(this.wrapper).hide()
		},
		show: function () {
			a(this.wrapper).show()
		},
		isVisible: function () {
			return a(this.wrapper).is(":visible")
		},
		checked: function () {
			var b, c = this,
				d = [].slice.call(arguments),
				e = a(c.element),
				f = c.wrapper,
				g = f.find(".sui-checkmark");
			return d.length > 0 ? (c._checked = b = d[0], void(b ? (f.find(".sui-checkbox-element").removeClass("sui-checkbox-unchecked sui-checkbox-indeterminate").addClass("sui-checkbox-checked"), f.attr(pa, $), e.attr(xa, xa), e.data("1"), N.ie && N.version <= 8 && g.css("filter", "progid:DXImageTransform.Microsoft.Matrix(SizingMethod='auto expand', M11=0.7071067811865476, M12=0.7071067811865475, M21=-0.7071067811865475, M22=0.7071067811865476)")) : b === !1 ? (f.find(".sui-checkbox-element").removeClass("sui-checkbox-checked sui-checkbox-indeterminate").addClass("sui-checkbox-unchecked"), f.attr(pa, _), e.removeAttr(xa), e.data("0"), g.css("filter", "")) : null === b && c.options.enableThreeStates && (f.find(".sui-checkbox-element").removeClass("sui-checkbox-checked sui-checkbox-unchecked").addClass("sui-checkbox-indeterminate"), f.attr(pa, "mixed"), e.removeAttr(xa), e.data("2"), g.css("filter", "")))) : c._checked
		},
		enabled: function () {
			var b = this,
				c = [].slice.call(arguments),
				d = a(b.element);
			if (!(c.length > 0)) return b._enabled;
			var e = !!c[0];
			e ? (b.wrapper.removeAttr(wa).removeClass("sui-checkbox-disabled"), d.removeAttr(wa)) : (b.wrapper.attr(wa, wa).addClass("sui-checkbox-disabled"), d.attr(wa, wa)), b._enabled = e
		},
		destroy: function () {
			var a = this;
			a.element.removeClass("sui-checkbox-input").removeAttr(Aa), a.checkBoxElement && a.checkBoxElement.off(a._eventNS), a.wrapper && (a.wrapper.find(".sui-checkbox-label").off(a._eventNS).end().removeAttr(wa).removeClass("sui-checkbox-disabled").replaceWith(a.element), a.wrapper = null), C.fn.destroy.call(a)
		}
	}), x.defaults = w, b.ui.plugin("CheckBox", x), y = {
		enabled: !0,
		enableLabelClick: !0,
		checked: !1,
		label: "",
		events: {}
	}, z = C.extend({
		init: function () {
			C.fn.init.apply(this, arguments);
			var b, c, d, e, f = this,
				g = a(f.element),
				h = f.options;
			f._eventNS = ".shieldRadioButton" + f.getInstanceId(), g.addClass("sui-radiobutton-input"), e = g.attr(Y), e || g.attr(Y, e = P()), c = g.attr(Aa), d = f.wrapper = g.wrap('<span class="sui-radiobutton"/>').parent(), d.attr(Aa, J(c) ? c : 0);
			var i = a('<span class="sui-radiobutton-element"/>');
			if (i.appendTo(d), f.radioButtonElement = i, a('<span class="sui-checkmark"/>').appendTo(i), h.label ? (b = a('<label class="sui-radiobutton-label"/>'), b.appendTo(d), b.attr("for", e), b.get(0).innerHTML = h.label, h.enableLabelClick && b.addClass("sui-radiobutton-label-hover")) : (b = g.parent().parent(), b && !b.is("label") && (b = a('label[for="' + e + '"]')), b && h.enableLabelClick && b.addClass("sui-radiobutton-label-hover")), d.attr(Z, "radio"), b) {
				var j = b.attr(Y);
				j || b.attr(Y, j = P()), d.attr(ra, j)
			}
			g.attr(xa) && (h.checked = !0), f.enabled(h.enabled), h.checked ? f.checked(h.checked) : f._checked = !1, d.on(Ea + f._eventNS, W(f._click, f)).on(Fa + f._eventNS, W(f._keydown, f)), b && h.enableLabelClick && b.on(Ea + f._eventNS, W(f._click, f)).on(Fa + f._eventNS, W(f._keydown, f)), d.onselectstart = function () {
				return !1
			}, d.onmousedown = function () {
				return !1
			}
		},
		_click: function (a) {
			var b = this;
			b._enabled && (b.checked(!0), b.trigger(Ea, a), a.preventDefault(), a.stopPropagation())
		},
		_keydown: function (a) {
			a.keyCode == F.SPACE && this._click(a)
		},
		hide: function () {
			a(this.wrapper).hide()
		},
		show: function () {
			a(this.wrapper).show()
		},
		isVisible: function () {
			return a(this.wrapper).is(":visible")
		},
		checked: function () {
			var a = this,
				b = [].slice.call(arguments);
			return b.length > 0 ? (a._uncheckAllFromSameGroup(), void a._checkInternal(b[0])) : a._checked
		},
		_checkInternal: function (b) {
			var c = this,
				d = a(c.element),
				e = c.wrapper;
			c._checked = b, b ? (e.find(".sui-radiobutton-element").removeClass("sui-radiobutton-unchecked sui-radiobutton-indeterminate").addClass("sui-radiobutton-checked"), e.attr(pa, $), d.attr(xa, xa)) : (e.find(".sui-radiobutton-element").removeClass("sui-radiobutton-checked"), e.attr(pa, _), d.removeAttr(xa))
		},
		_uncheckAllFromSameGroup: function () {
			var b = this,
				c = a(b.element);
			a('input[type="radio"][name="' + c.attr("name") + '"]').not(c).each(function () {
				var b = a(this).swidget();
				b && (b._checkInternal(!1), b.trigger(Oa))
			})
		},
		enabled: function () {
			var b = this,
				c = [].slice.call(arguments),
				d = a(b.element);
			if (!(c.length > 0)) return b._enabled;
			var e = !!c[0];
			e ? (b.wrapper.removeAttr(wa).removeClass("sui-radiobutton-disabled"), d.removeAttr(wa)) : (b.wrapper.attr(wa, wa).addClass("sui-radiobutton-disabled"), d.attr(wa, wa)), b._enabled = e
		},
		destroy: function () {
			var a = this;
			a.element.removeClass("sui-radiobutton-input").removeAttr(Aa), a.radioButtonElement && (a.radioButtonElement.off(a._eventNS), a.radioButtonElement = null), a.wrapper && (a.label && (a.label.off(a._eventNS), a.label = null), a.wrapper.removeAttr(wa).removeClass("sui-radiobutton-disabled"), a.wrapper.replaceWith(a.element), a.wrapper = null), C.fn.destroy.call(a)
		}
	}), z.defaults = y, b.ui.plugin("RadioButton", z), A = {
		cls: d,
		enabled: !0,
		checked: d,
		onText: d,
		offText: d,
		events: {}
	}, B = C.extend({
		init: function () {
			C.fn.init.apply(this, arguments);
			var b, c, d, e, f, g = this,
				h = g.options,
				i = h.dieOnError,
				j = h.cls,
				k = h.checked;
			return g._original = b = a(g.element), hb(b) !== eb || "checkbox" !== b.attr("type") ? void G("shieldSwitch: Underlying element must ne an input of type checkbox.", i) : (g._eventNS = ".shieldSwitch" + g.getInstanceId(), g.element = d = b.wrap('<div class="sui-switch sui-unselectable' + (j ? " " + j : "") + '" />').parent(), f = a('<div class="sui-switch-inner sui-unselectable" />').appendTo(d), g._text = a('<span class="sui-switch-text sui-unselectable" />').appendTo(f), g._handle = e = a('<div class="sui-switch-handle sui-unselectable" />').appendTo(d), e.height(d.height()), b.hide(), c = b.attr(Aa), d.attr(Aa, J(c) ? c : "0"), d.on(Ea + g._eventNS, W(g._click, g)).on(Fa + g._eventNS, W(g._keydown, g)), k = J(k) ? !!k : !!b.attr(xa), d.attr(Z, da), g.checked(k, !1), void g.enabled(h.enabled))
		},
		refresh: function (a) {
			this.refreshWithElement(this._original, a)
		},
		_keydown: function (a) {
			var b = this;
			a.keyCode === F.SPACE && (b._click(a), a.preventDefault())
		},
		_click: function (a) {
			var b = this;
			b._enabled && (b.checked(!b._checked), b.trigger(Ea, a), a.preventDefault(), a.stopPropagation())
		},
		checked: function () {
			var b, c, d = this,
				e = d.options,
				f = e.onText,
				g = e.offText,
				h = a(d.element),
				i = a(d._handle),
				j = a(d._text),
				k = d._original,
				l = [].slice.call(arguments),
				m = 100;
			return l.length > 0 ? (b = !!l[0], c = !J(l[1]) || !!l[1], c || (m = 0), b ? (k.attr(xa, xa), i.animate({
				left: h.width() - i.width() - 2
			}, m, function () {
				h.addClass("sui-switch-checked").attr(pa, $), J(f) && (j.html(f), h.attr(qa, ib(f)))
			})) : (k.removeAttr(xa), i.animate({
				left: -2
			}, m, function () {
				h.removeClass("sui-switch-checked").attr(pa, _), J(g) && (j.html(g), h.attr(qa, ib(g)))
			})), d._checked = b, void 0) : d._checked
		},
		enabled: function () {
			var b, c = this,
				d = a(c.element),
				e = c._original,
				f = [].slice.call(arguments);
			return f.length > 0 ? (b = !!f[0], b ? (d.removeAttr(wa).removeClass("sui-switch-disabled"), e.removeAttr(wa)) : (d.attr(wa, wa).addClass("sui-switch-disabled"), e.attr(wa, wa)), c._enabled = b, void 0) : c._enabled
		},
		destroy: function () {
			var b = this;
			a(b.element).off(b._eventNS), a(b._inner).remove(), a(b._handle).remove(), b._original.unwrap().show(), b._original = b._inner = b._handle = null, C.fn.destroy.call(b)
		}
	}), B.defaults = A, b.ui.plugin("Switch", B)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g, h, i, j, k, l, m, n, o = b.ui.Widget,
		p = b.Class,
		q = b.format,
		r = b.parseDate,
		s = document,
		t = b.is.func,
		u = b.is,
		v = a.proxy,
		w = navigator.userAgent,
		x = c.opera,
		y = /msie/i.test(w) && !x,
		z = y && 8 === s.documentMode,
		A = a.extend,
		B = u.undefined,
		C = u.string,
		D = "month",
		E = "year",
		F = "decade",
		G = "century",
		H = "click",
		I = "mousedown",
		J = "keypress",
		K = "focus",
		L = "selectstart",
		M = "select",
		N = "change",
		O = "viewChange",
		P = "depthChange",
		Q = "open",
		R = "close",
		S = "blur",
		T = "display",
		U = "none";
	e = {
		enabled: !0,
		readOnly: !1,
		hover: !0,
		footer: {
			enabled: !0,
			footerTemlpate: "Today"
		},
		min: new Date(1900, 0, 1),
		max: new Date(2099, 11, 31),
		value: d,
		focused: new Date,
		labels: {
			previous: "Previous",
			next: "Next"
		},
		view: {
			depth: D,
			start: D
		},
		dayTemplate: "{day}",
		otherMonthDayTemplate: "{day}",
		outOfRangeDayTemplate: "&nbsp;",
		dateTooltipTemplate: "{date:MM/dd/yyyy}",
		events: {}
	};
	var V = function (a) {
			var b = !1,
				c = "Webkit Moz ms O".split(" "),
				d = s.createElement("div"),
				e = null;
			if (a = a.toLowerCase(), d.style[a] && (b = !0), b === !1) {
				e = a.charAt(0).toUpperCase() + a.substr(1);
				for (var f = 0; f < c.length; f++)
					if (void 0 !== d.style[c[f] + e]) {
						b = !0;
						break
					}
			}
			return b
		},
		W = p.extend({
			init: function (c) {
				var d = this,
					e = c.listbox,
					f = c.min,
					g = c.max,
					h = c.interval,
					i = c.parent,
					j = c.textTemplate;
				if (b.ui.ListBox) {
					if (u.object(e) && e instanceof b.ui.ListBox) i.listBox = e;
					else {
						i._listBoxWrapper = a("<div style='display: none;' />").appendTo(s.body);
						var k = d._populateDataSource(f, g, h);
						i.listBox = new b.ui.ListBox(i._listBoxWrapper, A({}, e, {
							dataSource: {
								data: k
							},
							multiple: !1,
							textTemplate: j,
							width: i._wrapper.innerWidth(),
							maxHeight: 200
						})), i._wrapper.parent().hasClass("sui-rtl") ? i.listBox.element.parent().addClass("sui-rtl") : i.listBox.element.parent().css(T, U)
					}
					i._shouldShowPopup = !0
				}
			},
			_populateDataSource: function (a, b, c) {
				var d, e, f = [];
				for (b <= a ? b = new Date(a.getFullYear(), a.getMonth(), a.getDate() + 1, b.getHours(), b.getMinutes(), b.getSeconds()) : (b = new Date(a.getFullYear(), a.getMonth(), a.getDate(), b.getHours(), b.getMinutes(), b.getSeconds()), b.getTime() == a.getTime() && (b = new Date(a.getFullYear(), a.getMonth(), a.getDate() + 1, b.getHours(), b.getMinutes(), b.getSeconds()))), d = a.getTime(), e = b.getTime(); d < e;) f.push(new Date(d)), d += 60 * c * 1e3;
				return f
			},
			destroy: function () {
				var a = this;
				a.listBox;
				a.listBox && (a.listBox.destroy(), a.listBox = null)
			}
		});
	f = o.extend({
		init: function () {
			o.fn.init.apply(this, arguments);
			var b = this,
				c = a(b.element),
				d = b.options,
				e = d.cls,
				f = d.value;
			c.addClass("sui-calendar" + (e ? " " + e : "")), b._focusedDate = d.focused, b._view = d.view.start, b._enabled = d.enabled, f && (C(f) && (f = new Date(f)), b._focusedDate = b._selectedDate = new Date(f.getFullYear(), f.getMonth(), f.getDate())), b._initializeHeader(), b._render(), d.footer.enabled && b._initializeFooter(), !d.readOnly && d.enabled ? (c.find(".sui-prev").on(H, b._movePrev = v(b._movePrevHandler, b)), c.find(".sui-next").on(H, b._moveNext = v(b._moveNextHandler, b)), c.find(".sui-text").on(H, b._changeViewDepth = v(b._changeViewDepthHandler, b)), c.find(".sui-footer").on(H, b._selectToday = v(b._selectTodayHandler, b))) : d.readOnly ? c.addClass("sui-read-only") : c.addClass("sui-calendar-disabled"), y && c.on(L, b._selectStart = function () {
				return !1
			})
		},
		_calendarSelectionHandler: function (b) {
			var c, d, e = this,
				f = a(b.target).closest("td"),
				g = e._focusedDate;
			e.options.view.depth;
			if (f.length && !f.hasClass("sui-out-of-range") && !f.hasClass("sui-no-hover") && e._enabled) switch (e._calendarTable.find(".sui-focused").removeClass("sui-focused"), e._view) {
				case D:
					c = new Date(f.attr("data-value"));
					var h = e._shouldChangeView(c),
						i = !1;
					c.getTime() > e._focusedDate && (i = !0), e._focusedDate = c, e._selectedDate = c, h && (e._animationBegins(i), e._renderView(), e._animationEnds(i), e.trigger(O)), e._selectDateCell(c), e.trigger(N);
					break;
				case E:
					var j = parseInt(f.attr("data-value"), 10);
					c = new Date(g.getFullYear(), j, g.getDate()), c.getDate() != g.getDate() && (c = new Date(g.getFullYear(), j + 1, 0)), e._focusedDate = c, e.options.view.depth == E ? (e._selectedDate = c, e._selectDateCell(c), e.trigger(N)) : (e._view = D, e._viewDepthAnimationBegins(), e._renderView(), e._viewDepthAnimationEnds(), e.trigger(P));
					break;
				case F:
					d = parseInt(f.attr("data-value"), 10), c = new Date(d, g.getMonth(), g.getDate()), c.getDate() != g.getDate() && (c = new Date(d, g.getMonth() + 1, 0)), e._focusedDate = c, e.options.view.depth == F ? (e._selectedDate = c, e._selectDateCell(c), e.trigger(N)) : (e._view = E, e._viewDepthAnimationBegins(), e._renderView(), e._viewDepthAnimationEnds(), e.trigger(P));
					break;
				case G:
					d = parseInt(f.attr("data-value"), 10), c = new Date(d, g.getMonth(), g.getDate()), c.getDate() != g.getDate() && (c = new Date(d, g.getMonth() + 1, 0)), e._focusedDate = c, e.options.view.depth == G ? (e._selectedDate = c, e._selectDateCell(c), e.trigger(N)) : (e._view = F, e._viewDepthAnimationBegins(), e._renderView(), e._viewDepthAnimationEnds(), e.trigger(P))
			}
		},
		_shouldChangeView: function (a) {
			var b, c, d = this,
				e = d._focusedDate,
				f = !1,
				g = e.getFullYear(),
				h = a.getFullYear();
			switch (d._view) {
				case D:
					h == g && a.getMonth() == e.getMonth() || (f = !0);
					break;
				case E:
					h != g && (f = !0);
					break;
				case F:
					b = g - g % 10, c = b + 10, (h < b || h > c) && (f = !0);
					break;
				case G:
					b = g - g % 100, c = b + 100, (h < b || h > c) && (f = !0)
			}
			return f
		},
		_selectTodayHandler: function () {
			var a = this,
				b = new Date,
				c = a._shouldChangeView(b),
				d = !1;
			if (a._enabled) {
				var e = new Date(b.getFullYear(), b.getMonth(), b.getDate());
				e.getTime() > a._focusedDate && (d = !0), a._selectedDate = a._focusedDate = e, a._view != a.options.view.depth ? (a._view = a.options.view.depth, a._viewDepthAnimationBegins(), a._renderView(), a._viewDepthAnimationEnds(), a.trigger(P)) : c ? (a._animationBegins(d), a._renderView(), a._animationEnds(d), a.trigger(O)) : a._selectDateCell(a._focusedDate), a.trigger(N)
			}
		},
		_selectDateCell: function (b) {
			var c = this,
				d = null;
			switch (c._view) {
				case D:
					d = c._calendarTable.find(".sui-date:not('.sui-other-month')").filter(function () {
						var c = a(this).attr("data-value"),
							d = new Date(c);
						return d.getDate() == b.getDate() && d.getMonth() == b.getMonth() && d.getFullYear() == b.getFullYear()
					});
					break;
				case E:
					d = c._calendarTable.find(".sui-month").filter(function () {
						return a(this).attr("data-value") == b.getMonth()
					});
					break;
				case F:
					d = c._calendarTable.find(".sui-year").filter(function () {
						return a(this).attr("data-value") == b.getFullYear()
					});
					break;
				case G:
					d = c._calendarTable.find(".sui-years").filter(function () {
						var c = parseInt(a(this).attr("data-value"), 10);
						return b.getFullYear() >= c && b.getFullYear() < c + 10
					})
			}
			c._calendarTable.find(".sui-selected").removeClass("sui-selected"), d.addClass("sui-selected")
		},
		_viewDepthAnimationBegins: function () {
			var a = this;
			if (!V("transition")) return void a._calendarTable.empty();
			a._enabled = !1;
			var b = a._calendarTable,
				c = !1;
			b.bind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (d) {
				c = a._removeOldTable(b, a)
			}), setTimeout(function () {
				c || a._removeOldTable(b, a)
			}, 1e3), b.addClass("sui-fade-in"), a._renderTable()
		},
		_removeOldTable: function (a, b) {
			return a.unbind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"), a.remove(), b._enabled = !0, !0
		},
		_viewDepthAnimationEnds: function () {
			V("transition") && this._calendarTable.addClass("sui-scaling")
		},
		_changeViewDepthHandler: function (a) {
			var b = this,
				c = [D, E, F, G],
				d = jQuery.inArray(b._view, c);
			d < 3 && b._enabled && (b._view = c[d + 1], b._viewDepthAnimationBegins(), b._renderView(), b._viewDepthAnimationEnds())
		},
		_movePrevMonth: function () {
			var a = this,
				b = a._focusedDate,
				c = (a._view, new Date(b.getFullYear(), b.getMonth() - 1, b.getDate()));
			c.getDate() != b.getDate() && (c = new Date(b.getFullYear(), b.getMonth(), 0)), a._focusedDate = c
		},
		_moveNextMonth: function () {
			var a = this,
				b = a._focusedDate,
				c = (a._view, new Date(b.getFullYear(), b.getMonth() + 1, b.getDate()));
			c.getDate() != b.getDate() && (c = new Date(b.getFullYear(), b.getMonth() + 2, 0)), a._focusedDate = c
		},
		_movePrevYears: function (a) {
			var b = this,
				c = b._focusedDate,
				d = (b._view, new Date(c.getFullYear() - a, c.getMonth(), c.getDate()));
			d.getMonth() != c.getMonth() && (d = new Date(c.getFullYear() - a, c.getMonth() + 1, 0)), b._focusedDate = d, b._calendarTable.empty()
		},
		_moveNextYears: function (a) {
			var b = this,
				c = b._focusedDate,
				d = (b._view, new Date(c.getFullYear() + a, c.getMonth(), c.getDate()));
			d.getMonth() != c.getMonth() && (d = new Date(c.getFullYear() + a, c.getMonth() + 1, 0)), b._focusedDate = d, b._calendarTable.empty()
		},
		_animationBegins: function (b) {
			var c = this,
				d = "-";
			if (!V("transition")) return void c._calendarTable.empty();
			c._calendarTable.removeClass("sui-scaling"), c._tableWrapper = a("<div>").insertAfter(c.element.find(".sui-header")), c._tableWrapper.width(2 * c.element.width()), c.element.find(".sui-calendar-view").appendTo(c._tableWrapper), c.element.parent().hasClass("sui-rtl") && (b = !b, d = "+"), c._renderTable(b), b || (c._tableWrapper.css("position", "relative"), c._tableWrapper.css("left", d + c.element.width() + "px")), c._tableWrapper.addClass("sui-calendar-animation"), c._enabled = !1;
			var e = !1;
			c._tableWrapper.bind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (a) {
				e = c._removeTempTables(c)
			}), setTimeout(function () {
				e || c._removeTempTables(c)
			}, 1e3)
		},
		_removeTempTables: function (a) {
			return a._tempTable.remove(), a._calendarTable.insertAfter(a.element.find(".sui-header")), a._tableWrapper.unbind("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"), a._tableWrapper.remove(), a._tableWrapper = null, a._enabled = !0, !0
		},
		_animationEnds: function (a) {
			var b = this;
			if (V("transition")) {
				var c = b.element.width();
				a && (c *= -1), b._tableWrapper.css("transform", "translateX(" + c + "px)")
			}
		},
		_moveView: function (a) {
			var b = this;
			switch (b._animationBegins(a), b._view) {
				case D:
					a ? b._moveNextMonth() : b._movePrevMonth(), b._createMonthView();
					break;
				case E:
					a ? b._moveNextYears(1) : b._movePrevYears(1), b._createYearsView();
					break;
				case F:
					a ? b._moveNextYears(10) : b._movePrevYears(10), b._createDecadeView();
					break;
				case G:
					a ? b._moveNextYears(100) : b._movePrevYears(100), b._createcenturyView()
			}
			b._animationEnds(a), b.trigger(O)
		},
		_disablePrev: function (a) {
			var b = this,
				c = b.element.find(".sui-prev");
			a ? (b.preventPrevNavigation = !0, c.addClass("sui-calendar-disabled")) : (b.preventPrevNavigation = !1, c.removeClass("sui-calendar-disabled"))
		},
		_disableNext: function (a) {
			var b = this,
				c = b.element.find(".sui-next");
			a ? (b.preventNextNavigation = !0, c.addClass("sui-calendar-disabled")) : (b.preventNextNavigation = !1, c.removeClass("sui-calendar-disabled"))
		},
		_movePrevHandler: function () {
			var a = this;
			!a.preventPrevNavigation && a._enabled && a._moveView(!1)
		},
		_moveNextHandler: function () {
			var a = this;
			!a.preventNextNavigation && a._enabled && a._moveView(!0)
		},
		_initializeHeader: function () {
			var b = this,
				c = b.options.labels;
			this._header = a('<div class="sui-header"><span unselectable="on"  title="' + c.previous + '" class="sui-prev"><span unselectable="on" class="sui-left-arrow"></span></span><span class="sui-text"></span><span unselectable="on" title="' + c.next + '" class="sui-next"><span unselectable="on" class="sui-right-arrow"></span></span></div>').appendTo(this.element)
		},
		_renderTable: function (b) {
			var c = this,
				d = c.options,
				e = "sui-calendar-view";
			d.hover && d.enabled && (e += " sui-hoverable"), c._calendarTable ? (c.element.find(".sui-calendar-view").off(H, c._calendarSelection), c._calendarSelection = null, b ? (c._tempTable = c.element.find(".sui-calendar-view"), c._calendarTable = a("<table />").width(c.element.width()).addClass(e).insertAfter(c._tempTable)) : (c._tempTable = c.element.find(".sui-calendar-view"), c._calendarTable = a("<table />").width(c.element.width()).addClass(e).insertBefore(c._tempTable))) : c._calendarTable = a("<table />").width(c.element.width()).addClass(e).insertAfter(c.element.find(".sui-header")), !d.readOnly && d.enabled && c.element.find(".sui-calendar-view").on(H, c._calendarSelection = v(c._calendarSelectionHandler, c))
		},
		_render: function () {
			this._renderTable(), this._renderView()
		},
		_renderView: function () {
			var a = this;
			switch (a._view) {
				case D:
					a._createMonthView();
					break;
				case E:
					a._createYearsView();
					break;
				case F:
					a._createDecadeView();
					break;
				case G:
					a._createcenturyView();
					break;
				default:
					a._createMonthView()
			}
		},
		_initializeFooter: function () {
			var b = this,
				c = b.options,
				d = c.footer.footerTemlpate,
				e = t(d) ? d : function (a) {
					return q(d, a)
				};
			a('<div class="sui-footer"><span class="sui-footer-text">' + e.call(b, new Date) + "</span></div>").appendTo(this.element)
		},
		_createMonthView: function () {
			var c = this,
				d = c.options,
				e = c._focusedDate,
				f = c._calendarTable,
				g = b.getCalendarInfo(),
				h = g.days,
				i = g.firstDay,
				j = g.months,
				k = h.namesShort,
				l = [],
				m = h.namesAbbr,
				n = h.names,
				o = d.min,
				p = d.max,
				r = d.dayTemplate,
				s = d.otherMonthDayTemplate,
				u = d.dateTooltipTemplate,
				v = d.outOfRangeDayTemplate,
				w = t(r) ? r : function (a) {
					return q(r, a)
				},
				x = t(s) ? s : function (a) {
					return q(s, a)
				},
				y = t(u) ? u : function (a) {
					return q(u, a)
				},
				z = t(v) ? v : function (a) {
					return q(v, a)
				},
				A = a("<thead />").appendTo(f),
				B = a("<tr />").addClass("sui-week-header").appendTo(A),
				C = "",
				D = 0;
			for (D = i; D < k.length; D++) l.push(k[D]);
			for (var E = 0; E < i; E++) l.push(k[E]);
			for (var F = 0; F < l.length; F++) {
				l[F];
				C += "<th scope='col' abbr='" + m[F] + "' title='" + n[F] + "'>" + l[F] + "</th>"
			}
			B.html(C);
			var G = a('<tbody class="sui-days"/>').appendTo(f),
				H = e.getFullYear(),
				I = e.getMonth(),
				J = new Date(H, I, 1).getDay() - i,
				K = new Date(H, I + 1, 0).getDay() - i,
				L = new Date(H, I + 1, 0).getDate(),
				M = 7;
			c._header.find(".sui-text").text(j.names[I] + " " + H), J <= 0 && (J = 7 - (0 === J ? 0 : i), M = 0);
			var N = -1 * J + 1,
				O = 6 - K + L + M,
				P = 0,
				Q = null,
				R = "";
			for (O - N > 42 && (O -= 7), O - N < 35 && (O += 7), D = N; D <= O; D++) {
				var S = new Date(H, I, D, 0, 0, 0, 0),
					T = "sui-date",
					U = S.getTime() < o.getTime() || S.getTime() > p.getTime() ? " sui-out-of-range" : "",
					V = D < 1 || D > L ? " sui-other-month" : "",
					W = 6 == S.getDay() || 0 === S.getDay() ? " sui-weekend" : "",
					X = U || e.getDate() != D || V ? "" : " sui-focused",
					Y = c._selectedDate && S.getTime() == c._selectedDate.getTime() && !V ? " sui-selected" : "",
					Z = null;
				U ? (Z = z.call(c, {
					date: S,
					day: S.getDate()
				}), V = "", W = "", X = "", Y = "", T = "") : V ? (Z = x.call(c, {
					date: S,
					day: S.getDate()
				}), "" === Z && (V += " sui-no-hover")) : Z = w.call(c, {
					date: S,
					day: S.getDate()
				}), R += "<td title='" + y.call(c, {
					date: S,
					day: S.getDate()
				}) + "' data-value='" + S.getFullYear() + "/" + (S.getMonth() + 1) + "/" + S.getDate() + "' class='" + T + V + W + X + Y + U + "'>" + Z + "</td>", P++, 7 == P && (Q = a('<tr role="row" />').appendTo(G), Q.html(R), P = 0, R = "")
			}
			var $ = new Date(H, I, 1, 0, 0, 0, 0),
				_ = new Date(H, I + 1, 0);
			$.getTime() <= o.getTime() ? c._disablePrev(!0) : c.element.find(".sui-prev").hasClass("sui-calendar-disabled") && c._disablePrev(!1), _.getTime() >= p.getTime() ? c._disableNext(!0) : c.element.find(".sui-next").hasClass("sui-calendar-disabled") && c._disableNext(!1)
		},
		_createYearsView: function () {
			var c = this,
				d = c.options,
				e = c._calendarTable,
				f = c._focusedDate,
				g = b.getCalendarInfo(),
				h = g.months,
				i = h.names,
				j = h.namesAbbr,
				k = a('<tbody class="sui-months"/>').appendTo(e),
				l = null,
				m = "",
				n = d.min,
				o = d.max,
				p = "",
				q = 0;
			c._header.find(".sui-text").text(f.getFullYear());
			for (var r = 0; r < j.length; r++) {
				var s = new Date(f.getFullYear(), r, f.getDate(), 0, 0, 0, 0),
					t = f.getMonth() == r ? " sui-focused" : "";
				d.view.depth == E && (p = c._selectedDate && s.getTime() == c._selectedDate.getTime() ? " sui-selected" : "");
				var u = "",
					v = i[r],
					w = j[r],
					x = "sui-month";
				(s.getFullYear() <= n.getFullYear() && s.getMonth() < n.getMonth() || s.getFullYear() >= o.getFullYear() && s.getMonth() > o.getMonth()) && (u = " sui-out-of-range"), u && (t = "", p = "", v = w = "&nbsp;", x = ""), m += "<td data-value='" + r + "' class='" + x + t + p + u + "' title='" + v + "'>" + w + "</td>", q++, 4 == q && (l = a("<tr />").appendTo(k), l.html(m), q = 0, m = "")
			}
			f.getFullYear() <= n.getFullYear() ? c._disablePrev(!0) : c.element.find(".sui-prev").hasClass("sui-calendar-disabled") && c._disablePrev(!1), f.getFullYear() >= o.getFullYear() ? c._disableNext(!0) : c.element.find(".sui-next").hasClass("sui-calendar-disabled") && c._disableNext(!1)
		},
		_createDecadeView: function () {
			var b = this,
				c = b.options,
				d = b._calendarTable,
				e = b._focusedDate,
				f = e.getFullYear(),
				g = f % 10,
				h = a('<tbody class="sui-decade"/>').appendTo(d),
				i = null,
				j = "",
				k = 0,
				l = c.min,
				m = c.max,
				n = f - g - 1,
				o = "",
				p = f + (10 - g);
			b._header.find(".sui-text").text(n + 1 + "-" + (p - 1));
			for (var q = n; q <= p; q++) {
				var r = new Date(q, e.getMonth(), e.getDate(), 0, 0, 0, 0),
					s = q == n || q == p ? " sui-other-year" : "",
					t = f == q ? " sui-focused" : "",
					u = "",
					v = q,
					w = "sui-year";
				(r.getFullYear() < l.getFullYear() || r.getFullYear() > m.getFullYear()) && (u = " sui-out-of-range"), c.view.depth == F && (o = b._selectedDate && r.getTime() == b._selectedDate.getTime() ? " sui-selected" : ""), u && (s = "", t = "", o = "", w = "", v = "&nbsp;"), j += "<td data-value='" + v + "' class='" + w + s + t + o + u + "' title='" + v + "'>" + v + "</td>", k++, 4 == k && (i = a("<tr />").appendTo(h), i.html(j), k = 0, j = "")
			}
			n < l.getFullYear() ? b._disablePrev(!0) : b.element.find(".sui-prev").hasClass("sui-calendar-disabled") && b._disablePrev(!1), p > m.getFullYear() ? b._disableNext(!0) : b.element.find(".sui-next").hasClass("sui-calendar-disabled") && b._disableNext(!1)
		},
		_createcenturyView: function () {
			var b, c = this,
				d = c.options,
				e = c._calendarTable,
				f = c._focusedDate,
				g = f.getFullYear(),
				h = g % 100,
				i = a('<tbody class="sui-decade"/>').appendTo(e),
				j = null,
				k = "",
				l = "",
				m = d.min,
				n = d.max,
				o = 0,
				p = g - h - 10,
				q = p + 99 + 10 + 2;
			c._header.find(".sui-text").text(p + 10 + "-" + (q - 2));
			for (var r = p; r < q; r += 10) {
				var s = r == p || r == q - 1 ? " sui-other-years" : "",
					t = new Date(r, f.getMonth(), f.getDate(), 0, 0, 0, 0),
					u = new Date(r + 10, f.getMonth(), f.getDate(), 0, 0, 0, 0),
					v = "",
					w = g >= r && g < r + 10 ? " sui-focused" : "",
					x = "sui-years",
					y = r + " - " + (r + 9),
					z = r;
				(t.getFullYear() < m.getFullYear() && u.getFullYear() <= m.getFullYear() || t.getFullYear() > n.getFullYear()) && (v = " sui-out-of-range"), d.view.depth == G && (l = c._selectedDate && c._selectedDate.getFullYear() >= t.getFullYear() && c._selectedDate.getFullYear() < t.getFullYear() + 10 ? " sui-selected" : ""), v && (s = "", w = "", l = "", x = "", b = z = y = "&nbsp;"), k += "<td data-value='" + z + "' class='" + x + s + w + l + v + "' title='" + y + "'>" + y + "</td>", o++, 4 == o && (j = a("<tr />").appendTo(i), j.html(k), o = 0, k = "")
			}
			p < m.getFullYear() ? c._disablePrev(!0) : c.element.find(".sui-prev").hasClass("sui-calendar-disabled") && c._disablePrev(!1), q > n.getFullYear() ? c._disableNext(!0) : c.element.find(".sui-next").hasClass("sui-calendar-disabled") && c._disableNext(!1)
		},
		value: function () {
			var a = this,
				b = a.options,
				c = b.min,
				d = b.max,
				e = [].slice.call(arguments);
			if (!(e.length > 0)) return a._selectedDate;
			var f = e[0];
			if (null == f || "" === f || B(f)) a._selectedDate = null, a._focusedDate = b.focused;
			else {
				if (f.getTime() < c.getTime() || f.getTime() > d.getTime()) return;
				a._focusedDate = a._selectedDate = new Date(f.getFullYear(), f.getMonth(), f.getDate())
			}
			a._calendarTable.empty(), a._renderView()
		},
		enabled: function () {
			var a = this,
				b = a.options,
				c = [].slice.call(arguments);
			if (!(c.length > 0)) return a._enabled;
			var d = c[0];
			d ? (b.hover && a._calendarTable.addClass("sui-hoverable"), a.element.removeClass("sui-calendar-disabled")) : (a._calendarTable.removeClass("sui-hoverable"), a.element.addClass("sui-calendar-disabled")), a._enabled = d
		},
		previous: function () {
			var a = this;
			a.preventPrevNavigation || a._moveView(!1)
		},
		next: function () {
			var a = this;
			a.preventNextNavigation || a._moveView(!0)
		},
		view: function () {
			var a = this,
				b = [].slice.call(arguments);
			if (!(b.length > 0)) return a._view;
			var c = b[0];
			c != a._view && (a._view = c, a._calendarTable.empty(), a._renderView())
		},
		focused: function () {
			var a = this,
				b = [].slice.call(arguments);
			if (!(b.length > 0)) return a._focusedDate;
			a._focusedDate = b[0];
			b.length > 1 && a._view != b[1] && (a._view = b[1]), a._calendarTable.empty(), a._renderView()
		},
		visible: function () {
			var a = this,
				b = (a.options, [].slice.call(arguments));
			if (!(b.length > 0)) return !a.element.hasClass("sui-hidden") && "none" != a.element.css("display");
			var c = b[0];
			c ? a.element.removeClass("sui-hidden") : a.element.addClass("sui-hidden")
		},
		destroy: function () {
			var b = this,
				c = b.options.cls,
				d = a(b.element);
			d.removeClass("sui-calendar sui-read-only sui-calendar-disabled" + (c ? " " + c : "")), b._focusedDate = null, b._header = null, b._calendarTable = null, b._view = null, b._enabled = null, b._selectedDate = null, b._tempTable = null, b._tableWrapper = null, d.find(".sui-prev").off(H, b._movePrev), b._movePrev = null, d.find(".sui-next").off(H, b._moveNext), b._moveNext = null, d.find(".sui-text").off(H, b._changeViewDepth), b._changeViewDepth = null, d.find(".sui-footer").off(H, b._selectToday), b._selectToday = null, d.find(".sui-calendar-view").off(H, b._calendarSelection), b._calendarSelection = null, d.off(L, b._selectStart), b._selectStart = null, d.empty(), o.fn.destroy.call(b)
		}
	}), f.defaults = e, b.ui.plugin("Calendar", f), g = {
		calendar: null,
		format: "{0:MM/dd/yyyy}",
		textTemplate: "{0:MM/dd/yyyy}",
		value: null,
		parseFormats: ["MM/dd/yyyy"],
		openOnFocus: !1,
		showButton: !0,
		editable: !0,
		enabled: !0,
		messages: {
			calendarIconTooltip: "",
			buttonText: "select"
		},
		min: new Date(1900, 0, 1),
		max: new Date(2099, 11, 31),
		events: {}
	}, h = o.extend({
		init: function (b, c) {
			o.fn.init.apply(this, arguments);
			var d = this,
				e = d.options,
				f = e.value,
				g = e.showButton ? "" : " sui-no-button";
			z && (g += " sui-ie8");
			var h = a(e.isMonthYearPicker ? "<span class='sui-monthyearpicker" + g + "' />" : e.isTimePicker ? "<span class='sui-timepicker" + g + "' />" : e.isDateTimePicker ? "<span class='sui-datetimepicker" + g + "' />" : "<span class='sui-datepicker" + g + "' />");
			if (d._selectedDate = null, a(b).after(h), d._wrapper = h, d._visibleInput = a("<input class='sui-picker-input' type='text' />").appendTo(h), e.showButton) {
				var i = e.messages.calendarIconTooltip;
				e.isTimePicker && (i = e.messages.timeIconTooltip), d._iconWrapper = a("<span class='sui-icon-wrapper' unselectable='on' title='" + i + "' />").appendTo(h);
				a('<span class="sui-sprite sui-calendar-icon" unselectable="on">' + e.messages.buttonText + "</span>").appendTo(d._iconWrapper);
				e.isDateTimePicker && (d._timeIconWrapper = a("<span class='sui-time-icon-wrapper' unselectable='on' title='" + e.messages.timeIconTooltip + "' />").appendTo(h), a('<span class="sui-sprite sui-time-icon" unselectable="on">' + e.messages.buttonText + "</span>").appendTo(d._timeIconWrapper))
			}
			if (a(b).css(T, U).appendTo(h), d._enabled = e.enabled, e.enabled || (h.addClass("sui-disabled"), d._visibleInput.on(K, d._visibleInputFocused = v(d._visibleInputFocusedHandler, d))), d._attachEvents(), !f) {
				var j = d._value();
				j && (f = j)
			}
			f && (C(f) && (f = new Date(f)), e.isMonthYearPicker ? d._selectedDate = new Date(f.getFullYear(), f.getMonth(), 1) : d._selectedDate = f, d._changeInputsValues(f))
		},
		_changeInputsValues: function (a) {
			var b = this,
				c = b.options,
				d = c.format,
				e = c.textTemplate,
				f = t(d) ? d : function (a) {
					return q(d, a.date)
				};
			b._value(f.call(b, {
				date: a
			}));
			var g = t(e) ? e : function (a) {
				return q(e, a.date)
			};
			b._visibleInput.get(0).value = g.call(b, {
				date: a
			}), c.isMonthYearPicker ? b._selectedDate = new Date(a.getFullYear(), a.getMonth(), 1) : b._selectedDate = a
		},
		_attachEvents: function () {
			var b = this,
				c = b.options;
			c.showButton && (c.isTimePicker ? b._iconWrapper.on(H, b._toggleListBoxVisibility = v(b._toggleListBoxVisibilityHandler, b)) : c.isDateTimePicker ? (b._timeIconWrapper.on(H, b._toggleListBoxVisibility = v(b._toggleListBoxVisibilityHandler, b)), b._iconWrapper.on(H, b._toggleCalendarVisibility = v(b._toggleCalendarVisibilityHandler, b))) : b._iconWrapper.on(H, b._toggleCalendarVisibility = v(b._toggleCalendarVisibilityHandler, b))), b._visibleInput.on(J, b._visibleInputKeyPress = v(b._visibleInputKeyPressHandler, b)), a(s).on(I + ".shieldDatePicker" + b.getInstanceId(), v(b._hidePopupHandler, b)), b._visibleInput.on(K, b._visibleInputFocused = v(b._visibleInputFocusedHandler, b)), b._visibleInput.on(S, b._visibleInputBlured = v(b._visibleInputBluredHandler, b)), b._visibleInput.on(N, b._visibleInputChanged = v(b._visibleInputChangedHandler, b))
		},
		_visibleInputChangedHandler: function () {
			var a = this,
				b = a.options,
				c = b.format,
				d = b.min,
				e = b.max;
			if (a._enabled) {
				a._selectedDate = r(a._visibleInput.get(0).value, b.parseFormats), a._selectedDate && (a._selectedDate.getTime() > e || a._selectedDate.getTime() < d) && (b.isTimePicker ? a._selectedDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), a._selectedDate.getHours(), a._selectedDate.getMinutes(), a._selectedDate.getSeconds()) : a._selectedDate = null), null != a._selectedDate && (a._selectedDate && a.calendar && a.calendar.value(a._selectedDate), a._selectedDate && a.listBox && a._selectValueInListBox(a._selectedDate));
				var f = t(c) ? c : function (a) {
					return q(c, a.date)
				};
				a.element.get(0).value = f.call(a, {
					date: a._selectedDate
				}), a.trigger(N)
			}
		},
		_visibleInputFocusedHandler: function (a) {
			var b = this,
				c = b.options;
			return b._enabled ? (c.isMonthYearPicker ? b._wrapper.addClass("sui-monthyearpicker-focus") : c.isTimePicker ? b._wrapper.addClass("sui-timepicker-focus") : c.isDateTimePicker ? b._wrapper.addClass("sui-datetimepicker-focus") : b._wrapper.addClass("sui-datepicker-focus"), void(c.openOnFocus && (!b._shouldShowPopup && b.calendar || (b._toggleCalendarVisibilityHandler(), b._shouldShowPopup = !1)))) : void a.target.blur()
		},
		_visibleInputBluredHandler: function () {
			var a = this,
				b = a.options,
				c = a._wrapper;
			b.isMonthYearPicker ? c.removeClass("sui-monthyearpicker-focus") : b.isTimePicker ? c.removeClass("sui-timepicker-focus") : b.isDateTimePicker ? c.removeClass("sui-datetimepicker-focus") : c.removeClass("sui-datepicker-focus")
		},
		_visibleInputKeyPressHandler: function (a) {
			var b = this,
				c = b.options;
			if (b._enabled) {
				if (c.editable === !1) return a.preventDefault(), void a.stopPropagation();
				var d = a.keyCode || a.charCode;
				13 != d && 9 != d && 27 != d || (b._shouldShowPopup = !0, b.calendar && b.calendar.element.css(T) != U && (b.calendar.element.css(T, U), b.trigger(R)))
			}
		},
		_hidePopupHandler: function (b) {
			var c, d = this;
			if (d.listBox) {
				if (d._visibleInput.get(0) == b.target || d._iconWrapper && d._iconWrapper.get(0) == b.target || d._iconWrapper && d._iconWrapper.children(0).get(0) == b.target || d._timeIconWrapper && d._timeIconWrapper.get(0) == b.target || d._timeIconWrapper && d._timeIconWrapper.children(0).get(0) == b.target) return;
				d._popupIsOver ? (c = d.listBox.element.parent().height(), d.listBox.element.parent().animate({
					height: 0,
					top: d._visibleInput.offset().top
				}, 150, function () {
					a(this).css(T, U), a(this).css("height", c)
				})) : d.listBox.element.parent().slideUp(150, function () {}), d._shouldShowPopup = !0
			}
			if (d.calendar) {
				if (d._visibleInput.get(0) == b.target || d._iconWrapper && d._iconWrapper.get(0) == b.target || d._iconWrapper && d._iconWrapper.children(0).get(0) == b.target) return;
				d._popupIsOver ? (c = d.calendar.element.height(), d.calendar.element.animate({
					height: 0,
					top: d._visibleInput.offset().top
				}, 150, function () {
					a(this).css(T, U), a(this).css("height", c)
				})) : d.calendar.element.slideUp(150, function () {}), d._shouldShowPopup = !0
			}
		},
		_toggleListBoxVisibilityHandler: function () {
			var a = this,
				b = a.options,
				c = b.listBox;
			if (a._enabled) {
				if (!a.listBox) {
					new W({
						listbox: c,
						parent: a,
						min: b.min,
						max: b.max,
						interval: b.interval,
						textTemplate: b.isDateTimePicker ? b.timeFormat : b.textTemplate
					});
					a.listBox.on(M, a._listBoxChange = v(a._listBoxChangeHandler, a)), a.listBox.element.on(I, a._popupMouseDown = v(a._popupMouseDownHandler, a)), a._selectedDate && a._selectValueInListBox(a._selectedDate)
				}
				b.isDateTimePicker && (a.calendar && a.calendar.element.css(T) != U && (a.calendar.element.slideUp(150, function () {}), a._shouldShowPopup = !0), a._toggleTimePopup = !0), a._shouldShowPopup ? a._showPopup() : a._hidePopup(), a._shouldShowPopup ? a._shouldShowPopup = !1 : a._shouldShowPopup = !0
			}
		},
		_listBoxChangeHandler: function (c) {
			var d = this;
			if (d.options.isDateTimePicker) {
				var e = d._selectedDate,
					f = c.item;
				e ? d._selectedDate = new Date(e.getFullYear(), e.getMonth(), e.getDate(), f.getHours(), f.getMinutes(), f.getSeconds()) : (e = new Date, d._selectedDate = new Date(e.getFullYear(), e.getMonth(), e.getDate(), f.getHours(), f.getMinutes(), f.getSeconds()))
			} else d._selectedDate = c.item;
			var g = d.options,
				h = g.isDateTimePicker ? b.format(g.timeFormat, d._selectedDate) : b.format(g.textTemplate, d._selectedDate),
				i = d.listBox.element.find(".sui-listbox-item"),
				j = 0;
			for (j; j < i.length; j++)
				if (i[j].innerHTML == h) {
					d._selectedElement = a(i[j]);
					break
				}
			d._changeInputsValues(d._selectedDate), d._hidePopup(), d._shouldShowPopup = !0, d.trigger(N)
		},
		_toggleCalendarVisibilityHandler: function () {
			var c = this,
				d = c.options,
				e = d.calendar;
			c._enabled && (c.calendar || (b.ui.Calendar && (u.object(e) && e instanceof b.ui.Calendar ? c.calendar = e : (c._wrapper.parent().hasClass("sui-rtl") ? (c._calendarWrapper = a("<div style='display: none;' />").appendTo(s.body), c._calendarWrapper.wrap("<span class='sui-rtl'></span>")) : c._calendarWrapper = a("<div style='display: none;' />").appendTo(s.body), c.calendar = new b.ui.Calendar(c._calendarWrapper, A({}, e, {
				min: d.min,
				max: d.max
			}))), c._shouldShowPopup = !0), c.calendar.on(N, c._calendarChange = v(c._calendarChangeHandler, c)), c.calendar.element.on(I, c._popupMouseDown = v(c._popupMouseDownHandler, c)), c._selectedDate && c.calendar.value(c._selectedDate)), d.isDateTimePicker && (c.listBox && c.listBox.element.parent().css(T) != U && (c.listBox.element.parent().slideUp(150, function () {}), c._shouldShowPopup = !0), c._toggleTimePopup = !1), c._shouldShowPopup ? c._showPopup() : c._hidePopup(), c._shouldShowPopup ? c._shouldShowPopup = !1 : c._shouldShowPopup = !0)
		},
		_calendarChangeHandler: function () {
			var a, b = this,
				c = b.options;
			c.isMonthYearPicker ? (a = b.calendar.value(), b._selectedDate = new Date(a.getFullYear(), a.getMonth(), 1)) : c.isDateTimePicker ? (a = b.calendar.value(), b._selectedDate ? b._selectedDate = new Date(a.getFullYear(), a.getMonth(), a.getDate(), b._selectedDate.getHours(), b._selectedDate.getMinutes(), b._selectedDate.getSeconds()) : b._selectedDate = b.calendar.value()) : b._selectedDate = b.calendar.value(), b._changeInputsValues(b._selectedDate), b._hidePopup(), b._shouldShowPopup = !0, b.trigger(N)
		},
		_calculateLeftOffsetWhenRtl: function () {
			var a, b = this,
				c = b.options,
				d = (b._wrapper.offset(), 0);
			return c.isTimePicker || c.isDateTimePicker && b._toggleTimePopup ? (a = b._visibleInput.offset().left - (b.listBox.element.parent().width() - b._visibleInput.width()), a > 0 && (d = a)) : (a = b._visibleInput.offset().left - (b.calendar.element.width() - b._visibleInput.width()), a > 0 && (d = a)), d
		},
		_showPopup: function () {
			var b, d = this,
				e = d.options,
				f = d._wrapper.offset(),
				g = f.top - a(s).scrollTop(),
				h = d._wrapper.height(),
				i = a(c).height(),
				j = f.top + h,
				k = f.left;
			d._wrapper.parent().hasClass("sui-rtl") && (k = d._calculateLeftOffsetWhenRtl()), b = e.isTimePicker || e.isDateTimePicker && d._toggleTimePopup ? d.listBox.element.parent().height() : d.calendar.element.height(), i < b + g + h ? j = f.top - b - 1 : j++, (j < 0 || a(s).scrollTop() > j) && (j = f.top + h + 1), d._visibleInput.offset().top > j ? d._popupIsOver = !0 : d._popupIsOver = !1, e.isTimePicker || e.isDateTimePicker && d._toggleTimePopup ? d._popupIsOver ? (d.listBox.element.parent().css({
				position: "absolute",
				zIndex: 10002,
				top: j + b,
				left: k,
				height: 0,
				display: ""
			}), d.listBox.element.parent().animate({
				height: b,
				top: j + 2
			}, 150)) : (d.listBox.element.parent().css({
				position: "absolute",
				top: j,
				left: k,
				zIndex: 10002
			}), d.listBox.element.parent().slideDown(150, function () {
				if (d._selectedElement) {
					var a = Math.abs(d._selectedElement.get(0).offsetTop),
						b = d._selectedElement.parent().scrollTop();
					a > d._selectedElement.parent().get(0).scrollTopMax && (a = d._selectedElement.parent().get(0).scrollTopMax), b + d.listBox.element.height() > a && b < a || d.listBox.element.scrollTop(a)
				}
			})) : d._popupIsOver ? (d.calendar.element.css({
				position: "absolute",
				zIndex: 10002,
				top: j + b,
				left: k,
				height: 0,
				display: ""
			}), d.calendar.element.animate({
				height: b,
				top: j
			}, 150)) : (d.calendar.element.css({
				position: "absolute",
				zIndex: 10002,
				top: j,
				left: k
			}), d.calendar.element.slideDown(150, function () {})), d.trigger(Q)
		},
		_hidePopup: function () {
			var b, c = this,
				d = c.options;
			d.isTimePicker || d.isDateTimePicker && c._toggleTimePopup ? c.listBox && c.listBox.element.parent().css(T) != U && (c._popupIsOver ? (b = c.listBox.element.parent().height(), c.listBox.element.parent().animate({
				height: 0,
				top: c._visibleInput.offset().top
			}, 150, function () {
				a(this).css(T, U), a(this).css("height", b)
			})) : c.listBox.element.parent().slideUp(150, function () {})) : c.calendar && c.calendar.element.css(T) != U && (c._popupIsOver ? (b = c.calendar.element.height(), c.calendar.element.animate({
				height: 0,
				top: c._visibleInput.offset().top
			}, 150, function () {
				a(this).css(T, U), a(this).css("height", b)
			})) : c.calendar.element.slideUp(150, function () {})), c.trigger(R)
		},
		_popupMouseDownHandler: function (a) {
			a.preventDefault(), a.stopPropagation()
		},
		_selectValueInListBox: function (c) {
			var d = this;
			if (d.listBox) {
				var e, f = d.options,
					g = f.isDateTimePicker ? b.format(f.timeFormat, c) : b.format(f.textTemplate, c),
					h = d.listBox.element.find(".sui-listbox-item");
				for (e = 0; e < h.length; e++)
					if (h[e].innerHTML == g) {
						d._selectedElement = a(h[e]);
						break
					}
				d.listBox.selected(e, !0)
			}
		},
		enabled: function () {
			var a = this,
				b = (a.options, [].slice.call(arguments));
			if (!(b.length > 0)) return a._enabled;
			var c = b[0];
			a._enabled = c, c ? (a._visibleInputFocused && (a._visibleInput.off(K, a._visibleInputFocused), a._visibleInputFocused = null), a._wrapper.removeClass("sui-disabled")) : (a._wrapper.addClass("sui-disabled"), a._visibleInput.on(K, a._visibleInputFocused = v(a._visibleInputFocusedHandler, a)))
		},
		visible: function () {
			var a = this,
				b = (a.options, [].slice.call(arguments));
			if (!(b.length > 0)) return !a._wrapper.hasClass("sui-hidden") && "none" != a._wrapper.css("display");
			var c = b[0];
			c ? a._wrapper.removeClass("sui-hidden") : a._wrapper.addClass("sui-hidden")
		},
		focus: function () {
			a(this._visibleInput).focus()
		},
		_value: function () {
			return this.element.attr.apply(this.element, ["value"].concat([].slice.call(arguments)))
		},
		value: function () {
			var a = this,
				b = a.options,
				c = b.min,
				d = b.max,
				e = [].slice.call(arguments);
			if (!(e.length > 0)) return a._selectedDate;
			var f = e[0];
			return null == f || "" === f || B(f) ? (a._visibleInput.get(0).value = "", a._selectedDate = null, a.calendar && a.calendar.value(null), void((b.isTimePicker || b.isDateTimePicker) && a.listBox && a.listBox.clearSelection())) : void(!b.isTimePicker && (f.getTime() < c.getTime() || f.getTime() > d.getTime()) || (a._changeInputsValues(f),
				a.calendar && a.calendar.value(f), a._selectedDate = f, (b.isTimePicker || b.isDateTimePicker) && a._selectValueInListBox(f)))
		},
		close: function () {
			var a = this,
				b = [].slice.call(arguments);
			a.options.isDateTimePicker ? b.length > 0 && ("calendar" == b[0] && (a._shouldShowPopup = !1, a._toggleCalendarVisibilityHandler()), "timeview" == b[0] && (a._shouldShowPopup = !1, a._toggleListBoxVisibilityHandler())) : (a._shouldShowPopup = !1, a._toggleCalendarVisibilityHandler())
		},
		open: function () {
			var a = this,
				b = [].slice.call(arguments);
			a.options.isDateTimePicker ? b.length > 0 && ("calendar" == b[0] && (a._shouldShowPopup = !0, a._toggleCalendarVisibilityHandler()), "timeview" == b[0] && (a._shouldShowPopup = !0, a._toggleListBoxVisibilityHandler())) : (a._shouldShowPopup = !0, a._toggleCalendarVisibilityHandler())
		},
		destroy: function () {
			var b = this;
			b.options.isTimePicker ? (b._iconWrapper.off(H, b._toggleListBoxVisibility), b._toggleListBoxVisibility = null) : b.options.isDateTimePicker ? (b._iconWrapper.off(H, b._toggleListBoxVisibility), b._toggleListBoxVisibility = null, b._timeIconWrapper = null, b._iconWrapper.off(H, b._toggleCalendarVisibility), b._toggleCalendarVisibility = null) : (b._iconWrapper.off(H, b._toggleCalendarVisibility), b._toggleCalendarVisibility = null), b._iconWrapper = null, b._popupIsOver = null, a(s).off(I + ".shieldDatePicker" + b.getInstanceId()), a(b.element).css(T, "").insertAfter(b._wrapper), b._wrapper.remove(), b._wrapper = null, b._destroyCalendar(), b._destroyListBox(), b._shouldShowPopup = null, b._visibleInput.off(K, b._visibleInputFocused), b._visibleInput.off(N, b._visibleInputChanged), b._visibleInput.off(S, b._visibleInputBlured), b._visibleInputFocused = null, b._visibleInputChanged = null, b._visibleInputBlured = null, b._visibleInput = null, b._selectedDate = null, b._enabled = null, o.fn.destroy.call(b)
		},
		_destroyCalendar: function () {
			var a = this;
			a.calendar && (a.calendar.off(N, a._calendarChange), a._calendarChange = null, a.calendar.element.off(I, a._popupMouseDown), a._popupMouseDown = null, a.calendar.destroy(), a.calendar = null, a._calendarWrapper && a._calendarWrapper.remove())
		},
		_destroyListBox: function () {
			var a = this;
			a.listBox && (a._selectedElement = null, a.listBox.off(N, a._listBoxChange), a._listBoxChange = null, a.listBox.destroy(), a.listBox = null, a._listBoxWrapper && (a._listBoxWrapper.remove(), a._listBoxWrapper = null))
		}
	}), h.defaults = g, b.ui.plugin("DatePicker", h), j = A({}, g, {
		isMonthYearPicker: !0,
		calendar: {
			view: {
				depth: E,
				start: E
			}
		},
		format: "{0:MMMM yyyy}",
		textTemplate: "{0:MMMM yyyy}",
		parseFormats: ["MMMM yyyy"]
	}), i = h.extend({
		init: function (a, b) {
			b && (b.isMonthYearPicker = !0), h.prototype.init.call(this, a, b)
		}
	}), i.defaults = j, b.ui.plugin("MonthYearPicker", i), l = A({}, g, {
		isTimePicker: !0,
		listBox: null,
		format: "{0:h:mm tt}",
		textTemplate: "{0:h:mm tt}",
		parseFormats: ["h:mm tt"],
		interval: 30,
		min: new Date(1900, 0, 1, 0, 0, 0),
		max: new Date(1900, 0, 1, 0, 0, 0),
		messages: {
			timeIconTooltip: "",
			buttonText: "select"
		}
	}), k = h.extend({
		init: function (a, b) {
			b && (b.isTimePicker = !0), h.prototype.init.call(this, a, b)
		}
	}), k.defaults = l, b.ui.plugin("TimePicker", k), n = A({}, g, {
		isDateTimePicker: !0,
		listBox: null,
		format: "{0:MM/dd/yyyy h:mm tt}",
		textTemplate: "{0:MM/dd/yyyy h:mm tt}",
		parseFormats: ["MM/dd/yyyy h:mm tt"],
		interval: 30,
		min: new Date(1900, 0, 1, 0, 0, 0),
		max: new Date(2099, 11, 31, 0, 0, 0),
		messages: {
			calendarIconTooltip: "",
			timeIconTooltip: "",
			buttonText: "select"
		},
		timeFormat: "{0:h:mm tt}"
	}), m = h.extend({
		init: function (a, b) {
			b && (b.isDateTimePicker = !0), h.prototype.init.call(this, a, b)
		}
	}), m.defaults = n, b.ui.plugin("DateTimePicker", m)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g, h = b.ui.Widget,
		i = b.Class,
		j = document,
		k = b.is,
		l = (b.get, b.format, b.to["int"]),
		m = (Math.abs, a.each, a.proxy),
		n = (a.extend, a.map, k.undefined),
		o = c.opera,
		p = navigator.userAgent,
		q = /msie/i.test(p) && !o,
		r = (q && 7 === j.documentMode, "keydown"),
		s = "click",
		t = "mousedown",
		u = "change",
		v = "select",
		w = "cancel",
		x = "display",
		y = "none",
		z = function (a) {
			return k.string(a) ? a.replace(/^\s+/, "").replace(/\s+$/, "") : a
		};
	e = {
		cls: d,
		palette: "basic",
		basicPalette: {
			columns: 10,
			tileSize: {
				width: 16,
				height: 16
			},
			tileBorderWidth: 0,
			palette: ["#FFFFFF", "#FFCCCC", "#FFCC99", "#FFFF99", "#FFFFCC", "#99FF99", "#99FFFF", "#CCFFFF", "#CCCCFF", "#FFCCFF", "#CCCCCC", "#FF6666", "#FF9966", "#FFFF66", "#FFFF33", "#66FF99", "#33FFFF", "#66FFFF", "#9999FF", "#FF99FF", "#BBBBBB", "#FF0000", "#FF9900", "#FFCC66", "#FFFF00", "#33FF33", "#66CCCC", "#33CCFF", "#6666CC", "#CC66CC", "#999999", "#CC0000", "#FF6600", "#FFCC33", "#FFCC00", "#33CC00", "#00CCCC", "#3366FF", "#6633FF", "#CC33CC", "#666666", "#990000", "#CC6600", "#CC9933", "#999900", "#009900", "#339999", "#3333FF", "#6600CC", "#993399", "#333333", "#660000", "#993300", "#996633", "#666600", "#006600", "#336666", "#000099", "#333399", "#663366", "#000000", "#330000", "#663300", "#663333", "#333300", "#003300", "#003333", "#000066", "#330099", "#330033"]
		},
		advancedPalette: {
			type: "hex",
			buttons: !0,
			messages: {
				apply: "Apply",
				cancel: "Cancel"
			}
		},
		displayInline: !1,
		showLetter: !1,
		value: d,
		valueTemplate: function (a) {
			return a ? a.hex ? a.hex() : a.toRGB().hex() : null
		}
	}, f = h.extend({
		init: function (b, c) {
			h.fn.init.apply(this, arguments);
			var d, e = this,
				f = e.options,
				g = f.cls,
				i = k.defined(f.value) ? f.value : e._value();
			if (arguments.length > 1 && (c = arguments[1], c.basicPalette && c.basicPalette.palette && (f.basicPalette.palette = c.basicPalette.palette)), e.element.css(x, y), e._enabled = !0, e.currentColor = new A({
					color: i
				}), f.displayInline) e._buildPalette(), g && e._picker.addClass(g);
			else {
				if (e._picker = d = a('<span class="sui-color-picker-dropdown" tabindex="0"><span class="sui-color-cell sui-unselectable" unselectable="on">&nbsp;</span><span class="sui-caret-container sui-unselectable" unselectable="on"><span class="sui-caret" unselectable="on"></span></span></span>').insertAfter(e.element), g && e._picker.addClass(g), f.showLetter) {
					var l = d.find(".sui-color-cell");
					a('<span class="sui-tool-letter">A<span class="sui-selected-color"></span></span>').appendTo(l), d.find(".sui-selected-color").css("background-color", e.currentColor.color.cssa())
				} else d.find(".sui-color-cell").css("background-color", e.currentColor.color.cssa());
				d.on(s, e._pickerClicked = m(e._pickerClickedHandler, e)), a(j).on(t + ".shieldColorPicker" + e.getInstanceId(), m(e._hidePopup, e))
			}
			e.currentColor.color.cssa ? e._oldColor = e.currentColor.color.cssa() : e._oldColor = e.currentColor.color.toRGB().cssa(), e._changed()
		},
		hidePalette: function () {
			this._hidePopup({})
		},
		hide: function () {
			var b = this;
			b.options.displayInline ? a(b.wrapperDiv).hide() : (a(b._picker).hide(), b._hidePopup({}))
		},
		show: function () {
			var b = this;
			b.options.displayInline ? a(b.wrapperDiv).hide() : a(b._picker).show()
		},
		isVisible: function () {
			var b = this;
			return b.options.displayInline ? a(b.wrapperDiv).is(":visible") : a(b._picker).is(":visible")
		},
		_changed: function () {
			var a = this;
			a._value(b.format.call(a, a.options.valueTemplate, a.currentColor.color))
		},
		_value: function () {
			return this.element.attr.apply(this.element, ["value"].concat([].slice.call(arguments)))
		},
		_buildPalette: function () {
			var a = this;
			"basic" == a.options.palette ? a._buildBasicPalette() : (a._buildAdvancedPalette(), a._changeAdvancedPaletteColor())
		},
		_changeAdvancedPaletteColor: function () {
			var a = this,
				b = a.currentColor.color.toHSV();
			a.wrapperDiv && (a._hue = b.hue, a._isHsl ? (b = a.currentColor.color.toHSL(), a._XY(a, {
				pointer: a.wrapperDiv.find(".sui-color-palette .pointer").get(0),
				x: b.hue,
				y: 1 - b.saturation
			}), a._Z(a, 1 - b.lightness, a.wrapperDiv.find(".sui-color-scale .pointer").get(0))) : (a._XY(a, {
				pointer: a.wrapperDiv.find(".sui-color-palette .pointer").get(0),
				x: b.saturation,
				y: 1 - b.value
			}), a._Z(a, b.hue, a.wrapperDiv.find(".sui-color-scale .pointer").get(0))))
		},
		_pickerClickedHandler: function () {
			var a = this;
			a.wrapperDiv || a._buildPalette(), a._showPopup()
		},
		_showPopup: function () {
			var b = this,
				d = b._picker.offset(),
				e = d.top - a(j).scrollTop(),
				f = b._picker.height(),
				g = a(c).height();
			if ("advanced" === b.options.palette && (b.currentColor.color.cssa ? b._oldColor = b.currentColor.color.cssa() : b._oldColor = b.currentColor.color.toRGB().cssa()), !b.wrapperDiv || b.wrapperDiv.css(x) == y) {
				b._popupIsOver = !1;
				var h = d.top + f + 1,
					i = d.left,
					k = b.wrapperDiv.height();
				g < k + e + f ? h = d.top - k - 1 : h++, (h < 0 || a(j).scrollTop() > h) && (h = d.top + f + 1), d.top > h ? b._popupIsOver = !0 : b._popupIsOver = !1, b.wrapperDiv || this._buildPalette(), b._popupIsOver ? (b.wrapperDiv.css({
					position: "absolute",
					zIndex: 10002,
					top: h + k,
					left: i,
					height: 0,
					display: ""
				}), b.wrapperDiv.animate({
					height: k,
					top: h
				}, 150)) : (b.wrapperDiv.css({
					position: "absolute",
					zIndex: 10002,
					top: h - 1,
					left: i
				}), b.wrapperDiv.slideDown(150, function () {}))
			}
		},
		_hidePopup: function (b) {
			var c, d = this,
				e = d.options,
				f = a(b.target);
			if (("basic" == e.palette || !(f.hasClass("sui-colorpicker") || f.parents(".sui-colorpicker").length > 0)) && d.wrapperDiv && d.wrapperDiv.css(x) != y) {
				if ("basic" === e.palette) {
					var g = d._picker.find(".sui-tool-letter > .sui-selected-color");
					0 === g.length && (g = d._picker.find(".sui-color-cell")), g.css("background-color", d.currentColor.color.css())
				}
				d._popupIsOver ? (c = d.wrapperDiv.height(), d.wrapperDiv.animate({
					height: 0,
					top: d._picker.offset().top
				}, 150, function () {
					a(this).css(x, y).css("height", c)
				})) : d.wrapperDiv.slideUp(150, function () {});
				var h;
				h = d.currentColor.color.cssa ? d.currentColor.color.cssa() : d.currentColor.color.toRGB().cssa(), "basic" != e.palette && (e.advancedPalette.buttons ? h !== d._oldColor ? (d.currentColor = new A({
					color: d._oldColor
				}), setTimeout(function () {
					d._update(), d.trigger(w)
				}, 200)) : d._changed() : (d._changeSelectedColorCell(), d._changed(), d.trigger(u)))
			}
		},
		_buildBasicPalette: function () {
			var b, c = this,
				d = c.options,
				e = d.basicPalette,
				f = e.palette,
				g = e.tileSize,
				h = 0,
				i = a("<div class='sui-colorpicker sui-colorpicker-basic-palette'/>");
			b = d.displayInline ? i.insertAfter(c.element) : i.appendTo(j.body).css(x, y);
			for (var k = 0; k < f.length; k++) a("<div class='sui-palette-tile'/>").css({
				backgroundColor: f[k],
				width: g.width,
				height: g.height,
				borderWidth: e.tileBorderWidth,
				margin: "0 " + e.tileBorderWidth + "px " + e.tileBorderWidth + "px 0"
			}).on(t, c._tileClicked = m(c._tileClickedHandler, c)).appendTo(b).addClass(c.currentColor.color.hex().toUpperCase() == f[k].toUpperCase() ? "sui-palette-tile-selected" : "");
			h = e.columns * l(g.width) + e.columns * e.tileBorderWidth, b.css("width", h + "px"), c.wrapperDiv = b
		},
		_tileClickedHandler: function (b) {
			var c = this;
			if (c._enabled) {
				c.wrapperDiv.find(".sui-palette-tile-selected").removeClass("sui-palette-tile-selected"), a(b.target).addClass("sui-palette-tile-selected");
				var d = a(b.target).css("background-color");
				c.currentColor = new A({
					color: d
				}), c.trigger(v), c._changed()
			}
		},
		_buildAdvancedPalette: function () {
			var c, d, e, f = this,
				h = f.options;
			e = h.displayInline ? a("<div/>").insertAfter(f.element).addClass("sui-colorpicker") : a("<div/>").appendTo(j.body).addClass("sui-colorpicker").css(x, y), f.wrapperDiv = e, d = a("<div class='sui-hex-wrapper'/>").appendTo(e), f.colorDiv = a("<div class='sui-color-div'/>").appendTo(d), "hsl" == h.advancedPalette.type ? f.colorInput = a("<input class='sui-alpha-input'/>").appendTo(d) : f.colorInput = a("<input class='sui-hex-input'/>").appendTo(d), f.colorInput.on(r, f._colorInputKeyDown = m(f._colorInputKeyDownHandler, f));
			var i = "<div class='sui-color-palette'><div class='pointer'><div class='shape shape1'></div><div class='shape shape2'></div></div><div class='bg bg1'></div><div class='bg bg2'></div></div><div class='sui-color-scale'><div class='pointer'><div class='shape'></div></div><div class='bg'></div></div>";
			a(i).appendTo(e);
			var k = new g({
				twod: e.find(".sui-color-palette").get(0),
				pointer: e.find(".sui-color-palette .pointer").get(0),
				oned: e.find(".sui-color-scale").get(0),
				isXYslider: !0,
				cbs: {
					begin: f._changeXY,
					change: f._changeXY,
					end: f._done
				}
			}, f);
			f.xy = k;
			var l = new g({
				twod: e.find(".sui-color-palette").get(0),
				pointer: e.find(".sui-color-scale .pointer").get(0),
				oned: e.find(".sui-color-scale").get(0),
				isXYslider: !1,
				cbs: {
					begin: f._changeZ,
					change: f._changeZ,
					end: f._done
				}
			}, f);
			if (f.z = l, "rgb" == h.advancedPalette.type) {
				c = "<div class='extras'/>";
				var n = a(c).appendTo(e);
				a("<span class='sui-r-text'>R:</span>").appendTo(n), f.rInput = a("<input class='sui-r-input'/>").appendTo(n), f._rInputKeyDown = m(f._rInputKeyDownHandler, f), a("<span class='sui-g-text'>G:</span>").appendTo(n), f.gInput = a("<input class='sui-g-input'/>").appendTo(n), f._gInputKeyDown = m(f._gInputKeyDownHandler, f), a("<span class='sui-b-text'>B:</span>").appendTo(n), f.bInput = a("<input class='sui-b-input'/>").appendTo(n), f._bInputKeyDown = m(f._bInputKeyDownHandler, f), b.ui.NumericTextBox && (f.rInput = new b.ui.NumericTextBox(f.rInput, {
					min: 0,
					max: 255,
					step: .01,
					spinners: !1,
					cls: "rgbInputs",
					events: {
						change: f._rInputKeyDown
					}
				}), f.gInput = new b.ui.NumericTextBox(f.gInput, {
					min: 0,
					max: 255,
					step: .01,
					spinners: !1,
					cls: "rgbInputs",
					events: {
						change: f._gInputKeyDown
					}
				}), f.bInput = new b.ui.NumericTextBox(f.bInput, {
					min: 0,
					max: 255,
					step: .01,
					spinners: !1,
					cls: "rgbInputs",
					events: {
						change: f._bInputKeyDown
					}
				}))
			}
			if ("hsl" == h.advancedPalette.type) {
				f._isHsl = !0, c = "<div class='sui-transparent-slider'><div class='sui-color-scale alpha'><div class='pointer' style='top: 0%;'><div class='shape'></div></div><div class='bg'></div></div></div>", e.addClass("sui-hsl"), a(c).appendTo(e);
				var o = new g({
					twod: e.find(".alpha").get(0),
					pointer: e.find(".alpha .pointer").get(0),
					oned: e.find(".alpha").get(0),
					isXYslider: !1,
					cbs: {
						begin: f._changeA,
						change: f._changeA,
						end: f._done
					}
				}, f);
				f.a = o
			}
			h.advancedPalette.buttons && f._buildButtons()
		},
		_buildButtons: function () {
			var c = this,
				d = this.options.advancedPalette.messages,
				e = a("<div class='sui-buttons-wrapper'/>").appendTo(this.wrapperDiv);
			if (b.ui.Button) {
				var f = a("<button type='button'>" + d.apply + "</button>").appendTo(e),
					g = new b.ui.Button(f, {
						cls: "sui-apply",
						events: {
							click: m(c._applyHandler, this)
						}
					});
				c._applyButton = g;
				var h = a("<button type='button'>" + d.cancel + "</button>").appendTo(e),
					i = new b.ui.Button(h, {
						cls: "sui-cancel",
						events: {
							click: m(c._cancelHandler, this)
						}
					});
				c._cancelButton = i
			}
		},
		_applyHandler: function (a) {
			var b = this;
			b.currentColor.color.cssa ? b._oldColor = b.currentColor.color.cssa() : b._oldColor = b.currentColor.color.toRGB().cssa(), b._changeSelectedColorCell(), b.options.displayInline || b._hidePopup(a), b._changed(), b.trigger(u)
		},
		_changeSelectedColorCell: function () {
			var a, b = this,
				c = b.options,
				d = b._picker;
			a = b.currentColor.color.cssa ? b.currentColor.color.cssa() : b.currentColor.color.toRGB().cssa(), c.displayInline || (c.showLetter ? d.find(".sui-selected-color").css("background-color", a) : d.find(".sui-color-cell").css("background-color", a))
		},
		_cancelHandler: function (a) {
			var b = this;
			b.options.displayInline ? (b.currentColor = new A({
				color: b._oldColor
			}), setTimeout(function () {
				b._update(), b.trigger(w)
			}, 200)) : b._hidePopup(a)
		},
		_update: function () {
			var a, b = this,
				c = b._shouldUpdateMainInput,
				d = b._shouldUpdateRgbInputs;
			b._isHsl ? (a = b.currentColor.color.toHSL(), b._XY(b, {
				pointer: b.wrapperDiv.find(".sui-color-palette .pointer").get(0),
				x: a.hue,
				y: 1 - a.saturation
			}), b._shouldUpdateMainInput = c, b._Z(b, 1 - a.lightness, b.wrapperDiv.find(".sui-color-scale .pointer").get(0)), b.Y(b.wrapperDiv.find(".alpha .pointer").get(0), (1 - a.alpha).toFixed(2))) : (a = b.currentColor.color.toHSV(), b._XY(b, {
				pointer: b.wrapperDiv.find(".sui-color-palette .pointer").get(0),
				x: a.saturation,
				y: 1 - a.value
			}), b._shouldUpdateMainInput = c, b._shouldUpdateRgbInputs = d, b._Z(b, a.hue, b.wrapperDiv.find(".sui-color-scale .pointer").get(0)))
		},
		_rInputKeyDownHandler: function (a) {
			var b = this;
			setTimeout(function () {
				var c = a.value;
				b.currentColor.color.red = parseFloat(c) / 255, b._shouldUpdateRgbInputs = !1, b._update(), b.trigger(v)
			}, 1)
		},
		_gInputKeyDownHandler: function (a) {
			var b = this;
			setTimeout(function () {
				var c = a.value;
				b.currentColor.color.green = parseFloat(c) / 255, b._shouldUpdateRgbInputs = !1, b._update(), b.trigger(v)
			}, 1)
		},
		_bInputKeyDownHandler: function (a) {
			var b = this;
			setTimeout(function () {
				var c = a.value;
				b.currentColor.color.blue = parseFloat(c) / 255, b._shouldUpdateRgbInputs = !1, b._update(), b.trigger(v)
			}, 1)
		},
		_colorInputKeyDownHandler: function (a) {
			var b = this;
			a.ctrlKey || setTimeout(function () {
				var c = a.currentTarget,
					d = c.value,
					e = b.currentColor;
				b.currentColor = new A({
					color: d
				}), k.object(b.currentColor.color) ? (b._shouldUpdateRgbInputs = !0, b._shouldUpdateMainInput = !1, b._update()) : b.currentColor = e, b.trigger(v)
			}, 1)
		},
		_changeA: function (a, b) {
			if (a.colorPicker._enabled) {
				a.colorPicker.colorInput.val("rgba(0,0,0,1)");
				a.colorPicker._A(a.colorPicker, a.colorPicker.clamp(b.y, 0, 1), a.colorPicker.a.pointer)
			}
		},
		_changeZ: function (a, b) {
			if (a.colorPicker._enabled) {
				a.colorPicker._isHsl ? a.colorPicker.colorInput.val("rgba(0,0,0,1)") : a.colorPicker.colorInput.val("#000000");
				a.colorPicker._Z(a.colorPicker, a.colorPicker.clamp(b.y, 0, 1), a.colorPicker.z.pointer);
				a.colorPicker.trigger(v)
			}
		},
		_changeXY: function (a, b) {
			if (a.colorPicker._enabled) {
				a.colorPicker._isHsl ? a.colorPicker.colorInput.val("rgba(0,0,0,1)") : a.colorPicker.colorInput.val("#000000");
				a.colorPicker._XY(a.colorPicker, {
					x: a.colorPicker.clamp(b.x, 0, 1),
					y: a.colorPicker.clamp(b.y, 0, 1),
					pointer: b.pointer
				}, a.colorPicker.xy);
				a.colorPicker.X(b.pointer, b.x), a.colorPicker.Y(b.pointer, b.y), a.colorPicker.trigger(v)
			}
		},
		_XY: function (a, b) {
			var c, d = this;
			if (a._enabled) {
				if (a.X(b.pointer, b.x), a.Y(b.pointer, b.y), d._isHsl) {
					c = a.currentColor.color.toHSL ? a.currentColor.color.toHSL() : a.currentColor.color, c.hue = b.x, c.saturation = 1 - b.y;
					var e = c.lightness;
					c.lightness = .5, d.wrapperDiv.find(".sui-color-scale").css("background-color", c.toRGB().cssa()), c.lightness = e
				} else c = a.currentColor.color.toHSV(), b.x > 1 && (b.x = 1), b.x < 0 && (b.x = 0), b.y < 0 && (b.y = 0), b.y > 1 && (b.y = 1), c.saturation = b.x, c.value = 1 - b.y, 0 === c.hue && (c.hue = d._hue);
				var f = c.toRGB(),
					g = a.colorInput.val();
				g != f.hex() && (d._shouldUpdateMainInput ? (g.length > 4 || 0 === g.length) && (d._isHsl ? a.colorInput.val(f.cssa()) : a.colorInput.val(f.hex())) : d._shouldUpdateMainInput = !0), a.rInput && (d._shouldUpdateRgbInputs ? (a.rInput.value((255 * f.red).toFixed(2)), a.gInput.value((255 * f.green).toFixed(2)), a.bInput.value((255 * f.blue).toFixed(2))) : d._shouldUpdateRgbInputs = !0), a.colorDiv.get(0).style.background = f.cssa(), a.currentColor.color = f
			}
		},
		_Z: function (a, b, c) {
			var d, e = this,
				f = a.colorInput.val();
			if (e._isHsl) d = a.currentColor.color.toHSL ? a.currentColor.color.toHSL() : a.currentColor.color, a.Y(c, b), d.lightness = 1 - b, a.colorDiv.get(0).style.background = d.toRGB().cssa(), a.currentColor.color = d, f != d.toRGB().hex() && (e._shouldUpdateMainInput ? (f.length > 4 || 0 === f.length) && (e._isHsl ? a.colorInput.val(d.toRGB().cssa()) : a.colorInput.val(d.toRGB().hex())) : e._shouldUpdateMainInput = !0);
			else {
				d = a.currentColor.color.toHSV(), a.Y(c, b), a._rgbBg(a, a.wrapperDiv.find(".sui-color-palette").get(0), b), e._hue = d.hue = b;
				var g = d.toRGB();
				f != g.hex() && (f.length > 4 || 0 === f.length) && (e._isHsl ? a.colorInput.val(g.cssa()) : a.colorInput.val(g.hex())), a.rInput && (e._shouldUpdateRgbInputs ? (a.rInput.value((255 * g.red).toFixed(2)), a.gInput.value((255 * g.green).toFixed(2)), a.bInput.value((255 * g.blue).toFixed(2))) : e._shouldUpdateRgbInputs = !0), a.colorDiv.get(0).style.background = g.cssa(), a.currentColor.color = g
			}
		},
		_A: function (a, b, c) {
			var d, e = this,
				f = a.colorInput.val();
			d = a.currentColor.color.toHSL ? a.currentColor.color.toHSL() : a.currentColor.color, a.Y(c, b), d.alpha = (1 - b).toFixed(2), a.colorDiv.get(0).style.background = d.toRGB().cssa(), a.currentColor.color = d, f != d.toRGB().hex() && (e._shouldUpdateMainInput ? (f.length > 4 || 0 === f.length) && (a.colorInput.val(d.toRGB().cssa()), e.trigger(v)) : e._shouldUpdateMainInput = !0)
		},
		_rgbBg: function (a, b, c) {
			var d = new A({}).HSV(c, 1, 1).toRGB().cssa();
			a.BG(b, d)
		},
		clamp: function (a, b, c) {
			return Math.min(Math.max(a, b), c)
		},
		X: function (a, b) {
			a.style.left = this.clamp(100 * b, 0, 100) + "%"
		},
		Y: function (a, b) {
			a.style.top = this.clamp(100 * b, 0, 100) + "%"
		},
		BG: function (a, b) {
			a.style.background = b
		},
		_done: function () {},
		enabled: function () {
			var a, b = this,
				c = (b.options, [].slice.call(arguments));
			return c.length > 0 ? (a = c[0], a ? (b._picker && b._picker.removeClass("sui-colorpicker-disabled"), b.wrapperDiv && b.wrapperDiv.removeClass("sui-colorpicker-disabled")) : (b._picker && b._picker.addClass("sui-colorpicker-disabled"), b.wrapperDiv && b.wrapperDiv.addClass("sui-colorpicker-disabled")), b._applyButton && b._applyButton.enabled(a), b._cancelButton && b._cancelButton.enabled(a), a ? (b.colorInput && b.colorInput.removeAttr("readonly"), b.rInput && (b.rInput.enable(!0), b.gInput.enable(!0), b.bInput.enable(!0))) : (b.colorInput && b.colorInput.attr("readonly", "readonly"), b.rInput && (b.rInput.enable(!1), b.gInput.enable(!1), b.bInput.enable(!1))), b._enabled = a, void 0) : b._enabled
		},
		value: function () {
			var b, c = this,
				d = c.options,
				e = [].slice.call(arguments);
			if (!(e.length > 0)) return b = c.currentColor.color, b.css || (b = b.toRGB()), b;
			if (b = e[0], c.currentColor = new A({
					color: b
				}), "basic" == d.palette) {
				var f = c.currentColor.color.css();
				if (c.wrapperDiv)
					for (var g = c.wrapperDiv.find(".sui-palette-tile"), h = 0; h < g.length; h++) g[h].style.backgroundColor.replace(/\s+/g, "") === f.replace(/\s+/g, "") && (g.removeClass("sui-palette-tile-selected"), a(g[h]).addClass("sui-palette-tile-selected"))
			} else c._changeAdvancedPaletteColor();
			if (!d.displayInline)
				if (d.showLetter) {
					c._picker.find(".sui-color-cell");
					c._picker.find(".sui-selected-color").css("background-color", c.currentColor.color.cssa())
				} else c._picker.find(".sui-color-cell").css("background-color", c.currentColor.color.cssa());
			c._changed()
		},
		destroy: function () {
			var b = this;
			b.element.show(), b.wrapperDiv.remove(), b.colorInput && b.colorInput.off(r, b._colorInputKeyDown), b.rInput && (b.rInput.destroy(), b.gInput.destroy(), b.bInput.destroy()), b.options.displayInline && "basic" == b.options.palette && (b.wrapperDiv.find(".sui-palette-tile").off(s, b._tileClicked), b.wrapperDiv.remove()), b._applyButton && b._applyButton.destroy(), b._cancelButton && b._cancelButton.destroy(), a(j).off(t + ".shieldColorPicker" + b.getInstanceId()), b._tileClicked = b._rInputKeyDown = b._gInputKeyDown = b._bInputKeyDown = b._hidePopupDelegate = b._picker = b._applyButton = b._cancelButton = b._isHsl = b.currentColor = b.wrapperDiv = b.colorInput = b.colorDiv = b.rInput = b.gInput = b._enabled = b._popupIsOver = b.bInput = null, h.fn.destroy.call(b)
		}
	}), g = i.extend({
		init: function (a, b) {
			var c = this,
				d = a.isXYslider,
				e = a.cbs,
				f = a.twod,
				g = a.pointer,
				h = a.oned;
			return c.colorPicker = b, d ? (c.drag(f, c.attachPointer(c, e, g)), {
				background: f,
				pointer: g
			}) : (c.drag(h, c.attachPointer(c, e, g)), {
				background: h,
				pointer: g
			})
		},
		drag: function (a, b) {
			return a ? void(this.isTouch() ? this.dragTemplate(a, b, "touchstart", "touchmove", "touchend") : this.dragTemplate(a, b, "mousedown", "mousemove", "mouseup")) : void console.warn("drag is missing elem!")
		},
		attachPointer: function (a, b, c) {
			function d(a) {
				return function (b, d) {
					d.pointer = c, a(b, d)
				}
			}
			var e = {};
			for (var f in b) b.hasOwnProperty(f) && (e[f] = d(b[f]));
			return e
		},
		isTouch: function () {
			return "undefined" != typeof c.ontouchstart
		},
		dragTemplate: function (a, b, c, d, e) {
			var f = this,
				g = !1;
			b = f.getCbs(b);
			var h = b.begin,
				i = b.change,
				k = b.end;
			f.on(a, c, function (b) {
				function c() {
					g = !1, f.off(j, d, l), f.off(j, e, c), f.callCb(k, a, b)
				}
				g = !0;
				var l = f.partial(f, f.callCb, i, a);
				f.on(j, d, l), f.on(j, e, c), f.callCb(h, a, b)
			})
		},
		on: function (a, b, c) {
			a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
		},
		off: function (a, b, c) {
			a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
		},
		getCbs: function (a) {
			if (a) return {
				begin: a.begin || function () {},
				change: a.change || function () {},
				end: a.end || function () {}
			};
			var b, c;
			return {
				begin: function (a) {
					b = {
						x: a.elem.offsetLeft,
						y: a.elem.offsetTop
					}, c = a.cursor
				},
				change: function (a) {
					a.elem.style.left = b.x + a.cursor.x - c.x + "px", a.elem.style.top = b.y + a.cursor.y - c.y + "px"
				},
				end: function () {}
			}
		},
		callCb: function (b, c, d) {
			var e = this;
			d.preventDefault();
			var f = a(c).offset(),
				g = c.clientWidth,
				h = c.clientHeight,
				i = {
					x: e.cursorX(c, d),
					y: e.cursorY(c, d)
				},
				j = (i.x - f.left) / g,
				k = (i.y - f.top) / h;
			b(this, {
				x: isNaN(j) ? 0 : j,
				y: isNaN(k) ? 0 : k,
				cursor: i,
				elem: c,
				e: d
			})
		},
		partial: function (a, b) {
			var c = Array.prototype.slice,
				d = c.apply(arguments, [2]),
				e = this;
			return function () {
				return b.apply(e, d.concat(c.apply(arguments)))
			}
		},
		cursorX: function (a, b) {
			var d = this;
			if (d.isFixed(a)) {
				var e = parseInt(d.getStyle(j.body, "marginLeft"), 10) - d.calc(a, "scrollLeft") + c.pageXOffset + a.style.marginLeft;
				return b.clientX - e
			}
			return b.pageX ? b.pageX : b.clientX ? b.clientX + j.body.scrollLeft : void 0
		},
		cursorY: function (a, b) {
			var d = this;
			if (d.isFixed(a)) {
				var e = parseInt(d.getStyle(j.body, "marginTop"), 10) - d.calc(a, "scrollTop") + c.pageYOffset + a.style.marginTop;
				return b.clientY - e
			}
			return b.pageY ? b.pageY : b.clientY ? b.clientY + j.body.scrollTop : void 0
		},
		calc: function (a, b) {
			for (var c = 0;
				"HTML" != a.nodeName;) c += a[b], a = a.parentNode;
			return c
		},
		isFixed: function (a) {
			for (;
				"HTML" != a.nodeName && "fixed" != this.usedStyle(a, "position");) a = a.parentNode;
			return "HTML" != a.nodeName
		},
		getStyle: function (a, b) {
			return a.currentStyle ? a.currentStyle[b] : j.defaultView && j.defaultView.getComputedStyle ? j.defaultView.getComputedStyle(a, "")[b] : a.style[b]
		},
		usedStyle: function (a, b) {
			var d;
			return d = c.getComputedStyle ? c.getComputedStyle(a, null) : a.currentStyle, d[b]
		}
	});
	var A = i.extend({
		init: function (a) {
			var b = this,
				c = a.color;
			if (n(c) || null === c || "" === z(c)) b.color = b.getColor("#000");
			else if (k.integer(c)) {
				var d = c + 0,
					e = [(16711680 & d) >> 16, (65280 & d) >> 8, 255 & d];
				b.color = b.getColor("rgb(" + e[2] + "," + e[1] + "," + e[0] + ")")
			} else b.color = b.getColor(c)
		},
		getColor: function (a) {
			var b, c, d, e = this,
				f = /\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/,
				g = /\s*(\.\d+|\d+(?:\.\d+)?)\s*/,
				h = new RegExp("^(rgb|hsl|hsv)a?\\(" + f.source + "," + f.source + "," + f.source + "(?:," + g.source + ")?\\)$", "i");
			if (b = a.toLowerCase(), "transparent" === b && (a = "rgba(0,0,0,0)"), c = a.match(h)) {
				var i = c[1].toUpperCase(),
					j = n(c[8]) ? c[8] : parseFloat(c[8]),
					k = "H" === i[0],
					l = c[3] ? 100 : k ? 360 : 255,
					m = c[5] || k ? 100 : 255,
					o = c[7] || k ? 100 : 255;
				return e[i](parseFloat(c[2]) / l, parseFloat(c[4]) / m, parseFloat(c[6]) / o, j)
			}
			return a.length < 6 && (a = a.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i, "$1$1$2$2$3$3")), d = a.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i), d ? e.RGB(parseInt(d[1], 16) / 255, parseInt(d[2], 16) / 255, parseInt(d[3], 16) / 255) : a
		},
		RGB: function (a, b, c, d) {
			var e = this;
			return {
				red: a,
				green: b,
				blue: c,
				alpha: n(d) ? 1 : d,
				hex: function () {
					var a = (65536 * Math.round(255 * this.red) + 256 * Math.round(255 * this.green) + Math.round(255 * this.blue)).toString(16);
					return "#" + "00000".substr(0, 6 - a.length) + a
				},
				hexa: function () {
					var a = Math.round(255 * this.alpha).toString(16);
					return "#" + "00".substr(0, 2 - a.length) + a + this.hex().substr(1, 6)
				},
				css: function () {
					return "rgb(" + Math.round(255 * this.red) + "," + Math.round(255 * this.green) + "," + Math.round(255 * this.blue) + ")"
				},
				cssa: function () {
					return "rgba(" + Math.round(255 * this.red) + "," + Math.round(255 * this.green) + "," + Math.round(255 * this.blue) + "," + this.alpha + ")"
				},
				toHSV: function () {
					var a, b = this.red,
						c = this.green,
						f = this.blue,
						g = Math.max(b, c, f),
						h = Math.min(b, c, f),
						i = g - h,
						j = 0 === g ? 0 : i / g,
						k = g;
					if (0 === i) a = 0;
					else switch (g) {
						case b:
							a = (c - f) / i / 6 + (c < f ? 1 : 0);
							break;
						case c:
							a = (f - b) / i / 6 + 1 / 3;
							break;
						case f:
							a = (b - c) / i / 6 + 2 / 3
					}
					return e.HSV(a, j, k, d)
				},
				toHSL: function () {
					var a = this.toHSV();
					return e.HSV(a.hue, a.saturation, a.value, a.alpha).toHSL()
				},
				toCMYK: function () {
					var a = this.red,
						b = this.green,
						c = this.blue,
						f = 1 - a,
						g = 1 - b,
						h = 1 - c,
						i = 1;
					return a || b || c ? (i = Math.min(f, Math.min(g, h)), f = (f - i) / (1 - i), g = (g - i) / (1 - i), h = (h - i) / (1 - i)) : i = 1, e.CMYK(f, g, h, i, d)
				}
			}
		},
		HSV: function (a, b, c, d) {
			var e = this;
			return {
				hue: a,
				saturation: b,
				value: c,
				alpha: n(d) ? 1 : d,
				toRGB: function () {
					var a, b, c, f = this.hue,
						g = this.saturation,
						h = this.value,
						i = Math.min(5, Math.floor(6 * f)),
						j = 6 * f - i,
						k = h * (1 - g),
						l = h * (1 - j * g),
						m = h * (1 - (1 - j) * g);
					switch (i) {
						case 0:
							a = h, b = m, c = k;
							break;
						case 1:
							a = l, b = h, c = k;
							break;
						case 2:
							a = k, b = h, c = m;
							break;
						case 3:
							a = k, b = l, c = h;
							break;
						case 4:
							a = m, b = k, c = h;
							break;
						case 5:
							a = h, b = k, c = l
					}
					return e.RGB(a, b, c, d)
				},
				toHSL: function () {
					var a, b = (2 - this.saturation) * this.value,
						c = this.saturation * this.value,
						d = b <= 1 ? b : 2 - b;
					return a = d < 1e-9 ? 0 : c / d, e.HSL(this.hue, a, b / 2, this.alpha)
				}
			}
		},
		HSL: function (a, b, c, d) {
			var e = this;
			return {
				hue: a,
				saturation: b,
				lightness: c,
				alpha: n(d) ? 1 : d,
				toHSV: function () {
					var a, b = 2 * this.lightness,
						c = this.saturation * (b <= 1 ? b : 2 - b);
					return a = b + c < 1e-9 ? 0 : 2 * c / (b + c), e.HSV(this.hue, a, (b + c) / 2, this.alpha)
				},
				toRGB: function () {
					return this.toHSV().toRGB()
				}
			}
		},
		CMYK: function (a, b, c, d, e) {
			var f = this;
			return {
				cyan: a,
				magenta: b,
				yellow: c,
				black: d,
				alpha: n(e) ? 1 : e,
				toRGB: function () {
					return f.RGB(1 - this.cyan * (1 - this.black) - this.black, 1 - this.magenta * (1 - this.black) - this.black, 1 - this.yellow * (1 - this.black) - this.black, this.alpha)
				}
			}
		},
		destroy: function () {
			this.color = null
		}
	});
	f.defaults = e, b.ui.plugin("ColorPicker", f), b.ui.ColorPicker = f
}(jQuery, shield, this);
! function (a, b, c, d) {
	function e(a) {
		var b, c = " ";
		if (a) {
			if (w(a)) return a;
			for (b in a) a.hasOwnProperty(b) && (c += b + '="' + a[b] + '"')
		}
		return c
	}

	function f(b, c) {
		var d = a(b).attr(c);
		return z(d) && d !== !1
	}

	function g() {
		var b, c, d, e, f = [].slice.call(arguments),
			g = f.shift();
		for (e = 0; e < f.length && (b = a(g.target).closest(".sui-cell", f[e]), !b.length); e++);
		return b.length ? (c = b[0].parentNode, d = b[0], null == c || null == d ? null : {
			row: c,
			cell: d
		}) : null
	}

	function h(b) {
		return b && (a(b.row).hasClass(ba) || a(b.cell).hasClass(ba))
	}

	function i(b, c) {
		return a(b.target).closest(".sui-cell", c).length > 0
	}

	function j(b) {
		var c = a(b).find('.sui-checkbox:not(.sui-checkbox-disabled), .sui-radiobutton:not(.sui-radiobutton-disabled), .sui-input:not(.sui-input-disabled), .sui-combobox:not(.sui-combobox-disabled), .sui-dropdown:not(.sui-dropdown-disabled), .sui-listbox:not(.sui-listbox-disabled), .sui-switch:not(.sui-switch-disabled), a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex]:not([tabindex="-1"]), *[contenteditable]').filter(":visible").first();
		a(c).length > 0 && a(c).focus()
	}
	var k, l = b.ui.Widget,
		m = b.Class,
		n = b.DataSource,
		o = b.format,
		p = b.support,
		q = b.exp,
		r = b.get,
		s = b.iid,
		t = (b.strid, b.Constants.KeyCode),
		u = b.is,
		v = u.func,
		w = u.string,
		x = u.object,
		y = u["boolean"],
		z = u.defined,
		A = u.number,
		B = u.undefined,
		C = u["null"],
		D = b.to["int"],
		E = document,
		F = Math.abs,
		G = Math.min,
		H = Math.max,
		I = a.each,
		J = a.proxy,
		K = a.extend,
		L = a.map,
		M = a.grep,
		N = a.inArray,
		O = navigator.userAgent,
		P = c.opera,
		Q = /msie/i.test(O) && !P,
		R = Q && 7 === E.documentMode,
		S = Q && 8 === E.documentMode,
		T = (Q && 10 === E.documentMode, 8 === E.documentMode, /AppleWebKit/.test(O)),
		U = (/Firefox/.test(O), "role"),
		V = "aria-sort",
		W = "aria-readonly",
		X = "ascending",
		Y = "descending",
		Z = "tabindex",
		$ = "true",
		_ = "height",
		aa = "sui-selectable",
		ba = "sui-selected",
		ca = "change",
		da = "focus",
		ea = "start",
		fa = "scroll",
		ga = "command",
		ha = "selectionChanging",
		ia = "selectionChanged",
		ja = "selectstart",
		ka = "dataBound",
		la = "virtualRowsLoaded",
		ma = "keydown",
		na = "mousedown",
		oa = "mousemove",
		pa = "mouseup",
		qa = "resize",
		ra = "click",
		sa = "dblclick",
		ta = "sort",
		ua = "detailCreated",
		va = "columnReorder",
		wa = "columnResize",
		xa = "groupsReorder",
		ya = "group",
		za = "ungroup",
		Aa = "editorCreating",
		Ba = "filterWidgetCreating",
		Ca = "getCustomFilterValue",
		Da = "clearFilter",
		Ea = "expandButtonCreate",
		Fa = "cancel",
		Ga = "edit",
		Ha = "insert",
		Ia = "save",
		Ja = "delete",
		Ka = "error",
		La = "collapse",
		Ma = "expand",
		Na = "editWindowOpen",
		Oa = "insertWindowOpen",
		Pa = "display",
		Qa = "none",
		Ra = "@@custom",
		Sa = "row",
		Ta = "sui-viewindex",
		Ua = "sui-fieldname";
	k = {
		columns: [],
		rowHover: !0,
		scrolling: !1,
		paging: !1,
		columnReorder: !1,
		showHeader: !0,
		grouping: {
			showGroupHeader: !1,
			allowDragToGroup: !1,
			message: "Drag a column header here to group by a column"
		}
	};
	var Va = m.extend({
			init: function (b, c) {
				var d, e, f, g, h, i = this;
				for (i._grid = c, h = 0; h < b.length; h++) d = b[h], e = d.position ? d.position : "top", f = a('<div class="sui-toolbar"/>'), "top" === e ? (g = c.element.find(".sui-toolbar"), g.length > 0 ? a(g[0]).after(f) : c.element.prepend(f)) : (f.addClass("sui-toolbar-bottom"), f.appendTo(c.element)), d.template ? i._initializeTemplate(d, f) : d.buttons.length > 0 && i._buildButtons(f, d)
			},
			_buildButtons: function (a, b) {
				var c, d = this,
					e = b.buttons;
				for (c = 0; c < e.length; c++) d._buildButton(e[c], a)
			},
			_buildButton: function (c, d) {
				var e, f, g = this,
					h = c.commandName,
					i = c.click;
				b.ui.Button && (e = a('<button type="button">' + c.caption + "</button>").appendTo(d), "insert" == h ? i = g._insertButtonClicked : "save" == h ? i = g._saveButtonClicked : "cancel" == h ? i = g._cancelButtonClicked : "excel" == h ? i = g._excelButtonClicked : "pdf" == h ? i = g._pdfButtonClicked : "csv" == h && (i = g._csvButtonClicked), f = new b.ui.Button(e, {
					cls: c.cls,
					events: {
						click: J(i, g._grid)
					}
				}))
			},
			_excelButtonClicked: function () {
				this._doExcelExport()
			},
			_pdfButtonClicked: function () {
				this._doPdfExport()
			},
			_csvButtonClicked: function () {
				this._doCsvExport()
			},
			_insertButtonClicked: function (a, b) {
				var c, d, e, f, g, h = this,
					i = h.options,
					j = i.editing.insertNewRowAt,
					k = h.dataSource,
					l = !1;
				if (b || (f = h.trigger(ga, {
						commandName: Ha,
						cancel: !1
					}), !f.cancel)) {
					if (k.sort && k.sort.length > 0) return k.sort = [], h._sortingInProgress = !0, h.pager && (k.skip = 0, k.take = h.pager.pageSize(), h.pager.refresh(!0)), void k.read().always(J(h._toolbar._insertButtonClicked, h, a, !0));
					h._editingInProcess = !0, "pagebottom" === j ? (e = H(0, h.contentTable.find(">tbody > tr").length - 1), (!i.paging || h.pager && !h.pager.hasNext()) && (e += 1, l = !0)) : e = 0, c = l ? k.add({}) : k.insertView(e, {});
					for (g in c.fields) c.fields.hasOwnProperty(g) && (c.data[g] = null);
					h._editing._insertedItems.push(c), d = h.contentTable.find(">tbody > tr").eq(e), "popup" != h.options.editing.mode ? h._editing._putRowInEditMode(d, 0) : h._initializePopupForm(0, !0), h.trigger(Ha)
				}
			},
			_saveButtonClicked: function (a) {
				var b, c, d = this,
					e = d.contentTable.find(">tbody > tr > .sui-editable-cell");
				return e.length > 0 && (b = e.get(0).parentNode.rowIndex, d._updateItem(b, null), d._errorDuringEdit) ? void(d._errorDuringEdit = !1) : (c = d.trigger(ga, {
					commandName: Ia,
					cancel: !1
				}), void(c.cancel || (d.dataSource.save(), d.trigger(Ia))))
			},
			_cancelButtonClicked: function (a) {
				var b = this,
					c = b.trigger(ga, {
						commandName: Fa,
						cancel: !1
					});
				c.cancel || (b.dataSource.cancel(), b.trigger(Fa))
			},
			_initializeTemplate: function (a, b) {
				var c = this,
					d = a.template;
				if (v(d)) {
					var e = d.call(c._grid, b);
					z(e) && !C(e) && "" !== e && b.html(e)
				} else b.html(d)
			},
			destroy: function () {}
		}),
		Wa = m.extend({
			init: function (a, b) {
				var c = this;
				c._grid = b, c.options = a, c._eventNS = ".shieldGridEditing" + s(), c._editors = {}, c._insertedItems = [], a.enabled && c._initEditing(), c._grid.dataSource.on(Ka + c._eventNS, J(c._dsError, c))
			},
			_dsError: function (a) {
				var b = this,
					c = b._editors[a.path];
				b._grid.trigger(Ka, {
					type: a.type,
					path: a.path,
					value: a.value,
					editor: c,
					reason: a.reason
				}), b._errorDuringEdit = !0
			},
			_initEditing: function () {
				var b = this,
					c = b.options,
					d = c.event,
					e = b._eventNS;
				B(d) || (d === ra ? b._grid.element.on(ra + e, ".sui-cell", J(b._editingTriggered, b)) : "doubleclick" === d && b._grid.element.on(sa + e, ".sui-cell", J(b._editingTriggered, b)), a(E).on(ra + e, J(b._documentClicked, b)))
			},
			_editingTriggered: function (c) {
				var d, e, f = this,
					g = f._grid,
					h = c.target,
					i = a(h).parent(),
					j = i.get(0).rowIndex,
					k = g._getRowIndex(i),
					l = f.options,
					m = l.mode,
					n = l.type,
					o = g.dataSource,
					p = l.batch,
					q = g.trigger(ga, {
						commandName: Ga,
						cancel: !1,
						row: i,
						cell: h,
						index: k
					}),
					r = !1;
				if (!q.cancel) {
					if (p) {
						if (d = g.contentTable.find(">tbody > tr > .sui-editable-cell"), d.length > 0) {
							if (j = d.get(0).parentNode.rowIndex, "TR" !== i.get(0).nodeName.toUpperCase() || i.get(0).rowIndex == j && n == Sa) return;
							var s = g._updateItem(j, h);
							if (f._errorDuringEdit) return f._errorDuringEdit = !1, void(s = null);
							e = i.get(0).rowIndex, g._putRowInViewMode(j, null), !g._populateInsertedItem && s && s.length > 0 && g._renderUpdateMarkers(s, j), g._populateInsertedItem = !1, e === j && (h = g.contentTable.find(">tbody > tr").eq(j).get(0).cells[h.cellIndex]), j = e
						}
						B(n) || "cell" === n ? (f._putCellInEditMode(h), r = !0) : n === Sa ? (f._putRowInEditMode(i, h.cellIndex), r = !0) : b.error("Invalid editing.type declaration. The editing.type must be 'row' or 'cell'.", l.dieOnError)
					} else if (o.tracker && o.tracker.changes && o.tracker.changes.added && o.tracker.changes.added.length > 0) "TR" !== i.get(0).nodeName.toUpperCase() || i.get(0).rowIndex == j && n == Sa || o.cancel();
					else if (B(m) || "inline" === m) {
						if (d = g.contentTable.find(">tbody > tr > .sui-editable-cell"), d.length > 0) {
							if (j = d.get(0).parentNode.rowIndex, "TR" !== i.get(0).nodeName.toUpperCase() || i.get(0).rowIndex == j && n == Sa) return;
							if (g._updateItem(j, h), f._errorDuringEdit) return void(f._errorDuringEdit = !1);
							e = i.get(0).rowIndex, g._closeAllEditedRows(), e === j && (h = g.contentTable.find(">tbody > tr").eq(j).get(0).cells[h.cellIndex]), j = e
						}
						B(n) || "cell" == n ? (f._putCellInEditMode(h), r = !0) : n == Sa ? (f._putRowInEditMode(i, h.cellIndex), r = !0) : b.error("Invalid editing.type declaration. The editing.type must be 'row' or 'cell'.", l.dieOnError)
					}
					r && (c.preventDefault(), c.stopPropagation(), g.trigger(Ga, {
						row: i,
						cell: h,
						index: k
					}))
				}
			},
			_documentClicked: function (b) {
				var c, d, e = this,
					f = e.options,
					g = f.batch,
					h = (f.type, f.event),
					i = a(b.target);
				if (e._grid._editingInProcess || e._grid._preventClosingEditors) return void(e._grid._editingInProcess = !1);
				if ((!i.hasClass("sui-cell") && !i.parents().hasClass("sui-cell") && !i.parents().hasClass("sui-calendar") && !i.parents().hasClass("sui-listbox") || "doubleclick" === h && b.type === ra && i.closest(".sui-editable-cell").length <= 0) && (c = e._grid.contentTable.find(">tbody > tr > .sui-editable-cell"), c.length > 0)) {
					d = c.get(0).parentNode.rowIndex;
					var j = e._grid._updateItem(d, null);
					if (e._errorDuringEdit) return void(e._errorDuringEdit = !1);
					e._grid._putRowInViewMode(d, null), g && !e._grid._populateInsertedItem && j && j.length > 0 && e._grid._renderUpdateMarkers(j, d), e._grid._populateInsertedItem = !1
				}
			},
			_getColumnIndex: function (b) {
				return b.cellIndex - a(b.parentNode).find(".sui-indent-cell, .sui-expand-cell, .sui-expand-cell-disabled, .sui-collapse-cell").length
			},
			_putCellInEditMode: function (b) {
				var c, d = this,
					e = d._getColumnIndex(b),
					f = d._grid,
					g = f.dataSource,
					h = f._getRowIndex(a(b).parent()),
					i = f.columns[e],
					j = !1;
				if (i && i.field && i.editable !== !1)
					if (c = g.editView(h).data, arguments.length > 1 ? arguments[1] == e && (j = !0) : j = !0, i.editor) d._instantiateCustomEditor(i, b, c, h, j);
					else {
						var k = z(g.schema.options.fields) ? g.schema.options.fields[i.field].type : String,
							l = r(c, i.field);
						switch (k) {
							case Number:
								d._instantiateNumeric(b, l, j);
								break;
							case Date:
								d._instantiateDatePicker(b, l, j);
								break;
							case String:
								d._instantiateTextBox(b, l, j);
								break;
							case Boolean:
								d._instantiateCheckBox(b, l, j)
						}
					}
			},
			_prepareCell: function (b) {
				a(b).empty().addClass("sui-editable-cell")
			},
			_instantiateCustomEditor: function (b, c, d, e, f, g) {
				var h, i, j, k = this;
				g ? i = g : (h = k._getColumnIndex(c), i = k._grid.columns[h].field, k._prepareCell(c)), j = b.editor.call(k._grid, c, d, e, f), a(c).html(j), k._editors[i] = "custom"
			},
			_instantiateNumeric: function (c, d, e, f) {
				var g, h, i, j, k = this;
				f ? j = f : (i = k._getColumnIndex(c), j = k._grid.columns[i].field, k._prepareCell(c)), h = a('<input name="' + j + '"/>'), h.appendTo(c);
				var l = k._grid.trigger(Aa, {
						field: j,
						options: {}
					}),
					m = K({}, l.options, {
						value: d
					});
				b.ui.NumericTextBox && (g = new b.ui.NumericTextBox(h, m), e && g.focus(), k._editors[j] = g)
			},
			_instantiateDatePicker: function (c, d, e, f) {
				var g, h, i, j, k = this;
				f ? j = f : (i = k._getColumnIndex(c), j = k._grid.columns[i].field, k._prepareCell(c)), h = a('<input name="' + j + '"/>'), h.appendTo(c);
				var l = k._grid.trigger(Aa, {
						field: j,
						options: {}
					}),
					m = K({}, l.options, {
						value: d
					});
				b.ui.DatePicker && (g = new b.ui.DatePicker(h, m), e && g.focus(), k._editors[j] = g)
			},
			_instantiateTextBox: function (c, d, e, f) {
				var g, h, i, j, k = this;
				f ? j = f : (i = k._getColumnIndex(c), j = k._grid.columns[i].field, k._prepareCell(c)), h = a('<input type="text" name="' + j + '"/>'), h.appendTo(c);
				var l = k._grid.trigger(Aa, {
						field: j,
						options: {}
					}),
					m = K({}, l.options, {
						value: d,
						cls: "sui-input-textbox"
					});
				b.ui.TextBox && (g = new b.ui.TextBox(h, m), e && g.focus(), k._editors[j] = g)
			},
			_instantiateCheckBox: function (c, d, e, f) {
				var g, h, i, j, k = this;
				f ? j = f : (i = k._getColumnIndex(c), j = k._grid.columns[i].field, k._prepareCell(c)), h = a('<input type="checkbox" name="' + j + '"/>'), h.appendTo(c);
				var l = k._grid.trigger(Aa, {
						field: j,
						options: {}
					}),
					m = K({}, l.options, {
						value: d
					});
				b.ui.CheckBox && (g = new b.ui.CheckBox(h, m), e && g.focus(), g.checked(d), k._editors[j] = g)
			},
			_putRowInEditMode: function (b, c) {
				var d, e, f = this,
					g = b.find(".sui-cell");
				for (e = 0; e < g.length; e++) f._putCellInEditMode(g[e], c - b.find(".sui-indent-cell, .sui-expand-cell, .sui-expand-cell-disabled, .sui-collapse-cell").length);
				d = b.find(".sui-edit"), d.length > 0 && f._grid._changeEditColumnButtons(b.get(0).rowIndex, a(b.children(".sui-button-cell")[0]))
			},
			_destroyRow: function (a) {
				var b, c, d = this,
					e = d._grid,
					f = e.contentTable.find(">tbody > tr").eq(a),
					g = e.columns;
				for (b = 0; b < g.length; b++) c = d._editors[g[b].field], c && (v(c.destroy) && d._editors[g[b].field].destroy(), delete d._editors[g[b].field]);
				f.remove()
			},
			destroy: function () {
				var b, c, d = this,
					e = d._eventNS;
				if (d._grid.dataSource.off(Ka + e), d._grid.element.off(e, ".sui-cell"), a(E).off(ra + e), d._editors)
					for (b = 0; b < d._editors.length; b++) c = d._editors[b].editor.element(), d._editors[b].editor.destroy(), c.remove();
				d._errorDuringEdit = d.options = null
			}
		}),
		Xa = m.extend({
			init: function (a) {
				var b = this;
				w(a) ? (b.field = a, b.title = b.field, b.groupTitle = b.title, b.groupHeaderTitle = b.title, b.resizable = !0, b.sortable = !0, b.filterable = !0, b.editable = !0, b.visible = !0, b.locked = !1) : x(a) && (b.field = a.field, b.title = a.title, b.groupTitle = z(a.groupTitle) ? a.groupTitle : b.title, b.groupHeaderTitle = z(a.groupHeaderTitle) ? a.groupHeaderTitle : b.title, b.format = a.format, b.width = a.width, b.minWidth = a.minWidth, b.maxWidth = a.maxWidth, b.resizable = !z(a.resizable) || !!a.resizable, b.attributes = a.attributes, b.headerAttributes = a.headerAttributes, b.headerTemplate = a.headerTemplate, b.columnTemplate = a.columnTemplate, b.footerTemplate = a.footerTemplate, b.groupFooterTemplate = a.groupFooterTemplate, b.buttons = a.buttons, b.editor = a.editor, b.customFilter = a.customFilter, b.sortable = !z(a.sortable) || !!a.sortable, b.filterable = !z(a.filterable) || !!a.filterable, b.editable = !z(a.editable) || !!a.editable, b.visible = !z(a.visible) || !!a.visible, b.locked = !!b.visible && !!a.locked)
			},
			destroy: function () {
				var a = this;
				a.field = a.buttons = a.title = a.editor = a.editable = a.format = a.width = a.minWidth = a.maxWidth = a.resizable = a.attributes = a.headerAttributes = a.headerTemplate = a.buttons = a.customFilter = a.footerTemplate = a.groupFooterTemplate = a.sortable = a.filterable = a.visible = a.locked = a.columnTemplate = null
			}
		}),
		Ya = m.extend({
			options: {
				ns: ".shieldGridColumnResizing",
				width: 12,
				offset: 6,
				min: 12
			},
			init: function (a) {
				var b = this;
				b.grid = a, b.options = K(!0, {}, Ya.fn.options), b._eventNS = b.options.ns + s(), a.headerTable.on(oa + b._eventNS, ".sui-headercell", J(b._showHandle, b))
			},
			_showHandle: function (b) {
				if (!this.resizing) {
					var c = this,
						d = c.options,
						e = (c.grid, c.handle),
						f = b.pageX,
						g = c.params = c._params(a(b.currentTarget)),
						h = f >= g.offset.left && f <= g.offset.left + d.offset && g.headerIndex > 0;
					g.isRtl && (h = f >= g.offset.left + g.width - d.offset && f <= g.offset.left + g.width && g.headerIndex > 0), h && (g = c.params = c._params(g.header.prev())), g.column && g.column.resizable && !g.column.locked && (f >= g.threshold && f <= g.edge + d.offset ? (e || (e = c.handle = a('<div class="sui-resizable-handle"/>').on(na + c._eventNS, J(c._down, c)).appendTo(g.header.parents(".sui-headercontent"))), e.css({
						top: g.position.top,
						left: e.parent()[0].scrollLeft + g.handleLeft,
						width: d.width,
						height: g.height
					}).show()) : e && e.hide())
				}
			},
			_params: function (a) {
				var b = this,
					c = b.options,
					d = a.offset(),
					e = a.position(),
					f = p.isRtl(b.grid.element),
					g = a.outerWidth(),
					h = d.left + (f ? c.width : g),
					i = a.index(),
					j = b.grid._getColumnByField(a.attr("data-field")),
					k = j ? j.minWidth >= 0 ? +j.minWidth : c.min : null,
					l = j && j.maxWidth >= k ? +j.maxWidth : null;
				return {
					header: a,
					headerIndex: i,
					column: j,
					min: k,
					max: l,
					offset: d,
					isRtl: f,
					width: g,
					current: g,
					height: a.outerHeight(),
					edge: h,
					threshold: h - c.width + (f ? -1 : 1) * c.offset,
					position: e,
					handleLeft: e.left + (f ? c.width : g) - c.width + (f ? -1 : 1) * c.offset
				}
			},
			_down: function (c) {
				var d, e = this,
					f = e.grid,
					g = e.params;
				if (!(c.button > 1) && g) return d = "> colgroup col:nth-child(" + (g.headerIndex + 1) + ")", g.origin = c.pageX, g.cols = a().add(f.headerTable.find(d)).add(f.contentTable.find(d)), e.resizing = !0, e._cancelled = null, e.handle.hide(), a(E).on(oa + e._eventNS, J(e._move, e)).on(pa + e._eventNS, J(e._up, e)), b.selection(!1), !1
			},
			_move: function (a) {
				var b, c, d, e = this,
					f = e.params;
				if (e.resizing) return b = (f.isRtl ? -1 : 1) * (a.pageX - f.origin), c = H(f.width + b, f.min), f.max && (c = G(c, f.max)), d = e.grid.trigger(ga, {
					commandName: wa,
					cancel: !1,
					field: f.column.field,
					width: c
				}), d && d.cancel ? void(e._cancelled = !0) : void(c !== f.current && (f.cols.width(f.current = c), e.grid._fixHeaderPadding(), e.grid._adjustHeightsLocked(!0)))
			},
			_up: function () {
				var c = this,
					d = c.grid,
					e = c.params,
					f = e.current,
					g = e.column || {},
					h = (d.options.columns || [])[a(d.columns).index(g)] || {};
				c.resizing = !1, c.params = null, g.width = h.width = f + "px", a(E).off(c._eventNS), b.selection(!0), c._cancelled !== !0 && d.trigger(wa, {
					field: g.field,
					width: f
				}), c._cancelled = null
			},
			destroy: function () {
				var a = this;
				a.grid.headerTable.off(a._eventNS), a._cancelled = null, a.handle && (a.handle.off(a._eventNS).remove(), a.handle = null)
			}
		}),
		Za = m.extend({
			init: function (a) {
				var b = this;
				b.grid = a, b._filters = {}, b._eventNS = ".shieldGridFiltering" + s(), b._createFilterRow()
			},
			_createFilterRow: function () {
				var b, c, d, e, f, g, h = this,
					i = h.grid,
					j = i.headerTable,
					k = j.find(">thead"),
					l = k.find(".sui-indent-cell").length,
					m = i.dataSource.schema,
					n = i.columns;
				for (h._tr = b = a('<tr class="sui-filter-row"/>'), g = 0; g < l; g++) a('<th class="sui-indent-cell"/>').appendTo(b);
				for (m && m.options.fields && (f = m.options.fields), g = 0; g < n.length; g++) c = f && f[n[g].field] ? f[n[g].field].type : null, d = n[g].field ? n[g].field.replace(/[\"\']/g, "@") : "", e = a('<th class="sui-filter-cell" data-field="' + d + '" role="gridcell" tabindex="-1"/>').appendTo(b), n[g].filterable !== !1 && d.length > 0 && (h._initializeEditor(e, c, n[g].field, n[g]), h._appendFilterButton(e));
				for (b.appendTo(k), a(E).on(ra + h._eventNS, J(h._documentClicked, h)), g = 0; g < n.length; g++)
					if (d = n[g].field ? n[g].field.replace(/[\"\']/g, "@") : "", n[g].filterable !== !1 && d.length > 0) {
						var o = h._getFilter(n[g].field);
						o && (h._setEditorValue(n[g].field, n[g], o.value), h._addRemoveFilterButton(n[g].field))
					}
			},
			_documentClicked: function (b) {
				var c, d, e = this;
				if (e.listBox && !a(b.target).hasClass("sui-filter-button") && !a(b.target).hasClass("sui-filter-button-content")) {
					var f = e.listBox.element.parent();
					if (f.css(Pa) == Qa) return;
					e._filterByField = null, c = f.height(), d = f.offset().top, e._slideUp ? f.animate({
						height: 0,
						top: d + c
					}, 150, function () {
						f.css({
							display: Qa,
							height: c
						})
					}) : f.animate({
						height: 0
					}, 150, function () {
						f.css({
							display: Qa,
							height: c
						})
					})
				}
			},
			_appendFilterButton: function (c) {
				if (b.ui.Button) {
					var d = a('<button type="button"><span class="sui-sprite sui-filter-button-content"/></button>').appendTo(c);
					new b.ui.Button(d, {
						cls: "sui-filter-button",
						events: {
							click: J(this._filterButtonClicked, this)
						}
					})
				}
			},
			_filterButtonClicked: function (c) {
				var d, e, f, g = this,
					h = g.grid,
					i = h.dataSource.schema,
					j = h.options.filtering,
					k = j.stringFunc ? j.stringFunc : [{
						func: "eq",
						name: "Equal to"
					}, {
						func: "neq",
						name: "Not equal to"
					}, {
						func: "con",
						name: "Contains"
					}, {
						func: "notcon",
						name: "Not contains"
					}, {
						func: "starts",
						name: "Starts with"
					}, {
						func: "ends",
						name: "Ends with"
					}, {
						func: "gt",
						name: "Greater than"
					}, {
						func: "lt",
						name: "Less than"
					}, {
						func: "gte",
						name: "Greater than or equal"
					}, {
						func: "lte",
						name: "Less than or equal"
					}, {
						func: "isnull",
						name: "Is null"
					}, {
						func: "notnull",
						name: "Is not null"
					}],
					l = j.nonStingFunc ? j.nonStingFunc : [{
						func: "eq",
						name: "Equal to"
					}, {
						func: "neq",
						name: "Not equal to"
					}, {
						func: "gt",
						name: "Greater than"
					}, {
						func: "lt",
						name: "Less than"
					}, {
						func: "gte",
						name: "Greater than or equal"
					}, {
						func: "lte",
						name: "Less than or equal"
					}, {
						func: "isnull",
						name: "Is null"
					}, {
						func: "notnull",
						name: "Is not null"
					}],
					m = c.target.element.parent().attr("data-field").replace(/[@]/g, "'");
				if (g._filterByField = m, i && i.options.fields) {
					var n = i.options.fields;
					d = n && n[m] && n[m].type === String ? k : l
				} else d = k;
				b.ui.ListBox && (g.listBox || (g._menuWrapper = a('<div style="display:none;"/>').appendTo(E.body), g.listBox = new b.ui.ListBox(g._menuWrapper, K({}, {}, {
					dataSource: {
						data: d
					},
					textTemplate: "{name}",
					valueTemplate: "{func}",
					multiple: !1,
					width: 150,
					maxHeight: 300,
					events: {
						select: J(g._selectFilterFunction, g)
					}
				})), g.grid.element.parent().hasClass("sui-rtl") ? g.listBox.element.parent().addClass("sui-rtl") : g.listBox.element.parent().css(Pa, Qa)), e = g.listBox.element.parent().height(), g._positionListBox(c), g._slideUp ? (f = c.target.element.offset().top - e, g.listBox.element.parent().css({
					top: c.target.element.offset().top
				}), g.listBox.element.parent().animate({
					height: e,
					top: f - g.listBox.element.parent().innerHeight()
				}, 150)) : g.listBox.element.parent().animate({
					height: e
				}, 150)), g._selectFilterMenuValue(m)
			},
			_getFilter: function (a) {
				var b, c, d, e = this,
					f = e.grid.dataSource.filter;
				if (f && f.and && f.and.length > 0)
					for (b = f.and, d = 0; d < b.length; d++) b[d].path === a && (c = b[d]);
				return c
			},
			_selectFilterMenuValue: function (a) {
				var b = this,
					c = b._getFilter(a),
					e = c ? c.filter : d;
				e ? b.listBox.values(e) : b.listBox.clearSelection()
			},
			_selectFilterFunction: function (a) {
				var b, c, d = this,
					e = !0,
					f = d._filters[d._filterByField] == Ra ? Ra : d._filters[d._filterByField].value(),
					g = a.item.func,
					h = {
						path: d._filterByField,
						filter: g,
						value: f
					};
				if (f == Ra && (c = d.grid.trigger(Ca, {
						field: d._filterByField,
						value: null
					}), f = c.value, h = {
						path: d._filterByField,
						filter: g,
						value: f
					}), "" !== f && null !== f || "notnull" == g || "isnull" == g) {
					if (d.grid.dataSource.filter && d.grid.dataSource.filter.and) {
						b = d.grid.dataSource.filter.and;
						for (var i = 0; i < b.length; i++) b[i].path === d._filterByField && (b[i] = h, e = !1);
						e && b.push(h)
					} else d.grid.dataSource.filter = {
						and: [h]
					};
					d.grid.dataSource.read(), d._addRemoveFilterButton(d._filterByField)
				}
			},
			_addRemoveFilterButton: function (c) {
				var d, e, f, g = this;
				if (b.ui.Button) {
					d = a(g._tr).children("th");
					for (var h = 0; h < d.length; h++)
						if (e = a(d[h]), e.attr("data-field") && e.attr("data-field").replace(/[@]/g, "'") == c) {
							f = d[h];
							break
						}
					if (e && 0 === e.find(".sui-clear-filter-button").length) {
						var i = a('<button type="button"><span class="sui-sprite sui-clear-filter-button-content"></span></button>').appendTo(f);
						new b.ui.Button(i, {
							cls: "sui-clear-filter-button",
							events: {
								click: J(this._clearFilterButtonClicked, this)
							}
						})
					}
				}
			},
			_clearFilterButtonClicked: function (a) {
				var b, c, d = this,
					e = a.target.element.parent().attr("data-field").replace(/[@]/g, "'"),
					f = d.grid.dataSource.filter.and;
				for (c = 0; c < f.length; c++) f[c].path == e && f.splice(c, 1);
				b = a.target.element, a.target.destroy(), b.remove(), d._filters[e] != Ra ? d._filters[e].value(null) : d.grid.trigger(Da, {
					field: e,
					value: null
				}), d.grid.dataSource.read()
			},
			_positionListBox: function (a) {
				var b = this,
					d = a.target.element,
					e = d.offset(),
					f = e.top,
					g = e.left,
					h = b.listBox.element.parent().innerWidth(),
					i = b.listBox.element.parent().innerHeight(),
					j = (d.innerWidth(), d.innerHeight());
				g < 0 && (g = 1), g + h > c.innerWidth && (g = c.innerWidth - h - 20), b._slideUp = !1, f + i > c.innerHeight && (f -= i, j = 0, b._slideUp = !0), f < 0 && (f = e.top, j = d.innerHeight(), b._slideUp = !1), b.listBox.element.parent().css({
					position: "absolute",
					zIndex: 10002,
					top: f + j,
					left: g,
					height: 0,
					display: ""
				})
			},
			_setEditorValue: function (a, b, c) {
				var d, e = this;
				b.customFilter || (d = e._filters[a], d && d.value(c))
			},
			_initializeEditor: function (a, b, c, d) {
				var e = this;
				if (d.customFilter) e._filters[c] = Ra, d.customFilter.call(e.grid, a);
				else switch (b) {
					case Number:
						e._instantiateNumeric(a, c);
						break;
					case Date:
						e._instantiateDatePicker(a, c);
						break;
					case String:
						e._instantiateTextBox(a, c);
						break;
					default:
						e._instantiateTextBox(a, c)
				}
			},
			_instantiateNumeric: function (c, d) {
				var e, f = this,
					g = a("<input/>").appendTo(c),
					h = f.grid.trigger(Ba, {
						field: d,
						options: {}
					}),
					i = K({}, h.options);
				b.ui.NumericTextBox && (e = new b.ui.NumericTextBox(g, i), f._filters[d] = e)
			},
			_instantiateDatePicker: function (c, d) {
				var e, f = this,
					g = a("<input/>").appendTo(c),
					h = f.grid.trigger(Ba, {
						field: d,
						options: {}
					}),
					i = K({}, h.options);
				b.ui.DatePicker && (e = new b.ui.DatePicker(g, i), f._filters[d] = e)
			},
			_instantiateTextBox: function (c, d) {
				var e, f = this,
					g = a('<input type="text"/>').appendTo(c),
					h = f.grid.trigger(Ba, {
						field: d,
						options: {}
					}),
					i = K({}, h.options);
				b.ui.TextBox && (e = new b.ui.TextBox(g, i), f._filters[d] = e)
			},
			destroy: function () {
				var b, c = this;
				for (b in c._filters) c._filters.hasOwnProperty(b) && (c._filters[b] != Ra && c._filters[b].destroy(), c._filters[b] = null);
				c.listBox && (c.listBox.destroy(), c.listBox = null), a(c._menuWrapper).remove(), a(c._tr).remove(), a(E).off(ra + c._eventNS), c._filterByField = c._filters = c._slideUp = c._menuWrapper = c._tr = null
			}
		}),
		$a = m.extend({
			init: function (a, b) {
				var c = this;
				c.grid = b, c.sortExpressions = [], c._eventNS = ".shieldGridSorting" + s(), y(a) ? (c.allowUnsort = !0, c.multiple = !1, c.firstAscending = !0, c.ascText = "&#9650;", c.descText = "&#9660;") : x(a) && (c.allowUnsort = !!B(a.allowUnsort) || a.allowUnsort, c.multiple = a.multiple, c.firstAscending = !!B(a.firstAscending) || a.firstAscending, c.ascText = B(a.ascText) ? "&#9650;" : a.ascText, c.descText = B(a.descText) ? "&#9660;" : a.descText), c._initialize()
			},
			destroy: function () {
				var b = this,
					c = b.grid.headerTable;
				b.allowUnsort = b.multiple = b.sortExpressions = null, b.length = 0, c.find(".sui-headercell .sui-link").each(function () {
					a(this).parent().html(a(this).html())
				}), c.off(b._eventNS), c.find('.sui-headercell span[class^="sui-"]').remove()
			},
			_initialize: function () {
				var b, c, d, e = this,
					f = e.grid,
					g = f.dataSource.sort,
					h = f.columns,
					i = {},
					j = f.headerTable.find(".sui-headercell");
				if (j.each(function () {
						var b, c = a(this),
							d = c.attr("data-field"),
							e = f._getColumnByField(d);
						i[d] = c, e && e.sortable !== !1 && (b = c.html(), c.empty(), c.removeAttr(V), a('<a href="#" class="sui-link sui-unselectable" unselectable="on" tabindex="-1"/>').appendTo(c).html(b))
					}), f.headerTable.on(ra + e._eventNS, ".sui-link", J(e._clickHandler, e)), g)
					for (b = 0; b < g.length; b++)
						for (d = g[b], c = 0; c < h.length; c++)
							if (h[c].sortable !== !1 && d.path == h[c].field) {
								var k = a(i[h[c].field]),
									l = k.find(".sui-link"),
									m = X,
									n = "sui-asc",
									o = e.ascText;
								d.desc && (m = Y, o = e.descText, n = "sui-desc"), a(k).attr(V, m), l.addClass(n), a('<span class="sui-' + m + '">' + o + "</span>").appendTo(l)
							}
			},
			_clickHandler: function (b) {
				var c = this,
					d = a(b.target).closest(".sui-link"),
					e = c.grid,
					f = e._getColumnByField(d.parent().attr("data-field"));
				return d.hasClass("sui-desc") ? c.allowUnsort && c.firstAscending ? c._sortInternal(f, !0, !0) : c._sortInternal(f, !1, !1) : d.hasClass("sui-asc") ? c.allowUnsort && !c.firstAscending ? c._sortInternal(f, !1, !0) : c._sortInternal(f, !0, !1) : c.firstAscending ? c._sortInternal(f, !1, !1) : c._sortInternal(f, !0, !1), !1
			},
			_sortInternal: function (a, b, c) {
				var d = this,
					e = d.grid,
					f = e.dataSource,
					g = f.sort,
					h = e.trigger(ga, {
						commandName: ta,
						cancel: !1,
						column: a,
						desc: b,
						unsort: c
					});
				if (!h.cancel) {
					if (g) {
						if (!d.multiple && g) g.length = 0;
						else {
							var i = M(g, function (d) {
								return d.path === a.field && d.desc === (c ? b : !b)
							});
							if (i.length > 0) {
								var j = N(i[0], g);
								g.splice(j, 1)
							}
						}
						c || g.push({
							path: a.field,
							desc: b
						})
					} else c || (g = f.sort = [{
						path: a.field,
						desc: b
					}]);
					e._refreshOnSort(), e.trigger(ta, {
						column: a,
						desc: b,
						unsort: c
					})
				}
			},
			_sort: function (a, b, c) {
				var d, e, f = this,
					g = f.grid,
					h = g.dataSource,
					i = h.sort;
				if (i && (d = M(i, function (c) {
						return c.path === a && c.desc === b
					})), !d || d.length <= 0)
					if (!f.multiple && i && (i.length = 0), i) {
						var j = !1,
							k = M(i, function (c) {
								return c.path === a && c.desc != b
							});
						k && k.length > 0 && (e = N(k[0], i), i.splice(e, 1), j = !0), c || (i.push({
							path: a,
							desc: b
						}), j = !0), j && g._refreshOnSort()
					} else c || (h.sort = [{
						path: a,
						desc: b
					}], g._refreshOnSort());
				else c && (e = N(d[0], i), i.splice(e, 1), g._refreshOnSort())
			}
		}),
		_a = m.extend({
			init: function (b, c) {
				var d, e = this;
				d = e._eventNS = ".shieldGridSelection" + s(), y(b) ? (e.type = Sa, e.multiple = !1, e.toggle = !1, e.spreadsheet = !0, e.drawArea = !1, e.disableTextSelection = !1, e._selectOnMouseDown = !1) : x(b) && (e.type = b.type ? b.type : Sa, e.multiple = !!b.multiple, e.toggle = !!z(b.toggle) && b.toggle, e.spreadsheet = !z(b.spreadsheet) || b.spreadsheet, e.drawArea = z(b.drawArea) ? b.drawArea : b.multiple, e.disableTextSelection = !!z(b.disableTextSelection) && b.disableTextSelection, e._selectOnMouseDown = !e.drawArea && b.selectEvent == na), e.grid = c, e.lastSelected = null, a(c.headerTable).add(c.frozenHeaderTable).addClass("sui-non-selectable"), a(c.contentTable).add(c.frozenContentTable).addClass(aa), a(c.contentTable).add(c.frozenContentTable).on(na + d, J(e._mouseDownHandler, e)).on(oa + d, J(e._mouseMoveHandler, e)), a(E).on(pa + d, J(e._mouseUpHandler, e)), Q && a(c.contentTable).add(c.frozenContentTable).on(ja + d, function () {
					return !1
				}), e.multiple && e.drawArea && (e.area = a(E.createElement("span")).addClass("sui-area sui-area-color"))
			},
			destroy: function () {
				var b = this,
					c = b._eventNS,
					d = b.grid;
				a(d.contentTable).add(d.frozenContentTable).off(c), a(E).off(c), b.area && b.area.remove(), b.type = b.multiple = b.lastSelected = b.toggle = b.spreadsheet = b.area = b.x = b.y = b.elements = null
			},
			select: function (b) {
				var c, d, e, f, g = this; {
					if (!b) return g.grid.contentTable.find("." + ba);
					if (c = a(b), d = c.length, d > 0)
						for (f = 0; f < d; f++) e = a(c.get(f)), g._selectElement(e), f == d - 1 && (g.lastSelected = e)
				}
			},
			clear: function () {
				var a = this;
				a.type == Sa ? a._clearSelectedRows() : a._clearSelectedCells()
			},
			_getParentTable: function (a) {
				if (a) return "TABLE" == a[0].nodeName.toUpperCase() ? a[0] : a.parent() ? this._getParentTable(a.parent()) : void 0
			},
			_mouseDownHandler: function (c) {
				var d = this,
					e = d.grid,
					f = c.pageX,
					j = c.pageY,
					k = a(c.target),
					l = d._getParentTable(k);
				d.x = f, d.y = j, "TD" == k[0].nodeName.toUpperCase() && l != a(e.contentTable)[0] && l != a(e.frozenContentTable)[0] || !(k.hasClass("sui-cell") || k.hasClass("sui-row") || k.hasClass("sui-alt-row") || i(c, e.contentTable) || i(c, e.frozenContentTable)) || k.hasClass("sui-detail-cell") || k.hasClass("sui-detail-row") || k.hasClass("sui-collapse-cell") || k.hasClass("sui-expand-cell") || k.hasClass("sui-expand-cell-disabled") || k.hasClass("sui-indent-cell") || (d.multiple && d.drawArea && d.area.appendTo(E.body).css({
					left: f + 1,
					top: j + 1,
					width: 0,
					height: 0
				}), a(E).on(oa + d._eventNS, J(d._mouseMoveHandler, d)), (d.drawArea || d.disableTextSelection) && b.selection(!1), d.elements = g(c, e.contentTable, e.frozenContentTable), d.elements && d._selectOnMouseDown && !h(d.elements) && d._performAndProcessSelection(c))
			},
			_mouseMoveHandler: function (a) {
				var b = this,
					c = a.pageX,
					d = a.pageY,
					e = b.x,
					f = b.y,
					g = {
						left: e > c ? c : e,
						top: f > d ? d : f,
						width: F(c - b.x),
						height: F(d - b.y)
					};
				b.multiple && b.drawArea && b.area.css(g)
			},
			_mouseUpHandler: function (c) {
				var d = this,
					e = d.area;
				a(E).off(oa + d._eventNS), (d.drawArea || d.disableTextSelection) && b.selection(!0), !d.elements || d._selectOnMouseDown && !h(d.elements) || d._performAndProcessSelection(c), e && e.remove()
			},
			_performAndProcessSelection: function (b) {
				var c, d, e, f, g = this,
					h = g.grid,
					i = g.area,
					j = g.elements,
					k = b.ctrlKey,
					l = [],
					m = [],
					n = [];
				if (e = h.trigger(ga, {
						commandName: ha,
						cancel: !1
					}), e.cancel) return void(g.elements = null);
				for (g.elementsToBeSelected = [], g.type == Sa ? g._performRowSelection(i, k, j, b) : g._performCellSelection(i, k, j, b), f = 0; f < g.elementsToBeSelected.length; f++) c = g.elementsToBeSelected[f], !(c.hasClass("sui-cell") || c.hasClass("sui-row") || c.hasClass("sui-alt-row")) || c.hasClass("sui-detail-cell") || c.hasClass("sui-detail-row") || c.hasClass("sui-collapse-cell") || c.hasClass("sui-expand-cell") || c.hasClass("sui-expand-cell-disabled") || c.hasClass("sui-indent-cell") || (l.push(c), d = h._getRowIndex(g.type == Sa ? c : a(c).parent()), m.push(d), n.push(d >= 0 ? h.dataSource.getDataIndex(d) : d));
				if (e = h.trigger(ga, {
						commandName: ia,
						cancel: !1,
						toBeSelected: l,
						viewIndices: m,
						indices: n
					}), !e.cancel) {
					for (f = 0; f < l.length; f++) g._selectElement(l[f]);
					h.trigger(ia, {
						selected: l,
						viewIndices: m,
						indices: n
					}), g.elements = null
				}
			},
			_performRowSelection: function (b, c, d, e) {
				var f = this;
				if (!(a(e.target).hasClass("sui-expand-cell") || a(e.target).hasClass("sui-expand-cell-disabled") || a(e.target).hasClass("sui-collapse-cell") || a(e.target) && a(e.target).parent() && (a(e.target).parent().hasClass("sui-expand-cell") || a(e.target).parent().hasClass("sui-expand-cell-disabled") || a(e.target).parent().hasClass("sui-collapse-cell"))))
					if (!f.drawArea || e.type === ma || b && 0 === b.height() && 0 === b.width()) f.multiple ? f._processMultiRowSelection(e, d) : f._processSingleRowSelection(e, d);
					else if (f.multiple) {
					var g = f.grid.contentTable.find(">tbody > tr"),
						h = null;
					I(g, function (b, c) {
						var d = a(c),
							f = d.offset().top;
						f < e.pageY && (h = c.rowIndex)
					}), c || f._clearSelectedRows(), f._selectRowRange(d.row.rowIndex, h, c)
				} else f._processSingleRowSelection(e, d)
			},
			_performCellSelection: function (b, c, d, e) {
				var f = this;
				if (!(a(e.target).hasClass("sui-expand-cell") || a(e.target).hasClass("sui-expand-cell-disabled") || a(e.target).hasClass("sui-collapse-cell") || a(e.target) && a(e.target).parent() && (a(e.target).parent().hasClass("sui-expand-cell") || a(e.target).parent().hasClass("sui-expand-cell-disabled") || a(e.target).parent().hasClass("sui-collapse-cell"))))
					if (!f.drawArea || e.type === ma || b && 0 === b.height() && 0 === b.width()) f.multiple ? f._processMultiCellSelection(e, d) : f._processSingleCellSelection(e, d);
					else if (f.multiple) {
					var g, h = f.grid.contentTable.find(">tbody > tr > td"),
						i = [];
					for (I(h, function (b, c) {
							var d = a(c),
								g = d.get(0).clientWidth,
								h = d.get(0).clientHeight,
								j = d.offset().top,
								k = d.offset().left,
								l = j + h,
								m = k + g,
								n = G(e.pageX, f.x),
								o = H(e.pageX, f.x),
								p = G(e.pageY, f.y),
								q = H(e.pageY, f.y),
								r = !1,
								s = !1;
							j < p ? l > p && (r = !0) : j < q && (r = !0), k < n ? m > n && (s = !0) : k < o && (s = !0), r && s && i.push(c)
						}), c || f._clearSelectedCells(), g = 0; g < i.length; g++) {
						var j = a(i[g]);
						j.hasClass(ba) ? f._deselectElement(a(i[g])) : f.elementsToBeSelected.push(a(i[g]))
					}
				} else f._processSingleCellSelection(e, d)
			},
			_selectRowRange: function (b, c, d) {
				var e, f, g = this,
					h = G(b, c),
					i = H(b, c),
					j = g.grid.contentTable.find(">tbody > tr");
				for (e = h; e <= i; e++) f = a(j[e]), d && f.hasClass(ba) ? g._deselectElement(f) : g.elementsToBeSelected.push(f)
			},
			_clearSelectedRows: function () {
				var b = this,
					c = b.grid;
				a(c.frozenContentTable).find("> tbody > tr." + ba).each(function () {
					b._deselectElement(a(this))
				}), a(c.contentTable).find("> tbody > tr." + ba).each(function () {
					b._deselectElement(a(this))
				})
			},
			_clearSelectedCells: function () {
				var b = this,
					c = b.grid;
				a(c.frozenContentTable).find(">tbody > tr > td." + ba).each(function () {
					b._deselectElement(a(this))
				}), a(c.contentTable).find(">tbody > tr > td." + ba).each(function () {
					b._deselectElement(a(this))
				})
			},
			_processSingleRowSelection: function (b, c) {
				var d = this,
					e = d.toggle,
					f = d.multiple,
					g = a(c.row),
					h = g.hasClass(ba);
				f || d._clearSelectedRows(), e ? h ? d._deselectElement(g) : d.elementsToBeSelected.push(g) : (d._clearSelectedRows(),
					d.elementsToBeSelected.push(g)), d.lastSelected = g
			},
			_processMultiRowSelection: function (b, c) {
				var d = this,
					e = d.grid,
					f = b.ctrlKey,
					g = b.shiftKey,
					h = a(c.row);
				if (f) h.hasClass(ba) ? (d._deselectElement(h), d.lastSelected = h) : (d.elementsToBeSelected.push(h), d.lastSelected = h);
				else if (g) {
					e.contentTable.find(">tbody > tr." + ba);
					if (d.lastSelected) {
						var i = d.lastSelected,
							j = i.get(0).rowIndex,
							k = e.contentTable.find(">tbody > tr"),
							l = h.get(0).rowIndex,
							m = G(l, j),
							n = H(l, j);
						d._clearSelectedRows();
						for (var o = m; o <= n; o++)
							if (o !== j) {
								var p = a(k[o]);
								d.elementsToBeSelected.push(p)
							}
						d.elementsToBeSelected.push(a(k[j]))
					} else d.elementsToBeSelected.push(h), d.lastSelected = h
				} else d._processSingleRowSelection(b, c)
			},
			_processSingleCellSelection: function (b, c) {
				var d = this,
					e = d.toggle,
					f = d.multiple,
					g = a(c.cell),
					h = g.hasClass(ba);
				d.lastSelected;
				f || d._clearSelectedCells(), e ? h ? d._deselectElement(g) : d.elementsToBeSelected.push(g) : (d._clearSelectedCells(), d.elementsToBeSelected.push(g)), d.lastSelected = g
			},
			_processMultiCellSelection: function (b, c) {
				var d = this,
					e = d.grid,
					f = b.ctrlKey,
					g = b.shiftKey,
					h = a(c.cell);
				if (f) h.hasClass(ba) ? (d._deselectElement(h), d.lastSelected = h) : (d.elementsToBeSelected.push(h), d.lastSelected = h);
				else if (g)
					if (d.lastSelected) {
						var i, j = d.lastSelected,
							k = e.contentTable.get(0),
							l = k.rows[0].cells.length,
							m = j.parent().get(0).rowIndex,
							n = m * l + j.get(0).cellIndex,
							o = e.contentTable.find(">tbody > tr > td"),
							p = h.parent().get(0).rowIndex,
							q = p * l + h.get(0).cellIndex,
							r = G(q, n),
							s = H(q, n);
						if (d._clearSelectedCells(), d.spreadsheet) {
							var t = j[0].cellIndex,
								u = h[0].cellIndex;
							r = G(t, u), s = H(t, u);
							var v = G(m, p),
								w = H(m, p);
							for (i = v; i <= w; i++) {
								var x, y = k.rows[i];
								for (x = r; x <= s; x++) d.elementsToBeSelected.push(a(y.cells[x]))
							}
						} else
							for (i = r; i <= s; i++)
								if (i !== n) {
									var z = a(o[i]);
									d.elementsToBeSelected.push(z)
								}
						d.elementsToBeSelected.push(a(o[n]))
					} else d.elementsToBeSelected.push(h), d.lastSelected = h;
				else d._processSingleCellSelection(b, c)
			},
			_selectElement: function (b) {
				a(b).add(this.type == Sa ? this.grid._getOtherRow(b) : null).addClass(ba)
			},
			_deselectElement: function (b) {
				a(b).add(this.type == Sa ? this.grid._getOtherRow(b) : null).removeClass(ba)
			}
		}),
		ab = m.extend({
			options: {
				ns: ".shieldGridGroupReorder",
				returnDuration: 50,
				returnEasing: "ease-out",
				dragTreshold: 20,
				draggedTemplate: "<div style='border-color:transparent;' class='sui-grid sui-grid-core'><div class='sui-group-panel-indicator'><span class='sui-group-title'>{0}</span><span class='sui-group-close-button'></span></div></div>"
			},
			init: function (a) {
				var b = this;
				b.grid = a, b.options = K(!0, {}, ab.fn.options), b._eventNS = b.options.ns + s(), b._events(!0)
			},
			_events: function (a) {
				var b = this,
					c = b.grid.element;
				a ? (b._downProxy = J(b._down, b), c.on(na + b._eventNS, ".sui-group-panel-indicator", b._downProxy)) : (c.off(na + b._eventNS, ".sui-group-panel-indicator", b._downProxy), b._downProxy = null)
			},
			_down: function (c) {
				var d = this,
					e = a(c.target).closest(".sui-group-panel-indicator"),
					f = e.offset(),
					g = d.grid.element,
					h = g.offset(),
					i = c.pageX,
					j = c.pageY;
				if (d.dataField = e.attr("data-field"), !(c.button > 1)) return d._moveProxy = J(d._move, d), d._upProxy = J(d._up, d), a(E).on(oa + d._eventNS, d._moveProxy).on(pa + d._eventNS, d._upProxy), d.start = {
					left: i - f.left,
					top: j - f.top,
					x: i,
					y: j,
					target: e,
					index: e.parent().find(".sui-group-panel-indicator").index(e),
					positions: d._positions(e),
					gridPosition: {
						left: h.left,
						top: h.top,
						width: g.outerWidth(),
						height: g.outerHeight()
					},
					isRtl: p.isRtl(g)
				}, b.selection(!1), !1
			},
			_move: function (b) {
				var c = this,
					d = c.options,
					e = c.dragged,
					f = c.start,
					g = b.pageX,
					h = b.pageY,
					i = d.dragTreshold;
				e ? (e.css({
					left: g - f.left,
					top: h - f.top
				}), c.hovered = c._index(g, h), c._indicator()) : (F(f.x - g) > i || F(f.y - h) > i) && (c.dragged = a(o(d.draggedTemplate, f.target.html())).css({
					position: "absolute",
					left: g - f.left,
					top: h - f.top,
					zIndex: 999
				}).find("table").css("width", "auto").end().find("th").attr("style", f.target[0].style.cssText).css({
					width: f.target.width(),
					height: f.target.height()
				}).end().appendTo(E.body))
			},
			_positions: function (a) {
				var b, c, d = a.parent().children(".sui-group-panel-indicator"),
					e = 0,
					f = [];
				for (e; e < d.length; e++) b = d.eq(e), c = b.offset(), f.push({
					left: c.left,
					top: c.top,
					width: b.outerWidth(),
					height: b.outerHeight()
				});
				return f
			},
			_index: function (a, b) {
				var c, d, e, f, g = this.start,
					h = g.gridPosition;
				for (d = 0; d < g.positions.length; d++)
					if (c = g.positions[d], e = c.left <= a && a <= c.left + c.width && c.top <= b && b <= c.top + c.height, f = h.left <= a && a <= h.left + h.width && h.top <= b && b <= h.top + h.height, e && f) return d;
				return -1
			},
			_indicator: function () {
				var b, c = this,
					d = c.start,
					e = c.hovered,
					f = d.positions[e],
					g = c.reorderIndicator,
					h = d.gridPosition.left,
					i = d.gridPosition.left + d.gridPosition.width,
					j = d.target.parent().children(".sui-group-panel-indicator"),
					k = d.isRtl ? d.index < e : d.index > e;
				j.removeClass("sui-reorder-target"), g && g.hide(), null != e && e > -1 && (j.eq(e).addClass("sui-reorder-target"), g || (g = c.reorderIndicator = a("<div class='sui-grid-reorder-indicator'><span class='sui-grid-indicator-top' /><span class='sui-grid-indicator-bottom' /></div>").appendTo(E.body)), e !== d.index && (b = f.left + (k ? 0 : f.width), g.css({
					left: G(H(h, b), i),
					top: f.top,
					height: f.height
				}).show()))
			},
			_up: function (c) {
				var d, e = this,
					f = e.options,
					g = e.grid,
					h = e.dragged,
					i = e.start,
					j = e.hovered,
					k = e.dataField;
				if (e._detachDocumentEvents(), h)
					if (null != j && j > -1) {
						if (h.remove(), d = g.trigger(ga, {
								commandName: xa,
								cancel: !1,
								index: i.index,
								newIndex: j
							}), !d.cancel)
							for (var l = g.dataSource.group, m = 0; m < l.length; m++)
								if (l[m].field == k) {
									var n = l[m];
									l[m] = l[j], l[j] = n;
									break
								}
					} else setTimeout(function () {
						h.remove()
					}, p.transitions ? f.returnDuration : 0), e.grid.dataSource.group && (d = g.trigger(ga, {
						commandName: za,
						cancel: !1,
						field: k
					}), d.cancel || (e.grid.ungroup(k), g.trigger(za, d)));
				e.dragged = e.dataField = e.hovered = j = null, e._indicator(), e.reorderIndicator && (e.reorderIndicator.remove(), e.reorderIndicator = null), e.start = null, a(E).off(e._eventNS), b.selection(!0), d && !d.cancel && (delete d.cancel, delete d.commandName, g.dataSource.read(), g.trigger(xa, d))
			},
			_detachDocumentEvents: function () {
				var b = this;
				b._moveProxy = b._upProxy = null, a(E).off(b._eventNS)
			},
			destroy: function () {
				var a = this;
				a.dataField = null, a._detachDocumentEvents(), a._events(!1)
			}
		}),
		bb = m.extend({
			options: {
				ns: ".shieldGridColumnGroupReorder",
				returnDuration: 150,
				returnEasing: "ease-out",
				dragTreshold: 20,
				draggedTemplate: "<div class='sui-grid sui-grid-core'><div class='sui-gridheader'><table class='sui-table'><thead><tr class='sui-columnheader'><th class='sui-headercell'>{0}</th></tr></thead></table></div></div>"
			},
			init: function (a) {
				var b = this;
				b.grid = a, b.options = K(!0, {}, cb.fn.options), b._eventNS = b.options.ns + s(), b._events(!0), a.headerTable.addClass("sui-reorderable")
			},
			_events: function (a) {
				var b = this,
					c = b.grid.element;
				a ? (b._downProxy = J(b._down, b), c.on(na + b._eventNS, ".sui-headercell", b._downProxy)) : (c.off(na + b._eventNS, ".sui-headercell", b._downProxy), b._downProxy = null)
			},
			_down: function (c) {
				var d = this,
					e = a(c.target).closest(".sui-headercell"),
					f = e.offset(),
					g = d.grid.element,
					h = g.offset(),
					i = c.pageX,
					j = c.pageY;
				if (!(c.button > 1)) {
					var k = e.attr("data-field"),
						l = d.grid.dataSource.group;
					if (l)
						for (var m = 0; m < l.length; m++)
							if (k === l[m].field) return;
					return a(E).on(oa + d._eventNS, J(d._move, d)).on(pa + d._eventNS, J(d._up, d)), d.start = {
						left: i - f.left,
						top: j - f.top,
						x: i,
						y: j,
						target: e,
						index: 1e3,
						positions: d._positions(e),
						gridPosition: {
							left: h.left,
							top: h.top,
							width: g.outerWidth(),
							height: g.outerHeight()
						},
						isRtl: p.isRtl(g)
					}, b.selection(!1), !1
				}
			},
			_move: function (b) {
				var c = this,
					d = c.options,
					e = c.dragged,
					f = c.start,
					g = b.pageX,
					h = b.pageY,
					i = d.dragTreshold;
				e ? (e.css({
					left: g - f.left,
					top: h - f.top
				}), c.hovered = c._index(g, h), c._indicator()) : (F(f.x - g) > i || F(f.y - h) > i) && (c.dragged = a(o(d.draggedTemplate, f.target.html())).css({
					position: "absolute",
					left: g - f.left,
					top: h - f.top,
					zIndex: 999
				}).find("table").css("width", "auto").end().find("th").attr("style", f.target[0].style.cssText).css({
					width: f.target.width(),
					height: f.target.height()
				}).end().appendTo(E.body))
			},
			_positions: function (a) {
				var b, c, d = this.grid.element.find(".sui-group-panel-indicator"),
					e = 0,
					f = [];
				for (e; e < d.length; e++) b = d.eq(e), c = b.offset(), f.push({
					left: c.left,
					top: c.top,
					width: b.outerWidth(),
					height: b.outerHeight()
				}), e == d.length - 1 && f.push({
					left: c.left,
					top: c.top,
					width: b.outerWidth(),
					height: b.outerHeight()
				});
				return f
			},
			_index: function (a, b) {
				var c, d, e, f, g, h = this.start,
					i = h.gridPosition,
					j = this.grid.element.find(".sui-group-panel");
				if (h.positions.length > 0) {
					for (d = 0; d < h.positions.length; d++)
						if (c = h.positions[d], e = c.left <= a && a <= c.left + c.width && c.top <= b && b <= c.top + c.height, g = i.left <= a && a <= i.left + i.width && i.top <= b && b <= i.top + i.height, f = j.offset().left <= a && a <= j.offset().left + j.width() && j.offset().top <= b && b <= j.offset().top + j.height(), e && g) return d
				} else f = j.offset().left <= a && a <= j.offset().left + j.width() && j.offset().top <= b && b <= j.offset().top + j.height();
				return f ? (this.isOnGroupPanel = !0, this.grid.element.find(".sui-group-panel-indicator").length) : -1
			},
			_indicator: function () {
				var b, c = this,
					d = c.start,
					e = c.hovered,
					f = d.positions[e],
					g = c.reorderIndicator,
					h = d.gridPosition.left,
					i = d.gridPosition.left + d.gridPosition.width,
					j = d.target.parent().children(".sui-group-panel-indicator"),
					k = d.isRtl ? d.index < e : d.index > e;
				j.removeClass("sui-reorder-target"), g && g.hide(), null != e && e > -1 && (j.eq(e).addClass("sui-reorder-target"), g || (g = c.reorderIndicator = a("<div class='sui-grid-reorder-indicator'><span class='sui-grid-indicator-top' /><span class='sui-grid-indicator-bottom' /></div>").appendTo(E.body)), this.isOnGroupPanel && (k = !1), f ? (b = f.left + (k ? 0 : f.width), this.isOnGroupPanel = null, g.css({
					left: G(H(h, b), i),
					top: f.top,
					height: f.height
				}).show()) : (b = h + (k ? d.gridPosition.width : 0), this.isOnGroupPanel = null, g.css({
					left: b,
					top: d.gridPosition.top,
					height: c.grid.element.find(".sui-group-panel-empty").outerHeight()
				}).show()))
			},
			_up: function (c) {
				var d, e = this,
					f = e.options,
					g = e.grid,
					h = e.dragged,
					i = e.start,
					j = e.hovered;
				if (h)
					if (h.css({
							left: i.x - i.left,
							top: i.y - i.top,
							transition: o("left {0} {1}ms, top {0} {1}ms", f.returnEasing, f.returnDuration)
						}), null != j && j > -1) {
						h.remove();
						var k = i.target.attr("data-field");
						d = g.trigger(ga, {
							commandName: ya,
							cancel: !1,
							field: k,
							index: j
						}), d.cancel || g.group(k, j, "asc")
					} else setTimeout(function () {
						h.remove()
					}, p.transitions ? f.returnDuration : 0);
				e.dragged = e.hovered = j = null, e._indicator(), e.reorderIndicator && (e.reorderIndicator.remove(), e.reorderIndicator = null), e.start = null, a(E).off(e._eventNS), b.selection(!0), d && !d.cancel && (delete d.cancel, delete d.commandName, g.dataSource.read(), g.trigger(ya, d))
			},
			destroy: function () {
				this._events(!1), this.grid.headerTable.removeClass("sui-reorderable")
			}
		}),
		cb = m.extend({
			options: {
				ns: ".shieldGridColumnReorder",
				returnDuration: 150,
				returnEasing: "ease-out",
				dragTreshold: 20,
				draggedTemplate: "<div class='sui-grid sui-grid-core'><div class='sui-gridheader'><table class='sui-table'><thead><tr class='sui-columnheader'><th class='sui-headercell'>{0}</th></tr></thead></table></div></div>"
			},
			init: function (a) {
				var b = this;
				b.grid = a, b.options = K(!0, {}, cb.fn.options), b._eventNS = b.options.ns + s(), b._events(!0), a.headerTable.addClass("sui-reorderable")
			},
			_events: function (a) {
				var b = this,
					c = b.grid.element;
				a ? (b._downProxy = J(b._down, b), c.on(na + b._eventNS, ".sui-headercell", b._downProxy)) : (c.off(na + b._eventNS, ".sui-headercell", b._downProxy), b._downProxy = null)
			},
			_down: function (c) {
				var d = this,
					e = a(c.target).closest(".sui-headercell"),
					f = e.offset(),
					g = d.grid.element,
					h = g.offset(),
					i = c.pageX,
					j = c.pageY;
				if (!(c.button > 1)) return a(E).on(oa + d._eventNS, J(d._move, d)).on(pa + d._eventNS, J(d._up, d)), d.start = {
					left: i - f.left,
					top: j - f.top,
					x: i,
					y: j,
					target: e,
					index: e.parent().find(".sui-headercell").index(e),
					positions: d._positions(e),
					gridPosition: {
						left: h.left,
						top: h.top,
						width: g.outerWidth(),
						height: g.outerHeight()
					},
					isRtl: p.isRtl(g)
				}, b.selection(!1), !1
			},
			_move: function (b) {
				var c = this,
					d = c.options,
					e = c.dragged,
					f = c.start,
					g = b.pageX,
					h = b.pageY,
					i = d.dragTreshold;
				e ? (e.css({
					left: g - f.left,
					top: h - f.top
				}), c.hovered = c._index(g, h), c._indicator()) : (F(f.x - g) > i || F(f.y - h) > i) && (c.dragged = a(o(d.draggedTemplate, f.target.html())).css({
					position: "absolute",
					left: g - f.left,
					top: h - f.top,
					zIndex: 999
				}).find("table").css("width", "auto").end().find("th").attr("style", f.target[0].style.cssText).css({
					width: f.target.width(),
					height: f.target.height()
				}).end().appendTo(E.body))
			},
			_positions: function (a) {
				var b, c, d = a.parent().children(".sui-headercell"),
					e = 0,
					f = [];
				for (e; e < d.length; e++) b = d.eq(e), c = b.offset(), f.push({
					left: c.left,
					top: c.top,
					width: b.outerWidth(),
					height: b.outerHeight()
				});
				return f
			},
			_index: function (a, b) {
				var c, d, e, f, g = this.start,
					h = g.gridPosition;
				for (d = 0; d < g.positions.length; d++)
					if (c = g.positions[d], e = c.left <= a && a <= c.left + c.width && c.top <= b && b <= c.top + c.height, f = h.left <= a && a <= h.left + h.width && h.top <= b && b <= h.top + h.height, e && f) return d;
				return -1
			},
			_indicator: function () {
				var b, c = this,
					d = c.start,
					e = c.hovered,
					f = d.positions[e],
					g = c.reorderIndicator,
					h = d.gridPosition.left,
					i = d.gridPosition.left + d.gridPosition.width,
					j = d.target.parent().children(".sui-headercell"),
					k = d.isRtl ? d.index < e : d.index > e;
				j.removeClass("sui-reorder-target"), g && g.hide(), null != e && e > -1 && (j.eq(e).addClass("sui-reorder-target"), g || (g = c.reorderIndicator = a("<div class='sui-grid-reorder-indicator'><span class='sui-grid-indicator-top' /><span class='sui-grid-indicator-bottom' /></div>").appendTo(E.body)), e !== d.index && (b = f.left + (k ? 0 : f.width), g.css({
					left: G(H(h, b), i),
					top: f.top,
					height: f.height
				}).show()))
			},
			_up: function (c) {
				var d, e = this,
					f = e.options,
					g = e.grid,
					h = e.dragged,
					i = e.start,
					j = e.hovered;
				h && (h.css({
					left: i.x - i.left,
					top: i.y - i.top,
					transition: o("left {0} {1}ms, top {0} {1}ms", f.returnEasing, f.returnDuration)
				}), null != j && j > -1 ? (h.remove(), d = g.trigger(ga, {
					commandName: va,
					cancel: !1,
					index: i.index,
					newIndex: j
				}), d.cancel || g.reorderColumn(i.index, j)) : setTimeout(function () {
					h.remove()
				}, p.transitions ? f.returnDuration : 0)), e.dragged = e.hovered = j = null, e._indicator(), e.reorderIndicator && (e.reorderIndicator.remove(), e.reorderIndicator = null), e.start = null, a(E).off(e._eventNS), b.selection(!0), d && !d.cancel && (delete d.cancel, delete d.commandName, g.trigger(va, d))
			},
			destroy: function () {
				this._events(!1), this.grid.headerTable.removeClass("sui-reorderable")
			}
		}),
		db = l.extend({
			init: function () {
				l.fn.init.apply(this, arguments);
				var a = this;
				a._eventNS = ".shieldGrid" + a.getInstanceId(), a.refresh(), a._dM()
			},
			destroy: function () {
				this._destroyInternal(), l.fn.destroy.call(this)
			},
			_destroyInternal: function () {
				var b, d, e, f = this,
					g = f.options,
					h = f._eventNS;
				if (f.contentWrapper) {
					if (f._markedCells) {
						for (d in f._markedCells) f._markedCells.hasOwnProperty(d) && (f._markedCells[d].length = 0);
						f._markedCells = null
					}
					if (a(c).off(h), f._destroyFrozenContainers(), f.sorting && (f.sorting.destroy(), f.sorting = null), f.virtualizedContainer && (f.virtualizedContainer.destroy(), f.virtualizedContainer = null), f.columns)
						for (b = 0; b < f.columns.length; b++) f.columns[b].destroy();
					if (f.contentWrapper && f.contentWrapper.off(fa), f.scrollableWrapper = null, f._selectable && (f._selectable.destroy(), f._selectable = null), g.scrolling ? (f.contentWrapper.parent().remove(), f.headerWrapper.parent().remove()) : (f.contentWrapper.remove(), f.headerWrapper.remove()), f._hasDetailTemplate() && f.contentTable.off(h), f.popupWindow && f.popupWindow.destroy(), f._footer && (a(f._footer).remove(), f._footer = null), f.columns = f._gridColumns = f._windowEditingIndex = f.contentWrapper = f.headerWrapper = f.contentTable = f.hederTable = null, f._buttons) {
						for (b = 0; b < f._buttons.length; b++) e = f._buttons[b].button.element, f._buttons[b].button.destroy(), e.remove();
						f._buttons.length = 0
					}
					f.pager && (f.pager.destroy(), f.pager = null, f.pagerWrapper && (f.pagerWrapper.parent().remove(), f.pagerWrapper = null)), f.loadingPanel && (f.loadingPanel = null, clearTimeout(f.loadingPanelTimeout), f.loadingPanelTimeout = null), f._columnResizing && (f._columnResizing.destroy(), f._columnResizing = null), f._toolbar && (f._toolbar.destroy(), f._toolbar = null), f._editing && (f._editing.destroy(), f._editing = null), f._columnReorder && (f._columnReorder.destroy(), f._columnReorder = null), f._sortingInProgress = f._loadingVirtualRows = f._scrollLeft = f._scrollTop = f._populateInsertedItem = f._preventClosingEditors = f._editingInProcess = null, f._filter && (f._filter.destroy(), f._filter = null), f._groupReorder && (f._groupReorder.destroy(), f._groupReorder = null), f._columnGroupReorder && (f._columnGroupReorder.destroy(), f._columnGroupReorder = null), f.dataSource.off(h), f.element.off(h).removeClass("sui-grid sui-grid-core").css(_, "").empty()
				}
			},
			_dM: function () {
				var b = function (b) {
						return a("<div/>").html(b).text()
					},
					c = "&#68;&#101;&#109;&#111;&#32;&#86;&#101;&#114;&#115;&#105;&#111;&#110;",
					d = E.createTextNode(b(c));
				a(d).insertAfter(a(this.element))
			},
			_resizeHandler: function () {
				var a = this;
				a._adjustWidthsLocked(), a._adjustHeightsLocked()
			},
			_hasDetailTemplate: function () {
				var a = this.options;
				return a.detailTemplate || a.events && a.events.detailCreated
			},
			_hasVirtualScrolling: function () {
				var a = this.options;
				return a.scrolling && a.scrolling.virtual && !a.paging && !this._hasDetailTemplate()
			},
			_canExpandCollapse: function () {
				return this.options.detailExpandCollapse !== !1
			},
			_resolveColumns: function (a) {
				var c, d = this;
				if (d.columns = [], u.array(a))
					for (c = 0; c < a.length; c++) d.columns.push(new Xa(a[c]));
				else b.error("Invalid columns declaration. The columns have to be array.", d.options.dieOnError);
				for (d._gridColumns = {}, c = 0; c < d.columns.length; c++) d._gridColumns[d.columns[c].field] = {
					index: c
				}
			},
			_createWrappers: function () {
				var b, c, d = this,
					e = d.element;
				d._wrapper(), b = a("<div/>").prependTo(e), b.addClass("sui-gridcontent"), c = a("<div/>").prependTo(e), c.addClass("sui-gridheader"), d.options.showHeader || (c.css(Pa, Qa), b.addClass("sui-no-header")), d.headerWrapper = c, d.contentWrapper = b
			},
			_wrapper: function () {
				var a = this.options.height,
					b = this.element;
				b.is("div") || (b = b.wrap("<div/>").parent()), b.addClass("sui-grid sui-grid-core"), b && b.css(_, a)
			},
			_createGroupPanel: function () {
				var b, c, d, e, f = this,
					g = f.options.grouping,
					h = !1,
					i = f.dataSource;
				if (d = f.element.find(".sui-group-panel"), d.length > 0 && d.remove(), g.showGroupHeader)
					if (i.group && 0 !== i.group.length) {
						for (b = a('<div class="sui-group-panel"/>'), a(f.element).prepend(b), e = 0; e < i.group.length; e++) c = i.group[e], f._createGroupHeaderIndicator(c, b), h = !0;
						h && g.allowDragToGroup && (f._groupReorder && f._groupReorder.destroy(), f._groupReorder = new ab(f), f._columnGroupReorder && f._columnGroupReorder.destroy(), f._columnGroupReorder = new bb(f))
					} else a(f.element).prepend(a('<div class="sui-group-panel sui-group-panel-empty">' + g.message + "</div>"))
			},
			_createGroupHeaderIndicator: function (b, c) {
				var d, e, f = this,
					g = f._getColumnByField(b.field),
					h = g ? g.groupTitle : b.field;
				e = a('<div class="sui-group-panel-indicator" data-field="' + b.field + '"/>').appendTo(c), d = "desc" == b.order ? a('<span class="sui-descending">&#9660;</span>').appendTo(e) : a('<span class="sui-ascending">&#9650;</span>').appendTo(e), d.on(ra, J(f._sortButtonClickedHandler, f)), a('<span class="sui-group-title">' + h + "</span>").appendTo(e), f.options.grouping.allowDragToGroup && a('<span class="sui-group-close-button">&#10006;</span>').on(ra, J(f._closeButtonClickedHandler, f)).appendTo(e)
			},
			_sortButtonClickedHandler: function (b) {
				for (var c = this, d = a(b.currentTarget), e = d.parent().attr("data-field"), f = c.dataSource.group, g = 0; g < f.length; g++) f[g].field == e && (d.hasClass("sui-descending") ? f[g].order = "asc" : f[g].order = "desc", c.dataSource.read())
			},
			_closeButtonClickedHandler: function (b) {
				var c, d = this,
					e = a(b.currentTarget),
					f = e.parent().attr("data-field");
				d.dataSource.group && (c = d.trigger(ga, {
					commandName: za,
					cancel: !1,
					field: f
				}), c.cancel || (d.ungroup(f), d.trigger(za, c)))
			},
			_createHeaderTable: function () {
				var b = this,
					c = b.headerWrapper,
					d = b.element;
				d.is("table") || (d = c.children("table"), d.length || (d = a("<table/>").appendTo(c))), R && d.attr("cellspacing", 0), d.addClass("sui-table"), b.headerTable = d, b._createTbody(d, !0), b._createThead(d), b._createFakeRow(d, b.columns.length)
			},
			_createContentTable: function () {
				var b = this,
					c = b.options,
					d = b.contentWrapper,
					e = b.element;
				e.is("table") || (e = d.children("table"), e.length || (e = a("<table/>").appendTo(d))), R && e.attr("cellspacing", 0), e.addClass("sui-table"), c.rowHover && e.addClass("sui-hover"), b._hasDetailTemplate() && (b._canExpandCollapse() && e.addClass("sui-expandable"), e.on(ra + b._eventNS, "> tbody > tr > .sui-expand-cell, > tbody > tr > .sui-collapse-cell", J(b._expandCollapseDetailTemplate, b))), b.contentTable = e, b._createTbody(b.contentTable, !1)
			},
			_createTbody: function (b, c) {
				var d = b.find("> tbody");
				d.length || (d = a("<tbody/>").appendTo(b)), c && d.addClass("sui-hide"), b.tbody = d
			},
			_createThead: function (b) {
				var c, d, f, g, h, i, j = this,
					k = (j.options, j.columns),
					l = "",
					m = b.find(">thead");
				for (m.length || (m = a("<thead/>").insertBefore(b.tbody)), f = b.find("tr:has(th):first"), f.length || (f = m.children().first(), f.length || (f = a("<tr/>").appendTo(m))), f.attr(U, Sa), f.empty(), c = 0, d = k.length; c < d; c++) g = k[c], h = g.headerTemplate || g.title || g.field || g, i = !!k[c].sortable, l += "<th " + e(g.headerAttributes) + ' data-field="' + k[c].field + '" role="columnheader"' + (i ? ' tabindex="-1"' : "") + ">" + h + "</th>";
				if (f.html(l), f.addClass("sui-columnheader"), f.find("th").addClass("sui-headercell"), k.length && j._hasDetailTemplate() && j._canExpandCollapse()) {
					var n = a('<th class="sui-indent-cell"/>');
					R && n.html("&nbsp;"), n.prependTo(f)
				}
				b.thead = m
			},
			_createFakeRow: function (b, c) {
				var d, e, f = b.find(">tbody");
				if (f.length) {
					for (d = a("<tr/>"), e = 0; e < c; e++) a("<td/>").appendTo(d);
					d.appendTo(f)
				}
			},
			_createColgroup: function (b) {
				var c, d, e, f = this,
					g = f.options,
					h = f.columns,
					i = b.find(">colgroup");
				for (i.length || (i = a("<colgroup/>").prependTo(b)), i.html(""), g.columns.length && f._hasDetailTemplate() && f._canExpandCollapse() && a('<col class="sui-indent-col"/>').appendTo(i), c = 0, d = h.length; c < d; c++) e = h[c].width, a(e && 0 !== parseInt(e, 10) ? o('<col style="width:{0}"/>', w(e) ? e : e + "px") : "<col/>").data(Ua, h[c].field).appendTo(i)
			},
			scrollTop: function (b) {
				var c = this,
					d = c.options,
					e = d.scrolling,
					f = c._hasVirtualScrolling(),
					g = c.contentWrapper;
				if (e)
					if (z(b)) f ? c.virtualizedContainer && c.virtualizedContainer.scrollTop(b) : a(g).scrollTop(b);
					else {
						if (!f) return a(g).scrollTop();
						if (c.virtualizedContainer) return c.virtualizedContainer.scrollTop()
					}
			},
			_scrolling: function () {
				var b, c, e, f = this,
					g = f.options,
					h = a(f.element),
					i = (p.isRtl(h), f.dataSource),
					j = f._hasVirtualScrolling(),
					k = f.headerWrapper,
					l = f.contentWrapper,
					m = k.outerHeight(),
					n = !(j || "auto" !== g.height && z(g.height)),
					o = !j && z(g.maxHeight) ? parseInt(g.maxHeight, 10) : d,
					q = 0,
					r = 0,
					s = 0;
				if (k.parent().hasClass("sui-gridheader sui-scrolldiv") ? m = k.parent().outerHeight() : (k.addClass("sui-headercontent").removeClass("sui-gridheader"), k.wrap('<div class="sui-gridheader sui-scrolldiv"/>'), l.addClass("sui-content").removeClass("sui-gridcontent"), l.wrap('<div class="sui-gridcontent sui-scroller"/>'), R && (f.headerTable.addClass("sui-table-ie7").removeClass("sui-table"), f.contentTable.addClass("sui-table-ie7").removeClass("sui-table")), e = f.scrollableWrapper = j ? l.parent() : l, e.on(fa, J(f._onscroll, f))), f.pagerWrapper && (q = f.pagerWrapper.outerHeight()), f._toolbar) {
					var t, u = h.find(".sui-toolbar"),
						v = 0;
					for (t = 0; t < u.length; t++) v += a(u[0]).outerHeight();
					r += v + 1
				}
				var w = h.find(".sui-group-panel");
				w.length > 0 && (s += w.outerHeight()), n ? c = "auto" : (b = h.innerHeight(), c = b - m - q - r - s), a(l).add(l.parent()).css(_, c), o && o < h.innerHeight() && (c = o - m - q - r - s, a(l).add(l.parent()).css(_, c)), j ? (f._ensureVirtualizedContainer(), f.virtualizedContainer.options.total = i.total, f.virtualizedContainer.render(), f._fixHeaderPadding(f.virtualizedContainer.wrapper.parent())) : (f._fixHeaderPadding(l), n || !Q || R || S || p.hasScrollbarX(l) || l.css(_, c + 1))
			},
			_fixHeaderPadding: function (b) {
				var c = this,
					d = p.isRtl(c.element),
					e = c.headerWrapper,
					f = a(b).get(0);
				f && (f.scrollHeight - f.clientHeight > 1 ? (e.parent().css(d ? "padding-left" : "padding-right", p.scrollbar() - 1), e.removeClass("sui-no-y-scroll")) : (e.parent().css(d ? "padding-left" : "padding-right", 0), e.addClass("sui-no-y-scroll")))
			},
			_ensureVirtualizedContainer: function () {
				var a, c, d = this;
				d.virtualizedContainer || (a = d._renderRow(0, d.contentTable.tbody, {}), c = a.outerHeight(), a.remove(), d.virtualizedContainer = new b.ui.VirtualizedContainer(d.scrollableWrapper, {
					itemHeight: c,
					total: d.dataSource.total,
					createContainer: function (a) {
						return a.addClass("sui-content").append(d.contentTable).find("tbody").empty()
					},
					getItems: J(d._loadVirtualRows, d),
					skipRender: !0
				}), d.contentWrapper = d.virtualizedContainer.element.children().eq(0))
			},
			_loadVirtualRows: function (a, b, c) {
				var d = this,
					e = d.dataSource,
					f = null != e.skip ? e.skip : 0,
					g = null != e.take ? e.take : e.view.length,
					h = 100,
					i = d.virtualizedContainer.container;
				if (a < b)
					if (!d._sortingInProgress && e.remote && (a < f || b >= f + g)) clearTimeout(d._loadWaitTimeout), d._loadWaitTimeout = setTimeout(function (a, b, c) {
						return function () {
							d._loadWaitTimeout = null, e.skip = a, e.take = b - a, d._loadingVirtualRows = !0, e.one(ca + ".shieldGrid" + d.getInstanceId(), function () {
								d._loadWaitTimeout || (d._loadingVirtualRows = !1)
							}), e.read().then(function () {
								if (!d._loadWaitTimeout) {
									i.empty();
									for (var f = a; f < b && f < e.total; f++) d._renderRow(f - a, i, e.view[f - a]);
									d.loading(!1), c([], !1), d.trigger(la), d.trigger(ka)
								}
							})
						}
					}(a, b, c), h);
					else {
						i.empty();
						for (var j = a; j < b && j < e.total; j++) d._renderRow(j, i, e.view[j]);
						c([], !1), d.trigger(la), d.trigger(ka)
					}
				else d._renderNoRecords();
				d._checkIfVerticalScroll(), d._initSelection()
			},
			_checkIfVerticalScroll: function () {
				var a = this,
					b = a.element.find(".sui-virtualized").get(0),
					c = a.element.get(0),
					d = b.scrollHeight > c.scrollHeight;
				d ? (a.headerWrapper.parent().css("padding-right", "16px"), a.headerWrapper.removeClass("sui-grid-no-gap")) : (a.headerWrapper.parent().css("padding-right", "0px"), a.headerWrapper.addClass("sui-grid-no-gap"))
			},
			_onscroll: function (b) {
				var c, d = this,
					e = d.scrollableWrapper,
					f = e.get(0),
					g = d.headerWrapper,
					h = e.scrollLeft(),
					i = g.scrollLeft();
				if (p.isRtl(d.element) && T && f.clientHeight < f.scrollHeight && (h += f.offsetWidth - f.clientWidth), h != i && (g.scrollLeft(h), d._footer && (c = a(d._footer).find(".sui-footer-content"), c.length > 0 && c.scrollLeft(h))), d.frozenHeaderWrapper) {
					var j = e.scrollTop(),
						k = d.frozenContentWrapper.scrollTop();
					j != k && d.frozenContentWrapper.scrollTop(j)
				}
			},
			_sorting: function () {
				var a = this,
					b = a.options.sorting;
				a.element;
				b && a.columns.length && (a.sorting && a.sorting.destroy(), a.sorting = new $a(b, a))
			},
			_renderData: function () {
				var b, c, d = this,
					e = d.dataSource.view,
					f = d.options;
				f.scrolling, !!B(f.altRows) || f.altRows, f.rowTemplate, f.altRowTemplate, d.contentTable;
				if (!d._loadingVirtualRows && (c = d.trigger(ga, {
						commandName: ka,
						cancel: !1
					}), !c.cancel)) {
					d._sortingInProgress = !1, d.columns.length || (b = [], e.length && I(e[0], function (a, c) {
						b.push(a)
					}), f.columns = b, d._resolveColumns(b)), d._filtering(), d._destroyFrozenContainers(), d._createThead(d.headerTable), d._createColgroup(d.headerTable), d._createColgroup(d.contentTable), d.contentTable.tbody.empty(), d._sorting(), d._renderRows(), d._renderFooter();
					var g = function (b) {
							return a("<div/>").html(b).text()
						},
						h = g("&#83;&#104;&#105;&#101;&#108;&#100;&#85;&#73;");
					d._refreshColVisibility(), e && e.length > 0 && d._initFrozenCols(), d._initSelection(), d.loading(!1);
					var i = g("&#104;&#116;&#116;&#112;&#58;&#47;&#47;&#119;&#119;&#119;&#46;&#115;&#104;&#105;&#101;&#108;&#100;&#117;&#105;&#46;&#99;&#111;&#109;");
					d.trigger(ka);
					var j = i;
					d.dmL || (d.dmL = a('<a href="' + j + '" target="_blank"> by ' + h + "</a>"), a(d.dmL).css({
						color: "grey",
						"text-decoration": "none"
					}).insertAfter(a(this.element)))
				}
			},
			_renderRows: function () {
				var a, b, c = this,
					d = c.dataSource,
					e = d.view;
				if (c._markedCells) {
					for (b in c._markedCells) c._markedCells.hasOwnProperty(b) && (c._markedCells[b].length = 0);
					c._markedCells = null
				}
				return e && e.length ? (c._hasVirtualScrolling() && !c._sortingInProgress || (a = d.group, a && a.length > 0 ? (c._renderGroupedData(e, 0, 0), c._addGroupIndentCells(), c._addGroupDataIndentCells(), c.contentTable.addClass("sui-grouped-table")) : c._renderRowsAndDetails(e)), c._createGroupPanel(), void c._initScrolling()) : (c._renderNoRecords(), c._createGroupPanel(), c._addGroupIndentCells(), void c._initScrolling())
			},
			_addGroupIndentCells: function () {
				var b, c, d, e, f, g = this,
					h = g.dataSource.group,
					i = g.options,
					j = i.filtering && i.filtering.enabled;
				if (h && h.length > 0)
					for (b = g.headerTable.find(">colgroup").first(), c = g.contentTable.find(">colgroup").first(), d = g.headerTable.thead.find(".sui-columnheader").first(), j && (e = g.headerTable.find(".sui-filter-row").first()), b.find(".sui-indent-col").remove(), d.find(".sui-columnheader > .sui-indent-cell").remove(), e && e.length > 0 && e.find(".sui-indent-cell").remove(), f = 0; f < h.length; f++) a('<col class="sui-indent-col"/>').prependTo(b), a('<th class="sui-indent-cell"/>').prependTo(d), e && e.length > 0 && a('<th class="sui-indent-cell"/>').prependTo(e), a('<col class="sui-indent-col"/>').prependTo(c)
			},
			_getVisibleColumnCount: function () {
				var a, b = this.columns || [],
					c = b.length,
					d = 0;
				for (a = 0; a < c; a++) b[a].visible && d++;
				return d
			},
			_renderNoRecords: function () {
				var b = this,
					c = b.options,
					d = b.contentTable;
				B(c.noRecordsTemplate) ? a('<tr><td class="sui-grid-norecords-cell" colspan="' + b._getVisibleColumnCount() + '" role="gridcell">' + (c.noRecordsText || "No records to display") + "</td></tr>").appendTo(d.tbody) : a('<td class="sui-grid-norecords-cell" colspan="' + b._getVisibleColumnCount() + '" role="gridcell"/>').append(c.noRecordsTemplate).wrap("<tr/>").parent().appendTo(d.tbody)
			},
			_initScrolling: function () {
				var a = this;
				a.options.scrolling && !a._sortingInProgress && a._scrolling()
			},
			_initSelection: function () {
				this._selection()
			},
			_addGroupDataIndentCells: function () {
				var b, c, d, e, f = this,
					g = f.contentTable.get(0).rows;
				for (b = 0; b < g.length; b++)
					if (d = a(g[b]), e = parseInt(d.attr("data-group-level"), 10), d.hasClass("sui-group-header")) {
						if (e > 1)
							for (c = 0; c < e - 1; c++) a('<td class="sui-indent-cell"/>').prependTo(d)
					} else
						for (c = 0; c < e; c++) a('<td class="sui-indent-cell sui-group-intend-cell"/>').prependTo(d)
			},
			_renderGroupedData: function (a, b, c) {
				var d, e, f = this;
				for (f.options.detailExpandCollapse = !1, d = 0; d < a.length; d++) e = a[d], e.hasOwnProperty("field") && e.hasOwnProperty("items") && e.hasOwnProperty("value") ? (c++, f._renderGroupHeader(e, c), f._renderGroupedData(e.items, b, c), f._renderGroupAggregates(e), c--) : (f._renderDataItem(e, b, c), b++)
			},
			_renderGroupAggregates: function (b) {
				if (b.aggregate) {
					var c, d, e, f, g, h = this,
						i = h.columns,
						j = {},
						k = b.aggregate;
					for (f = 0; f < i.length; f++)
						if (d = i[f].groupFooterTemplate) {
							c = a("<tr class='sui-group-footer' />").appendTo(h.contentTable.tbody);
							break
						}
					if (c) {
						for (f = 0; f < i.length; f++)
							if (g = a("<td class='sui-group-footer-cell' />").appendTo(c), d = i[f].groupFooterTemplate) {
								e = i[f].field;
								for (var l = 0; l < k.length; l++) k[l].field == e && (v(k[l].aggregate) ? j.custom = k[l].value : j[k[l].aggregate] = k[l].value);
								if (v(d)) {
									var m = d.call(h, g, j);
									z(m) && !C(m) && "" !== m && g.html(m)
								} else g.html(o.call(h, d, j))
							}
						var n = h.dataSource.group.length;
						for (f = 0; f < n; f++) c.prepend(a("<td class='sui-indent-cell' />"))
					}
				}
			},
			_renderGroupHeader: function (b, c) {
				var d = this,
					e = d.contentTable,
					f = d._getVisibleColumnCount() + d.dataSource.group.length - c + 1,
					g = a('<tr class="sui-group-header" data-group-level="' + c + '"/>').appendTo(e),
					h = a('<td class="sui-group-header-cell" colspan="' + f + '"/>').appendTo(g),
					i = a('<span class="sui-collapse">&#9662;</span>').appendTo(h),
					j = d._getColumnByField(b.field),
					k = j ? j.groupHeaderTitle : b.field;
				a('<span class="sui-group-header-text">' + k + ": " + b.value + "</span>").appendTo(h), i.on(ra, J(d._expandCollapseHandler, d))
			},
			_expandCollapseHandler: function (b) {
				var c, d = this,
					e = a(b.currentTarget),
					f = e.parent().parent();
				e.hasClass("sui-collapse") ? (c = d.trigger(ga, {
					commandName: La,
					cancel: !1,
					row: f
				}), c.cancel || (d.collapseGroup(f), e.html("&#9656;"), e.removeClass("sui-collapse").addClass("sui-expand"), d.trigger(La, {
					row: f
				}))) : (c = d.trigger(ga, {
					commandName: Ma,
					cancel: !1,
					row: f
				}), c.cancel || (d.expandGroup(f), e.html("&#9662;"), e.removeClass("sui-expand").addClass("sui-collapse"), d.trigger(Ma, {
					row: f
				})))
			},
			_renderDataItem: function (a, b, c) {
				var d = this,
					e = d.contentTable;
				d._renderRow(b, e, a).attr("data-group-level", c)
			},
			_renderRowsAndDetails: function (a) {
				var b, c, d = this,
					e = d.contentTable;
				for (c = 0, b = a.length; c < b; c++) d._renderRow(c, e.tbody, d.dataSource.view[c]), d._hasDetailTemplate() && !d._canExpandCollapse() && d._addDetailTemplate(a[c])
			},
			_renderRow: function (b, c, d) {
				var f, g, h, i, j = this,
					k = z(c),
					l = j.options,
					m = !!B(l.altRows) || l.altRows,
					n = m && b % 2 && l.altRowTemplate ? l.altRowTemplate : l.rowTemplate,
					p = j.columns;
				if (n) w(n) && (n = n.replace(/^\s+/, "").replace(/\s+$/, "")), g = a(o(n, d)), k && c.append(g);
				else {
					if (g = a('<tr class="' + (m && b % 2 ? "sui-alt-row" : "sui-row") + '"/>').data(Ta, b), arguments.length > 3) {
						var q = arguments[3],
							s = c.find("tr"),
							t = s.eq(q);
						s.length == q ? c.append(g) : g.insertBefore(t)
					} else k && c.append(g);
					for (i = 0; i < p.length; i++) {
						var u, x, y = p[i],
							A = y.columnTemplate,
							D = y.format,
							E = y.field,
							F = y.buttons,
							G = a("<td " + e(y.attributes) + ' role="gridcell" tabindex="-1"/>').addClass("sui-cell").appendTo(g);
						if (G.attr(U, "gridcell").attr(Z, "-1"), y.editable || G.attr(W, $), F)
							for (x = 0; x < F.length; x++) j._buildButton(F[x], G, b);
						else A ? v(A) ? (u = A.call(j, G, d, b), z(u) && !C(u) && "" !== u && G.html(u)) : G.html(o.call(j, A, d)) : D ? G.html(o.call(j, D, E ? r(d, E) : d)) : G.html("" + r(d, E));
						y.visible || G.css(Pa, Qa)
					}
				}
				return j._hasDetailTemplate() && j._canExpandCollapse() && (h = j.trigger(ga, {
					commandName: Ea,
					cancel: !1,
					item: d
				}), h.cancel ? f = a('<td class="sui-cell sui-expand-cell-disabled"/>') : (f = a('<td class="sui-cell sui-expand-cell"/>'), j._setExpandCollapseCellText(f, l.detailExpandText, l.detailCollapseText)), f.prependTo(g)), g.attr(U, Sa), g
			},
			_renderFooter: function () {
				var b, c, d, e, f, g, h, i = this,
					j = i.options,
					k = i.columns,
					l = {},
					m = i.dataSource.aggregates;
				for (i._footer && (a(i._footer).remove(), i._footer = null), f = 0; f < k.length; f++)
					if (d = k[f].footerTemplate) {
						if (j.scrolling && j.scrolling.virtual) {
							var n = a('<div class="sui-footer" style="padding-right:16px;"/>').appendTo(i.element),
								p = a('<div class="sui-footer-content"/>').appendTo(n),
								q = a('<table class="sui-table"/>').appendTo(p),
								r = i.element.find(".sui-headercontent > table > colgroup > col"),
								s = a("<colgroup/>").appendTo(q);
							for (g = 0; g < r.length; g++) a(r[g].outerHTML).appendTo(s);
							b = a("<tbody/>").appendTo(q), i._footer = n
						} else b = a("<tfoot/>").appendTo(i.contentTable), i._footer = b;
						c = a('<tr class="sui-grid-footer"/>').appendTo(b);
						break
					}
				if (c) {
					for (f = 0; f < k.length; f++)
						if (h = a('<td class="sui-footer-cell" role="gridcell" tabindex="-1"/>').appendTo(c), d = k[f].footerTemplate) {
							for (e = k[f].field, g = 0; g < m.length; g++) m[g].field == e && (v(m[g].aggregate) ? l.custom = m[g].value : l[m[g].aggregate] = m[g].value);
							if (v(d)) {
								var t = d.call(i, h, l);
								z(t) && !C(t) && "" !== t && h.html(t)
							} else h.html(o.call(i, d, l))
						}
					var u = c.prev();
					u.length <= 0 && (u = i.contentTable.find(">tbody > tr").first()), (u.find(".sui-expand-cell").length > 0 || u.find(".sui-expand-cell-disabled").length > 0 || u.find(".sui-indent-cell").length > 0 || u.find(".sui-collapse-cell").length > 0) && c.prepend(a("<td/>"))
				}
			},
			_buildButton: function (c, d, e) {
				var f, g = this,
					h = c.commandName,
					i = c.click;
				if (b.ui.Button) {
					var j = a('<button type="button">' + c.caption + "</button>").appendTo(d);
					d.addClass("sui-button-cell"), "delete" === h ? (i = g._deleteButtonClicked, B(c.cls) ? c.cls = "sui-delete" : c.cls += " sui-delete") : "edit" === h && (g._editing && (g._editing.type = Sa), g._preventClosingEditors = !0, i = g._editButtonClicked, B(c.cls) ? c.cls = "sui-edit" : c.cls += " sui-edit"), f = new b.ui.Button(j, {
						cls: c.cls,
						events: {
							click: J(i, g, e, d)
						}
					}), "delete" != h && "edit" != h || (g._buttons || (g._buttons = []), g._buttons.push({
						index: e,
						button: f
					}))
				}
			},
			_deleteButtonClicked: function (a, b) {
				var d, e = this,
					f = e.dataSource,
					g = e.options.editing,
					h = g ? g.confirmation : null;
				if (d = e.trigger(ga, {
						commandName: Ja,
						cancel: !1,
						rowIndex: a
					}), !d.cancel) {
					if (h && h["delete"] && h["delete"].enabled && !c.confirm(o(h["delete"].template, f.view[a]))) return;
					f.removeAtView(a), g && !g.batch && f.save(!1), e.trigger(Ja, {
						rowIndex: a
					})
				}
			},
			_editButtonClicked: function (c, d) {
				var e = this,
					f = e._editing,
					g = e.dataSource,
					h = a(d).parent(),
					i = e.trigger(ga, {
						commandName: Ga,
						cancel: !1,
						row: h,
						cell: d,
						index: e._getRowIndex(h)
					});
				i.cancel || (e._editingInProcess = !0, g.tracker && g.tracker.changes && g.tracker.changes.added && g.tracker.changes.added.length > 0 ? g.cancel() : "popup" != e.options.editing.mode ? (e._closeAllEditedRows(), f && f.options.enabled && f._putRowInEditMode(h, 0), e._changeEditColumnButtons(c, d)) : b.ui.Window && e._initializePopupForm(c), e.trigger(Ga, {
					row: a(d).parent(),
					cell: d,
					index: e._getRowIndex(a(d).parent())
				}))
			},
			_initializePopupForm: function (c, d) {
				var e, f, g, h, i, j = this,
					k = j._editing,
					l = j.dataSource;
				for (e = a('<div class="sui-modal-popup-edit-window"/>').appendTo(E.body), f = a('<div class="sui-edit-form-container"/>'), g = j.options.columns, h = 0; h < g.length; h++)
					if (i = g[h], i.editable !== !1 && i.field) {
						var m = z(l.schema.options.fields) ? l.schema.options.fields[i.field].type : String,
							n = l.editView(c).data,
							o = r(n, i.field);
						j._windowEditingIndex = c, a('<div class="sui-edit-form-label"><label for="' + i.field + '">' + (i.caption ? i.caption : i.field) + "</label></div>").appendTo(f);
						var p = a('<div class="sui-edit-field"></div>').appendTo(f);
						if (i.editor) k._instantiateCustomEditor(i, p, n, 0, !1, i.field);
						else switch (m) {
							case Number:
								k._instantiateNumeric(p, o, !1, i.field);
								break;
							case Date:
								k._instantiateDatePicker(p, o, !1, i.field);
								break;
							case String:
								k._instantiateTextBox(p, o, !1, i.field);
								break;
							case Boolean:
								k._instantiateCheckBox(p, o, !1, i.field)
						}
					}
				var q = a('<div class="sui-update-buttons sui-popup-buttons"></div>').appendTo(f),
					s = a("<button type='button'>Save</button>").appendTo(q),
					t = a("<button type='button'>Cancel</button>").appendTo(q);
				if (b.ui.Button) {
					var u = new b.ui.Button(s, {
							events: {
								click: J(j._updateButtonClicked, j)
							}
						}),
						v = new b.ui.Button(t, {
							events: {
								click: J(j._cancelButtonClicked, j)
							}
						});
					j._buttons = [], j._buttons.push({
						index: 1e4,
						button: u
					}), j._buttons.push({
						index: 1e4,
						button: v
					})
				}
				f.appendTo(E.body), j.popupWindow = new b.ui.Window(e, {
					title: d ? "Insert" : "Edit",
					draggable: {
						enabled: !1
					},
					events: {
						close: J(j._cancelButtonClicked, j)
					},
					height: a(".sui-edit-form-container").height() + 57,
					modal: !0
				}), j.popupWindow.content(f), j.popupWindow.resize({
					width: a(".sui-modal-popup-edit-window").width(),
					height: a(".sui-edit-form-container").height() + 66
				}), j.trigger(d ? Oa : Na)
			},
			_changeEditColumnButtons: function (a, b) {
				var c = this;
				c._removeButtons(b, a), c._buildButton({
					caption: "Update",
					click: c._updateButtonClicked,
					cls: "sui-update"
				}, b, a), c._buildButton({
					caption: "Cancel",
					click: c._cancelButtonClicked,
					cls: "sui-cancel"
				}, b, a), b.addClass("sui-update-buttons")
			},
			_removeButtons: function (a, b) {
				for (var c = this, d = c._buttons.length; d--;) c._buttons[d].index == b && (c._buttons[d].button.destroy(), c._buttons.splice(d, 1));
				a.removeClass("sui-update-buttons").empty()
			},
			_updateButtonClicked: function (a, b) {
				var c = this;
				return B(c._windowEditingIndex) || (a = c._windowEditingIndex), c._updateItem(a, b), c._editing._errorDuringEdit ? void(c._editing._errorDuringEdit = !1) : (c._putRowInViewMode(a, b), void("popup" === c.options.editing.mode && c._removePopupWindow()))
			},
			_updateItem: function (a, b) {
				var c, e, f, g, h, i, j, k = this,
					l = k.dataSource,
					m = (k.pager, []),
					n = !0;
				if (l.group && l.group.length > 0 && "popup" != k.options.editing.mode)
					for (h = k.contentTable.find(".sui-row, .sui-alt-row"), i = k.contentTable.find("tr").get(a), j = 0; j < h.length; j++)
						if (h[j] == i) {
							a = j;
							break
						}
				c = l.editView(a);
				for (g in c.data) c.data.hasOwnProperty(g) && (null != c.data[g] && (n = !1), k._editing._editors[g] && ("custom" == k._editing._editors[g] ? (f = k.trigger("getCustomEditorValue", {
					field: g,
					value: null
				}), e = f.value, k._editing._editors[g] = null) : e = k._editing._editors[g].value ? k._editing._editors[g].value() : k._editing._editors[g].checked ? k._editing._editors[g].checked() : d, c.data[g] != e && m.push(g), (B(e) || null == e) && (e = k._getDefaultValue(g)), c.set(g, e)));
				return k._editing._errorDuringEdit ? void(m.length = 0) : (k._editing.options.batch || (f = k.trigger(ga, {
					commandName: Ia,
					cancel: !1
				}), f.cancel || (l.save(!1), k.trigger(Ia))), k._populateInsertedItem = n, m)
			},
			_getDefaultValue: function (a) {
				var c, d = this,
					e = d.dataSource.schema;
				return e && e.options.fields ? (c = e.options.fields, b.Model.def(r(c, a + ".type"), r(c, a + ".def"), r(c, a + ".nullable"))) : ""
			},
			_closeAllEditedRows: function () {
				var b, c, d = this,
					e = d.contentTable.find(".sui-editable-cell");
				e.length > 0 && (b = e.get(0).parentNode.rowIndex, c = d.contentTable.find(".sui-update-buttons").get(0), d._cancelButtonClicked(b, a(c)))
			},
			_cancelButtonClicked: function (a, b) {
				var c, d, e, f = this,
					g = f.dataSource,
					h = f.trigger(ga, {
						commandName: Fa,
						cancel: !1,
						rowIndex: a,
						cell: b
					});
				if (!h.cancel) {
					if (g.tracker && g.tracker.changes && g.tracker.changes.added && g.tracker.changes.added.length > 0) g.cancel(), "popup" === f.options.editing.mode && f._removePopupWindow();
					else if ("popup" != f.options.editing.mode) f._putRowInViewMode(a, b);
					else {
						for (c = f.options.columns, d = 0; d < c.length; d++) e = f._editing._editors[c[d].field], e && (v(e.destroy) && f._editing._editors[c[d].field].destroy(), delete f._editing._editors[c[d].field]);
						f._removePopupWindow()
					}
					f.trigger(Fa)
				}
			},
			_removePopupWindow: function () {
				var b = this;
				b._removeButtons(a(".sui-window .sui-update-buttons"), 1e4), b.popupWindow.destroy(), a(".sui-modal-popup-edit-window").remove()
			},
			_getRowIndex: function (b) {
				var c = a(b).data(Ta);
				return z(c) ? c : -1
			},
			_putRowInViewMode: function (b, c) {
				var d, e, f, g, h = this,
					i = h.options,
					j = i.navigation,
					k = h.dataSource,
					l = h.contentTable,
					m = b,
					n = -1;
				if (k.group && k.group.length > 0 && "popup" != i.editing.mode)
					for (f = l.find(">tbody > tr.sui-row, >tbody > tr.sui-alt-row"), e = l.find(">tbody > tr").get(b), g = 0; g < f.length; g++)
						if (f[g] == e) {
							m = g;
							break
						}
				d = k.view[m], c && "popup" != i.editing.mode && h._removeButtons(c, b), e = l.find(">tbody > tr").get(b);
				var o = parseInt(a(e).attr("data-group-level"), 10);
				for (j && (n = a(e).children("td").index(h._activeCell)), h._editing._destroyRow(b), e = h._renderRow(m, h.contentTable.tbody, d, b), j && n > -1 && (h._activeCell = a(e).children("td").eq(n), a(h._activeCell).focus()), g = 0; g < o; g++) a('<td class="sui-indent-cell sui-group-intend-cell"/>').prependTo(e);
				if (o && e.attr("data-group-level", o), h._editing.options.batch) {
					var p = e.children(".sui-cell");
					if (h._markedCells && h._markedCells[b]) {
						var q, r, s = h._markedCells[b];
						for (g = 0; g < s.length; g++) q = s[g], r = a(p[q]).html(), a(p[q]).html('<span class="sui-updated-marker"/>' + r)
					}
				}
			},
			_renderUpdateMarkers: function (b, c) {
				var d, e, f, g = this,
					h = g.columns,
					i = g.contentTable.find(">tbody > tr").eq(c).children(".sui-cell");
				for (d = 0; d < b.length; d++)
					for (e = 0; e < h.length; e++) h[e].field === b[d] && (f = a(i[e]).html(), a(i[e]).html('<span class="sui-updated-marker"/>' + f), g._markedCells ? (g._markedCells[c] || (g._markedCells[c] = []), g._markedCells[c].push(e)) : (g._markedCells = {}, g._markedCells[c] = [], g._markedCells[c].push(e)))
			},
			_selection: function () {
				var a = this,
					b = a.options;
				b.selection && (a._selectable && a._selectable.destroy(), a._selectable = new _a(b.selection, a))
			},
			_filtering: function () {
				var a = this,
					b = a.options;
				b.filtering && b.filtering.enabled && (a._filter && a._filter.destroy(), a._filter = new Za(a))
			},
			_paging: function (c) {
				var d, e = this,
					f = e.element;
				b.ui.Pager && c && (x(c) && c instanceof b.ui.Pager ? (e.pager = c, e.pager.dataSource = e.dataSource, e.pager.element.appendTo(f)) : (d = a("<div/>").appendTo(f), d.addClass("sui-pager"), e.pagerWrapper = d, e.pager = new b.ui.Pager(d.get(0), K({}, c, {
					dataSource: e.dataSource
				}))))
			},
			_reorder: function () {
				var a = this,
					b = a.options;
				b.columnReorder && (a._columnReorder = new cb(a))
			},
			_expandCollapseDetailTemplate: function (b) {
				var c = this,
					d = a(b.target).closest(".sui-row", c.contentTable);
				d.length || (d = a(b.target).closest(".sui-alt-row", c.contentTable)), c._toggleDetailTemplate(d)
			},
			_toggleDetailTemplate: function (b) {
				var c, d = this,
					e = d.contentTable.find("tr:first").parent().children().not(".sui-detail-row"),
					f = N(b[0], e),
					g = d.dataSource.view,
					h = b.next(),
					i = d.options;
				h && h.hasClass("sui-detail-row") ? (h.toggle(), c = a(b.get(0).cells[0]), d._toggleClasses(c, "sui-expand-cell", "sui-collapse-cell"), d._setExpandCollapseCellText(c, i.detailExpandText, i.detailCollapseText)) : d._addDetailTemplate(g[f], b)
			},
			_setExpandCollapseCellText: function (a, b, c) {
				B(c) && (c = "-"), B(b) && (b = "+");
				var d = this.options.detailCollapseCssClass,
					e = this.options.detailExpandCssClass;
				d = B(d) ? "" : " class = '" + d + "'", e = B(e) ? "" : " class = '" + e + "'", a.hasClass("sui-collapse-cell") ? a.html("<span" + d + ">" + c + "</span>") : a.hasClass("sui-expand-cell") && a.html("<span" + e + ">" + b + "</span>")
			},
			_addDetailTemplate: function (b, c) {
				var d, e = this,
					f = e.options,
					g = a("<tr class='sui-detail-row'/>");
				e._canExpandCollapse() && (d = a("<td class='sui-cell sui-indent-cell'/>"), R && d.html("&nbsp;"), d.appendTo(g));
				var h = a('<td class="sui-detail-cell" colspan="' + e._getVisibleColumnCount() + '"></td>'),
					i = e.trigger(ga, {
						commandName: ua,
						cancel: !1,
						detailCell: h,
						item: b
					});
				if (!i.cancel && (h.appendTo(g), f.detailTemplate && h.html(o(f.detailTemplate, b)), c ? g.insertAfter(c) : g.appendTo(e.contentTable.tbody), e.trigger(ua, {
						detailCell: h,
						item: b
					}), c)) {
					var j = a(c.get(0).cells[0]);
					e._toggleClasses(j, "sui-expand-cell", "sui-collapse-cell"), e._setExpandCollapseCellText(j, f.detailExpandText, f.detailCollapseText)
				}
			},
			_toggleClasses: function (a, b, c) {
				a.hasClass(b) ? (a.removeClass(b), a.addClass(c)) : (a.removeClass(c), a.addClass(b))
			},
			_resizing: function () {
				var a = this;
				a.options.resizing && a.options.scrolling && (a._columnResizing = new Ya(a))
			},
			_initToolbar: function () {
				var a = this,
					b = a.options;
				b.toolbar && (a._toolbar = new Va(b.toolbar, a))
			},
			_initEditing: function () {
				var a = this,
					b = a.options;
				b.editing && (a._buttons = [], a._editing = new Wa(b.editing, a))
			},
			_refreshOnSort: function () {
				this._sortingInProgress = !0, this.dataSource.read()
			},
			_dsStartHandler: function () {
				this.loading(!0)
			},
			_initNavigation: function () {
				var b = this,
					c = b.element,
					d = b._eventNS + "nav",
					e = ".sui-headercell[tabindex], .sui-filter-cell[tabindex], .sui-cell[tabindex], .sui-footer-cell[tabindex]";
				b.options.navigation && (c.addClass("sui-grid-nav").off(d).on(da + d, e, function (c) {
					a(b._activeCell).attr(Z, "-1"), b._activeCell = a(this), a(b._activeCell).attr(Z, "0")
				}), b._initActiveCell(), a(b._activeCell).attr(Z, "0"))
			},
			_initActiveCell: function () {
				var b = this;
				(a(b._activeCell).length <= 0 || !a(b._activeCell).is(":visible")) && (b._activeCell = a(b.element).find(".sui-cell[tabindex]").first(), a(b._activeCell).length <= 0 && (b._activeCell = a(b.element).find(".sui-headercell[tabindex]").first()))
			},
			_cellEditable: function (b) {
				return a(b).attr(W) != $ && !!a(b).hasClass("sui-editable-cell")
			},
			_keydown: function (b) {
				var c, d = this,
					e = d.element,
					f = b.keyCode,
					h = d.options,
					i = h.navigation,
					j = h.editing,
					k = h.selection,
					l = b.ctrlKey,
					m = (b.shiftKey, d.pager),
					n = !1,
					o = d._cellEditable(d._activeCell);
				if ("button" !== a(b.target).prop("tagName").toLowerCase() || f != t.ENTER && f != t.SPACE) {
					switch (f) {
						case t.UP:
							i && (o || (c = d._getNextNavCell("up"), c && (a(c).focus(), n = !0)));
							break;
						case t.DOWN:
							i && (o || (c = d._getNextNavCell("down"), c && (a(c).focus(), n = !0)));
							break;
						case t.LEFT:
							i && (o || (c = d._getNextNavCell("left"), c && (a(c).focus(), n = !0)));
							break;
						case t.RIGHT:
							i && (o || (c = d._getNextNavCell("right"), c && (a(c).focus(), n = !0)));
							break;
						case t.HOME:
							i && (o || (c = l ? a(e).find(".sui-cell[tabindex], .sui-headercell[tabindex], .sui-footer-cell[tabindex]").first() : d._getNextNavCell("first"), c && (a(c).focus(), n = !0)));
							break;
						case t.END:
							i && (o || (c = l ? a(e).find(".sui-cell[tabindex], .sui-headercell[tabindex], .sui-footer-cell[tabindex]").last() : d._getNextNavCell("last"), c && (a(c).focus(), n = !0)));
							break;
						case t.ENTER:
							i && (a(d._activeCell).hasClass("sui-cell") ? j && (o ? d._updateButtonClicked(a(d._activeCell).parent().get(0).rowIndex, a(d._activeCell)) : d._editing._editingTriggered(b), n = !0) : a(d._activeCell).hasClass("sui-headercell") && (a(d._activeCell).children(".sui-link").length > 0 && (d.one(ka, J(d.focus, d)), a(d._activeCell).children(".sui-link").first().click()), n = !0));
							break;
						case t.PAGEUP:
							i && (m && m.hasPrev() && (d.one(ka, J(d.focus, d)), d.pager.prev()), n = !0);
							break;
						case t.PAGEDOWN:
							i && (m && m.hasNext() && (d.one(ka, J(d.focus, d)), d.pager.next()), n = !0);
							break;
						case t.ESC:
							o && (d.cancelEditing(), i && a(d._activeCell).focus(), n = !0);
							break;
						case t.SPACE:
							i && k && d._selectable && !o && (d._selectable.elements = g(b, d.contentTable, d.frozenContentTable), d._selectable.elements && d._selectable._performAndProcessSelection(b), n = !0)
					}
					n && b.preventDefault()
				}
			},
			_getNextNavCell: function (b) {
				var c, d = this,
					e = (d.element, d._activeCell);
				return (!e || a(e).length <= 0) && (e = a(d.element).find('.sui-cell[tabindex="0"], .sui-headercell[tabindex="0"]').first()), "left" == b ? c = d.__findPrevFocusCell(e) : "right" == b ? c = d.__findNextFocusCell(e) : "up" == b ? c = d.__findAboveFocusCell(e) : "down" == b ? c = d.__findBelowFocusCell(e) : "first" == b ? c = d.__findFirstFocusCell(e) : "last" == b && (c = d.__findLastFocusCell(e)), c && a(c).length > 0 ? a(c).get(0) : null
			},
			__findFirstFocusCell: function (a) {
				for (var b, c = this, d = c.__findPrevFocusCell(a); d && d.length > 0;) b = d, d = c.__findPrevFocusCell(d);
				return b
			},
			__findLastFocusCell: function (a) {
				for (var b, c = this, d = c.__findNextFocusCell(a); d && d.length > 0;) b = d, d = c.__findNextFocusCell(d);
				return b
			},
			__findPrevFocusCell: function (b) {
				for (var c = a(b).prev(); c && c.length > 0;) {
					if (f(c, Z)) return c;
					c = a(b).prev()
				}
				return d
			},
			__findNextFocusCell: function (b) {
				for (var c = a(b).next(); c && c.length > 0;) {
					if (f(c, Z)) return c;
					c = a(b).next()
				}
				return d
			},
			__findAboveFocusCell: function (b) {
				for (var c, e = this, g = a(b).closest("tr"), h = a(b).index(), i = e.headerTable.find(">thead > tr").add(e.contentTable.find(">tbody > tr")).add(e.contentTable.find(">tfoot > tr")), j = a(i).index(g); j > 0;) {
					if (c = a(a(i)[j - 1]).children().eq(h), f(c, Z)) return c;
					j--
				}
				return d
			},
			__findBelowFocusCell: function (b) {
				for (var c, e = this, g = a(b).closest("tr"), h = a(b).index(), i = e.headerTable.find(">thead > tr").add(e.contentTable.find(">tbody > tr")).add(e.contentTable.find(">tfoot > tr")), j = a(i).index(g); j < i.length - 1;) {
					if (c = a(a(i)[j + 1]).children().eq(h), f(c, Z)) return c;
					j++
				}
				return d
			},
			focus: function () {
				var b = this;
				b.options.navigation ? (b._initActiveCell(), a(b._activeCell).length > 0 ? a(b._activeCell).focus() : j(b.element)) : j(b.element)
			},
			refresh: function (d) {
				var e = this,
					f = d ? d.dataSource : null,
					g = e._eventNS;
				d = b.extend([m], e.options, d), f && (d.dataSource = f);
				var h, i = e.element,
					j = d.scrolling,
					k = e.pager ? e.pager.options : d.paging,
					l = 0;
				j && e.contentWrapper && (l = e.contentWrapper.get(0).scrollLeft), e._destroyInternal(), h = e.dataSource = n.create(d.dataSource), i.attr(U, "grid").on(ma + g, J(e._keydown, e)), d.editing || i.attr(W, $), h.on(ca + g, J(e._renderData, e)).on(ea + g, J(e._dsStartHandler, e)), a(c).on(qa + g, J(e._resizeHandler, e)), e._resolveColumns(d.columns), e._createWrappers(), e._createHeaderTable(), e._createContentTable(), e._initToolbar(), e._initEditing(), e._filtering(), e._paging(k), e._resizing(), e._reorder(), e._initNavigation(), e.pager || e.dataSource.read(), e._sorting(), l && (e.contentWrapper.get(0).scrollLeft = l)
			},
			loading: function (a, c) {
				var d = this,
					e = function () {
						d.loadingPanel && d.loadingPanel.show()
					};
				b.ui.LoadingPanel && (a ? (d.loadingPanel || (d.loadingPanel = new b.ui.LoadingPanel(d.element.get(0))), c ? e() : d.loadingPanelTimeout = setTimeout(e, 50)) : d.loadingPanel && (clearTimeout(d.loadingPanelTimeout), d.loadingPanelTimeout = null, d.loadingPanel.hide()))
			},
			select: function (b) {
				var c = this,
					d = c._selectable;
				return b = w(b) ? c.contentTable.find(b) : a(b), b.length ? (d.multiple || (d.clear(), b = b.first()), void d.select(b)) : d.select()
			},
			selectedRowIndices: function () {
				var b = this,
					c = [],
					d = [];
				return b.contentTable.children("tbody").children(".sui-row, .sui-alt-row").each(function () {
					if (a(this).hasClass(ba)) {
						var e = b._getRowIndex(a(this));
						c.push(e), d.push(e >= 0 ? b.dataSource.getDataIndex(e) : e)
					}
				}), {
					view: c,
					data: d
				}
			},
			clearSelection: function () {
				this._selectable.clear()
			},
			sort: function (a, b, c) {
				this.sorting && this.sorting._sort(a, b, c)
			},
			_getItemRow: function (b) {
				return a(A(b) ? this.contentTable.children("tbody").children(".sui-row, .sui-alt-row").get(b) : b)
			},
			expandRow: function (a) {
				var b = this,
					c = b._getItemRow(a),
					d = c.next();
				d.hasClass("sui-detail-row") ? d.css(Pa) == Qa && b._toggleDetailTemplate(c) : b._toggleDetailTemplate(c)
			},
			collapseRow: function (a) {
				var b = this,
					c = b._getItemRow(a),
					d = c.next();
				d.hasClass("sui-detail-row") ? d.css(Pa) != Qa && b._toggleDetailTemplate(c) : (b._toggleDetailTemplate(c), c.next().toggle())
			},
			reorderColumn: function (b, c, d) {
				var e, f = this,
					g = f.element,
					h = f.columns,
					i = f.options.columns || [],
					j = f.headerWrapper,
					k = "before",
					l = j.find(".sui-columnheader").first().find(".sui-indent-cell").length;
				if (b = +b, c = +c, isNaN(b) || isNaN(c) || b < 0 || c < 0 || b > h.length - 1 || c > h.length - 1) throw new Error("Invalid index in column reorder.");
				b !== c && (c > b && (k = "after"), e = h[b], !e.visible || !d && e.locked || (e = h.splice(b, 1)[0], h.splice(c, 0, e), e = i.splice(b, 1)[0], i.splice(c, 0, e), b += l, c += l, g.find(".sui-gridheader col:nth-child(" + (b + 1) + ")").add(g.find(".sui-gridheader .sui-columnheader th:nth-child(" + (b + 1) + ")")).add(g.find(".sui-gridheader .sui-filter-row th:nth-child(" + (b + 1) + ")")).add(g.find(".sui-gridcontent col:nth-child(" + (b + 1) + ")")).add(g.find(".sui-gridcontent tr:not(.sui-detail-row) td:nth-child(" + (b + 1) + ")")).each(function () {
					a(this).parent().children().eq(c)[k](this)
				})))
			},
			addRow: function (a) {
				return this.dataSource.add(z(a) ? a : {})
			},
			insertRow: function (a, b) {
				return this.dataSource.insertView(a, z(b) ? b : {})
			},
			saveChanges: function () {
				this.dataSource.save()
			},
			revertChanges: function () {
				this.dataSource.cancel()
			},
			dataItem: function (a) {
				return this.dataSource.view[a]
			},
			editCell: function (a, b) {
				var c = this,
					d = c.contentTable.find(">tbody > tr").eq(a).children("td").eq(b).get(0);
				c._editingInProcess = !0, c._editing._putCellInEditMode(d)
			},
			editRow: function (b) {
				var c = this,
					d = c.contentTable.find(">tbody > tr").eq(b).get(0);
				c._editingInProcess = !0, c._editing._putRowInEditMode(a(d), 0)
			},
			editRowPopup: function (a) {
				var c = this;
				c._editingInProcess = !0, b.ui.Window && c._initializePopupForm(a)
			},
			cancelEditing: function () {
				var b, c, d = this,
					e = d.contentTable.find(".sui-editable-cell");
				e.length > 0 && (b = e.get(0).parentNode.rowIndex, c = d.contentTable.find(".sui-update-buttons").get(0), d._putRowInViewMode(b, a(c))), d._editingInProcess = !1
			},
			deleteRow: function (a) {
				this.dataSource.removeAtView(a)
			},
			filter: function () {
				var a = this,
					b = a.dataSource,
					c = [].slice.call(arguments);
				return c.length > 0 ? (b.filter = c[0], void b.read()) : b.filter
			},
			group: function (a, b, c, d) {
				var e = this,
					f = e.dataSource.group;
				f ? f.splice(b, 0, {
					field: a,
					order: c,
					aggregates: d
				}) : (e.dataSource.group = [], e.dataSource.group.push({
					field: a,
					order: c,
					aggregates: d
				}))
			},
			ungroup: function (a) {
				var b, c = this,
					d = c.dataSource.group,
					e = !1;
				for (c.headerTable.thead.find(".sui-columnheader > .sui-indent-cell").remove(), b = 0; b < d.length; b++)
					if (d[b].field == a) {
						d.splice(b, 1), 0 === d.length && (c.dataSource.group = null), e = !0;
						break
					}
				e && c.dataSource.read()
			},
			collapseGroup: function (a) {
				for (var b = !0, c = parseInt(a.attr("data-group-level"), 10); b;)
					if (a = a.next().css(Pa, Qa), a.next().length > 0) {
						var d = parseInt(a.next().attr("data-group-level"), 10);
						d <= c && a.next().hasClass("sui-group-header") && (b = !1)
					} else b = !1
			},
			expandGroup: function (a) {
				for (var b = !0, c = parseInt(a.attr("data-group-level"), 10); b;) {
					if (a = a.next().css(Pa, ""), a.hasClass("sui-group-header") && a.find(".sui-expand").length > 0) return;
					if (a.next().length > 0) {
						var d = parseInt(a.next().attr("data-group-level"), 10);
						d <= c && a.next().hasClass("sui-group-header") && (b = !1)
					} else b = !1
				}
			},
			_getColumnByField: function (a) {
				var b, c = this,
					e = c.columns || [];
				for (b = 0; b < e.length; b++)
					if (e[b].field === a) return e[b];
				return d
			},
			_refreshColVisibility: function () {
				var a, b = this,
					c = b.columns,
					d = c.length,
					e = !1;
				for (a = 0; a < d; a++)
					if (!c[a].visible) {
						e = !0;
						break
					}
				if (e)
					for (a = 0; a < d; a++) c[a].visible ? b.showColumn(c[a].field) : b.hideColumn(c[a].field)
			},
			_getNextVisibleColumnRealIndex: function (a) {
				var b, c = this,
					d = c.columns;
				for (b = a.index + 1; b < d.length; b++)
					if (d[b].visible) return b;
				return -1
			},
			isHidden: function (a) {
				var b = this._getColumnByField(a);
				return b ? !b.visible : d
			},
			hideColumn: function (b) {
				var c = this,
					d = (a(c.element), c._getColumnByField(b));
				d && !d.locked && (a(c.headerTable).find("colgroup").first().find("col").each(function () {
					if (a(this).data(Ua) == b) return c._gridColumns[b].headerCol = a(this), a(this).detach(), !1
				}), a(c.contentTable).find("colgroup").first().find("col").each(function () {
					if (a(this).data(Ua) == b) return c._gridColumns[b].contentCol = a(this), a(this).detach(), !1
				}), c._changeColumnVisibility(b, "hide"), d.visible = !1, c._afterColumnVisibilityChange())
			},
			showColumn: function (b) {
				var c, e, f, g, h, i = this,
					j = (a(i.element), i._getColumnByField(b)),
					k = a(i.headerTable).find("colgroup"),
					l = a(i.contentTable).find("colgroup");
				j && !j.locked && (c = i._gridColumns[b], e = c.headerCol, f = c.contentCol, g = i._getNextVisibleColumnRealIndex(c), g === -1 ? (k.append(e), l.append(f)) : (h = i.columns[g].field, k.find("col").each(function () {
					if (a(this).data(Ua) == h) return a(e).insertBefore(a(this)), !1
				}), l.find("col").each(function () {
					if (a(this).data(Ua) == h) return a(f).insertBefore(a(this)), !1
				})), i._changeColumnVisibility(b, "show"), c.headerCol = c.contentCol = d, j.visible = !0, i._afterColumnVisibilityChange())
			},
			_changeColumnVisibility: function (b, c) {
				var d, e, f = this,
					g = a(f.element),
					h = a(f.headerTable).find(".sui-columnheader").first(),
					i = a(f.headerTable).find(".sui-filter-row").first(),
					j = -1;
				if (h.length && a(h).children().each(function (c) {
						if (a(this).attr("data-field") == b) return j = c, !1
					}), !(j < 0))
					for (a(h.find("th")[j])[c](), a(i.find("th")[j])[c](), d = g.find("> .sui-gridcontent > table > tbody > tr"), 0 === d.length && (d = g.find("> .sui-gridcontent > .sui-virtualized > table > tbody > tr")), 0 === d.length && (d = g.find("> .sui-gridcontent > .sui-content > table > tbody > tr")), e = 0; e < d.length; e++) a(d[e].cells[j])[c]()
			},
			_afterColumnVisibilityChange: function () {
				var b = this,
					c = b._getVisibleColumnCount(),
					d = b.dataSource,
					e = d.group ? d.group.length : 0;
				a(b.contentTable).find(".sui-grid-norecords-cell, .sui-detail-cell, .sui-group-header-cell").each(function () {
					a(this).hasClass("sui-group-header-cell") ? a(this).attr("colspan", c + e - D(a(this).parent().attr("data-group-level")) + 1) : a(this).attr("colspan", c)
				})
			},
			_getVisibleColumnFields: function () {
				var a, b = this,
					c = b.columns || [],
					d = c.length,
					e = [];
				for (a = 0; a < d; a++) c[a].visible && e.push(c[a].field);
				return e
			},
			_initFrozenCols: function () {
				var a, b = this,
					c = b.columns,
					d = c.length,
					e = !1;
				for (a = 0; a < d; a++)
					if (c[a].locked) {
						e = !0;
						break
					}
				if (e)
					for (b._initFrozenContainers(), a = 0; a < d; a++) c[a].locked && b.lockColumn(c[a].field)
			},
			_initFrozenContainers: function () {
				var b = this,
					c = b.options,
					d = c.scrolling;
				b.frozenHeaderWrapper || (b.frozenHeaderWrapper = a('<div class="sui-header-locked"/>').prependTo(d ? b.headerWrapper.parent() : b.headerWrapper), b.frozenHeaderTable = a('<table class="sui-table sui-non-selectable"' + (R ? ' cellspacing="0"' : "") + '><colgroup/><thead><tr class="sui-columnheader"/>' + (c.filtering && c.filtering.enabled ? '<tr class="sui-filter-row"/>' : "") + '</thead><tbody class="sui-hide"/></table>').appendTo(b.frozenHeaderWrapper)), b.frozenContentWrapper || (b.frozenContentWrapper = a('<div class="sui-content-locked"/>').prependTo(d ? b.contentWrapper.parent() : b.contentWrapper), b.frozenContentWrapper.height(b.frozenContentWrapper.parent().find(".sui-content").first().height()), b.frozenContentTable = a('<table class="sui-table' + (c.rowHover ? " sui-hover" : "") + '"' + (R ? ' cellspacing="0"' : "") + '><colgroup/><tbody/><tfoot><tr class="sui-grid-footer"/></tfoot></table>').appendTo(b.frozenContentWrapper), b._hasDetailTemplate() && (b._canExpandCollapse() && b.frozenContentTable.addClass("sui-expandable"), b.frozenContentTable.on(ra + b._eventNS, "> tbody > tr > .sui-expand-cell, > tbody > tr > .sui-collapse-cell", J(b._expandCollapseDetailTemplate, b))))
			},
			_destroyFrozenContainers: function () {
				var b = this;
				b.frozenHeaderWrapper && (a(b.frozenHeaderWrapper).remove(), b.frozenHeaderWrapper = null), b.frozenContentWrapper && (a(b.frozenContentWrapper).find(".sui-table").off(b._eventNS), a(b.frozenContentWrapper).remove(), b.frozenContentWrapper = null)
			},
			isLocked: function (a) {
				var b = this._getColumnByField(a);
				return b ? b.locked : d
			},
			lockColumn: function (b) {
				var c, d, e = this,
					f = a(e.element),
					g = e.options.filtering,
					h = e._getColumnByField(b),
					i = -1,
					j = e._footer;
				if (h && h.visible) {
					if (a(e.headerTable).find("colgroup").first().find("col").each(function () {
							if (a(this).data(Ua) == b) return a(this).appendTo(a(e.frozenHeaderTable).find("colgroup")), !1
						}), a(e.contentTable).find("colgroup").first().find("col").each(function () {
							if (a(this).data(Ua) == b) return a(this).appendTo(a(e.frozenContentTable).find("colgroup")), !1
						}), a(e.headerTable).find(".sui-columnheader").children().each(function (c) {
							if (a(this).attr("data-field") == b) return i = c, a(this).appendTo(a(e.frozenHeaderTable).find(".sui-columnheader")), !1
						}), g && g.enabled && i >= 0 && a(e.headerTable).find(".sui-filter-row").children().each(function (c) {
							if (a(this).attr("data-field") == b) return a(this).appendTo(a(e.frozenHeaderTable).find(".sui-filter-row")), !1
						}), j && i >= 0) {
						var k = a(e.frozenContentTable).find("> tfoot > .sui-grid-footer");
						a(j).find(".sui-grid-footer td:eq(" + i + ")").appendTo(k)
					}
					if (i >= 0) {
						c = f.find("> .sui-gridcontent > table > tbody > tr"), 0 === c.length && (c = f.find("> .sui-gridcontent > .sui-virtualized > table > tbody > tr")), 0 === c.length && (c = f.find("> .sui-gridcontent > .sui-content > table > tbody > tr"));
						var l = a(e.frozenContentTable).find("tbody"),
							m = l.children().length > 0;
						for (d = 0; d < c.length; d++) {
							var n = null;
							n = m ? a(l).children()[d] : a(c[d]).clone(!0, !1).empty().appendTo(l), a(c[d].cells[i]).appendTo(n)
						}
					}
					h.locked = !0, e._adjustWidthsLocked(), e._adjustHeightsLocked()
				}
			},
			unlockColumn: function (b) {
				var c, d, e, f, g = this,
					h = (a(g.element), g.options.filtering),
					i = g.columns,
					j = g._footer,
					k = g._getColumnByField(b),
					l = -1,
					m = -1;
				if (k && k.visible) {
					for (a(g.frozenHeaderTable).find("colgroup").first().children().each(function () {
							if (a(this).data(Ua) == b) return c = a(this), l = a(this).index(), !1
						}), a(g.frozenContentTable).find("colgroup").first().children().each(function () {
							if (a(this).data(Ua) == b) return d = a(this), m = a(this).index(), !1
						}), f = 0; f < i.length; f++)
						if (i[f].field === b) {
							f <= i.length - 2 && (e = i[f + 1].field);
							break
						}
					if (e) a(g.headerTable).find("> colgroup col").each(function (b) {
						if (a(this).data(Ua) === e) {
							if (a(c).insertBefore(a(this)), a(g.frozenHeaderTable).find(".sui-columnheader th:eq(" + l + ")").insertBefore(a(g.headerTable).find(".sui-columnheader th:eq(" + b + ")")), h && h.enabled && a(g.frozenHeaderTable).find(".sui-filter-row th:eq(" + l + ")").insertBefore(a(g.headerTable).find(".sui-filter-row th:eq(" + b + ")")), j) {
								var d = a(g.frozenContentTable).find("> tfoot > .sui-grid-footer");
								a(d).find("td:eq(" + l + ")").insertBefore(a(j).find(".sui-grid-footer td:eq(" + b + ")"))
							}
							return !1
						}
					}), a(g.contentTable).find("> colgroup col").each(function (b) {
						if (a(this).data(Ua) === e) {
							a(d).insertBefore(a(this));
							var c = a(g.contentTable).find(">tbody").first().children();
							return a(g.frozenContentTable).find(">tbody > tr").each(function (d) {
								a(this).find("td:eq(" + m + ")").insertBefore(a(c[d]).find("td:eq(" + b + ")"))
							}), !1
						}
					});
					else {
						if (a(g.headerTable).find("colgroup").append(c), a(g.contentTable).find("colgroup").append(d), a(g.frozenHeaderTable).find(".sui-columnheader th:eq(" + l + ")").appendTo(a(g.headerTable).find(".sui-columnheader")), h && h.enabled && a(g.frozenHeaderTable).find(".sui-filter-row th:eq(" + l + ")").appendTo(a(g.headerTable).find(".sui-filter-row")), j) {
							var n = a(g.frozenContentTable).find("> tfoot > .sui-grid-footer");
							a(n).find("td:eq(" + l + ")").appendTo(a(j).find(".sui-grid-footer"))
						}
						var o = a(g.contentTable).find(">tbody").first().children();
						a(g.frozenContentTable).find(">tbody > tr").each(function (b) {
							a(this).find("td:eq(" + m + ")").appendTo(a(o[b]))
						})
					}
					k.locked = !1, g._adjustWidthsLocked(), g._adjustHeightsLocked()
				}
			},
			_adjustWidthsLocked: function () {
				var b = this;
				b.frozenHeaderWrapper && (a(b.headerWrapper).parent().css(p.isRtl(b.element) ? "padding-left" : "padding-right", 0), a(b.headerWrapper).outerWidth(a(b.headerWrapper).parent().innerWidth() - a(b.frozenHeaderWrapper).outerWidth() - p.scrollbar()), a(b.contentWrapper).outerWidth(a(b.contentWrapper).parent().innerWidth() - a(b.frozenContentWrapper).outerWidth() - 1))
			},
			_adjustHeightsLocked: function (b) {
				var c, d, e, f, g, h, i, j, k, l, m, n, o, p = this,
					q = p.options.filtering,
					r = p._footer;
				if (p.frozenHeaderWrapper) {
					for (g = a(p.frozenHeaderTable).find("tr").first(), g.height("auto"), h = D(g.height()), i = a(p.headerTable).find("tr").first(), i.height("auto"), j = D(i.height()), h > j ? (g.height(h), i.height(h)) : h < j && (g.height(j), i.height(j)), q && q.enabled && (k = a(p.frozenHeaderTable).find("tr.sui-filter-row").first(), k.height("auto"), l = D(k.height()), m = a(p.headerTable).find("tr.sui-filter-row").first(), m.height("auto"), n = D(m.height()), l > n ? (k.height(l), m.height(l)) : l < n && (k.height(n), m.height(n))), c = a(p.frozenContentTable).find("tbody").first().children(), e = a(p.contentTable).find("> tbody").children(), o = 0; o < e.length; o++) a(c[o]).height("auto"), d = D(a(c[o]).height()), a(e[o]).height("auto"), f = D(a(e[o]).height()), d > f ? (a(c[o]).height(d), a(e[o]).height(d)) : d < f && (a(c[o]).height(f), a(e[o]).height(f));
					if (r) {
						var s, t, u = a(p.frozenContentTable).find("> tfoot > .sui-grid-footer"),
							v = a(r).find(".sui-grid-footer").first();
						u.height("auto"), s = D(u.height()), v.height("auto"), t = D(v.height()), s > t ? (u.height(s), v.height(s)) : s < t && (u.height(t), v.height(t))
					}
					b && p._initScrolling()
				}
			},
			_getOtherRow: function (b) {
				var c, d, e, f = this;
				if (f.frozenHeaderWrapper) {
					if (c = a(b).index(), d = a(f.frozenContentTable).find("tbody").first().children(), e = a(f.contentTable).find("> tbody").children(), a(b)[0] === a(d)[c]) return a(e)[c];
					if (a(b)[0] === a(e)[c]) return a(d)[c]
				}
				return null
			},
			exportExcel: function () {
				this._doExcelExport()
			},
			exportPdf: function () {
				this._doPdfExport()
			},
			exportCsv: function () {
				this._doCsvExport()
			},
			_doExcelExport: function () {
				var a, b, c, e, f, g, h, i, j = this,
					k = j.options,
					l = [],
					m = [];
				q && (h = j.trigger(ga, {
					commandName: "exportExcel",
					cancel: !1,
					exportOptions: K(!0, {}, k.exportOptions)
				}), h.cancel || (j.loading(!0, !0), setTimeout(function () {
					a = K(!0, {
							proxy: d,
							excel: {
								fileName: "Untitled",
								fileFormat: "xlsx",
								noLegacyFallback: !1,
								author: d,
								created: new Date,
								producer: d,
								dataSource: d,
								readDataSource: !1,
								columnFields: d,
								header: {
									enabled: !0,
									style: {
										bold: !0
									},
									cells: d
								},
								worksheet: {
									name: "Sheet1",
									columns: d
								},
								worksheets: [],
								worksheetIndex: 0
							}
						}, h.exportOptions), b = a.excel, f = b.columnFields, f || (f = j._getVisibleColumnFields()), g = f.length, b.worksheet.columns || (b.worksheet.columns = L(f, function (a) {
							return {
								autoWidth: !0
							}
						})), e = K(!0, {}, b.worksheet), b.header && b.header.enabled && (b.header.cells ? m.push({
							cells: b.header.cells
						}) : m.push({
							cells: L(f, function (a) {
								var c = j._getColumnByField(a);
								return {
									type: String,
									value: z(c) && c.title ? c.title : a,
									style: b.header.style
								}
							})
						})), c = n.create(b.dataSource ? b.dataSource : j.dataSource),
						i = function () {
							var d, h, i, k, n = c.view || [],
								o = n.length,
								p = [];
							for (i = 0; i < g; i++) p[i] = r(c, "schema.options.fields." + f[i] + ".type");
							for (i = 0; i < o; i++) {
								var s, t, u = n[i],
									v = j.trigger(ga, {
										commandName: "exportExcelRow",
										cancel: !1,
										item: u,
										index: i,
										row: {}
									}),
									w = [];
								if (!v.cancel) {
									for (s = K(!0, {}, v.row), k = 0; k < g; k++) t = {
										type: z(s.type) ? s.type : p[k],
										value: z(s.value) ? s.value : r(u, f[k])
									}, s.cells && s.cells[k] && K(!0, t, s.cells[k]), w.push(t);
									m.push({
										index: s.index,
										height: s.height,
										cells: w
									})
								}
							}
							e.rows = m, l = [].slice.call(b.worksheets), l.splice(b.worksheetIndex, 0, e), h = {
								created: b.created,
								author: b.author,
								worksheets: l
							}, d = "xml" == b.fileFormat ? new q.ExcelXMLSpreadsheet(h) : new q.OOXMLWorkbook(h), d.saveAs({
								fileName: b.fileName,
								forceExt: a.forceExt,
								proxy: a.proxy
							}), j.loading(!1)
						}, b.readDataSource ? c.read().always(i) : i()
				}, 100)))
			},
			_doPdfExport: function () {
				var a, b, c, e, f, g, h, i, j, k = this,
					l = k.options;
				q && (g = k.trigger(ga, {
					commandName: "exportPdf",
					cancel: !1,
					exportOptions: K(!0, {}, l.exportOptions)
				}), g.cancel || (k.loading(!0, !0), setTimeout(function () {
					a = K(!0, {
						proxy: d,
						pdf: {
							fileName: "Untitled",
							author: d,
							created: new Date,
							size: "a4",
							orientation: "portrait",
							fontSize: 10,
							dataSource: d,
							readDataSource: !1,
							columnFields: d,
							header: {
								enabled: !0,
								cells: d
							},
							margins: {
								left: 72,
								top: 72,
								bottom: 72,
								right: 72
							}
						}
					}, g.exportOptions), b = a.pdf, e = b.columnFields, e || (e = k._getVisibleColumnFields()), f = e.length, b.header && (j = !!b.header.enabled, b.header.cells && (i = [].concat(b.header.cells))), z(j) || (j = !0), z(i) || (i = L(e, function (a) {
						var b = k._getColumnByField(a);
						return {
							field: a,
							title: b.title || a,
							width: b.width || d
						}
					})), c = n.create(b.dataSource ? b.dataSource : k.dataSource), h = function () {
						var d, e, f, g, h = c.view || [],
							l = h.length,
							m = [],
							n = b.margins;
						for (d = 0; d < l; d++) e = h[d], f = k.trigger(ga, {
							commandName: "exportPdfRow",
							cancel: !1,
							item: e,
							index: d,
							row: {}
						}), f.cancel || m.push(K(!0, e, f.row));
						g = new q.PDFDocument({
							author: b.author,
							created: b.created
						}), g.addPage(b.size, b.orientation), g.table(n.left, n.top, m, i, {
							margins: n,
							printHeader: j,
							fontSize: b.fontSize
						}), g.saveAs({
							fileName: b.fileName,
							forceExt: a.forceExt,
							proxy: a.proxy
						}), k.loading(!1)
					}, b.readDataSource ? c.read().always(h) : h()
				}, 100)))
			},
			_doCsvExport: function () {
				var a, b, c, e, f, g, h, i, j, k = this,
					l = k.options;
				q && (g = k.trigger(ga, {
					commandName: "exportCsv",
					cancel: !1,
					exportOptions: K(!0, {}, l.exportOptions)
				}), g.cancel || (k.loading(!0, !0), setTimeout(function () {
					a = K(!0, {
						proxy: d,
						csv: {
							fileName: "Untitled",
							delimiter: ",",
							dataSource: d,
							readDataSource: !1,
							columnFields: d,
							header: {
								enabled: !0,
								cells: d
							}
						}
					}, g.exportOptions), b = a.csv, e = b.columnFields, e || (e = k._getVisibleColumnFields()), f = e.length, b.header && (j = !!b.header.enabled, b.header.cells && (i = [].concat(b.header.cells))), z(j) || (j = !0), z(i) || (i = L(e, function (a) {
						var b = k._getColumnByField(a);
						return {
							field: a,
							title: b.title || a
						}
					})), c = n.create(b.dataSource ? b.dataSource : k.dataSource), h = function () {
						var d, e, f, g, h, l, m, n = c.view || [],
							o = n.length,
							p = i.length,
							s = [],
							t = [];
						for (j && (s = L(i, function (a) {
								return a.title
							})), d = 0; d < o; d++)
							if (f = n[d], l = k.trigger(ga, {
									commandName: "exportCsvRow",
									cancel: !1,
									item: f,
									index: d,
									row: g
								}), !l.cancel) {
								if (h = K(!0, {}, l.row), h && h.cells) g = h.cells;
								else
									for (g = [], e = 0; e < p; e++) g.push(r(f, i[e].field));
								t.push(g)
							}
						m = new q.CSVDocument({
							delimiter: b.delimiter,
							printHeader: j,
							header: s,
							records: t
						}), m.saveAs({
							fileName: b.fileName,
							forceExt: a.forceExt,
							proxy: a.proxy
						}), k.loading(!1)
					}, b.readDataSource ? c.read().always(h) : h()
				}, 100)))
			}
		});
	db.defaults = k, b.ui.plugin("Grid", db)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g = b.ui.Widget,
		h = (b.Class, document, Math.abs),
		i = (Math.min, Math.max, Math.floor),
		j = a.proxy,
		k = (a.each, a.map, b.Constants.KeyCode),
		l = b.format,
		m = b.error,
		n = b.is,
		o = n.defined,
		p = (n.string, n.object, n.func, b.to.number),
		q = "aria-describedby",
		r = "value",
		s = "tabindex",
		t = "disabled",
		u = "horizontal",
		v = "both",
		w = "top",
		x = "bottom",
		y = "left",
		z = "up",
		A = "right",
		B = "down",
		C = "click",
		D = "keydown",
		E = "slide",
		F = "change",
		G = "focus",
		H = "blur",
		I = "px";
	e = {
		cls: d,
		orientation: u,
		min: 0,
		max: 100,
		value: d,
		step: 1,
		largeStep: 2,
		enabled: !0,
		buttons: !1,
		values: {
			enabled: !0,
			template: "{0}"
		},
		ticks: {
			enabled: !1,
			type: v,
			step: 1
		},
		tooltip: {
			enabled: !1,
			template: "{0}"
		},
		width: d,
		height: d,
		events: {}
	}, f = g.extend({
		init: function () {
			g.fn.init.apply(this, arguments);
			var b, d, e, f, h = this,
				i = h.options,
				k = i.cls,
				l = i.value,
				n = i.dieOnError,
				q = i.orientation;
			return h._original = d = a(h.element), "input" !== d.prop("tagName").toLowerCase() ? void m("shieldSlider: Underlying element is not INPUT", n) : (h.element = b = d.wrap('<div class="sui-slider sui-slider-' + q + (k ? " " + k : "") + '" />').parent(), h._eventNS = f = ".shieldSlider" + h.getInstanceId(), d.hide(), e = d.attr(s), b.attr(s, o(e) ? e : "0"), b.on(G + f, j(h._focus, h)).on(H + f, j(h._blur, h)).on(D + f, j(h._keyDown, h)), a(c).on("resize" + f, j(h._onWinResize, h)), o(i.width) && b.css("width", i.width), o(i.height) && b.css("height", i.height), h._buttonOffset = 5, h._buttonScaleOffset = 20, h._width = b.innerWidth(), h._height = b.innerHeight(), h._buttons = h._createButtons(), h._scale = h._createScale(), h._ticks = h._createTicks(), h._createBar(), h._showValues(), h._elWidth = b.width(), h._elHeight = b.height(), o(l) || (l = p(h._value())), b.attr("role", "slider").attr("aria-orientation", q).attr("aria-valuemin", i.min).attr("aria-valuemax", i.max), h.value(l), void h.enabled(i.enabled))
		},
		refresh: function (a) {
			this.refreshWithElement(this._original, a)
		},
		_createButtons: function () {
			var b, c, d, e = this,
				f = e.options,
				g = f.orientation,
				h = g == u,
				i = [];
			if (f.buttons) return b = a('<div class="sui-slider-button sui-unselectable" unselectable="on" />').appendTo(e.element), c = a('<span class="sui-slider-button-arrow-' + (h ? y : z) + ' sui-unselectable" unselectable="on" />').appendTo(b), d = b.outerWidth(), b.css({
				left: h ? e._buttonOffset : (e._width - d) / 2,
				top: h ? (e._height - d) / 2 : e._buttonOffset
			}), b.click(function () {
				e._hasFocus || e.element.focus(), e._stepPrev()
			}), i.push(b), b = a('<div class="sui-slider-button sui-unselectable" unselectable="on" />').appendTo(e.element), c = a('<span class="sui-slider-button-arrow-' + (h ? A : B) + ' sui-unselectable" unselectable="on" />').appendTo(b), b.css({
				left: h ? e._width - (e._buttonOffset + d) : (e._width - d) / 2,
				top: h ? (e._height - d) / 2 : e._height - (e._buttonOffset + d)
			}), b.click(function () {
				e._hasFocus || e.element.focus(), e._stepNext()
			}), i.push(b), i
		},
		_createScale: function () {
			var b = this,
				c = b.options,
				d = c.orientation,
				e = d == u,
				f = b._buttons ? b._buttons[0].outerWidth() : 0,
				g = a('<div class="sui-slider-scale sui-slider-scale-' + d + ' sui-unselectable" unselectable="on" />').appendTo(b.element);
			return g.css({
				left: e ? b._buttonOffset + f + b._buttonScaleOffset : (b._width - g.outerWidth()) / 2,
				top: e ? (b._height - g.outerHeight()) / 2 : b._buttonOffset + f + b._buttonScaleOffset
			}), e ? g.width(b._width - 2 * (b._buttonOffset + b._buttonScaleOffset + f)) : g.height(b._height - 2 * (b._buttonOffset + b._buttonScaleOffset + f)), g.on(C, j(b._scaleClick, b)), g
		},
		_scaleClick: function (a) {
			var b, c, e, f, g, j = this,
				k = j.options.orientation,
				l = k == u,
				m = a.originalEvent,
				n = l ? m.clientX : m.clientY,
				o = j.element.offset(),
				p = i(l ? o.left : o.top);
			if (j._hasFocus || j.element.focus(), j._enabled) {
				for (g = 0; g < j._ticks.length; g++) b = j._ticks[g], c = h(n - (b.tick + p)), (e === d || e > c) && (e = c, f = b);
				j._moveBar(f)
			}
		},
		_keyDown: function (a) {
			var b = this,
				c = b.options.orientation,
				d = c == u,
				e = a.originalEvent,
				f = e.keyCode,
				g = b._ticks.length - 1,
				h = f === (d ? k.LEFT : k.UP),
				i = f === (d ? k.RIGHT : k.DOWN),
				j = f === (d ? k.PAGEDOWN : k.PAGEUP),
				l = f === (d ? k.PAGEUP : k.PAGEDOWN),
				m = f == k.HOME,
				n = f == k.END;
			!e.ctrlKey && b._enabled && (h || j ? (b._stepPrev(j), a.preventDefault()) : i || l ? (b._stepNext(l), a.preventDefault()) : m ? (b._moveBar(b._ticks[0]), a.preventDefault()) : n && (b._moveBar(b._ticks[g]), a.preventDefault()))
		},
		_createTicks: function () {
			var a, b, c, e, f, g, h, j, k = this,
				l = k.options,
				m = l.orientation,
				n = m == u,
				o = l.max,
				p = l.min,
				q = l.step,
				r = l.ticks,
				s = r.type,
				t = r.step,
				z = 0,
				B = i((o - p) / q),
				C = d,
				D = 0;
			for (b = [], e = n ? k._scale.outerWidth() : k._scale.outerHeight(), B <= e ? (f = i(e / B), z = e % B, g = e / B - f) : (C = B / e * q, B = e, f = 1, q = 1), h = n ? k._scale.position().left : k._scale.position().top, j = 0; j <= B; j++) c = {
				value: p + j * (C || q),
				tick: h
			}, b.push(c), D += g, D >= 1 && (h++, D--), h += f;
			if (r.enabled)
				for (j = 0; j <= B; j += t) c = b[j], s !== w && s !== y && s !== v || (a = k._createTick(), a.css({
					left: n ? c.tick + I : k._scale.position().left - a.outerWidth() + I,
					top: n ? k._scale.position().top - a.outerHeight() + I : c.tick + I
				})), s !== x && s !== A && s !== v || (a = k._createTick(), a.css({
					left: n ? c.tick + I : k._scale.position().left + k._scale.outerWidth() + I,
					top: n ? k._scale.position().top + k._scale.outerHeight() + I : c.tick + I
				}));
			return b
		},
		_createTick: function () {
			return a('<div class="sui-slider-tick sui-slider-tick-' + this.options.orientation + ' sui-unselectable" unselectable="on" />').insertAfter(this._scale)
		},
		_showValues: function () {
			var b, c, d, e = this,
				f = e.options,
				g = f.orientation,
				h = g == u,
				i = f.max,
				j = f.min,
				k = (f.step, f.values || {});
			if (k.enabled)
				for (d = 0; d < e._ticks.length; d++) b = e._ticks[d], b.value !== j && b.value !== i || (c = a('<div class="sui-slider-mark sui-unselectable" unselectable="on">' + l(k.template, b.value) + "</div>").insertAfter(e._scale), c.css({
					left: h ? b.tick - 2 - c.width() / 2 : e._scale.position().left + e._scale.outerWidth() + e._bar.width() / 2,
					top: h ? e._scale.position().top - e._scale.height() - c.height() + 2 : b.tick - c.height() / 2
				}))
		},
		_createBar: function () {
			var c, e, f, g, h, i, j = this,
				k = j.options.orientation == u;
			for (j._bar = c = a('<div class="sui-slider-bar sui-unselectable" id="' + b.strid() + '" unselectable="on" />').appendTo(j.element).mousedown(function () {
					j._hasFocus || j.element.focus()
				}), e = (c.innerWidth() - j._scale.outerHeight()) / 2 + 1, f = (c.innerWidth() - j._scale.outerWidth()) / 2 + 1, c.css({
					left: k ? j._scale.position().left - c.outerWidth() / 2 + I : j._scale.position().left - f + I,
					top: k ? j._scale.position().top - e + I : j._scale.position().top - c.outerWidth() / 2 + I
				}), h = [], i = 0; i < j._ticks.length; i++) g = j._ticks[i], h.push({
				x: k ? g.tick - c.outerWidth() / 2 : d,
				y: k ? d : g.tick - c.outerWidth() / 2
			});
			j._dragBar = new b.ui.Draggable(c, {
				allowedPositions: h,
				events: {
					drag: function (a) {
						j._changeTooltipValue(!0), j.trigger(E)
					},
					stop: function (b) {
						j._value(j.value()), j._tooltip && a("#" + j._bar.attr("id") + ":hover").length <= 0 && j._tooltip.visible(!1), j.trigger(F, {
							value: j.value()
						})
					}
				}
			}), j._createTooltip()
		},
		_stepNext: function (a) {
			var b, c, d, e = this,
				f = e.options,
				g = (f.orientation == u, f.step),
				h = f.largeStep;
			e._enabled && (a = !!a, b = e._getCurrentTickInfoIndex(), c = a ? b + i(h / g) : b + 1, c >= e._ticks.length || (d = e._ticks[c], e._moveBar(d)))
		},
		_stepPrev: function (a) {
			var b, c, d, e = this,
				f = e.options,
				g = (f.orientation == u, f.step),
				h = f.largeStep;
			e._enabled && (a = !!a, b = e._getCurrentTickInfoIndex(), c = a ? b - i(h / g) : b - 1, c < 0 || (d = e._ticks[c], e._moveBar(d)))
		},
		_moveBar: function (a, b) {
			var c = this,
				d = c.options.orientation == u,
				e = c._bar;
			a && (e.css({
				left: d ? a.tick - e.outerWidth() / 2 + I : e.css(y),
				top: d ? e.css(w) : a.tick - e.outerWidth() / 2 + I
			}), c._changeTooltipValue(), c._value(c.value()), c.element.attr("aria-valuenow", a.value), b || c.trigger(F, {
				value: c.value()
			}))
		},
		_createTooltip: function () {
			var a = this,
				c = a.options,
				d = c.tooltip,
				e = c.orientation == u;
			d && d.enabled && (a._tooltip = new b.ui.Tooltip(a._bar, {
				content: l(d.template, a.value()),
				position: e ? w : y,
				delay: 0
			}), a.element.attr(q, a._bar.attr(q)))
		},
		_changeTooltipValue: function (a) {
			var b, c = this,
				d = c.options.tooltip,
				e = c._tooltip;
			e && (b = l(d.template, c.value()), e.options.content !== b && (e.refresh({
				content: b,
				enabled: c._enabled
			}), c.element.attr(q, c._bar.attr(q))), a && e.visible(!0, c._bar))
		},
		_getCurrentTickInfoIndex: function () {
			var a, b, c, d = this,
				e = d.options.orientation == u,
				f = d._ticks,
				g = d._bar,
				i = e ? g.position().left : g.position().top,
				j = g.outerWidth() / 2,
				k = Number.POSITIVE_INFINITY,
				l = -1;
			for (b = 0; b < f.length; b++) {
				if (a = f[b].tick - j, i == a) return b;
				c = h(i - a), c < k && (k = c, l = b)
			}
			return l
		},
		_getTickInfoIndexByValue: function (a) {
			var b, c = this,
				d = c._ticks;
			for (b = 0; b < d.length; b++)
				if (a == d[b].value) return b;
			return -1
		},
		_focus: function (b) {
			var c = this;
			c._hasFocus || (c._hasFocus = !0, a(c.element).addClass("sui-slider-focus"), c.trigger(G))
		},
		_blur: function (b) {
			var c = this;
			c._hasFocus && (c._hasFocus = !1, a(c.element).removeClass("sui-slider-focus"), c.trigger(H))
		},
		_onWinResize: function (a) {
			var b = this;
			b._onWinResTimeout && clearTimeout(b._onWinResTimeout), b._onWinResTimeout = setTimeout(j(b._winResized, b), 100)
		},
		_winResized: function () {
			var a = this,
				b = a.element;
			a._elWidth === b.width() && a._elHeight === b.height() || a.refresh()
		},
		_value: function () {
			return this._original.attr.apply(this._original, [r].concat([].slice.call(arguments)))
		},
		value: function () {
			var a, b, c = this,
				d = c.options.min,
				e = [].slice.call(arguments);
			return e.length > 0 ? (b = c._getTickInfoIndexByValue(e[0]), void(b !== -1 && (a = c._ticks[b], c._moveBar(a, !0)))) : (b = c._getCurrentTickInfoIndex(), a = c._ticks[b], a ? a.value : d)
		},
		enabled: function () {
			var b, c = this,
				d = a(c.element),
				e = c._original,
				f = [].slice.call(arguments);
			return f.length > 0 ? (b = !!f[0], b ? (d.removeAttr(t).removeClass("sui-slider-disabled"), e.removeAttr(t)) : (d.attr(t, t).addClass("sui-slider-disabled"), e.attr(t, t)), c._enabled = b, c._dragBar.enabled(b), c._tooltip && c._tooltip.enabled(b), void 0) : c._enabled
		},
		destroy: function () {
			var b, d = this,
				e = d._eventNS;
			if (a(c).off(e), clearTimeout(d._onWinResTimeout), d._onWinResTimeout = null, a(d.element).off(e), d._dragBar && (d._dragBar.destroy(), d._dragBar = null), d._buttons)
				for (b = 0; b < d._buttons.length; b++) d._buttons[b].off(C);
			d._tooltip && (d._tooltip.destroy(), d._tooltip = null), a(d.element).find(".sui-slider-scale, .sui-slider-mark, .sui-slider-tick, .sui-slider-bar, .sui-slider-button").remove(), d._original.unwrap().show(), d._scale.off(C), d._original = d._buttons = d._bar = d._scale = d._ticks = null, g.fn.destroy.call(d)
		}
	}), f.defaults = e, b.ui.plugin("Slider", f)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g, h, i, j, k, l = b.ui.Widget,
		m = b.Class,
		n = b.DataSource,
		o = (document, Math.abs, Math.min),
		p = Math.max,
		q = Math.pow,
		r = (Math.floor, a.proxy),
		s = (a.each, a.map, b.format),
		t = b.to["int"],
		u = b.error,
		v = b.is,
		w = v.defined,
		x = (v.string, v.object, v.func, b.to.number, "squarified"),
		y = "horizontal",
		z = "vertical",
		A = "click",
		B = "disabled";
	g = m.extend({
		init: function (a, b, c, d) {
			var e = this;
			e.left = a, e.top = b, e.width = c, e.height = d
		},
		getSize: function () {
			return o(this.width, this.height)
		},
		getRowContainers: function (a) {
			var b, c = this,
				d = c.left,
				e = c.top,
				f = c.sum(a),
				g = f / c.height,
				h = f / c.width,
				i = [];
			if (c.width >= c.height)
				for (b = 0; b < a.length; b++) i.push({
					left: d,
					top: e,
					right: d + g,
					bottom: e + a[b].targetValue / g,
					dataItem: a[b]
				}), e += a[b].targetValue / g;
			else
				for (b = 0; b < a.length; b++) i.push({
					left: d,
					top: e,
					right: d + a[b].targetValue / h,
					bottom: e + h,
					dataItem: a[b]
				}), d += a[b].targetValue / h;
			return i
		},
		remainingArea: function (a) {
			var b, c, d, e, f, h = this;
			return h.width >= h.height ? (b = a / h.height, d = h.width - b, f = new g(h.left + b, h.top, d, h.height)) : (c = a / h.width, e = h.height - c, f = new g(h.left, h.top + c, h.width, e)), f
		},
		sum: function (a) {
			var b, c = 0;
			for (b = 0; b < a.length; b++) c += a[b].targetValue;
			return c
		}
	}), h = m.extend({
		init: function () {},
		sort: function (a) {
			a.sort(function (a, b) {
				return b.targetValue - a.targetValue
			})
		},
		sum: function (a) {
			var b, c = 0;
			for (b = 0; b < a.length; b++) c += a[b].targetValue;
			return c
		},
		min: function (a) {
			var b, c = d;
			for (b = 0; b < a.length; b++)(!w(c) || c > a[b].targetValue) && (c = a[b].targetValue);
			return c
		},
		max: function (a) {
			var b, c = d;
			for (b = 0; b < a.length; b++)(!w(c) || c < a[b].targetValue) && (c = a[b].targetValue);
			return c
		}
	}), h.create = function (a) {
		return a === x ? new k : a === y ? new i : new j
	}, i = h.extend({
		init: function () {
			h.fn.init.apply(this, arguments)
		},
		execute: function (a, b, c, d, e) {
			var f, h, i, j, k, l, m = this,
				n = m.sum(a),
				o = b.left,
				p = b.top,
				q = !e || e === y;
			for (m.sort(a), l = 0; l < a.length; l++) i = a[l], f = q ? b.width * i.targetValue / n : b.width, h = q ? b.height : b.height * i.targetValue / n, i.items && 0 !== i.items.length ? (j = d.createGroup(c, new g(o, p, f, h)), k = d.createTitle(j, d.getItemText(i)), k = new g(k.left - j.position().left, k.top - j.position().top, k.width, k.height), m.execute(i.items, k, j, d, q ? z : y)) : d.createItem(c, {
				left: o,
				top: p,
				width: f,
				height: h,
				dataItem: i
			}), q ? o += f : p += h
		}
	}), j = h.extend({
		init: function () {
			h.fn.init.apply(this, arguments)
		},
		execute: function (a, b, c, d, e) {
			var f, h, i, j, k, l, m = this,
				n = m.sum(a),
				o = b.left,
				p = b.top,
				q = !e || e === z;
			for (m.sort(a), l = 0; l < a.length; l++) i = a[l], h = q ? b.height * i.targetValue / n : b.height, f = q ? b.width : b.width * i.targetValue / n, i.items && 0 !== i.items.length ? (j = d.createGroup(c, new g(o, p, f, h)), k = d.createTitle(j, d.getItemText(i)), k = new g(k.left - j.position().left, k.top - j.position().top, k.width, k.height), m.execute(i.items, k, j, d, q ? y : z)) : d.createItem(c, {
				left: o,
				top: p,
				width: f,
				height: h,
				dataItem: i
			}), q ? p += h : o += f
		}
	}), k = h.extend({
		init: function () {
			h.fn.init.apply(this, arguments)
		},
		execute: function (a, b, c, d) {
			var e, f, h, i, j, k, l = this;
			for (l.sort(a), e = l._squarifyCore(l._normalize(a, b.width * b.height, d), [], b, []), f = l._getTreemap(e), k = 0; k < f.length; k++) h = f[k], h.dataItem.items && 0 !== h.dataItem.items.length ? (i = d.createGroup(c, new g(h.left, h.top, h.right - h.left, h.bottom - h.top)), j = d.createTitle(i, d.getItemText(h.dataItem)), j = new g(j.left - i.position().left, j.top - i.position().top, j.width, j.height), l.execute(h.dataItem.items, j, i, d)) : d.createItem(c, {
				left: h.left,
				top: h.top,
				width: h.right - h.left,
				height: h.bottom - h.top,
				dataItem: h.dataItem
			})
		},
		_squarifyCore: function (a, b, c, d) {
			var e, f, g, h = this;
			return 0 === a.length ? void d.push(c.getRowContainers(b)) : (e = c.getSize(), f = a[0], h._verifyRatio(b, f, e) ? (b.push(f), h._squarifyCore(a.slice(1), b, c, d)) : (g = c.remainingArea(h.sum(b)), d.push(c.getRowContainers(b)), h._squarifyCore(a, [], g, d)), d)
		},
		_getTreemap: function (a) {
			var b, c, d = [];
			for (b = 0; b < a.length; b++)
				for (c = 0; c < a[b].length; c++) d.push(a[b][c]);
			return d
		},
		_verifyRatio: function (a, b, c) {
			var d, e, f, g = this;
			return 0 === a.length || (d = a.slice(), d.push(b), e = g._calculateRatio(a, c), f = g._calculateRatio(d, c), e >= f)
		},
		_calculateRatio: function (a, b) {
			var c = this,
				d = c.min(a),
				e = c.max(a),
				f = c.sum(a);
			return p(q(b, 2) * e / q(f, 2), q(f, 2) / (q(b, 2) * d))
		},
		_normalize: function (a, b, c) {
			var d, e = this,
				f = e.sum(a),
				g = b / f,
				h = [];
			for (d = 0; d < a.length; d++) h[d] = a[d], h[d].targetValue = h[d].targetValue * g;
			return h
		}
	}), e = {
		cls: d,
		enabled: !0,
		width: d,
		height: d,
		title: d,
		dataSource: d,
		readDataSource: !0,
		type: "squarified",
		valueTemplate: "{value}",
		textTemplate: "{title}",
		colorTemplate: "{color}",
		colors: ["#1E98E4", "#FFC500", "#5CB85C", "#FF2A00", "#6D31FF", "#00B2A1", "#FF8000", "#84B3DC"],
		tooltip: {
			enabled: !1,
			template: "{title}: {value}",
			filter: ".sui-treemap-item",
			delay: 80,
			position: "top"
		},
		events: {}
	}, f = l.extend({
		init: function () {
			l.fn.init.apply(this, arguments);
			var b, d = this,
				e = a(d.element),
				f = d.options,
				g = f.cls,
				h = f.dataSource,
				i = f.dieOnError;
			return "div" !== e.prop("tagName").toLowerCase() ? void u("shieldTreeMap: Underlying element is not DIV.", i) : (e.addClass("sui-treemap " + (g ? " " + g : "")), w(f.width) && e.css("width", f.width), w(f.height) && e.css("height", f.height), h ? (d.dataSource = n.create(h), d._eventNS = b = ".shieldTreeMap" + d.getInstanceId(), d.containers = [], d.colorIndex = 0, a(c).on("resize" + b, r(d._onWinResize, d)), d.dataSource.on("change" + b, r(d._dsChange, d)), f.readDataSource && d.dataSource.read(), void d.enabled(f.enabled)) : (d.destroy(), void u("shieldTreemap: dataSource is not defined.", i)))
		},
		_dsChange: function () {
			var a = this,
				b = a.element;
			a._create(), a._createTooltip(), a._elWidth = b.width(), a._elHeight = b.height()
		},
		_onWinResize: function (a) {
			var b = this;
			b._onWinResTimeout && clearTimeout(b._onWinResTimeout), b._onWinResTimeout = setTimeout(r(b._winResized, b), 100)
		},
		_winResized: function () {
			var a = this,
				b = a.element;
			a._elWidth === b.width() && a._elHeight === b.height() || a.refresh()
		},
		_createTooltip: function () {
			var b = this,
				c = b.options.tooltip;
			c.enabled && (b.tooltip ? b.tooltip.refresh(c) : b.tooltip = a(b.element).children(".sui-treemap-group").first().shieldTooltip(c).swidget())
		},
		_create: function () {
			var a, b = this,
				c = b.element,
				d = b.dataSource.data,
				e = b.options,
				f = h.create(e.type),
				i = new g(0, 0, c.innerWidth(), c.innerHeight());
			c.empty(), b._prepareData(d), a = b.createGroup(c, i), i = b.createTitle(a, e.title), f.execute(d, i, a, b)
		},
		_prepareData: function (a) {
			var b, c = this;
			for (b = 0; b < a.length; b++) a[b].targetValue = c.getItemValue(a[b]), a[b].items && c._prepareData(a[b].items)
		},
		createTitle: function (c, e) {
			var f, h, i, j, k, l = this,
				m = l.options.type === y;
			return "undefined" === e || e === d ? new g(c.position().left, c.position().top, c.innerWidth(), c.innerHeight()) : (f = a('<div class="sui-treemap-title"></div>').appendTo(c), m && f.innerHeight(c.outerHeight()), f.append('<div class="sui-treemap-title-inner">' + e.replace(/\s+/, "&nbsp;") + "</div>"), b.ui.Position.Set(f.find(".sui-treemap-title-inner"), f, {
				source: "center",
				target: "center"
			}), h = m ? c.position().left + f.outerWidth() : c.position().left, i = m ? c.position().top : c.position().top + f.outerHeight(), j = m ? c.innerWidth() - f.outerWidth() : c.innerWidth(), k = m ? c.innerHeight() : c.innerHeight() - f.outerHeight(), new g(h, i, j, k))
		},
		createGroup: function (a, b) {
			var c = this;
			return c._createContainer(a, b).addClass("sui-treemap-group sui-treemap-group-" + c.options.type)
		},
		createItem: function (a, b) {
			var c, d = this,
				e = d.options,
				f = e.tooltip,
				g = (e.type === y, d.getItemText(b.dataItem));
			c = d._createContainer(a, b), c.addClass("sui-treemap-item").css("backgroundColor", d._getContentColor(b.dataItem)).on(A, r(d._contentClick, d, b.dataItem)), f.enabled && c.attr("title", s(f.template, b.dataItem)), d.containers.push(c), c.html(g)
		},
		_contentClick: function (a) {
			var b = this;
			b._enabled && b.trigger(A, {
				title: b.getItemText(a),
				value: b.getItemValue(a),
				item: a
			})
		},
		_createContainer: function (b, c) {
			return a("<div/>").appendTo(b).css({
				left: c.left,
				top: c.top,
				width: c.width,
				height: c.height
			})
		},
		_getContentColor: function (a) {
			var b = this,
				c = b.options.colors;
			return b._getItemColor(a) || c[b.colorIndex++ % c.length]
		},
		getItemValue: function (a) {
			return t(s(this.options.valueTemplate, a))
		},
		getItemText: function (a) {
			return s(this.options.textTemplate, a)
		},
		_getItemColor: function (a) {
			var b = s(this.options.colorTemplate, a);
			return "undefined" !== b && null !== b ? b : d
		},
		enabled: function () {
			var b, c = this,
				d = a(c.element),
				e = [].slice.call(arguments);
			return e.length > 0 ? (b = !!e[0], b ? d.removeAttr(B).removeClass("sui-treemap-disabled") : d.attr(B, B).addClass("sui-treemap-disabled"), c.tooltip && c.tooltip.enabled(b), c._enabled = b, void 0) : c._enabled
		},
		destroy: function () {
			var b, d = this,
				e = d._eventNS;
			for (a(c).off(e), clearTimeout(d._onWinResTimeout), d._onWinResTimeout = null, d.dataSource && d.dataSource.off(e), d.tooltip && (d.tooltip.destroy(), d.tooltip = null), b = 0; b < d.containers.length; b++) d.containers[b].off(A);
			d.containers = null, a(d.element).empty(), l.fn.destroy.call(d)
		}
	}), f.defaults = e, b.ui.plugin("TreeMap", f)
}(jQuery, shield, this);
! function (a, b, c, d) {
	function e(a) {
		return o(a) && !p(a) && "undefined" !== a
	}
	var f, g, h = b.ui.Widget,
		i = (b.Class, b.DataSource),
		j = (Math.min, Math.max, a.proxy),
		k = a.each,
		l = a.map,
		m = b.error,
		n = b.format,
		o = b.is.defined,
		p = b.is["null"],
		q = b.to["int"],
		r = "change",
		s = "click";
	f = {
		cls: d,
		width: d,
		height: d,
		dataSource: d,
		readDataSource: !0,
		title: d,
		textTemplate: "{text}",
		hrefTemplate: "{href}",
		targetTemplate: "{target}",
		frequencyTemplate: "{frequency}",
		minSize: 90,
		maxSize: 250,
		events: {}
	}, g = h.extend({
		init: function () {
			h.fn.init.apply(this, arguments);
			var b, c = this,
				d = a(c.element),
				e = c.options,
				f = e.title,
				g = e.dieOnError,
				k = e.dataSource,
				l = e.cls;
			return "div" !== d.prop("tagName").toLowerCase() ? void m("shieldTagCloud: Underlying element is not DIV.", g) : (b = c._eventNS = ".shieldTagCloud" + c.getInstanceId(), d.empty(), f && d.append('<div class="sui-tagcloud-title">' + f + "</div>"), c._contentEl = a('<div class="sui-tagcloud-content">').appendTo(d), d.addClass("sui-tagcloud" + (l ? " " + l : "")), o(e.width) && d.css("width", e.width), o(e.height) && d.css("height", e.height), k ? (c.dataSource = i.create(k), c.dataSource.on(r + b, j(c._dsChange, c)), void(e.readDataSource && c.dataSource.read())) : (c.destroy(), void m("shieldTagCloud: No dataSource or underlying UL element found.", g)))
		},
		_dsChange: function () {
			this._render()
		},
		_render: function () {
			var a = this,
				b = a._contentEl,
				c = a.dataSource.view || [],
				d = a._getMinMax(c);
			b.empty().append(l(c, function (b) {
				return a._createItem(b, d[0], d[1])
			}))
		},
		_createItem: function (b, c, d) {
			var f, g, h, i, k, l = this,
				m = l.options,
				o = m.minSize,
				p = m.maxSize,
				r = a('<div class="sui-tagcloud-item" />'),
				t = n(m.textTemplate, b);
			return e(t) && (f = n(m.hrefTemplate, b), e(f) ? (i = a('<a href="' + f + '" class="sui-tagcloud-link">' + t + "</a>").appendTo(r), k = n(m.targetTemplate, b), e(k) && i.attr("target", k)) : r.html(t)), h = q(n(m.frequencyTemplate, b)), g = d > c ? (h - c) * (p - o) / (d - c) + o : 100, r.css("font-size", g + "%").on(s, j(l._itemClick, l, b)), r
		},
		_itemClick: function (a, b) {
			var c = this,
				d = c.trigger(s, {
					item: a
				});
			d.isDefaultPrevented() && b && b.preventDefault()
		},
		_getMinMax: function (a) {
			var b, c = this,
				d = Number.POSITIVE_INFINITY,
				e = Number.NEGATIVE_INFINITY;
			return k(a || [], function (a, f) {
				b = q(n(c.options.frequencyTemplate, f)), (!o(e) || b > e) && (e = b), (!o(d) || b < d) && (d = b)
			}), [d, e]
		},
		destroy: function () {
			var a = this,
				b = a.element,
				c = a.options,
				d = c.cls;
			a.dataSource && a.dataSource.off(r + a._eventNS), b.removeClass("sui-tagcloud" + (d ? " " + d : "")).empty(), h.fn.destroy.call(a)
		}
	}), g.defaults = f, b.ui.plugin("TagCloud", g)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g = b.ui.Widget,
		h = (b.Class, b.DataSource),
		i = (b.ui.Position, b.support),
		j = a.proxy,
		k = b.error,
		l = b.format,
		m = b.is.defined,
		n = b.is.func,
		o = b.is["boolean"],
		p = b.is.string,
		q = b.is["null"],
		r = b.is.integer,
		s = b.to["int"],
		t = "change",
		u = "centered",
		v = "right",
		w = "width",
		x = "height",
		y = "click",
		z = "sui-timeline-ds-item";
	e = {
		cls: d,
		dataSource: d,
		readDataSource: !0,
		layout: u,
		animation: {
			enabled: !0,
			expandDuration: 200,
			collapseDuration: 150
		},
		positionTemplate: d,
		iconTemplate: "{icon}",
		titleTemplate: "{title}",
		textTemplate: "{text}",
		collapsedTemplate: "{collapsed}",
		iconUrlTemplate: "{iconUrl}",
		iconClsTemplate: "{iconCls}",
		collapsible: !0,
		width: d,
		height: d,
		events: {}
	}, f = g.extend({
		init: function () {
			g.fn.init.apply(this, arguments);
			var b, d = this,
				e = a(d.element),
				f = d.options,
				i = f.dieOnError,
				l = f.dataSource,
				m = f.cls;
			return b = d._eventNS = ".shieldTimeline" + d.getInstanceId(), e.empty(), e.addClass("sui-timeline sui-timeline-" + f.layout + (f.collapsible ? " sui-timeline-collapsible" : "") + (m ? " " + m : "")), d._initAxis(e), l ? (d.dataSource = h.create(l), a(c).on("resize" + b, j(d._winResize, d)), d.dataSource.on(t + b, j(d._dsChange, d)), void(f.readDataSource && d.dataSource.read())) : (d.destroy(), void k("shieldTimeline: dataSource option is required.", i))
		},
		_initAxis: function (b) {
			var c, d = this,
				e = d.options;
			m(e.width) && b.css(w, e.width), m(e.height) && b.css(x, e.height), c = a('<div class="sui-timeline-inner"/>').appendTo(b), d._axis = a('<div class="sui-timeline-axis sui-timeline-axis-' + e.layout + '"/>').appendTo(c)
		},
		_dsChange: function () {
			this._render()
		},
		_winResize: function () {
			this._recalcEventWidths()
		},
		_recalcEventWidths: function () {
			var b = this,
				c = s(a(b.element).innerWidth());
			c !== b._width && (b._setEventWidths(c), b._width = c)
		},
		_setEventWidths: function (b) {
			var c = this,
				d = c.options.layout,
				e = i.scrollbar(),
				f = a(c._axis).outerWidth(),
				g = s(d === u ? (b - e) / 2 - f : b - e - f);
			a(c._axis).children(".sui-timeline-event").each(function () {
				a(this).outerWidth(g), a(this).hasClass("sui-timeline-event-left") && c._positionEventLeft(a(this))
			})
		},
		_render: function () {
			var b, c, e, f, g, h, i, k, n, o, r, s, t = this,
				u = t.options,
				v = u.collapsible,
				w = t.dataSource.view || [],
				x = w.length;
			for (s = 0; s < x; s++) b = w[s], c = a('<div class="sui-timeline-event"/>').data(z, b).appendTo(t._axis), g = a('<div class="sui-timeline-event-title">' + l(u.titleTemplate, b) + "</div>").appendTo(c), h = l(u.textTemplate, b), i = m(h) && !q(h) && "undefined" !== h && "" !== h ? a('<div class="sui-timeline-event-text">' + h + "</div>").appendTo(c) : d, t._positionEventElement(c, b, s), o = l(u.iconUrlTemplate, b), p(o) && "undefined" !== o || (o = d), r = l(u.iconClsTemplate, b), p(r) && "undefined" !== r || (r = d), (o || r) && (e = a('<span class="sui-timeline-event-icon' + (v && m(i) ? " sui-timeline-event-icon-collapsible" : "") + '"/>').insertBefore(c), f = a('<span class="sui-timeline-event-icon-inner"/>').appendTo(e), o ? f.append('<img src="' + o + '"/>') : f.addClass(r)), v && m(i) && (c.addClass("sui-timeline-event-collapsible"), g.on(y, j(t._eventTitleClicked, t, c)), (o || r) && e.on(y, j(t._eventTitleClicked, t, c)), k = l(u.collapsedTemplate, b), n = p(k) ? "true" === k || "1" === k : k === !0, n && t._collapse(c, !1, !0));
			t._recalcEventWidths()
		},
		_positionEventElement: function (a, b, c) {
			var d, e, f = this,
				g = f.options,
				h = g.positionTemplate;
			switch (g.layout) {
				case u:
					n(h) || p(h) ? (d = l(h, b, c), e = p(d) ? "undefined" === d ? c % 2 : "true" === d || "1" === d : !!d) : e = c % 2, e && f._positionEventLeft(a);
					break;
				case v:
					f._positionEventLeft(a)
			}
		},
		_positionEventLeft: function (b) {
			b.addClass("sui-timeline-event-left").css("left", -1 * a(b).width())
		},
		_isExpanded: function (b) {
			return !a(b).hasClass("sui-timeline-event-collapsed")
		},
		_getEventItem: function (b) {
			return a(b).data(z)
		},
		_expand: function (a, b, c, d) {
			var e, f = this,
				g = f.options.animation;
			return f._isExpanded(a) ? void(n(d) && d.call(f)) : void(b && (e = f.trigger("expand", {
				element: a,
				item: f._getEventItem(a)
			}), e.isDefaultPrevented()) || a.find(".sui-timeline-event-text").first().slideDown(g.enabled && !c ? g.expandDuration : 0, function () {
				a.removeClass("sui-timeline-event-collapsed"), n(d) && d.call(f)
			}))
		},
		_collapse: function (a, b, c, d) {
			var e, f = this,
				g = f.options.animation;
			return f._isExpanded(a) ? void(b && (e = f.trigger("collapse", {
				element: a,
				item: f._getEventItem(a)
			}), e.isDefaultPrevented()) || a.find(".sui-timeline-event-text").first().slideUp(g.enabled && !c ? g.collapseDuration : 0, function () {
				a.addClass("sui-timeline-event-collapsed"), n(d) && d.call(f)
			})) : void(n(d) && d.call(f))
		},
		_eventTitleClicked: function (a, b) {
			var c = this;
			c._isExpanded(a) ? c._collapse(a, !0, !1) : c._expand(a, !0, !1)
		},
		_getEvent: function (b) {
			return a(r(b) ? a(this._axis).children(".sui-timeline-event")[b] : b)
		},
		expanded: function () {
			var a = this,
				b = [].slice.call(arguments),
				c = o(b[0]) ? b.shift() : d,
				e = a._getEvent(b[0]);
			return m(c) ? void(c ? a._expand(e, !1, !1, b[1]) : a._collapse(e, !1, !1, b[1])) : a._isExpanded(e)
		},
		expandAll: function () {
			var b = this;
			a(b._axis).children(".sui-timeline-event").each(function () {
				b._expand(a(this), !1, !1)
			})
		},
		collapseAll: function () {
			var b = this;
			a(b._axis).children(".sui-timeline-event").each(function () {
				b._collapse(a(this), !1, !1)
			})
		},
		destroy: function () {
			var b = this,
				d = b.element,
				e = b.options,
				f = e.cls,
				h = b._eventNS;
			a(c).off(h), b.dataSource && b.dataSource.off(h), d.removeClass("sui-timeline" + (f ? " " + f : "")).empty(), b._width = null, g.fn.destroy.call(b)
		}
	}), f.defaults = e, b.ui.plugin("Timeline", f)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g = b.ui.Widget,
		h = (b.Class, b.DataSource),
		i = b.RecursiveDataSource,
		j = (b.ui.Position, b.Constants.KeyCode),
		k = b.strid,
		l = document,
		m = a.proxy,
		n = a.each,
		o = (a.extend, b.error),
		p = b.format,
		q = b.is.defined,
		r = b.is["boolean"],
		s = (b.is.integer, b.is.func),
		t = b.is.array,
		u = b.is.object,
		v = b.is.string,
		w = b.support.browser,
		x = "role",
		y = "aria-expanded",
		z = "click",
		A = "dbl" + z,
		B = "focus",
		C = "blur",
		D = "change",
		E = "keydown",
		F = "mousedown",
		G = "tabindex",
		H = "disabled",
		I = "true",
		J = "false",
		K = "up",
		L = "down",
		M = "left",
		N = "right",
		O = "checked",
		P = "li",
		Q = "ul",
		R = "visibility",
		S = "hidden",
		T = "visible",
		U = "sui-treeview-list-item",
		V = "sui-treeview-list-item-idx",
		W = "sui-treeview-list-item-parent",
		X = "sui-treeview-list-item-ds",
		Y = "sui-treeview-list-items-ds",
		Z = "sui-treeview-list-item-checked",
		$ = "sui-treeview-list-item-loaded",
		_ = "sui-treeview-item-list-expanded",
		aa = "sui-treeview-item-toggle-loading",
		ba = "sui-treeview-item-selected",
		ca = "sui-treeview-item-active",
		da = "sui-treeview-item-disabled",
		ea = "sui-treeview-item";
	e = {
		cls: d,
		width: d,
		minWidth: d,
		height: d,
		dataSource: d,
		readDataSource: !0,
		animation: {
			enabled: !0,
			expandDuration: 200,
			collapseDuration: 150
		},
		checkboxes: {
			enabled: !1,
			children: !1,
			template: d
		},
		dragDrop: !1,
		dragDropScope: d,
		textTemplate: "{text}",
		hrefTemplate: "{href}",
		expandedTemplate: "{expanded}",
		checkedTemplate: "{checked}",
		disabledTemplate: "{disabled}",
		iconUrlTemplate: "{iconUrl}",
		iconClsTemplate: "{iconCls}",
		hasChildrenTemplate: function (a) {
			return a && (a.items && a.items.length > 0 || a.children && a.children.length > 0 || a.hasChildren)
		},
		events: {}
	}, f = g.extend({
		init: function () {
			g.fn.init.apply(this, arguments);
			var b, c, d, e, f, i, j = this,
				k = a(j.element),
				l = j.options,
				p = l.dieOnError,
				r = l.dataSource,
				s = l.cls;
			if (j._original = b = a(j.element), j._tagname = e = b.prop("tagName").toLowerCase(), i = j._eventNS = ".shieldTreeView" + j.getInstanceId(), j._wrapper = d = b.wrap("<div/>").parent(), d.addClass("sui-treeview" + (s ? " " + s : "")), b.hide(), j.element = k = a('<ul class="sui-treeview-list"/>').on(B + i, m(j._focus, j)).on(C + i, m(j._blur, j)).on(E + i, m(j._keydown, j)), b.after(k), n(["width", "minWidth", "height", "maxHeight"], function (a, b) {
					q(l[b]) && d.css(b, l[b])
				}), c = b.attr(G), k.attr(G, q(c) ? c : "0"), r) j.dataSource = h.create(r);
			else {
				if (e != Q) return j.destroy(), void o("shieldTreeView: No dataSource or underlying UL element found.", p);
				f = function (b) {
					var c = [];
					return a(b).children(P).each(function () {
						var b, d = a(this),
							e = d.children(Q).length > 0,
							g = {
								cls: d.attr("data-class"),
								href: d.attr("data-href") ? d.attr("data-href") : d.children().not(Q).first().attr("href"),
								disabled: d.attr("data-disabled") ? d.attr("data-disabled") : q(d.attr(H)) && null !== d.attr(H),
								expanded: d.attr("data-expanded"),
								checked: d.attr("data-checked"),
								iconUrl: d.attr("data-icon-url"),
								iconCls: d.attr("data-icon-cls")
							};
						e ? (b = d.clone(), b.children(Q).remove(), g.text = b.html()) : g.text = d.html(), e && (g.items = f(d.children(Q)[0])), c.push(g)
					}), c
				}, j.dataSource = h.create({
					data: b,
					schema: {
						parse: f
					}
				})
			}
			j.dataSource.on(D + i, m(j._dsChange, j)), k.attr(x, "tree"), l.readDataSource && j.dataSource.read()
		},
		refresh: function (a) {
			this.refreshWithElement(this._original, a)
		},
		_dsChange: function () {
			var a = this,
				b = a.element,
				c = a.dataSource;
			a._renderItems(c, b, null, !0, !0, function () {
				a.trigger("dataBound", {
					dataSource: c,
					element: null
				})
			})
		},
		_destroyItems: function (b) {
			var c = this;
			a(b).children("ul.sui-treeview-item-list").each(function () {
				c._destroyItems(a(this))
			}), a(b).children(".sui-treeview-item-content").find(".sui-treeview-item-text").each(function () {
				a(this).swidget("Draggable") && a(this).swidget("Draggable").destroy(), a(this).swidget("Droppable") && a(this).swidget("Droppable").destroy()
			}), a(b).children(".sui-treeview-item-content").find(".sui-checkbox").each(function () {
				a(this).swidget("CheckBox") && a(this).swidget("CheckBox").destroy()
			});
			var d = a(b).data(Y);
			d && d.off(c._eventNS), a(b).removeData(), a(b).empty()
		},
		_renderItems: function (a, b, c, d, e, f) {
			var g, h, i, j = this,
				k = j.options,
				l = k.checkboxes,
				m = a.view,
				n = (m || []).length,
				o = [],
				p = [];
			for (j._destroyItems(b), i = 0; i < n; i++) g = j._renderItem(m[i], c, a, i), h = g.listItem, h.appendTo(b), g.itemExpanded && o.push(h), g.itemChecked && p.push(h);
			if (s(f) && f(), d)
				for (i = 0; i < o.length; i++) j._expand(o[i], !1, e);
			if (l.enabled && l.children)
				for (i = 0; i < p.length; i++) j._updateChecked(p[i])
		},
		_renderItem: function (c, e, f, g) {
			var h, i, j, n, o, t, u, w, B, C, D, E = this,
				G = E.options,
				H = G.checkboxes,
				I = H.template,
				K = E.getInstanceId(),
				L = G.dragDropScope,
				M = function () {
					return a(this.element).clone().appendTo(l.body)
				},
				N = e ? e.data(U) : null,
				O = c.cls,
				P = E._hasChildren(c),
				Q = p.call(E, G.textTemplate, c),
				T = k();
			if (h = p(G.disabledTemplate, c), h = !!(r(h) && h || "true" === h || "1" === h || 1 === h), i = p(G.expandedTemplate, c), i = !!(r(i) && i || "true" === i || "1" === i || 1 === i), j = p(G.checkedTemplate, c), j = !!(r(j) && j || "true" === j || "1" === j || 1 === j), n = p(G.hrefTemplate, c), v(n) && "undefined" !== n || (n = d), o = p(G.iconUrlTemplate, c), v(o) && "undefined" !== o || (o = d), t = p(G.iconClsTemplate, c), v(t) && "undefined" !== t || (t = d), u = a('<li class="' + ea + " sui-unselectable" + (h ? " " + da : "") + (q(O) ? " " + O : "") + '"/>').data(U, c).data(V, g).data(W, e).data(X, f), D = a('<span class="sui-treeview-item-text" id="' + T + '">' + (n ? '<a href="' + n + '">' : "") + Q + (n ? "</a>" : "") + "</span>").on(F, m(E._itemClick, E, u)).on(A, m(E._itemDblClick, E, u)), w = a('<span class="sui-treeview-item-toggle"/>').on(z, m(E._toggleItem, E, u)).append(a('<span class="sui-treeview-item-toggle-collapsed"/>')), P || w.css(R, S), u.attr(x, "treeitem").attr("aria-describedby", T), P && u.attr(y, J), H.enabled)
				if (u.data(Z, !!j), B = a('<span class="sui-treeview-item-check"/>'), v(I)) B.html(p(I, {
					item: c,
					parent: N
				}));
				else if (s(I)) I(B, c, N);
			else {
				var Y = a('<input type="checkbox"' + (j ? ' checked="checked"' : "") + "/>").appendTo(B);
				b.ui.CheckBox ? a(Y).shieldCheckBox({
					enabled: !h,
					enableThreeStates: !!H.children,
					events: {
						click: m(E._checkboxClick, E, u)
					}
				}) : Y.on(z, m(E._checkboxClick, E, u))
			}
			return (o || t) && (C = a('<span class="sui-treeview-item-icon"/>'), o ? C.append('<img src="' + o + '"/>') : C.addClass(t)), u.append(a('<div class="sui-treeview-item-content"/>').append(w, B, D.prepend(C))), u.append(a('<ul class="sui-treeview-list sui-treeview-item-list"/>').attr(x, "group").hide()), G.dragDrop && !h && (D.shieldDraggable({
				scope: q(L) ? L : "suiTv" + K,
				dragCls: "sui-treeview-item-text-dragging",
				helper: M,
				events: {
					start: m(E._dragStart, E, u),
					stop: m(E._dragStop, E, u)
				}
			}), D.shieldDroppable({
				scope: q(L) ? L : "suiTv" + K,
				hoverCls: "sui-treeview-item-text-dropover",
				tolerance: {
					x: "touch",
					y: "intersect"
				},
				events: {
					over: m(E._dropOver, E, u),
					out: m(E._dropOut, E, u),
					drop: m(E._drop, E, u)
				}
			})), {
				listItem: u,
				itemExpanded: i,
				itemChecked: j,
				itemDisabled: h
			}
		},
		_isValidDragDrop: function (b, c) {
			if (a(b).hasClass("sui-treeview-item-text")) {
				var d = a(b).parent().parent().parent().parent().children(".sui-treeview-item-content").first().children(".sui-treeview-item-text").first();
				return d && d.length > 0 && c[0] === d[0] ? c[0] !== d[0] : !(a(b).parent().parent().find(c[0]).length > 0)
			}
			return !1
		},
		_dragStart: function (a, b) {
			this.trigger("dragStart", {
				draggable: b.target.element,
				element: a,
				domEvent: b
			})
		},
		_dragStop: function (a, b) {
			this.trigger("dragStop", {
				draggable: b.target.element,
				element: a,
				domEvent: b
			}), b.preventDefault()
		},
		_dropOver: function (b, c) {
			var d, e = c.draggable,
				f = c.droppable,
				g = this._isValidDragDrop(e, f),
				h = {
					draggable: e,
					droppable: f,
					element: b,
					valid: g,
					domEvent: c
				};
			g && (h.sourceNode = a(e).closest("." + ea)), h.targetNode = a(f).closest("." + ea), d = this.trigger("droppableOver", h), !d.isDefaultPrevented() && d.valid || c.preventDefault()
		},
		_dropOut: function (b, c) {
			var d, e = c.draggable,
				f = c.droppable,
				g = this._isValidDragDrop(e, f),
				h = {
					draggable: e,
					droppable: f,
					element: b,
					valid: g,
					domEvent: c
				};
			g && (h.sourceNode = a(e).closest("." + ea)), h.targetNode = a(f).closest("." + ea), d = this.trigger("droppableOut", h)
		},
		_drop: function (b, c) {
			var d, e = this,
				f = c.draggable,
				g = c.droppable,
				h = e._isValidDragDrop(f, g),
				i = {
					draggable: f,
					droppable: g,
					element: b,
					cancelled: !0,
					skipAnimation: !!h,
					valid: h,
					domEvent: c
				};
			h && (i.sourceNode = a(f).closest("." + ea)), i.targetNode = a(g).closest("." + ea), d = e.trigger("drop", i), c.cancelled = d.cancelled, c.skipAnimation = d.skipAnimation, d.isDefaultPrevented() && c.preventDefault()
		},
		_hasChildren: function (a) {
			var b = p(this.options.hasChildrenTemplate, a);
			return r(b) && b || "true" === b || "1" === b || 1 === b
		},
		_isLoaded: function (b) {
			return a(b).data($) === !0
		},
		_isExpanded: function (a) {
			return a.hasClass(_)
		},
		_isFullyExpanded: function (a) {
			var b = this,
				c = b.getParent(a);
			return c ? b._isExpanded(a) && b._isFullyExpanded(c) : b._isExpanded(a)
		},
		_isDisabled: function (b) {
			return a(b).hasClass(da)
		},
		_isSelected: function (b) {
			return a(b).hasClass(ba)
		},
		_isActive: function (b) {
			return a(b).hasClass(ca)
		},
		_isFocused: function () {
			return a(this.element).hasClass("sui-treeview-focus")
		},
		_focus: function (b) {
			var c = this,
				d = c.element;
			w.ie && l.activeElement !== a(d)[0] && a(d).focus(), c._blurTimeout && (clearTimeout(c._blurTimeout), c._blurTimeout = null), c._isFocused() || (a(c.element).addClass("sui-treeview-focus"), c.trigger(B))
		},
		_blur: function (b) {
			var c = this;
			c._isFocused() && (c._blurTimeout && clearTimeout(c._blurTimeout), c._blurTimeout = setTimeout(function () {
				a(c.element).removeClass("sui-treeview-focus"), c.trigger(C)
			}, 100))
		},
		_selectItem: function (a, b, c) {
			var d, e = this;
			e._isSelected(a) || c && (d = e.trigger("select", {
				element: a,
				item: a.data(U)
			}), d.isDefaultPrevented()) || (e._selectedItem && e._selectedItem.removeClass(ba), e._selectedItem = a, a.addClass(ba), b && e._activateItem(a, c))
		},
		_activateItem: function (a, b) {
			var c = this;
			c._isActive(a) || (c._activeItem && c._activeItem.removeClass(ca), c._activeItem = a, a.addClass(ca), b && c.trigger(D, {
				element: a,
				item: a.data(U)
			}))
		},
		_itemClick: function (a, b) {
			var c = this;
			w.ie && setTimeout(m(c._focus, c)), c._selectItem(a, !0, !0)
		},
		_itemDblClick: function (a, b) {
			var c = this;
			c._selectItem(a, !0, !0), c._toggleItem(a, b)
		},
		_getCheckBox: function (a) {
			return a.children(".sui-treeview-item-content").children(".sui-treeview-item-check").find('input[type="checkbox"]').first()
		},
		_checkboxClick: function (a) {
			var b = this;
			w.ie && setTimeout(m(b._focus, b)), b._toggleCheck(a, !0)
		},
		_toggleCheck: function (a, b) {
			this._setChecked(a, !a.data(Z), b)
		},
		_setChecked: function (b, c, d) {
			var e = this,
				f = e.options.checkboxes.children,
				g = e._getCheckBox(b);
			g && g.length > 0 && (a(g).swidget("CheckBox") ? (g = a(g).swidget("CheckBox"), g.checked(c)) : c ? g.attr(O, O) : g.removeAttr(O), b.data(Z, c), f && e._updateChecked(b), d && e.trigger("check", {
				element: b,
				item: b.data(U),
				checked: c
			}))
		},
		_updateChecked: function (a) {
			var b = this,
				c = a.data(Z);
			b._updateCheckedChildren(a, c), b._updateCheckedParents(a, c)
		},
		_updateCheckedChildren: function (b, c) {
			var d = this;
			a(b).children("ul.sui-treeview-item-list").first().children(P).each(function () {
				var b = a(this),
					e = d._getCheckBox(b);
				a(e).swidget("CheckBox") ? a(e).swidget("CheckBox").checked(c) : c ? e.attr(O, O) : e.removeAttr(O), b.data(Z, c), d._updateCheckedChildren(b, c)
			})
		},
		_updateCheckedParents: function (b, c) {
			var e, f = this,
				g = f.getParent(b),
				h = g ? g.data(Z) : d,
				i = c;
			g && h !== !1 && (a(b).parent().children(P).each(function () {
				if (a(this).data(Z) !== c) return i = null, !0
			}), e = f._getCheckBox(g), a(e).swidget("CheckBox") ? a(e).swidget("CheckBox").checked(i) : i ? e.attr(O, O) : e.removeAttr(O), g.data(Z, i), f._updateCheckedParents(g, c))
		},
		_toggleItem: function (a, b) {
			var c = this;
			w.ie && setTimeout(m(c._focus, c)), c._isDisabled(a) || (c._isExpanded(a) ? c._collapse(a, !0) : c._expand(a, !0, !1))
		},
		_getToggleEl: function (b) {
			return a(b).children(".sui-treeview-item-content").first().children(".sui-treeview-item-toggle").first()
		},
		_expand: function (b, c, d, e) {
			var f, g, h, i = this,
				j = i.options.animation,
				k = b.children("ul.sui-treeview-item-list").first();
			if (k && !(a(k).length <= 0) && (i.hasChildren(b) || !(k.children(P).length <= 0))) return i._isExpanded(b) ? void(s(e) && e.call(i)) : void(c && (h = i.trigger("expand", {
				element: b,
				item: b.data(U)
			}), h.isDefaultPrevented()) || (k.stop(!0, !0), k.hide(), f = i._getToggleEl(b), g = function () {
				k.slideDown(j.enabled && !d ? j.expandDuration : 0, function () {
					b.addClass(_).attr(y, I), f.css(R, T), a(f).find("span").addClass("sui-treeview-item-toggle-expanded").removeClass("sui-treeview-item-toggle-collapsed"), s(e) && e.call(i)
				})
			}, i._isLoaded(b) ? g() : i._loadItem(b, d, g)))
		},
		_loadItem: function (b, c, d) {
			var e, f = this,
				g = b.data(U),
				j = b.children("ul.sui-treeview-item-list").first(),
				k = b.data(X),
				l = f._getToggleEl(b),
				m = g.items || g.children;
			!j || a(j).length <= 0 || (t(m) || u(m) || m instanceof h ? (a(l).addClass(aa), e = h.create(m), j.data(Y, e), e.on(D + f._eventNS, function (g) {
				a(l).removeClass(aa), b.data($, !0), f._renderItems(this, j, b, !0, c, function () {
					f.trigger("dataBound", {
						dataSource: e,
						element: b
					}), s(d) && d.call(f)
				})
			}), e.read({
				parent: g
			})) : k && k instanceof i ? (a(l).addClass(aa), e = new i(k.options), j.data(Y, e), e.on(D + f._eventNS, function (g) {
				a(l).removeClass(aa), b.data($, !0), f._renderItems(this, j, b, !0, c, function () {
					f.trigger("dataBound", {
						dataSource: e,
						element: b
					}), s(d) && d.call(f)
				})
			}), e.read({
				parent: g
			})) : (b.data($, !0), s(d) && d.call(f)))
		},
		_expandPathSegment: function (a, b, c, d, e) {
			var f, g, h = this,
				i = a.length;
			return d > i ? void(s(e) && e.call(h)) : (f = [].slice.call(a).splice(0, d), g = h.getByPath(f), void(h._isExpanded(g) ? h._expandPathSegment(a, b, c, d + 1, e) : h._expand(g, b, c, function () {
				h._expandPathSegment(a, b, c, d + 1, e)
			})))
		},
		_expandPath: function (a, b, c, d) {
			this._expandPathSegment(a, b, c, 1, d)
		},
		_collapse: function (b, c) {
			var d, e, f = this,
				g = f.options.animation,
				h = b.children("ul.sui-treeview-item-list").first();
			!f._isExpanded(b) || !h || a(h).length <= 0 || c && (e = f.trigger("collapse", {
				element: b,
				item: b.data(U)
			}), e.isDefaultPrevented()) || (d = f._getToggleEl(b), h.stop(!0, !0), h.slideUp(g.enabled ? g.collapseDuration : 0, function () {
				b.removeClass(_).attr(y, J), a(d).find("span").removeClass("sui-treeview-item-toggle-expanded").addClass("sui-treeview-item-toggle-collapsed")
			}))
		},
		_keydown: function (a) {
			var b = this,
				c = !0;
			switch (a.keyCode) {
				case j.UP:
					b._move(K, a);
					break;
				case j.DOWN:
					b._move(L, a);
					break;
				case j.LEFT:
					b._move(M, a);
					break;
				case j.RIGHT:
					b._move(N, a);
					break;
				case j.SPACE:
					b._selectedItem && b._toggleCheck(b._selectedItem, !0);
					break;
				case j.ENTER:
					b._selectedItem && b._activateItem(b._selectedItem, !0);
					break;
				default:
					c = !1
			}
			c && a.preventDefault()
		},
		_getExpandedItems: function (b) {
			var c = this;
			return c.element.children("." + ea).add(c.element.find("li.sui-treeview-item-list-expanded > ul.sui-treeview-list > li." + ea)).filter(function () {
				var b = c.getParent(a(this));
				return !b || c._isFullyExpanded(b)
			}).not("." + da)
		},
		_getNextItem: function (b) {
			var c = this._getExpandedItems(),
				d = a(c).length,
				e = a(c).index(b);
			if (e < d - 1) return a(a(c).get(e + 1))
		},
		_getPrevItem: function (b) {
			var c = this._getExpandedItems(),
				d = a(c).index(b);
			if (d > 0) return a(a(c).get(d - 1))
		},
		_getPrevParentItem: function (b) {
			var c = this,
				d = c.getParent(b);
			if (d && a(d).length > 0) return c._isDisabled(d) ? c._getPrevParentItem(d) : d
		},
		_move: function (b, c) {
			var d, e, f = this,
				g = f._selectedItem;
			f.getParent(a(g));
			if (q(g))
				if (b === K) e = f._getPrevItem(g);
				else if (b === L) e = f._getNextItem(g);
			else if (b === M) {
				if (f._isExpanded(g)) return void f._collapse(g, !0, !1);
				e = f._getPrevParentItem(g)
			} else {
				if (!f._isExpanded(g)) return void f._expand(g, !0, !1);
				d = a(g).children("ul.sui-treeview-list").first(), d.length > 0 && (e = a(d).children("li:not(." + da + ")").first())
			} else e = a(f.element).find(P).first();
			q(e) && a(e).length > 0 && f._selectItem(e, !1, !0)
		},
		_getByPath: function (b, c) {
			var d = this,
				e = b.shift(),
				f = a(c.children(P)[e]);
			return b.length > 0 ? d._getByPath(b, f.children(Q)) : a(c.children(P)[e])
		},
		_getListItem: function (b) {
			return a(t(b) ? this.getByPath(b, this.element) : b)
		},
		getByPath: function (b) {
			return this._getByPath([].slice.call(b), a(this.element))
		},
		isLoaded: function (b) {
			return a(this._getListItem(b)).data($) === !0
		},
		hasChildren: function (a) {
			return this._hasChildren(this.getItem(a))
		},
		getItem: function (b) {
			return a(this._getListItem(b)).data(U)
		},
		getDataSource: function (b) {
			return a(this._getListItem(b)).data(X)
		},
		getChildrenDataSource: function (b) {
			var c = this,
				e = c._getListItem(b);
			return c.hasChildren(c.getItem(e)) && c.isLoaded(e) ? a(e).children("ul.sui-treeview-item-list").first().data(Y) : d
		},
		getParent: function (b) {
			return a(this._getListItem(b)).data(W)
		},
		getDataSourceIndex: function (b) {
			return a(this._getListItem(b)).data(V)
		},
		_getIndex: function (b) {
			var c = this._getListItem(b);
			return a(c).index()
		},
		getPath: function (b) {
			var c = this,
				d = a(b),
				e = [];
			do e.unshift(c._getIndex(d)), d = c.getParent(d); while (d && d.length > 0);
			return e
		},
		updateIndetermined: function (b) {
			var c = this,
				d = c._getListItem(b);
			q(d) ? c._updateChecked(a(d)) : a(c.element).children(P).each(function () {
				c._updateChecked(a(this))
			})
		},
		expanded: function () {
			var a = this,
				b = [].slice.call(arguments),
				c = r(b[0]) ? b.shift() : d,
				e = b[0],
				f = a._getListItem(e);
			return q(c) ? void(c ? t(e) ? a._expandPath([].slice.call(e), !1, !1, b[1]) : a._expand(f, !1, !1, b[1]) : a._collapse(f, !1)) : a._isExpanded(f)
		},
		selected: function () {
			var a, b = this,
				c = [].slice.call(arguments);
			return c.length > 0 ? (a = b._getListItem(c[0]), void(a && a.length > 0 && b._selectItem(a, !0, !1))) : b._selectedItem
		},
		unselect: function () {
			var a = this;
			a._selectedItem && a._selectedItem.removeClass(ba + " " + ca), a._selectedItem = null
		},
		enabled: function () {
			var b = this,
				c = [].slice.call(arguments),
				e = r(c[0]) ? c.shift() : d,
				f = b._getListItem(c[0]);
			if (f && !(a(f).length <= 0)) return q(e) ? void(e ? f.removeClass(da) : f.addClass(da)) : !b._isDisabled(f)
		},
		checked: function () {
			var b = this,
				c = [].slice.call(arguments),
				e = r(c[0]) ? c.shift() : d,
				f = b._getListItem(c[0]);
			if (f && !(a(f).length <= 0)) return q(e) ? void b._setChecked(f, e, !1) : f.data(Z)
		},
		_insertedItem: function (b, c) {
			return b instanceof a ? a(b) : t(b) ? this._getListItem(b) : u(b) ? this._renderItem(b, c).listItem : void 0
		},
		_beforeRemoveChild: function (b) {
			var c = this;
			b && b.children(Q).children(P).length <= 1 && (a(c._getToggleEl(b)).css(R, S), b.removeClass(_))
		},
		_refreshParent: function (b) {
			var c = a(b).parents(P).first();
			a(b).data(W, c && c.length > 0 ? c : null)
		},
		load: function (a, b) {
			var c = this,
				d = c._getListItem(a);
			d && d.length > 0 && c._loadItem(d, !1, b)
		},
		append: function () {
			var b, c, d, e = this,
				f = [].slice.call(arguments),
				g = f[0],
				h = t(g) || g instanceof a,
				i = f[1],
				j = f[2];
			if (q(i)) {
				if (c = e._getListItem(i), !(c && a(c).length > 0)) return;
				d = a(c).children(Q).first()
			} else c = null, d = e.element;
			b = e._insertedItem(g, c), b && (h && e._beforeRemoveChild(e.getParent(b)), !c || e._isExpanded(c) ? (b.appendTo(d), e._refreshParent(b), s(j) && j.call(e, b)) : e.hasChildren(c) ? e._isExpanded(c) ? (b.appendTo(d), e._refreshParent(b), s(j) && j.call(e, b)) : e._expand(c, !1, !1, function () {
				b.appendTo(d), e._refreshParent(b), s(j) && j.call(e, b)
			}) : e._isExpanded(c) ? (b.appendTo(d), e._refreshParent(b), s(j) && j.call(e, b)) : (a(e._getToggleEl(c)).css(R, T), c.removeClass(_), b.appendTo(d), e._refreshParent(b), e._expand(c, !1, !1, function () {
				s(j) && j.call(e, b)
			})))
		},
		insertBefore: function () {
			var b, c = this,
				d = [].slice.call(arguments),
				e = d[0],
				f = t(e) || e instanceof a,
				g = c._getListItem(d[1]);
			if (g && g.length > 0 && (b = c._insertedItem(e, c.getParent(g)))) return f && c._beforeRemoveChild(c.getParent(b)), b.insertBefore(g), c._refreshParent(b), b
		},
		insertAfter: function () {
			var b, c = this,
				d = [].slice.call(arguments),
				e = d[0],
				f = t(e) || e instanceof a,
				g = c._getListItem(d[1]);
			if (g && g.length > 0 && (b = c._insertedItem(e, c.getParent(g)))) return f && c._beforeRemoveChild(c.getParent(b)), b.insertAfter(g), c._refreshParent(b), b
		},
		remove: function (b) {
			var c = this,
				d = t(b) || b instanceof a,
				e = c._getListItem(b);
			c.getParent(e);
			return !!(e && e.length > 0) && (c._destroyItems(a(e).children(Q).first()), d && c._beforeRemoveChild(c.getParent(e)), e.remove(), !0)
		},
		destroy: function () {
			var b = this,
				c = b.element,
				d = b._eventNS;
			b.dataSource && b.dataSource.off(D + d), b._destroyItems(c), b._blurTimeout && (clearTimeout(b._blurTimeout), b._blurTimeout = null), a(c).off(d).remove(), b._original.unwrap(), b._original.show(), b._original = b._wrapper = b._selectedItem = b._activeItem = null, g.fn.destroy.call(b)
		}
	}), f.defaults = e, b.ui.plugin("TreeView", f)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g = b.ui.Widget,
		h = (b.Class, b.Constants, b.format),
		i = document,
		j = (a.extend, a.map, a.each, a.proxy),
		k = b.error,
		l = b.is["boolean"],
		m = b.is.object,
		n = b.is.defined,
		o = (b.is.integer, b.to["int"], b.to.number, b.support, "close"),
		p = "minimize",
		q = "maximize",
		r = "resize",
		s = "scroll",
		t = "pin",
		u = "overflow",
		v = "hidden",
		w = "px",
		x = "center",
		y = function (b) {
			return a("<div/>").text(b).html()
		};
	e = {
		title: "",
		titleBarButtons: ["pin", "minimize", "maximize", "close"],
		content: d,
		cls: d,
		visible: !0,
		pinned: !1,
		modal: !1,
		width: 400,
		height: 300,
		resizable: {
			maxWidth: d,
			maxHeight: d,
			minWidth: 200,
			minHeight: 150
		},
		draggable: !0,
		position: d,
		appendToBody: !1,
		events: {}
	}, f = g.extend({
		init: function () {
			g.fn.init.apply(this, arguments), n(this.initialOptions.titleBarButtons) && (this.options.titleBarButtons = this.initialOptions.titleBarButtons);
			var c, d, e = this,
				f = e.options,
				o = f.cls,
				p = f.dieOnError,
				q = f.titleBarButtons,
				r = f.resizable,
				s = f.draggable,
				t = f.content,
				u = f.position,
				v = a(e.element),
				w = !1;
			return "div" !== a(v).prop("tagName").toLowerCase() ? void k("shieldWindow: Underlying element is not DIV", p) : q && q.length > 0 && !b.ui.Button ? void k("shieldWindow: The titleBarButtons setting requires ShieldUI Button to be loaded", p) : (e._eventNS = "shieldWindow" + e.getInstanceId(), f.appendToBody ? (v.appendTo(i.body), e._parentIsBody = !0) : e._parentIsBody = "body" == v.parent().prop("tagName").toLowerCase(), e._origHtml = v.html(), v.empty(), v.addClass("sui-window" + (o ? " " + o : "")), v.css({
				width: f.width,
				height: f.height,
				position: "absolute"
			}), e.titleBarEl = c = a('<div class="sui-window-titlebar"><div class="sui-window-title">' + f.title + '</div><div class="sui-window-icons"></div></div>').appendTo(v), e._initTitleBarButtons(), e.contentEl = d = a('<div class="sui-window-content"></div>').appendTo(v), e._fixContent(), m(u) ? v.css(u) : w = !0, r && (l(r) && (r = {}), e.resizable = new b.ui.Resizable(v, r), e.resizable.on("resized", j(e._fixContent, e))), s && (l(s) && (s = {}), s.handle = e.titleBarEl, e.draggable = new b.ui.Draggable(v, s)), e._hasIframe = !1, t ? t.template ? t.template.dataUrl ? a.ajax({
				url: t.template.dataUrl,
				dataType: "json",
				success: function (a, b, c) {
					e.content(h(t.template.body, a)), e._focusFirst()
				},
				error: function (a, b, c) {
					e.content("Error occured while reading URL: " + b + " - " + c)
				}
			}) : (e.content(h(t.template.body, t.template.data)), e._focusFirst()) : t.remote ? t.remote.iframe ? (e._hasIframe = !0, e.content('<iframe class="sui-window-iframe" src="' + t.remote.url + '" style="border:none; border-width:0px; width:100%; height:100%;"></iframe>'), e._focusFirst()) : e.contentEl.load(t.remote.url, function () {
				e._focusFirst()
			}) : (e.content(e._origHtml), e._focusFirst()) : (e.content(e._origHtml), e._focusFirst()), e._minimized = !1, e._maximized = !1, e._destroyed = !1, v.attr("role", "dialog").attr("aria-labelledby", y(f.title)), e.pinned(!!f.pinned), e.visible(!!f.visible), void(w && e.center()))
		},
		_focusFirst: function () {
			var b = a(this.contentEl).find(".sui-checkbox:not(.sui-checkbox-disabled), .sui-radiobutton:not(.sui-radiobutton-disabled), .sui-input:not(.sui-input-disabled), .sui-combobox:not(.sui-combobox-disabled), .sui-dropdown:not(.sui-dropdown-disabled), .sui-listbox:not(.sui-listbox-disabled), .sui-switch:not(.sui-switch-disabled), a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(":visible").first();
			a(b).length > 0 && a(b).focus()
		},
		_initTitleBarButtons: function () {
			var b, c, d, e, f = this,
				g = f.options,
				h = g.titleBarButtons,
				i = g.modal;
			if (f.titleBarButtons = {}, h && h.length > 0) {
				for (b = f.titleBarEl.find(".sui-window-icons"), e = 0; e < h.length; e++) d = h[e], "pin" !== d && "minimize" !== d && "maximize" !== d && "close" !== d || i && "close" !== d || (c = "pin" == d ? "_onPin" : "minimize" == d ? "_onMinimize" : "maximize" == d ? "_onMaximize" : d, f.titleBarButtons[d] = a('<button type="button"><div class="sui-sprite sui-window-button-icon sui-window-button-icon-' + d + '"></div></button>').appendTo(b).shieldButton({
					cls: "sui-window-button",
					events: {
						click: j(f[c], f, !0)
					}
				}).swidget());
				b.on("mousedown", function (a) {
					return a.preventDefault(), a.stopPropagation(), !1
				})
			}
		},
		_destroyTitleBarButtons: function () {
			var a, b = this,
				c = b.titleBarButtons;
			for (a in c) c.hasOwnProperty(a) && c[a].destroy();
			b.titleBarButtons = {}
		},
		_createModal: function () {
			var b = this,
				d = a(b._parentIsBody ? c : b.element.parent()),
				e = a(d).scrollTop(),
				f = a(d).scrollLeft();
			b._lockScroll(), b._modal = a('<div class="sui-window-modal"></div>').insertBefore(b.element).css({
				top: e,
				left: f
			})
		},
		_closeModal: function () {
			var b = this;
			a(b._modal).remove(), b._unlockScroll()
		},
		_lockScroll: function () {
			var b = this,
				c = b.element.parent();
			b._scrollTop = a(c).scrollTop(), b._scrollLeft = a(c).scrollLeft(), b._parentOverflow = a(c).css(u), c.css(u, v).scrollTop(b._scrollTop).scrollLeft(b._scrollLeft)
		},
		_unlockScroll: function () {
			var a = this,
				b = a.element.parent();
			b.css(u, a._parentOverflow).scrollTop(a._scrollTop).scrollLeft(a._scrollLeft)
		},
		_fixContent: function () {
			var b = this;
			a(b.contentEl).outerWidth(a(b.element).innerWidth()).innerHeight(a(b.element).innerHeight() - a(b.titleBarEl).outerHeight()), b._hasIframe && a(b.contentEl).find(".sui-window-iframe").width(a(b.contentEl).width()).height(a(b.contentEl).height())
		},
		center: function () {
			var d = this,
				e = a(d.element);
			b.ui.Position.Set(e, d._parentIsBody ? c : e.parent(), {
				source: x,
				target: x
			})
		},
		position: function (b) {
			a(this.element).css(b)
		},
		getHeight: function () {
			a(this.element).css("height")
		},
		getWidth: function () {
			a(this.element).css("width")
		},
		getPosition: function () {
			var b = a(this.element);
			return {
				left: b.css("left"),
				top: b.css("top")
			}
		},
		content: function () {
			var b = this,
				c = a(b.contentEl),
				d = [].slice.call(arguments);
			return d.length > 0 ? (c.empty(), void c.append(d[0])) : c.html()
		},
		resize: function (b) {
			a(this.element).css(b), this._fixContent()
		},
		_scroll: function (b) {
			var d = this,
				e = a(d.element),
				f = d._parentIsBody;
			d._pinned && e.css({
				left: d.originalPosition.left + a(f ? c : e.parent()).scrollLeft() + w,
				top: d.originalPosition.top + a(f ? c : e.parent()).scrollTop() + w
			})
		},
		_onPin: function (a) {
			this.pinned(!this._pinned, a)
		},
		pinned: function () {
			var b, d, e = this,
				f = [].slice.call(arguments),
				g = a(e.element),
				h = e._parentIsBody,
				i = e.titleBarEl,
				k = i.find(".sui-window-button-icon-pin").length > 0 ? i.find(".sui-window-button-icon-pin") : i.find(".sui-window-button-icon-unpin");
			return f.length <= 0 ? e._pinned : (b = !!f[0], void(e._pinned != b && (f[1] && (d = e.trigger(t, {
				pinned: b
			}), d.isDefaultPrevented()) || (e._pinned = b, k.removeClass("sui-window-button-icon-pin sui-window-button-icon-unpin"), k.addClass(e._pinned ? "sui-window-button-icon-pin" : "sui-window-button-icon-unpin"), e._pinned ? (e.originalPosition = g.position(), a(h ? c : g.parent()).on(s + "." + e._eventNS, j(e._scroll, e)), e.draggable && e.draggable.enabled(!1)) : (a(h ? c : g.parent()).off(s + "." + e._eventNS), e.origininalPosition = null, e.draggable && e.draggable.enabled(!0))))))
		},
		_onMinimize: function (a) {
			this.minimized(!0, a)
		},
		minimized: function () {
			var b, c, d, e = this,
				f = [].slice.call(arguments),
				g = a(e.element),
				h = a(e.contentEl),
				i = e.titleBarEl,
				j = e.titleBarButtons.minimize;
			return f.length <= 0 ? e._minimized : (c = !!f[0], void(e._minimized != c && (f[1] && (d = e.trigger(p, {
				minimized: c
			}), d.isDefaultPrevented()) || (e._minimized = c, b = i.find(".sui-window-button-icon-minimize").length > 0 ? i.find(".sui-window-button-icon-minimize") : i.find(".sui-window-button-icon-unminimize"), b.removeClass("sui-window-button-icon-minimize sui-window-button-icon-unminimize"), b.addClass(e._minimized ? "sui-window-button-icon-unminimize" : "sui-window-button-icon-minimize"), c ? (e._onMinCurrHeight = g.height(), g.height(i.height()), h.hide(), e.resizable && e.resizable.enabled(!1)) : (g.height(e._onMinCurrHeight), h.show(), e.resizable && e.resizable.enabled(!0)), j && j.visible(!c)))))
		},
		_onMaximize: function (a) {
			var b = this;
			b._minimized ? b.minimized(!1, a) : b.maximized(!b._maximized, a)
		},
		maximized: function () {
			var b, d, e, f, g = this,
				h = [].slice.call(arguments),
				i = a(g.element),
				k = g._beforeMaximize,
				l = a(g.titleBarEl);
			return h.length > 0 ? (b = !!h[0], d = !!h[1], g._minimized && g.minimized(!1, !1), g._maximized != b && (d && (f = g.trigger(q, {
				maximized: b
			}), f.isDefaultPrevented()) || (g._maximized = !!b, e = l.find(".sui-window-button-icon-maximize").length > 0 ? l.find(".sui-window-button-icon-maximize") : l.find(".sui-window-button-icon-restore"), e.removeClass("sui-window-button-icon-maximize sui-window-button-icon-restore"), e.addClass(g._maximized ? "sui-window-button-icon-restore" : "sui-window-button-icon-maximize"), g._maximized ? (g._beforeMaximize = {
				top: i.css("top"),
				left: i.css("left"),
				width: i.width(),
				height: i.height()
			}, g.resize({
				width: "100%",
				height: a(g._parentIsBody ? c : i.parent()).height()
			}), g._lockScroll(), g.center(), g._parentIsBody && a(c).on(r + "." + g._eventNS, j(g._onWinResizeMax, g))) : (k && (i.css({
				top: k.top,
				left: k.left
			}), g.resize({
				width: k.width,
				height: k.height
			})), g._unlockScroll(), g._parentIsBody && (a(c).off(r + "." + g._eventNS), g._winResize = null)))), void 0) : g._maximized
		},
		_onWinResizeMax: function () {
			var b = this;
			a(b.element).height(a(c).height()), b._fixContent()
		},
		close: function (a) {
			var b, c = this;
			a && (b = c.trigger(o), b.isDefaultPrevented()) || c.destroy()
		},
		visible: function () {
			var a = this,
				b = [].slice.call(arguments);
			if (!a._destroyed) return b.length > 0 && a.options.modal && (b[0] ? a._createModal() : a._closeModal()), g.fn.visible.apply(a, arguments)
		},
		destroy: function () {
			var b = this,
				c = b.options.cls;
			b.visible(!1), b._destroyed = !0, b.resizable && (b.resizable.destroy(), b.resizable = null), b.draggable && (b.draggable.destroy(), b.draggable = null), b._destroyTitleBarButtons(), b.maximized(!1), b.pinned(!1), a(b.element).removeClass("sui-window" + (c ? " " + c : "")), b._origHtml && (a(b.element).html(b._origHtml), b._origHtml = null), g.fn.destroy.call(b)
		}
	}), f.defaults = e, b.ui.plugin("Window", f)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g = b.ui.Widget,
		h = (b.Class, document),
		i = a.proxy,
		j = a.each,
		k = (a.extend, a.map),
		l = Math.min,
		m = Math.max,
		n = (b.guid, b.iid),
		o = b.error,
		p = b.format,
		q = b.is.defined,
		r = (b.is["boolean"], b.is.integer, b.is.func, b.is.array, b.is.object, b.is.string, b.support.browser, "disabled"),
		s = "multiple",
		t = "change",
		u = "dragover",
		v = "dragleave",
		w = "drop",
		x = "select",
		y = "remove",
		z = "click",
		A = "error",
		B = "progress",
		C = "abort",
		D = "load",
		E = "upload",
		F = "complete",
		G = "POST",
		H = "pending",
		I = "uploading",
		J = "complete",
		K = "removing",
		L = "error",
		M = {
			pending: "&#10005;",
			uploading: "&#10754;",
			complete: "&#10005;",
			removing: "&#10754;",
			error: "&#10005;"
		},
		N = "shieldUploadIframe",
		O = "sui-upload",
		P = O + "-target-input",
		Q = O + "-status",
		R = O + "-file",
		S = O + "-xhr",
		T = O + "-form",
		U = O + "-iframe";
	e = {
		cls: d,
		enabled: !0,
		async: {
			enabled: !1,
			autoUpload: !1,
			batch: !1,
			save: {
				url: d,
				field: d
			},
			remove: {
				url: d,
				field: "fileNames",
				method: G
			}
		},
		multiple: !0,
		files: {
			enabled: !0,
			initial: d,
			template: "{name} ({size} bytes)"
		},
		messages: {
			drop: "Drop files here to upload",
			select: "Select files ...",
			upload: "Upload files"
		},
		events: {}
	}, f = g.extend({
		init: function () {
			g.fn.init.apply(this, arguments);
			var b, c, d, e, f, j, k, l = this,
				m = l.options,
				n = m.dieOnError,
				p = m.cls,
				q = m.messages,
				x = m.files,
				y = x.enabled,
				z = x.initial,
				A = m.async.enabled;
			return l._xhr2support = b = !!(new XMLHttpRequest).upload, l._original = d = a(l.element), "input" != d.prop("tagName").toLowerCase() || "file" != d.attr("type").toLowerCase() ? void o("shieldUpload: Must be initialized from an input with type file.", n) : (k = l._eventNS = ".shieldUpload" + l.getInstanceId(), d.wrap("<form>").closest("form").get(0).reset(), d.unwrap(), d.removeAttr(r), m.multiple ? d.attr(s, s) : d.removeAttr(s), l.element = c = d.wrap("<div/>").parent(), c.addClass("sui-upload" + (p ? " " + p : "")), l._selectButtonDiv = d.wrap("<div/>").parent().append('<span class="sui-upload-button-text">' + q.select + "</span>").addClass("sui-upload-button"), l._dropFilesDiv = e = l._selectButtonDiv.wrap('<div class="sui-upload-dropfiles"/>').parent(), l._dropText = f = a('<div class="sui-upload-drop">' + q.drop + "</div>").appendTo(e).hide(), y && (l._fileList = j = a('<ul class="sui-upload-files"/>').appendTo(c).hide()), l._uploadButtonDiv = a('<button class="sui-upload-button sui-upload-button-upload" type="button">' + q.upload + "</button>").appendTo(c).click(i(l._uploadClicked, l)).hide(), d.on(t + k, i(l._fileSelected, l)), A && b && (d.on(w + k, i(l._fileChanged, l)), a(h).on(u + k, function (a) {
				a.stopPropagation(), a.preventDefault(), f.show()
			}).on(v + k, function (a) {
				a.stopPropagation(), a.preventDefault(), f.hide()
			}).on(w + k, function (a) {
				a.stopPropagation(), a.preventDefault(), f.hide()
			}), e.on(u, function () {
				e.addClass("sui-upload-dropfiles-hover")
			}).on(v, function () {
				e.removeClass("sui-upload-dropfiles-hover")
			}).on(w, i(l._fileChanged, l))), y && z && z.length > 0 && l._addFiles(z, J), void l.enabled(m.enabled))
		},
		refresh: function (a) {
			this.refreshWithElement(this._original, a)
		},
		_getFiles: function (b) {
			var c, d = [],
				e = a(b.target);
			return b.originalEvent.dataTransfer && b.originalEvent.dataTransfer.files ? d = b.originalEvent.dataTransfer.files : b.target.files ? d = b.target.files : (d = a.makeArray(e.prop("files")), d.length ? !q(d[0].name) && d[0].fileName && j(d, function (a, b) {
				b.name = b.fileName, b.size = b.fileSize
			}) : (c = e.prop("value"), d = c ? [{
				name: c.replace(/^.*\\/, "")
			}] : [])), d
		},
		_getPendingFileItems: function () {
			return a(this._fileList).children("li.sui-upload-file-" + H)
		},
		_getFileInfoList: function (b) {
			return this._toFileInfoList(a(b).data(R))
		},
		_toFileInfoList: function (a) {
			var b, c = this,
				d = [];
			if (c._isFileList(a))
				for (b = 0; b < a.length; b++) d.push(a[b]);
			else d.push(a);
			return d
		},
		_isSingleFile: function (a) {
			return a && a.name
		},
		_isFileList: function (a) {
			return a.length && a.length > 0
		},
		_fileSelected: function (b) {
			var c, d, e = this,
				f = e.options,
				g = f.async.enabled,
				h = e._xhr2support,
				j = e._eventNS,
				k = a(b.target),
				l = e._getFiles(b);
			d = e.trigger(x, {
				files: e._toFileInfoList(l)
			}), d.isDefaultPrevented() || (c = a('<input type="file" name="' + k.attr("name") + '"/>').insertAfter(k).on(t + j, i(e._fileSelected, e)), f.multiple && c.attr(s, s), g && h && c.on(w + j, i(e._fileChanged, e)), k.hide(), e._addFiles(l, H, k))
		},
		_fileChanged: function (a) {
			var b, c = this,
				d = c._getFiles(a);
			a.stopPropagation(), a.preventDefault(), c._dropText.hide(), c._dropFilesDiv.removeClass("sui-upload-dropfiles-hover"), b = c.trigger(x, {
				files: c._toFileInfoList(d)
			}), b.isDefaultPrevented() || c._addFiles(d, H)
		},
		_addFiles: function (a, b, c) {
			var d, e = this,
				f = e.options,
				g = f.async;
			if (f.files.enabled) {
				if (g.enabled && !g.batch || !f.multiple)
					for (d = 0; d < a.length; d++) e._renderFile(a[d], b, c);
				else e._renderFile(a, b, c);
				e._afterAddRemoveFiles(), g.autoUpload && e._uploadAllPending()
			}
		},
		_renderFile: function (b, c, d) {
			var e, f, g = this,
				h = g.options,
				j = h.files.template,
				k = (g._fileList, g._toFileInfoList(b)),
				l = [];
			for (e = a('<li class="sui-upload-file"/>').data(R, b).appendTo(g._fileList), d && e.data(P, d), f = 0; f < k.length; f++) l.push(a('<span class="sui-upload-file-text"/>').append(p(j, k[f]))), f < k.length - 1 && l.push(a('<span class="sui-upload-file-text-sep">,</span>'));
			h.async.enabled && g._xhr2support ? l.push(a('<span class="sui-upload-file-progress"/>')) : e.addClass("sui-upload-file-no-progress"), l.push(a('<span class="sui-upload-file-action"/>').on(z, i(g._actionClicked, g, e))), e.append(l), g._setStatus(e, c), c === J && g._setProgress(e, 100)
		},
		_afterAddRemoveFiles: function () {
			var a = this,
				b = a.options.async,
				c = a._fileList,
				d = a._uploadButtonDiv;
			c.children("li").length > 0 ? c.show() : c.hide(), a._getPendingFileItems().length > 0 ? b.enabled && !b.autoUpload && d.show() : d.hide()
		},
		_actionClicked: function (a, b) {
			var c = this,
				d = c._getStatus(a);
			c._enabled && (d == I ? c._abortUpload(a, b) : d == K ? c._abortRemove(a, b) : c._removeItem(a, b))
		},
		_removeItem: function (b, c) {
			var d, e, f = this,
				g = (f.options, f.options.async),
				h = g.remove,
				i = f._getStatus(b),
				j = f._getFileInfoList(b),
				l = b.data(P),
				m = f._eventNS,
				n = {};
			e = f.trigger(y, {
				domEvent: c,
				status: i,
				files: j
			}), e.isDefaultPrevented() || (d = function () {
				a(l)[0] === a(f._original)[0] ? a(l).hide().attr(r, r) : a(l).off(m).remove(), a(b).off(m).remove(), f._afterAddRemoveFiles()
			}, i == H || i == L ? d() : i == J && (g.enabled ? (f._setStatus(b, K), n[h.field] = k(j, function (a) {
				return a.name
			}), a.support.cors = !0, a.ajax({
				method: h.method,
				url: h.url,
				traditional: !0,
				data: n
			}).done(function (a, b, c) {
				d()
			}).fail(function (a, d, g) {
				f.trigger(A, {
					domEvent: c,
					operation: y,
					listItem: b,
					files: j,
					jqXHR: a,
					textStatus: d,
					errorThrown: g,
					responseText: g
				});
				e.isDefaultPrevented() || f._setStatus(b, L)
			})) : d()))
		},
		_abortRemove: function (a, b) {},
		_setStatus: function (b, c) {
			a(b).data(Q, c).removeClass("sui-upload-file-pending sui-upload-file-uploading sui-upload-file-complete sui-upload-file-removing sui-upload-file-error").addClass("sui-upload-file-" + c).children(".sui-upload-file-action").first().html(M[c]), this._afterAddRemoveFiles()
		},
		_getStatus: function (b) {
			return a(b).data(Q)
		},
		_uploadAllPending: function () {
			var b, c, d, e = this,
				f = e.options,
				g = (f.async, e._getPendingFileItems()),
				h = (g || []).length,
				i = [];
			if (!(h < 1)) {
				for (d = 0; d < h; d++) b = a(g[d]).data(R), e._isSingleFile(b) ? i.push(b) : e._isFileList(b) && (i = i.concat(b));
				if (c = e.trigger(E, {
						files: i
					}), !c.isDefaultPrevented())
					for (d = 0; d < h; d++) e._startUpload(g[d])
			}
		},
		_startUpload: function (b) {
			var c, d, e, f, g, j, k, l = this,
				m = l.options,
				o = m.async,
				p = o.save,
				r = p.field,
				s = l._getFileInfoList(b);
			if (q(r) || (r = a(l._original).attr("name")), l._setProgress(b, 0), l._xhr2support) {
				for (d = new FormData, e = new XMLHttpRequest, k = 0; k < s.length; k++) d.append(r, s[k]);
				a(b).data(S, e), e.open(G, p.url), e.upload.addEventListener(B, i(l._onUploadProgress, l, b)), e.upload.addEventListener(D, i(l._onUploadComplete, l, b)), e.upload.addEventListener(A, i(l._onUploadError, l, b)), e.onreadystatechange = function () {
					4 == e.readyState && 200 != e.status && l._onUploadError(b)
				}, e.send(d)
			} else c = a(b).data(P), c && (f = N + n(), g = a('<iframe name="' + f + '" id="' + f + '" class="sui-upload-iframe" width="0" height="0" tabindex="-1"/>').appendTo(h.body), a(g).on(D, i(l._onIframeComplete, l, b)), j = a('<form class="sui-upload-form" method="' + G + '" enctype="multipart/form-data" action="' + p.url + '" target="' + f + '" tabindex="-1"/>').appendTo(h.body).append(c), a(b).data(U, g).data(T, j), j.get(0).submit());
			l._setStatus(b, I)
		},
		_abortUpload: function (b, c) {
			var d, e = this;
			e._xhr2support ? (d = a(b).data(S), d && d.abort(), a(b).removeData(S)) : e._cleanupIframeForm(b), e._setStatus(b, H), e._setProgress(b, 0), e.trigger(C, {
				listItem: b,
				files: e._getFileInfoList(b)
			})
		},
		_cleanupIframeForm: function (b) {
			var c = this,
				d = a(b).data(U),
				e = a(b).data(T),
				f = a(b).data(P);
			d && a(d).attr("src", "about:blank"), e && (f && a(f).prependTo(c._selectButtonDiv), a(e).remove(), a(b).removeData(T)), d && (a(d).remove(), a(b).removeData(U))
		},
		_setProgress: function (b, c) {
			var d = a(b).children(".sui-upload-file-progress").first();
			d && d.length > 0 && d.empty().append(a('<span class="sui-upload-file-progress-inner"/>').css("width", c + "%"))
		},
		_onUploadProgress: function (a, b) {
			var c = this,
				e = b.lengthComputable ? l(100, m(0, b.loaded / b.total * 100)) : d;
			q(e) && c._setProgress(a, e), c.trigger(B, {
				domEvent: b,
				percentage: e,
				listItem: a,
				files: c._getFileInfoList(a)
			})
		},
		_onUploadComplete: function (b) {
			var c = this;
			c._setStatus(b, J), c._setProgress(b, 100), a(b).removeData(S), c.trigger(F, {
				listItem: b,
				files: c._getFileInfoList(b)
			})
		},
		_onIframeComplete: function (b, c) {
			var e, f = this,
				g = a(b).data(U),
				h = f._getFileInfoList(b),
				i = "";
			if (g) {
				try {
					i = a(g).contents().find("body").html()
				} catch (j) {
					i = j ? j.description || j.message : ""
				}
				i ? (e = f.trigger(A, {
					domEvent: c,
					operation: E,
					listItem: b,
					files: h,
					status: d,
					responseText: i
				}), e.isDefaultPrevented() || (f._setStatus(b, L), f._setProgress(b, 0))) : (f._setStatus(b, J), f._setProgress(b, 100), f.trigger(F, {
					listItem: b,
					files: h
				})), f._cleanupIframeForm(b)
			}
		},
		_onUploadError: function (b, c) {
			var d, e, f, g, h, i = this,
				j = i._getStatus(b),
				k = a(b).data(S);
			j !== L && (k && (d = k.readyState, e = k.status, f = k.responseText, g = k.statusText), a(b).removeData(S), h = i.trigger(A, {
				domEvent: c,
				operation: E,
				listItem: b,
				files: i._getFileInfoList(b),
				status: e,
				responseText: f
			}), h.isDefaultPrevented() || (i._setStatus(b, L), i._setProgress(b, 0)))
		},
		_uploadClicked: function (a) {
			var b = this;
			b._enabled && b._uploadAllPending()
		},
		enabled: function () {
			var b, c, d = this,
				e = a(d.element),
				f = [].slice.call(arguments);
			return f.length > 0 ? (b = !!f[0], c = e.find('input[type="file"]').filter(":visible"), b ? (e.removeAttr(r).removeClass("sui-upload-disabled"), a(c).removeAttr(r)) : (e.attr(r, r).addClass("sui-upload-disabled"), a(c).attr(r, r)), d._enabled = b, void 0) : d._enabled
		},
		destroy: function () {
			var b = this,
				c = a(b.element),
				d = a(b._original),
				e = b._eventNS;
			a(h).off(e), a(c).find('input[type="file"]').off(e), a(c).find('input[type="file"]').not(d).remove(), b._uploadButtonDiv && (a(b._uploadButtonDiv).remove(), b._uploadButtonDiv = null), b._dropText && (a(b._dropText).remove(), b._dropText = null), b._fileList && (a(b._fileList).remove(), b._fileList = null), a(c).find(".sui-upload-button-text").remove(), a(d).unwrap(), a(d).unwrap(), a(d).unwrap(), b._selectButtonDiv = b._dropFilesDiv = null, a(d).removeAttr(r).show(), g.fn.destroy.call(b)
		}
	}), f.defaults = e, b.ui.plugin("Upload", f)
}(jQuery, shield, this);
! function (a, b, c, d) {
	var e, f, g, h, i, j, k, l, m, n, o = b.ui.Widget,
		p = b.Class,
		q = (b.Constants.KeyCode, document),
		r = a.proxy,
		s = (a.each, a.extend),
		t = (a.map, a.contains),
		u = (a.trim, b.error, b.guid),
		v = b.format,
		w = b.is.defined,
		x = (b.is["boolean"], b.is.integer, b.is.func),
		y = (b.is.array, b.is.object, b.is.string),
		z = b.to.string,
		A = b.support.browser,
		B = "disabled",
		C = "focus",
		D = "blur",
		E = "click",
		F = "keyup",
		G = "keydown",
		H = "formatting",
		I = "text-formatting",
		J = "font-and-colors",
		K = "alignment",
		L = "lists",
		M = "links",
		N = "sui-editor",
		O = "styleWithCSS",
		P = function () {},
		Q = function (a, b, c, d) {
			if (d) try {
				a.execCommand(b, !1, c)
			} catch (e) {
				P("execCommand({0}, {1}) error: {3}", b, c, e)
			} else a.execCommand(b, !1, c)
		},
		R = "about",
		S = "About",
		T = function (b) {
			return a("<div/>").html(b).text()
		},
		U = "&#x44;&#x65;&#x6D;&#x6F;&#x20;&#x76;&#x65;&#x72;&#x73;&#x69;&#x6F;&#x6E;&#x20;&#x62;&#x79;";
	U += "&#x20;&#x3C;&#x61;&#x20;&#x68;&#x72;&#x65;&#x66;&#x3D;&#x22;&#x68;&#x74;&#x74;&#x70;&#x3A;&#x2F;&#x2F;&#x77;&#x77;&#x77;&#x2E;&#x73;&#x68;", e = function (b, c) {
		var d, e, f, g;
		!b.getSelection && c.selection && (d = null, b.getSelection = function () {
			return null != d ? d : d = new f
		}, c.createRange = function () {
			return new e
		}, c.attachEvent("onkeydown", function () {
			return b.getSelection().setRangeAt(0, new e((!0)))
		}), c.attachEvent("onselectionchange", function () {
			var a, d, f;
			try {
				d = new e((!0))
			} catch (g) {}
			if (d) return b.getSelection().setRangeAt(0, d), a = c.selection.createRange().parentElement(), "INPUT" === a.tagName || "TEXTAREA" === a.tagName ? (f = b.getSelection().getRangeAt(0), a.selectionStart = f.selectionStart, a.selectionEnd = f.selectionEnd, a.selectionEnd) : void 0
		}), e = b.Range = function () {
			var b = function (a) {
				var b = this;
				a ? b.range = c.selection.createRange() : (b.range = c.body.createTextRange(), b.collapse(!0)), b.init()
			};
			return b.END_TO_END = "EndToEnd", b.END_TO_START = "EndToStart", b.START_TO_END = "StartToEnd", b.START_TO_START = "StartToStart", b.prototype.init = function () {
				var a, b, c, d, e, f, h = this;
				return b = h.range.parentElement(), h.commonAncestorContainer = b, h.collapsed = 0 === h.compareBoundaryPoints("StartToEnd", h), f = h.range.duplicate(), f.moveToElementText(b), a = h.range.text.length > 0 ? 0 : 1, e = g.findLength("StartToStart", f, h.range), c = g.findNodeByPos(b, e, a), h.startContainer = c.el, h.startOffset = c.offset, d = g.findLength("StartToEnd", f, h.range), c = g.findNodeByPos(b, d, 1), h.endContainer = c.el, h.endOffset = c.offset, h.selectionStart = g.findLength("StartToStart", f, h.range, h), h.selectionEnd = g.findLength("StartToEnd", f, h.range, h), h.selectionEnd
			}, b.prototype.select = function () {
				return this.range.select()
			}, b.prototype.setStart = function (a, b) {
				var c, d, e = this;
				if (g.getText(a).length >= b && b >= 0) return d = e.range.duplicate(), 3 === a.nodeType && (c = g.findPosFromNode(a), d.moveToElementText(a.parentNode), d.moveStart("character", c + b)), e.range.compareEndPoints("StartToEnd", d) === -1 && e.range.setEndPoint("EndToStart", d), e.range.setEndPoint("StartToStart", d)
			}, b.prototype.setEnd = function (a, b) {
				var c, d, e = this;
				if (g.getText(a).length >= b && b >= 0) return d = e.range.duplicate(), 3 === a.nodeType && (c = g.findPosFromNode(a), d.moveToElementText(a.parentNode), d.moveStart("character", c + b)), e.range.setEndPoint("EndToStart", d)
			}, b.prototype.selectNodeContents = function (a) {
				return this.range.moveToElementText(a)
			}, b.prototype.collapse = function (a) {
				var b = this;
				return a ? b.range.setEndPoint("EndToStart", b.range) : b.range.setEndPoint("StartToEnd", b.range)
			}, b.prototype.deleteContents = function () {}, b.prototype.insertNode = function (b) {
				var d = b.outerHTML ? b.outerHTML : a(c.createElement("div")).append(a(b).clone()).html();
				this.range.pasteHTML(d)
			}, b.prototype.compareBoundaryPoints = function (a, b) {
				return this.range.compareEndPoints(a, b.range)
			}, b.prototype.cloneRange = function () {
				var a = new b;
				return a.range = this.range.duplicate(), a.init(), a
			}, b.prototype.detach = function () {
				return delete this.range
			}, b.prototype.getBoundingClientRect = function () {
				var a = this.range.getBoundingClientRect();
				return {
					width: a.right - a.left,
					height: a.bottom - a.top,
					left: a.left,
					right: a.right,
					bottom: a.bottom,
					top: a.top
				}
			}, b.prototype.toString = function () {
				return this.range.text || ""
			}, b
		}(), f = function () {
			var a = function () {
				this.selection = c.selection, this.ranges = [], this.init()
			};
			return a.prototype.init = function () {
				var a, b, c, d, f, g = this;
				if (g.rangeCount = g.ranges.length, g.rangeCount) return b = g.ranges[0], null == g.prev && (g.prev = b), 0 === b.compareBoundaryPoints(e.END_TO_END, g.prev) ? (d = ["end", "start"], a = d[0], c = d[1]) : (f = ["start", "end"], a = f[0], c = f[1]), g.anchorNode = b["" + a + "Container"], g.anchorOffset = b["" + a + "Offset"], g.focusNode = b["" + c + "Container"], g.focusOffset = b["" + c + "Offset"], g.isCollapsed = g.anchorNode === g.focusNode, g.isCollapsed
			}, a.prototype.getRangeAt = function (a) {
				return this.ranges[a]
			}, a.prototype.setRangeAt = function (a, b) {
				var c = this;
				return c.prev = c.ranges[a], c.ranges[a] = b, c.init()
			}, a.prototype.removeAllRanges = function () {
				return this.ranges = [], this.init()
			}, a.prototype.addRange = function (a) {
				var b, c, d, e, f, g = this;
				for (g.ranges.push(a), g.init(), e = g.ranges, f = [], c = 0, d = e.length; c < d; c++) b = e[c], f.push(b.select());
				return f
			}, a.prototype.deleteFromDocument = function () {
				return this.selection.clear()
			}, a.prototype.toString = function () {
				return this.ranges[0].toString()
			}, a
		}(), g = {
			convertLineBreaks: function (a) {
				return a.replace(/\r\n/g, "\n")
			},
			stripLineBreaks: function (a) {
				return a.replace(/\r\n/g, "")
			},
			getText: function (a) {
				return a.innerText || a.nodeValue
			},
			findLength: function (a, b, c, d) {
				var e = b.duplicate();
				switch (a) {
					case "StartToStart":
						e.setEndPoint("EndToStart", c);
						break;
					case "StartToEnd":
						e.setEndPoint("EndToEnd", c)
				}
				return d ? g.convertLineBreaks(e.text).length : g.stripLineBreaks(e.text).length
			},
			findNodeByPos: function (a, b, c) {
				var d, e;
				return null == c && (c = 0), e = {
					length: 0,
					el: a,
					offset: 0
				}, d = function (a, b, c, e) {
					var f, g, h, i, j;
					for (i = a.childNodes, j = [], g = 0, h = i.length; g < h; g++)
						if (f = i[g], !e.found)
							if (3 === f.nodeType) {
								if (e.length + f.length + c > b) {
									e.found = !0, e.el = f, e.offset = b - e.length;
									break
								}
								j.push(e.length += f.length)
							} else j.push(d(f, b, c, e));
					return j
				}, d(a, b, c, e), e
			},
			findPosFromNode: function (a) {
				var b, c, d;
				return c = {
					pos: 0
				}, d = a.parentNode, b = function (a, c, d) {
					var e, f, g, h, i;
					for (h = a.childNodes, i = [], f = 0, g = h.length; f < g; f++)
						if (e = h[f], !d.found) {
							if (e === c) {
								d.found = !0;
								break
							}
							3 === e.nodeType ? i.push(d.pos += e.length) : e.hasChildNodes() ? i.push(b(e, c, d)) : i.push(void 0)
						}
					return i
				}, b(d, a, c), c.pos
			}
		})
	}, U += "&#x69;&#x65;&#x6C;&#x64;&#x75;&#x69;&#x2E;&#x63;&#x6F;&#x6D;&#x22;&#x20;&#x74;&#x61;&#x72;&#x67;&#x65;&#x74;&#x3D;&#x22;&#x5F;&#x62;&#x6C;&#x61;&#x6E;&#x6B;&#x22;&#x3E;&#x53;&#x68;&#x69;&#x65;&#x6C;&#x64;&#x20;&#x55;&#x49;&#x3C;&#x2F;&#x61;&#x3E;", f = p.extend({
		init: function (a, b) {
			var c = this;
			c._editor = a, y(b) ? l[b] ? (c.options = s(!0, {}, l[b]), c._default = !0) : c.options = {
				name: b
			} : c.options = s(!0, {}, b)
		},
		_renderButton: function (b) {
			var c = this,
				d = c._editor,
				e = c.options,
				f = e.name,
				g = e.tooltip || d.options.messages[f] || "",
				h = e.cls || (c._default ? "sui-editor-toolbar-icon sui-editor-toolbar-icon-" + f.toLowerCase() : ""),
				i = s(!0, {
					cls: "sui-editor-toolbar-item sui-editor-toolbar-button",
					events: {
						click: function (a) {
							c.execute(a)
						}
					}
				}, e.controlOptions);
			c._widget = a('<button type="button" title="' + g + '"/>').append(e.text ? e.text : "<span" + (h ? ' class="' + h + '"' : "") + ">&nbsp;</span>").appendTo(b).shieldButton(i).swidget()
		},
		render: function (b) {
			var c, d = this,
				e = d.options,
				f = e.template;
			w(f) ? (c = v.call(d._editor, f, e), c && a(c).appendTo(b)) : d._renderButton(b)
		},
		execute: function (a) {
			var b = this,
				c = b.options,
				d = c.exec,
				e = b._editor,
				f = function () {
					e._afterCommand(a, c, b.getState())
				};
			x(d) ? d.call(e, c, f) : b.executeCommand(f)
		},
		executeCommand: function (a) {
			var b = this,
				c = b.options,
				d = c.styleWithCSS,
				e = b._editor,
				f = e.getDoc();
			e.focus(!0), d && Q(f, O, !0, !0), Q(f, c.name, b.getValue()), d && Q(f, O, !1, !0), x(a) && a.call(b)
		},
		getValue: function () {},
		setValue: function (a) {},
		getState: function () {
			var a, b, c, d, e = this,
				f = e.options,
				g = f.name,
				h = f.styleWithCSS,
				i = e._editor,
				j = i.getDoc(),
				k = !0;
			h && Q(j, O, !0, !0);
			try {
				k = j.queryCommandIndeterm(g)
			} catch (l) {
				P("queryCommandIndeterm({0}) error: {1}", g, l)
			}
			try {
				a = j.queryCommandEnabled(g)
			} catch (l) {
				P("queryCommandEnabled({0}) error: {1}", g, l)
			}
			if (!k) try {
				b = j.queryCommandState(g)
			} catch (l) {
				P("queryCommandState({0}) error: {1}", g, l)
			}
			try {
				c = j.queryCommandSupported(g)
			} catch (l) {
				P("queryCommandSupported({0}) error: {1}", g, l)
			}
			try {
				d = j.queryCommandValue(g)
			} catch (l) {
				P("queryCommandValue({0}) error: {1}", g, l)
			}
			return h && Q(j, O, !1, !0), {
				enabled: a,
				state: b,
				supported: c,
				value: d
			}
		},
		refresh: function () {
			var a, b = this,
				c = b._widget;
			b._default && (a = b.getState(), a.enabled ? (c.visible(!0), b.setValue(a)) : c.visible(!1))
		},
		destroy: function () {
			var a = this;
			a._widget && x(a._widget.destroy) && a._widget.destroy(), a._default = a._widget = d
		}
	}), f.getInstance = function (a, b) {
		var c = "";
		return y(b) ? l[b] && (c = l[b].controlType) : c = b.controlType, c || (c = f), new c(a, b)
	}, g = f.extend({}), h = g.extend({
		init: function (a, b) {
			g.fn.init.call(this, a, b), s(!0, this.options, {
				controlOptions: {
					toggle: !0
				}
			})
		},
		getValue: function () {
			return !!this._widget.checked()
		},
		setValue: function (a) {
			this._widget.checked(!!a.state)
		}
	}), j = f.extend({
		render: function (b) {
			var c = this,
				d = (c._editor, c.options),
				e = s(!0, {
					cls: "sui-editor-toolbar-item sui-editor-toolbar-select",
					events: {
						itemclick: function (a) {
							c.execute(a)
						}
					}
				}, d.controlOptions);
			c._widget = a("<select/>").appendTo(b).shieldComboBox(e).swidget()
		},
		getValue: function () {
			return this._widget.value()
		},
		setValue: function (a) {
			this._widget.value(a.value)
		}
	}), i = j.extend({
		init: function (a, b) {
			j.fn.init.call(this, a, b), s(!0, this.options, {
				controlOptions: {
					editable: !1
				}
			})
		}
	}), k = f.extend({
		render: function (b) {
			var c = this,
				d = c._editor,
				e = c.options,
				f = s(!0, {
					cls: "sui-editor-toolbar-item sui-editor-toolbar-colorpicker",
					events: {
						select: function (a) {
							this.hidePalette(), c.execute(a), setTimeout(function () {
								d.focus()
							})
						}
					}
				}, e.controlOptions);
			c._widget = a('<input type="color"/>').appendTo(b).shieldColorPicker(f).swidget()
		},
		getValue: function () {
			return this._widget.value().hex()
		},
		setValue: function (a) {
			this._widget.value(a.value)
		}
	}), l = {
		formatBlock: {
			name: "formatBlock",
			group: H,
			controlType: i,
			controlOptions: {
				valueTemplate: "{value}",
				textTemplate: "{text}",
				dataSource: {
					data: [{
						text: "Paragraph",
						value: "p"
					}, {
						text: "Quotation",
						value: "blockquote"
					}, {
						text: "Heading 1",
						value: "h1"
					}, {
						text: "Heading 2",
						value: "h2"
					}, {
						text: "Heading 3",
						value: "h3"
					}, {
						text: "Heading 4",
						value: "h4"
					}, {
						text: "Heading 5",
						value: "h5"
					}, {
						text: "Heading 6",
						value: "h6"
					}]
				}
			}
		},
		removeFormat: {
			name: "removeFormat",
			group: H,
			controlType: g
		},
		fontName: {
			name: "fontName",
			group: J,
			styleWithCSS: !0,
			controlType: i.extend({
				setValue: function (a) {
					var b, c = this._widget,
						d = a.value;
					if (c.value(d), c.selected() < 0)
						for (b = 0; b < c.dataSource.view.length; b++)
							if (c.dataSource.view[b].text == d) {
								c.selected(b);
								break
							}
					c.selected() < 0 && c.selected(0)
				}
			}),
			controlOptions: {
				valueTemplate: "{value}",
				textTemplate: "{text}",
				value: "",
				dataSource: {
					data: [{
						text: "Inherited",
						value: ""
					}, {
						text: "Arial",
						value: "Arial,Helvetica,sans-serif"
					}, {
						text: "Courier New",
						value: '"Courier New",Courier,monospace'
					}, {
						text: "Georgia",
						value: "Georgia,serif"
					}, {
						text: "Tahoma",
						value: "Tahoma,Geneva,sans-serif"
					}, {
						text: "Times New Roman",
						value: '"Times New Roman",Times,serif'
					}, {
						text: "Verdana",
						value: "Verdana,Geneva,sans-serif"
					}]
				}
			}
		},
		fontSize: {
			name: "fontSize",
			group: J,
			controlType: i.extend({
				setValue: function (a) {
					this._widget.value(z(a.value) || "")
				}
			}),
			controlOptions: {
				valueTemplate: "{value}",
				textTemplate: "{text}",
				value: "inherit",
				dataSource: {
					data: [{
						text: "Inherited",
						value: ""
					}, {
						text: "1 (8pt)",
						value: "1"
					}, {
						text: "2 (10pt)",
						value: "2"
					}, {
						text: "3 (12pt)",
						value: "3"
					}, {
						text: "4 (14pt)",
						value: "4"
					}, {
						text: "5 (18pt)",
						value: "5"
					}, {
						text: "6 (24pt)",
						value: "6"
					}, {
						text: "7 (36pt)",
						value: "7"
					}]
				}
			}
		},
		foreColor: {
			name: "foreColor",
			group: J,
			controlType: k,
			controlOptions: {
				value: "transparent",
				palette: "basic",
				showLetter: !0
			}
		},
		backColor: {
			name: "backColor",
			group: J,
			styleWithCSS: !0,
			controlType: k,
			controlOptions: {
				value: "transparent",
				palette: "basic"
			}
		},
		bold: {
			name: "bold",
			group: I,
			controlType: h
		},
		italic: {
			name: "italic",
			group: I,
			controlType: h
		},
		underline: {
			name: "underline",
			group: I,
			controlType: h
		},
		strikeThrough: {
			name: "strikeThrough",
			group: I,
			controlType: h
		},
		subscript: {
			name: "subscript",
			group: I,
			controlType: h
		},
		superscript: {
			name: "superscript",
			group: I,
			controlType: h
		},
		justifyLeft: {
			name: "justifyLeft",
			group: K,
			controlType: h.extend({
				setValue: function (a) {
					this._widget.checked(!!(A.ie ? a.value : a.state))
				}
			})
		},
		justifyCenter: {
			name: "justifyCenter",
			group: K,
			controlType: h.extend({
				setValue: function (a) {
					this._widget.checked(!!(A.ie ? a.value : a.state))
				}
			})
		},
		justifyRight: {
			name: "justifyRight",
			group: K,
			controlType: h.extend({
				setValue: function (a) {
					this._widget.checked(!!(A.ie ? a.value : a.state))
				}
			})
		},
		justifyFull: {
			name: "justifyFull",
			group: K,
			controlType: h.extend({
				setValue: function (a) {
					this._widget.checked(!!(A.ie ? a.value : a.state))
				}
			})
		},
		insertUnorderedList: {
			name: "insertUnorderedList",
			group: L,
			controlType: g
		},
		insertOrderedList: {
			name: "insertOrderedList",
			group: L,
			controlType: g
		},
		indent: {
			name: "indent",
			group: L,
			controlType: g
		},
		outdent: {
			name: "outdent",
			group: L,
			controlType: g
		},
		createLink: {
			name: "createLink",
			group: M,
			controlType: g.extend({
				executeCommand: function (c) {
					var d, e = this,
						f = e._editor,
						g = u();
					d = new b.ui.Window(a('<div id="' + g + '"/>'), {
						cls: "sui-editor-dialog sui-editor-dialog-insertimage",
						title: "Insert Hyperlink",
						titleBarButtons: ["close"],
						modal: !0,
						height: 220,
						content: {
							template: {
								body: function () {
									return [a('<div style="padding:5px; margin-top:10px;"/>').append(a("<label>URL</label>"), a('<input type="text" value="http://" id="url_' + g + '" class="sui-input" style="width:220px;"/>')), a('<div style="padding:5px;"/>').append(a("<label>Tooltip</label>"), a('<input type="text" value="" id="title_' + g + '" class="sui-input" style="width:220px;"/>')), a('<div style="padding:5px;"/>').append(a("<label>New window</label>"), a('<input type="checkbox" id="newwin_' + g + '"/>')), a('<div class="sui-editor-dialog-buttons"/>').append(new b.ui.Button(a("<button>Insert</button>"), {
										events: {
											click: function () {
												f.focus(!0), Q(f.getDoc(), "createLink", g);
												var b = a(f.element).find('a[href="' + g + '"]'),
													h = a("#url_" + g).val(),
													i = (a("#text_" + g).val(), a("#title_" + g).val()),
													j = a("#newwin_" + g).swidget().checked();
												a(b).attr("href", h), i && a(b).attr("title", i), j && a(b).attr("target", "_blank"), d.close(), a("#" + g).remove(), x(c) && c.call(e)
											}
										}
									}).element, new b.ui.Button(a("<button>Cancel</button>"), {
										events: {
											click: function () {
												d.close(), a("#" + g).remove(), x(c) && c.call(e)
											}
										}
									}).element)]
								}
							}
						},
						appendToBody: !0,
						events: {
							close: function () {
								a("#" + g).remove(), x(c) && c.call(e)
							}
						}
					}), a("#newwin_" + g).shieldCheckBox()
				}
			})
		},
		unlink: {
			name: "unlink",
			group: M,
			controlType: g
		},
		insertImage: {
			name: "insertImage",
			group: "insert-img",
			controlType: g.extend({
				executeCommand: function (c) {
					var d, e = this,
						f = e._editor,
						g = u();
					d = new b.ui.Window(a('<div id="' + g + '"/>'), {
						cls: "sui-editor-dialog sui-editor-dialog-insertimage",
						title: "Insert Image",
						titleBarButtons: ["close"],
						modal: !0,
						height: 260,
						content: {
							template: {
								body: function () {
									return [a('<div style="padding:5px; margin-top:10px;"/>').append(a("<label>URL</label>"), a('<input type="text" value="http://" id="url_' + g + '" class="sui-input" style="width:220px;"/>')), a('<div style="padding:5px;"/>').append(a("<label>Alternate text</label>"), a('<input type="text" value="" id="alt_' + g + '" class="sui-input" style="width:220px;"/>')), a('<div style="padding:5px;"/>').append(a("<label>Width</label>"), a('<input type="text" value="" id="width_' + g + '" class="sui-input" style="width:80px;"/>')), a('<div style="padding:5px;"/>').append(a("<label>Height</label>"), a('<input type="text" value="" id="height_' + g + '" class="sui-input" style="width:80px;"/>')), a('<div class="sui-editor-dialog-buttons"/>').append(new b.ui.Button(a("<button>Insert</button>"), {
										events: {
											click: function () {
												var b = a("#alt_" + g).val(),
													h = a("#width_" + g).val(),
													i = a("#height_" + g).val();
												f.paste('<img src="' + a("#url_" + g).val() + '"' + (b ? ' alt="' + b + '"' : "") + (h ? ' width="' + h + '"' : "") + (i ? ' height="' + i + '"' : "") + "/>"), d.close(), a("#" + g).remove(), x(c) && c.call(e)
											}
										}
									}).element, new b.ui.Button(a("<button>Cancel</button>"), {
										events: {
											click: function () {
												d.close(), a("#" + g).remove(), x(c) && c.call(e)
											}
										}
									}).element)]
								}
							}
						},
						appendToBody: !0,
						events: {
							close: function () {
								a("#" + g).remove(), x(c) && c.call(e)
							}
						}
					})
				}
			})
		},
		about: {
			name: R,
			group: "view-" + R,
			tooltip: S,
			controlType: g.extend({
				refresh: function () {},
				executeCommand: function (c) {
					var d, e = this,
						f = u();
					d = new b.ui.Window(a('<div id="' + f + '"/>'), {
						cls: "sui-editor-dialog sui-editor-dialog-" + R,
						title: S,
						titleBarButtons: ["close"],
						modal: !0,
						height: 170,
						content: {
							template: {
								body: function () {
									return [a('<div style="text-align:center; margin-top:30px; margin-bottom:20px;"/>').append(T(U)), a('<div class="sui-editor-dialog-buttons"/>').append(new b.ui.Button(a("<button>Close</button>"), {
										events: {
											click: function () {
												d.close(), a("#" + f).remove(), x(c) && c.call(e)
											}
										}
									}).element)]
								}
							}
						},
						appendToBody: !0,
						events: {
							close: function () {
								a("#" + f).remove(), x(c) && c.call(e)
							}
						}
					})
				}
			})
		},
		viewHtml: {
			name: "viewHtml",
			group: "view-html",
			controlType: g.extend({
				refresh: function () {},
				executeCommand: function (c) {
					var d, e, f = this,
						g = f._editor,
						h = u();
					e = function () {
						a("#" + h + " textarea").outerHeight(a("#" + h + " .sui-window-content").innerHeight() - a("#" + h + " .sui-editor-dialog-buttons").outerHeight() - 10)
					}, d = new b.ui.Window(a('<div id="' + h + '"/>'), {
						cls: "sui-editor-dialog sui-editor-dialog-viewhtml",
						title: "View HTML",
						titleBarButtons: ["close"],
						modal: !0,
						resizable: {
							events: {
								resize: e
							}
						},
						content: {
							template: {
								body: function () {
									return [a("<div/>").append(a('<textarea class="sui-input"/>').val(g.value())), a('<div class="sui-editor-dialog-buttons"/>').append(new b.ui.Button(a("<button>Update</button>"), {
										events: {
											click: function () {
												g.value(a("#" + h + " textarea").val()), d.close(), a("#" + h).remove(), x(c) && c.call(f)
											}
										}
									}).element, new b.ui.Button(a("<button>Cancel</button>"), {
										events: {
											click: function () {
												d.close(), a("#" + h).remove(), x(c) && c.call(f)
											}
										}
									}).element)]
								}
							}
						},
						appendToBody: !0,
						events: {
							close: function () {
								a("#" + h).remove(), x(c) && c.call(f)
							}
						}
					}), e()
				}
			})
		}
	}, m = {
		cls: d,
		enabled: !0,
		domain: d,
		height: d,
		commands: ["formatBlock", "bold", "italic", "underline", "justifyLeft", "justifyCenter", "justifyRight", "insertUnorderedList", "insertOrderedList", "createLink", "unlink", "insertImage"],
		messages: {
			format: "Format",
			removeFormat: "Remove formatting",
			fontName: "Font family",
			fontSize: "Font size",
			foreColor: "Font color",
			backColor: "Background color",
			bold: "Bold",
			italic: "Italic",
			underline: "Underline",
			strikeThrough: "Strikethrough",
			superscript: "Superscript",
			subscript: "Subscript",
			justifyLeft: "Align text left",
			justifyCenter: "Center text",
			justifyRight: "Align text right",
			justifyFull: "Justify",
			insertUnorderedList: "Insert unordered list",
			insertOrderedList: "Insert ordered list",
			indent: "Add indentation",
			outdent: "Remove indentation",
			createLink: "Insert hyperlink",
			unlink: "Remove hyperlink",
			insertImage: "Insert image",
			viewHtml: "View HTML"
		},
		events: {}
	}, n = o.extend({
		init: function () {
			o.fn.init.apply(this, arguments), w(this.initialOptions.commands) && (this.options.commands = this.initialOptions.commands);
			var b, c, d, f, g = this,
				h = a(g.element),
				i = g.options,
				j = (i.dieOnError, i.cls),
				k = i.height;
			g._original = b = a(g.element), g._tagname = c = b.prop("tagName").toLowerCase(), f = g._eventNS = ".shieldEditor" + g.getInstanceId(), "textarea" == c ? (g._inline = !1, g._wrapper = b.wrap('<div class="' + N + " " + N + "-default" + (j ? " " + j : "") + '"/>').parent(), b.hide(), g._iframe = d = a('<iframe class="sui-editor-iframe" frameborder="0"' + (w(k) ? ' height="' + k + '"' : "") + "/>").appendTo(g._wrapper), g.value(b.val(), !0), g.element = h = d.contents().find("body")) : (g._inline = !0, h.addClass(N + " " + N + "-inline" + (j ? " " + j : "")).attr("autocorrect", "off").prop("contentEditable", "true")), g._initEvents(), e(g.getWin(), g.getDoc()), g._initToolbar(), a(q).on(E + f, r(g._docClick, g)), g.enabled(i.enabled)
		},
		refresh: function (a) {
			this.refreshWithElement(this._original, a)
		},
		_isInside: function (b) {
			var c = this,
				d = a(c.element),
				e = a(c._toolbar);
			return d.get(0) === b || e.get(0) === b || t(d.get(0), b) || t(e.get(0), b)
		},
		_saveSelections: function () {
			var a, b, c = this;
			if (!c._inline && (c._savedSelections = [], a = c.getSelection(), a.rangeCount))
				for (b = 0; b < a.rangeCount; b++) c._savedSelections.push(a.getRangeAt(b))
		},
		_restoreSelections: function () {
			var a, b, c = this;
			if (!c._inline) {
				if (c._savedSelections && c._savedSelections.length > 0)
					for (a = c.getSelection(), a.removeAllRanges(), b = 0; b < c._savedSelections.length; b++) a.addRange(c._savedSelections[b]);
				c._savedSelections = []
			}
		},
		_focus: function (c) {
			var d = this,
				e = a(d.element),
				f = a(d._toolbar);
			d._inline && (f.show(), e.addClass("sui-editor-inline-focus"), d._toolbarMoved || (f.outerWidth(e.outerWidth()), b.ui.Position.Set(f, e, {
				source: "left bottom",
				target: "left top"
			}))), d._restoreSelections(), d.refreshCommands()
		},
		_blur: function (a) {
			this._saveSelections(), this._syncValue()
		},
		_click: function (a) {
			this.refreshCommands(), this._syncValue()
		},
		_docClick: function (a) {
			var b = this;
			b._inline && !b._isInside(a.target) && b._hideToolbar()
		},
		_keydown: function (a) {
			this.trigger(G, {
				domEvent: a
			})
		},
		_keyup: function (a) {
			var b = this;
			b.refreshCommands(), b._syncValue(), b.trigger(F, {
				domEvent: a
			})
		},
		_syncValue: function () {
			var b, c = this,
				d = [].slice.call(arguments);
			c._inline || (b = d.length > 0 ? d[0] : a(c.getDoc().body).html(), a(c._original).val(b))
		},
		_hideToolbar: function () {
			this._toolbar.hide(), this.element.removeClass("sui-editor-inline-focus")
		},
		_initToolbar: function () {
			var b, c, d, e, g, h, i, j = this,
				k = j.options,
				l = k.commands,
				m = (k.messages, j._inline);
			for (j._commands = [], j._toolbar = b = a('<div class="sui-editor-toolbar"/>'), m ? (b.addClass("sui-editor-toolbar-inline").appendTo(q.body), b.shieldDraggable().swidget().one("drag", function () {
					j._toolbarMoved = !0
				}), j._toolbarMoved = !1) : b.prependTo(j._wrapper), i = 0; i < l.length; i++) c = f.getInstance(j, l[i]), d = c.options.group, h = d && e === d ? g : a('<div class="sui-editor-toolbar-group"/>').appendTo(b), c.render(h), j._commands.push(c), e = d, g = h;
			c = f.getInstance(j, R), d = c.options.group, h = d && e === d ? g : a('<div class="sui-editor-toolbar-group"/>').appendTo(b), c.render(h), j._commands.push(c), e = d, g = h, m && b.hide()
		},
		_afterCommand: function (a, b, c) {
			var d = this;
			d._syncValue(), d.refreshCommands(), d.trigger("execute", {
				domEvent: a,
				commandName: b.name,
				state: c
			})
		},
		refreshCommands: function () {
			var a, b = this,
				c = b._commands || [];
			if (!b._refreshInProgress) {
				for (b.focus(!0), b._refreshInProgress = !0, a = 0; a < c.length; a++) c[a].refresh();
				b._refreshInProgress = !1
			}
		},
		_getWrapper: function () {
			return this._inline ? this.element : this._wrapper
		},
		getWin: function () {
			var b, d = this;
			return d._inline ? c : (b = a(d._iframe).get(0), b.contentWindow || b.contentDocument)
		},
		getDoc: function () {
			var b, c = this;
			return c._inline ? q : (b = a(c._iframe).get(0), (b.contentWindow || b.contentDocument).document)
		},
		focus: function (b) {
			var c, d = this;
			b && !d._refreshInProgress && (d._refreshInProgress = !0, c = !0), a(d._inline ? d.element : d.getDoc().body).focus(), !d._inline && A.ie && d._focus(), c && (d._refreshInProgress = !1)
		},
		execute: function (a, b) {
			Q(this.getDoc(), a, b)
		},
		createRange: function () {
			return this.getDoc().createRange()
		},
		getRange: function () {
			return this.focus(!0), this.getSelection().getRangeAt(0)
		},
		getSelection: function () {
			return this.getWin().getSelection()
		},
		selectRange: function (a) {
			var b = this,
				c = b.getSelection();
			b.focus(!0), c.removeAllRanges(), c.addRange(a), b.refreshCommands()
		},
		paste: function (a) {
			var b, c, d, e, f = this,
				g = f.getDoc(),
				h = f.getRange();
			for (f.focus(!0), h.deleteContents(), b = g.createElement("div"), b.innerHTML = a, c = g.createDocumentFragment(); d = b.firstChild;) e = c.appendChild(d);
			h.insertNode(c), f._syncValue(), f.refreshCommands()
		},
		update: function () {
			this._syncValue()
		},
		_initEvents: function (b) {
			var c = this,
				d = c._eventNS,
				e = A.ie;
			w(b) || (b = c._inline ? c.element : e ? c.getWin() : c.getDoc()), e && (c.getDoc().body.onbeforedeactivate = null), a(b).off(d).on(C + d, r(c._focus, c)).on(E + d, r(c._click, c)).on(G + d, r(c._keydown, c)).on(F + d, r(c._keyup, c)), e ? c.getDoc().body.onbeforedeactivate = r(c._blur, c) : a(b).on(D + d, r(c._blur, c))
		},
		_getIframeStyles: function () {
			return "<style>html,body{margin:0;padding:2px;}p{margin:0 0 0.5em 0;}</style>"
		},
		_getIframeScripts: function () {
			var a = this.options.domain;
			return a ? '<script type="text/javascript">document.domain="' + a + '";</script>' : ""
		},
		value: function () {
			var b, c, d, e = this,
				f = [].slice.call(arguments),
				g = e._inline,
				h = a(e._original);
			return f.length > 0 ? (c = f[0], d = f[1], g ? a(e.element).html(c) : (b = e.getDoc(), b.open().write('<head><meta charset="utf-8">' + e._getIframeStyles() + e._getIframeScripts() + '</head><body contenteditable="true" autocorrect="off">' + c + "</body>"), b.close(), e.element = e.getDoc().body, e._initEvents(b), d || e._syncValue(c)), void 0) : g ? h.html() : a(e.getDoc().body).html()
		},
		hide: function () {
			a(this._getWrapper()).hide()
		},
		show: function () {
			a(this._getWrapper()).show()
		},
		isVisible: function () {
			return a(this._getWrapper()).is(":visible")
		},
		enabled: function () {
			var b, c = this,
				d = [].slice.call(arguments);
			return d.length > 0 ? (b = !!d[0], b ? a(c._getWrapper()).removeAttr(B).removeClass("sui-editor-disabled") : a(c._getWrapper()).attr(B, B).addClass("sui-editor-disabled"), c._enabled = b, void 0) : c._enabled
		},
		destroy: function () {
			var b, c = this,
				e = c.options,
				f = e.cls,
				g = c._original,
				h = c._eventNS;
			if (a(c.element).off(h), a(q).off(h), c._toolbar) {
				if (c._commands) {
					for (b = 0; b < c._commands.length; b++) c._commands[b].destroy();
					c._commands = d
				}
				a(c._toolbar).off(h).remove(), c._toolbar = d
			}
			c._inline ? a(g).removeAttr("autocorrect").prop("contentEditable", "off").removeClass(N + " " + N + "-inline" + (f ? " " + f : "")) : (a(c._iframe).remove(), a(g).unwrap(), a(g).show()), c._inline = c._iframe = c._wrapper = c._toolbarMoved = c._savedSelections = d, o.fn.destroy.call(c)
		}
	}), n.defaults = m, b.ui.plugin("Editor", n)
}(jQuery, shield, this);