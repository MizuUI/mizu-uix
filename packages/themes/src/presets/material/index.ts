import type { Preset } from '@mizuuix/themes/types';
import type { MaterialBaseDesignTokens } from './base/index.d';

import accordion from '@mizuuix/themes/material/accordion';
import autocomplete from '@mizuuix/themes/material/autocomplete';
import avatar from '@mizuuix/themes/material/avatar';
import badge from '@mizuuix/themes/material/badge';
import base from '@mizuuix/themes/material/base';
import blockui from '@mizuuix/themes/material/blockui';
import breadcrumb from '@mizuuix/themes/material/breadcrumb';
import button from '@mizuuix/themes/material/button';
import card from '@mizuuix/themes/material/card';
import carousel from '@mizuuix/themes/material/carousel';
import cascadeselect from '@mizuuix/themes/material/cascadeselect';
import checkbox from '@mizuuix/themes/material/checkbox';
import chip from '@mizuuix/themes/material/chip';
import colorpicker from '@mizuuix/themes/material/colorpicker';
import confirmdialog from '@mizuuix/themes/material/confirmdialog';
import confirmpopup from '@mizuuix/themes/material/confirmpopup';
import contextmenu from '@mizuuix/themes/material/contextmenu';
import datatable from '@mizuuix/themes/material/datatable';
import dataview from '@mizuuix/themes/material/dataview';
import datepicker from '@mizuuix/themes/material/datepicker';
import dialog from '@mizuuix/themes/material/dialog';
import divider from '@mizuuix/themes/material/divider';
import dock from '@mizuuix/themes/material/dock';
import drawer from '@mizuuix/themes/material/drawer';
import editor from '@mizuuix/themes/material/editor';
import fieldset from '@mizuuix/themes/material/fieldset';
import fileupload from '@mizuuix/themes/material/fileupload';
import floatlabel from '@mizuuix/themes/material/floatlabel';
import galleria from '@mizuuix/themes/material/galleria';
import iconfield from '@mizuuix/themes/material/iconfield';
import iftalabel from '@mizuuix/themes/material/iftalabel';
import image from '@mizuuix/themes/material/image';
import imagecompare from '@mizuuix/themes/material/imagecompare';
import inlinemessage from '@mizuuix/themes/material/inlinemessage';
import inplace from '@mizuuix/themes/material/inplace';
import inputchips from '@mizuuix/themes/material/inputchips';
import inputgroup from '@mizuuix/themes/material/inputgroup';
import inputnumber from '@mizuuix/themes/material/inputnumber';
import inputotp from '@mizuuix/themes/material/inputotp';
import inputtext from '@mizuuix/themes/material/inputtext';
import knob from '@mizuuix/themes/material/knob';
import listbox from '@mizuuix/themes/material/listbox';
import megamenu from '@mizuuix/themes/material/megamenu';
import menu from '@mizuuix/themes/material/menu';
import menubar from '@mizuuix/themes/material/menubar';
import message from '@mizuuix/themes/material/message';
import metergroup from '@mizuuix/themes/material/metergroup';
import multiselect from '@mizuuix/themes/material/multiselect';
import orderlist from '@mizuuix/themes/material/orderlist';
import organizationchart from '@mizuuix/themes/material/organizationchart';
import overlaybadge from '@mizuuix/themes/material/overlaybadge';
import paginator from '@mizuuix/themes/material/paginator';
import panel from '@mizuuix/themes/material/panel';
import panelmenu from '@mizuuix/themes/material/panelmenu';
import password from '@mizuuix/themes/material/password';
import picklist from '@mizuuix/themes/material/picklist';
import popover from '@mizuuix/themes/material/popover';
import progressbar from '@mizuuix/themes/material/progressbar';
import progressspinner from '@mizuuix/themes/material/progressspinner';
import radiobutton from '@mizuuix/themes/material/radiobutton';
import rating from '@mizuuix/themes/material/rating';
import ripple from '@mizuuix/themes/material/ripple';
import scrollpanel from '@mizuuix/themes/material/scrollpanel';
import select from '@mizuuix/themes/material/select';
import selectbutton from '@mizuuix/themes/material/selectbutton';
import skeleton from '@mizuuix/themes/material/skeleton';
import slider from '@mizuuix/themes/material/slider';
import speeddial from '@mizuuix/themes/material/speeddial';
import splitbutton from '@mizuuix/themes/material/splitbutton';
import splitter from '@mizuuix/themes/material/splitter';
import stepper from '@mizuuix/themes/material/stepper';
import steps from '@mizuuix/themes/material/steps';
import tabmenu from '@mizuuix/themes/material/tabmenu';
import tabs from '@mizuuix/themes/material/tabs';
import tabview from '@mizuuix/themes/material/tabview';
import tag from '@mizuuix/themes/material/tag';
import terminal from '@mizuuix/themes/material/terminal';
import textarea from '@mizuuix/themes/material/textarea';
import tieredmenu from '@mizuuix/themes/material/tieredmenu';
import timeline from '@mizuuix/themes/material/timeline';
import toast from '@mizuuix/themes/material/toast';
import togglebutton from '@mizuuix/themes/material/togglebutton';
import toggleswitch from '@mizuuix/themes/material/toggleswitch';
import toolbar from '@mizuuix/themes/material/toolbar';
import tooltip from '@mizuuix/themes/material/tooltip';
import tree from '@mizuuix/themes/material/tree';
import treeselect from '@mizuuix/themes/material/treeselect';
import treetable from '@mizuuix/themes/material/treetable';
import virtualscroller from '@mizuuix/themes/material/virtualscroller';

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
} satisfies Preset<MaterialBaseDesignTokens>;
