import React from 'react';
import styled, { css } from 'styled-components'

const NORMAL_BUTTON = styled.button<{ $primary?: boolean; }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

const PRIMARY_BUTTON = styled.button<{ $primary?: boolean; }>`
  background: #BF4F74;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

function Button(props) {

    console.log('PROPS', props.$primary)

    return (
        <>
            {props.$primary ? <PRIMARY_BUTTON>{props.btnName}</PRIMARY_BUTTON> : <NORMAL_BUTTON>{props.btnName}</NORMAL_BUTTON>}
        </>
    )
}

export default Button;