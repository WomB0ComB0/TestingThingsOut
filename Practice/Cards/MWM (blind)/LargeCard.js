import * as React from 'react';
import {Card as CardBig, Button, TextInput, Label} from 'flowbite-react';

export function BigCardComponent() {
  return (
    <>
      <>
        <CardBig>
          <div>
            <h3>Card title</h3>
          </div>
          <div>
            <Button>
              Continue
            </Button>
          </div>
        </CardBig>
      </>
    </>
  )
}