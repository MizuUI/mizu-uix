import type { Preset } from '@mizuuix/themes/types';
import type { LaraBaseDesignTokens } from './base/index.d';

import accordion from '@mizuuix/themes/lara/accordion';
import autocomplete from '@mizuuix/themes/lara/autocomplete';
import avatar from '@mizuuix/themes/lara/avatar';
import badge from '@mizuuix/themes/lara/badge';
import base from '@mizuuix/themes/lara/base';
import blockui from '@mizuuix/themes/lara/blockui';
import breadcrumb from '@mizuuix/themes/lara/breadcrumb';
import button from '@mizuuix/themes/lara/button';
import card from '@mizuuix/themes/lara/card';
import carousel from '@mizuuix/themes/lara/carousel';
import cascadeselect from '@mizuuix/themes/lara/cascadeselect';
import checkbox from '@mizuuix/themes/lara/checkbox';
import chip from '@mizuuix/themes/lara/chip';
import colorpicker from '@mizuuix/themes/lara/colorpicker';
import confirmdialog from '@mizuuix/themes/lara/confirmdialog';
import confirmpopup from '@mizuuix/themes/lara/confirmpopup';
import contextmenu from '@mizuuix/themes/lara/contextmenu';
import datatable from '@mizuuix/themes/lara/datatable';
import dataview from '@mizuuix/themes/lara/dataview';
import datepicker from '@mizuuix/themes/lara/datepicker';
import dialog from '@mizuuix/themes/lara/dialog';
import divider from '@mizuuix/themes/lara/divider';
import dock from '@mizuuix/themes/lara/dock';
import drawer from '@mizuuix/themes/lara/drawer';
import editor from '@mizuuix/themes/lara/editor';
import fieldset from '@mizuuix/themes/lara/fieldset';
import fileupload from '@mizuuix/themes/lara/fileupload';
import floatlabel from '@mizuuix/themes/lara/floatlabel';
import galleria from '@mizuuix/themes/lara/galleria';
import iconfield from '@mizuuix/themes/lara/iconfield';
import iftalabel from '@mizuuix/themes/lara/iftalabel';
import image from '@mizuuix/themes/lara/image';
import imagecompare from '@mizuuix/themes/lara/imagecompare';
import inlinemessage from '@mizuuix/themes/lara/inlinemessage';
import inplace from '@mizuuix/themes/lara/inplace';
import inputchips from '@mizuuix/themes/lara/inputchips';
import inputgroup from '@mizuuix/themes/lara/inputgroup';
import inputnumber from '@mizuuix/themes/lara/inputnumber';
import inputotp from '@mizuuix/themes/lara/inputotp';
import inputtext from '@mizuuix/themes/lara/inputtext';
import knob from '@mizuuix/themes/lara/knob';
import listbox from '@mizuuix/themes/lara/listbox';
import megamenu from '@mizuuix/themes/lara/megamenu';
import menu from '@mizuuix/themes/lara/menu';
import menubar from '@mizuuix/themes/lara/menubar';
import message from '@mizuuix/themes/lara/message';
import metergroup from '@mizuuix/themes/lara/metergroup';
import multiselect from '@mizuuix/themes/lara/multiselect';
import orderlist from '@mizuuix/themes/lara/orderlist';
import organizationchart from '@mizuuix/themes/lara/organizationchart';
import overlaybadge from '@mizuuix/themes/lara/overlaybadge';
import paginator from '@mizuuix/themes/lara/paginator';
import panel from '@mizuuix/themes/lara/panel';
import panelmenu from '@mizuuix/themes/lara/panelmenu';
import password from '@mizuuix/themes/lara/password';
import picklist from '@mizuuix/themes/lara/picklist';
import popover from '@mizuuix/themes/lara/popover';
import progressbar from '@mizuuix/themes/lara/progressbar';
import progressspinner from '@mizuuix/themes/lara/progressspinner';
import radiobutton from '@mizuuix/themes/lara/radiobutton';
import rating from '@mizuuix/themes/lara/rating';
import ripple from '@mizuuix/themes/lara/ripple';
import scrollpanel from '@mizuuix/themes/lara/scrollpanel';
import select from '@mizuuix/themes/lara/select';
import selectbutton from '@mizuuix/themes/lara/selectbutton';
import skeleton from '@mizuuix/themes/lara/skeleton';
import slider from '@mizuuix/themes/lara/slider';
import speeddial from '@mizuuix/themes/lara/speeddial';
import splitbutton from '@mizuuix/themes/lara/splitbutton';
import splitter from '@mizuuix/themes/lara/splitter';
import stepper from '@mizuuix/themes/lara/stepper';
import steps from '@mizuuix/themes/lara/steps';
import tabmenu from '@mizuuix/themes/lara/tabmenu';
import tabs from '@mizuuix/themes/lara/tabs';
import tabview from '@mizuuix/themes/lara/tabview';
import tag from '@mizuuix/themes/lara/tag';
import terminal from '@mizuuix/themes/lara/terminal';
import textarea from '@mizuuix/themes/lara/textarea';
import tieredmenu from '@mizuuix/themes/lara/tieredmenu';
import timeline from '@mizuuix/themes/lara/timeline';
import toast from '@mizuuix/themes/lara/toast';
import togglebutton from '@mizuuix/themes/lara/togglebutton';
import toggleswitch from '@mizuuix/themes/lara/toggleswitch';
import toolbar from '@mizuuix/themes/lara/toolbar';
import tooltip from '@mizuuix/themes/lara/tooltip';
import tree from '@mizuuix/themes/lara/tree';
import treeselect from '@mizuuix/themes/lara/treeselect';
import treetable from '@mizuuix/themes/lara/treetable';
import virtualscroller from '@mizuuix/themes/lara/virtualscroller';

export default {
    ...base,
    components: {
        accordion,
        autocomplete,
        avatar,
        badge,
        blockui,
        breadcrumb,
        button,
        datepicker,
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        dataview,
        datatable,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        iftalabel,
        floatlabel,
        galleria,
        iconfield,
        image,
        imagecompare,
        inlinemessage,
        inplace,
        inputchips,
        inputgroup,
        inputnumber,
        inputotp,
        inputtext,
        knob,
        listbox,
        megamenu,
        menu,
        menubar,
        message,
        metergroup,
        multiselect,
        orderlist,
        organizationchart,
        overlaybadge,
        popover,
        paginator,
        password,
        panel,
        panelmenu,
        picklist,
        progressbar,
        progressspinner,
        radiobutton,
        rating,
        ripple,
        scrollpanel,
        select,
        selectbutton,
        skeleton,
        slider,
        speeddial,
        splitter,
        splitbutton,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        textarea,
        tieredmenu,
        tag,
        terminal,
        timeline,
        togglebutton,
        toggleswitch,
        tree,
        treeselect,
        treetable,
        toast,
        toolbar,
        tooltip,
        virtualscroller
    }
} satisfies Preset<LaraBaseDesignTokens>;
