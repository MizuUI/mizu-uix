import type { Preset } from '@mizuuix/themes/types';
import type { AuraBaseDesignTokens } from './base/index.d';

import accordion from '@mizuuix/themes/aura/accordion';
import autocomplete from '@mizuuix/themes/aura/autocomplete';
import avatar from '@mizuuix/themes/aura/avatar';
import badge from '@mizuuix/themes/aura/badge';
import base from '@mizuuix/themes/aura/base';
import blockui from '@mizuuix/themes/aura/blockui';
import breadcrumb from '@mizuuix/themes/aura/breadcrumb';
import button from '@mizuuix/themes/aura/button';
import card from '@mizuuix/themes/aura/card';
import carousel from '@mizuuix/themes/aura/carousel';
import cascadeselect from '@mizuuix/themes/aura/cascadeselect';
import checkbox from '@mizuuix/themes/aura/checkbox';
import chip from '@mizuuix/themes/aura/chip';
import colorpicker from '@mizuuix/themes/aura/colorpicker';
import confirmdialog from '@mizuuix/themes/aura/confirmdialog';
import confirmpopup from '@mizuuix/themes/aura/confirmpopup';
import contextmenu from '@mizuuix/themes/aura/contextmenu';
import css from '@mizuuix/themes/aura/css';
import datatable from '@mizuuix/themes/aura/datatable';
import dataview from '@mizuuix/themes/aura/dataview';
import datepicker from '@mizuuix/themes/aura/datepicker';
import dialog from '@mizuuix/themes/aura/dialog';
import divider from '@mizuuix/themes/aura/divider';
import dock from '@mizuuix/themes/aura/dock';
import drawer from '@mizuuix/themes/aura/drawer';
import editor from '@mizuuix/themes/aura/editor';
import fieldset from '@mizuuix/themes/aura/fieldset';
import fileupload from '@mizuuix/themes/aura/fileupload';
import floatlabel from '@mizuuix/themes/aura/floatlabel';
import galleria from '@mizuuix/themes/aura/galleria';
import iconfield from '@mizuuix/themes/aura/iconfield';
import iftalabel from '@mizuuix/themes/aura/iftalabel';
import image from '@mizuuix/themes/aura/image';
import imagecompare from '@mizuuix/themes/aura/imagecompare';
import inlinemessage from '@mizuuix/themes/aura/inlinemessage';
import inplace from '@mizuuix/themes/aura/inplace';
import inputchips from '@mizuuix/themes/aura/inputchips';
import inputgroup from '@mizuuix/themes/aura/inputgroup';
import inputnumber from '@mizuuix/themes/aura/inputnumber';
import inputotp from '@mizuuix/themes/aura/inputotp';
import inputtext from '@mizuuix/themes/aura/inputtext';
import knob from '@mizuuix/themes/aura/knob';
import listbox from '@mizuuix/themes/aura/listbox';
import megamenu from '@mizuuix/themes/aura/megamenu';
import menu from '@mizuuix/themes/aura/menu';
import menubar from '@mizuuix/themes/aura/menubar';
import message from '@mizuuix/themes/aura/message';
import metergroup from '@mizuuix/themes/aura/metergroup';
import multiselect from '@mizuuix/themes/aura/multiselect';
import orderlist from '@mizuuix/themes/aura/orderlist';
import organizationchart from '@mizuuix/themes/aura/organizationchart';
import overlaybadge from '@mizuuix/themes/aura/overlaybadge';
import paginator from '@mizuuix/themes/aura/paginator';
import panel from '@mizuuix/themes/aura/panel';
import panelmenu from '@mizuuix/themes/aura/panelmenu';
import password from '@mizuuix/themes/aura/password';
import picklist from '@mizuuix/themes/aura/picklist';
import popover from '@mizuuix/themes/aura/popover';
import progressbar from '@mizuuix/themes/aura/progressbar';
import progressspinner from '@mizuuix/themes/aura/progressspinner';
import radiobutton from '@mizuuix/themes/aura/radiobutton';
import rating from '@mizuuix/themes/aura/rating';
import ripple from '@mizuuix/themes/aura/ripple';
import scrollpanel from '@mizuuix/themes/aura/scrollpanel';
import select from '@mizuuix/themes/aura/select';
import selectbutton from '@mizuuix/themes/aura/selectbutton';
import skeleton from '@mizuuix/themes/aura/skeleton';
import slider from '@mizuuix/themes/aura/slider';
import speeddial from '@mizuuix/themes/aura/speeddial';
import splitbutton from '@mizuuix/themes/aura/splitbutton';
import splitter from '@mizuuix/themes/aura/splitter';
import stepper from '@mizuuix/themes/aura/stepper';
import steps from '@mizuuix/themes/aura/steps';
import tabmenu from '@mizuuix/themes/aura/tabmenu';
import tabs from '@mizuuix/themes/aura/tabs';
import tabview from '@mizuuix/themes/aura/tabview';
import tag from '@mizuuix/themes/aura/tag';
import terminal from '@mizuuix/themes/aura/terminal';
import textarea from '@mizuuix/themes/aura/textarea';
import tieredmenu from '@mizuuix/themes/aura/tieredmenu';
import timeline from '@mizuuix/themes/aura/timeline';
import toast from '@mizuuix/themes/aura/toast';
import togglebutton from '@mizuuix/themes/aura/togglebutton';
import toggleswitch from '@mizuuix/themes/aura/toggleswitch';
import toolbar from '@mizuuix/themes/aura/toolbar';
import tooltip from '@mizuuix/themes/aura/tooltip';
import tree from '@mizuuix/themes/aura/tree';
import treeselect from '@mizuuix/themes/aura/treeselect';
import treetable from '@mizuuix/themes/aura/treetable';
import virtualscroller from '@mizuuix/themes/aura/virtualscroller';

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
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        datatable,
        dataview,
        datepicker,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        floatlabel,
        galleria,
        iconfield,
        iftalabel,
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
        paginator,
        panel,
        panelmenu,
        password,
        picklist,
        popover,
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
        splitbutton,
        splitter,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        tag,
        terminal,
        textarea,
        tieredmenu,
        timeline,
        toast,
        togglebutton,
        toggleswitch,
        toolbar,
        tooltip,
        tree,
        treeselect,
        treetable,
        virtualscroller
    },
    css
} satisfies Preset<AuraBaseDesignTokens>;
