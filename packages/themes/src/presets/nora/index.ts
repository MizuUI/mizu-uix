import type { Preset } from '@mizuuix/themes/types';
import type { NoraBaseDesignTokens } from './base/index.d';

import accordion from '@mizuuix/themes/nora/accordion';
import autocomplete from '@mizuuix/themes/nora/autocomplete';
import avatar from '@mizuuix/themes/nora/avatar';
import badge from '@mizuuix/themes/nora/badge';
import base from '@mizuuix/themes/nora/base';
import blockui from '@mizuuix/themes/nora/blockui';
import breadcrumb from '@mizuuix/themes/nora/breadcrumb';
import button from '@mizuuix/themes/nora/button';
import card from '@mizuuix/themes/nora/card';
import carousel from '@mizuuix/themes/nora/carousel';
import cascadeselect from '@mizuuix/themes/nora/cascadeselect';
import checkbox from '@mizuuix/themes/nora/checkbox';
import chip from '@mizuuix/themes/nora/chip';
import colorpicker from '@mizuuix/themes/nora/colorpicker';
import confirmdialog from '@mizuuix/themes/nora/confirmdialog';
import confirmpopup from '@mizuuix/themes/nora/confirmpopup';
import contextmenu from '@mizuuix/themes/nora/contextmenu';
import datatable from '@mizuuix/themes/nora/datatable';
import dataview from '@mizuuix/themes/nora/dataview';
import datepicker from '@mizuuix/themes/nora/datepicker';
import dialog from '@mizuuix/themes/nora/dialog';
import divider from '@mizuuix/themes/nora/divider';
import dock from '@mizuuix/themes/nora/dock';
import drawer from '@mizuuix/themes/nora/drawer';
import editor from '@mizuuix/themes/nora/editor';
import fieldset from '@mizuuix/themes/nora/fieldset';
import fileupload from '@mizuuix/themes/nora/fileupload';
import floatlabel from '@mizuuix/themes/nora/floatlabel';
import galleria from '@mizuuix/themes/nora/galleria';
import iconfield from '@mizuuix/themes/nora/iconfield';
import iftalabel from '@mizuuix/themes/nora/iftalabel';
import image from '@mizuuix/themes/nora/image';
import imagecompare from '@mizuuix/themes/nora/imagecompare';
import inlinemessage from '@mizuuix/themes/nora/inlinemessage';
import inplace from '@mizuuix/themes/nora/inplace';
import inputchips from '@mizuuix/themes/nora/inputchips';
import inputgroup from '@mizuuix/themes/nora/inputgroup';
import inputnumber from '@mizuuix/themes/nora/inputnumber';
import inputotp from '@mizuuix/themes/nora/inputotp';
import inputtext from '@mizuuix/themes/nora/inputtext';
import knob from '@mizuuix/themes/nora/knob';
import listbox from '@mizuuix/themes/nora/listbox';
import megamenu from '@mizuuix/themes/nora/megamenu';
import menu from '@mizuuix/themes/nora/menu';
import menubar from '@mizuuix/themes/nora/menubar';
import message from '@mizuuix/themes/nora/message';
import metergroup from '@mizuuix/themes/nora/metergroup';
import multiselect from '@mizuuix/themes/nora/multiselect';
import orderlist from '@mizuuix/themes/nora/orderlist';
import organizationchart from '@mizuuix/themes/nora/organizationchart';
import overlaybadge from '@mizuuix/themes/nora/overlaybadge';
import paginator from '@mizuuix/themes/nora/paginator';
import panel from '@mizuuix/themes/nora/panel';
import panelmenu from '@mizuuix/themes/nora/panelmenu';
import password from '@mizuuix/themes/nora/password';
import picklist from '@mizuuix/themes/nora/picklist';
import popover from '@mizuuix/themes/nora/popover';
import progressbar from '@mizuuix/themes/nora/progressbar';
import progressspinner from '@mizuuix/themes/nora/progressspinner';
import radiobutton from '@mizuuix/themes/nora/radiobutton';
import rating from '@mizuuix/themes/nora/rating';
import ripple from '@mizuuix/themes/nora/ripple';
import scrollpanel from '@mizuuix/themes/nora/scrollpanel';
import select from '@mizuuix/themes/nora/select';
import selectbutton from '@mizuuix/themes/nora/selectbutton';
import skeleton from '@mizuuix/themes/nora/skeleton';
import slider from '@mizuuix/themes/nora/slider';
import speeddial from '@mizuuix/themes/nora/speeddial';
import splitbutton from '@mizuuix/themes/nora/splitbutton';
import splitter from '@mizuuix/themes/nora/splitter';
import stepper from '@mizuuix/themes/nora/stepper';
import steps from '@mizuuix/themes/nora/steps';
import tabmenu from '@mizuuix/themes/nora/tabmenu';
import tabs from '@mizuuix/themes/nora/tabs';
import tabview from '@mizuuix/themes/nora/tabview';
import tag from '@mizuuix/themes/nora/tag';
import terminal from '@mizuuix/themes/nora/terminal';
import textarea from '@mizuuix/themes/nora/textarea';
import tieredmenu from '@mizuuix/themes/nora/tieredmenu';
import timeline from '@mizuuix/themes/nora/timeline';
import toast from '@mizuuix/themes/nora/toast';
import togglebutton from '@mizuuix/themes/nora/togglebutton';
import toggleswitch from '@mizuuix/themes/nora/toggleswitch';
import toolbar from '@mizuuix/themes/nora/toolbar';
import tooltip from '@mizuuix/themes/nora/tooltip';
import tree from '@mizuuix/themes/nora/tree';
import treeselect from '@mizuuix/themes/nora/treeselect';
import treetable from '@mizuuix/themes/nora/treetable';
import virtualscroller from '@mizuuix/themes/nora/virtualscroller';

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
} satisfies Preset<NoraBaseDesignTokens>;
