import React from 'react';
import classNames from 'classnames';
import { Button, InputGroup, FormGroup, Classes } from '@blueprintjs/core';

import '../Panel.scss';

type AuthTokenPanelProps = {
  authToken: string;
  onAuthTokenChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAccept: () => void;
  loading: boolean;
};

const AuthTokenPanel: React.FC<AuthTokenPanelProps> = ({ authToken, onAuthTokenChange, onAccept, loading }) => {
  return (
    <div className={classNames([[Classes.DIALOG_BODY], 'Panel--dialog-body'])}>
      <FormGroup label="GitHub personal access token">
        <InputGroup placeholder="Token" value={authToken || ''} onChange={onAuthTokenChange} />
      </FormGroup>

      <Button disabled={!authToken} onClick={onAccept} loading={loading} text="Connect" />
    </div>
  );
};

export default AuthTokenPanel;
