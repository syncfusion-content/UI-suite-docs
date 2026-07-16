---
layout: post
title: Vue 3 Getting started in Vue BlockEditor component | Syncfusion
description: Learn here all about Getting started in Syncfusion Vue BlockEditor component of Syncfusion Essential JS 2 and more.
canonical_url: "https://www.syncfusion.com/rich-text-editor-sdk/vue-block-editor"
control: BlockEditor
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the BlockEditor component in Vue 3

This article provides a step-by-step guide for setting up a [Vite](https://vitejs.dev/) project with a JavaScript environment and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> Vue BlockEditor component using the [Composition API](https://vuejs.org/guide/introduction.html#composition-api) / [Options API](https://vuejs.org/guide/introduction.html#options-api).

The `Composition API` is a new feature introduced in Vue.js 3 that provides an alternative way to organize and reuse component logic. It allows developers to write components as functions that use smaller, reusable functions called composition functions to manage their properties and behavior.

The `Options API` is the traditional way of writing Vue.js components, where the component logic is organized into a series of options that define the component's properties and behavior. These options include data, methods, computed properties, watchers, life cycle hooks, and more.

## Prerequisites

This guide uses Vite as the bundler and development environment. Install Node.js 24.13.0 or higher before proceeding. For detailed information about Vite's capabilities and configuration options, refer to the [Vite documentation](https://vitejs.dev/). For component-specific requirements, refer to [System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements).

## Create a Vue Application

To set-up a Vue application, run the following command.

```bash
npm create vite@latest my-app -- --template vue
```

This command will prompt you to install the required packages and start the application. Select the options as shown below.

![BlockEditor Initial setup](images/Initial-setup.png)

As Syncfusion packages are not installed yet, currently, the `No` option will be selected. Then, navigate to the project directory and install the dependencies using the following commands:

```bash
cd my-app
npm install
```

## Adding Syncfusion BlockEditor package

All available Essential JS 2 packages are published in the [npmjs.com](https://www.npmjs.com/search?q=ej2-vue) registry. Install the Vue BlockEditor component with the following command:

```bash
npm install @syncfusion/ej2-vue-blockeditor --save
```

## Adding CSS reference

Syncfusion provides multiple themes for the BlockEditor component. For a complete list of available themes, refer to the [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme#theme-packages).

To apply the [Tailwind 3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme, install the corresponding theme package by using the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme --save
```

The installed theme package includes an `index.css` file that automatically imports all the required dependency styles. Import the following stylesheet into the `<style>` section of **src/App.vue**.

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css';
```

I> To apply the application-specific styles correctly remove all the default styles from **src/style.css**.

## Adding BlockEditor component

Now, you can start adding the Vue BlockEditor component in the application. For getting started, add the BlockEditor component in **src/App.vue** file using following sample.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
    <div style="margin: 50px auto;">
        <ejs-blockeditor id="BlockEditor"></ejs-blockeditor>
    </div>
</template>

<script setup>
    import { BlockEditorComponent as EjsBlockeditor } from "@syncfusion/ej2-vue-blockeditor";
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css";
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
    <div style="margin: 50px auto;">
        <ejs-blockeditor id="BlockEditor"></ejs-blockeditor>
    </div>
</template>

<script>
import { BlockEditorComponent } from "@syncfusion/ej2-vue-blockeditor";

export default {
    name: "App",
    components: {
        'ejs-blockeditor': BlockEditorComponent
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css";
</style>

{% endhighlight %}
{% endtabs %}

## Run the application

Use the following command to run the application in the browser.

```bash
npm run dev
```

The output will appear as follows:

![Output](./images/block-editor-component.png)

## See also

* [Getting Started with Vue UI Components using Composition API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-composition)
* [Getting Started with Vue UI Components using Options API and TypeScript](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-ts-options)

For migrating from Vue 2 to Vue 3, refer to the [`migration`](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-vue-cli#migration-from-vue-2-to-vue-3) documentation.

N> Looking for the full Vue BlockEditor component overview, features, pricing, and documentation? Visit the [Vue BlockEditor](https://www.syncfusion.com/vue-components/vue-blockeditor) page.
