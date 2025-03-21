'use strict';
import './style.css';
import { setupFormVisibility } from './form-functionality/form-render';
import './form-functionality/form-submit';
import { renderNavList } from './nav-functionality/nav-list-render';
import './nav-functionality/nav-list-clicked';

// init form functionality
setupFormVisibility();

// init nav list
renderNavList();

// handle new clicked list
