---
layout: post
title: Getting started in Vue Block Editor component | Syncfusion
description: Learn here all about Getting started in Syncfusion Vue Block Editor component of Syncfusion Essential JS 2 and more.
canonical_url: "https://www.syncfusion.com/vue-components/vue-block-editor"
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Block Editor component in Vue 2

This section explains how to create a simple Block Editor and configure its available functionalities in the Vue environment.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Dependencies

The Block Editor component depends on the following packages:

```js
|-- @syncfusion/ej2-vue-blockeditor
    |-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-inputs
```

## Create a Vue Application

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```

or

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
yarn run serve
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

<img src="https://ej2.syncfusion.com/vue/documentation/appearance/images/vue2-terminal.png" alt="Vue 2 project">

Once the `quickstart` project is set up with the default settings, you're ready to add Syncfusion<sup style="font-size:70%">&reg;</sup> components to it.

## Adding Syncfusion Block Editor package

All Syncfusion<sup style="font-size:70%">&reg;</sup> Vue packages are published on [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). Install the Vue Block Editor package by running the following command:

```bash
npm install @syncfusion/ej2-vue-blockeditor --save
```
or

```bash
yarn add @syncfusion/ej2-vue-blockeditor
```

## Adding CSS reference

To install the [tailwind3](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) theme package, use the following command:

```bash
npm install @syncfusion/ej2-tailwind3-theme --save
```

To render the Block Editor component, import the required Tailwind3 CSS styles for the component and its dependencies into the `<style>` section of the **src/App.vue** file. This approach ensures that all necessary dependency styles are loaded, as shown below.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css";
</style>

{% endhighlight %}
{% endtabs %}

I> To apply the application-specific styles correctly, remove all the default styles from **src/style.css**.

## Adding Block Editor component

Follow the below steps to add the Vue Block Editor component using `Composition API` or `Options API`:

1\. First, import and register the Block Editor component in the `script` section of the **src/App.vue** file. If you are using the `Composition API`, you should add the `setup` attribute to the `script` tag to indicate that Vue will be using the `Composition API`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<script setup>
import { BlockEditorComponent as EjsBlockeditor  } from "@syncfusion/ej2-vue-blockeditor";
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
import { BlockEditorComponent  } from "@syncfusion/ej2-vue-blockeditor";
export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section define the Block Editor component.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
    <div id='container' style="margin: 50px auto;">
        <ejs-blockeditor></ejs-blockeditor>
    </div>
</template>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/block-editor/getting-started/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/block-editor/getting-started/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/getting-started/index" %}

## Run the application

Use the following command to run the application in the browser.

```bash
npm run serve
```

or

```bash
yarn run serve
```
For migrating from Vue 2 to Vue 3, refer to the [`migration`](https://ej2.syncfusion.com/vue/documentation/getting-started/vue-3-vue-cli#migration-from-vue-2-to-vue-3) documentation.

N> Looking for the full Vue Block Editor component overview, features, pricing, and documentation? Visit the [Vue Block Editor](https://www.syncfusion.com/vue-components/vue-block-editor) page.