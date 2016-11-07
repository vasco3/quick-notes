/**
 * Copyright (c) 2016-present Jorge Cuadra - All rights reserved
 */
import React from 'react'
import Head from 'next/head'
import { insertRule, style } from 'next/css'

export default () => (
  <div>
    <Head>
      <link rel="apple-touch-icon" sizes="57x57" href="/static/icons/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/static/icons/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/static/icons/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/static/icons/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/static/icons/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/static/icons/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/static/icons/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/static/icons/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/static/icons/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/static/icons/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png"/>
      <link rel="manifest" href="/static/icons/manifest.json"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/static/icons/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="description" content="Notepad online to type notes."/>
      <meta httpEquiv="content-type" content="text/html;charset=UTF-8"/>
      <title>Notepad</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
    </Head>

    <div className={style(styles.clipper)} />

    <textarea className={style(styles.sheet)} />

    <div className={style(styles.footer)}>
      <a href="/" className={style(styles.footerA)}>
        www.cuadranteweb.com
      </a>
    </div>
  </div>
)

insertRule(`
  html,
  body {
    background-color: #03A9F4;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`)

const styles = {
  clipper: {
    backgroundColor: '#FF5722',
    border: '0',
    borderBottom: '6px solid #E91E63',
    boxSizing: 'border-box',
    height: '14px',
    margin: '50px auto 0',
    width: '80%',
  },
  footer: {
    fontSize: '14px',
    fontWeight: '200',
    marginTop: '20px',
  },
  footerA: {
    color: '#FFEB3B',
  },
  sheet: {
    boxSizing: 'border-box',
    backgroundColor: '#fffff4',
    border: '1px solid #efe',
    boxShadow: '1px 9px 20px #3F51B5',
    color: '#2196F3',
    fontSize: '16px',
    lineHeight: '1.3',
    margin: '0 auto',
    minHeight: '500px',
    padding: '30px',
    width: '80%',
  },
}
