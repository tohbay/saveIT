import React from 'react';

import '../../assets/css/Dialog.css';
import '../../assets/css/LoginForm.css';


const ConfirmDialog = ({ hideConfirmDialog, createAccount, account, loading }) => (
  <div id='dlg-wrapper'>
    <div id='dlg-box'>
      <div id='dlg-header'>
        Creating Account
        {loading ? 
          <div style={{ float: 'right' }} className='loader' /> 
          : 
          <div />}
      </div>
      <div id='dlg-body'>
        You are creating an account:
        <span>{' '}
          Account <span id='accountType'>{account}</span>
        </span>
      </div>
      <div id='dlg-footer'>
        
        <button className='btn_n' onClick={hideConfirmDialog}>
          Cancel
        </button>
        <button className='btn_n' onClick={createAccount}>
          Proceed
        </button>
      </div>
    </div>
  </div>
);

export default ConfirmDialog;
