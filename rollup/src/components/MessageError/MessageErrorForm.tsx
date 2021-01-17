import React, { FC } from 'react';
import './style.scss';

const MessageErrorForm: FC<{ text: string }> = ({ text }) => (
  <span className="messageErrorForm">{text}</span>
);

export default MessageErrorForm;
