
/* IMPORT */

import $ from '../methods/S'
import $$ from '../methods/SS'
import batch from '../methods/batch'
import createContext from '../methods/create_context'
import createDirective from '../methods/create_directive'
import createElement from '../methods/create_element'
import cloneElement from '../methods/clone_element'
import h from '../methods/h'
import html from '../methods/html'
import isBatching from '../methods/is_batching'
import isObservable from '../methods/is_observable'
import isServer from '../methods/is_server'
import isStore from '../methods/is_store'
import lazy from '../methods/lazy'
import render from '../methods/render'
import renderToString from '../methods/render_to_string'
import resolve from '../methods/resolve'
import store from '../methods/store'
import template from '../methods/template'
import untrack from '../methods/untrack'
export * from '../methods/merge_style';
export * from '../methods/wrap_clone_element'

/* EXPORT */

export { $, $$, batch, createContext, createDirective, createElement, h, html, isBatching, isObservable, isServer, isStore, lazy, render, renderToString, resolve, store, template, untrack, cloneElement }
