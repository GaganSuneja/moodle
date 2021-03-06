// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Template renderer for Moodle. Load and render Moodle templates with Mustache.
 *
 * @module     core/templates
 * @package    core
 * @class      templates
 * @copyright  2015 Damyon Wiese <damyon@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @since      2.9
 */
define(['jquery', './tether'], function(jQuery, Tether) {

    window.jQuery = jQuery;
    window.Tether = Tether;

    require(['theme_boost/util',
            'theme_boost/alert',
            'theme_boost/button',
            'theme_boost/carousel',
            'theme_boost/collapse',
            'theme_boost/dropdown',
            'theme_boost/modal',
            'theme_boost/scrollspy',
            'theme_boost/tab',
            'theme_boost/tooltip',
            'theme_boost/popover'],
            function(another) {
        jQuery('[data-toggle="popover"]').popover();
    });

    return {};
});
