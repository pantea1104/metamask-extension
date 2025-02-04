import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { BUTTON_VARIANT, Button } from '../../../components/component-library';
import SmartTransactionPopover from './smart-transactions-popover';

export default {
  title: 'Pages/Swaps/SmartTransactionsPopover',
  component: SmartTransactionPopover,
  argTypes: {
    isShowingModal: {
      control: 'boolean',
    },
  },
} as Meta<typeof SmartTransactionPopover>;

export const DefaultStory: StoryFn<typeof SmartTransactionPopover> = () => {
  const [{ isShowingModal }, updateArgs] = useArgs();
  const toggleModal = () => updateArgs({ isShowingModal: !isShowingModal });

  return (
    <>
      <Button variant={BUTTON_VARIANT.PRIMARY} onClick={toggleModal}>
        Open modal
      </Button>
      {isShowingModal && (
        <SmartTransactionPopover
          isOpen={isShowingModal}
          onEnableSmartTransactionsClick={() => {
            console.log('onEnableSmartTransactionsClick');
          }}
          onCloseSmartTransactionsOptInPopover={toggleModal}
        />
      )}
    </>
  );
};

DefaultStory.storyName = 'Default';
