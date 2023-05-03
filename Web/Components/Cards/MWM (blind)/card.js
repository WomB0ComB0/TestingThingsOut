import * as React from 'react';
import {Card as Card1, Button} from 'flowbite-react';

export function CardComponent() {
  return (
    <>
      <Card1>
        <div>
          <h3>Card title</h3>
        </div>
        <div>
          <Button>
            Continue
          </Button>
        </div>
      </Card1>
    </>
  )
}