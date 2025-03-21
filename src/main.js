'use strict';
import './style.css';
import { setupFormVisibility } from './form-functionality/form-render';
import './form-functionality/form-submit';
import { renderNavList } from './nav-list-render';

// init form functionality
setupFormVisibility();

// init nav list
renderNavList();
