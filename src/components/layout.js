import React from 'react';
import { LiveConfig } from 'react-ui-doc/components';
import styled, * as sc from 'styled-components';
import * as UICore from '@deer-ui/core';
import * as UIUtils from '@deer-ui/core/utils';
import * as BaseFunc from '@mini-code/base-func';

import './style.css';

export default function Layout({ children }) {
  return (
    <>
      <LiveConfig
        modules={{
          react: React,
          '@deer-ui/core': UICore,
          '@deer-ui/core/utils': UIUtils,
          '@mini-code/base-func': BaseFunc,
          'styled-components': Object.assign(styled, sc),
        }}
      />
      {children}
    </>
  );
}
