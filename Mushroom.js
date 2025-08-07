// Mushroom v5.3.0 
class Mushroom {
   //-------------------------
   //          Libs
   //-------------------------
   /*** ColorLab v 2.2.3 ***/
   #ColorLab = class {
      #COLORS_MAP;
      constructor() {
         this.version = '2.2.2';
         this.#COLORS_MAP = new Map(
            Object.entries(this.#COLORS).map(([k, v]) => [this.#trimCase(k), v])
         );
      }
      #COLORS = {
         "AliceBlue": "#F0F8FF",
         "AntiqueWhite": "#FAEBD7",
         "Aqua": "#00FFFF",
         "Aquamarine": "#7FFFD4",
         "Azure": "#F0FFFF",
         "Beige": "#F5F5DC",
         "Bisque": "#FFE4C4",
         "Black": "#000000",
         "BlanchedAlmond": "#FFEBCD",
         "Blue": "#0000FF",
         "BlueViolet": "#8A2BE2",
         "Brown": "#A52A2A",
         "BurlyWood": "#DEB887",
         "CadetBlue": "#5F9EA0",
         "Chartreuse": "#7FFF00",
         "Chocolate": "#D2691E",
         "Coral": "#FF7F50",
         "CornflowerBlue": "#6495ED",
         "Cornsilk": "#FFF8DC",
         "Crimson": "#DC143C",
         "Cyan": "#00FFFF",
         "DarkBlue": "#00008B",
         "DarkCyan": "#008B8B",
         "DarkGoldenRod": "#B8860B",
         "DarkGray": "#A9A9A9",
         "DarkGrey": "#A9A9A9",
         "DarkGreen": "#006400",
         "DarkKhaki": "#BDB76B",
         "DarkMagenta": "#8B008B",
         "DarkOliveGreen": "#556B2F",
         "DarkOrange": "#FF8C00",
         "DarkOrchid": "#9932CC",
         "DarkRed": "#8B0000",
         "DarkSalmon": "#E9967A",
         "DarkSeaGreen": "#8FBC8F",
         "DarkSlateBlue": "#483D8B",
         "DarkSlateGray": "#2F4F4F",
         "DarkSlateGrey": "#2F4F4F",
         "DarkTurquoise": "#00CED1",
         "DarkViolet": "#9400D3",
         "DeepPink": "#FF1493",
         "DeepSkyBlue": "#00BFFF",
         "DimGray": "#696969",
         "DimGrey": "#696969",
         "DodgerBlue": "#1E90FF",
         "FireBrick": "#B22222",
         "FloralWhite": "#FFFAF0",
         "ForestGreen": "#228B22",
         "Fuchsia": "#FF00FF",
         "Gainsboro": "#DCDCDC",
         "GhostWhite": "#F8F8FF",
         "Gold": "#FFD700",
         "GoldenRod": "#DAA520",
         "Gray": "#808080",
         "Grey": "#808080",
         "Green": "#008000",
         "GreenYellow": "#ADFF2F",
         "HoneyDew": "#F0FFF0",
         "HotPink": "#FF69B4",
         "IndianRed": "#CD5C5C",
         "Indigo": "#4B0082",
         "Ivory": "#FFFFF0",
         "Khaki": "#F0E68C",
         "Lavender": "#E6E6FA",
         "LavenderBlush": "#FFF0F5",
         "LawnGreen": "#7CFC00",
         "LemonChiffon": "#FFFACD",
         "LightBlue": "#ADD8E6",
         "LightCoral": "#F08080",
         "LightCyan": "#E0FFFF",
         "LightGoldenRodYellow": "#FAFAD2",
         "LightGray": "#D3D3D3",
         "LightGrey": "#D3D3D3",
         "LightGreen": "#90EE90",
         "LightPink": "#FFB6C1",
         "LightSalmon": "#FFA07A",
         "LightSeaGreen": "#20B2AA",
         "LightSkyBlue": "#87CEFA",
         "LightSlateGray": "#778899",
         "LightSlateGrey": "#778899",
         "LightSteelBlue": "#B0C4DE",
         "LightYellow": "#FFFFE0",
         "Lime": "#00FF00",
         "LimeGreen": "#32CD32",
         "Linen": "#FAF0E6",
         "Magenta": "#FF00FF",
         "Maroon": "#800000",
         "MediumAquaMarine": "#66CDAA",
         "MediumBlue": "#0000CD",
         "MediumOrchid": "#BA55D3",
         "MediumPurple": "#9370DB",
         "MediumSeaGreen": "#3CB371",
         "MediumSlateBlue": "#3CB371",
         "MediumSpringGreen": "#00FA9A",
         "MediumTurquoise": "#48D1CC",
         "MediumVioletRed": "#C71585",
         "MidnightBlue": "#191970",
         "MintCream": "#F5FFFA",
         "MistyRose": "#FFE4E1",
         "Moccasin": "#FFE4B5",
         "NavajoWhite": "#FFDEAD",
         "Navy": "#000080",
         "OldLace": "#FDF5E6",
         "Olive": "#808000",
         "OliveDrab": "#6B8E23",
         "Orange": "#FFA500",
         "OrangeRed": "#FF4500",
         "Orchid": "#DA70D6",
         "PaleGoldenRod": "#EEE8AA",
         "PaleGreen": "#98FB98",
         "PaleTurquoise": "#AFEEEE",
         "PaleVioletRed": "#DB7093",
         "PapayaWhip": "#FFEFD5",
         "PeachPuff": "#FFDAB9",
         "Peru": "#CD853F",
         "Pink": "#FFC0CB",
         "Plum": "#DDA0DD",
         "PowderBlue": "#B0E0E6",
         "Purple": "#800080",
         "RebeccaPurple": "#663399",
         "Red": "#FF0000",
         "RosyBrown": "#BC8F8F",
         "RoyalBlue": "#4169E1",
         "SaddleBrown": "#8B4513",
         "Salmon": "#FA8072",
         "SandyBrown": "#F4A460",
         "SeaGreen": "#2E8B57",
         "SeaShell": "#FFF5EE",
         "Sienna": "#A0522D",
         "Silver": "#C0C0C0",
         "SkyBlue": "#87CEEB",
         "SlateBlue": "#6A5ACD",
         "SlateGray": "#708090",
         "SlateGrey": "#708090",
         "Snow": "#FFFAFA",
         "SpringGreen": "#00FF7F",
         "SteelBlue": "#4682B4",
         "Tan": "#D2B48C",
         "Teal": "#008080",
         "Thistle": "#D8BFD8",
         "Tomato": "#FF6347",
         "Turquoise": "#40E0D0",
         "Violet": "#EE82EE",
         "Wheat": "#F5DEB3",
         "White": "#FFFFFF",
         "WhiteSmoke": "#F5F5F5",
         "Yellow": "#FFFF00",
         "YellowGreen": "#9ACD32"
      };
      #H = {
         'analogous': [0, 30, -30],
         'complementary': [0, 180],
         'tetradic': [0, 60, 180, 240],
         'compound': [0, 150, -150],
         'split-complementary': [0, 30, 180, 210],
         'triadic': [0, 120, -120],
         'square': [0, 90, -90, 180],
      }
      #R = {
         // input 
         hex: /^#([a-f\d]{3}|[a-f\d]{4}|[a-f\d]{6}|[a-f\d]{8})$/i,
         rgb: /^rgba?\(\s*(\d+(\.\d+)?)\s*,?\s*(\d+(\.\d+)?)\s*,?\s*(\d+(\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
         hsl: /^hsla?\(\s*(\d+(\.\d+)?)\s*(deg)?\s*,?\s*(\d+(\.\d+)?)%?\s*,?\s*(\d+(\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
         hsv: /^hsva?\(\s*(\d+(\.\d+)?)\s*(deg)?\s*,?\s*(\d+(\.\d+)?)%?\s*,?\s*(\d+(\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
         cmyk: /^cmyk\(\s*(\d+(?:\.\d+)?%?)\s*,?\s*(\d+(?:\.\d+)?%?)\s*,?\s*(\d+(?:\.\d+)?%?)\s*,?\s*(\d+(?:\.\d+)?%?)\s*\)$/i,
         // normalized match
         nHex: /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
         nRgb: /^rgb\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s*\/\s*(\d*\.?\d+)\s*\)$/i,
         nHsl: /^hsl\(\s*(\d{1,3})deg\s+(\d{1,3})%\s+(\d{1,3})%\s*\/\s*(\d*\.?\d+)\s*\)$/i,
         nHsv: /^hsv\(\s*(\d{1,3})deg\s+(\d{1,3})%\s+(\d{1,3})%\s*\/\s*(\d*\.?\d+)\s*\)$/i,
         nCmyk: /^cmyk\(\s*(\d{1,3})%\s+(\d{1,3})%\s+(\d{1,3})%\s+(\d{1,3})%\s*\)$/i,
      }
      #N = {
         keyword: (input) => {
            const T = this.#trimCase;
            input = T(input);
            if (this.#COLORS_MAP.has(input)) {
               return Object.keys(this.#COLORS).find(name => T(name) === input);
            }
            return undefined;
         },
         hex: (input) => {
            const regex = this.#R.hex;
            if (!regex.test(input)) return undefined;
            let hex = input.slice(1).toUpperCase();
            if (hex.length === 3) {
               hex = hex.replace(/./g, x => x + x) + 'ff';
            } else if (hex.length === 4) {
               hex = hex.replace(/./g, x => x + x);
            } else if (hex.length === 6) {
               hex += 'FF';
            }
            return `#${hex.toUpperCase()}`;
         },
         rgb: (input) => {
            const regex = this.#R.rgb;
            let match = input.match(regex);
            if (!match) return undefined;
            let r = parseInt(match[1]);
            let g = parseInt(match[3]);
            let b = parseInt(match[5]);
            let a = match[7] !== undefined ? parseFloat(match[7]) : 1;
            if (r > 255 || g > 255 || b > 255 || a < 0 || a > 1) return undefined;
            return `rgb(${r} ${g} ${b} / ${a})`;
         },
         hsl: (input) => {
            const regex = this.#R.hsl;
            let match = input.match(regex);
            if (!match) return undefined;
            let h = Math.round(parseFloat(match[1]));
            let s = Math.round(parseFloat(match[4]));
            let l = Math.round(parseFloat(match[6]));
            let a = match[8] !== undefined ? parseFloat(match[8]) : 1;
            if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100 || a < 0 || a > 1) return undefined;
            return `hsl(${h}deg ${s}% ${l}% / ${a})`;
         },
         hsv: (input) => {
            const regex = this.#R.hsv;
            let match = input.match(regex);
            if (!match) return undefined;
            let h = Math.round(parseFloat(match[1]));
            let s = Math.round(parseFloat(match[4]));
            let v = Math.round(parseFloat(match[6]));
            let a = match[8] !== undefined ? parseFloat(match[8]) : 1;
            if (h < 0 || h > 360 || s < 0 || s > 100 || v < 0 || v > 100 || a < 0 || a > 1) return undefined;
            return `hsv(${h}deg ${s}% ${v}% / ${a})`;
         },
         cmyk: (input) => {
            const regex = this.#R.cmyk;
            let match = input.match(regex);
            if (!match) return undefined;
            let c = parseFloat(match[1]);
            let m = parseFloat(match[2]);
            let y = parseFloat(match[3]);
            let k = parseFloat(match[4]);
            if ([c, m, y, k].some(x => x < 0 || x > 100)) return undefined;
            return `cmyk(${c}% ${m}% ${y}% ${k}%)`;
         },
      }
      #C = {
         hex: (input) => {
            input = this.#N.hex(input);
            if (!input) return undefined;
            let match = input.match(this.#R.nHex);
            if (!match) return undefined;
            let R = match[1].toUpperCase();
            let G = match[2].toUpperCase();
            let B = match[3].toUpperCase();
            let A = match[4].toUpperCase();
            return { R, G, B, A };
         },
         rgb: (input) => {
            input = this.#N.rgb(input);
            if (!input) return undefined;
            let match = input.match(this.#R.nRgb);
            if (!match) return undefined;
            let R = parseInt(match[1]);
            let G = parseInt(match[2]);
            let B = parseInt(match[3]);
            let A = parseFloat(parseFloat(match[4]).toFixed(2));
            return { R, G, B, A };
         },
         hsl: (input) => {
            input = this.#N.hsl(input);
            if (!input) return undefined;
            let match = input.match(this.#R.nHsl);
            if (!match) return undefined;
            let H = parseInt(match[1]);
            let S = parseInt(match[2]);
            let L = parseInt(match[3]);
            let A = parseFloat(parseFloat(match[4]).toFixed(2));
            return { H, S, L, A };
         },
         hsv: (input) => {
            input = this.#N.hsv(input);
            if (!input) return undefined;
            let match = input.match(this.#R.nHsv);
            if (!match) return undefined;
            let H = parseInt(match[1]);
            let S = parseInt(match[2]);
            let V = parseInt(match[3]);
            let A = parseFloat(parseFloat(match[4]).toFixed(2));
            return { H, S, V, A };
         },
         cmyk: (input) => {
            input = this.#N.cmyk(input);
            if (!input) return undefined;
            let match = input.match(this.#R.nCmyk);
            if (!match) return undefined;
            let C = parseInt(match[1]);
            let M = parseInt(match[2]);
            let Y = parseInt(match[3]);
            let K = parseFloat(parseFloat(match[4]).toFixed(2));
            let A = 1;
            return { C, M, Y, K, A };
         },
      }
      #T = {
         keyword: {
            keyword: (keyword) => {
               return this.#splitPascalCase(this.#N.keyword(keyword));
            },
            hex: (keyword) => {
               return this.#COLORS_MAP.get(this.#trimCase(keyword));
            },
            rgb: (keyword) => {
               let hex = this.#T.keyword.hex(keyword);
               return this.#T.hex.rgb(hex);
            },
            hsl: (keyword) => {
               let hex = this.#T.keyword.hex(keyword);
               return this.#T.hex.hsl(hex);
            },
            hsv: (keyword) => {
               let hex = this.#T.keyword.hex(keyword);
               return this.#T.hex.hsv(hex);
            },
            cmyk: (keyword) => {
               let hex = this.#T.keyword.hex(keyword);
               return this.#T.hex.cmyk(hex);
            },
         },
         hex: {
            keyword: (hex) => {
               let rgb = this.#T.hex.rgb(hex);
               return this.#T.rgb.keyword(rgb);
            },
            hex: (hex) => {
               let channels = this.#C.hex(hex);
               if (!channels) return undefined;
               let { R, G, B, A } = channels;
               return A === 'FF' ? '#' + R + G + B : '#' + R + G + B + A;
            },
            rgb: (hex) => {
               let channels = this.#C.hex(hex);
               if (!channels) return undefined;
               let { R, G, B, A } = channels;
               R = parseInt(R, 16);
               G = parseInt(G, 16);
               B = parseInt(B, 16);
               A = this.#toFixed(parseInt(A, 16) / 255);
               return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
            },
            hsl: (hex) => {
               let rgb = this.#T.hex.rgb(hex);
               return this.#T.rgb.hsl(rgb);
            },
            hsv: (hex) => {
               let rgb = this.#T.hex.rgb(hex);
               return this.#T.rgb.hsv(rgb);
            },
            cmyk: (hex) => {
               let rgb = this.#T.hex.rgb(hex);
               return this.#T.rgb.cmyk(rgb);
            },
         },
         rgb: {
            keyword: (rgb) => {
               let channels = this.#C.rgb(rgb);
               if (!channels) return undefined;
               let { R, G, B } = channels;
               let closest = null;
               let min = Infinity;
               for (const [name, hex] of Object.entries(this.#COLORS)) {
                  const { R: r, G: g, B: b } = this.#C.rgb(this.#T.hex.rgb(hex));
                  const dist = (R - r) ** 2 + (G - g) ** 2 + (B - b) ** 2;
                  if (dist < min) {
                     min = dist;
                     closest = name;
                  }
               }
               return this.#splitPascalCase(closest);
            },
            hex: (rgb) => {
               let channels = this.#C.rgb(rgb);
               if (!channels) return undefined;
               let { R, G, B, A } = channels;
               R = this.#toString16(R);
               G = this.#toString16(G);
               B = this.#toString16(B);
               A = this.#toString16(A * 255);
               return A === 'FF' ? '#' + R + G + B : '#' + R + G + B + A;
            },
            rgb: (rgb) => {
               let channels = this.#C.rgb(rgb);
               if (!channels) return undefined;
               let { R, G, B, A } = channels;
               return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
            },
            hsl: (rgb) => {
               let channels = this.#C.rgb(rgb);
               if (!channels) return undefined;
               let { R, G, B, A } = channels;
               R /= 255;
               G /= 255;
               B /= 255;
               let max = Math.max(R, G, B);
               let min = Math.min(R, G, B);
               let H, S, L;
               const delta = max - min;
               if (max === min) {
                  H = 0;
               } else if (R === max) {
                  H = (G - B) / delta;
               } else if (G === max) {
                  H = 2 + (B - R) / delta;
               } else if (B === max) {
                  H = 4 + (R - G) / delta;
               }
               L = (min + max) / 2;
               if (max === min) {
                  S = 0;
               } else if (L <= 0.5) {
                  S = delta / (max + min);
               } else {
                  S = delta / (2 - max - min);
               }
               H = Math.round(Math.min(H * 60, 360));
               H = (H < 0) ? H += 360 : H;
               S = Math.round(S * 100);
               L = Math.round(L * 100);
               return A === 1 ? `hsl(${H} ${S}% ${L}%)` : `hsl(${H} ${S}% ${L}% / ${A})`;
            },
            hsv: (rgb) => {
               let channels = this.#C.rgb(rgb);
               if (!channels) return undefined;
               let { R, G, B, A } = channels;
               R /= 255;
               G /= 255;
               B /= 255;

               let max = Math.max(R, G, B);
               let min = Math.min(R, G, B);
               let delta = max - min;

               let H = 0;
               let S = 0;
               let V = max;

               if (delta !== 0) {
                  if (max === R) {
                     H = (G - B) / delta;
                  } else if (max === G) {
                     H = 2 + (B - R) / delta;
                  } else {
                     H = 4 + (R - G) / delta;
                  }
                  H = Math.round((H * 60 + 360) % 360);
                  S = Math.round((delta / max) * 100);
               }

               V = Math.round(V * 100);

               return A === 1 ? `hsv(${H} ${S}% ${V}%)` : `hsv(${H} ${S}% ${V}% / ${A})`;
            },
            cmyk: (rgb) => {
               let channels = this.#C.rgb(rgb);
               if (!channels) return undefined;
               let { R, G, B } = channels;
               R /= 255;
               G /= 255;
               B /= 255;

               let K = Math.min(1 - R, 1 - G, 1 - B);
               let C = (1 - R - K) / (1 - K) || 0;
               let M = (1 - G - K) / (1 - K) || 0;
               let Y = (1 - B - K) / (1 - K) || 0;

               C = Math.round(C * 100);
               M = Math.round(M * 100);
               Y = Math.round(Y * 100);
               K = Math.round(K * 100);

               return `cmyk(${C}% ${M}% ${Y}% ${K}%)`;
            }
         },
         hsl: {
            keyword: (hsl) => {
               let rgb = this.#T.hsl.rgb(hsl);
               return this.#T.rgb.keyword(rgb);
            },
            hex: (hsl) => {
               let rgb = this.#T.hsl.rgb(hsl);
               return this.#T.rgb.hex(rgb);
            },
            rgb: (hsl) => {
               let channels = this.#C.hsl(hsl);
               if (!channels) return undefined;
               let { H, S, L, A } = channels;
               // hsl TO hex
               H = H / 360;
               S = S / 100;
               L = L / 100;
               let R, G, B;
               let C = (1 - Math.abs(2 * L - 1)) * S;
               let X = C * (1 - Math.abs((H * 6) % 2 - 1));
               let M = L - C / 2;
               switch (true) {
                  case (H >= 0 && H < 1 / 6):
                     R = C;
                     G = X;
                     B = 0;
                     break;
                  case (H >= 1 / 6 && H < 2 / 6):
                     R = X;
                     G = C;
                     B = 0;
                     break;
                  case (H >= 2 / 6 && H < 3 / 6):
                     R = 0;
                     G = C;
                     B = X;
                     break;
                  case (H >= 3 / 6 && H < 4 / 6):
                     R = 0;
                     G = X;
                     B = C;
                     break;
                  case (H >= 4 / 6 && H < 5 / 6):
                     R = X;
                     G = 0;
                     B = C;
                     break;
                  default:
                     R = C;
                     G = 0;
                     B = X;
                     break;
               }
               R = Math.round((R + M) * 255);
               G = Math.round((G + M) * 255);
               B = Math.round((B + M) * 255);

               return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
            },
            hsl: (hsl) => {
               let channels = this.#C.hsl(hsl);
               if (!channels) return undefined;
               let { H, S, L, A } = channels;
               return A === 1 ? `hsl(${H} ${S} ${L})` : `hsl(${H} ${S} ${L} / ${A})`;
            },
            hsv: (hsl) => {
               let rgb = this.#T.hsl.rgb(hsl);
               return this.#T.rgb.hsv(rgb);
            },
            cmyk: (hsl) => {
               let rgb = this.#T.hsl.rgb(hsl);
               return this.#T.rgb.cmyk(rgb);
            },
         },
         hsv: {
            keyword: (hsv) => {
               let rgb = this.#T.hsv.rgb(hsv);
               return this.#T.rgb.keyword(rgb);
            },
            hex: (hsv) => {
               let rgb = this.#T.hsv.rgb(hsv);
               return this.#T.rgb.hex(rgb);
            },
            rgb: (hsv) => {
               let channels = this.#C.hsv(hsv);
               if (!channels) return undefined;
               let { H, S, V, A } = channels;

               H /= 60;
               S /= 100;
               V /= 100;
               const hi = Math.floor(H) % 6;

               const f = H - Math.floor(H);
               const p = 255 * V * (1 - S);
               const q = 255 * V * (1 - (S * f));
               const t = 255 * V * (1 - (S * (1 - f)));
               V *= 255;

               let R, G, B;

               switch (hi) {
                  case 0:
                  [R, G, B] = [V, t, p];
                     break;
                  case 1:
                  [R, G, B] = [q, V, p];
                     break;
                  case 2:
                  [R, G, B] = [p, V, t];
                     break;
                  case 3:
                  [R, G, B] = [p, q, V];
                     break;
                  case 4:
                  [R, G, B] = [t, p, V];
                     break;
                  case 5:
                  [R, G, B] = [V, p, q];
                     break;
               }

               return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
            },
            hsl: (hsv) => {
               let rgb = this.#T.hsv.rgb(hsv);
               return this.#T.rgb.hsl(rgb);
            },
            hsv: (hsv) => {
               let channels = this.#C.hsv(hsv);
               if (!channels) return undefined;
               let { H, S, V, A } = channels;
               return A === 1 ? `hsv(${H} ${S}% ${V}%)` : `hsv(${H} ${S}% ${V}% / ${A})`;
            },
            cmyk: (hsv) => {
               let rgb = this.#T.hsv.rgb(hsv);
               return this.#T.rgb.cmyk(rgb);
            },
         },
         cmyk: {
            keyword: (cmyk) => {
               let rgb = this.#T.cmyk.rgb(cmyk);
               return this.#T.rgb.keyword(rgb);
            },
            hex: (cmyk) => {
               let rgb = this.#T.cmyk.rgb(cmyk);
               return this.#T.rgb.hex(rgb);
            },
            rgb: (cmyk) => {
               let channels = this.#C.cmyk(cmyk);
               if (!channels) return undefined;
               let { C, M, Y, K, A } = channels;

               C /= 100;
               M /= 100;
               Y /= 100;
               K /= 100;

               let R = 1 - Math.min(1, C * (1 - K) + K);
               let G = 1 - Math.min(1, M * (1 - K) + K);
               let B = 1 - Math.min(1, Y * (1 - K) + K);

               R = Math.round(R * 255);
               G = Math.round(G * 255);
               B = Math.round(B * 255);

               return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
            },
            hsl: (cmyk) => {
               let rgb = this.#T.cmyk.rgb(cmyk);
               return this.#T.rgb.hsl(rgb);
            },
            hsv: (cmyk) => {
               let rgb = this.#T.cmyk.rgb(cmyk);
               return this.#T.rgb.hsv(rgb);
            },
            cmyk: (cmyk) => {
               let channels = this.#C.cmyk(cmyk);
               if (!channels) return undefined;
               let { C, M, Y, K } = channels;
               return `cmyk(${C}% ${M}% ${Y}% ${K}%)`;
            },
         },
         to: {
            keyword: (input) => {
               let detect = this.detect(input);
               return (!detect) ? undefined : this.#T[detect].keyword(input);
            },
            hex: (input) => {
               let detect = this.detect(input);
               return (!detect) ? undefined : this.#T[detect].hex(input);
            },
            rgb: (input) => {
               let detect = this.detect(input);
               return (!detect) ? undefined : this.#T[detect].rgb(input);
            },
            hsl: (input) => {
               let detect = this.detect(input);
               return (!detect) ? undefined : this.#T[detect].hsl(input);
            },
            hsv: (input) => {
               let detect = this.detect(input);
               return (!detect) ? undefined : this.#T[detect].hsv(input);
            },
            cmyk: (input) => {
               let detect = this.detect(input);
               return (!detect) ? undefined : this.#T[detect].cmyk(input);
            },
         }
      }
      #toString16(input) {
         let hex = input.toString(16).toUpperCase().split('.')[0];
         return hex.length == 1 ? '0' + hex : hex;
      }
      #toFixed(input1, input2 = 2) {
         return parseFloat(parseFloat(input1).toFixed(input2));
      }
      #splitPascalCase(input) {
         return input.split(/(?=[A-Z])/).join(" ");
      }
      #trimCase(input) {
         return input.replace(/\s+/g, '').toLowerCase();
      }
      #channelsToString(type) {
         switch (type) {
            case 'hex': {
               let { 1: r, 2: g, 3: b, 4: a = '' } = arguments;
               if ([r, g, b].some(v => v === undefined)) return undefined;
               r = r.length == 1 ? r + r : r;
               g = g.length == 1 ? g + g : g;
               b = b.length == 1 ? b + b : b;
               a = a.length == 1 ? a + a : a;
               return this.normalize('#' + r + g + b + a);
            }
            case 'rgb': {
               let { 1: r, 2: g, 3: b, 4: a = '1' } = arguments;
               if ([r, g, b, a].some(v => v === undefined)) return undefined;
               return this.normalize(`rgb(${r} ${g} ${b} / ${a})`);
            }
            case 'hsl': {
               let { 1: h, 2: s, 3: l, 4: a = '1' } = arguments;
               if ([h, s, l, a].some(v => v === undefined)) return undefined;
               return this.normalize(`hsl(${h} ${s}% ${l}% / ${a})`);
            }
            case 'hsv': {
               let { 1: h, 2: s, 3: v, 4: a = '1' } = arguments;
               if ([h, s, v, a].some(v => v === undefined)) return undefined;
               return this.normalize(`hsv(${h} ${s}% ${v}% / ${a})`);
            }
            case 'cmyk': {
               let { 1: c, 2: m, 3: y, 4: k = '1' } = arguments;
               if ([c, m, y, k].some(v => v === undefined)) return undefined;
               return this.normalize(`cmyk(${c}% ${m}% ${y}% ${k}%)`);
            }
            default: {
               return undefined;
            }
         }
      }
      #channelsTransforms() {
         const types = ['hex', 'rgb', 'hsl', 'hsv', 'cmyk'];
         const result = {};
         for (const from of types) {
            result[from] = {};
            for (const to of types.concat('keyword')) {
               if (from === to) continue;
               result[from][to] = (...args) => {
                  const input = this.#channelsToString(from, ...args);
                  return (!input) ? undefined : this.#T[from][to](input);
               };
            }
         }
         return result;
      }
      toHex(str) {
         return this.#T.to.hex(str);
      }
      toHexChannels(str) {
         return this.getChannels(this.#T.to.hex(str));
      }
      toRgb(str) {
         return this.#T.to.rgb(str);
      }
      toRgbChannels(str) {
         return this.getChannels(this.#T.to.rgb(str));
      }
      toHsl(str) {
         return this.#T.to.hsl(str);
      }
      toHslChannels(str) {
         return this.getChannels(this.#T.to.hsl(str));
      }
      toHsv(str) {
         return this.getChannels(this.#T.to.hsv(str));
      }
      toHsvChannels(str) {
         return this.getChannels(this.#T.to.hsv(str));
      }
      toCmyk(str) {
         return this.getChannels(this.#T.to.cmyk(str));
      }
      toCmykChannels(str) {
         return this.getChannels(this.#T.to.cmyk(str));
      }
      toAllFormat(str) {
         let f = (type) => this.#T.to[type](str);
         return {
            keyword: f('keyword'),
            hex: f('hex'),
            rgb: f('rgb'),
            hsl: f('hsl'),
            hsv: f('hsv'),
            cmyk: f('cmyk'),
         }
      }
      toAllFormatChannels(str) {
         let f = (type) => this.getChannels(this.#T.to[type](str));
         return {
            keyword: f('keyword'),
            hex: f('hex'),
            rgb: f('rgb'),
            hsl: f('hsl'),
            hsv: f('hsv'),
            cmyk: f('cmyk'),
         }
      }
      normalize(str) {
         let detect = this.detect(str);
         return (!detect) ? undefined : this.#N[detect](str);
      }
      getChannels(str) {
         let detect = this.detect(str);
         return (!detect || detect === 'keyword') ? undefined : this.#C[detect](str);
      }
      isColor(str) {
         let detect = this.detect(str);
         return !detect ? false : this.#N[detect](str);
      }
      detect(input) {
         input = String(input).trim().toLowerCase();
         const colors = Array.from(this.#COLORS_MAP.keys());

         if (colors.includes(this.#trimCase(input))) return "keyword";
         if (this.#R.hex.test(input)) return "hex";
         if (this.#R.rgb.test(input)) return "rgb";
         if (this.#R.hsl.test(input)) return "hsl";
         if (this.#R.hsv.test(input)) return "hsv";
         if (this.#R.cmyk.test(input)) return "cmyk";

         return undefined;
      }
      getAllChannels(str) {
         return {
            rgb: this.getChannels(this.toRgb(str)),
            hsl: this.getChannels(this.toHsl(str)),
            hsv: this.getChannels(this.toHsv(str)),
            cmyk: this.getChannels(this.toCmyk(str)),
         };
      }
      randomColor() {
         const r = Math.floor(Math.random() * 256);
         const g = Math.floor(Math.random() * 256);
         const b = Math.floor(Math.random() * 256);
         return this.channels.rgb.hex(r, g, b);
      }
      getAlpha(str) {
         return this.getChannels(this.toRgb(str)).A;
      }
      getHue(str) {
         return this.getChannels(this.toHsl(str)).H;
      }
      getSaturation(str) {
         return this.getChannels(this.toHsl(str)).S;
      }
      getLightness(str) {
         return this.getChannels(this.toHsl(str)).L;
      }
      getValue(str) {
         return this.getChannels(this.toHsv(str)).V;
      }
      getRed(str) {
         return this.getChannels(this.toRgb(str)).R;
      }
      getGreen(str) {
         return this.getChannels(this.toRgb(str)).G;
      }
      getBlue(str) {
         return this.getChannels(this.toRgb(str)).B;
      }
      getCyan(str) {
         return this.getChannels(this.toCmyk(str)).C;
      }
      getMagenta(str) {
         return this.getChannels(this.toCmyk(str)).M;
      }
      getYellow(str) {
         return this.getChannels(this.toCmyk(str)).Y;
      }
      getKey(str) {
         return this.getChannels(this.toCmyk(str)).K;
      }
      getNearestColor(str) {
         return this.#T.to.keyword(str);
      }
      getContrast(color1, color2) {
         const L = (color) => {
            const rgb = this.getChannels(this.toRgb(color));
            if (!rgb) return 0;

            const channel = (c) => {
               const n = c / 255;
               return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
            };

            const R = channel(rgb.R);
            const G = channel(rgb.G);
            const B = channel(rgb.B);

            return 0.2126 * R + 0.7152 * G + 0.0722 * B;
         };
         const L1 = L(color2);
         const L2 = L(color1);
         const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
         return ratio.toFixed(2);
      }
      getContrastLevel(ratio) {
         ratio = parseFloat(ratio);
         if (ratio >= 7) return 'AAA';
         if (ratio >= 4.5) return 'AA';
         if (ratio >= 3) return 'A';
         return 'Fail';
      }
      getBestContrastColor(bgColor) {
         const white = '#FFFFFF';
         const black = '#000000';

         const contrastWithWhite = this.getContrast(bgColor, white);
         const contrastWithBlack = this.getContrast(bgColor, black);

         return contrastWithWhite >= contrastWithBlack ? white : black;
      }
      getHarmonies(str) {
         const channels = this.getChannels(this.toHsl(str));
         if (!channels) return undefined;

         const { H, S, L, A } = channels;
         const result = {};

         for (const [name, deltas] of Object.entries(this.#H)) {
            const arr = deltas.map(d => {
               const newHue = (H + d + 360) % 360;
               return this.channels.hsl.hex(newHue, S, L, A);
            });

            result[name] = arr;
         }

         return result;
      }
      getTints(color, ratio = 0.5) {
         const c = this.getChannels(this.toHsl(color));
         if (!c) return undefined;
         const { H, S, L, A } = c;
         const newL = L + (100 - L) * ratio;
         return this.channels.hsl.hex(H, S, newL, A);
      }
      getShades(color, ratio = 0.5) {
         const c = this.getChannels(this.toHsl(color));
         if (!c) return undefined;
         const { H, S, L, A } = c;
         const newL = L * (1 - ratio);
         return this.channels.hsl.hex(H, S, newL, A);
      }
      getTones(color, ratio = 0.5) {
         const c = this.getChannels(this.toHsl(color));
         if (!c) return undefined;
         const { H, S, L, A } = c;
         const newS = S * (1 - ratio);
         return this.channels.hsl.hex(H, newS, L, A);
      }
      mixColor(color1, color2, ratio = 0.5) {
         const a = this.getChannels(this.toRgb(color1));
         const b = this.getChannels(this.toRgb(color2));
         if (!a || !b) return undefined;

         const R = a.R + (b.R - a.R) * ratio;
         const G = a.G + (b.G - a.G) * ratio;
         const B = a.B + (b.B - a.B) * ratio;
         const A = a.A + (b.A - a.A) * ratio;

         return this.channels.rgb.hex(R, G, B, A);
      }
      get convert() {
         return this.#T;
      }
      get channels() {
         return this.#channelsTransforms();
      }
   }

   //-------------------------
   //    Private Variables 
   //-------------------------
   #E = new EventTarget();
   #CL = new this.#ColorLab();
   #PCS = window.matchMedia("(prefers-color-scheme:dark)");
   #C = {
      id: 'MUSHROOM',
      comment: 'Mushroom.js Output',
      clearConsole: false,
      sprout: true,
      color: 'Medium Violet Red',
      surfaceColor: 'primary',
      theme: 'auto',
      root: ':root',
      prefix: '',
      contrast: 50,
      colorHarmony: 'analogous',
      hasPalette: true,
      hasSubPalette: false,
      hasColorLoopPalette: true,
      hasSubColorLoopPalette: false,
      reverseSubPalette: false,
      fixedSubPalette: false,
      parts: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      customColors: {},
   };
   #O = {
      palette: {},
      subPalette: {},
      colorLoopPalette: {},
      subColorLoopPalette: {},
      allPalettes: {},
      code: '',
      styleElement: null,
      commentNode: null,
   };
   #V = {
      // basic 
      str: i => {
         return typeof i === 'string';
      },
      bol: i => {
         return typeof i === 'boolean';
      },
      num: i => {
         return typeof i === 'number'
      },
      obj: i => {
         return typeof i === 'object' && !Array.isArray(i) && i !== null
      },
      arr: i => {
         return typeof i === 'object' && Array.isArray(i) && i !== null
      },
      // Configs
      id: i => {
         return this.#V.str(i);
      },
      comment: i => {
         return this.#V.str(i);
      },
      color: i => {
         return this.#V.str(i) && this.#CL.isColor(i);
      },
      surfaceColor: i => {
         return this.#V.str(i) && (this.#CL.isColor(i) || /^(primary|secondary|tertiary|quaternary)$/i.test(i));
      },
      theme: i => {
         return this.#V.str(i) && /^(light|dark|auto)$/.test(i);
      },
      colorHarmony: i => {
         return this.#V.str(i) && /^(analogous|complementary|tetradic|compound|split-complementary|monochromatic|triadic|square)$/.test(i);
      },
      contrast: i => {
         return (i === 'auto') || (this.#V.num(i) && i >= 0 && i <= 100);
      },
      parts: i => {
         return this.#V.arr(i) && i.every(x => this.#V.num(x) && x >= 0 && x <= 100);
      },
      prefix: i => {
         return this.#V.str(i) && /^[a-z]*$/i.test(i);
      },
      customColors: i => {
         return this.#V.obj(i) && (Object.values(i).every(x => this.#V.color(x)) && Object.keys(i).every(x => /^[a-z][a-z0-9]*$/i.test(x)));
      },
      sprout: i => {
         return this.#V.bol(i);
      },
      hasPalette: i => {
         return this.#V.bol(i);
      },
      hasSubPalette: i => {
         return this.#V.bol(i);
      },
      reverseSubPalette: i => {
         return this.#V.bol(i);
      },
      fixedSubPalette: i => {
         return this.#V.bol(i);
      },
      hasColorLoopPalette: i => {
         return this.#V.bol(i);
      },
      hasSubColorLoopPalette: i => {
         return this.#V.bol(i);
      },
      clearConsole: i => {
         return this.#V.bol(i);
      },
   };
   #W = {
      'id': 'Invalid id "$1"!\nMust be an string',
      'comment': 'Invalid comment "$1"!\nMust be an string',
      'color': 'Invalid color "$1"!\nAccepted formats: 148 standard colors, Hex, RGB, HSL, CMYK, or HSV',
      'surfaceColor': 'Invalid surfaceColor "$1".\nAccepted formats: 148 standard colors, Hex, RGB, HSL, CMYK, or HSV',
      'theme': 'Invalid theme "$1"!\nMust be a string value exactly matching: "light", "dark", or "auto"',
      'colorHarmony': 'Invalid colorHarmony "$1".\nMust be a string exactly matching: "analogous", "complementary", "triadic", "tetradic", "square", "compound", "split-complementary", or "monochromatic"',
      'contrast': 'Invalid contrast "$1"!\nMust be: number (0-100) or string "auto"',
      'parts': 'Invalid parts "$1"!\nMust be an array of numbers (0-100)',
      'prefix': 'Invalid prefix "$1"!\nMust be English letters only (a-zA-Z)',
      'customColors': 'Invalid customColor!\n' +
         '• Object keys must:\n' +
         '  - Start with English letter\n' +
         '  - Contain only English letters and numbers\n' +
         '• Color values must use valid formats:\n' +
         '  - 148 standard colors\n' +
         '  - Hex, RGB, HSL, CMYK, or HSV',
      'sprout': 'Invalid sprout "$1"!\nMust be boolean: true or false',
      'hasPalette': 'Invalid hasPalette "$1"!\nMust be boolean: true or false',
      'hasSubPalette': 'Invalid hasSubPalette "$1"!\nMust be boolean: true or false',
      'reverseSubPalette': 'Invalid reverseSubPalette "$1"!\nMust be boolean: true or false',
      'fixedSubPalette': 'Invalid fixedSubPalette "$1"!\nMust be boolean: true or false',
      'hasColorLoopPalette': 'Invalid hasColorLoopPalette "$1"!\nMust be boolean: true or false',
      'hasSubColorLoopPalette': 'Invalid hasSubColorLoopPalette "$1"!\nMust be boolean: true or false',
      'clearConsole': 'Invalid clearConsole "$1"!\nMust be boolean: true or false',
      'UnauthorizedCustomColor': 'Unauthorized custom color name "$1".\n' +
         'Reserved system color names: ' +
         'primary, secondary, tertiary, quaternary, error\n' +
         'Please choose a different name',
   };

   //-------------------------
   //       Constructor
   //-------------------------
   constructor(configs = {}) {
      this.version = "5.3.0";
      this.#setupConfigs(configs);
      this.#setupThemeChange();
   }

   //-------------------------
   //     private Methods 
   //-------------------------
   #warn(name, warn) {
      let messages = this.#W[name].replace('$1', warn);
      queueMicrotask(() => this.#dispatch('warn', { name, warn, messages }));
      console.warn('[Mushroom.js]', this.#W[name].replace('$1', warn));
   }
   #dispatch(event, detail = {}) {
      this.#E.dispatchEvent(new CustomEvent(event, { detail }));
   }
   #setConfig(key, val) {
      if (val === undefined) return;
      let V = this.#V[key](val);
      if (V) {
         this.#C[key] = val;
         this.#grow();
      }
      else {
         this.#warn(key, val);
      }
   }
   #setupConfigs(configs) {
      let C = this.#C;
      for (let i in C) {
         if (configs[i] !== undefined) {
            let V = this.#V[i](configs[i]);
            if (V) this.#C[i] = configs[i];
            else this.#warn(i, configs[i]);
         }
      }
      this.#grow();
   }
   #setupThemeChange() {
      if (this.#C.theme === 'auto') {
         this.#PCS.onchange = () => this.#grow();
      }
   }
   #accentHue(colorHarmony) {
      switch (colorHarmony) {
         case 'analogous':
            return [0, 30, -30, 30];
         case 'complementary':
            return [0, 180, 0, 180];
         case 'tetradic':
            return [0, 60, 180, 240];
         case 'compound':
            return [0, 150, -150, 150];
         case 'split-complementary':
            return [0, 30, 180, 210];
         case 'monochromatic':
            return [0, 0, 0, 0];
         case 'triadic':
            return [0, 120, -120, 120];
         case 'square':
            return [0, 90, -90, 180];
         default:
            return [0, 30, -30, 30];
      }
   }
   #colorLoop() {
      let makeToneRatios = (target = 0, count = 12) => {
         const min = 0.2;
         const max = 1;
         const amplitude = (max - min) / 2;
         const offset = min + amplitude;
         target = Math.round(target);

         const ratios = [];
         for (let i = 0; i < count; i++) {
            const angle = (i / count) * 2 * Math.PI;
            const value = offset + amplitude * Math.cos(angle);
            ratios.push(+value.toFixed(3));
         }

         const result = [];
         for (let i = 0; i < count; i++) {
            const index = (target + i) % count;
            result.unshift(ratios[index]);
         }

         return result;
      };
      let C = this.#C;
      let N = ['red', 'orange', 'yellow', 'lime', 'green', 'spring-green', 'sky-blue', 'royal-blue', 'blue', 'indigo', 'purple', 'pink'];
      let { H, S } = this.#CL.toHslChannels(C.color);
      let target = H / N.length;
      let count = N.length;
      let steps = 360 / N.length;
      let ratio = makeToneRatios(target, count);
      let result = {}


      for (let i in ratio) {
         result[N[i]] = {
            H: i * steps,
            S: ratio[i] * S,
         }
      }

      return result;
   }
   #palette() {
      let V = this.#V;
      let C = this.#C;
      let { H, S, L } = this.#CL.toHslChannels(C.color);
      let theme = this.currentTheme();
      let AN = ['primary', 'secondary', 'tertiary', 'quaternary'];
      let AH = this.#accentHue(C.colorHarmony);
      let HA = AH.map(i => i + H > 360 ? i + H - 360 : i + H)
      let sH, sS, sL;
      let result = {};

      if (C.contrast !== 'auto') L = C.contrast;
      if (V.color(C.surfaceColor)) {
         sH = this.#CL.getHue(C.surfaceColor);
         sS = this.#CL.getSaturation(C.surfaceColor);
         sL = this.#CL.getLightness(C.surfaceColor);
         if (C.contrast !== 'auto') sL = C.contrast;
      }
      else {
         sH = HA[AN.indexOf(C.surfaceColor)];
         sS = S;
         sL = L;
      }

      let D = {
         N: {
            accent: ['primary', 'secondary', 'tertiary', 'quaternary'],
            error: 'error',
            surface: 'surface',
            background: 'background',
            outline: 'outline',
            custom: []
         },
         H: {
            accent: HA,
            error: 0,
            surface: sH,
            background: sH,
            outline: sH,
            custom: []
         },
         S: {
            accent: S,
            error: 100,
            surface: sS / 3,
            background: sS / 3,
            outline: [sS / 3, sS / 2],
            custom: [],
         },
         L: {
            light: {
               accent: [
                  [35, 100],
                  [80 + L / 10, 20 - L / 10]
               ],
               accentLD: [45, 25],
               surface: [87 + sL / 10, 85 + sL / 10, 83 + sL / 10, 80 + sL / 10, 78 + sL / 10],
               background: [90 + sL / 10, 20 - sL / 10],
               outline: [60, 80],
               inverse: [70, 10],
               inverseSurface: [15 - sL / 10, 65 + sL / 10],
            },
            dark: {
               accent: [
                     [70, 10],
                     [20 - L / 10, 70 + L / 10]
                  ],
               accentLD: [80, 60],
               surface: [15 - sL / 10, 17 - sL / 10, 19 - sL / 10, 21 - sL / 10, 30 - sL / 10],
               background: [10 - sL / 10, 70 + sL / 10],
               outline: [40, 20],
               inverse: [35, 100],
               inverseSurface: [87 + sL / 10, 30 - sL / 10]
            },
         },
         F: {
            a: ['', 'on-'],
            b: ['', '-container'],
            c: ['', '-container-low', '-container', '-container-high', '-variant'],
            d: ['', '-variant'],
            e: 'inverse-',
            f: ['light-', 'dark-'],
         },
      }

      for (let i in D.N.accent) {
         for (let j in D.F.b) {
            for (let k in D.F.a) {
               result[D.F.a[k] + D.N.accent[i] + D.F.b[j]] = this.#CL.channels.hsl.hex(D.H.accent[i], D.S.accent, D.L[theme].accent[j][k]);
            }
         }
         for (let j in D.F.f) {
            result[D.F.f[j] + D.N.accent[i]] = this.#CL.channels.hsl.hex(D.H.accent[i], D.S.accent, D.L[theme].accentLD[j]);
         }
      }
      for (let i in D.F.b) {
         for (let j in D.F.a) {
            result[D.F.a[j] + D.N.error + D.F.b[i]] = this.#CL.channels.hsl.hex(D.H.error, D.S.error, D.L[theme].accent[i][j]);
         }
      }
      for (let j in D.F.f) {
         result[D.F.f[j] + D.N.error] = this.#CL.channels.hsl.hex(D.H.error, D.S.error, D.L[theme].accentLD[j]);
      }
      for (let i in D.N.accent) {
         for (let j in D.F.a) {
            result[D.F.a[j] + D.F.e + D.N.accent[i]] = this.#CL.channels.hsl.hex(D.H.accent[i], D.S.accent, D.L[theme].inverse[j]);
         }
      }
      for (let i in D.F.a) {
         result[D.F.a[i] + D.F.e + D.N.error] = this.#CL.channels.hsl.hex(D.H.error, D.S.error, D.L[theme].inverse[i]);
      }
      for (let i in D.F.a) {
         result[D.F.a[i] + D.N.background] = this.#CL.channels.hsl.hex(D.H.background, D.S.background, D.L[theme].background[i]);
      }
      for (let i in D.F.c) {
         result[D.N.surface + D.F.c[i]] = this.#CL.channels.hsl.hex(D.H.surface, D.S.surface, D.L[theme].surface[i]);
      }
      for (let j in D.F.a) {
         result[D.F.a[j] + D.F.e + D.N.surface] = this.#CL.channels.hsl.hex(D.H.surface, D.S.surface, D.L[theme].inverseSurface[j]);
      }
      for (let i in D.F.d) {
         result[D.N.outline + D.F.d[i]] = this.#CL.channels.hsl.hex(D.H.outline, D.S.outline[i], D.L[theme].outline[i]);
      }
      // custom color
      for (let i in C.customColors) {
         let limit = Object.keys(result);
         let allowed = ['primary', 'secondary', 'tertiary', 'quaternary', 'error'];
         if (limit.includes(i) == false || allowed.includes(i)) {
            D.N.custom.push(i);
            D.H.custom.push(this.#CL.getHue(C.customColors[i]));
            D.S.custom.push(this.#CL.getSaturation(C.customColors[i]));
         } else {
            this.#warn('UnauthorizedCustomColor', `${i}: ${C.customColors[i]}`);
         }
      }
      for (let i in D.N.custom) {
         for (let j in D.F.b) {
            for (let k in D.F.a) {
               result[D.F.a[k] + D.N.custom[i] + D.F.b[j]] = this.#CL.channels.hsl.hex(D.H.custom[i], D.S.custom[i], D.L[theme].accent[j][k]);
            }
         }
         for (let j in D.F.f) {
            result[D.F.f[j] + D.N.custom[i]] = this.#CL.channels.hsl.hex(D.H.custom[i], D.S.custom, D.L[theme].accentLD[j]);
         }
      }
      for (let i in D.N.custom) {
         for (let j in D.F.a) {
            result[D.F.a[j] + D.F.e + D.N.custom[i]] = this.#CL.channels.hsl.hex(D.H.custom[i], D.S.custom[i], D.L[theme].inverse[j]);
         }
      }
      // result
      return result;
   }
   #subPalette() {
      let V = this.#V;
      let C = this.#C;
      let { H, S } = this.#CL.toHslChannels(C.color);
      let theme = this.currentTheme();
      let AN = ['primary', 'secondary', 'tertiary', 'quaternary'];
      let AH = this.#accentHue(C.colorHarmony);
      let HA = AH.map(i => i + H > 360 ? i + H - 360 : i + H)
      let sH, sS;
      let result = {};

      if (V.color(C.surfaceColor)) {
         sH = this.#CL.getHue(C.surfaceColor);
         sS = this.#CL.getSaturation(C.surfaceColor);
      }
      else {
         sH = HA[AN.indexOf(C.surfaceColor)];
         sS = S;
      }

      let D = {
         N: {
            accent: AN,
            error: 'error',
            custom: [],
            neutral: ['neutral', 'neutral-variant'],
         },
         H: {
            accent: HA,
            error: 0,
            custom: [],
            neutral: sH
         },
         S: {
            accent: S,
            error: 100,
            custom: [],
            neutral: [sS / 4, sS / 2]
         },
      };

      for (let i in C.customColors) {
         D.N.custom.push(i);
         D.H.custom.push(this.#CL.getHue(C.customColors[i]));
         D.S.custom.push(this.#CL.getSaturation(C.customColors[i]));
      }

      if (C.fixedSubPalette) {
         for (let i in D.N.accent) {
            for (let j in C.parts) {
               result[D.N.accent[i] + '-' + C.parts[j]] = this.#CL.channels.hsl.hex(
                  D.H.accent[i],
                  D.S.accent,
                  C.parts[j]
               );
            }
         }
         for (let i in C.parts) {
            result[D.N.error + '-' + C.parts[i]] = this.#CL.channels.hsl.hex(
               D.H.error,
               D.S.error,
               C.parts[i]
            );
         }
         for (let i in D.N.custom) {
            for (let j in C.parts) {
               result[D.N.custom[i] + '-' + C.parts[j]] = this.#CL.channels.hsl.hex(
                  D.H.custom[i],
                  D.S.custom[i],
                  C.parts[j]
               );
            }
         }
         for (let i in D.N.neutral) {
            for (let j in C.parts) {
               result[D.N.neutral[i] + '-' + C.parts[j]] = this.#CL.channels.hsl.hex(
                  D.H.neutral,
                  D.S.neutral[i],
                  C.parts[j]
               );
            }
         }
      }
      else if (!C.reverseSubPalette || !theme) {
         for (let i in D.N.accent) {
            for (let j in C.parts) {
               result[D.N.accent[i] + '-' + C.parts[j]] = this.#CL.channels.hsl.hex(
                  D.H.accent[i],
                  D.S.accent,
                  C.parts[j]
               );
            }
         }
         for (let i in C.parts) {
            result[D.N.error + '-' + C.parts[i]] = this.#CL.channels.hsl.hex(
               D.H.error,
               D.S.error,
               C.parts[i]
            );
         }
         for (let i in D.N.custom) {
            for (let j in C.parts) {
               result[D.N.custom[i] + '-' + C.parts[j]] = this.#CL.channels.hsl.hex(
                  D.H.custom[i],
                  D.S.custom[i],
                  C.parts[j]
               );
            }
         }
         for (let i in D.N.neutral) {
            for (let j in C.parts) {
               result[D.N.neutral[i] + '-' + C.parts[j]] = this.#CL.channels.hsl.hex(
                  D.H.neutral,
                  D.S.neutral[i],
                  C.parts[j]
               );
            }
         }
      }
      else {
         for (let i in D.N.accent) {
            for (let j in C.parts) {
               result[D.N.accent[i] + '-' + C.parts[j]] = this.#CL.channels.hsl.hex(
                  D.H.accent[i],
                  D.S.accent,
                  C.parts[C.parts.length - 1] - C.parts[j]
               );
            }
         }
         for (let i in C.parts) {
            result[D.N.error + '-' + C.parts[i]] = this.#CL.channels.hsl.hex(
               D.H.error,
               D.S.error,
               C.parts[C.parts.length - 1] - C.parts[i]
            );
         }
         for (let i in D.N.custom) {
            for (let j in C.parts) {
               result[D.N.custom[i] + '-' + C.parts[j]] = this.#CL.channels.hsl.hex(
                  D.H.custom[i],
                  D.S.custom[i],
                  C.parts[C.parts.length - 1] - C.parts[j]
               );
            }
         }
         for (let i in D.N.neutral) {
            for (let j in C.parts) {
               result[D.N.neutral[i] + '-' + C.parts[j]] = this.#CL.channels.hsl.hex(
                  D.H.neutral,
                  D.S.neutral[i],
                  C.parts[C.parts.length - 1] - C.parts[j]
               );
            }
         }
      }

      return result;
   }
   #CLPalette() {
      let C = this.#C;
      let L = (C.contrast === 'auto') ? this.#CL.getLightness(C.color) : C.contrast;
      let theme = this.currentTheme();
      let result = {};

      let l = {
         light: {
            accent: [
                  [35, 100],
                  [80 + L / 10, 20 - L / 10]
               ],
            accentLD: [45, 25],
         },
         dark: {
            accent: [
                     [70, 10],
                     [20 - L / 10, 70 + L / 10]
                  ],
            accentLD: [80, 60],
         },
      };

      let a = ['', 'on-'];
      let b = ['', '-container'];
      let c = ['light-', 'dark-'];

      let loop = this.#colorLoop();
      for (let i in loop) {
         for (let j in b) {
            for (let k in a) {
               result[a[k] + i + b[j]] = this.#CL.channels.hsl.hex(loop[i].H, loop[i].S, l[theme].accent[j][k]);
            }
         }
         for (let j in c) {
            result[c[j] + i] = this.#CL.channels.hsl.hex(loop[i].H, loop[i].S, l[theme].accentLD[j]);
         }
      }


      return result;
   }
   #CLSubPalette() {
      let C = this.#C;
      let result = {};

      if (C.fixedSubPalette) {
         let loop = this.#colorLoop();
         for (let i in loop) {
            for (let j in C.parts) {
               result[i + '-' + C.parts[j]] = this.#CL.channels.hsl.hex(
                  loop[i].H,
                  loop[i].S,
                  C.parts[j]
               );
            }
         }
      }
      else if (!C.reverseSubPalette || !theme) {
         let loop = this.#colorLoop();
         for (let i in loop) {
            for (let j in C.parts) {
               result[i + '-' + C.parts[j]] = this.#CL.channels.hsl.hex(
                  loop[i].H,
                  loop[i].S,
                  C.parts[j]
               );
            }
         }
      }
      else {
         let loop = this.#colorLoop();
         for (let i in loop) {
            for (let j in C.parts) {
               result[i + '-' + C.parts[j]] = this.#CL.channels.hsl.hex(
                  loop[i].H,
                  loop[i].S,
                  C.parts[C.parts.length - 1] - C.parts[j]
               );
            }
         }
      }

      return result;
   }
   #toCss(obj) {
      let C = this.#C;
      let P = (C.prefix === '') ? '' : C.prefix + '-';
      let code = `\n${C.root} {\n`;
      for (let [K, V] of Object.entries(obj)) {
         code += `   --${P}${K}: ${V};\n`;
      }
      code += '}';
      return code;
   }
   #sprout() {
      let { id, comment } = this.#C;
      let head = document.head;

      if (this.#O.styleElement) this.#O.styleElement.remove();
      if (this.#O.commentNode) this.#O.commentNode.remove();

      this.#O.commentNode = document.createComment(` ${comment} `);
      head.appendChild(this.#O.commentNode);

      this.#O.styleElement = document.createElement('style');
      this.#O.styleElement.id = id;
      this.#O.styleElement.textContent = this.#O.code;
      head.appendChild(this.#O.styleElement);
   }
   #grow() {
      let C = this.#C;

      // generate 
      if (C.hasPalette) this.#O.palette = this.#palette();
      if (C.hasSubPalette) this.#O.subPalette = this.#subPalette();
      if (C.hasColorLoopPalette) this.#O.colorLoopPalette = this.#CLPalette();
      if (C.hasSubColorLoopPalette) this.#O.subColorLoopPalette = this.#CLSubPalette();

      this.#O.allPalettes = Object.assign({},
         this.#O.subColorLoopPalette,
         this.#O.colorLoopPalette,
         this.#O.subPalette,
         this.#O.palette
      );

      this.#O.code = this.#toCss(this.#O.allPalettes);

      // sprout
      if (C.sprout) this.#sprout(this.#O.code);

      // event
      queueMicrotask(() => { this.#dispatch('grow', this.#O) })
   }

   //-------------------------
   //         Methods 
   //-------------------------
   /* configs */
   setColor(val) {
      this.#setConfig('color', val);
      return this;
   }
   setSurfaceColor(val) {
      this.#setConfig('surfaceColor', val);
      return this;
   }
   setTheme(val) {
      this.#setConfig('theme', val);
      return this;
   }
   setColorHarmony(val) {
      this.#setConfig('colorHarmony', val);
      return this;
   }
   setContrast(val) {
      this.#setConfig('contrast', val);
      return this;
   }
   setParts(val) {
      this.#setConfig('parts', val);
      return this;
   }
   setPrefix(val) {
      this.#setConfig('prefix', val);
      return this;
   }
   setCustomColors(val) {
      this.#setConfig('customColors', val);
      return this;
   }
   setSprout(val) {
      this.#setConfig('sprout', val);
      return this;
   }
   setPalette(val) {
      this.#setConfig('hasPalette', val);
      return this;
   }
   setSubPalette(val) {
      this.#setConfig('hasSubPalette', val);
      return this;
   }
   setReverseSubPalette(val) {
      this.#setConfig('reverseSubPalette', val);
      return this;
   }
   setFixedSubPalette(val) {
      this.#setConfig('fixedSubPalette', val);
      return this;
   }
   setColorLoopPalette(val) {
      this.#setConfig('hasColorLoopPalette', val);
      return this;
   }
   setSubColorLoopPalette(val) {
      this.#setConfig('hasSubColorLoopPalette', val);
      return this;
   }

   /* helper configs */
   addCustomColors(key, val) {
      let obj = Object.assign(this.#C.customColors, {
         [key]: val
      });
      this.#setConfig('customColors', obj);
      return this;
   }
   removeCustomColors(key) {
      delete this.#C.customColors[key];
      this.#grow();
      return this;
   }
   clearCustomColors(key) {
      this.#C.customColors = {};
      this.#grow();
      return this;
   }

   /* API */
   toggleTheme() {
      this.setTheme(isDarkmode() ? 'light' : 'dark');
      return this;
   }
   randomColor() {
      this.setColor(this.#CL.randomColor());
      return this;
   }
   isDarkmode() {
      if (this.#C.theme == 'auto') {
         return (this.#PCS.matches);
      } else {
         return (this.#C.theme == 'dark') ? true : false;
      }
   }
   currentTheme() {
      if (this.#C.theme == 'auto') {
         return (this.#PCS.matches) ? 'dark' : 'light';
      } else {
         return this.#C.theme;
      }
   }
   remove() {
      this.#O.styleElement?.remove();
      this.#O.styleElement = null;
      this.#O.commentNode?.remove();
      this.#O.commentNode = null;
      return this;
   }
   destroy() {
      this.remove();
      this.#O.subColorLoopPalette = {};
      this.#O.colorLoopPalette = {};
      this.#O.subPalette = {};
      this.#O.palette = {};
      this.#O.allPalettes = {};
      this.#O.code = {};
      return this;
   }

   //-------------------------
   //        Property 
   //-------------------------
   /*** Events ***/
   set onwarn(callback) {
      this.#E.addEventListener('warn', (e) => callback(e.detail));
   }
   set ongrow(callback) {
      this.#E.addEventListener('grow', (e) => callback(e.detail));
   }

   /*** Output ***/
   get output() {
      return this.#O
   }
   get palette() {
      return this.#O.palette;
   }
   get subPalette() {
      return this.#O.subPalette;
   }
   get colorLoopPalette() {
      return this.#O.colorLoopPalette;
   }
   get subColorLoopPalette() {
      return this.#O.subColorLoopPalette;
   }
   get allPalettes() {
      return this.#O.allPalettes;
   }
   get code() {
      return this.#O.code;
   }

   /*** Configs ***/
   set configs(val) {
      this.#setupConfigs(val);
   }
   get configs() {
      return this.#C;
   }

   set color(val) {
      this.setColor(val);
   }
   get color() {
      return this.#C.color;
   }

   set surfaceColor(val) {
      this.setSurfaceColor(val);
   }
   get surfaceColor() {
      return this.#C.surfaceColor;
   }

   set theme(val) {
      this.setTheme(val);
   }
   get theme() {
      return this.#C.theme;
   }

   set colorHarmony(val) {
      this.setColorHarmony(val);
   }
   get colorHarmony() {
      return this.#C.colorHarmony;
   }

   set contrast(val) {
      this.setContrast(val);
   }
   get contrast() {
      return this.#C.contrast;
   }

   set parts(val) {
      this.setParts(val);
   }
   get parts() {
      return this.#C.parts;
   }

   set prefers(val) {
      this.setPrefix(val);
   }
   get prefers() {
      return this.#C.prefers;
   }

   set customColors(val) {
      this.setCustomColors(val);
   }
   get customColors() {
      return this.#C.customColors;
   }

   set sprout(val) {
      this.setSprout(val);
   }
   get sprout() {
      return this.#C.sprout;
   }

   set hasPalette(val) {
      this.setPalette(val);
   }
   get hasPalette() {
      return this.#C.hasPalette;
   }

   set hasSubPalette(val) {
      this.setSubPalette(val);
   }
   get hasSubPalette() {
      return this.#C.hasSubPalette;
   }

   set reverseSubPalette(val) {
      this.setReverseSubPalette(val);
   }
   get reverseSubPalette() {
      return this.#C.reverseSubPalette;
   }

   set reverseSubPalette(val) {
      this.setReverseSubPalette(val);
   }
   get reverseSubPalette() {
      return this.#C.reverseSubPalette;
   }

   set fixedSubPalette(val) {
      this.setFixedSubPalette(val);
   }
   get fixedSubPalette() {
      return this.#C.fixedSubPalette;
   }

   set hasColorLoopPalette(val) {
      this.setColorLoopPalette(val);
   }
   get hasColorLoopPalette() {
      return this.#C.hasColorLoopPalette;
   }

   set hasSubColorLoopPalette(val) {
      this.setColorSubLoopPalette(val);
   }
   get hasSubColorLoopPalette() {
      return this.#C.hasSubColorLoopPalette;
   }
}
