"use strict";
// @flow
/*
 * This file is part of QR code library
 * git: https://github.com/cheprasov/js-qrcode
 *
 * (C) Alexander Cheprasov <acheprasov84@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
exports.__esModule = true;
var DimensionUtils = /** @class */ (function () {
    function DimensionUtils() {
    }
    DimensionUtils.calculateDimension = function (value, canvasSize) {
        if (typeof value === 'number') {
            return value;
        }
        if (typeof value === 'string' && value.indexOf('%') > 0) {
            return Math.round(parseFloat(value) / 100 * canvasSize) || 0;
        }
        return parseFloat(value) || 0;
    };
    DimensionUtils.calculatePosition = function (value, size, canvasSize) {
        if (typeof value === 'number') {
            return value;
        }
        if (typeof value !== 'string') {
            return 0;
        }
        if (value === 'left' || value === 'top') {
            return 0;
        }
        if (value === 'right' || value === 'bottom') {
            return canvasSize - size;
        }
        if (value === 'center') {
            return Math.round((canvasSize - size) / 2);
        }
        var match = value.match(/^(?:(right|bottom|left|top)\s+)?(-?[0-9.]+)(%)?$/);
        if (!match) {
            return 0;
        }
        var isRight = match[1] === 'right' || match[1] === 'bottom';
        var isPercent = !!match[3];
        var val = parseFloat(match[2]) || 0;
        if (isPercent) {
            val = Math.round(val / 100 * canvasSize);
        }
        if (isRight) {
            val = canvasSize - val - size;
        }
        return Math.round(val);
    };
    return DimensionUtils;
}());
exports["default"] = DimensionUtils;
